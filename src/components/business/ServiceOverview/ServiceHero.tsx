import React from 'react';
import styles from './ServiceHero.module.css';

const ServiceHero: React.FC = () => (
  <div className={styles.hero}>
    <h1 className={styles.title}>WE BUILD DIGITAL SYSTEMS FOR COMPLEX PROBLEMS.</h1>
    <p className={styles.lead}>
      From product strategy and UX to engineering, AI, and automation, we turn ambiguous ideas into useful products that are built to work in the real world.
    </p>
    <div className={styles.meta}>PRODUCT STRATEGY · UX/UI · ENGINEERING · AI</div>
  </div>
);

export default ServiceHero;
