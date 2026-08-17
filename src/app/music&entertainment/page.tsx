import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Camera,
  Mail,
  MapPin,
  Mic2,
  Minus,
  Plus,
  Radio,
  Sparkles,
  Ticket,
} from 'lucide-react';
import EntertainmentHero from '@/components/entertainment/EntertainmentHero';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { companyContact } from '@/data/contact';
import { musicNewsArticles } from '@/data/news';

export const metadata: Metadata = {
  title: 'Entertainment & Talent | GiGOC',
  description:
    'Explore GiGOC artist management, modelling, podcast production, brand campaigns and live entertainment services.',
};

const services = [
  {
    title: 'Artist Management',
    description: 'Career direction, brand positioning, audience development and practical support around releases, bookings and live opportunities.',
    icon: Mic2,
  },
  {
    title: 'Talent & Modelling',
    description: 'Talent development and coordination for commercial shoots, visual campaigns and brand-facing work.',
    icon: Camera,
  },
  {
    title: 'Podcast Production',
    description: 'Recording direction, production planning, visual setup and support for publishing audience-ready programmes.',
    icon: Radio,
  },
  {
    title: 'Concert Production',
    description: 'Artist booking, venue coordination, promotion, show logistics and on-ground delivery for live events.',
    icon: Ticket,
  },
  {
    title: 'Brand Campaigns',
    description: 'Creative collaborations that connect brands with the right talent, story and audience.',
    icon: Sparkles,
  },
];

const artistFaqs = [
  {
    question: 'Who can apply for GiGOC artist management?',
    answer: 'Artists with a clear creative direction, a serious work ethic, and a willingness to grow with structure can apply. We are interested in talent that is ready for long-term development, not just short-term visibility.',
    defaultOpen: true,
  },
  {
    question: 'What do I need before reaching out?',
    answer: 'It helps to have your artist name, a short biography, sample music or performance content, active social links, and a clear sense of the kind of support you need. This gives our team a better starting point for evaluating fit.',
  },
  {
    question: 'Do you only work with established artists?',
    answer: 'No. We can work with both emerging and growing artists, as long as there is visible potential, consistency, and readiness to build with strategy, discipline, and collaboration.',
  },
  {
    question: 'What kind of support does management include?',
    answer: 'Depending on the artist and the plan, management support can include brand positioning, performance strategy, audience development, media visibility, booking guidance, and coordination around projects, releases, and live opportunities.',
  },
  {
    question: 'How do I start the process?',
    answer: `The best first step is to contact our team through the contact page or by email at ${companyContact.email}. Share your artist profile, links, and a short introduction so we can understand your direction and follow up appropriately.`,
  },
];

