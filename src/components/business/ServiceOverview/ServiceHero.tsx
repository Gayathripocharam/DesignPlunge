import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServiceHero.module.css';

const META = ['Product Strategy', 'UX / UI Design', 'Engineering', 'AI & Automation'];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const ServiceHero: React.FC = () => (
  <div className={styles.hero}>
    <motion.p
      className={styles.eyebrow}
      custom={0}
      variants={fadeUp}
      initial="hidden"
      animate="show"
    >
      SERVICES
    </motion.p>

    <motion.h1
      className={styles.title}
      custom={1}
      variants={fadeUp}
      initial="hidden"
      animate="show"
    >
      We build digital systems for{' '}
      <span className={styles.titleAccent}>complex problems.</span>
    </motion.h1>

    <motion.p
      className={styles.lead}
      custom={2}
      variants={fadeUp}
      initial="hidden"
      animate="show"
    >
      From product strategy and UX to engineering, AI, and automation — we turn
      ambiguous ideas into useful products built to work in the real world.
    </motion.p>

    <motion.div
      className={styles.metaRail}
      custom={3}
      variants={fadeUp}
      initial="hidden"
      animate="show"
    >
      {META.map((item) => (
        <span key={item} className={styles.metaItem}>{item}</span>
      ))}
    </motion.div>
  </div>
);

export default ServiceHero;
