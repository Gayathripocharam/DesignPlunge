import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, PenTool, Users, Code2, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import styles from "./HowWeWork.module.css";

interface Step {
  title: string;
  desc: string;
  tags: string[];
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    title: "Discover",
    desc: "Understand the business, users and constraints.",
    tags: ["Problem definition", "Requirements", "Opportunity map"],
    icon: Search,
  },
  {
    title: "Define",
    desc: "Turn ambiguity into a clear product direction.",
    tags: ["Personas", "User flows", "Scope"],
    icon: PenTool,
  },
  {
    title: "Design",
    desc: "Create and validate the experience.",
    tags: ["UX flows", "UI system", "Prototype"],
    icon: Users,
  },
  {
    title: "Build",
    desc: "Turn the validated design into production software.",
    tags: ["Frontend", "Backend", "Integrations"],
    icon: Code2,
  },
  {
    title: "Launch",
    desc: "Ship, measure and improve.",
    tags: ["Deployment", "QA", "Handoff"],
    icon: Rocket,
  },
];

const panelVariants = {
  enter: { opacity: 0, y: 16 },
  center: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25, ease: [0.65, 0, 0.35, 1] as const } },
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
  const step = steps[active];
  const Icon = step.icon;

  return (
    <Section id="how-we-work" background="var(--bg)" spacingTop={spacingTop} spacingBottom={spacingBottom} className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className="section-marker">
             PROCESS
          </p>
          <p className={styles.eyebrow}>HOW WE WORK</p>
          <h2 className={styles.title}>From idea to launch</h2>
        </div>

        <div className={styles.stepperFrame}>
          <div className={styles.stepBar}>
            {steps.map((s, i) => (
              <button
                key={s.title}
                type="button"
                className={`${styles.stepBtn} ${i === active ? styles.stepBtnActive : ""}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
              >
                <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.stepLabel}>{s.title}</span>
              </button>
            ))}
          </div>

          <div className={styles.progressTrack}>
            <motion.div
              className={styles.progressFill}
              animate={{ width: `${((active + 1) / steps.length) * 100}%` }}
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
                <div className={styles.panelIcon}>
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div className={styles.panelBody}>
                  <p className={styles.panelDesc}>{step.desc}</p>
                  <div className={styles.youGet}>
                    <p className={styles.youGetLabel}>You get</p>
                    <p className={styles.youGetTags}>{step.tags.join(" · ")}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
};
