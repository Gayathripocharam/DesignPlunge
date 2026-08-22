import React from "react";
import { SEO } from "@/components/seo/SEO";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/design/animations";
import styles from "./ServicesPage.module.css";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { canonicalServices } from "@/content/services";
import { VisualMetaphor } from "@/components/business/ServiceOverview/VisualMetaphors";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
          <motion.div 
            className={styles.hero}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className={styles.heroMarker}>SERVICES</motion.div>
            <motion.h1 variants={fadeUp} className={styles.heroTitle}>
              We turn complex problems<br />into useful digital products.
            </motion.h1>
            <motion.p variants={fadeUp} className={styles.heroLead}>
              Strategy, design, engineering and AI<br />working together from idea to launch.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Editorial Index */}
      <Section background="var(--bg)" spacingTop="none" spacingBottom="large">
        <Container>
          <motion.div 
            className={styles.indexList}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {canonicalServices.map((s) => (
              <motion.a 
                key={s.id} 
                href={`#${s.id}`} 
                variants={fadeUp} 
                className={styles.indexLink}
              >
                <span>
                  <span className={styles.indexNum}>{s.index}</span>
                  {s.title}
                </span>
                <ArrowRight size={14} className={styles.indexArrow} />
              </motion.a>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Service Sections (Alternating) */}
      <Section background="var(--surface)" spacingTop="medium" spacingBottom="medium">
        <Container>
          {canonicalServices.map((service) => (
            <motion.div 
              id={service.id}
              key={service.id} 
              className={styles.serviceRow}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.serviceVisual}>
                <VisualMetaphor type={service.id as any} />
              </div>
              <div className={styles.serviceContent}>
                <div className={styles.serviceNum}>{service.index}</div>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDesc}>{service.description}</p>
                {service.tags && service.tags.length > 0 && (
                  <div className={styles.serviceMeta}>
                    {service.tags.join(' · ')}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </Container>
      </Section>

      {/* Process Bridge */}
      <Section background="var(--bg)" spacingTop="none" spacingBottom="none">
        <Container>
          <motion.div 
            className={styles.processContainer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.processLabel}>FROM PROBLEM &rarr; TO PRODUCT</div>
            <div className={styles.processFlow}>
              <div className={styles.processStep}>
                <span className={styles.processStepNum}>01</span>
                <span className={styles.processStepTitle}>Discover</span>
              </div>
              <ArrowRight size={16} className={styles.processArrow} />
              
              <div className={styles.processStep}>
                <span className={styles.processStepNum}>02</span>
                <span className={styles.processStepTitle}>Define</span>
              </div>
              <ArrowRight size={16} className={styles.processArrow} />
              
              <div className={styles.processStep}>
                <span className={styles.processStepNum}>03</span>
                <span className={styles.processStepTitle}>Design</span>
              </div>
              <ArrowRight size={16} className={styles.processArrow} />
              
              <div className={styles.processStep}>
                <span className={styles.processStepNum}>04</span>
                <span className={styles.processStepTitle}>Build</span>
              </div>
              <ArrowRight size={16} className={styles.processArrow} />
              
              <div className={styles.processStep}>
                <span className={styles.processStepNum}>05</span>
                <span className={styles.processStepTitle}>Launch</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="var(--bg)" spacingTop="none" spacingBottom="large">
        <Container>
          <motion.div 
            className={styles.ctaContainer}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.ctaEyebrow}>HAVE A COMPLEX PROBLEM?</div>
            <h2 className={styles.ctaTitle}>Let's turn it into<br />something useful.</h2>
            <Link to="/contact" className={styles.ctaButton}>
              Start a conversation <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </Container>
      </Section>
    </div>
  </>
);

export default ServicesPage;
