import React from "react";
import { SEO } from "@/components/seo/SEO";
// import { motion } from "framer-motion"; // removed unused import
// import { fadeUp, staggerContainer } from "@/design/animations"; // removed unused imports
import styles from "./ServicesPage.module.css";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/servicesData";
import ServiceHero from "@/components/business/ServiceOverview/ServiceHero";
import ServicesIndex from "@/components/business/ServiceOverview/ServicesIndex";
import ServiceSection from "@/components/business/ServiceOverview/ServiceSection";
import ProblemToProductBridge from "@/components/business/ServiceOverview/ProblemToProductBridge";
import OutcomeMapping from "@/components/business/ServiceOverview/OutcomeMapping";
import ServicesCTA from "@/components/business/ServiceOverview/ServicesCTAComp";

export const ServicesPage: React.FC = () => (
  <>
    <SEO
      title="Services — Design Plunge"
      description="Product strategy, design, engineering and AI automation — connected from first decision to final build."
      canonical="/services"
    />
    <div className={styles.container}>
      {/* Hero Section */}
      <Section background="var(--bg)" spacingTop="large" spacingBottom="none">
        <Container>
          <ServiceHero />
        </Container>
      </Section>

      {/* Editorial Index */}
      <Section background="var(--bg)" spacingTop="none" spacingBottom="large">
        <Container>
          <ServicesIndex services={services} />
        </Container>
      </Section>

      {/* Service Sections (Alternating) */}
      <Section background="var(--surface)" spacingTop="medium" spacingBottom="medium">
        <Container>
          {services.map((service, idx) => (
            <ServiceSection key={service.id} service={service} index={idx} />
          ))}
        </Container>
      </Section>

      {/* Process Bridge */}
      <Section background="var(--bg)" spacingTop="none" spacingBottom="none">
        <Container>
          <ProblemToProductBridge />
        </Container>
      </Section>

      {/* Outcome Mapping */}
      <Section background="var(--bg)" spacingTop="none" spacingBottom="large">
        <Container>
          <OutcomeMapping />
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="var(--bg)" spacingTop="none" spacingBottom="large">
        <Container>
          <ServicesCTA />
        </Container>
      </Section>
    </div>
  </>
);

export default ServicesPage;
