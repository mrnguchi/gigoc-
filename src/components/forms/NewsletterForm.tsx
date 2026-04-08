'use client';

import { useState } from 'react';

type FormState = {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message?: string;
};

export default function NewsletterForm() {
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

  return (
    <form className="mt-1 space-y-3" onSubmit={handleSubmit}>
      <div className="flex flex-row items-center rounded-full bg-white pr-1">
        <svg className="ml-3 h-4 w-4 shrink-0 stroke-[var(--text-soft)]" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        <input
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
          className={`shrink-0 rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-semibold text-white transition sm:px-5 sm:text-sm ${
            formState.status === 'submitting' ? 'cursor-not-allowed opacity-70' : 'hover:opacity-90'
          }`}
        >
          {formState.status === 'submitting' ? 'Submitting...' : 'Subscribe'}
        </button>
      </div>

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
