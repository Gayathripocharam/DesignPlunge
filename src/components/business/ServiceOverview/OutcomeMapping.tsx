import React from 'react';
import { motion } from 'framer-motion';
import styles from './OutcomeMapping.module.css';

const mapping = [
  { capability: 'Product Strategy', outcome: 'Clear product direction' },
  { capability: 'UX / UI Design', outcome: 'Experiences people actually use' },
  { capability: 'Engineering', outcome: 'Reliable digital systems' },
  { capability: 'AI & Automation', outcome: 'Less repetitive, more meaningful work' },
  { capability: 'Design Systems', outcome: 'Faster, consistent product evolution' },
];

const OutcomeMapping: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      <p className={styles.eyebrow}>OUTCOMES</p>
      <h2 className={styles.title}>Capabilities that create real results.</h2>
    </div>

    <div className={styles.tableHeader}>
      <span className={styles.colLabel}>Capability</span>
      <span />
      <span className={styles.colLabel} style={{ textAlign: 'right' }}>Outcome</span>
    </div>

    <div className={styles.mapping} role="table" aria-label="Capability to outcome mapping">
      {mapping.map((row, i) => (
        <motion.div
          key={i}
          className={styles.row}
          role="row"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <span className={styles.capability} role="cell">{row.capability}</span>
          <span className={styles.arrow} role="presentation">→</span>
          <span className={styles.outcome} role="cell">{row.outcome}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default OutcomeMapping;
