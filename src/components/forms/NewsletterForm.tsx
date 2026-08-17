'use client';

import { ArrowRight } from 'lucide-react';
import { useId, useState } from 'react';

type FormState = {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message?: string;
};

type NewsletterFormProps = {
  buttonLabel?: string;
  inputId?: string;
  variant?: 'inline' | 'stacked';
};

export default function NewsletterForm({
  buttonLabel = 'Subscribe',
  inputId,
  variant = 'inline',
}: NewsletterFormProps) {
  const generatedInputId = useId();
  const resolvedInputId = inputId ?? generatedInputId;
  const [formState, setFormState] = useState<FormState>({ status: 'idle' });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState({ status: 'submitting' });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.get('email'),
          submissionType: 'newsletter',
        }),
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.error || 'Subscription failed.');
      }

      form.reset();
      setFormState({
        status: 'success',
        message: result.message || 'You have been added to the GiGOC updates list.',
      });
    } catch (error) {
      setFormState({
        status: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong.',
      });
    }
  }

  const emailIcon = (
    <svg
      className={`h-4 w-4 shrink-0 ${variant === 'stacked' ? 'stroke-white/45' : 'stroke-[var(--text-soft)]'}`}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );

  return (
    <form className="mt-1 space-y-3" onSubmit={handleSubmit}>
      <label htmlFor={resolvedInputId} className="sr-only">
        Email address
      </label>

      {variant === 'stacked' ? (
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end">
          <div className="flex min-h-12 w-full flex-1 items-center border-b border-white/35 transition focus-within:border-[#5ea0ff]">
            {emailIcon}
            <input
              id={resolvedInputId}
              type="email"
              name="email"
              required
              disabled={formState.status === 'submitting'}
              placeholder="Your email address"
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-white/40 disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>
          <button
            type="submit"
            disabled={formState.status === 'submitting'}
            className={`group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-md bg-[#2166d1] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(33,102,209,0.18)] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5ea0ff] ${
              formState.status === 'submitting'
                ? 'cursor-not-allowed opacity-70'
                : 'hover:bg-[#2b73df]'
            }`}
          >
            {formState.status === 'submitting' ? 'Submitting...' : buttonLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.9} />
          </button>
        </div>
      ) : (
        <div className="flex flex-row items-center rounded-md bg-white pr-1">
          <span className="ml-3">{emailIcon}</span>
          <input
            id={resolvedInputId}
            type="email"
            name="email"
            required
            disabled={formState.status === 'submitting'}
            placeholder="Enter your email address"
            className="flex-1 bg-transparent px-3 py-2.5 text-sm text-[var(--text-main)] outline-none placeholder:text-[var(--text-soft)]"
          />
          <button
            type="submit"
            disabled={formState.status === 'submitting'}
            className={`shrink-0 rounded-md bg-[var(--primary)] px-4 py-2 text-xs font-semibold text-white transition sm:px-5 sm:text-sm ${
              formState.status === 'submitting'
                ? 'cursor-not-allowed opacity-70'
                : 'hover:opacity-90'
            }`}
          >
            {formState.status === 'submitting' ? 'Submitting...' : buttonLabel}
          </button>
        </div>
      )}

      {formState.message ? (
        <p
          aria-live="polite"
          className="text-xs"
          style={{ color: formState.status === 'success' ? 'rgba(255,255,255,0.92)' : '#fee2e2' }}
        >
          {formState.message}
        </p>
      ) : null}
    </form>
  );
}
