import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { describe, it, expect } from 'vitest';
import { NotFoundPage } from './NotFoundPage';

describe('NotFoundPage', () => {
  it('renders 404 message and home link', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <NotFoundPage />
        </MemoryRouter>
      </HelmetProvider>
    );
    
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
    
    const homeButton = screen.getByRole('button', { name: /Return Home/i });
    expect(homeButton).toBeInTheDocument();
  });
});
