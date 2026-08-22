import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import styles from "./WhyDesignPlunge.module.css";

interface Principle {
  title: string;
  subtitle: string;
  flow: string[];
  meansTitle: string;
  meansDesc: string;
  tags: string[];
}

const principles: Principle[] = [
  {
    title: "Product thinking",
    subtitle: "Start with the problem, users and business context.",
    flow: ["PROBLEM", "USER", "PRODUCT"],
    meansTitle: "WHAT THIS MEANS",
    meansDesc: "We start by understanding the problem before deciding what to build.",
    tags: ["Problem definition", "User needs", "Product direction"],
  },
  {
    title: "Design + engineering",
    subtitle: "Design decisions stay connected to technical reality.",
    flow: ["DESIGN", "ENGINEERING"],
    meansTitle: "WHAT THIS MEANS",
    meansDesc: "Design decisions stay connected to technical reality from the beginning.",
    tags: ["UX architecture", "UI systems", "Technical validation"],
  },
  {
    title: "Purposeful AI",
    subtitle: "Use AI where it creates meaningful leverage — not because it's fashionable.",
    flow: ["HUMAN", "AI", "OUTCOME"],
    meansTitle: "WHAT THIS MEANS",
    meansDesc: "We use AI where it creates measurable leverage rather than adding complexity.",
    tags: ["Automation", "AI workflows", "Intelligent features"],
  },
  {
    title: "Long-term systems",
    subtitle: "Build foundations that remain useful after launch.",
    flow: ["PRODUCT", "SYSTEM", "SCALE"],
    meansTitle: "WHAT THIS MEANS",
    meansDesc: "We build foundations that remain useful as the product evolves.",
    tags: ["Architecture", "Design systems", "Documentation"],
  },
];

const panelVariants = {
  enter: { opacity: 0, y: 16 },
  center: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25, ease: [0.65, 0, 0.35, 1] as const } },
};

export const WhyDesignPlunge: React.FC = () => {
  const [active, setActive] = useState(0);
  const item = principles[active];

  return (
    <Section id="why-design-plunge" background="var(--bg)" className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className="section-marker">
             APPROACH
          </p>
          <p className={styles.eyebrow}>WHY DESIGN PLUNGE</p>
          <h2 className={styles.title}>
            We don't treat strategy, design and engineering as separate stages.
          </h2>
          <p className={styles.intro}>
            We bring them together early so decisions are made with the product, user and
            technology in mind.
          </p>
        </div>

        <div className={styles.stepperFrame}>
          <div className={styles.stepBar}>
            {principles.map((p, i) => (
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
              animate={{ width: `${((active + 1) / principles.length) * 100}%` }}
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
