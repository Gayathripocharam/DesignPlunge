export type CaseStudyType = "concept" | "client";

export interface CaseStudy {
  slug: string;
  type: CaseStudyType;

  title: string;
  subtitle?: string; // e.g. "Selected Product Concept"
  category: string;
  tags?: string[];
  description: string;
  thinking: string; // The thinking statement

  coverImage: string; // Used for listing/hero
  heroImage?: string; // Optional separate image for detail page hero

  metadata: {
    type: string;
    focus: string;
    disciplines: string;
    status: string;
  };

  hypothesis?: string;
  demonstrates?: string[];

  context: {
    problem: string;
    audience?: string;
    whyItMatters?: string;
  };

  approach: {
    idea: string;
    principles?: string[];
  };

  product: {
    description: string;
    images?: string[];
  };

  architecture?: {
    overview: string;
    technologies?: string[];
    systemNotes?: string[];
  };

  keyDecisions: {
    title: string;
    explanation: string;
  }[];

  whatNext?: string; // What we'd build next
  artifacts?: string[];

  // Optional client-specific fields (for future use)
  client?: string;
  industry?: string;
  challenge?: string;
  outcomes?: string[];
  metrics?: { label: string; value: string }[];
  testimonial?: { quote: string; author: string; role: string };

  relatedServices?: string[]; // service slugs
  
  seo: {
    title: string;
    description: string;
  };
}
