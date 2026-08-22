// src/design/breakpoints.ts
/**
 * Breakpoint values for responsive design.
 * Values are in pixels and can be used directly in CSS-in-JS or Tailwind config.
 */
export const breakpoints = {
  sm: 640,   // small screens (mobile)
  md: 768,   // medium screens (tablet)
  lg: 1024,  // large screens (desktop)
  xl: 1280,  // extra‑large screens
  '2xl': 1536,
} as const;
