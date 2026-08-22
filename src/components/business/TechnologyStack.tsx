import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/design/animations";
import styles from "./TechnologyStack.module.css";
import { Code, Server, Database, Cloud, Palette, Brain } from "lucide-react";

const technologies = [
  { name: "React", icon: <Code className={styles.icon} /> },
  { name: "TypeScript", icon: <Code className={styles.icon} /> },
  { name: "Next.js", icon: <Server className={styles.icon} /> },
  { name: "Python", icon: <Code className={styles.icon} /> },
  { name: "Flask", icon: <Server className={styles.icon} /> },
  { name: "PostgreSQL", icon: <Database className={styles.icon} /> },
  { name: "Docker", icon: <Server className={styles.icon} /> },
  { name: "AWS", icon: <Cloud className={styles.icon} /> },
  { name: "Figma", icon: <Palette className={styles.icon} /> },
  { name: "Framer Motion", icon: <Brain className={styles.icon} /> },
];

export const TechnologyStack: React.FC = () => {
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.inner}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={fadeUp} className={styles.title}>
          Technology We Work With
        </motion.h2>
        <div className={styles.strip}>
          {technologies.map((tech, idx) => (
            <motion.div key={idx} variants={fadeUp} className={styles.techItem} whileHover={{ y: -4 }}>
              {tech.icon}
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
