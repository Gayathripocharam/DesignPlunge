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
  image?: string;
}

export const team: TeamMember[] = [
  { name: 'Gayathri', role: 'Product & Design', image: '/team/gayathri.png' },
  { name: 'Pocha', role: 'Engineering & AI', image: '/team/pocha.png' },
];

// ── Core Principles (How We Think) ────────────────────────────────────────────

export interface CorePrinciple {
  title: string;
  desc: string;
}

export const corePrinciples: CorePrinciple[] = [
  { title: 'Understand first. Build second.', desc: 'We take the time to deeply understand your business before writing a single line of code.' },
  { title: 'Research-driven decisions', desc: 'Assumptions are risky. We rely on user research and technical constraints to guide product direction.' },
  { title: 'Creative exploration', desc: 'Great ideas emerge from collaborative, creative exercises with our clients.' },
  { title: 'Strategy before execution', desc: 'A clear strategy ensures we build the right thing, not just the easiest thing.' },
];

// ── Process Steps (How We Work) ──────────────────────────────────────────────

export interface ProcessStep {
  /** Used as the iconMap key in HowWeWork.tsx */
  id: string;
  title: string;
  desc: string;
  tags: string[];
  badge: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 'research',
    title: 'Research',
    desc: 'Understand the business, users, and constraints.',
    tags: ['Problem definition', 'Requirements', 'Opportunity map'],
    badge: '1-2 weeks',
  },
  {
    id: 'alignment',
    title: 'Alignment',
    desc: 'Ensure everyone shares the same vision and goals.',
    tags: ['Stakeholder interviews', 'Shared understanding', 'Scope definition'],
    badge: '1 week',
  },
  {
    id: 'strategy',
    title: 'Strategy',
    desc: 'Define the path from ambiguity to clear direction.',
    tags: ['Product roadmap', 'Technical architecture', 'UX strategy'],
    badge: '1-2 weeks',
  },
  {
    id: 'design',
    title: 'Design',
    desc: 'Create and validate the experience.',
    tags: ['UX flows', 'UI system', 'Prototypes'],
    badge: '2-4 weeks',
  },
  {
    id: 'engineering',
    title: 'Engineering',
    desc: 'Turn validated designs into production software.',
    tags: ['Frontend', 'Backend', 'Integrations'],
    badge: '4-8 weeks',
  },
  {
    id: 'iteration',
    title: 'Iteration',
    desc: 'Ship, measure, and improve continuously.',
    tags: ['Deployment', 'Feedback loops', 'Optimization'],
    badge: 'Ongoing',
  },
];

// ── Engagement Principles (What We Value) ────────────────────────────────────

export interface EngagementPrinciple {
  num: string;
  title: string;
  desc: string;
  deliverables: string[];
}

export const engagementPrinciples: EngagementPrinciple[] = [
  {
    num: '01',
    title: 'LONG-TERM PARTNERSHIP',
    desc: 'We invest in relationships that last well beyond the first launch.',
    deliverables: ['Strategic alignment', 'Shared success', 'Trust'],
  },
  {
    num: '02',
    title: 'COLLABORATION',
    desc: 'We work with you, not just for you. Great products are built together.',
    deliverables: ['Open communication', 'Creative exercises', 'Shared decisions'],
  },
  {
    num: '03',
    title: 'TECHNICAL ROBUSTNESS',
    desc: 'We architect systems that are secure, scalable, and safe.',
    deliverables: ['Secure architecture', 'Scalable systems', 'Reliability'],
  },
  {
    num: '04',
    title: 'ONGOING SUPPORT',
    desc: 'We stand by our work, providing the support you need as your product evolves.',
    deliverables: ['Maintenance', 'Advisory', 'Continuous improvement'],
  },
];

