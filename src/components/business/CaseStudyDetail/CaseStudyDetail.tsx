import React, { useEffect } from "react";
import { useParams, Link, Navigate, useLocation } from "react-router-dom";
import { SEO } from "@/components/seo/SEO";
import { organizationLD, creativeWorkLD, caseStudyBreadcrumbs } from '@/seo/structuredData';
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { getCaseStudyBySlug, allCaseStudies } from "@/content/casestudies";
import { ContextualNav } from "@/components/business/ContextualNav/ContextualNav";
import { track } from "@/analytics";
import styles from "./CaseStudyDetail.module.css";

import aiOpsImg from "@/assets/illustrations/ai-operations.jpg";
import dashboardImg from "@/assets/illustrations/product-dashboard.jpg";
import autoImg from "@/assets/illustrations/automation-platform.jpg";

const imageMap: Record<string, string> = {
  "ai-operations-platform": aiOpsImg,
  "product-analytics-dashboard": dashboardImg,
  "business-automation-platform": autoImg,
};

export const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { pathname } = useLocation();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;
  const prefersReducedMotion = useReducedMotion();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (study?.title) {
      track("case_study_view", { caseStudySlug: study.slug, caseStudyTitle: study.title });
    }
  }, [study?.title, study?.slug]);

  if (!study) {
    return <Navigate to="/work" replace />;
  }

  const otherStudies = allCaseStudies.filter(s => s.slug !== study.slug).slice(0, 2);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
      },
    },
  };

  return (
    <>
      <SEO 
        title={`${study.title} — Design Plunge`} 
        description={study.description} 
        canonical={`/work/${study.slug}`} 
        structuredData={[
          organizationLD(),
          creativeWorkLD(study),
          caseStudyBreadcrumbs(study.slug, study.title),
        ]}
      />

      <div className={styles.page}>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className="container">
            <motion.div
              className={styles.heroInner}
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.span variants={fadeUp} className={styles.badge}>
                {study.subtitle || "Selected Project"}
              </motion.span>
              <motion.h1 variants={fadeUp} className={styles.heroTitle}>
                {study.title}
              </motion.h1>
              <motion.p variants={fadeUp} className={styles.description}>
                {study.description}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── Metadata Strip ── */}
        {study.metadata && (
          <section className={styles.metadataStrip}>
            <div className="container">
              <div className={styles.metadataInner}>
                <div className={styles.metadataItem}>
                  <span className={styles.metadataLabel}>TYPE</span>
                  <span className={styles.metadataValue}>{study.metadata.type}</span>
                </div>
                <div className={styles.metadataItem}>
                  <span className={styles.metadataLabel}>FOCUS</span>
                  <span className={styles.metadataValue}>{study.metadata.focus}</span>
                </div>
                <div className={styles.metadataItem}>
                  <span className={styles.metadataLabel}>DISCIPLINES</span>
                  <span className={styles.metadataValue}>{study.metadata.disciplines}</span>
                </div>
                <div className={styles.metadataItem}>
                  <span className={styles.metadataLabel}>STATUS</span>
                  <span className={styles.metadataValue}>{study.metadata.status}</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── 01. Context & Problem ── */}
        {study.context && (
          <section className={styles.section}>
            <div className="container">
              <div className={styles.sectionInner}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>01</span>
                  <h2 className={styles.sectionTitle}>THE PROBLEM</h2>
                </div>
                <div className={styles.sectionContent}>
                  <p>{study.context.problem}</p>
                  {study.context.audience && (
                    <p><strong>Audience:</strong> {study.context.audience}</p>
                  )}
                  {study.context.whyItMatters && (
                    <p><strong>Why it matters:</strong> {study.context.whyItMatters}</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── 02. The Hypothesis ── */}
        {study.type === 'concept' && study.hypothesis && (
          <section className={styles.section}>
            <div className="container">
              <div className={styles.sectionInner}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>02</span>
                  <h2 className={styles.sectionTitle}>THE HYPOTHESIS</h2>
                </div>
                <div className={styles.sectionContent}>
                  <p>{study.hypothesis}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── 03. Approach ── */}
        {study.approach && (
          <section className={styles.section}>
            <div className="container">
              <div className={styles.sectionInner}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNumber}>03</span>
                  <h2 className={styles.sectionTitle}>THE APPROACH</h2>
                </div>
                <div className={styles.sectionContent}>
                  <p>{study.approach.idea}</p>
                  {study.approach.principles && study.approach.principles.length > 0 && (
                    <ul className={styles.principlesList}>
                      {study.approach.principles.map((principle, idx) => (
                        <li key={idx}>{principle}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── 03. The Product ── */}
        {study.product && (
          <section className={styles.productShowcase}>
            <div className="container">
              <div className={styles.sectionInner}>
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitleCenter}>WHAT WE DESIGNED</h2>
                </div>
                <div className={styles.sectionContentCenter}>
                  <p className={styles.productClimaxText}>{study.product.description}</p>
                </div>
              </div>
              
              <div className={styles.productImageWrapper}>
                <img
                  src={imageMap[study.slug] || study.coverImage}
                  alt={study.title}
                  className={styles.productImage}
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        )}

        {/* ── 04. Architecture ── */}
        {study.architecture && (
          <section className={styles.architectureSection}>
            <div className="container">
              <div className={styles.architectureInner}>
                <div className={styles.architectureHeader}>
                  <h2 className={styles.architectureTitle}>HOW IT WOULD WORK</h2>
                </div>
                <div className={styles.architectureContent}>
                  <p>{study.architecture.overview}</p>
                  
                  {study.architecture.technologies && (
                    <div className={styles.techList}>
                      {study.architecture.technologies.map((tech, idx) => (
                        <span key={idx} className={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                  )}

                  {study.architecture.systemNotes && (
                    <div className={styles.systemNotes}>
                      <ul>
                        {study.architecture.systemNotes.map((note, idx) => (
                          <li key={idx}>{note}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── 05. Key Decisions ── */}
        {study.keyDecisions && study.keyDecisions.length > 0 && (
          <section className={styles.section}>
            <div className="container">
              <div className={styles.sectionInner}>
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>KEY DECISIONS</h2>
                </div>
                <div className={styles.sectionContent}>
                  <div className={styles.decisionsList}>
                    {study.keyDecisions.map((decision, idx) => (
                      <div key={idx} className={styles.decisionRow}>
                        <span className={styles.decisionNumber}>{(idx + 1).toString().padStart(2, '0')}</span>
                        <div className={styles.decisionBody}>
                          <h3 className={styles.decisionTitle}>{decision.title}</h3>
                          <p className={styles.decisionExplanation}>{decision.explanation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── 06. Capabilities Demonstrated ── */}
        {study.type === 'concept' && study.demonstrates && study.demonstrates.length > 0 && (
          <section className={styles.section}>
            <div className="container">
              <div className={styles.sectionInner}>
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>CAPABILITIES DEMONSTRATED</h2>
                </div>
                <div className={styles.sectionContent}>
                  <ul className={styles.principlesList}>
                    {study.demonstrates.map((cap, idx) => (
                      <li key={idx}>{cap}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Next Concept ── */}
        {otherStudies.length > 0 && (
          <section className={styles.nextConceptSection}>
            <div className="container">
              <div className={styles.nextConceptInner}>
                <p className={styles.nextConceptLabel}>NEXT CONCEPT</p>
                <Link to={`/work/${otherStudies[0].slug}`} className={styles.nextConceptLink}>
                  <h2 className={styles.nextConceptTitle}>{otherStudies[0].title}</h2>
                  <p className={styles.nextConceptThinking}>{otherStudies[0].thinking}</p>
                  <span className={styles.viewNextLink}>View next concept &rarr;</span>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <ContextualNav 
          label="LET'S BUILD" 
          title="Working through a similar product problem?"
          subtitle=""
          buttonText="Let's talk about the approach &rarr;"
          to="/contact" 
        />
      </div>
    </>
  );
};
