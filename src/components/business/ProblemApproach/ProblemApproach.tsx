import React from "react";
import { motion } from "framer-motion";
import styles from "./ProblemApproach.module.css";

const steps = [
  { title: "Understand", tags: ["Research", "User Needs", "Business Goals"] },
  { title: "Define", tags: ["Product Strategy", "Architecture", "Roadmap"] },
  { title: "Create", tags: ["UX/UI", "Prototype", "Design System"] },
  { title: "Build", tags: ["Frontend", "Backend", "AI Infrastructure"] },
  { title: "Evolve", tags: ["Measure", "Improve", "Scale"] }
];

export const ProblemApproach: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Complex Problem</h2>
        </div>

        <div className={styles.timeline}>
          <div className={styles.arrow}></div>
          
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div 
                className={styles.node}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className={styles.nodeTitle}>{step.title}</h3>
                <div className={styles.nodeTags}>
                  {step.tags.map((tag, tIndex) => (
                    <span key={tIndex} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </motion.div>
              
              {index < steps.length - 1 && (
                <motion.div 
                  className={styles.arrow}
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: 40 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                ></motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
