import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import NewsletterForm from '@/components/forms/NewsletterForm';
import { companyContact } from '@/data/contact';

const companyLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About GiGOC', href: '/about' },
  { label: 'Newsroom', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

const divisionLinks = [
  { label: 'Real Estate', href: '/#hero-divisions' },
  { label: 'GiGOC Rentals', href: '/gigoc_rentals' },
  { label: 'GiGOC Biomass', href: '/manufacturing' },
  { label: 'Entertainment & Talent', href: '/music&entertainment' },
  { label: 'General Commerce', href: '/#hero-divisions' },
  { label: 'Tech & Innovation', href: '/tech&innovation' },
  { label: 'Logistics', href: '/#hero-divisions' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#06162b] px-5 text-white sm:px-6 lg:px-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '96px 96px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/15 py-14 sm:py-16 lg:grid-cols-12 lg:items-end lg:py-20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 text-sm font-semibold text-[#5ea0ff]">
              <span>GiGOC updates</span>
              <span className="h-px w-16 bg-[#5ea0ff]/50" aria-hidden="true" />
            </div>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Get our latest news and project updates.
            </h2>
          </div>

          <div id="footer-newsletter" className="scroll-mt-8 lg:col-span-5 lg:col-start-8">
            <p className="mb-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Occasional updates from GiGOC. No unnecessary emails.
            </p>
            <NewsletterForm variant="stacked" buttonLabel="Subscribe" inputId="footer-newsletter-email" />
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/#home" className="inline-flex items-center" aria-label="GiGOC home">
              <Image src="/gigoc-white.png" alt="GiGOC" width={145} height={56} />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              GiGOC develops and operates businesses across seven sectors from Cameroon.
            </p>
            <Link
              href="/about"
              className="group mt-6 inline-flex items-center gap-2 border-b border-white/30 pb-1 text-sm font-semibold text-white transition hover:border-[#5ea0ff] hover:text-[#8abbff]"
            >
              About the group
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
            </Link>
          </div>

          <nav aria-label="Company links" className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <div className="mt-6 flex flex-col items-start gap-3.5">
              {companyLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-white/60 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="GiGOC businesses" className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white">Our businesses</h3>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {divisionLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-white/60 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <div className="mt-6 space-y-5 text-sm text-white/60">
              <div className="grid grid-cols-[1.25rem_1fr] gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[#5ea0ff]" strokeWidth={1.7} />
                <p className="leading-6">{companyContact.address}</p>
              </div>
              <div className="grid grid-cols-[1.25rem_1fr] gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[#5ea0ff]" strokeWidth={1.7} />
                <Link href={`mailto:${companyContact.email}`} className="transition hover:text-white">
                  {companyContact.email}
                </Link>
              </div>
              <div className="grid grid-cols-[1.25rem_1fr] gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[#5ea0ff]" strokeWidth={1.7} />
                <Link href={`tel:${companyContact.phoneHref}`} className="transition hover:text-white">
                  {companyContact.phoneDisplay}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 py-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Gebah Investment Group of Companies. All rights reserved.</p>
          <p>Limbe, Cameroon</p>
        </div>
      </div>
    </footer>
  );
}
