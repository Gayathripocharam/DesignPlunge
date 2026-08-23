import React from 'react';
import styles from './ProblemToProductBridge.module.css';

const steps = [
  { num: '01', title: 'UNDERSTAND', description: 'Find the real problem.' },
  { num: '02', title: 'STRUCTURE', description: 'Define the product and system.' },
  { num: '03', title: 'BUILD', description: 'Design + engineer the solution.' },
  { num: '04', title: 'IMPROVE', description: 'Measure, refine, automate.' },
];

const ProblemToProductBridge: React.FC = () => (
  <div className={styles.bridge} role="list" aria-label="Problem to product workflow">
    {steps.map((step, i) => (
      <div key={step.num} className={styles.step} role="listitem">
        <div className={styles.num}>{step.num}</div>
        <div className={styles.title}>{step.title}</div>
        <div className={styles.desc}>{step.description}</div>
        {i < steps.length - 1 && <div className={styles.arrow}>↓</div>}
      </div>
    ))}
  </div>
);

export default ProblemToProductBridge;
