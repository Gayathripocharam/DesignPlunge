// src/design/typography.ts

/**
 * Typography scale and font families for Design Plunge.
 * Uses the approved custom typography system (Option D).
 */
export const typography = {
  // Font families – you may need to host the fonts locally or pull from Google Fonts.
  // Hero Headlines: Clash Display (fallback to Space Grotesk if only Google Fonts are allowed)
  hero: "'Clash Display', var(--heading)",
  // Section Headings: General Sans (fallback to Outfit)
  heading: "'General Sans', Outfit, sans-serif",
  // Body text: Inter
  body: "Inter, sans-serif",
  // Labels & Navigation: IBM Plex Mono
  mono: "'IBM Plex Mono', monospace",

  // Scale (desktop)
  size: {
    heroDisplayXL: "112px",
    heroDisplay: "96px",
    h1: "72px",
    h2: "56px",
    h3: "40px",
    h4: "32px",
    cardTitle: "24px",
    bodyLarge: "20px",
    body: "18px",
    small: "16px",
    caption: "14px",
    label: "12px",
  },
  // Scale (mobile)
  sizeMobile: {
    hero: "56px",
    h1: "42px",
    h2: "32px",
    h3: "24px",
    body: "16px",
    caption: "14px",
    label: "12px",
  },
  // Letter spacing rules
  letterSpacing: {
    hero: "-0.04em",
    heading: "-0.02em",
    label: "0.16em",
    body: "0em",
  },
  // Font weight mapping
  weight: {
    hero: 700,
    heading: 600,
    body: 400,
    label: 600,
  },
};
