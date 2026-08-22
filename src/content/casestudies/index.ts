import { aiOperationsPlatform } from './ai-operations-platform';
import { productAnalyticsDashboard } from './product-analytics-dashboard';
import { businessAutomationPlatform } from './business-automation-platform';
import type { CaseStudy } from '@/types/casestudy';

export { aiOperationsPlatform, productAnalyticsDashboard, businessAutomationPlatform };

export const allCaseStudies: CaseStudy[] = [
  aiOperationsPlatform,
  productAnalyticsDashboard,
  businessAutomationPlatform,
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return allCaseStudies.find((c) => c.slug === slug);
}
