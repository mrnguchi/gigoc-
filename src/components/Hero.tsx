'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CompaniesCarousel from '@/components/CompaniesCarousel';

type Division = {
  slug: string;
  title: string;
  description: string;
  icon: 'modelling' | 'realEstate' | 'manufacturing' | 'Car Rentals' | 'music' | 'commerce' | 'tech';
};

const stats = [
  { value: '07', label: 'Core Divisions' },
  { value: '03', label: 'Delivered Projects' },
  { value: '100%', label: 'Growth Potential' },
];

const divisions: Division[] = [
  {
    slug: 'modelling',
    title: 'Modelling',
    description: 'Creative direction, talent development, and visual campaigns that elevate brands.',
    icon: 'modelling',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    description: 'Property development, investment opportunities, and spaces built for lasting value.',
    icon: 'realEstate',
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    description: 'Scalable production solutions focused on quality, consistency, and market readiness.',
    icon: 'manufacturing',
  },
  {
    slug: 'Car Rentals',
    title: 'Car Rentals',
    description: 'Reliable and luxury cars for rent, providing mobility solutions with comfort and style.',
    icon: 'Car Rentals',
  },
  {
    slug: 'music-entertainment',
    title: 'Music & Entertainment',
    description: 'Production, promotion, and audience experiences that turn creativity into impact.',
    icon: 'music',
  },
  {
    slug: 'general-commerce',
    title: 'General Commerce',
    description: 'Trading and commercial solutions that connect products, markets, and people.',
    icon: 'commerce',
  },
  {
    slug: 'tech-innovation',
    title: 'Tech & Innovation',
    description: 'Digital products, automation, and innovation systems that power modern growth.',
    icon: 'tech',
  },
];

