'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Division = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  href: string;
};

const stats = [
  { value: '08', label: 'Core Divisions' },
  { value: '03', label: 'Delivered Projects' },
  { value: '100%', label: 'Growth Potential' },
];

const divisions: Division[] = [
  {
    slug: 'real-estate',
    title: 'Real Estate',
    description: 'Property development, investment opportunities, and spaces built for lasting value.',
    icon: '/real estate.png',
    href: '/#hero-divisions',
  },
  {
    slug: 'GiGOC Rentals',
    title: 'GiGOC Rentals',
    description: 'Reliable and luxury cars for rent, providing mobility solutions with comfort and style.',
    icon: '/car-rental.png',
    href: '/gigoc_rentals',
  },
  {
    slug: 'gigoc-biomass',
    title: 'GIGOC Biomass',
    description:
      'Developing biomass wood-pellet production from suitable wood-processing residues in Limbe, Cameroon.',
    icon: '/renewable-energy.png',
    href: '/manufacturing',
  },
  {
    slug: 'music-entertainment',
    title: 'Music & Entertainment',
    description: 'Production, promotion, and audience experiences that turn creativity into impact.',
    icon: '/music and entertainment.png',
    href: '/music&entertainment',
  },
  {
    slug: 'modelling',
    title: 'Modelling',
    description: 'Creative direction, talent development, and visual campaigns that elevate brands.',
    icon: '/modelling.png',
    href: '/#hero-divisions',
  },
  
  
  
  {
    slug: 'general-commerce',
    title: 'General Commerce',
    description: 'Trading and commercial solutions that connect products, markets, and people.',
    icon: '/general commerce.png',
    href: '/#hero-divisions',
  },
  {
    slug: 'tech-innovation',
    title: 'Tech & Innovation',
    description: 'Digital products, automation, and innovation systems that power modern growth.',
    icon: '/tech and innovation.png',
    href: '/#hero-divisions',
  },
  {
    slug: 'logistics',
    title: 'Logistics',
    description: 'Efficient and reliable logistics solutions that connect supply chains, optimize operations, and ensure timely delivery.',
    icon: '/logistics.png',
    href: '/#hero-divisions',
  },
];

export default function Hero() {
  const router = useRouter();
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

  // useEffect(() => {
  //   const interval = window.setInterval(() => {
  //     scrollToSlide(currentIndex + 1);
  //   }, 5000);

  //   return () => window.clearInterval(interval);
  // }, [currentIndex, scrollToSlide]);

  const moveTo = (index: number) => {
    scrollToSlide(index);
  };

  const handleDivisionAction = (division: Division, index: number) => {
    if (index !== currentIndex) {
      moveTo(index);
      return;
    }

    if (division.href && division.href !== '#') {
      router.push(division.href);
    }
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
          src="/hero-00.png"
          alt="Gebah Investment Group hero background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.22),transparent_30%)]" /> */}
        <div className="absolute inset-0 bg-black/50" />
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
                className="rounded-full text-center px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)',
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
              Our Businesses
            </div>

            <div className="mx-auto w-full max-w-[22rem] pt-20 sm:max-w-[30rem] lg:ml-auto lg:mr-0 lg:max-w-[32rem] lg:pt-24">
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
                      onClick={() => handleDivisionAction(division, index)}
                      className="w-[250px] shrink-0 snap-center text-left sm:w-[320px]"
                      aria-pressed={isActive}
                    >
                      <article
                        className={`h-full min-h-[315px] rounded-[1.5rem] border bg-white p-6 transition duration-500 sm:min-h-[340px] sm:p-7 ${
                          isActive ? 'scale-100 opacity-100' : 'scale-[0.96] opacity-75'
                        }`}
                        style={{
                          borderColor: isActive ? 'rgba(30, 74, 149, 0.5)' : 'rgba(226, 232, 240, 0.9)',
                          boxShadow: isActive
                            ? '0 28px 55px rgba(15, 23, 42, 0.24)'
                            : '0 16px 30px rgba(15, 23, 42, 0.14)',
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#10213c] p-3">
                            <Image
                              src={division.icon}
                              alt=""
                              width={32}
                              height={32}
                              aria-hidden="true"
                              className="h-8 w-8 object-contain"
                            />
                          </div>
                          <span className="text-xs font-semibold text-[#71819a]">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <h3 className="mt-8 text-2xl font-semibold text-[var(--text-main)]">
                          {division.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-[var(--text-soft)]">
                          {division.description}
                        </p>

                        <div className="mt-8 flex items-center justify-between text-sm font-medium text-[var(--primary)]">
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

        <div className="pb-2 pt-4 sm:pt-6" />
      </div>
    </section>
  );
}
