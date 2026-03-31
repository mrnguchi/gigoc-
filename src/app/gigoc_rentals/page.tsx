'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AppWindow, ArrowRight, BriefcaseBusiness, CarFront, CheckCircle2, MapPinned, ShieldCheck, TimerReset, UserRoundPlus, WalletCards } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const benefits = [
  {
    title: 'Fast City Mobility',
    description: 'Request rides and access rental options built for daily movement, airport transfers, and business schedules.',
    icon: TimerReset,
  },
  {
    title: 'Reliable Vehicles',
    description: 'Our rental experience is centered on clean, dependable, and well-managed vehicles across different categories.',
    icon: ShieldCheck,
  },
  {
    title: 'Flexible Booking',
    description: 'Choose the transport option that fits your timeline, whether you need a quick ride, a daily rental, or a premium trip.',
    icon: WalletCards,
  },
  {
    title: 'Location-Aware Service',
    description: 'The mobile app is designed around real-time awareness so users can discover available rides near them with clarity.',
    icon: MapPinned,
  },
];

const carCategories = [
  {
    title: 'Economy Cars',
    badge: 'Economy',
    badgeClassName: 'border-white/16 bg-white/12 text-white',
    image: '/car1.jpg',
    description: 'Practical and budget-friendly cars for everyday movement.',
  },
  {
    title: 'Executive Sedans',
    badge: 'Executive',
    badgeClassName: 'border-black/20 bg-[rgba(15,23,42,0.72)] text-white',
    image: '/bmw3-s.jpg',
    description: 'Comfortable and polished vehicles for professionals.',
  },
  {
    title: 'SUVs & Family Mobility',
    badge: 'Family',
    badgeClassName: 'border-[rgba(255,255,255,0.22)] bg-[linear-gradient(135deg,rgba(30,74,149,0.92),rgba(37,99,235,0.88))] text-white',
    image: '/gle-23.jpg',
    description: 'Spacious rides for group movement.',
  },
  {
    title: 'Utility & Pickup Options',
    badge: 'Utility',
    badgeClassName: 'border-[rgba(255,215,140,0.35)] bg-[linear-gradient(135deg,rgba(176,124,33,0.95),rgba(244,196,83,0.92))] text-[#fff8e6]',
    image: '/ford-ranger.jpg',
    description: 'Vehicles suited for logistics-related transport.',
  },
];

const partnerSteps = [
  {
    title: 'Apply as a Partner',
    description: 'Start by sharing your vehicle and ownership details so the GiGOC Rentals team can review your fit for the platform.',
    icon: UserRoundPlus,
  },
  {
    title: 'Vehicle Review & Onboarding',
    description: 'We validate key details, prepare your onboarding, and help position your ride within the right rental category.',
    icon: CarFront,
  },
  {
    title: 'Go Live in the App',
    description: 'Once approved, your vehicle becomes part of the rentals ecosystem where customers can discover and request it.',
    icon: AppWindow,
  },
  {
    title: 'Earn & Grow with Us',
    description: 'Track demand, receive bookings, and grow alongside a rental network built around trust, service quality, and visibility.',
    icon: BriefcaseBusiness,
  },
];

