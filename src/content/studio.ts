/**
 * src/content/studio.ts
 *
 * Canonical business content for the Studio page.
 * UI configuration (animations, icons, layout) stays in components.
 */

// ── Team ─────────────────────────────────────────────────────────────────────

export interface TeamMember {
  name: string;
  role: string;
}

export const team: TeamMember[] = [
  { name: 'Gayathri', role: 'Product & Design' },
  { name: 'Pocha', role: 'Engineering & AI' },
];

// ── Core Principles ───────────────────────────────────────────────────────────

export interface CorePrinciple {
  title: string;
  desc: string;
}

export const corePrinciples: CorePrinciple[] = [
  { title: 'Build the right thing', desc: 'Validate hypotheses before writing code.' },
  { title: 'Simplicity wins', desc: 'Complex systems should feel simple.' },
  { title: 'Design with constraints', desc: 'Respects technical and business reality.' },
  { title: 'AI with purpose', desc: 'Leverage, not just for show.' },
  { title: 'Systems over screens', desc: 'Scalable foundations, not isolated interfaces.' },
];

// ── Why Design Plunge (approach pillars) ─────────────────────────────────────

export interface WhyPrinciple {
  title: string;
  subtitle: string;
  /** Labels shown as pill arrows in the UI, e.g. ["PROBLEM", "USER", "PRODUCT"] */
  flow: string[];
  meansTitle: string;
  meansDesc: string;
  tags: string[];
}

export const whyPrinciples: WhyPrinciple[] = [
  {
    title: 'Product thinking',
    subtitle: 'Start with the problem, users and business context.',
    flow: ['PROBLEM', 'USER', 'PRODUCT'],
    meansTitle: 'WHAT THIS MEANS',
    meansDesc: 'We start by understanding the problem before deciding what to build.',
    tags: ['Problem definition', 'User needs', 'Product direction'],
  },
  {
    title: 'Design + engineering',
    subtitle: 'Design decisions stay connected to technical reality.',
    flow: ['DESIGN', 'ENGINEERING'],
    meansTitle: 'WHAT THIS MEANS',
    meansDesc: 'Design decisions stay connected to technical reality from the beginning.',
    tags: ['UX architecture', 'UI systems', 'Technical validation'],
  },
  {
    title: 'Purposeful AI',
    subtitle: 'Use AI where it creates meaningful leverage — not because it\'s fashionable.',
    flow: ['HUMAN', 'AI', 'OUTCOME'],
    meansTitle: 'WHAT THIS MEANS',
    meansDesc: 'We use AI where it creates measurable leverage rather than adding complexity.',
    tags: ['Automation', 'AI workflows', 'Intelligent features'],
  },
  {
    title: 'Long-term systems',
    subtitle: 'Build foundations that remain useful after launch.',
    flow: ['PRODUCT', 'SYSTEM', 'SCALE'],
    meansTitle: 'WHAT THIS MEANS',
    meansDesc: 'We build foundations that remain useful as the product evolves.',
    tags: ['Architecture', 'Design systems', 'Documentation'],
  },
];

// ── How We Work (process steps — text only, icons live in the component) ─────

export interface ProcessStep {
  /** Used as the iconMap key in HowWeWork.tsx */
  id: string;
  title: string;
  desc: string;
  tags: string[];
}

export const processSteps: ProcessStep[] = [
  {
    id: 'discover',
    title: 'Discover',
    desc: 'Understand the business, users and constraints.',
    tags: ['Problem definition', 'Requirements', 'Opportunity map'],
  },
  {
    id: 'define',
    title: 'Define',
    desc: 'Turn ambiguity into a clear product direction.',
    tags: ['Personas', 'User flows', 'Scope'],
  },
  {
    id: 'design',
    title: 'Design',
    desc: 'Create and validate the experience.',
    tags: ['UX flows', 'UI system', 'Prototype'],
  },
  {
    id: 'build',
    title: 'Build',
    desc: 'Turn the validated design into production software.',
    tags: ['Frontend', 'Backend', 'Integrations'],
  },
  {
    id: 'launch',
    title: 'Launch',
    desc: 'Ship, measure and improve.',
    tags: ['Deployment', 'QA', 'Handoff'],
  },
];

// ── Working Together (engagement model) ──────────────────────────────────────

export interface EngagementPrinciple {
  num: string;
  title: string;
  desc: string;
  deliverables: string[];
}

export const engagementPrinciples: EngagementPrinciple[] = [
  {
    num: '01',
    title: 'DISCOVER TOGETHER',
    desc: 'We define the problem before we rush toward a solution.',
    deliverables: ['Research', 'Problem framing', 'Requirements', 'Opportunity mapping'],
  },
  {
    num: '02',
    title: 'DESIGN WITH ENGINEERING',
    desc: 'Ideas are tested against technical reality early.',
    deliverables: ['UX flows', 'Prototypes', 'Technical exploration', 'Design decisions'],
  },
  {
    num: '03',
    title: 'BUILD IN THE OPEN',
    desc: 'You see progress while the product is taking shape.',
    deliverables: ['Working builds', 'Regular reviews', 'Fast feedback', 'Shared decisions'],
  },
  {
    num: '04',
    title: 'LAUNCH WITH A FOUNDATION',
    desc: "The goal isn't simply to ship. It's to leave something useful behind.",
    deliverables: ['Production-ready product', 'Design system', 'Documentation', 'Next-step roadmap'],
  },
];
