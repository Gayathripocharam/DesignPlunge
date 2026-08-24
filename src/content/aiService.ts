export interface AICapability {
  title: string;
  problem: string;
  role: string;
  systemComponents: string[];
  outcome: string;
  evidence: 'capability' | 'concept';
}

export const aiCapabilities: AICapability[] = [
  {
    title: 'Intelligent workflows',
    problem: 'Repetitive manual work',
    role: 'Assist / automate',
    systemComponents: ['AI', 'APIs', 'orchestration'],
    outcome: 'Less manual work',
    evidence: 'capability',
  },
  {
    title: 'Knowledge interfaces',
    problem: 'Scattered information',
    role: 'Retrieve / summarize',
    systemComponents: ['Retrieval', 'model', 'UI'],
    outcome: 'Faster information access',
    evidence: 'capability',
  },
  {
    title: 'AI product features',
    problem: 'Complex user tasks',
    role: 'Assist users',
    systemComponents: ['Product', 'model'],
    outcome: 'Easier workflows',
    evidence: 'concept',
  },
  {
    title: 'Automation',
    problem: 'Fragile manual processes',
    role: 'Reason / trigger',
    systemComponents: ['Workflow', 'APIs'],
    outcome: 'More consistent execution',
    evidence: 'concept',
  },
  {
    title: 'Human-in-loop',
    problem: 'High-risk decisions',
    role: 'Assist',
    systemComponents: ['AI', 'validation', 'review'],
    outcome: 'Controlled automation',
    evidence: 'capability',
  },
];

export const aiSystemFlow = [
  'USER',
  'WORKFLOW',
  'ORCHESTRATION',
  'AI',
  'VALIDATION',
  'HUMAN',
  'ACTION',
];

export const aiNotForEverything = {
  title: "AI isn't always the answer.",
  description:
    "We don't add AI because it's fashionable. If a deterministic rule, better UX, or simpler automation solves the problem more reliably, that's usually the better system.",
};

export interface AIConceptMapping {
  slug: string;
  capabilitiesDemonstrated: string[];
}

export const aiConceptMappings: AIConceptMapping[] = [
  {
    slug: 'ai-operations-platform',
    capabilitiesDemonstrated: [
      'Complex AI operations',
      'Operational visibility',
      'AI product UX'
    ]
  },
  {
    slug: 'business-automation-platform',
    capabilitiesDemonstrated: [
      'Workflow automation',
      'AI-assisted orchestration',
      'Human-in-the-loop systems'
    ]
  },
  {
    slug: 'product-analytics-dashboard',
    capabilitiesDemonstrated: [
      'Natural-language exploration',
      'Data assistance'
    ]
  }
];
