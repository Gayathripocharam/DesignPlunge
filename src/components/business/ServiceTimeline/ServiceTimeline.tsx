import React from "react";
import styles from "./ServiceTimeline.module.css";

const stages = [
  { num: "01", title: "DISCOVER" },
  { num: "02", title: "DEFINE" },
  { num: "03", title: "DESIGN" },
  { num: "04", title: "BUILD" },
  { num: "05", title: "LAUNCH" },
];

export const ServiceTimeline: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.label}>HOW WE WORK</div>
          
          <div className={styles.timeline}>
            {stages.map((stage, idx) => (
              <div key={stage.num} className={styles.stage}>
                <div className={styles.stageHeader}>
                  <div className={styles.number}>{stage.num}</div>
                  <div className={styles.title}>{stage.title}</div>
                </div>
                {idx < stages.length - 1 && <div className={styles.arrow}>&rarr;</div>}
              </div>
            ))}
          </div>

          <p className={styles.summaryLine}>
            Clear decisions, fast feedback, shared ownership.
          </p>
        </div>
      </div>
    </section>
  );
};
