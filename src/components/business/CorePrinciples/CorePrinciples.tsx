import React from "react";
import styles from "./CorePrinciples.module.css";

interface Principle {
  title: string;
  desc: string;
}

const principles: Principle[] = [
  { title: "Build the right thing", desc: "Validate hypotheses before writing code." },
  { title: "Simplicity wins", desc: "Complex systems should feel simple." },
  { title: "Design with constraints", desc: "Respects technical and business reality." },
  { title: "AI with purpose", desc: "Leverage, not just for show." },
  { title: "Systems over screens", desc: "Scalable foundations, not isolated interfaces." },
];

/**
 * CorePrinciples — horizontal path
 *
 * 5 principles laid out left to right along a connecting line, first
 * dot filled (start of the path), rest outlined. No hidden state, no
 * oversized decorative numerals — everything is visible at once.
 */
export const CorePrinciples: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <p className={styles.eyebrow}>&mdash; HOW WE THINK</p>
        <h2 className={styles.title}>Our Core Principles</h2>

        <div className={styles.path}>
          <div className={styles.line} aria-hidden="true" />
          {principles.map((p, i) => (
            <div key={p.title} className={styles.node}>
              <span className={`${styles.dot} ${i === 0 ? styles.dotFilled : ""}`} />
              <p className={styles.nodeTitle}>{p.title}</p>
              <p className={styles.nodeDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
