import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Diamond, Layout, Cpu, Layers, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./ServiceShowcase.module.css";
import { VisualMetaphor, type VisualMetaphorType } from "./VisualMetaphors";

import type { Service } from "@/content/services";

interface ServiceShowcaseProps {
  services: Service[];
}

const iconMap: Record<string, React.ReactNode> = {
  Diamond: <Diamond size={20} strokeWidth={1.5} />, // Digital Products
  Layout: <Layout size={20} strokeWidth={1.5} />, // Web Applications
  Cpu: <Cpu size={20} strokeWidth={1.5} />, // AI Systems
  Layers: <Layers size={20} strokeWidth={1.5} />, // Design Systems
};

// Helper removed as depth indicator is no longer used


const AUTOPLAY_MS = 4200;
const TICK_MS = 60;

const panelVariants = {
  enter: { opacity: 0, y: 34 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -26,
    transition: { duration: 0.35, ease: [0.65, 0, 0.35, 1] as const },
  },
};

export const ServiceShowcase: React.FC<ServiceShowcaseProps> = ({ services }) => {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [permanentlyPaused, setPermanentlyPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const activeService = services[active];
  const t = active / Math.max(services.length - 1, 1);

  // Reset progress when tab changes
  useEffect(() => {
    setProgress(0);
  }, [active]);

  // Autoplay timer – respects permanent pause
  useEffect(() => {
    if (permanentlyPaused) return;
    const id = setInterval(() => {
      setProgress((p) => Math.min(100, p + (100 * TICK_MS) / AUTOPLAY_MS));
    }, TICK_MS);
    return () => clearInterval(id);
  }, [active, permanentlyPaused]);

  // When progress reaches 100 % advance to next service
  useEffect(() => {
    if (progress >= 100) {
      setActive((a) => (a + 1) % services.length);
    }
  }, [progress, services.length]);

  const selectTab = (i: number) => {
    setActive(i);
    setProgress(0);
    setPermanentlyPaused(true);
  };

  // Parallax values for the visual area – subtle mouse‑driven motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 18 });
  const parallaxX = useTransform(springX, (v) => v * 10);
  const parallaxY = useTransform(springY, (v) => v * 10);

  const onVisualMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };


  return (
    <div className={styles.showcase}>
      {/* Left panel – visual + meta */}
      <div className={styles.panelColumn}>
        <div className={styles.panelFrame}>
          <motion.div
            className={styles.panelVisualArea}
            style={{ backgroundColor: "var(--bg)" }}
            onMouseMove={onVisualMouseMove}
          >
            <div className={styles.grain} style={{ opacity: 0.03 + t * 0.09 }} aria-hidden="true" />
            <div className={styles.vignette} style={{ opacity: 0.08 + t * 0.35 }} aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.iconLucide + active}
                variants={panelVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className={styles.panel}
                style={{ x: parallaxX, y: parallaxY }}
              >
                <VisualMetaphor type={activeService.slug as VisualMetaphorType} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <div className={styles.panelMeta}>
            <span className={styles.panelIcon}>{iconMap[activeService.iconLucide]}</span>
            <div className={styles.panelText}>
              <p className={styles.panelTitle}>{activeService.title}</p>
              <p className={styles.panelDesc}>{activeService.description}</p>
            </div>
            <Link to={`/services/${activeService.slug}`} className={styles.panelLink} aria-label={`View ${activeService.title}`}>
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>

      {/* Right column – service list */}
      <div className={styles.listColumn}>
        <div className={styles.depthRail} aria-hidden="true">
          <span className={styles.depthRailLine} />
          <motion.span
            className={styles.depthRailDot}
            animate={{ top: `${t * 100}%` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <ul className={styles.list}>
          {services.map((s, i) => {
            const isActive = i === active;
            return (
              <li key={s.title} className={styles.listItem}>
                <button
                  type="button"
                  id={`accordion-btn-${i}`}
                  aria-expanded={isActive}
                  aria-controls={`accordion-panel-${i}`}
                  className={`${styles.item} ${isActive ? styles.itemActive : ""}`}
                  onClick={() => selectTab(i)}
                >
                  <span className={styles.itemTop}>
                    <span className={styles.itemNum}>{String(i + 1).padStart(2, "0")}</span>
                    <span className={styles.itemTitleWrapper}>
                      <span className={styles.itemTitleIcon}>{iconMap[s.iconLucide]}</span>
                      <span className={styles.itemTitle}>{s.shortTitle}</span>
                    </span>
                    <motion.span 
                      className={styles.itemArrow}
                      animate={{ rotate: isActive ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight size={18} strokeWidth={1.5} />
                    </motion.span>
                  </span>
                  {!permanentlyPaused && (
                    <span className={styles.progressTrack}>
                      <span
                        className={styles.progressFill}
                        style={{ width: isActive ? `${progress}%` : "0%" }}
                      />
                    </span>
                  )}
                </button>
                <motion.div
                  id={`accordion-panel-${i}`}
                  role="region"
                  aria-labelledby={`accordion-btn-${i}`}
                  className={styles.accordionContent}
                  initial={false}
                  animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ 
                    height: { duration: prefersReducedMotion ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: prefersReducedMotion ? 0 : 0.2, delay: isActive && !prefersReducedMotion ? 0.1 : 0 }
                  }}
                  style={{ overflow: "hidden" }}
                >
                  <div className={styles.accordionInner}>
                    <p className={styles.accordionDesc}>{s.accordionDesc}</p>
                    <div className={styles.accordionCapabilities}>
                      <p className={styles.capabilitiesLabel}>What this can involve</p>
                      <p className={styles.capabilitiesList}>{s.capabilities.join(" · ")}</p>
                    </div>
                    <Link to={`/services/${s.slug}`} className={styles.accordionLink} tabIndex={isActive ? 0 : -1}>
                      Explore service &rarr;
                    </Link>
                  </div>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};


