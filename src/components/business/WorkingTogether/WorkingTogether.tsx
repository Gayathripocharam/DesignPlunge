import React from "react";
import { Link, useLocation } from "react-router-dom";
import { track } from "@/analytics";
import { Section } from "@/components/ui/Section";
import styles from "./WorkingTogether.module.css";

import { engagementPrinciples } from '@/content/studio';

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
              <div className={styles.list}>
                {engagementPrinciples.map((item, index) => (
                  <div key={index} className={styles.row} tabIndex={0} role="group" aria-label={item.title}>
                    <div className={styles.rowNum}>{item.num}</div>
                    <div className={styles.rowContent}>
                      <h3 className={styles.rowTitle}>{item.title}</h3>
                      <p className={styles.rowDesc}>{item.desc}</p>
                      <ul className={styles.deliverablesList}>
                        {item.deliverables.map((del, i) => (
                          <li key={i}>{del}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
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
