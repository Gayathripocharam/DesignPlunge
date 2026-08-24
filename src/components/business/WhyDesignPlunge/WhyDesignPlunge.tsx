import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import styles from "./WhyDesignPlunge.module.css";

export interface WhyPrinciple {
  title: string;
  subtitle: string;
  flow: string[];
  meansTitle: string;
  meansDesc: string;
  tags: string[];
}

export const whyPrinciples: WhyPrinciple[] = [
  {
    title: 'Design and engineering drift apart.',
    subtitle: 'One team, not a handoff. We build integrated systems.',
    flow: ['DESIGN', 'ENGINEERING'],
    meansTitle: 'WHAT THIS MEANS',
    meansDesc: 'Design decisions stay connected to technical reality from the beginning.',
    tags: ['Integrated teams', 'Fewer handoffs', 'Faster iteration'],
  },
  {
    title: 'Legacy architecture slows you down.',
    subtitle: 'We architect for scale and evolution, not just the immediate launch.',
    flow: ['PRODUCT', 'SYSTEM', 'SCALE'],
    meansTitle: 'WHAT THIS MEANS',
    meansDesc: 'We build foundations that remain useful and adaptable as the product evolves.',
    tags: ['Architecture', 'Design systems', 'Maintainability'],
  },
  {
    title: 'AI is hyped, but hard to integrate responsibly.',
    subtitle: 'AI as an accelerant. We use it where it creates meaningful leverage, not just for the sake of it.',
    flow: ['HUMAN', 'AI', 'OUTCOME'],
    meansTitle: 'WHAT THIS MEANS',
    meansDesc: 'We identify where AI can actually reduce friction or automate work effectively.',
    tags: ['Automation', 'Practical AI', 'Intelligent workflows'],
  },
];


const panelVariants = {
  enter: { opacity: 0, y: 16 },
  center: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25, ease: [0.65, 0, 0.35, 1] as const } },
};

export const WhyDesignPlunge: React.FC = () => {
  const [active, setActive] = useState(0);
  const item = whyPrinciples[active];

  return (
    <Section id="why-design-plunge" background="var(--bg)" className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className="section-marker">
             APPROACH
          </p>
          <p className={styles.eyebrow}>WHY DESIGN PLUNGE</p>
          <h2 className={styles.title}>
            Why products become difficult to evolve
          </h2>
          <p className={styles.intro}>
            Complex UX, legacy systems, and the disconnect between design and engineering slow teams down. We fix the disconnect.
          </p>
        </div>

        <div className={styles.stepperFrame}>
          <div className={styles.stepBar}>
            {whyPrinciples.map((p, i) => (
              <button
                key={p.title}
                type="button"
                className={`${styles.stepBtn} ${i === active ? styles.stepBtnActive : ""}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
              >
                <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.stepLabel}>{p.title}</span>
              </button>
            ))}
          </div>

          <div className={styles.progressTrack}>
            <motion.div
              className={styles.progressFill}
              animate={{ width: `${((active + 1) / whyPrinciples.length) * 100}%` }}
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
                <p className={styles.panelSubtitle}>{item.subtitle}</p>

                <div className={styles.flowRow}>
                  {item.flow.map((f, i) => (
                    <React.Fragment key={f}>
                      <span className={styles.flowPill}>{f}</span>
                      {i < item.flow.length - 1 && <span className={styles.flowArrow}>&rarr;</span>}
                    </React.Fragment>
                  ))}
                </div>

                <p className={styles.meansLabel}>{item.meansTitle}</p>
                <p className={styles.meansDesc}>{item.meansDesc}</p>
                <p className={styles.tags}>{item.tags.join(" · ")}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
};
