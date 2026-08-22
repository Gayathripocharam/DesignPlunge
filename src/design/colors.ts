// src/design/colors.ts

/**
 * Semantic color tokens for Design Plunge website.
 * All component styling must reference these tokens — never hardcoded hex values.
 */
export const colors = {
  // Surfaces
  background: "#F8F7F3",   // Warm Ivory
  surface: "#FFFFFF",
  surfaceDark: "#111111",  // Dark footer / inverted sections

  // Text hierarchy
  textPrimary: "#111111",  // Headings, high‑emphasis text
  textSecondary: "#5F5F5F", // Body copy, medium‑emphasis
  textMuted: "#888888",    // Captions, timestamps, placeholders
  textInverse: "#FFFFFF",  // Text on dark surfaces

  // Borders
  border: "#E6E2DA",
  borderSubtle: "rgba(255,255,255,0.1)", // On dark surfaces

  // Brand accent
  accentGold: "#C9A227",
  darkGold: "#8F6F18",

  // Semantic status
  success: "#0D7A46",
  error: "#C23B22",

  // Legacy aliases (prefer semantic names above)
  primary: "#111111",
  secondary: "#5F5F5F",
} as const;
