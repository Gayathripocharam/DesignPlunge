import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServicesIndex.module.css';
import type { Service } from '@/data/servicesData';

interface ServicesIndexProps {
  services: Service[];
}

const ServicesIndex: React.FC<ServicesIndexProps> = ({ services }) => (
  <div className={styles.wrapper}>
    <p className={styles.label}>WHAT WE DO</p>
    <nav className={styles.index} role="navigation" aria-label="Services index">
      {services.map((s, i) => (
        <motion.a
          key={s.id}
          href={`#${s.id}`}
          className={styles.item}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <span className={styles.num}>{s.id}</span>
          <span className={styles.title}>{s.title}</span>
          <span className={styles.arrow}>→</span>
        </motion.a>
      ))}
    </nav>
  </div>
);

export default ServicesIndex;
