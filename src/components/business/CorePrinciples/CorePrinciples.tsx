import React, { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import styles from "./CorePrinciples.module.css";

import { corePrinciples } from '@/content/studio';

/**
 * CorePrinciples — Scrollytelling
 *
 * Pinned sticky section that advances principles based on scroll progress.
 */
export const CorePrinciples: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeIndex, setActiveIndex] = React.useState(0);

  // Derive active index (0 to 3) from scroll progress (0 to 1)
  useTransform(scrollYProgress, (latest) => {
    // 4 principles, so we divide 1.0 into 4 segments.
    // However, because we want it to stay at the last index at the very bottom,
    // we use a slight multiplier or math.min.
    const index = Math.min(Math.floor(latest * corePrinciples.length), corePrinciples.length - 1);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
    return latest;
  });

  // Calculate the progress fill for the horizontal line (0 to 1)
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className={styles.container} ref={containerRef}>
      <div className={styles.stickyWrapper}>
        <div className={styles.backgroundNumber} aria-hidden="true">
          {String(activeIndex + 1).padStart(2, '0')}
        </div>

        <div className={styles.inner}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>&mdash; HOW WE THINK</p>
            <h2 className={styles.title}>Our Core Principles</h2>
          </div>

          <div className={styles.contentDisplay}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={styles.activeCard}
              >
                <h3 className={styles.activeTitle}>{corePrinciples[activeIndex].title}</h3>
                <p className={styles.activeDesc}>{corePrinciples[activeIndex].desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.path}>
            <div className={styles.line} aria-hidden="true" />
            <motion.div 
              className={styles.lineFillDesktop} 
              style={{ scaleX, originX: 0 }} 
              aria-hidden="true" 
            />
            {corePrinciples.map((p, i) => (
              <div key={p.title} className={styles.node}>
                <span className={`${styles.dot} ${i <= activeIndex ? styles.dotActive : ""}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
