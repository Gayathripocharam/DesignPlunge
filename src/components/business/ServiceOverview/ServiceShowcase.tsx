import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Diamond, Layout, Cpu, Layers, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./ServiceShowcase.module.css";
import { VisualMetaphor } from "./VisualMetaphors";

import type { CanonicalService } from "@/content/services";

interface ServiceShowcaseProps {
  services: CanonicalService[];
}

const iconMap: Record<string, React.ReactNode> = {
  Diamond: <Diamond size={20} strokeWidth={1.5} />, // Digital Products
  Layout: <Layout size={20} strokeWidth={1.5} />, // Web Applications
  Cpu: <Cpu size={20} strokeWidth={1.5} />, // AI Systems
  Layers: <Layers size={20} strokeWidth={1.5} />, // Design Systems
};

// Helper to calculate depth label for each service index
const depthFor = (index: number, total: number) => `${Math.round((index / Math.max(total - 1, 1)) * 120)}m`;



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
  const [paused, setPaused] = useState(false);

  const activeService = services[active];
  const t = active / Math.max(services.length - 1, 1);

  // Reset progress when tab changes
  useEffect(() => {
    setProgress(0);
  }, [active]);

  // Autoplay timer – respects pause state on hover
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setProgress((p) => Math.min(100, p + (100 * TICK_MS) / AUTOPLAY_MS));
    }, TICK_MS);
    return () => clearInterval(id);
  }, [active, paused]);

  // When progress reaches 100 % advance to next service
  useEffect(() => {
    if (progress >= 100) {
      setActive((a) => (a + 1) % services.length);
    }
  }, [progress, services.length]);

  const selectTab = (i: number) => {
    setActive(i);
    setProgress(0);
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
    <div
      className={styles.showcase}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
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
                <VisualMetaphor type={activeService.id as any} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <div className={styles.panelMeta}>
            <span className={styles.panelIcon}>{iconMap[activeService.iconLucide]}</span>
            <div className={styles.panelText}>
              <p className={styles.panelTitle}>{activeService.title}</p>
              <p className={styles.panelDesc}>{activeService.description}</p>
            </div>
            <Link to={activeService.slug} className={styles.panelLink} aria-label={`View ${activeService.title}`}>
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
          {services.map((s, i) => (
            <li key={s.title}>
              <button
                type="button"
                className={`${styles.item} ${i === active ? styles.itemActive : ""}`}
                onClick={() => selectTab(i)}
              >
                <span className={styles.itemTop}>
                  <span className={styles.itemNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.itemTitle}>{s.shortTitle}</span>
                  <span className={styles.itemDepth}>{depthFor(i, services.length)}</span>
                </span>
                <span className={styles.progressTrack}>
                  <span
                    className={styles.progressFill}
                    style={{ width: i === active ? `${progress}%` : "0%" }}
                  />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


