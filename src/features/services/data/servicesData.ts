import type { Capability, RailStage, ServiceDetailData } from '../../../components/types';

// ─── Capability cards (hero grid) ────────────────────────────────────────────

export const capabilities: Capability[] = [
  {
    num: 'N.01',
    icon: 'fa-regular fa-compass',
    title: 'Product design',
    tags: ['Strategy', 'UX', 'UI'],
    targetId: 'service-01',
  },
  {
    num: 'N.02',
    icon: 'fa-regular fa-code',
    title: 'Web engineering',
    tags: ['Frontend', 'Backend', 'Systems'],
    targetId: 'service-02',
  },
  {
    num: 'N.03',
    icon: 'fa-regular fa-sparkles',
    title: 'AI & automation',
    tags: ['Workflows', 'Integrations', 'Intelligence'],
  },
  {
    num: 'N.04',
    icon: 'fa-regular fa-layer-group',
    title: 'Design systems',
    tags: ['UI', 'Tokens', 'Architecture'],
  },
];

// ─── Hero pipeline rail ───────────────────────────────────────────────────────

export const pipelineStages: RailStage[] = [
  { icon: 'fa-regular fa-flag',     title: 'Strategy',    desc: 'Positioning, roadmap, success metrics' },
  { icon: 'fa-regular fa-pen-nib',  title: 'Design',      desc: 'Wireframes, UI system, prototypes' },
  { icon: 'fa-regular fa-code',     title: 'Engineering', desc: 'Frontend, APIs, production infra' },
  { icon: 'fa-regular fa-sparkles', title: 'AI',          desc: 'Workflows, integrations, intelligence' },
];

// ─── Full service details ─────────────────────────────────────────────────────

export const serviceDetails: ServiceDetailData[] = [
  {
    id: 'service-01',
    index: '01',
    title: 'Digital product design',
    subtitle: 'From complex idea to clear, useful product.',
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
    get:   ['Product strategy', 'User flows', 'Wireframes', 'UI system'],
    bestFor: [
      { icon: 'fa-regular fa-rocket',         name: 'Startups',          hint: 'Zero to one' },
      { icon: 'fa-regular fa-users',          name: 'Product teams',     hint: 'New features' },
      { icon: 'fa-regular fa-arrows-rotate',  name: 'Existing products', hint: 'Redesigns' },
    ],
    next: {
      current: 2,
      total: 4,
      title: 'Web application engineering',
      targetId: 'service-02',
    },
  },
  {
    id: 'service-02',
    index: '02',
    title: 'Web application engineering',
    subtitle: 'Turn product thinking into reliable, production-ready software.',
    flowLabel: 'Build pipeline',
    flow: [
      { icon: 'fa-regular fa-window',   title: 'Interface',  desc: 'Design handoff, tokens' },
      { icon: 'fa-regular fa-browser',  title: 'Frontend',   desc: 'React, state, UI logic' },
      { icon: 'fa-regular fa-plug',     title: 'API',        desc: 'Endpoints, business logic' },
      { icon: 'fa-regular fa-database', title: 'Database',   desc: 'Schema, data models' },
      { icon: 'fa-regular fa-rocket',   title: 'Deployment', desc: 'CI/CD, monitoring, scale' },
    ],
    solve: ['Slow interfaces', 'Development gaps', 'Scaling problems'],
    get:   ['System architecture', 'Backend & APIs', 'Frontend', 'Performance'],
    bestFor: [
      { icon: 'fa-regular fa-rocket',        name: 'Startups',          hint: 'Zero to one' },
      { icon: 'fa-regular fa-users',         name: 'Product teams',     hint: 'New features' },
      { icon: 'fa-regular fa-arrows-rotate', name: 'Existing products', hint: 'Redesigns' },
    ],
    next: {
      current: 3,
      total: 4,
      title: 'AI & automation',
      targetId: 'service-03',
    },
  },
  {
    id: 'service-03',
    index: '03',
    title: 'AI & automation',
    subtitle: 'Integrate intelligence into your product and business workflows.',
    flowLabel: 'Automation pipeline',
    flow: [
      { icon: 'fa-regular fa-magnifying-glass', title: 'Audit',      desc: 'Where AI adds real value' },
      { icon: 'fa-regular fa-diagram-project',  title: 'Workflow',   desc: 'Map & design the process' },
      { icon: 'fa-regular fa-robot',            title: 'Build',      desc: 'Integrate models & APIs' },
      { icon: 'fa-regular fa-gauge-high',       title: 'Measure',    desc: 'Track outcomes & accuracy' },
      { icon: 'fa-regular fa-rotate',           title: 'Iterate',    desc: 'Refine & expand coverage' },
    ],
    solve: ['Manual bottlenecks', 'Missed AI opportunities', 'Fragmented tools'],
    get:   ['AI integration', 'Workflow automation', 'Custom models', 'Monitoring'],
    bestFor: [
      { icon: 'fa-regular fa-building',      name: 'Businesses',    hint: 'Scaling operations' },
      { icon: 'fa-regular fa-users',         name: 'Product teams', hint: 'AI-powered features' },
      { icon: 'fa-regular fa-arrows-rotate', name: 'Enterprises',   hint: 'Workflow automation' },
    ],
    next: {
      current: 4,
      total: 4,
      title: 'Design systems',
      targetId: 'service-04',
    },
  },
  {
    id: 'service-04',
    index: '04',
    title: 'Design systems',
    subtitle: 'A shared language for your product, team, and codebase.',
    flowLabel: 'System build',
    flow: [
      { icon: 'fa-regular fa-eye-dropper',  title: 'Tokens',       desc: 'Color, type, spacing, motion' },
      { icon: 'fa-regular fa-shapes',       title: 'Components',   desc: 'Atomic, reusable UI blocks' },
      { icon: 'fa-regular fa-book-open',    title: 'Documentation', desc: 'Usage rules & guidelines' },
      { icon: 'fa-regular fa-code',         title: 'Code',         desc: 'Framework-ready components' },
      { icon: 'fa-regular fa-handshake',    title: 'Adoption',     desc: 'Team rollout & governance' },
    ],
    solve: ['Inconsistent UI', 'Slow design-dev handoff', 'Duplicated work'],
    get:   ['Token library', 'Component library', 'Figma system', 'Dev docs'],
    bestFor: [
      { icon: 'fa-regular fa-building',        name: 'Growing teams',     hint: 'Multiple surfaces' },
      { icon: 'fa-regular fa-laptop-code',     name: 'Engineering-led',   hint: 'Code-first systems' },
      { icon: 'fa-regular fa-arrows-rotate',   name: 'Existing products', hint: 'Consistency reset' },
    ],
    next: {
      current: 1,
      total: 4,
      title: 'Digital product design',
      targetId: 'service-01',
    },
  },
];
