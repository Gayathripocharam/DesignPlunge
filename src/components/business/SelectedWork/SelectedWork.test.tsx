import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { SelectedWork } from './SelectedWork';

describe('SelectedWork', () => {
  const setup = (variant: 'home' | 'services' = 'home') => {
    return render(
      <MemoryRouter>
        <SelectedWork variant={variant} />
      </MemoryRouter>
    );
  };

  it('renders all projects', () => {
    setup();
    // In "home" variant, we expect AI Operations Platform, Product Analytics, Automation Platform
    expect(screen.getByText(/AI Operations Platform/i)).toBeInTheDocument();
    expect(screen.getByText(/Product Analytics/i)).toBeInTheDocument();
    expect(screen.getByText(/Automation Platform/i)).toBeInTheDocument();
  });

  it('handles desktop hover interactions safely', async () => {
    setup();
    const user = userEvent.setup();
    
    // Find a project row link
    const firstProjectLink = screen.getByRole('link', { name: /AI Operations Platform/i });
    
    // Hover over it
    await user.hover(firstProjectLink);
    
    // The float preview should appear (it's rendered conditionally, we can check for its label)
    expect(screen.getByText(/Selected Concept/i)).toBeInTheDocument();
    expect(screen.getByText(/View Project/i)).toBeInTheDocument();
  });

  it('handles navigation click', async () => {
    setup();
    const user = userEvent.setup();
    
    const firstProjectLink = screen.getByRole('link', { name: /AI Operations Platform/i });
    
    // We can't easily test the full Framer Motion plunge overlay navigation delay in a basic JSDOM test, 
    // but we can ensure clicking it doesn't crash and prevents default / triggers state.
    // The component sets a plunge state which renders the overlay.
    await user.click(firstProjectLink);
    
    // The overlay should appear with "Descending into [Title]"
    expect(screen.getByText(/Descending into AI Operations Platform/i)).toBeInTheDocument();
  });
});
