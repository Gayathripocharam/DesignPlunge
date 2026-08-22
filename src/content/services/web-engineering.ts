import type { Service } from '@/types/service';

export const webEngineering: Service = {
  slug: 'web-engineering',
  title: 'Web Application Engineering',
  tagline: 'Turn product thinking into reliable, production-ready software.',
  shortDescription: 'Turn product thinking into reliable, production-ready software.',
  icon: 'code',

  problems: [
    'Slow interfaces',
    'Development gaps',
    'Scaling problems',
  ],
  bestFor: [
    'Startups',
    'Product teams',
    'Existing products',
  ],
  notIdealFor: [
    'Projects requiring only simple marketing sites',
    'Teams looking for off-the-shelf templates',
  ],
  capabilities: [
    'Frontend architecture and development',
    'Full-stack application development',
    'API design and integration',
    'Performance optimization',
    'CI/CD and deployment pipelines',
    'Code review and technical consulting',
  ],
  deliverables: [
    {
      category: 'Core',
      items: [
        'System architecture',
        'Frontend',
        'Backend & APIs',
        'Performance',
      ],
    },
  ],
  process: [
    { title: 'Architect', description: 'We define the technical architecture, stack, and development approach.' },
    { title: 'Build', description: 'We develop in iterative sprints with continuous integration and review.' },
    { title: 'Test', description: 'We ensure quality through automated testing, code review, and performance audits.' },
    { title: 'Ship', description: 'We deploy to production with monitoring, documentation, and handover.' },
  ],
  technologies: ['React', 'TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Vercel', 'AWS'],
  relatedWork: ['product-analytics-dashboard', 'business-automation-platform'],
  faqs: [
    { question: 'What frontend frameworks do you use?', answer: 'Primarily React and Next.js with TypeScript. We choose the right tool for each project.' },
    { question: 'Can you work with our existing codebase?', answer: 'Yes. We regularly join existing projects, improve architecture, and ship features alongside your team.' },
    { question: 'Do you handle backend development?', answer: 'Yes. We build full-stack applications with Node.js, PostgreSQL, and modern cloud infrastructure.' },
  ],
  seo: {
    title: 'Web Application Engineering — Design Plunge',
    description: 'Build scalable web applications with modern frontend architecture, robust backend systems, and production-ready engineering from Design Plunge.',
  },
};
