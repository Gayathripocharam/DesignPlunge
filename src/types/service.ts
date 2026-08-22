export interface ServiceProcess {
  title: string;
  description: string;
}

export interface ServiceDeliverableTier {
  category: string;
  items: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceSEO {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  icon: string; // Lucide icon name, e.g. 'layout-dashboard'

  problems: string[];
  bestFor: string[];
  notIdealFor?: string[];
  capabilities: string[];
  deliverables: ServiceDeliverableTier[];

  process: ServiceProcess[];

  technologies: string[];

  relatedWork: string[]; // slugs referencing case studies

  faqs: ServiceFAQ[];

  seo: ServiceSEO;
}
