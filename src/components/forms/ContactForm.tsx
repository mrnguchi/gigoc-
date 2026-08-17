'use client';

import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';

type ContactFormVariant = 'homepage' | 'contact-page';

type ContactFormProps = {
  variant: ContactFormVariant;
};

type FormState = {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message?: string;
};

const fieldClassName =
  'w-full rounded-md border border-slate-300 bg-white px-4 py-3.5 text-sm text-[#17365f] outline-none transition placeholder:text-slate-400 focus:border-[#2166d1] focus:ring-4 focus:ring-[#2166d1]/10 disabled:cursor-not-allowed disabled:bg-slate-50';

const serviceOptions = [
  { value: 'real-estate', label: 'Real Estate' },
  { value: 'logistics', label: 'Logistics' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'entertainment', label: 'Entertainment & Talent' },
  { value: 'technology', label: 'Tech & Innovation' },
  { value: 'general', label: 'General Enquiry' },
];

type CustomSelectProps = {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
};

function CustomSelect({ label, name, value, placeholder, required, disabled, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();
  const selectedIndex = serviceOptions.findIndex((option) => option.value === value);
  const selectedOption = selectedIndex >= 0 ? serviceOptions[selectedIndex] : undefined;

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('pointerdown', closeOnOutsideClick);
    return () => document.removeEventListener('pointerdown', closeOnOutsideClick);
  }, []);

  function openDropdown() {
    setIsOpen(true);
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
  }

  function selectOption(index: number) {
    const option = serviceOptions[index];

    if (!option) {
      return;
    }

    onChange(option.value);
    setActiveIndex(index);
    setIsOpen(false);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (disabled) {
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();

      if (!isOpen) {
        openDropdown();
        return;
      }

      const direction = event.key === 'ArrowDown' ? 1 : -1;
      setActiveIndex((current) => (current + direction + serviceOptions.length) % serviceOptions.length);
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();

      if (isOpen && activeIndex >= 0) {
        selectOption(activeIndex);
      } else {
        openDropdown();
      }
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      setIsOpen(false);
      return;
    }

    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex(event.key === 'Home' ? 0 : serviceOptions.length - 1);
    }
  }

  return (
    <div ref={containerRef} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        role="combobox"
        aria-label={label}
        aria-controls={listboxId}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-required={required}
        aria-activedescendant={isOpen && activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined}
        disabled={disabled}
        onClick={() => (isOpen ? setIsOpen(false) : openDropdown())}
        onKeyDown={handleKeyDown}
        className={`${fieldClassName} flex items-center justify-between gap-4 text-left ${
          isOpen ? 'border-[#2166d1] ring-4 ring-[#2166d1]/10' : ''
        }`}
      >
        <span className={selectedOption ? 'text-[#17365f]' : 'text-slate-400'}>
          {selectedOption?.label ?? placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-[#2166d1] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          strokeWidth={1.9}
        />
      </button>

      {isOpen ? (
        <div
          id={listboxId}
          role="listbox"
          aria-label={label}
          className="absolute z-30 mt-2 w-full overflow-hidden rounded-md border border-slate-200 bg-white p-1.5 shadow-[0_18px_45px_rgba(15,23,42,0.16)]"
        >
          {serviceOptions.map((option, index) => {
            const isSelected = option.value === value;
            const isActive = index === activeIndex;

            return (
              <button
                key={option.value}
                id={`${listboxId}-option-${index}`}
                type="button"
                role="option"
                aria-selected={isSelected}
                tabIndex={-1}
                onPointerMove={() => setActiveIndex(index)}
                onClick={() => selectOption(index)}
                className={`flex w-full items-center justify-between gap-4 rounded-[3px] px-3 py-2.5 text-left text-sm transition ${
                  isActive ? 'bg-[#edf4ff] text-[#17365f]' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span>{option.label}</span>
                {isSelected ? <Check className="h-4 w-4 text-[#2166d1]" strokeWidth={2.1} /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default function ContactForm({ variant }: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>({ status: 'idle' });
  const [serviceValue, setServiceValue] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (variant === 'contact-page' && !serviceValue) {
      setFormState({ status: 'error', message: 'Please select a service.' });
      return;
    }

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
      setServiceValue('');
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
    <form className={variant === 'homepage' ? 'space-y-6' : 'mt-8 space-y-6'} onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
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
          />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
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
          />
        </label>

        <div className="block">
          <span className="mb-2 block text-sm font-medium" style={{ color: 'var(--text-main)' }}>
            {variant === 'homepage' ? 'Area of interest' : 'Service *'}
          </span>
          <CustomSelect
            label={variant === 'homepage' ? 'Area of interest' : 'Service'}
            name="service"
            value={serviceValue}
            placeholder={variant === 'homepage' ? 'Select an area' : 'Select a service'}
            required={variant === 'contact-page'}
            disabled={formState.status === 'submitting'}
            onChange={(nextValue) => {
              setServiceValue(nextValue);
              if (formState.status === 'error' && formState.message === 'Please select a service.') {
                setFormState({ status: 'idle' });
              }
            }}
          />
        </div>
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
          className={`${fieldClassName} min-h-36 resize-y`}
        />
      </label>

      <div className="space-y-3">
        <button
          type="submit"
          disabled={formState.status === 'submitting'}
          className={`group inline-flex items-center gap-3 rounded-md bg-[#2166d1] px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(33,102,209,0.2)] transition ${
            formState.status === 'submitting' ? 'cursor-not-allowed opacity-70' : 'hover:bg-[#2b73df]'
          }`}
        >
          {formState.status === 'submitting' ? 'Sending...' : 'Send Message'}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.9} />
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
