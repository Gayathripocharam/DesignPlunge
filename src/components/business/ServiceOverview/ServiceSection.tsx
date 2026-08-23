import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServiceSection.module.css';
import type { Service } from '@/data/servicesData';
import { VisualMetaphor } from '@/components/business/ServiceOverview/VisualMetaphors';

interface ServiceSectionProps {
  service: Service;
  index: number;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

const ServiceSection: React.FC<ServiceSectionProps> = ({ service, index }) => {
  const isReverse = index % 2 === 1;
  return (
    <motion.div
      id={service.id}
      className={`${styles.section} ${isReverse ? styles.reverse : ''}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
    >
      {/* Content */}
      <motion.div className={styles.content} variants={fadeUp}>
        <p className={styles.num}>{service.id}</p>
        <h2 className={styles.title}>{service.title}</h2>
        <p className={styles.desc}>{service.description}</p>
        {service.metadata && service.metadata.length > 0 && (
          <div className={styles.tags}>
            {service.metadata.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Visual */}
      <motion.div className={styles.visual} variants={fadeUp}>
        <VisualMetaphor type={service.visualKey as any} />
      </motion.div>
    </motion.div>
  );
};

export default ServiceSection;
