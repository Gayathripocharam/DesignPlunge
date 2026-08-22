import React from "react";
import { motion } from "framer-motion";
import styles from "./WhoWeWorkWith.module.css";

const profiles = [
  {
    num: "01",
    title: "EARLY-STAGE STARTUPS",
    desc: "You have the idea. We help turn it into a product."
  },
  {
    num: "02",
    title: "GROWING COMPANIES",
    desc: "Your existing product needs a stronger digital foundation."
  },
  {
    num: "03",
    title: "PRODUCT TEAMS",
    desc: "You need additional product, design or engineering capability."
  },
  {
    num: "04",
    title: "OPERATIONS-HEAVY BUSINESSES",
    desc: "Repetitive workflows are slowing the business down."
  }
];

export const WhoWeWorkWith: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Who We Work With</p>
          <h2 className={styles.title}>For teams building something important.</h2>
        </div>

        <div className={styles.grid}>
          {profiles.map((profile, index) => (
            <motion.div 
              key={profile.num}
              className={styles.item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.number}>{profile.num}</div>
              <h3 className={styles.itemTitle}>{profile.title}</h3>
              <p className={styles.itemDesc}>{profile.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
