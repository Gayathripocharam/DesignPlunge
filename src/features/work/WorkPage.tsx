import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/design/animations";
import { SEO } from "@/components/seo/SEO";
import { organizationLD } from '@/seo/structuredData';
import styles from "./WorkPage.module.css";

import { projects } from '@/content/projects';
import type { Project } from '@/content/projects';

// Progress Indicator Component
const WorkProgressIndicator: React.FC<{ activeIndex: number; total: number }> = ({ activeIndex, total }) => {
  return (
    <div className={styles.progressIndicator}>
      <span className={styles.progressCurrent}>{String(activeIndex + 1).padStart(2, '0')}</span>
      <span className={styles.progressDivider}>/</span>
      <span className={styles.progressTotal}>{String(total).padStart(2, '0')}</span>
    </div>
  );
};

// Project Section Component
const ProjectSection: React.FC<{ 
  project: Project; 
  index: number;
  onInView: (index: number) => void;
}> = ({ project, index, onInView }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 960);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for Progress Indicator
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onInView(index);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [index, onInView]);

  // Parallax logic (Desktop only)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Very subtle parallax: moves ~30-40px across the viewport
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
        delay: 0.1, // 100ms delay so text leads
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  return (
    <section ref={sectionRef} className={styles.projectSection}>
      <div className={styles.projectGrid}>
        
        {/* Text Side */}
        <div className={styles.textColumn}>
          <motion.div
            className={styles.textInner}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            variants={staggerParent}
          >
            <span className={styles.ghostNum} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            
            <motion.div variants={getSlideUpVariant(12)} className={styles.projectMeta}>
              <span className={styles.projectNum}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.projectLabel}>{project.label}</span>
            </motion.div>
            
            <motion.h2 variants={getSlideUpVariant(16, 50)} className={styles.projectTitle}>
              {project.title}
            </motion.h2>
            
            <motion.p variants={getSlideUpVariant(12)} className={styles.projectProblem}>
              {project.description}
            </motion.p>
            
            <motion.div variants={getSlideUpVariant(8)} className={styles.projectTags}>
              {project.demonstrates.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </motion.div>
            
            <motion.div variants={getSlideUpVariant(8)} className={styles.ctaWrapper}>
              <Link
                to={`/work/${project.slug}`}
                className={styles.projectCta}
              >
                <span className={styles.ctaText}>Explore Concept</span>
                <span className={styles.ctaArrow}>&rarr;</span>
              </Link>
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
            viewport={{ once: false, amount: 0.4 }}
            variants={imageVariant}
          >
            <img src={project.image} alt={project.title} className={styles.projectImage} loading="lazy" />
            <div className={styles.imageOverlay} />
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export const WorkPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <SEO 
        title="Work — Design Plunge"
        description="A collection of product concepts exploring complex problems through design, engineering and automation."
        canonical="/work"
        structuredData={[organizationLD()]}
      />
      
      <main className={styles.scrollContainer}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <motion.div 
            className={styles.heroContent}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={fadeUp} className={styles.eyebrow}>WORK</motion.p>
            <motion.h1 variants={fadeUp} className={styles.title}>Selected work &amp; product thinking.</motion.h1>
            <motion.p variants={fadeUp} className={styles.subtitle}>
              A collection of product concepts exploring complex problems through design,
              engineering and automation.
            </motion.p>
          </motion.div>
          <div className={styles.scrollHint}>
            <span className={styles.scrollDot}></span>
          </div>
        </section>

        {/* Project Sections */}
        {projects.map((project, i) => (
          <ProjectSection 
            key={project.slug} 
            project={project} 
            index={i} 
            onInView={setActiveIndex} 
          />
        ))}

        <WorkProgressIndicator activeIndex={activeIndex} total={projects.length} />
      </main>
    </>
  );
};
