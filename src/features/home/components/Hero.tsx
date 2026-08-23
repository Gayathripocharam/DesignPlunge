import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heading } from "@/components/ui/Heading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { track } from "@/analytics";
import styles from "./Hero.module.css";

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  const scrollToWork = () => {
    const el = document.getElementById("selected-work");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const aiCardAnimation: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: prefersReducedMotion ? 0 : [-4, 4, -4],
      transition: {
        opacity: { duration: 0.6, delay: 0.2 },
        y: prefersReducedMotion ? {} : { repeat: Infinity, duration: 6, ease: "easeInOut" }
      },
    },
  };
  
  const mainCardAnimation: Variants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
    },
  };

  const mobileCardAnimation: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: prefersReducedMotion ? 0 : [3, -3, 3],
      transition: {
        opacity: { duration: 0.6, delay: 0.4 },
        y: prefersReducedMotion ? {} : { repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }
      },
    },
  };

  return (
    <section className={styles.heroSection}>
      <Container>
        <motion.div
          className={styles.heroContentWrapper}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Top Split Layout */}
          <div className={styles.heroSplit}>
            <div className={styles.heroText}>
              <motion.p variants={fadeUp} className={styles.eyebrow}>
                Digital Product Studio
              </motion.p>

              <motion.div variants={fadeUp}>
                <Heading level="h1" className={styles.headline}>
                  We turn complex ideas into digital products people actually{" "}
                  <span className={styles.headlineAccent}>use.</span>
                </Heading>
              </motion.div>

              <motion.p variants={fadeUp} className={styles.supportingText}>
                Product strategy, UX/UI, engineering and AI automation — from first concept to production.
              </motion.p>

              <motion.div variants={fadeUp} className={styles.ctaGroup}>
                <Button
                  variant="primary"
                  onClick={() => {
                    track("cta_click", { ctaId: "hero-start-project", ctaLabel: "Start a Project", page: "/" });
                    navigate("/contact");
                  }}
                >
                  Start a Project →
                </Button>
                <Button variant="secondary" onClick={scrollToWork}>
                  Explore Our Work
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className={styles.supportingCapabilities}>
                <p className={styles.targetAudience}>For startups, product teams &amp; growing businesses</p>
                <p className={styles.capabilityDots}>PRODUCT STRATEGY &middot; UX/UI &middot; ENGINEERING &middot; AI AUTOMATION</p>
              </motion.div>
            </div>

            <div className={styles.layeredVisualSystem}>
              {/* Main Product Dashboard */}
              <motion.div variants={mainCardAnimation} className={`${styles.systemCard} ${styles.mainProduct}`}>
                <div className={styles.systemTitle}>PRODUCT SYSTEM</div>
                <div className={styles.systemFlow}>
                  <div className={styles.flowRow}>
                    <div className={styles.node}>USERS</div>
                    <div className={styles.flowArrow}>→</div>
                    <div className={styles.node}>WORKFLOW</div>
                  </div>
                  <div className={styles.flowVerticalRow}>
                    <div className={styles.flowArrowVertical}>↓</div>
                  </div>
                  <div className={styles.flowRow}>
                    <div className={styles.node}>DATA</div>
                    <div className={styles.flowArrow}>→</div>
                    <div className={styles.node}>OUTCOME</div>
                  </div>
                </div>
              </motion.div>

              {/* AI Assistant Card */}
              <motion.div variants={aiCardAnimation} className={`${styles.systemCard} ${styles.aiAssistant}`}>
                <div className={styles.aiHeader}>
                  <span className={styles.statusDot}></span>
                  AI ASSISTANT
                </div>
                <div className={styles.aiText}>Workflow optimized</div>
              </motion.div>

              {/* Mobile View Card */}
              <motion.div variants={mobileCardAnimation} className={`${styles.systemCard} ${styles.mobileProduct}`}>
                <div className={styles.mobileHeader}>MOBILE PRODUCT</div>
                <div className={styles.mobileGraph}></div>
                <div className={styles.mobileLines}>
                  <div className={styles.mobileLine}></div>
                  <div className={styles.mobileLineShort}></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Capability Rail */}
          <motion.div variants={fadeUp} className={styles.capabilityRail}>
            <div className={styles.railItem}><span>01</span> PRODUCT STRATEGY</div>
            <div className={styles.railItem}><span>02</span> UX / UI DESIGN</div>
            <div className={styles.railItem}><span>03</span> ENGINEERING</div>
            <div className={styles.railItem}><span>04</span> AI AUTOMATION</div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
