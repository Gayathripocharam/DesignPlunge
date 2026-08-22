import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/design/animations";
import { Section } from "@/components/ui/Section";
import { SEO } from "@/components/seo/SEO";
import styles from "./WorkPage.module.css";

import aiOpsImg from "@/assets/illustrations/ai-operations.jpg";
import productDashImg from "@/assets/illustrations/product-dashboard.jpg";
import autoPlatformImg from "@/assets/illustrations/automation-platform.jpg";

interface Project {
  slug: string;
  image: string;
  title: string;
  desc: string;
}

const projects: Project[] = [
  {
    slug: "ai-operations-platform",
    image: aiOpsImg,
    title: "AI Operations Platform",
    desc: "A concept exploring how repetitive operational work could be consolidated into one intelligent workspace.",
  },
  {
    slug: "product-analytics-dashboard",
    image: productDashImg,
    title: "Product Analytics Dashboard",
    desc: "A concept exploring how product signals can become clearer decisions rather than just more charts.",
  },
  {
    slug: "business-automation-platform",
    image: autoPlatformImg,
    title: "Business Automation Platform",
    desc: "A concept exploring how to bridge disconnected enterprise systems without complete rewrites.",
  },
];

interface PlungeState {
  href: string;
  slug: string;
  image: string;
  title: string;
  x: number;
  y: number;
}

const PLUNGE_DURATION = 640;

/**
 * WorkPage — quiet index rows
 *
 * A calmer alternative to the homepage's hover-reveal cursor-follow
 * index (deliberately not reused here to avoid repeating the same
 * interaction on both pages). Each row shows its thumbnail directly —
 * no hidden state — with a plain hairline list, number, small image,
 * title, description, and arrow. Clicking still plays the site's
 * plunge transition before navigating.
 *
 * NOTE: place at the path your current /work page component lives at.
 */
export const WorkPage: React.FC = () => {
  const navigate = useNavigate();
  const [plunge, setPlunge] = useState<PlungeState | null>(null);

  useEffect(() => {
    if (!plunge) return;
    const id = setTimeout(() => navigate(plunge.href), PLUNGE_DURATION);
    return () => clearTimeout(id);
  }, [plunge, navigate]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, project: Project) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (plunge) return;
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setPlunge({
      href: `/work/${project.slug}`,
      slug: project.slug,
      image: project.image,
      title: project.title,
      x: rect.left + 60,
      y: rect.top + rect.height / 2,
    });
  };

  return (
    <>
      <SEO 
        title="Work — Design Plunge"
        description="A collection of product concepts exploring complex problems through design, engineering and automation."
        canonical="/work"
      />
      <Section background="var(--bg)" spacingTop="large" spacingBottom="none">
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
      </Section>

      <Section background="var(--bg)" spacingTop="medium" spacingBottom="large">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className={styles.list}>
            {projects.map((project, i) => (
              <motion.div variants={fadeUp} key={project.slug}>
                <Link
                  to={`/work/${project.slug}`}
                  onClick={(e) => handleClick(e, project)}
                  className={styles.row}
                >
                  <span className={styles.rowNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.thumb}>
                    <img src={project.image} alt="" className={styles.thumbImg} loading="lazy" />
                  </span>
                  <span className={styles.rowText}>
                    <span className={styles.rowTitle}>{project.title}</span>
                    <span className={styles.rowDesc}>{project.desc}</span>
                  </span>
                  <span className={styles.rowArrow}>&rarr;</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {createPortal(
        <AnimatePresence>
          {plunge && (
            <motion.div
              className={styles.plungeOverlay}
              initial={{ clipPath: `circle(0% at ${plunge.x}px ${plunge.y}px)` }}
              animate={{ clipPath: `circle(150% at ${plunge.x}px ${plunge.y}px)` }}
              exit={{ opacity: 0 }}
              transition={{ duration: PLUNGE_DURATION / 1000, ease: [0.76, 0, 0.24, 1] }}
            >
              <motion.img
                src={plunge.image}
                alt=""
                className={styles.plungeImage}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1.18 }}
                transition={{ duration: PLUNGE_DURATION / 1000, ease: "easeOut" }}
              />
              <div className={styles.plungeTint} />
              <motion.p
                className={styles.plungeLabel}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.3 }}
              >
                Descending into {plunge.title}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};
