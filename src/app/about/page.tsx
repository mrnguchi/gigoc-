import { ArrowRight, CalendarDays, Mail, MapPin, Minus, PhoneCall, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { companyContact } from '@/data/contact';
import { newsSectionData } from '@/data/news';

const teamMembers = [
  { name: 'Bill B. Gebah', role: 'Chief Executive Officer', info: 'Leads the group vision and long-term strategy.', image: '/unnamed.jpg' },
  { name: 'Fogam Fabrice', role: 'General Manager', info: 'Oversees performance, coordination, and execution across divisions.', image: '/fogam.jpg' },
  { name: 'Motoma Harry', role: 'Operation Manager', info: 'Drives day-to-day systems, and cross-team workflow.', image: '/gigoc-house.jpg' },
  { name: 'Nguchi N.', role: 'IT Engineer', info: 'Supports digital systems, infrastructure, and technical innovation.', image: '/nguchi.jpg' },
  { name: 'Ruth B. Ngane', role: 'Secretary', info: 'Handles communication flow, scheduling, and office coordination.', image: '/unnamed.jpg' },
];

const companyStats = [
  { value: '7+', label: 'Business Divisions' },
  { value: '03', label: 'Featured Projects' },
  { value: '100%', label: 'Commitment To Quality' },
  { value: '24/7', label: 'Support Mindset' },
];

const faqs = [
  { question: 'Where are we located?', answer: `We are located in ${companyContact.address}.`, defaultOpen: true },
  { question: 'What services does GiGOC provide?', answer: 'GiGOC brings together creative, commercial, and operational businesses across modelling, real estate, manufacturing, logistics, entertainment, general commerce, and tech-driven innovation.' },
  { question: 'Do you support partnerships and collaborations?', answer: 'Yes. We welcome conversations around partnerships, investments, strategic collaborations, and project opportunities across our business divisions.' },
  { question: 'How can I contact your team?', answer: `You can reach us through the contact section on the home page, by email at ${companyContact.email}, or by phone on ${companyContact.phoneDisplay}.` },
  { question: 'Do you handle custom project requests?', answer: 'Yes. Depending on the division, our team can review tailored requests and recommend the best structure, service, or collaboration path.' },
];

const primaryNewsImage = newsSectionData.slides[0]?.image ?? newsSectionData.imageCard.image;
const newsDate = newsSectionData.article.details.find((detail) => detail.icon === 'calendar')?.info;
const newsLocation = newsSectionData.article.details.find((detail) => detail.icon === 'location')?.info;

function SocialIconRow() {
  const links = [
    { label: 'Facebook', icon: FaFacebookF, href: '#' },
    { label: 'Instagram', icon: FaInstagram, href: '#' },
    { label: 'LinkedIn', icon: FaLinkedinIn, href: '#' },
  ];

  return (
    <div className="flex items-center gap-2">
      {links.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/55 bg-white/92 text-[#1e4a95] shadow-sm transition hover:-translate-y-0.5"
          >
            <Icon className="h-4 w-4" />
          </Link>
        );
      })}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white" style={{ overflow: 'hidden' }}>
      <Navbar />

      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #101827 100%)' }}>
        <div className="absolute inset-0">
          <Image src="/hero-00.png" alt="About GiGOC hero background" fill priority className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/58" />
        </div>

        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-center px-5 pb-16 pt-32 text-center sm:px-6 lg:px-10 lg:pt-36">
          <div className="mx-auto max-w-3xl">
            <div
              className="inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.22em] uppercase text-white/80"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', borderColor: 'rgba(255, 255, 255, 0.12)' }}
            >
              About GiGOC
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">About Us</h1>
            <p className="mt-5 text-base leading-8 text-white/75 sm:text-lg">
              We are building a multi-sector group rooted in vision, structure, and long-term impact — bringing creativity, enterprise, and execution together under one brand.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-18 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.04fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
              -- Company Background --
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl" style={{ color: 'var(--text-main)' }}>
              A company built to connect ideas, industries, and opportunity
            </h2>
            <p className="mt-6 text-base leading-8" style={{ color: 'var(--text-soft)' }}>
              At Gebah Investment Group of Companies, we bring together innovation, creativity, and enterprise under one unified vision. Our presence across multiple industries enables us to build synergies that support sustainable growth and lasting value.
            </p>
            <p className="mt-5 text-base leading-8" style={{ color: 'var(--text-soft)' }}>
              From infrastructure and logistics to entertainment and technology, we remain focused on excellence, meaningful partnerships, and solutions that create impact for businesses and communities alike.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem]">
            <div className="absolute -left-3 top-8 h-30 w-16 rounded-l-[2rem] rounded-r-[0.5rem] bg-[#2563eb] sm:-left-5 sm:h-40 sm:w-20" />
            <div className="absolute -right-3 bottom-8 h-30 w-16 rounded-r-[2rem] rounded-l-[0.5rem] bg-[#2563eb] sm:-right-5 sm:h-40 sm:w-20" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem]">
                <Image src="/unnamed.jpg" alt="GiGOC company background" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-main)] px-5 py-18 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
              -- Our Team --
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl" style={{ color: 'var(--text-main)' }}>
              Meet Our Expert Team
            </h2>
            <p className="mt-4 text-base leading-7" style={{ color: 'var(--text-soft)' }}>
              The people behind GiGOC combine leadership, coordination, and creativity to move ideas into action across our businesses.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="group overflow-hidden rounded-[1.5rem] border bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_56px_rgba(15,23,42,0.12)]"
                style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}
              >
                <div className="relative h-90 rounded-2xl overflow-hidden">
                  <Image src={member.image} alt={member.name} fill className="object-cover   transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute  inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <SocialIconRow />
                  </div>
                </div>
                <div className="px-5 py-5">
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--text-main)' }}>
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm" style={{ color: 'var(--text-soft)' }}>
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-6" style={{ color: 'var(--text-soft)' }}>
                    {member.info}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-12 sm:px-6 lg:px-10 lg:py-14">
        <div className="absolute inset-0">
          <Image src="/hero-00.png" alt="GiGOC impact statistics background" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[rgba(8,18,36,0.86)]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 rounded-[1.75rem] border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4 lg:px-10 lg:py-10">
            {companyStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about-news" className="bg-white px-5 py-18 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
              -- Latest News --
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl" style={{ color: 'var(--text-main)' }}>
              Our Latest News & Updates
            </h2>
            <p className="mt-4 text-base leading-7" style={{ color: 'var(--text-soft)' }}>
              A quick look at featured news and event highlights from across GiGOC.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article
              className="group overflow-hidden rounded-[1.5rem] border bg-white shadow-[0_18px_40px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(15,23,42,0.11)]"
              style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={primaryNewsImage} alt={newsSectionData.article.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 420px" />
              </div>
              <div className="px-5 py-5">
                <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase" style={{ backgroundColor: 'var(--primary-soft)', color: 'var(--primary)' }}>
                  {newsSectionData.article.label}
                </span>
                <div className="mt-4 flex flex-wrap gap-4 text-xs" style={{ color: 'var(--text-soft)' }}>
                  {newsDate ? (
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {newsDate}
                    </span>
                  ) : null}
                  {newsLocation ? (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {newsLocation}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-snug" style={{ color: 'var(--text-main)' }}>
                  {newsSectionData.article.title}
                </h3>
                <p className="mt-3 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                  {newsSectionData.article.excerpt}
                </p>
                <Link
                  href={newsSectionData.article.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: 'var(--primary)' }}
                >
                  Read More
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-main)] px-5 py-18 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
              -- FAQs --
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl" style={{ color: 'var(--text-main)' }}>
              Questions? Look here.
            </h2>
            <p className="mt-4 text-base leading-7" style={{ color: 'var(--text-soft)' }}>
              Quick answers to common questions about who we are, what we do, and how to reach us.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  open={faq.defaultOpen}
                  className="group overflow-hidden rounded-[1rem] border bg-white shadow-[0_12px_28px_rgba(15,23,42,0.05)]"
                  style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold sm:text-base" style={{ color: 'var(--text-main)' }}>
                    <span>{faq.question}</span>
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                      <Plus className="h-4 w-4 group-open:hidden" strokeWidth={2.3} />
                      <Minus className="hidden h-4 w-4 group-open:block" strokeWidth={2.3} />
                    </span>
                  </summary>
                  <p className="border-t px-5 pb-5 pt-4 text-sm leading-7 sm:text-[15px]" style={{ borderColor: 'rgba(148, 163, 184, 0.14)', color: 'var(--text-soft)' }}>
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

            <div className="space-y-5">
              <div className="rounded-[1.5rem] bg-[#0d1d3c] p-6 text-center text-white shadow-[0_20px_60px_rgba(8,18,36,0.26)]">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                  <Mail className="h-6 w-6" strokeWidth={2.1} />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Need a direct answer?</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  Our team is available to answer questions, discuss partnerships, and guide you to the right division.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)' }}
                >
                  Contact Us
                </Link>
              </div>

              <div className="rounded-[1.25rem] border bg-white px-5 py-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)]" style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary)]">
                    <PhoneCall className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--text-soft)' }}>
                      Your comfort, our priority
                    </p>
                    <p className="mt-1 text-lg font-semibold" style={{ color: 'var(--text-main)' }}>
                      24/7 Service
                    </p>
                    <p className="text-sm" style={{ color: 'var(--text-soft)' }}>
                      {companyContact.phoneDisplay}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}