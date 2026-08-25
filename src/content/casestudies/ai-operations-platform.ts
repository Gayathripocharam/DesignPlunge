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
  
  hypothesis: 'Give AI operations teams a unified view of deployment health, model status, and operational signals so they can identify issues without switching between disconnected tools.',
  demonstrates: [
    'Complex information architecture',
    'AI product UX',
    'Operational dashboards',
    'Systems thinking'
  ],
  
  context: {
    problem: 'AI deployment workflows become fragmented across monitoring, deployment, and operational tools.',
    audience: 'Enterprise AI teams and MLOps engineers.',
    whyItMatters: 'As organizations scale their AI initiatives, the lack of centralized visibility creates operational risk and slows down the time-to-production for new models.',
  },
  
  approach: {
    idea: 'A dashboard-first workspace centered on visibility and actionable system state.',
    principles: [
      'Visibility first: Surface anomalies before they become outages.',
      'Actionable density: Provide high-information density without visual clutter.',
      'Workflow automation: Reduce manual deployment steps to single-click actions.'
    ]
  },
  
  product: {
    description: 'We designed a dark-mode optimized command center that brings model performance, resource utilization, and deployment pipelines into a single pane of glass.',
    caption: 'Model training and deployment pipeline view',
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
