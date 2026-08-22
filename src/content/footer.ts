// src/content/footer.ts
/**
 * Structured footer content schema.
 * Each top‑level key represents a column in the footer.
 */
export interface FooterColumnData {
  title: string;
  links: { label: string; path: string; external?: boolean }[];
}

export interface FooterContent {
  company: { logo: string; description: string };
  navigation: FooterColumnData[];
  social: { label: string; href: string; icon: string }[];
  contact: { email: string; phone?: string; address?: string };
  legal: { label: string; path: string }[];
  newsletter: { placeholder: string; buttonLabel: string };
  copyright: string;
}

export const footerContent: FooterContent = {
  company: {
    logo: "/assets/logos/designplunge.svg",
    description: "Design Plunge – Digital product studio.",
  },
  navigation: [],
  social: [],
  contact: {
    email: "hello@designplunge.com",
  },
  legal: [],
  newsletter: {
    placeholder: "Enter your email",
    buttonLabel: "Subscribe",
  },
  copyright: "© 2026 Design Plunge. All rights reserved.",
};
