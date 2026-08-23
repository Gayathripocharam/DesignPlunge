import { useState } from 'react';
import type { FormEvent } from 'react';
import { track } from '@/analytics';
import styles from './ContactForm.module.css';

const stageOptions = [
  'Exploring an idea',
  'Planning a new product',
  'Improving an existing product',
  'Scaling an existing system',
  'Looking to integrate AI/automation',
  'Not sure yet'
];

const helpOptions = [
  'Product strategy',
  'UX/UI',
  'Design system',
  'Engineering',
  'AI / automation',
  'End-to-end product development',
  'Not sure yet'
];

const timelineOptions = [
  'Exploring',
  'Within 1–3 months',
  'Within 3–6 months',
  'Flexible'
];

const budgetOptions = [
  'Prefer not to say',
  'Under ₹5L',
  '₹5L–₹15L',
  '₹15L+',
  'Not decided'
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  buildOrImprove: string;
  problemToSolve: string;
  stage: string;
  helpNeeded: string;
  timeline: string;
  budget: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: '',
  email: '',
  buildOrImprove: '',
  problemToSolve: '',
  stage: '',
  helpNeeded: '',
  timeline: '',
  budget: ''
};

function validate(state: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!state.name.trim()) errors.name = 'Tell us your name';
  if (!state.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
    errors.email = "That email doesn't look right";
  }
  if (!state.buildOrImprove.trim()) errors.buildOrImprove = 'Please share a few details';
  if (!state.problemToSolve.trim()) errors.problemToSolve = 'Please share the problem';
  if (!state.stage) errors.stage = 'Please select a stage';
  if (!state.helpNeeded) errors.helpNeeded = 'Please select the type of help';
  
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
  const [hasStarted, setHasStarted] = useState(false);

  function handleInteraction() {
    if (!hasStarted) {
      setHasStarted(true);
      track('contact_form_start', { page: '/contact', formId: 'contact' });
    }
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    handleInteraction();
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!endpointConfigured) {
      setStatus('error');
      track('contact_form_error', { page: '/contact', formId: 'contact', errorCode: 'unknown' });
      return;
    }

    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setShake(true);
      setTimeout(() => setShake(false), 400);
      track('contact_form_error', { page: '/contact', formId: 'contact', errorCode: 'validation' });
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
        track('contact_form_submit', { page: '/contact', formId: 'contact' });
      } else {
        setStatus('error');
        track('contact_form_error', { page: '/contact', formId: 'contact', errorCode: 'provider' });
      }
    } catch {
      setStatus('error');
      track('contact_form_error', { page: '/contact', formId: 'contact', errorCode: 'network' });
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
            setHasStarted(false);
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className={`${styles.form} ${shake ? styles.shake : ''}`} onSubmit={handleSubmit} onClick={handleInteraction} noValidate>
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

      {/* Contact information */}
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

      {/* Product context */}
      <div className={styles.field}>
        <textarea
          id="buildOrImprove"
          placeholder=" "
          rows={3}
          value={form.buildOrImprove}
          onChange={(e) => update('buildOrImprove', e.target.value)}
          className={errors.buildOrImprove ? styles.invalid : ''}
        />
        <label htmlFor="buildOrImprove">What are you trying to build or improve?</label>
        {errors.buildOrImprove && <span className={styles.errorText}>{errors.buildOrImprove}</span>}
      </div>

      <div className={styles.field}>
        <textarea
          id="problemToSolve"
          placeholder=" "
          rows={3}
          value={form.problemToSolve}
          onChange={(e) => update('problemToSolve', e.target.value)}
          className={errors.problemToSolve ? styles.invalid : ''}
        />
        <label htmlFor="problemToSolve">What problem are you trying to solve?</label>
        {errors.problemToSolve && <span className={styles.errorText}>{errors.problemToSolve}</span>}
      </div>

      {/* Engagement context */}
      <div className={styles.field}>
        <select
          id="stage"
          value={form.stage}
          onChange={(e) => update('stage', e.target.value)}
          className={`${errors.stage ? styles.invalid : ''} ${!form.stage ? styles.emptySelect : ''}`}
        >
          <option value="" disabled hidden></option>
          {stageOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <label htmlFor="stage">Where are you right now?</label>
        {errors.stage && <span className={styles.errorText}>{errors.stage}</span>}
      </div>

      <div className={styles.field}>
        <select
          id="helpNeeded"
          value={form.helpNeeded}
          onChange={(e) => update('helpNeeded', e.target.value)}
          className={`${errors.helpNeeded ? styles.invalid : ''} ${!form.helpNeeded ? styles.emptySelect : ''}`}
        >
          <option value="" disabled hidden></option>
          {helpOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <label htmlFor="helpNeeded">What kind of help do you need?</label>
        {errors.helpNeeded && <span className={styles.errorText}>{errors.helpNeeded}</span>}
      </div>

      {/* Optional context */}
      <div className={styles.row}>
        <div className={styles.field}>
          <select
            id="timeline"
            value={form.timeline}
            onChange={(e) => update('timeline', e.target.value)}
            className={!form.timeline ? styles.emptySelect : ''}
          >
            <option value="" disabled hidden></option>
            {timelineOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
          <label htmlFor="timeline">Timeline (Optional)</label>
        </div>

        <div className={styles.field}>
          <select
            id="budget"
            value={form.budget}
            onChange={(e) => update('budget', e.target.value)}
            className={!form.budget ? styles.emptySelect : ''}
          >
            <option value="" disabled hidden></option>
            {budgetOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
          <label htmlFor="budget">Budget (Optional)</label>
        </div>
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
