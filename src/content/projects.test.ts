import { describe, it, expect } from 'vitest';
import { projects, getProjectBySlug } from './projects';

describe('Canonical Projects Data', () => {
  it('has at least one project', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('every project has a unique slug', () => {
    const slugs = projects.map((p) => p.slug);
    const unique = new Set(slugs);
    expect(unique.size).toBe(slugs.length);
  });

  it('every project has required fields defined', () => {
    for (const project of projects) {
      expect(project.slug).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.shortTitle).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.tagline).toBeTruthy();
      expect(project.image).toBeTruthy();
      expect(project.label).toBeTruthy();
    }
  });

  it('every project slug resolves through getProjectBySlug()', () => {
    for (const project of projects) {
      const resolved = getProjectBySlug(project.slug);
      expect(resolved).toBeDefined();
      expect(resolved?.slug).toBe(project.slug);
    }
  });

  it('invalid slug returns undefined', () => {
    expect(getProjectBySlug('non-existent-project')).toBeUndefined();
  });
});
