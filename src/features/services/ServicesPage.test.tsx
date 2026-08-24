import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ServicesPage from './ServicesPage';
import { services } from '@/content/services';
import { describe, it, expect } from 'vitest';

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <MemoryRouter>
        {ui}
      </MemoryRouter>
    </HelmetProvider>
  );
};

// IntersectionObserver is mocked in setupTests.ts

describe('ServicesPage', () => {
  it('renders the services page without crashing', () => {
    renderWithProviders(<ServicesPage />);
    // Check for hero text or main element
    expect(screen.getByText(/We build digital systems for/i)).toBeInTheDocument();
  });

  it('renders all core services from the canonical data', () => {
    renderWithProviders(<ServicesPage />);
    
    // Check that each service title from data is present in the document
    services.forEach((service) => {
      // The titles are rendered in the index and the section
      const elements = screen.getAllByText(service.title);
      expect(elements.length).toBeGreaterThan(0);
      expect(screen.getByText(service.description)).toBeInTheDocument();
    });
  });

  it('contains the service index navigation with correct links', () => {
    renderWithProviders(<ServicesPage />);
    
    const indexNav = screen.getByRole('navigation', { name: /Services index/i });
    expect(indexNav).toBeInTheDocument();

    services.forEach((service) => {
      // Find the link in the index
      const link = screen.getByRole('link', { name: new RegExp(service.title, 'i') });
      expect(link).toHaveAttribute('href', `#${service.id}`);
    });
  });

  it('renders the CTA and links to contact', () => {
    renderWithProviders(<ServicesPage />);
    
    const ctaSection = screen.getByText(/Ready to turn a complex problem into something real/i);
    expect(ctaSection).toBeInTheDocument();

    const contactLinks = screen.getAllByRole('link', { name: /Talk through the problem/i });
    expect(contactLinks.length).toBeGreaterThan(0);
    expect(contactLinks[0]).toHaveAttribute('href', '/contact');
  });
});
