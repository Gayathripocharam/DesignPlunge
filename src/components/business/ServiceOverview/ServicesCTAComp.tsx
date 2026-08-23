import React from 'react';
import styles from './ServicesCTA.module.css';
import { Link } from 'react-router-dom';

const ServicesCTA: React.FC = () => (
  <section className={styles.ctaSection} aria-label="Services call to action">
    <div className={styles.content}>
      <h2 className={styles.title}>Ready to transform your ideas?</h2>
      <p className={styles.description}>Partner with Design Plunge to turn complex problems into elegant digital products.</p>
      <Link to="/contact" className={styles.button}>Get Started</Link>
    </div>
  </section>
);

export default ServicesCTA;
