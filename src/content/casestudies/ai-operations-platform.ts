import type { CaseStudy } from '@/types/casestudy';

export const aiOperationsPlatform: CaseStudy = {
  slug: 'ai-operations-platform',
  type: 'concept',
  title: 'AI Operations Platform',
  subtitle: 'Selected Product Concept',
  category: 'Product Strategy · UX/UI · Engineering',
  tags: ['AI', 'Operations', 'Dashboard', 'Automation'],
  description: 'A concept platform designed to centralize AI model management, monitoring, and deployment workflows into a unified operations interface.',
  thinking: 'A concept exploring how repetitive operational work could be consolidated into one intelligent workspace.',
  coverImage: '/src/assets/illustrations/ai-operations.jpg',
  
  metadata: {
    type: 'PRODUCT CONCEPT',
    focus: 'OPERATIONS / AI',
    disciplines: 'PRODUCT · UX · ENGINEERING',
    status: 'CONCEPT'
  },
  
  context: {
    problem: 'Operations teams often work across disconnected tools and repetitive workflows when managing complex AI deployments, leading to fragmented monitoring and deployment bottlenecks.',
    audience: 'Enterprise AI teams and MLOps engineers.',
    whyItMatters: 'As organizations scale their AI initiatives, the lack of centralized visibility creates operational risk and slows down the time-to-production for new models.',
  },
  
  approach: {
    idea: 'A centralized workspace that brings operational intelligence, model health monitoring, and deployment automation into one unified system.',
    principles: [
      'Visibility first: Surface anomalies before they become outages.',
      'Actionable density: Provide high-information density without visual clutter.',
      'Workflow automation: Reduce manual deployment steps to single-click actions.'
    ]
  },
  
  product: {
    description: 'We explored a dashboard-first architecture that surfaces model health, performance metrics, and deployment status in a single view. The design prioritizes clarity and actionable information, providing teams with instant insight into their entire model fleet.',
    images: ['/src/assets/illustrations/ai-operations.jpg']
  },
  
  architecture: {
    overview: 'The concept architecture uses a modular frontend designed to integrate seamlessly with real-time data pipelines and common ML frameworks.',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'WebGL for data visualization'],
    systemNotes: [
      'Real-time data synchronization architecture for live metrics.',
      'Role-based access control (RBAC) patterns for deployment authorization.',
      'Modular widget system for customizable dashboard views.'
    ]
  },
  
  keyDecisions: [
    {
      title: 'Dashboard vs. Deep-dive',
      explanation: 'We prioritized a high-level dashboard that aggregates status across all models, allowing users to drill down into specific models only when anomalies are detected, rather than forcing them to sift through individual logs.'
    },
    {
      title: 'Visualizing Confidence',
      explanation: 'Instead of just showing raw prediction metrics, the interface uses color-coded confidence scoring to help human operators instantly understand model reliability.'
    }
  ],
  
  whatNext: 'Integrating active learning feedback loops directly into the operational dashboard.',
  
  artifacts: [
    'System Architecture Diagram',
    'Component Library (Figma)',
    'Interactive Prototype',
    'React Workflow Sandbox'
  ],
  
  relatedServices: ['product-design', 'ai-automation'],
  seo: {
    title: 'AI Operations Platform — Selected Product Concept — Design Plunge',
    description: 'Explore our AI Operations Platform concept: a unified interface for AI model management, monitoring, and deployment workflows.',
  },
};
