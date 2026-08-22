import React from 'react';
import styles from './ProductSystemVisual.module.css';

/**
 * Native HTML/CSS visual representing the product system flow.
 * Uses ivory background, 1px borders, and a gold accent node.
 * Subtle up‑down motion is applied unless the user prefers reduced motion.
 */
export const ProductSystemVisual: React.FC<{className?: string}> = ({className}) => {
  return (
    <div className={`${styles.container} ${className ?? ''}`}>
      <div className={styles.box}>STRATEGY</div>
      <div className={styles.arrow}>↓</div>
      <div className={styles.box}>DESIGN</div>
      <div className={styles.arrow}>↓</div>
      <div className={styles.box}>ENGINEERING</div>
      <div className={styles.arrow}>↓</div>
      <div className={styles.boxAccent}>AI</div>
    </div>
  );
};
