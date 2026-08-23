import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import NavbarDesktop from './NavbarDesktop';

describe('NavbarDesktop', () => {
  it('renders correctly with required links', () => {
    render(
      <MemoryRouter>
        <NavbarDesktop />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('link', { name: /DesignPlunge/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /Home/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /Studio/i })).toHaveAttribute('href', '/studio');
    expect(screen.getByRole('link', { name: /Services/i })).toHaveAttribute('href', '/services');
    expect(screen.getByRole('link', { name: /Work/i })).toHaveAttribute('href', '/work');
    expect(screen.getByRole('link', { name: /Contact/i })).toHaveAttribute('href', '/contact');
    expect(screen.getByRole('link', { name: /Start a project/i })).toHaveAttribute('href', '/contact');
  });
});