export default function GigocRentalsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--bg-main)]">
      <Navbar />

      <section className="relative px-0 pt-24 md:pt-32">
        <div className="absolute inset-0">
          <Image src="/hero-00.png" alt="GiGOC Rentals hero background" fill className="object-cover object-center" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-[rgba(8,18,36,0.82)]" />

        <div className="relative -mb-4 flex items-center justify-center px-4 pb-0 md:hidden">
          <div className="absolute bottom-12 left-6 z-10 flex items-center gap-2 rounded-xl border border-white/12 bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm">
            <Image src="/location-icon.png" alt="location" width={48} height={24} className="h-6 w-12 shrink-0 object-contain" />
            <span className="text-xs font-semibold text-[var(--text-main)]">Near You</span>
          </div>

          <div className="absolute right-6 top-6 z-10 flex items-center gap-2 rounded-xl border border-white/12 bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="var(--primary)">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
            </svg>
            <span className="text-xs font-semibold text-[var(--text-main)]">120+ Cars</span>
          </div>

          <Image src="/hero-car2.png" alt="GiGOC Rentals featured vehicle" width={320} height={220} className="h-auto w-[95%] max-w-[320px] object-contain drop-shadow-2xl" priority />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-0 md:grid-cols-2 md:items-center md:px-4 md:py-16">
          <div className="flex flex-col gap-4">
            <p className="text-sm text-center md:text-left font-semibold tracking-[0.22em] uppercase text-white/70">
              -- GiGOC Rentals --
            </p>

            <h1 className="text-3xl text-center  md:text-left font-semibold leading-tight text-white sm:text-5xl md:text-5xl lg:text-5xl">
              Rent a Car Anytime, Anywhere with GIGOC Rentals
            </h1>

            <p className="max-w-xl text-sm text-center  md:text-left text-white/72 md:text-lg">
              GiGOC Rentals is evolving into a mobile-first experience for smarter ride access, rental discovery, and partner-driven mobility across Cameroon.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row md:gap-4">
              <Link
                href="#app-download"
                className="w-full rounded-full px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_35px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 sm:w-auto sm:px-8 md:text-base"
                style={{ background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)' }}
              >
                Get The App
              </Link>
              <Link
                href="#partner-program"
                className="w-full rounded-full border px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:px-8 md:text-base"
                style={{ borderColor: 'rgba(255, 255, 255, 0.18)' }}
              >
                Become A Partner
              </Link>
            </div>

            <div
              className="grid w-full divide-y divide-white/12 overflow-hidden rounded-[1.75rem] border sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:w-11/12"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.12)',
              }}
            >
              <div className="px-5 py-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)' }}>
                <p className="text-2xl font-semibold text-white md:text-3xl">Mobile</p>
                <p className="mt-2 text-xs text-white/70 md:text-sm">First Experience</p>
              </div>
              <div className="px-5 py-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)' }}>
                <p className="text-2xl font-semibold text-white md:text-3xl">Partner</p>
                <p className="mt-2 text-xs text-white/70 md:text-sm">Driven Network</p>
              </div>
              <div className="px-5 py-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)' }}>
                <p className="text-2xl font-semibold text-white md:text-3xl">Smart</p>
                <p className="mt-2 text-xs text-white/70 md:text-sm">Urban Mobility</p>
              </div>
            </div>
          </div>

          <Image
            src="/hero-car2.png"
            alt="GiGOC Rentals hero vehicle"
            width={920}
            height={640}
            priority
            className="hidden h-auto w-full object-contain drop-shadow-xl md:block md:w-[110%] lg:w-[120%] xl:w-[128%]"
          />
        </div>
      </section>

      <section className="bg-white px-4 py-18 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
              -- Why Choose Us --
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl" style={{ color: 'var(--text-main)' }}>
              Built for modern rentals, everyday riders, and trusted mobility partners
            </h2>
            <p className="mt-4 text-base leading-7" style={{ color: 'var(--text-soft)' }}>
              GiGOC Rentals is being positioned as more than a fleet page. It is a mobility service ecosystem designed for convenience, clarity, and growth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-[1.5rem] border bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.07)] transition-transform duration-300 hover:-translate-y-1"
                  style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: 'var(--primary-soft)', color: 'var(--primary)' }}>
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold" style={{ color: 'var(--text-main)' }}>
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-main)] px-4 py-18 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-[0.44fr_0.56fr] lg:gap-14">
            <div className="max-w-xl">
              <p className="text-sm text-center  md:text-left font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
                -- Our Categories --
              </p>
              <h2 className="mt-3 max-w-[13ch] text-3xl text-center  md:text-left font-semibold leading-tight sm:text-4xl" style={{ color: 'var(--text-main)' }}>
                Find the right ride for every type of movement
              </h2>
              <p className="mt-4 max-w-lg text-base text-center  md:text-left leading-7" style={{ color: 'var(--text-soft)' }}>
                GiGOC Rentals is being designed around real transport needs. Whether it is daily city movement, executive travel, family trips, or utility support, the platform helps users discover the category that fits the journey.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-[0_14px_30px_rgba(15,23,42,0.07)] ring-1 ring-slate-200/80">
                <span className="inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ backgroundColor: 'var(--primary-soft)', color: 'var(--primary)' }}>
                  Mobility First
                </span>
                <p className="text-sm font-medium" style={{ color: 'var(--text-soft)' }}>
                  One rentals platform, multiple ride categories
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {carCategories.map((category) => (
              <article
                key={category.title}
                className="group relative overflow-hidden rounded-[1.4rem] border shadow-[0_20px_44px_rgba(15,23,42,0.12)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(15,23,42,0.18)] sm:rounded-[1.75rem]"
                style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}
              >
                <div className="relative h-44 overflow-hidden sm:h-52">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,32,0.2)_0%,rgba(16,24,39,0.6)_48%,rgba(30,74,149,0.88)_100%)] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(7,16,32,0.16)_0%,rgba(22,54,115,0.66)_42%,rgba(37,99,235,0.94)_100%)]" />
                  <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4">
                    <span className={`inline-flex w-fit rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm sm:px-3 sm:text-[11px] ${category.badgeClassName}`}>
                      {category.badge}
                    </span>

                    <div className="translate-y-1 transition duration-500 group-hover:translate-y-0">
                      <h3 className="max-w-[11ch] text-base font-semibold leading-tight text-white sm:text-xl">
                        {category.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-[11px] leading-5 text-white/78 sm:text-xs sm:leading-5">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section id="app-download" className="bg-white -mt-10 px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div
            className="relative overflow-hidden rounded-[2rem] border bg-[#fcfdfc] px-4 py-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:px-6 sm:py-8 lg:px-10 lg:py-12"
            style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-60" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12">
              <div className="lg:pr-4">
                <p className="text-sm text-center font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
                  -- Mobile App --
                </p>
                <h2 className="mt-4 text-center max-w-[14ch] text-[2.7rem] font-semibold leading-[0.96] sm:max-w-md sm:text-5xl" style={{ color: '#111827' }}>
                  Download app,
                  <br />
                  Start drive, Earn money!
                </h2>
                <p className="mt-5 text-center max-w-full text-[1.05rem] leading-8 sm:mt-6 sm:max-w-md sm:text-base" style={{ color: '#5b6475' }}>
                  The GiGOC Rentals app brings our mobility service closer to you. Discover available rides, request transport faster, manage your bookings with ease, and stay connected to reliable movement across town, business trips, airport transfers, and everyday errands.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#"
                    className="inline-flex w-full min-w-0 items-center gap-3 rounded-[0.9rem] border border-black/90 bg-[#16181d] px-4 py-3 transition hover:-translate-y-0.5 hover:bg-black sm:w-auto sm:min-w-[225px]"
                  >
                    <Image src="/playstore.jpeg" alt="Play Store icon" width={40} height={40} className="h-10 w-10 rounded-[0.65rem] object-cover" />
                    <div className="text-left">
                      <p className="text-[11px] leading-none text-white/65">Android</p>
                      <p className="mt-1 text-[1.05rem] font-semibold leading-none text-white sm:text-lg">Download from Playstore</p>
                    </div>
                  </Link>

                  <Link
                    href="#"
                    className="inline-flex w-full min-w-0 items-center gap-3 rounded-[0.9rem] border border-black/90 bg-[#16181d] px-4 py-3 transition hover:-translate-y-0.5 hover:bg-black sm:w-auto sm:min-w-[225px]"
                  >
                    <Image src="/appstore.jpeg" alt="App Store icon" width={40} height={40} className="h-10 w-10 rounded-[0.65rem] object-cover" />
                    <div className="text-left">
                      <p className="text-[11px] leading-none text-white/65">iOS</p>
                      <p className="mt-1 text-[1.05rem] font-semibold leading-none text-white sm:text-lg">Available on App Store</p>
                    </div>
                  </Link>
                </div>

                <div className="mt-8 flex w-full max-w-[320px] items-center gap-3 rounded-full bg-white px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 sm:w-fit sm:max-w-none">
                  <div className="h-11 w-11 overflow-hidden rounded-[0.85rem] bg-white p-1 ring-1 ring-slate-200/80">
                    <Image src="/sample-qr.png" alt="GiGOC Rentals QR code" width={44} height={44} className="h-full w-full rounded-[0.55rem] object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#111827' }}>Scan to download</p>
                    <p className="text-xs" style={{ color: '#6b7280' }}>Get GiGOC Rentals on your phone in seconds</p>
                  </div>
                </div>
              </div>

              <div className="relative flex min-h-[430px] items-start justify-center pt-2 sm:min-h-[700px] sm:items-center sm:pt-0 lg:justify-end">
                <div className="absolute inset-x-2 top-2 h-[80%] rounded-[2rem] bg-[radial-gradient(circle_at_40%_28%,rgba(37,99,235,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.88),rgba(244,248,255,0.92))] sm:inset-x-8 sm:top-6 sm:h-[86%] sm:rounded-[2.25rem]" />

                <div className="relative mt-10 z-10 flex w-full justify-center px-1 sm:px-0">
                  <div className="relative mx-auto w-fit">
                    <div className="absolute left-0 top-6 z-20 max-w-[160px] rounded-[0.75rem] bg-[var(--primary)] px-2 py-1.5 text-white shadow-[0_14px_24px_rgba(37,99,235,0.2)] sm:left-4 sm:top-20 sm:max-w-none sm:rounded-[0.85rem] sm:px-3 sm:py-2.5 lg:-left-2">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/18 sm:h-7 sm:w-7">
                          <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2.6} />
                        </span>
                        <p className="text-[10px] font-semibold leading-3.5 sm:text-xs sm:leading-5 lg:text-sm">Book rides in just a few taps</p>
                      </div>
                    </div>

                    <div className="absolute bottom-12 right-0 z-20 max-w-[176px] rounded-[0.75rem] bg-[#15346b] px-2 py-1.5 text-white shadow-[0_14px_24px_rgba(21,52,107,0.2)] sm:bottom-30 sm:right-2 sm:max-w-[300px] sm:rounded-[0.85rem] sm:px-3 sm:py-2.5 lg:right-0">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/18 sm:h-7 sm:w-7">
                          <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2.6} />
                        </span>
                        <p className="text-[10px] font-semibold leading-3.5 sm:text-xs sm:leading-5 lg:text-sm">Track rentals, bookings and movement easily</p>
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[2.2rem]">
                      <Image
                        src="/g-rides-mockup.png"
                        alt="GiGOC Rentals app mockup"
                        width={430}
                        height={620}
                        className="h-auto w-[340px] max-w-full object-contain sm:w-[430px] lg:w-[490px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="partner-program" className="bg-[var(--bg-main)] -mt-12 px-4 py-6 md:py-18 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
              -- Partner Program --
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl" style={{ color: 'var(--text-main)' }}>
              How to list your ride and grow with GiGOC Rentals
            </h2>
            <p className="mt-4 text-base leading-7" style={{ color: 'var(--text-soft)' }}>
              We want the platform to support vehicle owners too. Here is the simple roadmap for becoming part of the partner network.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {partnerSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="relative rounded-[1.75rem] border bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.07)]"
                  style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: 'var(--primary-soft)', color: 'var(--primary)' }}>
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <span className="absolute right-6 top-6 text-sm font-semibold" style={{ color: 'var(--primary)' }}>
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold" style={{ color: 'var(--text-main)' }}>
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)' }}
            >
              Talk To The Rentals Team
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative mt-5 px-4 pb-10">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div
            className="flex flex-col items-center justify-center gap-10 rounded-[2rem] px-8 py-6 sm:flex-row sm:px-10 md:gap-16 md:px-14 md:py-8"
            style={{ background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)' }}
          >
            <Image src="/footer-car2.png" alt="GiGOC Rentals CTA car" width={320} height={180} className="w-60 shrink-0 object-contain drop-shadow-xl sm:w-48 md:w-80" />

            <div className="flex max-w-md flex-1 align-center justify-center -mt-5 flex-col gap-3">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/65">
                -- Stay Updated --
              </p>
              <h2 className="text-lg font-semibold leading-tight text-white sm:text-xl md:text-2xl">
                Stay ahead and get our latest updates to make the most out of our platform
              </h2>
              <p className="text-xs leading-relaxed text-white/75 sm:text-sm">
                Subscribe and be the first to discover new cars, exclusive deals, and rental tips from GiGOC Rentals.
              </p>

              <div className="mt-1 flex flex-row items-center rounded-full bg-white pr-1">
                <svg className="ml-3 h-4 w-4 shrink-0 stroke-[var(--text-soft)]" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-transparent px-3 py-2.5 text-sm text-[var(--text-main)] outline-none placeholder:text-[var(--text-soft)]"
                />
                <button className="shrink-0 rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90 sm:px-5 sm:text-sm">
                  Subscribe
                </button>
              </div>

              <p className="text-xs text-white/50">You can unsubscribe at any time. No spam, ever.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
