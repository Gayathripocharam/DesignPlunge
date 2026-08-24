import type { RailStage, ServiceDetailData } from '../components/types';

export type ServiceSlug =
  | 'digital-products'
  | 'web-applications'
  | 'ai-systems'
  | 'design-systems';

export interface Service {
  id: string; // '01'
  slug: ServiceSlug; // 'digital-products'
  title: string;
  shortTitle: string; // Used in cards, e.g. 'Product design'
  description: string;
  tags: string[]; // Used in detail page
  metadata: string[]; // Used in overview page
  ctaLabel: string; // Used in ServiceDetailPage CTA
  iconFa: string; // FontAwesome icon class
  iconLucide: string; // Lucide icon name or internal identifier (e.g. 'Diamond')
  accordionDesc: string; // Used in ServiceShowcase inline accordion
  capabilities: string[]; // Used in ServiceShowcase inline accordion
  detail: ServiceDetailData; // The deep content for the detail page
}

export const services: Service[] = [
  {
    id: '01',
    slug: 'digital-products',
    title: 'Digital product design',
    shortTitle: 'Product design',
    description: 'End-to-end product design and engineering.',
    tags: ['Strategy', 'UX', 'UI'],
    metadata: ['PRODUCT STRATEGY', 'UX / UI', 'PROTOTYPING', 'ENGINEERING'],
    ctaLabel: 'Talk through your product \u2192',
    iconFa: 'fa-regular fa-compass',
    iconLucide: 'Diamond',
    accordionDesc: 'End-to-end product design and engineering.',
    capabilities: ['Product strategy', 'UX/UI design', 'Prototyping', 'Engineering'],
    detail: {
      id: 'service-01',
      index: '01',
      title: 'Digital product design',
      subtitle: 'From complex idea to clear, useful product.',
      whenYouNeedIt: 'You have a complex product requirement but lack the clarity or capacity to build it.',
      theProblem: 'Complex product ideas become difficult to turn into coherent, usable software.',
      whatWeDo: 'We define the product strategy, design the interface, and build the foundational system.',
      whatChanges: 'Turn complex product requirements into clear, production-ready digital experiences that teams can iterate on confidently.',
      flowLabel: 'Product direction',
      flow: [
        { icon: 'fa-regular fa-triangle-exclamation', title: 'Problem',   desc: "What's broken today" },
        { icon: 'fa-regular fa-lightbulb',            title: 'Opportunity', desc: 'Where the leverage is' },
        { icon: 'fa-regular fa-user',                 title: 'User',      desc: 'Who we design for' },
        { icon: 'fa-regular fa-arrows-turn-right',    title: 'Flow',      desc: 'How they move through it' },
        { icon: 'fa-regular fa-window',               title: 'Interface', desc: 'What they see and touch' },
      ],
      outputs: ['Wireframe', 'System', 'Prototype'],
      solve: ['Unclear direction', 'Complex journeys', 'Inconsistent UX'],
      get: ['Product roadmap', 'High-fidelity UI', 'Interactive prototypes'],
      bestFor: [
        { name: 'Founders', icon: 'fa-regular fa-rocket', hint: 'Validating concepts' },
        { name: 'Product Leaders', icon: 'fa-regular fa-chart-line-up', hint: 'Scaling platforms' },
      ],
      next: { current: 1, total: 4, title: 'See how we build web applications', link: '/services/web-applications' },
    }
  },
  {
    id: '02',
    slug: 'web-applications',
    title: 'Web engineering',
    shortTitle: 'Web engineering',
    description: 'Scalable, high-performance web platforms.',
    tags: ['Frontend', 'Backend', 'Systems'],
    metadata: ['ARCHITECTURE', 'FRONTEND', 'BACKEND', 'INTEGRATIONS'],
    ctaLabel: 'Discuss your application \u2192',
    iconFa: 'fa-regular fa-code',
    iconLucide: 'Layout',
    accordionDesc: 'Scalable, high-performance web platforms.',
    capabilities: ['React/Next.js', 'APIs', 'Cloud infrastructure'],
    detail: {
      id: 'service-02',
      index: '02',
      title: 'Web engineering',
      subtitle: 'Scalable foundations for digital products.',
      whenYouNeedIt: 'Your product has outgrown its current technical foundation.',
      theProblem: 'Growing applications accumulate UX and architectural complexity.',
      whatWeDo: 'We re-architect the system and rebuild the frontend to support future scale.',
      whatChanges: 'Build web applications that are easier to use today and easier to evolve tomorrow.',
      flowLabel: 'Technical direction',
      flow: [
        { icon: 'fa-regular fa-server', title: 'Architecture', desc: 'System design' },
        { icon: 'fa-regular fa-database', title: 'Data', desc: 'Schema and state' },
        { icon: 'fa-regular fa-brackets-curly', title: 'Frontend', desc: 'Client implementation' },
        { icon: 'fa-regular fa-cloud', title: 'Deployment', desc: 'Production infra' },
      ],
      outputs: ['React/Next.js', 'APIs', 'Cloud Infra'],
      solve: ['Slow performance', 'Technical debt', 'Scaling issues'],
      get: ['Production code', 'Technical docs', 'CI/CD pipelines'],
      bestFor: [
        { name: 'CTOs', icon: 'fa-regular fa-laptop-code', hint: 'Modernizing tech stacks' },
      ],
      next: { current: 2, total: 4, title: 'Explore AI automation', link: '/services/ai-systems' },
    }
  },
  {
    id: '03',
    slug: 'ai-systems',
    title: 'AI & automation',
    shortTitle: 'AI & automation',
    description: 'Intelligent automation and integrations.',
    tags: ['Workflows', 'Integrations', 'Intelligence'],
    metadata: ['AI WORKFLOWS', 'AUTOMATION', 'RAG', 'AGENTS'],
    ctaLabel: 'Explore where AI can create leverage \u2192',
    iconFa: 'fa-regular fa-sparkles',
    iconLucide: 'Cpu',
    accordionDesc: 'Intelligent automation and integrations.',
    capabilities: ['Custom AI Agents', 'Automated workflows', 'RAG pipelines'],
    detail: {
      id: 'service-03',
      index: '03',
      title: 'AI & automation',
      subtitle: 'Connecting systems, accelerating work.',
      whenYouNeedIt: 'Your team sees opportunities for AI, but doesn\'t know where it belongs in the existing workflow.',
      theProblem: 'Adding AI without understanding the underlying workflow can create more complexity rather than less.',
      whatWeDo: 'We identify where intelligence or automation can remove friction, then design and engineer the surrounding system.',
      whatChanges: 'AI becomes part of a useful workflow rather than an isolated feature.',
      flowLabel: 'Automation direction',
      flow: [
        { icon: 'fa-regular fa-magnifying-glass', title: 'Audit', desc: 'Manual bottlenecks' },
        { icon: 'fa-regular fa-wand-magic-sparkles', title: 'AI Model', desc: 'Context and logic' },
        { icon: 'fa-regular fa-plug', title: 'Integration', desc: 'Connecting APIs' },
        { icon: 'fa-regular fa-bolt', title: 'Deployment', desc: 'Active workflows' },
      ],
      outputs: ['Custom AI Agents', 'Automated Workflows'],
      solve: ['Manual data entry', 'Disconnected tools', 'Slow operations'],
      get: ['Agent logic', 'API bridges', 'Efficiency gains'],
      bestFor: [
        { name: 'Operations', icon: 'fa-regular fa-gears', hint: 'Scaling capacity' },
      ],
      next: { current: 3, total: 4, title: 'Scale with Design Systems', link: '/services/design-systems' },
    }
  },
  {
    id: '04',
    slug: 'design-systems',
    title: 'Design systems',
    shortTitle: 'Design systems',
    description: 'Scalable UI foundations and component architecture.',
    tags: ['UI', 'Tokens', 'Architecture'],
    metadata: ['TOKENS', 'COMPONENTS', 'PATTERNS', 'PRODUCT UI'],
    ctaLabel: 'Talk through your design-system problem \u2192',
    iconFa: 'fa-regular fa-layer-group',
    iconLucide: 'Layers',
    accordionDesc: 'Scalable UI foundations and component architecture.',
    capabilities: ['Figma library', 'React components', 'Usage guidelines'],
    detail: {
      id: 'service-04',
      index: '04',
      title: 'Design systems',
      subtitle: 'Consistency at scale across every screen.',
      whenYouNeedIt: 'Your design and engineering teams are shipping inconsistent interfaces.',
      theProblem: 'Product teams lose velocity when every interface is designed and implemented independently.',
      whatWeDo: 'We audit your patterns and build a centralized, scalable component architecture.',
      whatChanges: 'Create systems that make products more consistent while allowing teams to ship new experiences faster.',
      flowLabel: 'System direction',
      flow: [
        { icon: 'fa-regular fa-swatchbook', title: 'Tokens', desc: 'Color, type, spacing' },
        { icon: 'fa-regular fa-cube', title: 'Primitives', desc: 'Buttons, inputs' },
        { icon: 'fa-regular fa-cubes', title: 'Components', desc: 'Complex assemblies' },
        { icon: 'fa-regular fa-book', title: 'Documentation', desc: 'Usage guidelines' },
      ],
      outputs: ['Figma Library', 'React Components'],
      solve: ['Design debt', 'Slow shipping', 'Visual inconsistency'],
      get: ['Token system', 'Component library', 'Design guidelines'],
      bestFor: [
        { name: 'Design Teams', icon: 'fa-regular fa-pen-ruler', hint: 'Unifying output' },
      ],
      next: { current: 4, total: 4, title: 'Back to Product Design', link: '/services/digital-products' },
    }
  },
];

export const pipelineStages: RailStage[] = [
  { icon: 'fa-regular fa-flag',     title: 'Strategy',    desc: 'Positioning, roadmap, success metrics' },
  { icon: 'fa-regular fa-pen-nib',  title: 'Design',      desc: 'Wireframes, UI system, prototypes' },
  { icon: 'fa-regular fa-code',     title: 'Engineering', desc: 'Frontend, APIs, production infra' },
  { icon: 'fa-regular fa-sparkles', title: 'AI',          desc: 'Workflows, integrations, intelligence' },
];

export function getServiceBySlug(slug: string): Service | undefined {
  // Strip '/services/' prefix if accidentally provided
  const normalizedSlug = slug.replace(/^\/services\//, '');
  return services.find(s => s.slug === normalizedSlug);
}
