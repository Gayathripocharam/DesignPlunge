import type { CaseStudy } from '@/types/casestudy';

export const businessAutomationPlatform: CaseStudy = {
  slug: 'business-automation-platform',
  type: 'concept',
  title: 'Business Automation Platform',
  subtitle: 'Selected Product Concept',
  category: 'Strategy · Engineering',
  tags: ['Automation', 'Workflow', 'Business Process', 'Integration'],
  description: 'An exploration of how legacy business systems can be bridged together through intelligent API workflows and automation.',
  thinking: 'A concept exploring how to bridge disconnected enterprise systems without complete rewrites.',
  coverImage: '/src/assets/illustrations/automation-platform.jpg',
  
  metadata: {
    type: 'PRODUCT CONCEPT',
    focus: 'SYSTEM INTEGRATION',
    disciplines: 'PRODUCT · ARCHITECTURE · ENGINEERING',
    status: 'CONCEPT'
  },
  
  hypothesis: 'Give operations teams a visual way to create and understand automations while retaining the developer-level control needed for complex workflows.',
  demonstrates: [
    'Workflow architecture',
    'Automation UX',
    'Developer/user boundary design',
    'Backend systems thinking',
    'AI/automation opportunity identification'
  ],
  
  context: {
    problem: 'Businesses attempt to automate using fragile scripts and messy spreadsheets, causing silent breaks and shadow IT.',
    audience: 'Operations teams, IT administrators, and business process managers.',
    whyItMatters: 'Fragile automations break silently, causing business disruption. A centralized platform ensures reliability, auditability, and scalability for mission-critical workflows.',
  },
  
  approach: {
    idea: 'A visual, node-based workflow builder combined with a powerful developer API for complex custom integrations.',
    principles: [
      'Visual logic: Make complex branching logic understandable at a glance.',
      'Developer escape hatches: Always provide a way to drop into code when the UI is insufficient.',
      'Traceability: Every workflow execution must be perfectly auditable.'
    ]
  },
  
  product: {
    description: 'The core product experience centers around a drag-and-drop canvas where users can connect triggers to actions. The interface abstracts away API complexity while maintaining powerful configuration options for advanced users.',
    images: ['/src/assets/illustrations/automation-platform.jpg']
  },
  
  architecture: {
    overview: 'The architecture strictly separates the visual builder from the execution engine, ensuring that UI updates or browser crashes never impact running background jobs.',
    technologies: ['React Flow', 'Node.js Execution Engine', 'Redis Queues', 'PostgreSQL'],
    systemNotes: [
      'State machine approach to workflow execution for reliable pause/resume capabilities.',
      'Idempotent API design to safely handle network retries during automation runs.',
      'WebWorker integration for smooth canvas rendering of complex graphs.'
    ]
  },
  
  keyDecisions: [
    {
      title: 'Canvas Navigation',
      explanation: 'We implemented a minimap and spatial navigation system because complex business workflows often grow far beyond a single screen size.'
    },
    {
      title: 'Testing Environments',
      explanation: 'Rather than trying to hide the complexity of enterprise data, the system embraces it, using collapsible layers so users can dive as deep as needed without losing context.'
    }
  ],



  relatedServices: ['ai-automation', 'web-engineering'],
  seo: {
    title: 'Business Automation Platform — Selected Product Concept — Design Plunge',
    description: 'Explore our Business Automation Platform concept: visual workflow automation for business processes.',
  },
};
