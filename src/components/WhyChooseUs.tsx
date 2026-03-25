import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const highlights = [
  { value: '7+', label: 'Business Sectors' },
  { value: 'One', label: 'Unified Vision' },
  { value: 'End-to-End', label: 'Project Support' },
];

const reasons = [
  'Cross-sector experience that helps ideas move faster and smarter.',
  'Flexible support for creative, commercial, and operational projects.',
  'A quality-first approach focused on trust, structure, and long-term value.',
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white -mt-12 px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
            -- Why choose us --
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.7rem]" style={{ color: 'var(--text-main)' }}>
            
            <span className="block text--primary">Your Path to Stronger Growth and Execution</span>
          </h2>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_62%)]" />

            <div className="absolute -left-3 bottom-12 flex flex-col gap-3">
              <span className="h-3 w-3 rotate-45 rounded-[2px] bg-[#2563eb]" />
              <span className="ml-5 h-2.5 w-2.5 rotate-45 rounded-[2px] bg-[#60a5fa]" />
            </div>

            <div className="absolute right-7 top-3 grid grid-cols-3 gap-2 sm:right-10">
              {Array.from({ length: 9 }).map((_, index) => (
                <span key={index} className="h-2.5 w-2.5 rounded-full bg-[#4f6bff]" />
              ))}
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-[340px] overflow-hidden rounded-full border-[10px] border-[#dbe7ff] shadow-[0_24px_70px_rgba(37,99,235,0.14)] sm:max-w-[360px]">
              <Image src="/unnamed.jpg" alt="GiGOC featured project" fill className="object-cover" sizes="(max-width: 1024px) 320px, 360px" />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(30,74,149,0.12))]" />

              <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 shadow-lg">
                <span className="h-4 w-4 rounded-full bg-[#2563eb]" />
              </div>
            </div>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-7 sm:text-lg" style={{ color: 'var(--text-soft)' }}>
              GiGOC brings together creativity, structure, and business reach so every project has room to grow with confidence.
              Whether you are building a brand, launching a service, or expanding operations, we help turn direction into momentum.
            </p>

            {/* The quick stats echo the reference layout without relying on made-up performance claims. */}
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label}>
                  <p className="text-3xl font-semibold tracking-tight" style={{ color: 'var(--text-main)' }}>
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm font-medium" style={{ color: 'var(--text-soft)' }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-white">
                    <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <p className="text-sm leading-7 sm:text-base" style={{ color: 'var(--text-soft)' }}>
                    {reason}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="#contact-section"
              className="mt-9 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)' }}
            >
              Start a Project
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}