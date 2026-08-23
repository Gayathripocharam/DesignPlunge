import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './ServiceSection.module.css';
import type { Service } from '@/data/servicesData';
import { VisualMetaphor } from '@/components/business/ServiceOverview/VisualMetaphors';

interface ServiceSectionProps {
  service: Service;
  index: number;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

const visualVariant = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const ServiceSection: React.FC<ServiceSectionProps> = ({ service, index }) => {
  const isReverse = index % 2 === 1;

  return (
    <motion.div
      id={service.id}
      className={`${styles.section} ${isReverse ? styles.reverse : ''}`}
      data-num={service.id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={container}
    >
      {/* ── Content ── */}
      <motion.div className={styles.content} variants={container}>
        <motion.p className={styles.num} variants={item}>{service.id}</motion.p>
        <motion.h2 className={styles.title} variants={item}>{service.title}</motion.h2>
        <motion.p className={styles.desc} variants={item}>{service.description}</motion.p>

        {service.metadata && service.metadata.length > 0 && (
          <motion.div className={styles.tags} variants={item}>
            {service.metadata.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </motion.div>
        )}

        <motion.div variants={item}>
          <Link to="/contact" className={styles.link}>
            Start a conversation →
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Visual ── */}
      <motion.div className={styles.visual} variants={visualVariant}>
        <div className={styles.visualPanel}>
          <VisualMetaphor type={service.visualKey} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceSection;
