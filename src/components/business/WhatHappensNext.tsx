import React from "react";
import styles from "./WhatHappensNext.module.css";

const steps = [
  {
    number: "01",
    title: "Tell us what you're building"
  },
  {
    number: "02",
    title: "We review your problem + context"
  },
  {
    number: "03",
    title: "We propose the right approach"
  },
  {
    number: "04",
    title: "We start building"
  }
];

export const WhatHappensNext: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>What happens next?</h2>
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
