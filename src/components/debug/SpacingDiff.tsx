import React from "react";
import styles from "./SpacingDiff.module.css";

/* This component visualizes the vertical spacing used between sections.
   It shows the current values of the global CSS variables and renders
   sample blocks to illustrate the gap.
*/

export const SpacingDiff: React.FC = () => {
  // Retrieve CSS custom properties from the root element
  const root = document.documentElement;
  const spacingSection = getComputedStyle(root).getPropertyValue("--spacing-section").trim();
  const spacingGap = getComputedStyle(root).getPropertyValue("--spacing-gap").trim();

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Vertical Spacing Overview</h2>
      <p className={styles.description}>Current global spacing values (after adjustment):</p>
      <ul className={styles.list}>
        <li>
          <strong>Section padding (top/bottom): </strong>
          <code>{spacingSection || "var(--spacing-section)"}</code>
        </li>
        <li>
          <strong>Section gap (margin‑bottom): </strong>
          <code>{spacingGap || "var(--spacing-gap)"}</code>
        </li>
      </ul>
      <div className={styles.demo}>
        <div className={styles.block}>Block A</div>
        <div className={styles.block}>Block B</div>
        <div className={styles.block}>Block C</div>
      </div>
      <p className={styles.note}>The space between the grey blocks reflects the current <code>.section-gap</code> margin.</p>
    </section>
  );
};
