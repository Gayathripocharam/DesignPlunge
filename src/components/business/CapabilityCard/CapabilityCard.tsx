import type { CanonicalService } from '@/content/services';
import styles from './CapabilityCard.module.css';

interface CapabilityCardProps {
  capability: CanonicalService;
  onSelect?: (targetId: string) => void;
}

export function CapabilityCard({ capability, onSelect }: CapabilityCardProps) {
  const { index, iconFa, title, tags, detail } = capability;

  return (
    <div
      className={styles.capCard}
      onClick={detail.id ? () => onSelect?.(detail.id) : undefined}
      role={detail.id ? 'button' : undefined}
      tabIndex={detail.id ? 0 : undefined}
    >
      {/* Corner decorative spans */}
      <span className={`${styles.corner} ${styles.tl}`} />
      <span className={`${styles.corner} ${styles.tr}`} />
      <span className={`${styles.corner} ${styles.bl}`} />
      <span className={`${styles.corner} ${styles.br}`} />

      <div className={styles.capNum}>N.{index}</div>
      <div className={styles.capIcon}>
        <i className={iconFa} aria-hidden="true" />
      </div>
      <div className={styles.capTitle}>{title}</div>
      <div className={styles.capTags}>
        {tags.map((tag) => (
          <span className={styles.tag} key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
