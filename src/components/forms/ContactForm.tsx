'use client';

import { useState } from 'react';

type ContactFormVariant = 'homepage' | 'contact-page';

type ContactFormProps = {
  variant: ContactFormVariant;
};

type FormState = {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message?: string;
};

const fieldClassName =
  'w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]';

export default function ContactForm({ variant }: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>({ status: 'idle' });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState({ status: 'submitting' });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...payload,
          submissionType: variant === 'homepage' ? 'homepage-contact' : 'contact-page',
        }),
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.error || 'Submission failed.');
      }

      form.reset();
      setFormState({
        status: 'success',
        message: result.message || 'Your message has been sent successfully.',
      });
    } catch (error) {
      setFormState({
        status: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong.',
      });
    }
  }

  return (
    <form className={variant === 'homepage' ? 'space-y-5' : 'mt-8 space-y-5'} onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium" style={{ color: 'var(--text-main)' }}>
            {variant === 'contact-page' ? 'Your Name *' : 'Name'}
          </span>
          <input
            type="text"
            name="name"
            placeholder={variant === 'contact-page' ? 'E.g. John Doe' : 'Your full name'}
            required
            disabled={formState.status === 'submitting'}
            className={fieldClassName}
            style={{ borderColor: 'rgba(148, 163, 184, 0.22)', color: 'var(--text-main)' }}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium" style={{ color: 'var(--text-main)' }}>
            Email *
          </span>
          <input
            type="email"
            name="email"
            placeholder={variant === 'contact-page' ? 'example@gmail.com' : 'you@example.com'}
            required
            disabled={formState.status === 'submitting'}
            className={fieldClassName}
            style={{ borderColor: 'rgba(148, 163, 184, 0.22)', color: 'var(--text-main)' }}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium" style={{ color: 'var(--text-main)' }}>
            {variant === 'contact-page' ? 'Phone *' : 'Phone Number'}
          </span>
          <input
            type="tel"
            name="phone"
            placeholder={variant === 'contact-page' ? 'Enter Phone Number' : '+237 6XX XXX XXX'}
            required={variant === 'contact-page'}
            disabled={formState.status === 'submitting'}
            className={fieldClassName}
            style={{ borderColor: 'rgba(148, 163, 184, 0.22)', color: 'var(--text-main)' }}
          />
        </label>

        {variant === 'homepage' ? (
          <label className="block">
            <span className="mb-2 block text-sm font-medium" style={{ color: 'var(--text-main)' }}>
              Address
            </span>
            <input
              type="text"
              name="address"
              placeholder="Your address"
              disabled={formState.status === 'submitting'}
              className={fieldClassName}
              style={{ borderColor: 'rgba(148, 163, 184, 0.22)', color: 'var(--text-main)' }}
            />
          </label>
        ) : (
          <label className="block">
            <span className="mb-2 block text-sm font-medium" style={{ color: 'var(--text-main)' }}>
              Service *
            </span>
            <select
              name="service"
              defaultValue=""
              required
              disabled={formState.status === 'submitting'}
              className={`${fieldClassName} bg-white`}
              style={{ borderColor: 'rgba(148, 163, 184, 0.22)', color: 'var(--text-main)' }}
            >
              <option value="" disabled>
                Select Services
              </option>
              <option value="real-estate">Real Estate</option>
              <option value="logistics">Logistics</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="entertainment">Music & Entertainment</option>
              <option value="technology">Tech & Innovation</option>
              <option value="general">General Enquiry</option>
            </select>
          </label>
        )}
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium" style={{ color: 'var(--text-main)' }}>
          {variant === 'contact-page' ? 'Your Message *' : 'Message'}
        </span>
        <textarea
          name="message"
          rows={variant === 'contact-page' ? 6 : 5}
          placeholder={variant === 'contact-page' ? 'Enter here...' : 'Tell us a bit about your project'}
          required
          disabled={formState.status === 'submitting'}
          className="w-full rounded-[1.5rem] border px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]"
          style={{ borderColor: 'rgba(148, 163, 184, 0.22)', color: 'var(--text-main)' }}
        />
      </label>

      <div className="space-y-3">
        <button
          type="submit"
          disabled={formState.status === 'submitting'}
          className={`inline-flex rounded-full px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(37,99,235,0.22)] transition ${
            formState.status === 'submitting' ? 'cursor-not-allowed opacity-70' : 'hover:-translate-y-0.5'
          }`}
          style={{ background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)' }}
        >
          {formState.status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>

        {formState.message ? (
          <p
            aria-live="polite"
            className="text-sm"
            style={{ color: formState.status === 'success' ? '#0f766e' : '#b91c1c' }}
          >
            {formState.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
