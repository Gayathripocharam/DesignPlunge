import React from 'react';
import styles from './ServicesCTAComponent.module.css';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Link, useLocation } from 'react-router-dom';
import { track } from '@/analytics';

const ServicesCTA: React.FC = () => {
  const location = useLocation();
  return (
  <Section background="var(--bg)" spacingTop="none" spacingBottom="large">
    <Container>
      <div className={styles.ctaWrapper}>
        <h2 className={styles.title}>Ready to transform your complex problem into a digital product?</h2>
        <p className={styles.description}>Our team blends strategy, design, engineering and AI to deliver outcomes that work in the real world.</p>
        <Link 
          to="/contact" 
          className={styles.button}
          onClick={() => track("cta_click", { ctaId: "services-cta-banner", ctaLabel: "Start the Conversation", page: location.pathname })}
        >
          Start the Conversation
        </Link>
      </div>
    </Container>
  </Section>
  );
};

export default ServicesCTA;
