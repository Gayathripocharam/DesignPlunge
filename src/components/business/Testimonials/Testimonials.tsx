import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Testimonials.module.css";
import { fadeUp } from "@/design/animations";

const testimonials = [
  {
    quote: "\"I couldn’t be happier with my choice of using DesignPlunge for my new website. Their team were easy to work with and helped me make a terrific website in a short amount of time.\"",
    name: "Essam Al Ali",
    role: "CEO",
    company: "FeatherTouch-Tech"
  },
  {
    quote: "\"The strategic clarity and exceptional design execution they brought to the table completely transformed how our users interact with our core product. A truly premium partnership.\"",
    name: "Sarah Jenkins",
    role: "VP of Product",
    company: "TechNova"
  },
  {
    quote: "\"They don't just build software; they deeply understand the business problem first. Their blend of strategy, design, and engineering is unmatched in the industry.\"",
    name: "Marcus Thorne",
    role: "Founder",
    company: "Lumina Data"
  }
];

const avatarColors = ["#6d5df6", "#059669", "#d97706"];

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 20 : -20,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 20 : -20,
    opacity: 0
  })
};

export const Testimonials: React.FC = () => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const [isInteracting, setIsInteracting] = useState(false);

  const paginate = (newDirection: number) => {
    let nextIndex = activeIndex + newDirection;
    if (nextIndex < 0) nextIndex = testimonials.length - 1;
    if (nextIndex >= testimonials.length) nextIndex = 0;
    setActiveIndex([nextIndex, newDirection]);
  };

  const jumpTo = (index: number) => {
    setActiveIndex([index, index > activeIndex ? 1 : -1]);
  };

  useEffect(() => {
    if (isInteracting) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex, isInteracting]);

  const current = testimonials[activeIndex];
  const activeColor = avatarColors[activeIndex % avatarColors.length];

  return (
    <section className={styles.container}>
      <motion.div 
        className="container"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className={styles.header}>
          <p className={styles.eyebrow}>Proof of Impact</p>
          <h2 className={styles.title}>What our clients say.</h2>
        </div>

        <div 
          className={styles.carouselWrapper}
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onFocus={() => setIsInteracting(true)}
          onBlur={() => setIsInteracting(false)}
        >
          <div className={styles.cardContainer}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div 
                key={activeIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className={styles.card}
              >
                <div className={styles.quoteIcon}>
                  <Quote size={28} strokeWidth={1.5} />
                </div>
                <p className={styles.quote}>{current.quote}</p>
                <div className={styles.author}>
                  <div className={styles.avatar} style={{ backgroundColor: activeColor }}>
                    {current.name.charAt(0)}
                  </div>
                  <div className={styles.authorInfo}>
                    <h4>{current.name}</h4>
                    <p>{current.role}, {current.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.controls}>
            <button 
              className={styles.arrowBtn} 
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
                  onClick={() => jumpTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              className={styles.arrowBtn} 
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
