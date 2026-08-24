import React from "react";
import { Link, useLocation } from "react-router-dom";
import { track } from "@/analytics";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Handshake, Users, ShieldCheck, LifeBuoy } from "lucide-react";
import styles from "./WorkingTogether.module.css";

import { engagementPrinciples } from '@/content/studio';

const valueIcons = [Handshake, Users, ShieldCheck, LifeBuoy];

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const WorkingTogether: React.FC = () => {
  const location = useLocation();
  return (
    <Section id="working-together" background="var(--surface)" className={styles.container}>
      <div className={styles.inner}>
        
        <div className={styles.eyebrowWrapper}>
          <p className="section-marker">
             PRINCIPLES
          </p>
          <p className={styles.eyebrow}>WHAT WE VALUE</p>
        </div>

          <div className={styles.grid}>
            {/* Left Column */}
            <div className={styles.leftCol}>
              <h2 className={styles.headline}>
                Built for<br/>the long term.
              </h2>
              <p className={styles.supportingCopy}>
                The operating philosophy behind every engagement. We prioritize lasting partnerships over transactional builds.
              </p>
            </div>

            {/* Right Column */}
            <div className={styles.rightCol}>
              <motion.div 
                className={styles.list}
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
              >
                {engagementPrinciples.map((item, index) => {
                  const Icon = valueIcons[index % valueIcons.length];
                  return (
                    <motion.div 
                      key={index} 
                      className={styles.row} 
                      tabIndex={0} 
                      role="group" 
                      aria-label={item.title}
                      variants={itemVariants}
                    >
                      <div className={styles.rowNum}>{item.num}</div>
                      <div className={styles.rowContent}>
                        <div className={styles.titleRow}>
                          <Icon size={20} className={styles.titleIcon} strokeWidth={1.5} />
                          <h3 className={styles.rowTitle}>{item.title}</h3>
                        </div>
                        <p className={styles.rowDesc}>{item.desc}</p>
                        <ul className={styles.deliverablesList}>
                          {item.deliverables.map((del, i) => (
                            <li key={i}>{del}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Process Line & Closing Statement */}
          <div className={styles.footerSection}>
            <div className={styles.processVisual}>
              <div className={styles.processSteps}>
                <span>TRUST</span>
                <span className={styles.processLine}></span>
                <span>COLLABORATION</span>
                <span className={styles.processLine}></span>
                <span>ROBUSTNESS</span>
                <span className={styles.processLine}></span>
                <span>SUPPORT</span>
              </div>
            </div>

            <div className={styles.closingStatement}>
              <p>The result isn't just a finished product. It's a scalable system and a relationship you can rely on as you grow.</p>
              <Link 
                to="/contact" 
                className={styles.closingLink}
                onClick={() => track("cta_click", { ctaId: "working-together-contact", ctaLabel: "Talk through the problem", page: location.pathname })}
              >
                Talk through the problem &rarr;
              </Link>
            </div>
          </div>

        </div>
    </Section>
  );
};
