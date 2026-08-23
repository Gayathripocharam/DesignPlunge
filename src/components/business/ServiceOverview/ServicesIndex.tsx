import React from 'react';
import styles from './ServicesIndex.module.css';
import type { Service } from '@/data/servicesData';

interface ServicesIndexProps {
  services: Service[];
}

const ServicesIndex: React.FC<ServicesIndexProps> = ({ services }) => (
  <div className={styles.index} role="navigation" aria-label="Services index">
    {services.map((s) => (
      <a key={s.id} href={`#${s.id}`} className={styles.item}>
        <span className={styles.num}>{s.id}</span>
        <span className={styles.title}>{s.title}</span>
        <span className={styles.arrow}>→</span>
      </a>
    ))}
  </div>
);

export default ServicesIndex;
