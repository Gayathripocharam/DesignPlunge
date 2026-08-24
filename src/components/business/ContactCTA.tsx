import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeUp } from "@/design/animations";
import { Button } from "@/components/ui/Button";
import { track } from "@/analytics";
import styles from "./ContactCTA.module.css";

export const ContactCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <motion.div
        className={styles.inner}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <h2 className={styles.title}>READY TO TURN THE IDEA INTO SOMETHING REAL?</h2>
        <p className={styles.subtitle}>
          Tell us what you're building, improving, or trying to automate. We'll review the context and come back with clear next steps.
        </p>
        <Button onClick={() => {
          track("cta_click", { ctaId: "contact-cta-section", ctaLabel: "Talk through the problem", page: window.location.pathname });
          navigate("/contact");
        }}>Talk through the problem →</Button>
      </motion.div>
    </section>
  );
};
