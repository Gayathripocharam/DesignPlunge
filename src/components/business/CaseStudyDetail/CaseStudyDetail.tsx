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
  const { scrollYProgress: heroScrollY } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });
  const yOffset = useTransform(heroScrollY, [0, 1], [-20, 20]);
  const transformY = isMobile || prefersReducedMotion ? 0 : yOffset;

  // Narrative Progress Tracking
  const narrativeRef = useRef<HTMLElement>(null);
  const { scrollYProgress: narrativeProgress } = useScroll({
    target: narrativeRef,
    offset: ["start center", "end center"]
  });

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

        {/* ── Horizontal Stepper Narrative ── */}
        {(study.context || ('hypothesis' in study && study.hypothesis) || study.approach) && (
          <section className={styles.narrativeContainer} ref={narrativeRef}>
            <div className="container" style={{ position: 'relative' }}>
              
              {/* Vertical Progress Track & Line */}
              <div className={styles.narrativeProgressTrack}>
                <motion.div 
                  className={styles.narrativeProgressLine} 
                  style={{ scaleY: narrativeProgress }} 
                />
              </div>

              {/* ── Step 01: Problem ── */}
              {study.context && (
                <div className={`${styles.narrativeBlock} ${styles.stepOne}`}>
                  <span className={styles.watermark}>PROBLEM</span>
                  <div className={styles.narrativeContent}>
                    <h2 className={`${styles.editorialTitle} ${styles.labelNeutral}`}>The Problem</h2>
                    <div className={styles.editorialContent}>
                      <p>{study.context.problem}</p>
                      {(study.context.audience || study.context.whyItMatters) && (
                        <p>
                          {study.context.audience && (
                            <span>Designed for {study.context.audience.charAt(0).toLowerCase() + study.context.audience.slice(1).replace(/\.$/, '')}. </span>
                          )}
                          {study.context.whyItMatters}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ── Step 02: Hypothesis ── */}
              {study.type === 'concept' && study.hypothesis && (
                <div className={`${styles.narrativeBlock} ${styles.stepTwo}`}>
                  <span className={styles.watermark}>HYPOTHESIS</span>
                  <div className={styles.narrativeContent}>
                    <h2 className={`${styles.editorialTitle} ${styles.labelAccent}`}>The Hypothesis</h2>
                    <div className={styles.editorialContent}>
                      <p>{study.hypothesis}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Step 03: Approach ── */}
              {study.approach && (
                <div className={`${styles.narrativeBlock} ${styles.stepThree}`}>
                  <span className={styles.watermark}>APPROACH</span>
                  <div className={styles.narrativeContent}>
                    <h2 className={`${styles.editorialTitle} ${styles.labelAccent}`}>The Approach</h2>
                    <div className={styles.editorialContent}>
                      <p>{study.approach.idea}</p>
                      {study.approach.principles && study.approach.principles.length > 0 && (
                        <div className={styles.approachCard}>
                          <ul className={styles.editorialList}>
                            {study.approach.principles.map((principle, idx) => (
                              <li key={idx}>{principle}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </section>
        )}

        {/* ── 03. The Product ── */}
        {study.product && (
          <section className={styles.productShowcase}>
            <div className="container">
              <div className={styles.sectionInner}>
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>WHAT WE DESIGNED</h2>
                </div>
                <div className={styles.sectionContent}>
                  <p className={styles.productClimaxText}>{study.product.description}</p>
                  
                  <motion.div 
                    className={styles.productShowcaseContainer}
                    initial={{ opacity: 0, scale: 0.92, y: 28 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className={styles.productImageGlow} />
                    <div className={styles.productImageWrapper}>
                      <div className={styles.browserChrome}>
                        <div className={styles.browserDots}>
                          <span className={styles.dot} style={{ backgroundColor: '#ff5f56' }} />
                          <span className={styles.dot} style={{ backgroundColor: '#ffbd2e' }} />
                          <span className={styles.dot} style={{ backgroundColor: '#27c93f' }} />
                        </div>
                        <div className={styles.browserUrlBar}>
                          <span className={styles.browserUrlText}>{study.slug}.app</span>
                        </div>
                      </div>
                      <img
                        src={imageMap[study.slug] || study.coverImage}
                        alt={study.title}
                        className={styles.productImage}
                        loading="lazy"
                      />
                      <div className={styles.imageHighlight} />
                    </div>
                  </motion.div>
                  {(study.product as any).caption && (
                    <p className={styles.productCaption}>{(study.product as any).caption}</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── 04. Architecture ── */}
        {study.architecture && (
          <section className={styles.architectureSection}>
            <div className="container">
              <div className={styles.sectionCard}>
                <div className={styles.architectureHeader}>
                  <h2 className={styles.architectureTitle}>HOW IT WOULD WORK</h2>
                </div>
                <div className={styles.architectureContent}>
                  <p>{study.architecture.overview}</p>
                  
                  {study.architecture.technologies && (
                    <motion.div 
                      className={styles.techPillRow}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { staggerChildren: 0.08 } }
                      }}
                    >
                      {study.architecture.technologies.map((tech, idx) => (
                        <motion.span 
                          key={idx} 
                          className={styles.techPill}
                          tabIndex={0}
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                          }}
                        >
                          <span className={styles.techPillIcon}>{getIconForString(tech)}</span>
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}

                  {study.architecture.systemNotes && (
                    <div className={styles.systemNotes}>
                      <motion.ul
                        className={styles.howItWorksBullets}
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
                            className={styles.howItWorksBullet}
                            variants={{
                              hidden: { opacity: 0, x: -10 },
                              show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                            }}
                          >
                            <span className={styles.howItWorksBulletDot} />
                            <span>{note}</span>
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
          <section className={styles.architectureSection}>
            <div className="container">
              <div className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>KEY DECISIONS</h2>
                </div>
                <div className={styles.sectionContent}>
                  <motion.div 
                    className={styles.decisionsList}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                      hidden: { opacity: 0 },
                      show: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                  >
                    {study.keyDecisions.map((decision, idx) => (
                      <motion.div 
                        key={idx} 
                        className={styles.decisionRow}
                        tabIndex={0}
                        variants={{
                          hidden: { opacity: 0, y: 15 },
                          show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                      >
                        <span className={styles.decisionRowActiveDivider} />
                        <span className={styles.decisionRowNumber}>{(idx + 1).toString().padStart(2, '0')}</span>
                        <span className={styles.decisionGhostNumber}>{(idx + 1).toString().padStart(2, '0')}</span>
                        <div className={styles.decisionBody}>
                          <h3 className={styles.decisionRowTitle}>{decision.title}</h3>
                          <p className={styles.decisionRowDesc}>{decision.explanation}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── 06. Capabilities Demonstrated ── */}
        {study.type === 'concept' && study.demonstrates && study.demonstrates.length > 0 && (
          <section className={styles.architectureSection}>
            <div className="container">
              <div className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>CAPABILITIES DEMONSTRATED</h2>
                </div>
                <div className={styles.sectionContent}>
                  <motion.div 
                    className={styles.capabilityTagRow}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                      hidden: { opacity: 0 },
                      show: { opacity: 1, transition: { staggerChildren: 0.08 } }
                    }}
                  >
                    {study.demonstrates.map((cap, idx) => (
                      <motion.div 
                        key={idx} 
                        className={styles.capabilityTag}
                        tabIndex={0}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                        }}
                      >
                        <span className={styles.capabilityTagIcon}>{getIconForString(cap)}</span>
                        <span>{cap}</span>
                      </motion.div>
                    ))}
                  </motion.div>
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
