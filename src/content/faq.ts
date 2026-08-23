/**
 * src/content/faq.ts
 *
 * Canonical FAQ content. UI layout and interaction lives in FAQPreview.tsx.
 */

export interface FAQ {
  category: string;
  question: string;
  answer: string;
}

export const homeFaqs: FAQ[] = [
  {
    category: 'INVESTMENT',
    question: 'How much does a project cost?',
    answer:
      'Project costs vary based on scope, complexity, and timeline. After an initial discovery call, we provide a detailed proposal with transparent, fixed or milestone-based pricing.',
  },
  {
    category: 'TIMELINE',
    question: 'How long does a typical project take?',
    answer:
      'Timelines depend on scope, complexity and level of involvement. We define milestones and expected delivery stages after understanding the project.',
  },
  {
    category: 'EXISTING PRODUCT',
    question: 'Can you work with an existing product?',
    answer:
      'Yes. We frequently integrate with existing products and codebases to refactor UX/UI, build new capabilities, improve architecture, or accelerate feature delivery alongside your team.',
  },
  {
    category: 'CONFIDENTIALITY',
    question: 'Can you sign an NDA?',
    answer:
      'Absolutely. We respect your intellectual property and confidentiality, and we are happy to execute a Non-Disclosure Agreement before discussing project details.',
  },
  {
    category: 'FIT',
    question: 'Do you work with early-stage startups?',
    answer:
      'Yes. We help early-stage founders shape their initial concepts and build scalable product foundations.',
  },
  {
    category: 'PROCESS',
    question: 'What happens after I contact you?',
    answer:
      'Following our call, we prepare a tailored proposal covering scope, timeline, team structure, and pricing. Once approved, we kick off with an alignment workshop and begin sprint execution.',
  },
];

export const servicesFaqs: FAQ[] = [
  {
    category: 'ENGAGEMENT',
    question: 'What does a typical engagement look like?',
    answer:
      'A typical engagement involves a dedicated cross-functional team (design, engineering, AI) working closely with your stakeholders in iterative cycles, from initial discovery through to launch and beyond.',
  },
  {
    category: 'EXISTING PRODUCT',
    question: 'Can you work with an existing product?',
    answer:
      'Yes. We frequently integrate with existing products and codebases to refactor UX/UI, build new capabilities, improve architecture, or accelerate feature delivery alongside your team.',
  },
  {
    category: 'GETTING STARTED',
    question: 'How do we get started?',
    answer:
      'Following our initial call, we prepare a tailored proposal covering scope, timeline, and pricing. Once approved, we kick off with an alignment workshop.',
  },
];
