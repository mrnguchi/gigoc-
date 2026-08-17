import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { companyContact } from '@/data/contact';
import ContactForm from '@/components/forms/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact-section" className="scroll-mt-32 bg-white px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl border-t border-slate-300 pt-8 sm:pt-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 text-sm font-semibold text-[#2166d1]">
              <span>Contact GiGOC</span>
              <span className="h-px w-16 bg-[#2166d1]/45" aria-hidden="true" />
            </div>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#17365f] sm:text-5xl lg:text-[3.5rem]">
              Let’s talk about your next project.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:col-span-4 lg:col-start-9">
            Tell us what you are working on and how we can help. Our team will get back to you.
          </p>
        </div>

        <div className="mt-14 grid gap-8 border-y border-slate-300 py-8 lg:mt-16 lg:grid-cols-12 lg:gap-0">
          <aside className="rounded-md bg-[#071a31] p-7 text-white sm:p-9 lg:col-span-4 lg:p-10">
            <p className="text-sm font-semibold text-[#5ea0ff]">Contact details</p>
            <h3 className="mt-4 max-w-sm text-2xl font-semibold leading-tight sm:text-3xl">
              Based in Limbe. Working across sectors.
            </h3>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              For projects, partnerships and general enquiries, reach us directly or use the form.
            </p>

            <div className="mt-10 border-t border-white/15">
              <div className="grid grid-cols-[1.5rem_1fr] gap-4 border-b border-white/15 py-5">
                <MapPin className="mt-0.5 h-5 w-5 text-[#5ea0ff]" strokeWidth={1.7} />
                <div>
                  <p className="text-xs font-medium text-white/50">Office</p>
                  <p className="mt-1 text-sm leading-6 text-white/85">{companyContact.address}</p>
                </div>
              </div>
              <div className="grid grid-cols-[1.5rem_1fr] gap-4 border-b border-white/15 py-5">
                <Mail className="mt-0.5 h-5 w-5 text-[#5ea0ff]" strokeWidth={1.7} />
                <div>
                  <p className="text-xs font-medium text-white/50">Email</p>
                  <Link href={`mailto:${companyContact.email}`} className="mt-1 inline-block text-sm text-white/85 transition hover:text-white">
                    {companyContact.email}
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-[1.5rem_1fr] gap-4 py-5">
                <Phone className="mt-0.5 h-5 w-5 text-[#5ea0ff]" strokeWidth={1.7} />
                <div>
                  <p className="text-xs font-medium text-white/50">Phone</p>
                  <Link href={`tel:${companyContact.phoneHref}`} className="mt-1 inline-block text-sm text-white/85 transition hover:text-white">
                    {companyContact.phoneDisplay}
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-7 lg:col-start-6 lg:py-3">
            <div className="mb-8 flex items-end justify-between gap-6 border-b border-slate-300 pb-5">
              <div>
                <p className="text-sm font-semibold text-[#2166d1]">Send an enquiry</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#17365f] sm:text-3xl">How can we help?</h3>
              </div>
              <span className="hidden text-xs text-slate-500 sm:block">* Required fields</span>
            </div>

            <ContactForm variant="homepage" />
          </div>
        </div>
      </div>
    </section>
  );
}
