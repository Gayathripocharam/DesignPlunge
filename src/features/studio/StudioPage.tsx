import React from "react";
import styles from "./StudioPage.module.css";
import { Section } from "@/components/ui/Section";
import { StudioHero } from "../../components/business/StudioHero/StudioHero";
import { CorePrinciples } from "../../components/business/CorePrinciples/CorePrinciples";
import { WhyDesignPlunge } from "../../components/business/WhyDesignPlunge/WhyDesignPlunge";
import { HowWeWork } from "../../components/business/HowWeWork/HowWeWork";
import { WorkingTogether } from "../../components/business/WorkingTogether/WorkingTogether";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/design/animations";
import { SEO } from "@/components/seo/SEO";

/**
 * StudioPage — "About the studio" page.
 *
 * Composed from dedicated business components:
 *   StudioHero → CorePrinciples → WhyDesignPlunge → HowWeWork → WorkingTogether → Team
 */

interface TeamMember {
  name: string;
  role: string;
}

const team: TeamMember[] = [
  { name: "Gayathri", role: "Product & Design" },
  { name: "Pocha", role: "Engineering & AI" },
];

export const StudioPage: React.FC = () => (
  <>
    <SEO 
      title="Studio — Design Plunge"
      description="Design Plunge is a digital product studio combining strategy, design, engineering, and AI."
      canonical="/studio"
    />
    {/* Hero */}
    <StudioHero />

    {/* Core Principles — horizontal path */}
    <CorePrinciples />

    {/* Why Design Plunge — product thinking pillars */}
    <WhyDesignPlunge />

    {/* How We Work — discover / design / build steps */}
    <HowWeWork />

    {/* Working Together — engagement model */}
    <WorkingTogether />

    {/* Team */}
    <Section background="var(--bg)" spacingTop="medium" spacingBottom="large" className={styles.teamSection}>
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
              <div className={styles.imageWrapper} />
              <div className={styles.teamInfo}>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  </>
);

export default StudioPage;
