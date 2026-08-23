import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock matchMedia for components that use it (e.g. framer-motion, NavbarDesktop)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: true, // Default to true (desktop) for tests
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

class IntersectionObserverMock {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() { return []; }
  unobserve() {}
}
vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

// Mock ScrollTo
window.scrollTo = vi.fn();
