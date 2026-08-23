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
      buildInput: screen.getByLabelText(/What are you trying to build or improve\?/i),
      problemInput: screen.getByLabelText(/What problem are you trying to solve\?/i),
      stageSelect: screen.getByLabelText(/Where are you right now\?/i),
      helpSelect: screen.getByLabelText(/What kind of help do you need\?/i),
      submitButton: screen.getByRole('button', { name: /Send message/i }),
    };
  };

  it('renders correctly', () => {
    const { nameInput, emailInput, buildInput, problemInput, stageSelect, helpSelect, submitButton } = setup();
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(buildInput).toBeInTheDocument();
    expect(problemInput).toBeInTheDocument();
    expect(stageSelect).toBeInTheDocument();
    expect(helpSelect).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('validates required fields on empty submission', async () => {
    const { submitButton } = setup();
    const user = userEvent.setup();

    await user.click(submitButton);

    expect(screen.getByText(/Tell us your name/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Please share a few details/i)).toBeInTheDocument();
    expect(screen.getByText(/Please share the problem/i)).toBeInTheDocument();
    expect(screen.getByText(/Please select a stage/i)).toBeInTheDocument();
    expect(screen.getByText(/Please select the type of help/i)).toBeInTheDocument();
  });

  it('validates email format', async () => {
    const { emailInput, submitButton } = setup();
    const user = userEvent.setup();

    await user.type(emailInput, 'invalid-email');
    await user.click(submitButton);

    expect(screen.getByText(/That email doesn't look right/i)).toBeInTheDocument();
  });

  it('submits successfully when fields are valid', async () => {
    const { nameInput, emailInput, buildInput, problemInput, stageSelect, helpSelect, submitButton } = setup();
    const user = userEvent.setup();

    let resolveFetch!: (value: unknown) => void;
    const fetchPromise = new Promise((res) => {
      resolveFetch = res;
    });

    (globalThis.fetch as Mock).mockReturnValueOnce(fetchPromise);

    await user.type(nameInput, 'Jane Doe');
    await user.type(emailInput, 'jane@example.com');
    await user.type(buildInput, 'Building a new dashboard');
    await user.type(problemInput, 'Data is hard to understand');
    await user.selectOptions(stageSelect, 'Exploring an idea');
    await user.selectOptions(helpSelect, 'Product strategy');

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
    const { nameInput, emailInput, buildInput, problemInput, stageSelect, helpSelect, submitButton } = setup();
    const user = userEvent.setup();

    (globalThis.fetch as Mock).mockRejectedValueOnce(new Error('Network error'));

    await user.type(nameInput, 'Jane Doe');
    await user.type(emailInput, 'jane@example.com');
    await user.type(buildInput, 'Building a new dashboard');
    await user.type(problemInput, 'Data is hard to understand');
    await user.selectOptions(stageSelect, 'Exploring an idea');
    await user.selectOptions(helpSelect, 'Product strategy');

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
