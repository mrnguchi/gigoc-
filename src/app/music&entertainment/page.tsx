import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, Mail, MapPin, Minus, PhoneCall, Plus } from 'lucide-react';
import { Mic2, Radio, Ticket } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { companyContact } from '@/data/contact';
import { newsArticles } from '@/data/news';

const highlights = [
  {
    title: 'Artist',
    subtitle: 'Management & Growth',
    icon: Mic2,
  },
  {
    title: 'Podcast',
    subtitle: 'Recording & Distribution',
    icon: Radio,
  },
  {
    title: 'Concerts',
    subtitle: 'Planning & Production',
    icon: Ticket,
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
    <main className="min-h-screen overflow-hidden bg-[var(--bg-main)]">
      <Navbar />

      <section className="relative px-0 pt-24 md:pt-30">
        <div className="absolute inset-0">
          <Image src="/music&entertainment_bg.jpg" alt="GiGOC Music and Entertainment hero background" fill className="object-cover object-center" sizes="100vw" priority />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(4,10,24,0.9)_0%,rgba(8,18,36,0.78)_46%,rgba(19,63,145,0.6)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-6 md:grid-cols-[1.02fr_0.98fr] md:items-center md:px-4 md:py-18">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold text-center  md:text-left tracking-[0.22em] uppercase text-white/70">
              - GiGOC Music & Entertainment -
            </p>

            <h1 className="max-w-[15ch] text-4xl text-center  md:text-left font-semibold leading-[1.02] text-white sm:max-w-[14ch] sm:text-4xl md:max-w-[15ch] md:text-5xl">
              We build unforgettable talent and entertainment experiences
            </h1>

            <p className="max-w-[44rem] text-base text-center  md:text-left leading-8 text-white/76 md:text-lg">
              GiGOC Music & Entertainment supports the full creative journey, from managing artists and shaping brand visibility to producing podcasts, curating live experiences.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row md:gap-4">
              <Link
                href="/contact"
                className="w-full rounded-full px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_35px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 sm:w-auto sm:px-8 md:text-base"
                style={{ background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)' }}
              >
                Work With Our Team
              </Link>
              <Link
                href="#"
                className="w-full rounded-full border px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:px-8 md:text-base"
                style={{ borderColor: 'rgba(255, 255, 255, 0.18)' }}
              >
                Explore Services
              </Link>
            </div>

            <div
              className="grid w-full align-center  max-w-[46rem] divide-y divide-white/12 overflow-hidden rounded-[1.75rem] border sm:grid-cols-3 sm:divide-x sm:divide-y-0"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.12)',
              }}
            >
              {highlights.map((highlight) => {
                const Icon = highlight.icon;

                return (
                  <div key={highlight.title} className="px-5 py-6 " style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)' }}>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white">
                      <Icon className="h-5 w-5" strokeWidth={2.1} />
                    </span>
                    <p className="mt-4 text-2xl font-semibold text-white md:text-3xl">{highlight.title}</p>
                    <p className="mt-2 text-xs text-white/70 md:text-sm">{highlight.subtitle}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* <div className="hidden justify-end md:flex">
            <div
              className="max-w-[30rem] rounded-[2rem] border p-6 backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(8, 18, 36, 0.34)',
                borderColor: 'rgba(255, 255, 255, 0.12)',
                boxShadow: '0 30px 70px rgba(4, 10, 24, 0.34)',
              }}
            >
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/60">
                Creative Services
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
                From talent strategy to live show execution
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/72">
                We help artists and brands move with structure, visibility, and stronger audience connection through management support, media production, podcast development, and event coordination.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.35rem] border border-white/10 bg-white/6 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/58">Artist Services</p>
                  <p className="mt-3 text-lg font-semibold text-white">Management, promotion, bookings, and growth planning</p>
                </div>
                <div className="rounded-[1.35rem] border border-white/10 bg-white/6 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/58">Production</p>
                    <Sparkles className="h-4 w-4 text-white/70" strokeWidth={2.1} />
                  </div>
                  <p className="mt-3 text-lg font-semibold text-white">Podcast hosting, live experiences, and concert delivery</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section className="bg-white px-5 py-18 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 md:items-stretch lg:gap-8">
            <div
              className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] border bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:min-h-[37rem]"
              style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}
            >
              <Image
                src="/asake.jpg"
                alt="GiGOC live concert experience"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,32,0.06)_0%,rgba(16,24,39,0.28)_55%,rgba(8,18,36,0.58)_100%)]" />
            </div>

            <div
              className="flex h-full min-h-[22rem] flex-col rounded-[1.75rem] border bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:min-h-[37rem] md:p-8 lg:p-9"
              style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}
            >
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: 'var(--primary)' }}>
                  -- Concert Organization --
                </p>
                <h2 className="mt-3  text-3xl font-semibold leading-tight sm:text-4xl" style={{ color: 'var(--text-main)' }}>
                  We create concert experiences that artists and audiences remember
                </h2>
                <p className="mt-4 max-w-[40rem] text-base leading-8" style={{ color: 'var(--text-soft)' }}>
                  GiGOC helps bring live shows to life from concept to crowd experience. We support artist booking, audience planning, show logistics, venue coordination, promotion, and on-ground execution.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border bg-[var(--bg-main)] p-5" style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full" style={{ backgroundColor: 'var(--primary-soft)', color: 'var(--primary)' }}>
                      <Image src="/microphone.png" alt="Event focus icon" width={20} height={20} className="h-5 w-5 object-contain" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--text-soft)' }}>
                        Event Focus
                      </p>
                      <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--text-main)' }}>
                        Live Concerts
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.4rem] border bg-[var(--bg-main)] p-5" style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full" style={{ backgroundColor: 'var(--primary-soft)', color: 'var(--primary)' }}>
                      <Image src="/concert.png" alt="Delivery icon" width={20} height={20} className="h-5 w-5 object-contain" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--text-soft)' }}>
                        Delivery
                      </p>
                      <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--text-main)' }}>
                        Planning To Production
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-3 sm:flex-row">
                <Link
                  href="/news"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 sm:w-auto"
                  style={{ background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)' }}
                >
                  View Our Concerts
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
                  style={{ borderColor: 'rgba(148, 163, 184, 0.24)', color: 'var(--text-main)' }}
                >
                  Plan An Event With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-main)] px-5 py-18 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 md:items-stretch lg:gap-8">
            <div
              className="flex h-full min-h-[22rem] flex-col rounded-[1.75rem] border bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:min-h-[37rem] md:p-8 lg:p-9"
              style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}
            >
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: 'var(--primary)' }}>
                  -- Podcast Services --
                </p>
                <h2 className="mt-3  text-3xl font-semibold leading-tight sm:text-4xl" style={{ color: 'var(--text-main)' }}>
                  We help voices grow through well-produced podcast experiences
                </h2>
                <p className="mt-4 max-w-[40rem] text-base leading-8" style={{ color: 'var(--text-soft)' }}>
                  GiGOC supports podcast creators with recording direction, production planning, visual setup, show positioning, and audience-ready publishing support.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border bg-[var(--bg-main)] p-5" style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full" style={{ backgroundColor: 'var(--primary-soft)', color: 'var(--primary)' }}>
                      <Image src="/microphone.png" alt="Podcast recording icon" width={20} height={20} className="h-5 w-5 object-contain" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--text-soft)' }}>
                        Service
                      </p>
                      <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--text-main)' }}>
                        Podcast Hosting
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.4rem] border bg-[var(--bg-main)] p-5" style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full" style={{ backgroundColor: 'var(--primary-soft)', color: 'var(--primary)' }}>
                      <Image src="/concert.png" alt="Podcast delivery icon" width={20} height={20} className="h-5 w-5 object-contain" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--text-soft)' }}>
                        Delivery
                      </p>
                      <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--text-main)' }}>
                        Production Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 sm:w-auto"
                  style={{ background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)' }}
                >
                  Explore Our Podcasts
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
                  style={{ borderColor: 'rgba(148, 163, 184, 0.24)', color: 'var(--text-main)' }}
                >
                  Start A Podcast With Us
                </Link>
              </div>
            </div>

            <div
              className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] border bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:min-h-[37rem]"
              style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}
            >
              <Image
                src="/podcast-image.jpg"
                alt="GiGOC podcast production setup"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,32,0.04)_0%,rgba(16,24,39,0.22)_52%,rgba(8,18,36,0.54)_100%)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-18 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
              -- Our Concerts --
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl" style={{ color: 'var(--text-main)' }}>
              Concert highlights and live event experiences
            </h2>
            <p className="mt-4 text-base leading-7" style={{ color: 'var(--text-soft)' }}>
              Explore featured concert experiences organized, promoted, or spotlighted through GiGOC Music & Entertainment.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {newsArticles.map((concert) => {
              const concertDate = concert.details.find((detail) => detail.icon === 'calendar')?.info;
              const concertLocation = concert.details.find((detail) => detail.icon === 'location')?.info;

              return (
                <article
                  key={concert.slug}
                  className="group overflow-hidden rounded-[1.5rem] border bg-white shadow-[0_18px_40px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(15,23,42,0.11)]"
                  style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={concert.gallery[0]?.image ?? concert.featuredImage.image}
                      alt={concert.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                  </div>
                  <div className="px-5 py-5">
                    <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase" style={{ backgroundColor: 'var(--primary-soft)', color: 'var(--primary)' }}>
                      {concert.label}
                    </span>
                    <div className="mt-4 flex flex-wrap gap-4 text-xs" style={{ color: 'var(--text-soft)' }}>
                      {concertDate ? (
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {concertDate}
                        </span>
                      ) : null}
                      {concertLocation ? (
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {concertLocation}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold leading-snug" style={{ color: 'var(--text-main)' }}>
                      {concert.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                      {concert.excerpt}
                    </p>
                    <Link
                      href={concert.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: 'var(--primary)' }}
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-main)] px-5 py-18 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
              -- Artist Q&amp;A --
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl" style={{ color: 'var(--text-main)' }}>
              Questions artists usually ask before signing with management
            </h2>
            <p className="mt-4 text-base leading-7" style={{ color: 'var(--text-soft)' }}>
              A quick guide for artists who want to understand what GiGOC Music & Entertainment looks for, how the process works, and what support management can provide.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-4">
              {artistFaqs.map((faq) => (
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
                <h3 className="mt-4 text-xl font-semibold">Ready to introduce your sound?</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  Share your profile, links, and creative direction with our team so we can review your fit for artist management and next-step support.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)' }}
                >
                  Contact The Team
                </Link>
              </div>

              <div className="rounded-[1.25rem] border bg-white px-5 py-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)]" style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary)]">
                    <PhoneCall className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--text-soft)' }}>
                      Management Desk
                    </p>
                    <p className="mt-1 text-lg font-semibold" style={{ color: 'var(--text-main)' }}>
                      Artist Support Line
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
