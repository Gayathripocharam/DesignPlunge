import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { services } from "@/content/services";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              Design<span>Plunge</span>
            </div>
            <p className={styles.tagline}>Digital products built for what's next.</p>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <span className={styles.colTitle}>Work</span>
              <ul>
                <li><Link to="/work">Selected Work</Link></li>
                <li><Link to="/work/ai-operations-platform">AI Operations Platform</Link></li>
                <li><Link to="/work/product-analytics-dashboard">Analytics Dashboard</Link></li>
              </ul>
            </div>
            <div className={styles.column}>
              <span className={styles.colTitle}>Services</span>
              <ul>
                {services.map(s => (
                  <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.shortTitle}</Link></li>
                ))}
              </ul>
            </div>
            <div className={styles.column}>
              <span className={styles.colTitle}>Studio</span>
              <ul>
                <li><Link to="/studio">About</Link></li>
                <li><Link to="/studio">Principles</Link></li>
              </ul>
            </div>
            <div className={styles.column}>
              <span className={styles.colTitle}>Contact</span>
              <ul>
                <li><Link to="/contact">Talk through the problem</Link></li>
                <li><a href="mailto:hello@designplunge.com">Email</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>&copy; {new Date().getFullYear()} Design Plunge</span>
          <button className={styles.toTop} type="button" onClick={scrollToTop}>
            Back to top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
};
