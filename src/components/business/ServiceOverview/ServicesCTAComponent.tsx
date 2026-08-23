import React from 'react';
import styles from './ServicesCTAComponent.module.css';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Link } from 'react-router-dom';

const ServicesCTA: React.FC = () => (
  <Section background="var(--bg)" spacingTop="none" spacingBottom="large">
    <Container>
      <div className={styles.ctaWrapper}>
        <h2 className={styles.title}>Ready to transform your complex problem into a digital product?</h2>
        <p className={styles.description}>Our team blends strategy, design, engineering and AI to deliver outcomes that work in the real world.</p>
        <Link to="/contact" className={styles.button}>Start the Conversation</Link>
      </div>
    </Container>
  </Section>
);

export default ServicesCTA;
