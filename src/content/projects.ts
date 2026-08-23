import aiOpsImg from '@/assets/illustrations/ai-operations.jpg';
import productDashImg from '@/assets/illustrations/product-dashboard.jpg';
import autoPlatformImg from '@/assets/illustrations/automation-platform.jpg';

export interface Project {
  slug: string;
  title: string;
  /** Lowercase/short display title — used in the services variant of SelectedWork */
  shortTitle: string;
  /** Main description used in WorkPage list and CaseStudy hero */
  description: string;
  /** Short hook shown in the home variant of SelectedWork */
  tagline: string;
  /** Tagline shown in the services variant of SelectedWork */
  thinking?: string;
  image: string;
  /** Badge label shown above the title, e.g. "SELECTED PRODUCT CONCEPT" */
  label: string;
  problem: string;
  demonstrates: string[];
}

export const projects: Project[] = [
  {
    slug: 'ai-operations-platform',
    title: 'AI Operations Platform',
    shortTitle: 'AI operations platform',
    description: 'A concept exploring how repetitive operational work could be consolidated into one intelligent workspace.',
    tagline: 'Simplifying complex operational workflows through intelligent automation.',
    thinking: 'Making complex operational work easier to understand and act on.',
    image: aiOpsImg,
    label: 'SELECTED PRODUCT CONCEPT',
    problem: 'AI deployment workflows become fragmented across monitoring, deployment, and operational tools.',
    demonstrates: ['Complex information architecture', 'AI product UX', 'Operational dashboards'],
  },
  {
    slug: 'product-analytics-dashboard',
    title: 'Product Analytics Dashboard',
    shortTitle: 'Product analytics dashboard',
    description: 'A concept exploring how product signals can become clearer decisions rather than just more charts.',
    tagline: 'Bringing clarity to complex data through intuitive visualization.',
    thinking: 'Bringing clarity to complex data through intuitive visualization.',
    image: productDashImg,
    label: 'SELECTED PRODUCT CONCEPT',
    problem: 'Product teams often rely heavily on data analysts to write SQL or configure complex dashboards just to interpret basic usage metrics.',
    demonstrates: ['Information visualization', 'Progressive disclosure', 'Data-heavy UX'],
  },
  {
    slug: 'business-automation-platform',
    title: 'Business Automation Platform',
    shortTitle: 'Business automation platform',
    description: 'A concept exploring how to bridge disconnected enterprise systems without complete rewrites.',
    tagline: 'Connecting legacy systems to create seamless business processes.',
    thinking: 'Connecting legacy systems to create seamless business processes.',
    image: autoPlatformImg,
    label: 'SELECTED PRODUCT CONCEPT',
    problem: 'Businesses attempt to automate using fragile scripts and messy spreadsheets, causing silent breaks and shadow IT.',
    demonstrates: ['Workflow architecture', 'Automation UX', 'Backend systems thinking'],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
