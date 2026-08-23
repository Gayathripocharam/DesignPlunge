import { describe, it, expect } from 'vitest';
import { services, getServiceBySlug, type ServiceSlug } from './services';

describe('Canonical Services Data', () => {
  it('exactly 4 canonical services exist', () => {
    expect(services.length).toBe(4);
  });

  it('every service has a unique slug', () => {
    const slugs = services.map((s) => s.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(services.length);
  });

  it('every slug belongs to ServiceSlug', () => {
    const validSlugs: ServiceSlug[] = [
      'digital-products',
      'web-applications',
      'ai-systems',
      'design-systems',
    ];
    
    services.forEach((service) => {
      expect(validSlugs).toContain(service.slug);
    });
  });

  it('every slug resolves through getServiceBySlug()', () => {
    services.forEach((service) => {
      const resolved = getServiceBySlug(service.slug);
      expect(resolved).toBeDefined();
      expect(resolved?.slug).toBe(service.slug);
      
      // Also test that the route prefix works
      const resolvedWithPrefix = getServiceBySlug(`/services/${service.slug}`);
      expect(resolvedWithPrefix).toBeDefined();
      expect(resolvedWithPrefix?.slug).toBe(service.slug);
    });
  });

  it('every service maps to its correct metaphor', () => {
    // For our current implementation, VisualMetaphorType === ServiceSlug
    // So if the slug is correct, it maps to the right metaphor.
    // We just verify it matches the expected order/mapping.
    const expectedMapping: Record<string, ServiceSlug> = {
      '01': 'digital-products',
      '02': 'web-applications',
      '03': 'ai-systems',
      '04': 'design-systems',
    };
    
    services.forEach((service) => {
      expect(service.slug).toBe(expectedMapping[service.id]);
    });
  });

  it('invalid slug returns undefined', () => {
    expect(getServiceBySlug('invalid-service')).toBeUndefined();
    expect(getServiceBySlug('/services/invalid-service')).toBeUndefined();
  });
});
