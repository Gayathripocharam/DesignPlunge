import React, { useEffect, useState, useRef } from "react";
import { useParams, Link, Navigate, useLocation } from "react-router-dom";
import { SEO } from "@/components/seo/SEO";
import { organizationLD, creativeWorkLD, caseStudyBreadcrumbs } from '@/seo/structuredData';
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Code, Database, Cloud, Layers, Layout, PieChart, Workflow, Server, PenTool, CheckCircle, ArrowRight } from "lucide-react";
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

const getIconForString = (str: string) => {
  const lower = str.toLowerCase();
  if (lower.includes('data') || lower.includes('sql') || lower.includes('postgres') || lower.includes('redis')) return <Database size={14} />;
  if (lower.includes('react') || lower.includes('code') || lower.includes('node') || lower.includes('typescript')) return <Code size={14} />;
  if (lower.includes('cloud') || lower.includes('webworker') || lower.includes('api')) return <Cloud size={14} />;
  if (lower.includes('workflow') || lower.includes('automation') || lower.includes('process')) return <Workflow size={14} />;
  if (lower.includes('visual') || lower.includes('chart') || lower.includes('dashboard')) return <PieChart size={14} />;
  if (lower.includes('layout') || lower.includes('ui') || lower.includes('interface')) return <Layout size={14} />;
  if (lower.includes('design') || lower.includes('css')) return <PenTool size={14} />;
  if (lower.includes('layer') || lower.includes('disclosure')) return <Layers size={14} />;
  if (lower.includes('system') || lower.includes('machine')) return <Server size={14} />;
  return <CheckCircle size={14} />;
};

export const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { pathname } = useLocation();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;
  
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 960);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
  const studyIndex = allCaseStudies.findIndex(s => s.slug === study.slug);
  const displayIndex = studyIndex >= 0 ? studyIndex : 0;

  // Parallax logic for Hero
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });
  const yOffset = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const transformY = isMobile || prefersReducedMotion ? 0 : yOffset;

  // Staggered Animations setup
  const staggerParent: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.09 }
    }
  };

  const getSlideUpVariant = (yDist: number, delayMs: number = 0): any => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : yDist },
    show: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.15 : 0.4, 
        delay: delayMs / 1000, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  });

  const imageVariant: any = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 1.05 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: prefersReducedMotion ? 0.15 : 0.5, 
        delay: 0.1, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
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
        {/* ── Split-Screen Hero ── */}
        <section ref={heroRef} className={styles.projectSection}>
          <div className={styles.projectGrid}>
            
            {/* Text Side */}
            <div className={styles.textColumn}>
              <motion.div
                className={styles.textInner}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerParent}
              >
                <span className={styles.ghostNum} aria-hidden="true">{String(displayIndex + 1).padStart(2, "0")}</span>
                
                <motion.div variants={getSlideUpVariant(12)} className={styles.projectMeta}>
                  <span className={styles.projectNum}>{String(displayIndex + 1).padStart(2, "0")}</span>
                  <span className={styles.projectLabel}>{study.subtitle || "Selected Project"}</span>
                </motion.div>
                
                <motion.h1 variants={getSlideUpVariant(16, 50)} className={styles.projectTitle}>
                  {study.title}
                </motion.h1>
                
                <motion.p variants={getSlideUpVariant(12)} className={styles.projectProblem}>
                  {study.description}
                </motion.p>
                
                <motion.div variants={getSlideUpVariant(8)} className={styles.projectTags}>
                  {('demonstrates' in study && study.demonstrates) ? study.demonstrates.map((tag: string) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  )) : study.tags?.map((tag: string) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </motion.div>
                
                <motion.div variants={getSlideUpVariant(8)} className={styles.ctaWrapper}>
                  <a href="#problem" className={styles.projectCta}>
                    <span className={styles.ctaText}>Read Case Study</span>
                    <span className={styles.ctaArrow}>&darr;</span>
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Image Side with Parallax */}
            <div className={styles.imageColumn}>
              <motion.div 
                className={styles.imageWrapper}
                style={{ y: transformY }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={imageVariant}
              >
                <img src={imageMap[study.slug] || study.coverImage} alt={study.title} className={styles.projectImage} loading="lazy" />
                <div className={styles.imageOverlay} />
              </motion.div>
            </div>
            
          </div>
        </section>

        {/* ── Metadata Strip ── */}
        {study.metadata && (
          <section id="problem" className={styles.metadataStrip}>
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
              
              <motion.div 
                className={styles.productImageWrapper}
                initial={{ opacity: 0, scale: 1.03 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={imageMap[study.slug] || study.coverImage}
                  alt={study.title}
                  className={styles.productImage}
                  loading="lazy"
                />
              </motion.div>
              {(study.product as any).caption && (
                <p className={styles.productCaption}>{(study.product as any).caption}</p>
              )}
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
                        <span key={idx} className={styles.techTag}>
                          {getIconForString(tech)}
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {study.architecture.systemNotes && (
                    <div className={styles.systemNotes}>
                      <motion.ul
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                          hidden: { opacity: 0 },
                          show: { opacity: 1, transition: { staggerChildren: 0.08 } }
                        }}
                      >
                        {study.architecture.systemNotes.map((note, idx) => (
                          <motion.li 
                            key={idx}
                            variants={{
                              hidden: { opacity: 0, x: -10 },
                              show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                            }}
                          >
                            {note}
                          </motion.li>
                        ))}
                      </motion.ul>
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
                  <div className={styles.capabilitiesList}>
                    {study.demonstrates.map((cap, idx) => (
                      <div key={idx} className={styles.capabilityPill}>
                        {getIconForString(cap)}
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
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
                  <div className={styles.nextConceptContent}>
                    <h2 className={styles.nextConceptTitle}>{otherStudies[0].title}</h2>
                    <p className={styles.nextConceptThinking}>{otherStudies[0].thinking}</p>
                    <span className={styles.viewNextLink}>View next concept <ArrowRight size={16} /></span>
                  </div>
                  <div className={styles.nextConceptImageWrap}>
                    <img src={imageMap[otherStudies[0].slug] || otherStudies[0].coverImage} alt={otherStudies[0].title} />
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <ContextualNav 
          label="TALK THROUGH THE PROBLEM" 
          title="Working through a similar product problem?"
          subtitle=""
          buttonText="Let's talk about the approach &rarr;"
          to="/contact" 
        />
      </div>
    </>
  );
};
