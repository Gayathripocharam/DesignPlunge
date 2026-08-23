import React from 'react';
import styles from './ServiceSection.module.css';
import type { Service } from '@/data/servicesData';
import { VisualMetaphor } from '@/components/business/ServiceOverview/VisualMetaphors';

interface ServiceSectionProps {
  service: Service;
  index: number;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ service, index }) => {
  const isReverse = index % 2 === 1;
  return (
    <div id={service.id} className={`${styles.section} ${isReverse ? styles.reverse : ''}`}>
      <div className={styles.visual}>
        <VisualMetaphor type={service.visualKey as any} />
      </div>
      <div className={styles.content}>
        <div className={styles.num}>{service.id}</div>
        <h2 className={styles.title}>{service.title}</h2>
        <p className={styles.desc}>{service.description}</p>
        {service.metadata && service.metadata.length > 0 && (
          <div className={styles.meta}>{service.metadata.join(' · ')}</div>
        )}
      </div>
    </div>
  );
};

export default ServiceSection;
