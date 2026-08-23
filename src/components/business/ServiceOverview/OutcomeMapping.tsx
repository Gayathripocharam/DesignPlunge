import React from 'react';
import styles from './OutcomeMapping.module.css';

const mapping = [
  { capability: 'Product Strategy', outcome: 'Clear product direction' },
  { capability: 'UX/UI', outcome: 'Easier user experiences' },
  { capability: 'Engineering', outcome: 'Reliable digital systems' },
  { capability: 'AI & Automation', outcome: 'Less repetitive work' },
  { capability: 'Design Systems', outcome: 'Faster product evolution' },
];

const OutcomeMapping: React.FC = () => (
  <div className={styles.mapping} role="table" aria-label="Capability to outcome mapping">
    {mapping.map((row, i) => (
      <div key={i} className={styles.row} role="row">
        <div className={styles.cell} role="cell">{row.capability}</div>
        <div className={styles.cell} role="cell">{row.outcome}</div>
      </div>
    ))}
  </div>
);

export default OutcomeMapping;