function DivisionIcon({ icon }: { icon: Division['icon'] }) {
  const iconClassName = 'h-5 w-5';

  switch (icon) {
    case 'modelling':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClassName}>
          <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
          <path d="M18.5 14l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
        </svg>
      );
    case 'realEstate':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClassName}>
          <path d="m3 11 9-7 9 7" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case 'manufacturing':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClassName}>
          <path d="M3 20V9l6 3V9l6 3V5l6 3v12H3Z" />
          <path d="M7 20v-4M12 20v-3M17 20v-5" />
        </svg>
      );
    case 'Car Rentals':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClassName}>
          <path d="M3 7h11v8H3z" />
          <path d="M14 10h3l3 3v2h-6z" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      );
    case 'music':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClassName}>
          <path d="M9 18V7l10-2v11" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="16" cy="16" r="3" />
        </svg>
      );
    case 'commerce':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClassName}>
          <path d="M6 7h12l-1 12H7L6 7Z" />
          <path d="M9 7a3 3 0 0 1 6 0" />
        </svg>
      );
    case 'tech':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClassName}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M9 9h.01M15 9h.01M9 15h6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const scrollToSlide = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
    const normalizedIndex = (index + divisions.length) % divisions.length;
    const slide = slideRefs.current[normalizedIndex];

    if (!slide) return;

    slide.scrollIntoView({ behavior, block: 'nearest', inline: 'center' });
    setCurrentIndex(normalizedIndex);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      scrollToSlide(0, 'auto');
    });

    return () => window.cancelAnimationFrame(frame);
  }, [scrollToSlide]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      scrollToSlide(currentIndex + 1);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [currentIndex, scrollToSlide]);

  const moveTo = (index: number) => {
    scrollToSlide(index);
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const updateCurrentSlide = () => {
      const viewportCenter = slider.scrollLeft + slider.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      slideRefs.current.forEach((slide, index) => {
        if (!slide) return;

        const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
        const distance = Math.abs(slideCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCurrentIndex((previousIndex) => (previousIndex === closestIndex ? previousIndex : closestIndex));
    };

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        updateCurrentSlide();
        ticking = false;
      });
    };

    updateCurrentSlide();
    slider.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateCurrentSlide);

    return () => {
      slider.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateCurrentSlide);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0f172a 0%, #101827 100%)' }}
    >
      <div className="absolute inset-0">
        <Image
          src="/hero-bg2.jpg"
          alt="Gebah Investment Group hero background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.22),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.76)_46%,rgba(15,23,42,0.64)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-8 pt-28 sm:px-6 lg:px-8 lg:pb-10 lg:pt-32">
        <div className="grid flex-1 items-center gap-14 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-12">
          <div className="max-w-2xl">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.22em] uppercase text-white/80"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderColor: 'rgba(255, 255, 255, 0.12)',
              }}
            >
              GiGOC
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Gebah Investment Group Of Companies
            </h1>

            <div className="mt-6 space-y-3 text-base leading-7 text-white/70 sm:text-lg">
              <p>From creativity to commerce, we bring ideas to life. Uniting industries under one vision of growth and excellence. Built to innovate, designed to lead.</p>
              {/* <p></p> */}
            </div>

            <div
              className="mt-8 grid gap-px overflow-hidden rounded-[1.75rem] border sm:grid-cols-3"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.12)',
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="px-5 py-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)' }}>
                  <p className="text-2xl font-semibold text-white sm:text-3xl">{stat.value}</p>
                  <p className="mt-2 text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>

            <div id="hero-actions" className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact-section"
                className="rounded-full px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
                  boxShadow: '0 18px 35px rgba(37, 99, 235, 0.28)',
                }}
              >
                Start a Project
              </Link>
              <button
                type="button"
                className="rounded-full border px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                style={{ borderColor: 'rgba(255, 255, 255, 0.18)' }}
              >
                View Projects
              </button>
            </div>
          </div>

          <div
            id="hero-divisions"
            className="relative min-h-[430px] lg:min-h-[540px]"
          >
            <div
              className="absolute left-1/2 top-3 z-30 w-fit -translate-x-1/2 rounded-full border px-4 py-2 text-center text-xs font-semibold tracking-[0.24em] text-white/80 uppercase sm:right-0 sm:left-auto sm:translate-x-0"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderColor: 'rgba(255, 255, 255, 0.12)',
              }}
            >
              Our Division
            </div>

            <div className="mx-auto w-full max-w-[22rem] pt-20 sm:max-w-[27rem] lg:ml-auto lg:mr-0 lg:max-w-[28rem] lg:pt-24">
              <div
                ref={sliderRef}
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
                aria-label="Company divisions slider"
              >
                <div className="w-[calc(50%-125px)] shrink-0 sm:w-[calc(50%-160px)]" aria-hidden="true" />

                {divisions.map((division, index) => {
                  const isActive = index === currentIndex;

                  return (
                    <button
                      key={division.slug}
                      ref={(element) => {
                        slideRefs.current[index] = element;
                      }}
                      type="button"
                      onClick={() => moveTo(index)}
                      className="w-[250px] shrink-0 snap-center text-left sm:w-[320px]"
                      aria-pressed={isActive}
                    >
                      <article
                        className={`h-full min-h-[315px] rounded-[2rem] border p-6 transition duration-500 sm:min-h-[340px] sm:p-7 ${
                          isActive ? 'scale-100 opacity-100' : 'scale-[0.96] opacity-70'
                        }`}
                        style={{
                          background: isActive
                            ? 'linear-gradient(180deg, rgba(30, 41, 59, 0.94) 0%, rgba(15, 23, 42, 0.99) 100%)'
                            : 'linear-gradient(180deg, rgba(30, 41, 59, 0.78) 0%, rgba(15, 23, 42, 0.9) 100%)',
                          borderColor: isActive ? 'rgba(96, 165, 250, 0.42)' : 'rgba(255, 255, 255, 0.1)',
                          boxShadow: isActive ? '0 30px 60px rgba(15, 23, 42, 0.45)' : '0 18px 30px rgba(15, 23, 42, 0.28)',
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.95) 0%, rgba(37,99,235,0.95) 100%)' }}
                          >
                            <DivisionIcon icon={division.icon} />
                          </div>
                          <span className="text-xs font-semibold tracking-[0.22em] text-white/60 uppercase">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <h3 className="mt-8 text-2xl font-semibold text-white">{division.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-white/70">{division.description}</p>

                        <div className="mt-8 flex items-center justify-between text-sm font-medium text-white/90">
                          <span>Click to Open</span>
                          <span>↗</span>
                        </div>
                      </article>
                    </button>
                  );
                })}

                <div className="w-[calc(50%-125px)] shrink-0 sm:w-[calc(50%-160px)]" aria-hidden="true" />
              </div>

              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                {divisions.map((division, index) => (
                  <button
                    key={division.slug}
                    type="button"
                    onClick={() => moveTo(index)}
                    className="h-2.5 rounded-full transition-all"
                    style={{
                      width: index === currentIndex ? 30 : 10,
                      backgroundColor: index === currentIndex ? '#60a5fa' : 'rgba(255, 255, 255, 0.24)',
                    }}
                    aria-label={`Show ${division.title}`}
                  />
                ))}
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => moveTo(currentIndex - 1)}
                    className="flex h-12 w-12 items-center justify-center rounded-full text-white transition hover:-translate-y-0.5"
                    style={{
                      background: 'linear-gradient(135deg, rgba(124,58,237,0.95) 0%, rgba(37,99,235,0.95) 100%)',
                      boxShadow: '0 16px 28px rgba(37, 99, 235, 0.22)',
                    }}
                    aria-label="Previous division"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => moveTo(currentIndex + 1)}
                    className="flex h-12 w-12 items-center justify-center rounded-full text-white transition hover:-translate-y-0.5"
                    style={{
                      background: 'linear-gradient(135deg, rgba(124,58,237,0.95) 0%, rgba(37,99,235,0.95) 100%)',
                      boxShadow: '0 16px 28px rgba(37, 99, 235, 0.22)',
                    }}
                    aria-label="Next division"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-2 pt-4 sm:pt-6">
          <CompaniesCarousel />
        </div>
      </div>
    </section>
  );
}
