import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ContactForm } from './ContactForm';

import { type Mock } from 'vitest';

// Mock fetch globally
globalThis.fetch = vi.fn();

describe('ContactForm', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  const setup = () => {
    render(<ContactForm endpointConfigured={true} fallbackEmail="hello@designplunge.com" />);
    return {
      nameInput: screen.getByLabelText(/Your name/i),
      emailInput: screen.getByLabelText(/Email address/i),
      messageInput: screen.getByLabelText(/Tell us about the project/i),
      submitButton: screen.getByRole('button', { name: /Send message/i }),
    };
  };

  it('renders correctly', () => {
    const { nameInput, emailInput, messageInput, submitButton } = setup();
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('validates required fields on empty submission', async () => {
    const { submitButton } = setup();
    const user = userEvent.setup();

    await user.click(submitButton);

    expect(screen.getByText(/Tell us your name/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Pick what fits best/i)).toBeInTheDocument();
    expect(screen.getByText(/Give us a few details/i)).toBeInTheDocument();
  });

  it('validates email format', async () => {
    const { emailInput, submitButton } = setup();
    const user = userEvent.setup();

    await user.type(emailInput, 'invalid-email');
    await user.click(submitButton);

    expect(screen.getByText(/That email doesn't look right/i)).toBeInTheDocument();
  });

  it('validates message minimum length', async () => {
    const { messageInput, submitButton } = setup();
    const user = userEvent.setup();

    await user.type(messageInput, 'too short');
    await user.click(submitButton);

    expect(screen.getByText(/A little more detail helps \(20 char min\)/i)).toBeInTheDocument();
  });

  it('submits successfully when fields are valid', async () => {
    const { nameInput, emailInput, messageInput, submitButton } = setup();
    const user = userEvent.setup();

    let resolveFetch!: (value: unknown) => void;
    const fetchPromise = new Promise((res) => {
      resolveFetch = res;
    });

    (globalThis.fetch as Mock).mockReturnValueOnce(fetchPromise);

    await user.type(nameInput, 'Jane Doe');
    await user.type(emailInput, 'jane@example.com');
    await user.click(screen.getByRole('button', { name: /Web App/i }));
    await user.type(messageInput, 'This is a sufficiently long message to pass validation.');

    await user.click(submitButton);

    // Verify it shows submitting state
    expect(screen.getByRole('button', { name: /Sending/i })).toBeDisabled();

    // Now resolve the fetch
    resolveFetch({
      ok: true,
      json: async () => ({ success: true }),
    });

    // Wait for success screen
    await waitFor(() => {
      expect(screen.getByText(/Message sent/i)).toBeInTheDocument();
    });
    
    // Check fetch was called with correct data
    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
    expect(globalThis.fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        method: 'POST',
        body: expect.stringContaining('Jane Doe'),
      })
    );
  });

  it('shows error state when submission fails', async () => {
    const { nameInput, emailInput, messageInput, submitButton } = setup();
    const user = userEvent.setup();

    (globalThis.fetch as Mock).mockRejectedValueOnce(new Error('Network error'));

    await user.type(nameInput, 'Jane Doe');
    await user.type(emailInput, 'jane@example.com');
    await user.click(screen.getByRole('button', { name: /Web App/i }));
    await user.type(messageInput, 'This is a sufficiently long message to pass validation.');

    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    });
  });

  it('shows unconfigured error when endpoint is false', async () => {
    render(<ContactForm endpointConfigured={false} fallbackEmail="hello@designplunge.com" />);
    const user = userEvent.setup();
    const submitButton = screen.getByRole('button', { name: /Send message/i });

    await user.click(submitButton);

    expect(screen.getByText(/Contact form is not configured for this environment/i)).toBeInTheDocument();
    // fetch should not be called
    expect(globalThis.fetch).not.toHaveBeenCalled();
  });
});
