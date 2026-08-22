import React from "react";
import styles from "./EngagementModels.module.css";

const models = [
  {
    title: "Product Build",
    text: "New digital products"
  },
  {
    title: "Design + Engineering",
    text: "Teams with a product direction"
  },
  {
    title: "AI Automation",
    text: "Repetitive operational workflows"
  },
  {
    title: "Ongoing Partnership",
    text: "Continuous product improvement"
  }
];

export const EngagementModels: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>WAYS TO WORK TOGETHER</h2>
        </div>

        <div className={styles.grid}>
          {models.map((model, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{model.title}</h3>
              <p className={styles.cardText}>{model.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
