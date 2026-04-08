import Link from 'next/link';
import { companyContact } from '@/data/contact';
import ContactForm from '@/components/forms/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact-section" className="scroll-mt-32 bg-[var(--bg-main)] px-5 pb-20 pt-4 sm:px-6 lg:px-10 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-start gap-10 rounded-[2rem] border bg-white md:mt-10 px-6 py-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:px-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div className="lg:pl-6">
          <p className="text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
            -- Contact us --
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl" style={{ color: 'var(--text-main)' }}>
            Let’s talk about your next project
          </h2>
          <p className="mt-5 text-base leading-7" style={{ color: 'var(--text-soft)' }}>
            Share your idea, business need, or partnership goal and our team will get back to you with the right next steps.
          </p>
          <p className="mt-4 text-sm leading-7 sm:text-base" style={{ color: 'var(--text-soft)' }}>
            We work across multiple industries, so whether your project is creative, commercial, or operational, we are ready to help you move it forward.
          </p>

          <div className="mt-6 space-y-2 text-sm leading-7 sm:text-base" style={{ color: 'var(--text-soft)' }}>
            <p>{companyContact.address}</p>
            <p>
              <Link href={`mailto:${companyContact.email}`} className="font-medium transition hover:text-[var(--primary)]">
                {companyContact.email}
              </Link>
            </p>
            <p>
              <Link href={`tel:${companyContact.phoneHref}`} className="font-medium transition hover:text-[var(--primary)]">
                {companyContact.phoneDisplay}
              </Link>
            </p>
          </div>
        </div>

        <ContactForm variant="homepage" />
      </div>
    </section>
  );
}
