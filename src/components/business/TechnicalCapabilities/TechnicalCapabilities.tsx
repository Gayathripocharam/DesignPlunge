import React from 'react';
import { Section } from '@/components/ui/Section';
import styles from './TechnicalCapabilities.module.css';
import { technicalCapabilities } from '@/content/capabilities';

export const TechnicalCapabilities: React.FC = () => {
  return (
    <Section id="technical-capabilities" background="var(--bg)" className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className="section-marker">CAPABILITIES</p>
          <h2 className={styles.title}>Design decisions backed by engineering depth.</h2>
        </div>

        <div className={styles.grid}>
          {technicalCapabilities.map((cap, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <p className={styles.cardEyebrow}>CAPABILITY</p>
                <h3 className={styles.cardTitle}>{cap.title}</h3>
              </div>
              
              <div className={styles.cardBody}>
                <p className={styles.solveEyebrow}>What we solve</p>
                <p className={styles.solveText}>{cap.problemSolved}</p>
              </div>

              <div className={styles.cardFooter}>
                <p className={styles.techEyebrow}>TECHNOLOGY</p>
                <p className={styles.techText}>{cap.technology}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
