// src/design/motion.ts

/**
 * Motion / animation design tokens for Design Plunge.
 * Central source of truth for all transition durations, easings, and delays.
 */
export const motion = {
  /** Base transition duration in seconds */
  durationFast: 0.15,
  durationBase: 0.3,
  durationSlow: 0.5,
  /** Total hero entrance sequence target: ~1.4s */
  durationHeroSequence: 1.4,

  /** Easing curves */
  easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
  easeInOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  easeSpring: "cubic-bezier(0.34, 1.56, 0.64, 1)",

  /** Stagger delay between sequential child animations */
  staggerChildren: 0.08,

  /** Reduced‑motion fallback duration */
  durationReduced: 0.01,
} as const;
