import type { Service } from '@/types/service';

export const designSystems: Service = {
  slug: 'design-systems',
  title: 'Design Systems & Frontend Architecture',
  tagline: 'Create consistent foundations that help products scale.',
  shortDescription: 'Create consistent foundations that help products scale.',
  icon: 'layers',

  problems: [
    'Inconsistent UI',
    'Slow design-to-code',
    'Growing complexity',
  ],
  bestFor: [
    'Growing products',
    'Product teams',
    'Engineering teams',
  ],
  notIdealFor: [
    'Early-stage MVPs still finding product-market fit',
    'One-off marketing websites',
  ],
  capabilities: [
    'Design system strategy and architecture',
    'Component library development',
    'Design token systems',
    'Frontend architecture consulting',
    'Storybook documentation',
    'Migration and adoption planning',
  ],
  deliverables: [
    {
      category: 'Core',
      items: [
        'Design tokens',
        'Components',
        'UI architecture',
        'Developer handoff',
      ],
    },
  ],
  process: [
    { title: 'Audit', description: 'We audit your existing UI patterns, components, and design-development workflow.' },
    { title: 'Architect', description: 'We define the token system, component structure, and governance model.' },
    { title: 'Build', description: 'We implement the design system as a production-grade component library.' },
    { title: 'Adopt', description: 'We support your team through migration, documentation, and training.' },
  ],
  technologies: ['React', 'Storybook', 'Figma', 'CSS Modules', 'TypeScript', 'Chromatic'],
  relatedWork: ['product-analytics-dashboard'],
  faqs: [
    { question: 'How long does it take to build a design system?', answer: 'A solid foundation can be established in 4–8 weeks. Full maturity is an ongoing process.' },
    { question: 'Can you integrate with our existing component library?', answer: 'Yes. We can extend, refactor, or replace existing systems based on your needs.' },
    { question: 'Do you provide training?', answer: 'Yes. We include documentation, Storybook examples, and team workshops.' },
  ],
  seo: {
    title: 'Design Systems & Frontend Architecture — Design Plunge',
    description: 'Build scalable frontend foundations with reusable design systems, component architecture, and maintainable engineering practices.',
  },
};
