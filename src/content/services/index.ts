import { productDesign } from './product-design';
import { webEngineering } from './web-engineering';
import { aiAutomation } from './ai-automation';
import { designSystems } from './design-systems';
import type { Service } from '@/types/service';

export { productDesign, webEngineering, aiAutomation, designSystems };

export const allServices: Service[] = [
  productDesign,
  webEngineering,
  aiAutomation,
  designSystems,
];

export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((s) => s.slug === slug);
}
