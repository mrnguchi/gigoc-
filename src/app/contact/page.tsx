import { ArrowUpRight, Clock3, Mail, MapPin, PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/forms/ContactForm';
import { companyContact } from '@/data/contact';

const contactDetails = [
  { title: 'Office', icon: MapPin, lines: companyContact.addressLines },
  {
    title: 'Email',
    icon: Mail,
    lines: [companyContact.email],
    href: `mailto:${companyContact.email}`,
  },
  {
    title: 'Phone',
    icon: PhoneCall,
    lines: [companyContact.phoneDisplay],
    href: `tel:${companyContact.phoneHref}`,
  },
  {
    title: 'Office hours',
    icon: Clock3,
    lines: ['Monday - Friday', '09:00 am - 05:00 pm'],
  },
];

const socialLinks = [
  { label: 'Facebook', href: '#', icon: FaFacebookF },
  { label: 'X', href: '#', icon: FaXTwitter },
  { label: 'Instagram', href: '#', icon: FaInstagram },
  { label: 'LinkedIn', href: '#', icon: FaLinkedinIn },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar />

      <section className="relative min-h-[720px] overflow-hidden bg-[#06182d] text-white lg:min-h-[780px]">
        <Image
          src="/hero-00.png"
          alt="GiGOC contact page hero background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#06182d]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06182d] via-[#06182d]/72 to-[#06182d]/30" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col px-5 pb-12 pt-32 sm:px-6 lg:min-h-[780px] lg:px-8 lg:pb-16 lg:pt-36">
          <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 text-sm font-semibold text-[#65a4ff]">
                <span>Contact GiGOC</span>
                <span className="h-px w-16 bg-[#65a4ff]/70" aria-hidden="true" />
              </div>

              <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4.75rem]">
                Let’s Talk About Your Next Big Move
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Whether you need business support, partnership direction, or a tailored quote, our team is ready to listen and help you move forward with clarity.
              </p>
            </div>

            <div className="self-end border-t border-white/20 pt-6 lg:col-span-3 lg:col-start-10 lg:self-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Start a conversation</p>
              <Link
                href={`mailto:${companyContact.email}`}
                className="group mt-4 flex items-center justify-between gap-5 border-b border-white/20 pb-4 text-base font-medium text-white transition hover:border-[#65a4ff] hover:text-[#8abbff]"
              >
                {companyContact.email}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={`tel:${companyContact.phoneHref}`}
                className="group flex items-center justify-between gap-5 border-b border-white/20 py-4 text-base font-medium text-white transition hover:border-[#65a4ff] hover:text-[#8abbff]"
              >
                {companyContact.phoneDisplay}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="grid border-y border-white/20 sm:grid-cols-3">
            <div className="border-b border-white/20 py-5 sm:border-b-0 sm:border-r sm:pr-6">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40">Office</p>
              <p className="mt-2 text-sm text-white/80">Limbe, Cameroon</p>
            </div>
            <div className="border-b border-white/20 py-5 sm:border-b-0 sm:border-r sm:px-6">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40">Enquiries</p>
              <p className="mt-2 text-sm text-white/80">Projects and partnerships</p>
            </div>
            <div className="py-5 sm:pl-6">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40">Availability</p>
              <p className="mt-2 text-sm text-white/80">Monday - Friday</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-main)] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-t border-slate-300 pt-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 text-sm font-semibold text-[#2166d1]">
                <span>Send an enquiry</span>
                <span className="h-px w-16 bg-[#2166d1]/45" aria-hidden="true" />
              </div>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#17365f] sm:text-5xl lg:text-[3.5rem]">
                Get a response within 48 hours.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:col-span-4 lg:col-start-9">
              Talk to us about projects, partnerships, investments, or operational support.
            </p>
          </div>

          <div className="mt-14 grid border-y border-slate-300 lg:mt-16 lg:grid-cols-12">
            <div className="py-10 lg:col-span-7 lg:border-r lg:border-slate-300 lg:py-14 lg:pr-14">
              <div className="mb-8 flex items-end justify-between gap-6 border-b border-slate-300 pb-5">
                <div>
                  <p className="text-sm font-semibold text-[#2166d1]">Your enquiry</p>
                  <h3 className="mt-2 text-2xl font-semibold text-[#17365f] sm:text-3xl">How can we help?</h3>
                </div>
                <span className="hidden text-xs text-slate-500 sm:block">* Required fields</span>
              </div>

              <ContactForm variant="contact-page" />
            </div>

            <aside className="bg-[#071a31] px-6 py-10 text-white sm:px-9 lg:col-span-5 lg:px-12 lg:py-14">
              <p className="text-sm font-semibold text-[#65a4ff]">Contact details</p>
              <h3 className="mt-4 max-w-md text-2xl font-semibold leading-tight sm:text-3xl">
                Based in Limbe. Working across sectors.
              </h3>

              <div className="mt-10 border-t border-white/15">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="grid grid-cols-[1.5rem_1fr] gap-4">
                      <Icon className="mt-0.5 h-5 w-5 text-[#65a4ff]" strokeWidth={1.7} />
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/45">{item.title}</p>
                        <div className="mt-2 space-y-1 text-sm leading-6 text-white/80">
                          {item.lines.map((line) => <p key={line}>{line}</p>)}
                        </div>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block border-b border-white/15 py-6 transition hover:bg-white/[0.035]"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div key={item.title} className="border-b border-white/15 py-6">
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="mt-9">
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/45">Stay connected</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        aria-label={item.label}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-[3px] border border-white/20 text-white/75 transition hover:border-[#65a4ff] hover:bg-[#2166d1] hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
