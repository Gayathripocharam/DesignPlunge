import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Users, Map, PenTool, Code2, Repeat } from 'lucide-react';

import { Section } from "@/components/ui/Section";
import styles from "./HowWeWork.module.css";

import { processSteps } from '@/content/studio';
import type { LucideIcon } from 'lucide-react';

// Icon mapping stays in the component — content files must not import UI libraries
const iconMap: Record<string, LucideIcon> = {
  research: Search,
  alignment: Users,
  strategy: Map,
  design: PenTool,
  engineering: Code2,
  iteration: Repeat,
};

const panelVariants = {
  enter: { opacity: 0, x: 20 },
  center: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.4, 
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.1
    } 
  },
  exit: { opacity: 0, x: -20, transition: { duration: 0.25, ease: [0.65, 0, 0.35, 1] as const } },
};

const itemVariants = {
  enter: { opacity: 0, y: 10 },
  center: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

/**
 * HowWeWork — horizontal stepper
 */
export interface HowWeWorkProps {
  spacingTop?: "none" | "medium" | "large";
  spacingBottom?: "none" | "medium" | "large";
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ spacingTop = "medium", spacingBottom = "medium" }) => {
  const [active, setActive] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (isInteracting) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % processSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInteracting]);

  const step = processSteps[active];
  const Icon = iconMap[step.id] ?? Search;

  return (
    <Section id="how-we-work" background="var(--bg)" spacingTop={spacingTop} spacingBottom={spacingBottom} className={styles.container}>
      <div 
        className={styles.inner}
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
        onFocus={() => setIsInteracting(true)}
        onBlur={() => setIsInteracting(false)}
      >
        <div className={styles.header}>
          <p className="section-marker">
             PROCESS
          </p>
          <p className={styles.eyebrow}>HOW WE WORK</p>
          <h2 className={styles.title}>From idea to launch</h2>
        </div>

        <div className={styles.stepperFrame}>
          <div className={styles.stepBar}>
            {processSteps.map((s, i) => (
              <button
                key={s.title}
                type="button"
                className={`${styles.stepBtn} ${i === active ? styles.stepBtnActive : ""}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
              >
                <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.stepLabel}>{s.title}</span>
                {i === active && (
                  <motion.div
                    className={styles.tabHighlight}
                    layoutId="howWeWorkHighlight"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className={styles.progressTrack}>
            <motion.div
              className={styles.progressFill}
              animate={{ width: `${((active + 1) / processSteps.length) * 100}%` }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className={styles.panel}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={panelVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className={styles.panelInner}
              >
                <motion.div variants={itemVariants} className={styles.panelIcon}>
                  <Icon size={22} strokeWidth={1.5} />
                </motion.div>
                <div className={styles.panelBody}>
                  <div className={styles.panelHeader}>
                    <motion.p variants={itemVariants} className={styles.panelDesc}>{step.desc}</motion.p>
                    <motion.div variants={itemVariants} className={styles.panelBadge}>
                      {step.badge}
                    </motion.div>
                  </div>
                  <motion.div variants={itemVariants} className={styles.youGet}>
                    <p className={styles.youGetLabel}>You get</p>
                    <p className={styles.youGetTags}>{step.tags.join(" · ")}</p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
};
