import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import styles from "./WhatYouGet.module.css";

const deliverables = [
  "Clear product strategy",
  "Validated user flows",
  "High-fidelity interface",
  "Scalable design system",
  "Production-ready frontend",
  "Backend architecture",
  "AI workflows",
  "Technical documentation",
  "Deployment-ready product"
];

export const WhatYouGet: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>What you walk away with</h2>
        </div>

        <div className={styles.grid}>
          {deliverables.map((item, index) => (
            <motion.div 
              key={index}
              className={styles.item}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className={styles.iconWrapper}>
                <CheckCircle2 size={24} strokeWidth={2} />
              </div>
              <p className={styles.itemText}>{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
