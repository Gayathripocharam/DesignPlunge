import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProblemToProductBridge.module.css';

const steps = [
  { num: '01', title: 'Understand', description: 'Map the real problem, user needs and constraints before anything is built.' },
  { num: '02', title: 'Structure', description: 'Define the product direction — what to build, in what order, and why.' },
  { num: '03', title: 'Build', description: 'Design and engineer the solution in one connected team, not sequential handoffs.' },
  { num: '04', title: 'Improve', description: 'Measure outcomes, refine the experience and automate what slows the team down.' },
];

const ProblemToProductBridge: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      <p className={styles.eyebrow}>HOW WE WORK</p>
      <h2 className={styles.title}>From complex problem to working product.</h2>
    </div>

    <div className={styles.rail} role="list" aria-label="Process steps">
      {steps.map((step, i) => (
        <motion.div
          key={step.num}
          className={styles.step}
          role="listitem"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.num}>{step.num}</p>
          <h3 className={styles.stepTitle}>{step.title}</h3>
          <p className={styles.desc}>{step.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default ProblemToProductBridge;