export default function MusicEntertainmentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar />
      <EntertainmentHero />

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl border-t border-slate-300 pt-8 sm:pt-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 text-sm font-semibold text-[#2166d1]">
                <span>Entertainment &amp; Talent</span>
                <span className="h-px w-16 bg-[#2166d1]/45" aria-hidden="true" />
              </div>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#17365f] sm:text-5xl lg:text-[3.5rem]">
                Creative work backed by clear planning and dependable delivery.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:col-span-4 lg:col-start-9">
              GiGOC brings talent management, campaign work, media production and live entertainment together under one business.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            <div className="relative min-h-[28rem] overflow-hidden rounded-lg bg-[#071a31] sm:min-h-[35rem] lg:col-span-7">
              <Image
                src="/asake.jpg"
                alt="Live entertainment production supported by GiGOC"
                fill
                className="object-cover object-top transition duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_44%,rgba(4,18,35,0.88)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">Live entertainment</p>
                <p className="mt-3 max-w-lg text-2xl font-semibold sm:text-3xl">Concerts planned from the first conversation to show night.</p>
              </div>
            </div>

            <div className="grid gap-4 lg:col-span-5">
              <div className="relative min-h-64 overflow-hidden rounded-lg bg-slate-100">
                <Image
                  src="/podcast-image.jpg"
                  alt="Podcast recording and production studio"
                  fill
                  className="object-cover transition duration-700 hover:scale-[1.025]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
              <div className="flex min-h-64 flex-col justify-between rounded-lg border border-slate-200 bg-[#f5f8fc] p-6 sm:p-8">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2166d1]">Talent and campaigns</span>
                <div>
                  <p className="max-w-md text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#17365f] sm:text-3xl">
                    The right people, well represented.
                  </p>
                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                    We help artists and models prepare for opportunities and work effectively with brands and production teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-[#f5f8fc] px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl border-t border-slate-300 pt-8 sm:pt-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-4 text-sm font-semibold text-[#2166d1]">
                <span>What we do</span>
                <span className="h-px w-16 bg-[#2166d1]/45" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#17365f] sm:text-5xl">
                Support across talent, media and live production.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Our involvement is shaped around the work itself, from focused support on one project to longer-term management.
              </p>
              <Link href="/contact" className="group mt-6 inline-flex items-center gap-3 border-b border-[#2166d1]/45 pb-1 text-sm font-semibold text-[#17365f] transition hover:border-[#2166d1] hover:text-[#2166d1]">
                Discuss a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="mt-14 grid border-t border-slate-300 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group min-h-72 border-b border-slate-300 px-0 py-8 transition duration-300 hover:bg-white sm:px-6 md:border-r xl:[&:nth-child(3n)]:border-r-0"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex h-11 w-11 items-center justify-center border border-slate-300 text-[#2166d1] transition group-hover:border-[#2166d1] group-hover:bg-[#2166d1] group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <span className="text-xs font-semibold text-[#2166d1]/65">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.025em] text-[#17365f]">{service.title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-20 lg:space-y-24">
          <div className="grid gap-8 border-t border-slate-300 pt-8 lg:grid-cols-12 lg:items-center">
            <div className="relative min-h-[25rem] overflow-hidden rounded-lg bg-slate-100 lg:col-span-7 lg:min-h-[34rem]">
              <Image src="/asake-2.jpg" alt="Concert performance produced for a live audience" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 58vw" />
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-sm font-semibold text-[#2166d1]">Concert production</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#17365f] sm:text-4xl">
                Live shows planned around the artist and the audience.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                GiGOC supports artist booking, audience planning, show logistics, venue coordination, promotion and on-ground execution.
              </p>
              <Link href="/contact" className="group mt-8 inline-flex items-center gap-3 rounded-md bg-[#2166d1] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2b73df]">
                Plan an event with us
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <div className="grid gap-8 border-t border-slate-300 pt-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold text-[#2166d1]">Podcast production</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#17365f] sm:text-4xl">
                A solid setup for voices worth hearing.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                GiGOC supports podcast creators with recording direction, production planning, visual setup, show positioning and audience-ready publishing support.
              </p>
              <Link href="/contact" className="group mt-8 inline-flex items-center gap-3 border-b border-[#2166d1]/45 pb-1 text-sm font-semibold text-[#17365f] transition hover:border-[#2166d1] hover:text-[#2166d1]">
                Start a podcast with us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative min-h-[25rem] overflow-hidden rounded-lg bg-slate-100 lg:col-span-7 lg:col-start-6 lg:min-h-[34rem]">
              <Image src="/podcast-image.jpg" alt="GiGOC podcast production setup" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 58vw" />
            </div>
          </div>
        </div>
      </section>

      {musicNewsArticles.length > 0 ? (
        <section className="bg-[#f5f8fc] px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl border-t border-slate-300 pt-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold text-[#2166d1]">From the newsroom</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#17365f] sm:text-5xl">Concerts and recent work.</h2>
              </div>
              <Link href="/news" className="group inline-flex items-center gap-3 text-sm font-semibold text-[#17365f]">
                View all news
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {musicNewsArticles.map((concert) => {
                const concertDate = concert.details.find((detail) => detail.icon === 'calendar')?.info;
                const concertLocation = concert.details.find((detail) => detail.icon === 'location')?.info;

                return (
                  <Link key={concert.slug} href={concert.href} className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition duration-300 hover:border-slate-400 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={concert.gallery[0]?.image ?? concert.featuredImage.image} alt={concert.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" sizes="(max-width: 768px) 100vw, 420px" />
                    </div>
                    <div className="border-t border-slate-200 p-6">
                      <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                        {concertDate ? <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" />{concertDate}</span> : null}
                        {concertLocation ? <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{concertLocation}</span> : null}
                      </div>
                      <h3 className="mt-5 text-2xl font-semibold leading-snug text-[#17365f]">{concert.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{concert.excerpt}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2166d1]">Read more <ArrowUpRight className="h-4 w-4" /></span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-slate-300 pt-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-[#2166d1]">Artist management FAQs</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] text-[#17365f]">
              Before you introduce your work.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              A quick guide to what GiGOC looks for and how to approach the management team.
            </p>
            <div className="mt-8 border-l-2 border-[#2166d1] pl-5">
              <p className="text-sm text-slate-500">Management enquiries</p>
              <a href={`mailto:${companyContact.email}`} className="mt-1 block font-semibold text-[#17365f]">{companyContact.email}</a>
            </div>
          </div>

          <div className="space-y-3 lg:col-span-7 lg:col-start-6">
            {artistFaqs.map((faq) => (
              <details key={faq.question} open={faq.defaultOpen} className="group border-b border-slate-300 bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-base font-semibold text-[#17365f] sm:text-lg">
                  <span>{faq.question}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-slate-300 text-[#2166d1]">
                    <Plus className="h-4 w-4 group-open:hidden" />
                    <Minus className="hidden h-4 w-4 group-open:block" />
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-slate-600 sm:text-base">{faq.answer}</p>
              </details>
            ))}

            <Link href="/contact" className="group mt-8 inline-flex items-center gap-3 rounded-md bg-[#2166d1] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2b73df]">
              <Mail className="h-4 w-4" />
              Contact the team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
