import type { Service } from '@/types/service';

export const productDesign: Service = {
  slug: 'product-design',
  title: 'Digital Product Design',
  tagline: 'From complex idea to clear, useful product.',
  shortDescription: 'From complex idea to clear, useful product.',
  icon: 'pen-tool',

  problems: [
    'Unclear direction',
    'Complex journeys',
    'Inconsistent UX',
  ],
  bestFor: [
    'Startups',
    'Product teams',
    'Existing products',
  ],
  notIdealFor: [
    'Teams looking only for graphic design or branding',
    'Companies wanting to skip strategy and go straight to visual design',
  ],
  capabilities: [
    'Product strategy and roadmapping',
    'User research and testing',
    'Information architecture',
    'UX/UI design',
    'Design system creation',
    'Prototyping and validation',
  ],
  deliverables: [
    {
      category: 'Core',
      items: [
        'Product strategy',
        'User flows',
        'Wireframes',
        'UI system',
      ],
    },
  ],
  process: [
    { title: 'Discover', description: 'We research your users, market, and business goals to define the right product direction.' },
    { title: 'Define', description: 'We translate insights into clear product requirements, user flows, and information architecture.' },
    { title: 'Design', description: 'We create high-fidelity designs and interactive prototypes for validation.' },
    { title: 'Deliver', description: 'We hand off production-ready designs with a complete design system.' },
  ],
  technologies: ['Figma', 'Framer', 'Maze', 'Hotjar', 'Notion'],
  relatedWork: ['ai-operations-platform', 'product-analytics-dashboard'],
  faqs: [
    { question: 'How long does a typical product design engagement take?', answer: 'Most engagements run 6–12 weeks depending on complexity. We scope every project individually.' },
    { question: 'Do you work with existing products or only new ones?', answer: 'Both. We redesign existing products and design new ones from scratch.' },
    { question: 'What if we already have a design team?', answer: 'We integrate with your team. We can lead, augment, or provide specialized expertise.' },
  ],
  seo: {
    title: 'Digital Product Design — Design Plunge',
    description: 'Design Plunge helps businesses turn complex ideas into clear, useful digital products through product strategy, UX research, UX/UI design, and design systems.',
  },
};
