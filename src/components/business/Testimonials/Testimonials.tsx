import React from "react";
import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote: "\"I couldn’t be happier with my choice of using DesignPlunge for my new website. Their team were easy to work with and helped me make a terrific website in a short amount of time.\"",
    name: "Essam Al Ali",
    role: "CEO",
    company: "FeatherTouch-Tech"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Proof of Impact</p>
          <h2 className={styles.title}>What our clients say.</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className={styles.quote}>{testimonial.quote}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{testimonial.name.charAt(0)}</div>
                <div className={styles.authorInfo}>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
