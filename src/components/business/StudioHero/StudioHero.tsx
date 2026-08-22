import React from "react";
import styles from "./StudioHero.module.css";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/design/animations";

/**
 * StudioHero
 *
 * Plain hero — headline and intro paragraph only, matching your
 * original content. No stats row, no decorative right column.
 */
export const StudioHero: React.FC = () => {
  return (
    <Section background="var(--bg)" spacingTop="large" spacingBottom="medium">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={fadeUp} className={styles.title}>The Studio.</motion.h1>
        <motion.p variants={fadeUp} className={styles.desc}>
          Design Plunge is a digital product studio combining strategy, design, engineering,
          and AI to build products that move businesses forward.
        </motion.p>
      </motion.div>
    </Section>
  );
};
