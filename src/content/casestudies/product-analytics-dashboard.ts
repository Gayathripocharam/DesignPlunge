import type { CaseStudy } from '@/types/casestudy';

export const productAnalyticsDashboard: CaseStudy = {
  slug: 'product-analytics-dashboard',
  type: 'concept',
  title: 'Product Analytics Dashboard',
  subtitle: 'Selected Product Concept',
  category: 'UX/UI · Frontend Engineering',
  tags: ['Analytics', 'Dashboard', 'Data Visualization', 'SaaS'],
  description: 'A dashboard concept focused on turning complex product telemetry into clear, actionable business signals.',
  thinking: 'A concept exploring how product signals can become clearer decisions rather than just more charts.',
  coverImage: '/src/assets/illustrations/product-dashboard.jpg',
  
  metadata: {
    type: 'PRODUCT CONCEPT',
    focus: 'DATA VISUALIZATION',
    disciplines: 'UX · UI · ENGINEERING',
    status: 'CONCEPT'
  },
  
  hypothesis: 'Help product teams answer common product questions without requiring every stakeholder to interpret raw analytics or depend on SQL-heavy workflows.',
  demonstrates: [
    'Information visualization',
    'Progressive disclosure',
    'Data-heavy UX',
    'Product thinking',
    'Decision-oriented interface design'
  ],
  
  context: {
    problem: 'Product teams often rely heavily on data analysts to write SQL or configure complex dashboards just to interpret basic usage metrics.',
    audience: 'Product managers, designers, and non-technical stakeholders.',
    whyItMatters: 'When data is difficult to access or interpret, product teams make fewer data-informed decisions and rely more on intuition, increasing the risk of building the wrong features.',
  },
  
  approach: {
    idea: 'Empower product managers to self-serve insights through a highly constrained, progressive-disclosure interface designed around product questions.',
    principles: [
      'Progressive disclosure: Show high-level health metrics first.',
      'Opinionated defaults: Pre-configure the most common product metrics.',
      'Clarity over decoration: Remove all unnecessary visual noise from charts.'
    ]
  },
  
  product: {
    description: 'The dashboard features a composable chart system that adapts to the data being displayed. Instead of a blank canvas, users are guided through a series of "questions" they want answered about their product.',
    caption: 'Product telemetry and user flow visualization',
    images: ['/src/assets/illustrations/product-dashboard.jpg']
  },
  
  architecture: {
    overview: 'The concept utilizes a modern frontend architecture designed to handle large datasets efficiently in the browser.',
    technologies: ['React', 'D3.js / Recharts', 'TypeScript', 'CSS Modules'],
    systemNotes: [
      'Client-side data aggregation for instant filtering without server roundtrips.',
      'Virtualization techniques for rendering large data tables smoothly.',
      'Accessible color palettes for data visualization.'
    ]
  },
  
  keyDecisions: [
    {
      title: 'Limiting Chart Types',
      explanation: 'We deliberately restricted the available chart types to Bar, Line, and Cohort tables to prevent users from creating misleading or unreadable visualizations (like 3D pie charts).'
    },
    {
      title: 'Natural Language Filtering',
      explanation: 'Instead of abstract charts, the dashboard links metrics directly to specific product features, helping teams understand exactly where users drop off.'
    }
  ],
  


  relatedServices: ['product-design', 'web-engineering', 'design-systems'],
  seo: {
    title: 'Product Analytics Dashboard — Selected Product Concept — Design Plunge',
    description: 'Explore our Product Analytics Dashboard concept: intuitive data visualization for product teams.',
  },
};
