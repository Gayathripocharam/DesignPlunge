import { describe, it, expect } from 'vitest';
import { homeFaqs, servicesFaqs } from './faq';

describe('FAQ content data', () => {
  describe('homeFaqs', () => {
    it('is non-empty', () => {
      expect(homeFaqs.length).toBeGreaterThan(0);
    });

    it('every FAQ has a question and an answer', () => {
      for (const faq of homeFaqs) {
        expect(faq.question).toBeTruthy();
        expect(faq.answer).toBeTruthy();
      }
    });

    it('has no duplicate questions', () => {
      const questions = homeFaqs.map((f) => f.question);
      const unique = new Set(questions);
      expect(unique.size).toBe(questions.length);
    });
  });

  describe('servicesFaqs', () => {
    it('is non-empty', () => {
      expect(servicesFaqs.length).toBeGreaterThan(0);
    });

    it('every FAQ has a question and an answer', () => {
      for (const faq of servicesFaqs) {
        expect(faq.question).toBeTruthy();
        expect(faq.answer).toBeTruthy();
      }
    });

    it('has no duplicate questions', () => {
      const questions = servicesFaqs.map((f) => f.question);
      const unique = new Set(questions);
      expect(unique.size).toBe(questions.length);
    });
  });
});
