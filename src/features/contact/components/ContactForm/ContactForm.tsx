import { useState } from 'react';
import type { FormEvent } from 'react';
import styles from './ContactForm.module.css';

const projectTypes = [
  { id: 'web', label: 'Web App', icon: 'fa-regular fa-browser' },
  { id: 'ai', label: 'AI / Automation', icon: 'fa-regular fa-sparkles' },
  { id: 'design-system', label: 'Design System', icon: 'fa-regular fa-layer-group' },
  { id: 'unsure', label: 'Not sure yet', icon: 'fa-regular fa-circle-question' },
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: '', email: '', projectType: '', message: '' };

function validate(state: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!state.name.trim()) errors.name = 'Tell us your name';
  if (!state.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
    errors.email = "That email doesn't look right";
  }
  if (!state.projectType) errors.projectType = 'Pick what fits best';
  if (!state.message.trim()) {
    errors.message = 'Give us a few details';
  } else if (state.message.trim().length < 20) {
    errors.message = 'A little more detail helps (20 char min)';
  }
  return errors;
}

interface ContactFormProps {
  /** Whether a real submission endpoint is wired up in this environment. */
  endpointConfigured: boolean;
  fallbackEmail: string;
}

export function ContactForm({ endpointConfigured, fallbackEmail }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [shake, setShake] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!endpointConfigured) {
      setStatus('error');
      return;
    }

    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form)
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIcon}>
          <i className="fa-regular fa-check" aria-hidden="true" />
        </div>
        <h2>Message sent.</h2>
        <p>
          Thanks, {form.name.split(' ')[0] || 'there'} — we&apos;ll get back to you within a couple of days.
        </p>
        <button
          type="button"
          className={styles.resetBtn}
          onClick={() => {
            setForm(initialState);
            setStatus('idle');
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className={`${styles.form} ${shake ? styles.shake : ''}`} onSubmit={handleSubmit} noValidate>
      {status === 'error' && (
        <div className={styles.errorBanner}>
          <i className="fa-regular fa-triangle-exclamation" aria-hidden="true" />
          <div>
            <strong>
              {endpointConfigured
                ? 'Something went wrong.'
                : 'Contact form is not configured for this environment.'}
            </strong>
            <span>
              {' '}
              Please email us directly at <a href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a>.
            </span>
          </div>
        </div>
      )}

      <div className={styles.row}>
        <div className={styles.field}>
          <input
            id="name"
            placeholder=" "
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className={errors.name ? styles.invalid : ''}
          />
          <label htmlFor="name">Your name</label>
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>

        <div className={styles.field}>
          <input
            id="email"
            type="email"
            placeholder=" "
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={errors.email ? styles.invalid : ''}
          />
          <label htmlFor="email">Email address</label>
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </div>
      </div>

      <div className={styles.field}>
        <span className={styles.groupLabel}>What are you building?</span>
        <div className={styles.pillRow}>
          {projectTypes.map((type) => (
            <button
              key={type.id}
              type="button"
              className={`${styles.typePill} ${form.projectType === type.id ? styles.typeActive : ''}`}
              onClick={() => update('projectType', type.id)}
            >
              <i className={type.icon} aria-hidden="true" /> {type.label}
            </button>
          ))}
        </div>
        {errors.projectType && <span className={styles.errorText}>{errors.projectType}</span>}
      </div>

      <div className={styles.field}>
        <textarea
          id="message"
          placeholder=" "
          rows={5}
          maxLength={600}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className={errors.message ? styles.invalid : ''}
        />
        <label htmlFor="message">Tell us about the project</label>
        <span className={styles.counter}>{form.message.length}/600</span>
        {errors.message && <span className={styles.errorText}>{errors.message}</span>}
      </div>

      <button type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <span className={styles.spinner} /> Sending…
          </>
        ) : (
          <>
            Send message <i className="fa-regular fa-arrow-right" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
