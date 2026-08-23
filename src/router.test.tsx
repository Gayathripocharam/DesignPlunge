import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { describe, it, expect } from 'vitest';
import { Shell } from '@/layout/Shell';
import { NotFoundPage } from '@/features/NotFoundPage';
import React, { Suspense } from 'react';

// Using the same lazy imports and structure as router.tsx
const Home = React.lazy(() => import("@/features/home/Home").then(m => ({ default: m.Home })));
const ServicesPage = React.lazy(() => import("@/features/services/ServicesPage").then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = React.lazy(() => import("@/features/services/ServiceDetailPage").then(m => ({ default: m.ServiceDetailPage })));

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div data-testid="loading">Loading...</div>}>
    {children}
  </Suspense>
);

const routes = [
  {
    element: <Shell />,
    children: [
      { path: "/", element: <SuspenseWrapper><Home /></SuspenseWrapper> },
      { path: "/services", element: <SuspenseWrapper><ServicesPage /></SuspenseWrapper> },
      { path: "/services/:slug", element: <SuspenseWrapper><ServiceDetailPage /></SuspenseWrapper> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

const renderWithRouter = (initialPath: string) => {
  const router = createMemoryRouter(routes, {
    initialEntries: [initialPath],
  });
  return render(
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

describe('Routing', () => {
  it('renders the services page on /services', async () => {
    renderWithRouter('/services');
    // ServicesPage renders ServicesIndex which has a visible 'WHAT WE DO' label
    const navLabel = await screen.findByText(/WHAT WE DO/i, {}, { timeout: 5000 });
    expect(navLabel).toBeInTheDocument();
  });

  it('renders a valid service detail page on /services/digital-products', async () => {
    renderWithRouter('/services/digital-products');
    const detailTitle = await screen.findByText(/DIGITAL PRODUCTS/i);
    expect(detailTitle).toBeInTheDocument();
  });

  it('renders 404 Not Found on invalid service slug', async () => {
    renderWithRouter('/services/invalid-slug-does-not-exist');
    const notFoundText = await screen.findByText(/Page Not Found/i);
    expect(notFoundText).toBeInTheDocument();
  });

  it('renders 404 Not Found on an unknown random path', async () => {
    renderWithRouter('/random-path');
    const notFoundText = await screen.findByText(/Page Not Found/i);
    expect(notFoundText).toBeInTheDocument();
  });
});
