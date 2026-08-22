import type { RailStage } from '../../types';
import styles from './ProcessRail.module.css';

interface ProcessRailProps {
  stages: RailStage[];
  size?: 'lg' | 'compact';
  label?: string;
  outputs?: string[];
}

export function ProcessRail({ stages, size = 'compact', label, outputs }: ProcessRailProps) {
  const sizeClass = size === 'lg' ? styles.railLg : styles.railCompact;

  return (
    <div className={styles.railWrap}>
      {label && <div className={`${styles.mono} ${styles.railLabel}`}>{label}</div>}

      <div className={`${styles.rail} ${sizeClass}`}>
        <div className={styles.railTrack} />
        <div className={styles.railRow}>
          {stages.map((stage) => (
            <div className={styles.railStage} key={stage.title}>
              <span className={styles.railDot} />
              <div className={styles.railCard}>
                <div className={styles.railIcon}>
                  <i className={stage.icon} aria-hidden="true" />
                </div>
                <div className={styles.railTitle}>{stage.title}</div>
                <div className={styles.railDesc}>{stage.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {outputs && outputs.length > 0 && (
        <div className={styles.flowOutputs}>
          {outputs.map((tag) => (
            <span className={styles.tag} key={tag}>{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}
