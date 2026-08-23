import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/design/animations";
import styles from "./ServiceOverview.module.css";
import { ServiceShowcase } from "./ServiceOverview/ServiceShowcase";
import { Section } from "@/components/ui/Section";

import { services } from "@/content/services";

export interface ServiceOverviewProps {
  spacingTop?: "none" | "medium" | "large";
  spacingBottom?: "none" | "medium" | "large";
}

export const ServiceOverview: React.FC<ServiceOverviewProps> = ({
  spacingTop = "medium",
  spacingBottom = "medium"
}) => (
  <Section id="what-we-build" background="var(--surface)" spacingTop={spacingTop} spacingBottom={spacingBottom} className={styles.container}>
    <motion.div
      className={styles.inner}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div variants={fadeUp} className={styles.header}>
        <p className={styles.marker}>
          CAPABILITIES
        </p>
        <p className={styles.eyebrow}>WHAT WE BUILD</p>
        <h2 className={styles.title}>
          From complex problems{"\n"}to useful products.
        </h2>
        <p className={styles.sub}>
          We design, engineer and automate digital products for real‑world use.
        </p>
      </motion.div>

      <ServiceShowcase services={services} />

      <div className={styles.bridge}>
        <div className={styles.bridgeTop}>FROM PROBLEM&nbsp;&nbsp;→&nbsp;&nbsp;TO PRODUCT</div>
        <div className={styles.bridgeBottom}>
          01 DISCOVER → 02 DEFINE → 03 DESIGN → 04 BUILD → 05 LAUNCH
        </div>
      </div>
    </motion.div>
  </Section>
);
