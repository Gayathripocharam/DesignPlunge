import React, { useState } from 'react';
import styles from './ServiceCanvas.module.css';
import { ArrowRight } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
  link: string;
}

interface Props {
  services: ServiceItem[];
}

export const ServiceCanvas: React.FC<Props> = ({ services }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.container}>
      {/* Visual area */}
      <div className={styles.visual} aria-live="polite">
        <div className={styles.iconWrapper}>{/* Placeholder for icon */}</div>
        <h3 className={styles.title}>{activeService.title}</h3>
        <p className={styles.description}>{activeService.description}</p>
      </div>

      {/* Controller list */}
      <div className={styles.controller} role="group" aria-label="Service selection">
        {services.map((item, idx) => (
          <button
            key={idx}
            type="button"
            className={styles.controllerButton}
            aria-pressed={activeIndex === idx}
            onMouseEnter={() => handleSelect(idx)}
            onFocus={() => handleSelect(idx)}
            onClick={() => handleSelect(idx)}
          >
            <span className={styles.controllerNumber}>
              {String(idx + 1).padStart(2, '0')}
            </span>
            <span className={styles.controllerTitle}>{item.title}</span>
            <span className={styles.controllerArrow}>
              <ArrowRight size={16} strokeWidth={1.5} />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
