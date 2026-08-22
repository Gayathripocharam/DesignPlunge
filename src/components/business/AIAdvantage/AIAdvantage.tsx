import React from "react";
import { motion } from "framer-motion";
import styles from "./AIAdvantage.module.css";

const advantages = [
  {
    title: "AI Products",
    text: "Build intelligent user experiences that learn and adapt."
  },
  {
    title: "Automation",
    text: "Remove repetitive operational work with intelligent agents."
  },
  {
    title: "AI Workflows",
    text: "Connect foundational models securely with real business systems."
  }
];

export const AIAdvantage: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>AI Advantage</p>
          <h2 className={styles.title}>AI, where it actually matters.</h2>
          <p className={styles.subtitle}>
            We don't add AI because it's fashionable. We find where intelligence can create actual leverage for your business and build it securely.
          </p>
        </div>

        <div className={styles.grid}>
          {advantages.map((item, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
