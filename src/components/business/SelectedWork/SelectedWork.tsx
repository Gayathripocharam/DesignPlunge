import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring, useVelocity, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";
import styles from "./SelectedWork.module.css";

import aiOpsImg from "@/assets/illustrations/ai-operations.jpg";
import productDashImg from "@/assets/illustrations/product-dashboard.jpg";
import autoPlatformImg from "@/assets/illustrations/automation-platform.jpg";

interface SelectedWorkProps {
  variant?: "home" | "services";
  spacingTop?: "none" | "medium" | "large";
  spacingBottom?: "none" | "medium" | "large";
}

interface Project {
  slug: string;
  image: string;
  home: { label: string; title: string; desc: string };
  services: { title: string; thinking: string };
}

const projects: Project[] = [
  {
    slug: "ai-operations-platform",
    image: aiOpsImg,
    home: {
      label: "SELECTED PRODUCT CONCEPT",
      title: "AI Operations Platform",
      desc: "Simplifying complex operational workflows through intelligent automation.",
    },
    services: {
      title: "AI operations platform",
      thinking: "Making complex operational work easier to understand and act on.",
    },
  },
  {
    slug: "product-analytics-dashboard",
    image: productDashImg,
    home: {
      label: "SELECTED PRODUCT CONCEPT",
      title: "Product Analytics",
      desc: "Bringing clarity to complex data through intuitive visualization.",
    },
    services: {
      title: "Product analytics dashboard",
      thinking: "Bringing clarity to complex data through intuitive visualization.",
    },
  },
  {
    slug: "business-automation-platform",
    image: autoPlatformImg,
    home: {
      label: "SELECTED PRODUCT CONCEPT",
      title: "Automation Platform",
      desc: "Connecting legacy systems to create seamless business processes.",
    },
    services: {
      title: "Business automation platform",
      thinking: "Connecting legacy systems to create seamless business processes.",
    },
  },
];

const depthFor = (index: number, total: number) => Math.round((index / Math.max(total - 1, 1)) * 120);

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
 * SelectedWork — cursor-follow index
 *
 * Projects are a plain numbered list; no image is visible until you
 * hover a row, at which point a floating preview tracks the cursor
 * (with a slight velocity-based tilt). Opening a project plays a
 * "plunge" transition (circular reveal expanding from the click point)
 * before the route changes, rather than an instant cut.
 */
export const SelectedWork: React.FC<SelectedWorkProps> = ({ variant = "home", spacingTop = "medium", spacingBottom = "medium" }) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<Project | null>(null);
  const [plunge, setPlunge] = useState<PlungeState | null>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const previewX = useSpring(rawX, { stiffness: 260, damping: 28 });
  const previewY = useSpring(rawY, { stiffness: 260, damping: 28 });

  // Tilt the preview based on how fast the cursor is moving horizontally.
  const velocityX = useVelocity(previewX);
  const rawTilt = useTransform(velocityX, [-1000, 1000], [-14, 14], { clamp: true });
  const previewRotate = useSpring(rawTilt, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (!plunge) return;
    const id = setTimeout(() => navigate(plunge.href), PLUNGE_DURATION);
    return () => clearTimeout(id);
  }, [plunge, navigate]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(e.clientX - rect.left + 28);
    rawY.set(e.clientY - rect.top - 90);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, project: Project) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (plunge) return;
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setPlunge({
      href: `/work/${project.slug}`,
      slug: project.slug,
      image: project.image,
      title: variant === "services" ? project.services.title : project.home.title,
      x: rect.left + 60,
      y: rect.top + rect.height / 2,
    });
  };

  return (
    <Section id="selected-work" background="var(--bg)" spacingTop={spacingTop} spacingBottom={spacingBottom} className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.marker}>
            WORK
          </p>
          <p className={styles.eyebrow}>SELECTED PRODUCT CONCEPTS</p>
            <h2 className={styles.title}>
              {variant === "services"
                ? "How these capabilities come together in product thinking."
                : "Digital products, engineered for real-world use."}
            </h2>
          </div>

          <div
            ref={containerRef}
            className={`${styles.indexWrap} ${hovered ? styles.hovering : ""}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHovered(null)}
          >
            {projects.map((project, i) => {
              const title = variant === "services" ? project.services.title : project.home.title;
              const desc = variant === "services" ? project.services.thinking : project.home.desc;
              const isHovered = hovered?.slug === project.slug;

              return (
                <div
                  key={project.slug}
                  className={`${styles.rowWrap} ${isHovered ? styles.rowWrapActive : ""}`}
                >
                  <Link
                    to={`/work/${project.slug}`}
                    onClick={(e) => {
                      // On mobile/touch, first tap just expands it.
                      if (window.innerWidth <= 768 && hovered?.slug !== project.slug) {
                        e.preventDefault();
                        setHovered(project);
                        return;
                      }
                      handleClick(e, project);
                    }}
                    onMouseEnter={() => setHovered(project)}
                    className={`${styles.row} ${isHovered ? styles.rowActive : ""}`}
                    style={{ '--row-index': i } as React.CSSProperties}
                  >
                    <span className={styles.rowNum}>{String(i + 1).padStart(2, "0")}</span>
                    <h3 className={styles.rowTitle}>{title}</h3>
                    <span className={styles.rowDesc}>{desc}</span>
                    <span className={styles.rowDepth}>{depthFor(i, projects.length)}m</span>
                    <span className={styles.rowArrow}>&rarr;</span>
                  </Link>

                </div>
              );
            })}

            <AnimatePresence>
              {hovered && (
                <motion.div
                  className={styles.floatPreview}
                  style={{ x: previewX, y: previewY, rotate: previewRotate }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                >
                  <img src={hovered.image} alt="" className={styles.floatPreviewImg} />
                  <div className={styles.floatPreviewScrim} />
                  <div className={styles.floatPreviewContent}>
                    <span className={styles.floatPreviewLabel}>Selected Concept</span>
                    <span className={styles.floatPreviewTitle}>
                      {variant === "services" ? hovered.services.title : hovered.home.title}
                    </span>
                    <span className={styles.floatPreviewCta}>View Project &nearr;</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

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
    </Section>
  );
};
