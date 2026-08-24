import { describe, it, expect } from 'vitest';
import {
  team,
  corePrinciples,
  processSteps,
  engagementPrinciples,
} from './studio';

describe('Studio content data', () => {
  describe('team', () => {
    it('is non-empty', () => {
      expect(team.length).toBeGreaterThan(0);
    });

    it('every member has name and role', () => {
      for (const member of team) {
        expect(member.name).toBeTruthy();
        expect(member.role).toBeTruthy();
      }
    });
  });

  describe('corePrinciples', () => {
    it('is non-empty', () => {
      expect(corePrinciples.length).toBeGreaterThan(0);
    });

    it('every principle has title and desc', () => {
      for (const p of corePrinciples) {
        expect(p.title).toBeTruthy();
        expect(p.desc).toBeTruthy();
      }
    });
  });



  describe('processSteps', () => {
    it('is non-empty', () => {
      expect(processSteps.length).toBeGreaterThan(0);
    });

    it('every step has a unique id', () => {
      const ids = processSteps.map((s) => s.id);
      const unique = new Set(ids);
      expect(unique.size).toBe(ids.length);
    });

    it('every step has required text fields', () => {
      for (const step of processSteps) {
        expect(step.id).toBeTruthy();
        expect(step.title).toBeTruthy();
        expect(step.desc).toBeTruthy();
        expect(step.tags.length).toBeGreaterThan(0);
      }
    });
  });

  describe('engagementPrinciples', () => {
    it('is non-empty', () => {
      expect(engagementPrinciples.length).toBeGreaterThan(0);
    });

    it('every engagement principle has required fields', () => {
      for (const p of engagementPrinciples) {
        expect(p.num).toBeTruthy();
        expect(p.title).toBeTruthy();
        expect(p.desc).toBeTruthy();
        expect(p.deliverables.length).toBeGreaterThan(0);
      }
    });
  });
});
