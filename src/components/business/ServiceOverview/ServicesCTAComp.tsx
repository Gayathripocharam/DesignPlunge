import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './ServicesCTA.module.css';

const ServicesCTA: React.FC = () => (
  <motion.div
    className={styles.cta}
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className={styles.inner}>
      <p className={styles.eyebrow}>START A PROJECT</p>
      <h2 className={styles.title}>
        Ready to turn a complex problem into something real?
      </h2>
      <p className={styles.sub}>
        Tell us what you're building, improving, or trying to automate. We'll
        review the context and come back with clear next steps — no commitment needed.
      </p>
      <div className={styles.actions}>
        <Link to="/contact" className={styles.primaryBtn}>
          Start a conversation →
        </Link>
        <Link to="/work" className={styles.secondaryBtn}>
          View our work
        </Link>
      </div>
    </div>
  </motion.div>
);

export default ServicesCTA;
