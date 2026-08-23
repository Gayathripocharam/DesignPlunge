import React from 'react';
import styles from './ServiceHero.module.css';

const META = ['Product Strategy', 'UX / UI', 'Engineering', 'AI & Automation'];

const ServiceHero: React.FC = () => (
  <div className={styles.hero}>
    <p className={styles.eyebrow}>SERVICES</p>
    <h1 className={styles.title}>We build digital systems for complex problems.</h1>
    <p className={styles.lead}>
      From product strategy and UX to engineering, AI, and automation, we turn ambiguous
      ideas into useful products built to work in the real world.
    </p>
    <div className={styles.metaRail}>
      {META.map((item) => (
        <span key={item} className={styles.metaItem}>{item}</span>
      ))}
    </div>
  </div>
);

export default ServiceHero;
