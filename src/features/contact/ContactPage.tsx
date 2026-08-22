import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/design/animations";
import { SEO } from "@/components/seo/SEO";
import { Section } from "@/components/ui/Section";
import styles from "./ContactPage.module.css";
import { trackEvent } from "@/lib/analytics";
import { ContactForm } from "./components/ContactForm/ContactForm";

export const ContactPage: React.FC = () => {
  const endpointConfigured = !!import.meta.env.VITE_FORMSPREE_ID;

  useEffect(() => {
    trackEvent("contact_start");
  }, []);

  return (
    <>
      <SEO 
        title="Start a Project — Design Plunge" 
        description="Tell us what you're trying to build, improve, or automate." 
        canonical="/contact"
      />

      <div className={styles.page}>
        <Section background="var(--bg)" spacingTop="large" spacingBottom="none">
          <div>
            <motion.div
              className={styles.heroInner}
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.p variants={fadeUp} className={styles.eyebrow}>
                CONTACT
              </motion.p>
              <motion.h1 variants={fadeUp} className={styles.title}>
                Have something worth building?
              </motion.h1>
              <motion.p variants={fadeUp} className={styles.subtitle}>
                Tell us what you're trying to build, improve, or automate.
              </motion.p>
            </motion.div>
          </div>
        </Section>

        <Section background="var(--bg)" spacingTop="medium" spacingBottom="large">
          <div>
            <div className={styles.contentWrapper}>
              <div className={styles.grid}>
                
                {/* LEFT COLUMN: The new simplified form */}
                <div className={styles.formColumn}>
                  <h2 className={styles.infoSectionTitle}>START A PROJECT</h2>
                  <ContactForm 
                    endpointConfigured={endpointConfigured} 
                    fallbackEmail="hello@designplunge.com" 
                  />
                </div>

                {/* RIGHT COLUMN: What Happens Next */}
                <div className={styles.infoColumn}>
                  <div>
                    <h2 className={styles.infoSectionTitle}>WHAT HAPPENS NEXT</h2>
                    <div className={styles.stepsList}>
                      <div className={styles.stepItem}>
                        <div className={styles.stepNumber}>01</div>
                        <div className={styles.stepContent}>
                          <h4>We review</h4>
                          <p>We read your enquiry to understand the context and requirements.</p>
                        </div>
                      </div>
                      <div className={styles.stepItem}>
                        <div className={styles.stepNumber}>02</div>
                        <div className={styles.stepContent}>
                          <h4>We respond</h4>
                          <p>We review your enquiry and come back with the appropriate next step.</p>
                        </div>
                      </div>
                      <div className={styles.stepItem}>
                        <div className={styles.stepNumber}>03</div>
                        <div className={styles.stepContent}>
                          <h4>We talk</h4>
                          <p>If there's a mutual fit, we jump on a call to discuss the project in detail.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.conversationBox}>
                    <p className={styles.conversationText}>Prefer a conversation?</p>
                    <a 
                      href="mailto:hello@designplunge.com" 
                      className={styles.scheduleLink}
                      onClick={() => trackEvent("booking_click")}
                    >
                      Email us &rarr;
                    </a>
                  </div>
                </div>

              </div>
              
              <div className={styles.reassurance}>
                No commitment &middot; We review every enquiry
              </div>
              
            </div>
          </div>
        </Section>

      </div>
    </>
  );
};
