export type CaseStudyType = "concept" | "client";

export interface BaseCaseStudy {
  slug: string;
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
    caption?: string;
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
  relatedServices?: string[]; // service slugs
  
  seo: {
    title: string;
    description: string;
  };
}

export interface ConceptCaseStudy extends BaseCaseStudy {
  type: "concept";
  hypothesis: string;
  demonstrates: string[];
}

export interface ClientCaseStudy extends BaseCaseStudy {
  type: "client";
  actualImplementation: string;
  measuredOutcome: string;
  evidence: string[];
  
  client?: string;
  industry?: string;
  challenge?: string;
  metrics?: { label: string; value: string }[];
  testimonial?: { quote: string; author: string; role: string };
}

export type CaseStudy = ConceptCaseStudy | ClientCaseStudy;
