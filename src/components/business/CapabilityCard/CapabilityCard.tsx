import type { Service } from '@/content/services';
import styles from './CapabilityCard.module.css';
import { Link } from 'react-router-dom';

interface CapabilityCardProps {
  capability: Service;
  onSelect?: (targetId: string) => void;
}

export function CapabilityCard({ capability, onSelect }: CapabilityCardProps) {
  const { id, iconFa, title, tags, detail } = capability;

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

      <div className={styles.capNum}>N.{id}</div>
      <Link to={`/services/${capability.slug}`} className={styles.exploreLink}>
        <i className={iconFa} aria-hidden="true" />
      </Link>
      <div className={styles.capTitle}>{title}</div>
      <div className={styles.capTags}>
        {tags.map((tag) => (
          <span className={styles.tag} key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
