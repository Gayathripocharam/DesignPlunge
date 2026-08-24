import React from "react";
import styles from "./StudioPage.module.css";
import { organizationLD } from '@/seo/structuredData';
import { Section } from "@/components/ui/Section";
import { StudioHero } from "../../components/business/StudioHero/StudioHero";
import { CorePrinciples } from "../../components/business/CorePrinciples/CorePrinciples";

import { HowWeWork } from "../../components/business/HowWeWork/HowWeWork";
import { WorkingTogether } from "../../components/business/WorkingTogether/WorkingTogether";
import { Testimonials } from "../../components/business/Testimonials/Testimonials";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/design/animations";
import { SEO } from "@/components/seo/SEO";

/**
 * StudioPage — "About the studio" page.
 *
 * Composed from dedicated business components:
 *   StudioHero → CorePrinciples → WhyDesignPlunge → HowWeWork → WorkingTogether → Team
 */

import { team } from '../../content/studio';

export const StudioPage: React.FC = () => (
  <>
    <SEO 
      title="Studio — Design Plunge"
      description="Design Plunge is a digital product studio combining strategy, design, engineering, and AI."
      canonical="/studio"
      structuredData={[organizationLD()]}
    />
    {/* Hero */}
    <StudioHero />

    {/* Core Principles — horizontal path */}
    <CorePrinciples />

    {/* Team */}
    <Section background="var(--bg)" spacingTop="large" spacingBottom="large" className={styles.teamSection}>
      <motion.div 
        className={styles.principlesContainer}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeUp} className={styles.sectionHeader}>
          <p className={styles.eyebrow}>— THE TEAM</p>
          <h2 className={styles.sectionTitle}>Who builds your product</h2>
        </motion.div>
        <motion.div variants={fadeUp} className={styles.teamGrid}>
          {team.map((member) => (
            <div key={member.name} className={styles.teamCard}>
              <div className={styles.imageWrapper}>
                {member.image && <img src={member.image} alt={member.name} className={styles.teamImage} loading="lazy" />}
              </div>
              <div className={styles.teamInfo}>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>


    {/* How We Work — discover / design / build steps */}
    <HowWeWork spacingTop="large" spacingBottom="large" />

    {/* Working Together — engagement model */}
    <WorkingTogether />

    {/* Testimonial */}
    <Testimonials />

    {/* Who We Work With */}
    <Section background="var(--surface)" spacingTop="large" spacingBottom="large">
      <motion.div 
        style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-marker" style={{ justifyContent: "center" }}>— FIT</p>
        <h2 style={{ fontFamily: "var(--heading)", fontSize: "clamp(2rem, 3vw, 3rem)", marginBottom: 24 }}>Who we work best with</h2>
        <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", color: "var(--text)", lineHeight: 1.6 }}>
          Teams that want a partner who can take the time to understand the problem, challenge assumptions, and stay close to both design and engineering from start to finish.
        </p>
      </motion.div>
    </Section>
  </>
);

export default StudioPage;
