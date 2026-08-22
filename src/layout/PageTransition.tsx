// src/layout/PageTransition.tsx
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom"; // assumes react-router is used

/**
 * Transition variant definitions. These can be extended as needed.
 * Each variant defines the initial, animate, and exit states.
 */
const transitionVariants = {
  subtleFade: {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.25 } },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  },
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.25 } },
  },
  fadeBlur: {
    initial: { opacity: 0, filter: "blur(8px)" },
    animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.4 } },
    exit: { opacity: 0, filter: "blur(8px)", transition: { duration: 0.3 } },
  },
  maskReveal: {
    initial: { clipPath: "inset(0% 0% 100% 0%)" },
    animate: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 0.45 } },
    exit: { clipPath: "inset(0% 0% 100% 0%)", transition: { duration: 0.35 } },
  },
  editorialSlide: {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { opacity: 0, x: "-20%", transition: { duration: 0.25 } },
  },
} as const;

/**
 * Props for the PageTransition component.
 * `variant` selects which preset to use – defaults to "fade".
 */
interface PageTransitionProps {
  children: ReactNode;
  variant?: keyof typeof transitionVariants;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, variant = "subtleFade" }) => {
  const location = useLocation();
  const { initial, animate, exit } = transitionVariants[variant];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.key}
        initial={initial}
        animate={animate}
        exit={exit}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
