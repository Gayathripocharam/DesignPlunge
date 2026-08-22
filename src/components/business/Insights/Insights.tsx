import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Insights.module.css";

const articles = [
  { num: "01", tag: "AI PRODUCTS", title: "How to design AI experiences people actually understand.", desc: "Moving past chat interfaces into integrated product experiences." },
  { num: "02", tag: "PRODUCT DESIGN", title: "From vague idea to product strategy.", desc: "The framework we use to validate hypotheses before writing code." },
  { num: "03", tag: "ENGINEERING", title: "Building frontend systems that scale.", desc: "Architecture decisions that save months of technical debt." }
];

export const Insights: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>From the Studio</p>
            <h2 className={styles.title}>Insights & Writing.</h2>
          </div>
          <Link to="/studio" className={styles.viewAll}>
            View all insights &rarr;
          </Link>
        </div>

        <div className={styles.grid}>
          {articles.map((article, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to="/studio" className={styles.article}>
                <div className={styles.articleNumber}>{article.num} — {article.tag}</div>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <p className={styles.articleDesc}>{article.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
