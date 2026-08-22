import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/design/animations";
import styles from "./ServiceTimeline.module.css";
import { Search, Users, PenTool, Code2, ShieldCheck, Rocket } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  description: string;
  deliverables: string;
  iconName: string;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business, users and constraints.",
    deliverables: "Problem definition · Requirements · Opportunity map",
    iconName: "Search"
  },
  {
    number: "02",
    title: "Define",
    description: "Turn ambiguity into a clear product direction.",
    deliverables: "Product strategy · Scope · Roadmap",
    iconName: "PenTool"
  },
  {
    number: "03",
    title: "Design",
    description: "Create and validate the experience.",
    deliverables: "UX flows · UI system · Prototype",
    iconName: "Users"
  },
  {
    number: "04",
    title: "Build",
    description: "Turn the validated design into production software.",
    deliverables: "Frontend · Backend · Integrations",
    iconName: "Code2"
  },
  {
    number: "05",
    title: "Launch",
    description: "Ship, measure and improve.",
    deliverables: "Deployment · QA · Handoff",
    iconName: "Rocket"
  }
];

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search size={20} />,
  Users: <Users size={20} />,
  PenTool: <PenTool size={20} />,
  Code2: <Code2 size={20} />,
  ShieldCheck: <ShieldCheck size={20} />,
  Rocket: <Rocket size={20} />
};

export const ServiceTimeline: React.FC = () => {
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.inner}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={fadeUp} className={styles.header}>
          <p className={styles.eyebrow}>How We Work</p>
          <h2 className={styles.title}>From idea to launch</h2>
        </motion.div>

        <div className={styles.timeline}>
          {steps.map((step, idx) => (
            <motion.div key={idx} variants={fadeUp} className={styles.stepItem}>
              <div className={styles.nodeWrapper}>
                <div className={styles.node} />
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepHeader}>
                  <div className={styles.titleGroup}>
                    <span className={styles.stepNumber}>{step.number}</span>
                    <span className={styles.separator}>—</span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                  </div>
                  <div className={styles.icon}>{iconMap[step.iconName]}</div>
                </div>
                <p className={styles.stepDescription}>{step.description}</p>
                <div className={styles.deliverables}>
                  <strong>You get</strong><br/>
                  <span className={styles.deliverablesText}>{step.deliverables}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

