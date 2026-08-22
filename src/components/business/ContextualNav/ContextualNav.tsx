import React from "react";
import { Link } from "react-router-dom";
import styles from "./ContextualNav.module.css";

interface Step {
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    title: "Tell us what you're building",
    desc: "A short description of the product, problem, or workflow.",
  },
  {
    title: "We understand the context",
    desc: "We review your goals, constraints, users, and current situation.",
  },
  {
    title: "We define the next step",
    desc: "If there's a fit, we discuss the right way to move forward.",
  },
];

interface ContextualNavProps {
  label?: string;
  title?: React.ReactNode;
  subtitle?: string;
  buttonText?: string;
  to?: string;
  spacingTop?: "none" | "medium" | "large";
  spacingBottom?: "none" | "medium" | "large";
}

export const ContextualNav: React.FC<ContextualNavProps> = ({
  label = "LET'S BUILD",
  title = <>Ready to turn the idea<br />into something real?</>,
  subtitle = "Tell us what you're building, improving, or trying to automate.\nWe'll review the context and come back with clear next steps.",
  buttonText = "START A PROJECT \u2192",
  to = "/contact",
  spacingTop = "medium",
  spacingBottom = "medium"
}) => {
  return (
    <section className={`${styles.container} ${styles[`pt-${spacingTop}`]} ${styles[`pb-${spacingBottom}`]}`}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <div className="container">
        <div className={styles.hero}>
          {label && <p className={styles.eyebrow}>{label}</p>}
          <h2 className={styles.headline}>
            {title}
          </h2>
          {subtitle && (
            <p className={styles.subline}>
              {typeof subtitle === "string" 
                ? subtitle.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)
                : subtitle}
            </p>
          )}
          <p className={styles.forWho}>FOR STARTUPS, PRODUCT TEAMS &amp; GROWING BUSINESSES.</p>

          <Link to={to} className={styles.cta}>
            {buttonText}
          </Link>
          <p className={styles.noCommitment}>No commitment &middot; Just a first conversation</p>
        </div>

        <div className={styles.stepsRow}>
          {steps.map((s, i) => (
            <div key={s.title} className={styles.step}>
              <p className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</p>
              <p className={styles.stepTitle}>{s.title}</p>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
