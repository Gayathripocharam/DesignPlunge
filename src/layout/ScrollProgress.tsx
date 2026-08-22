// src/layout/ScrollProgress.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { colors } from "@/design/colors";

/**
 * A thin progress bar that tracks the document scroll position.
 * - 2 px height
 * - Accent gold color
 * - Hidden (opacity 0) until the user scrolls
 * - Smooth easing via framer‑motion
 */
export const ScrollProgress: React.FC = () => {
  const [scroll, setScroll] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const doc = document.documentElement;
    const winScroll = doc.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    setScroll(scrolled);
    setVisible(winScroll > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        backgroundColor: colors.accentGold,
        transformOrigin: "0% 0%",
        zIndex: 9999,
      }}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{
        opacity: visible ? 1 : 0,
        scaleX: scroll / 100,
        transition: { ease: "easeOut", duration: 0.2 },
      }}
    />
  );
};
