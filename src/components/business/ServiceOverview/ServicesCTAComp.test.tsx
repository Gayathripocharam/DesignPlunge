import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import ServicesCTA from './ServicesCTAComp';

describe('ServicesCTA', () => {
  it('renders correctly with required links', () => {
    render(
      <MemoryRouter>
        <ServicesCTA />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/Ready to turn a complex problem into something real/i)).toBeInTheDocument();
    
    const contactLink = screen.getByRole('link', { name: /Start a conversation/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');
    
    const workLink = screen.getByRole('link', { name: /View our work/i });
    expect(workLink).toBeInTheDocument();
    expect(workLink).toHaveAttribute('href', '/work');
  });
});
