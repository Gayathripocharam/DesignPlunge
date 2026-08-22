import type { Service } from '@/types/service';

export const aiAutomation: Service = {
  slug: 'ai-automation',
  title: 'AI & Automation Systems',
  tagline: 'Turn repetitive work into intelligent, scalable workflows.',
  shortDescription: 'Turn repetitive work into intelligent, scalable workflows.',
  icon: 'cpu',

  problems: [
    'Manual work',
    'Repetitive workflows',
    'Disconnected systems',
  ],
  bestFor: [
    'Operations-heavy teams',
    'Startups',
    'Product teams',
  ],
  notIdealFor: [
    'Businesses without defined workflows',
    'Teams looking for basic chatbots without integration',
  ],
  capabilities: [
    'AI workflow design',
    'Business process automation',
    'AI-assisted product features',
    'Workflow orchestration',
    'Intelligent document processing',
    'Custom AI integrations',
  ],
  deliverables: [
    {
      category: 'Core',
      items: [
        'Workflow mapping',
        'AI integrations',
        'Automation',
        'Data pipelines',
      ],
    },
  ],
  process: [
    { title: 'Assess', description: 'We identify the highest-impact automation opportunities in your workflow.' },
    { title: 'Prototype', description: 'We build working prototypes to validate feasibility and business value.' },
    { title: 'Implement', description: 'We develop production-grade AI systems integrated with your existing tools.' },
    { title: 'Optimize', description: 'We monitor, measure, and improve system performance over time.' },
  ],
  technologies: ['OpenAI', 'LangChain', 'Python', 'n8n', 'Zapier', 'Pinecone'],
  relatedWork: ['ai-operations-platform', 'business-automation-platform'],
  faqs: [
    { question: 'Do we need a large dataset to use AI?', answer: 'Not always. Many AI solutions use pre-trained models and require minimal custom data.' },
    { question: 'How do you ensure AI reliability?', answer: 'We build with guardrails, fallbacks, and human-in-the-loop review where appropriate.' },
    { question: 'Can AI integrate with our existing systems?', answer: 'Yes. We specialize in integrating AI with existing business tools and workflows.' },
  ],
  seo: {
    title: 'AI & Automation Systems — Design Plunge',
    description: 'Design and implement practical AI and automation systems that reduce repetitive work and improve business workflows.',
  },
};
