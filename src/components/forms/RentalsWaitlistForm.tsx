'use client';

import { ArrowRight, Mail } from 'lucide-react';
import { useId, useState } from 'react';

type FormState = {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message?: string;
};

type RentalsWaitlistFormProps = {
  compact?: boolean;
};

export default function RentalsWaitlistForm({ compact = false }: RentalsWaitlistFormProps) {
  const inputId = useId();
  const [formState, setFormState] = useState<FormState>({ status: 'idle' });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState({ status: 'submitting' });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.get('email'),
          submissionType: 'newsletter',
        }),
      });
      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.error || 'Submission failed.');
      }

      form.reset();
      setFormState({
        status: 'success',
        message: 'You are on the G-Rides launch list.',
      });
    } catch (error) {
      setFormState({
        status: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong.',
      });
    }
  }

  return (
    <form className="space-y-2.5" onSubmit={handleSubmit}>
      <label htmlFor={inputId} className="sr-only">Email address</label>
      <div className={`flex border border-slate-300 bg-white p-1.5 shadow-[0_10px_35px_rgba(15,23,42,0.07)] ${compact ? 'max-w-md flex-col items-stretch gap-1.5 rounded-xl sm:flex-row sm:items-center sm:gap-0' : 'max-w-xl items-center rounded-2xl'}`}>
        <div className="flex min-w-0 flex-1 items-center">
          <Mail className="ml-3 h-4 w-4 shrink-0 text-slate-400" strokeWidth={1.8} aria-hidden="true" />
          <input
            id={inputId}
            type="email"
            name="email"
            required
            disabled={formState.status === 'submitting'}
            placeholder="Your email address"
            className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-[#10243f] outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>
        <button
          type="submit"
          disabled={formState.status === 'submitting'}
          className={`group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#245cdb] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#1749bd] sm:px-5 sm:text-sm ${compact ? 'w-full sm:w-auto' : ''} ${formState.status === 'submitting' ? 'cursor-not-allowed opacity-65' : ''}`}
        >
          {formState.status === 'submitting' ? 'Joining...' : 'Join the waitlist'}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
        </button>
      </div>

      {formState.message ? (
        <p
          aria-live="polite"
          className="text-xs"
          style={{ color: formState.status === 'success' ? '#166534' : '#b91c1c' }}
        >
          {formState.message}
        </p>
      ) : null}
    </form>
  );
}
