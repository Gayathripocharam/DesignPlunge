import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import styles from "./DesignEngineeringBridge.module.css";

const steps = [
  "Strategy",
  "Product Thinking",
  "UX / UI",
  "Design System",
  "Engineering",
  "AI / Automation",
  "Production"
];

export const DesignEngineeringBridge: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <div className={styles.bridge}>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div 
                className={styles.step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {step}
              </motion.div>
              
              {index < steps.length - 1 && (
                <motion.div 
                  className={styles.arrow}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                >
                  <ArrowDown size={24} />
                </motion.div>
              )}
            </React.Fragment>
          ))}
          
          <motion.div 
            className={styles.conclusion}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: steps.length * 0.1 + 0.3 }}
          >
            One team. One product vision.
          </motion.div>
        </div>
      </div>
    </section>
  );
};
