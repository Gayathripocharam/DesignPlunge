import React from "react";
import { motion } from "framer-motion";
import styles from "./HowWeCollaborate.module.css";

const methods = [
  { num: "01", title: "Direct Communication", desc: "No layers of account managers. You speak directly with the team building your product." },
  { num: "02", title: "Weekly Progress", desc: "Continuous delivery and weekly syncs to review actual working software, not just slides." },
  { num: "03", title: "Shared Roadmap", desc: "Full transparency into our sprint planning, backlog, and velocity." },
  { num: "04", title: "Early Feedback", desc: "We validate assumptions early with prototypes before committing to heavy engineering." },
  { num: "05", title: "Documented Handoff", desc: "Clean codebase, design system documentation, and architecture diagrams." },
  { num: "06", title: "Post-Launch Support", desc: "We ensure a smooth transition and remain available for iteration and scale." }
];

export const HowWeCollaborate: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Working with Design Plunge</p>
          <h2 className={styles.title}>What it's actually like.</h2>
        </div>

        <div className={styles.grid}>
          {methods.map((method, index) => (
            <motion.div 
              key={index}
              className={styles.item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.itemNumber}>{method.num}</div>
              <h3 className={styles.itemTitle}>{method.title}</h3>
              <p className={styles.itemDesc}>{method.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
