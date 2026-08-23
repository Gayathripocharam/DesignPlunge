import React from "react";
import { SEO } from "@/components/seo/SEO";
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

// Alternate background between bg and surface for each service section
const sectionBgs = ["var(--bg)", "var(--surface)", "var(--bg)", "var(--surface)"];

export const ServicesPage: React.FC = () => (
  <>
    <SEO
      title="Services — Design Plunge"
      description="Product strategy, design, engineering and AI automation — connected from first decision to final build."
      canonical="/services"
    />
    <div className={styles.container}>

      {/* ── Hero ── */}
      <Section background="var(--bg)" spacingTop="large" spacingBottom="none">
        <Container>
          <ServiceHero />
        </Container>
      </Section>

      {/* ── Quick-nav index ── */}
      <Section background="var(--surface)" spacingTop="medium" spacingBottom="medium">
        <Container>
          <ServicesIndex services={services} />
        </Container>
      </Section>

      {/* ── Individual service sections – each on its own alternating background ── */}
      {services.map((service, idx) => (
        <Section
          key={service.id}
          background={sectionBgs[idx % sectionBgs.length]}
          spacingTop="none"
          spacingBottom="none"
        >
          <Container>
            <ServiceSection service={service} index={idx} />
          </Container>
        </Section>
      ))}

      {/* ── Process bridge ── */}
      <Section background="var(--surface)" spacingTop="large" spacingBottom="large">
        <Container>
          <ProblemToProductBridge />
        </Container>
      </Section>

      {/* ── Outcome mapping ── */}
      <Section background="var(--bg)" spacingTop="large" spacingBottom="large">
        <Container>
          <OutcomeMapping />
        </Container>
      </Section>

      {/* ── CTA ── */}
      <Section background="var(--surface)" spacingTop="large" spacingBottom="large">
        <Container>
          <ServicesCTA />
        </Container>
      </Section>

    </div>
  </>
);

export default ServicesPage;
