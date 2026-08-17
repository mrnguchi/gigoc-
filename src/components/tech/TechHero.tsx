'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Brush,
  Code2,
  Megaphone,
  Search,
  Smartphone,
} from 'lucide-react';

const techServices = [
  { title: 'Web Development', description: 'Websites and digital platforms', icon: Code2 },
  { title: 'Graphic Design', description: 'Brands and campaign assets', icon: Brush },
  { title: 'Mobile Development', description: 'iOS and Android products', icon: Smartphone },
  { title: 'SEO', description: 'Organic search visibility', icon: Search },
  { title: 'Meta Ads', description: 'Facebook and Instagram campaigns', icon: Megaphone },
  { title: 'Google Ads', description: 'Search and display campaigns', icon: ArrowUpRight },
  { title: 'AI Automation', description: 'Connected business workflows', icon: Bot },
];

export default function TechHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const scrollToService = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
    const slider = sliderRef.current;
    const normalizedIndex = (index + techServices.length) % techServices.length;
    const slide = slideRefs.current[normalizedIndex];

    if (!slider || !slide) return;

    slider.scrollTo({
      left: slide.offsetLeft - (slider.clientWidth - slide.clientWidth) / 2,
      behavior,
    });
    setCurrentIndex(normalizedIndex);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => scrollToService(0, 'auto'));
    return () => window.cancelAnimationFrame(frame);
  }, [scrollToService]);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let frame = 0;
    const updateCurrentService = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;
        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        slideRefs.current.forEach((slide, index) => {
          if (!slide) return;

          const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
          const distance = Math.abs(slideCenter - sliderCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        setCurrentIndex(closestIndex);
      });
    };

    slider.addEventListener('scroll', updateCurrentService, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      slider.removeEventListener('scroll', updateCurrentService);
    };
  }, []);

  return (
    <section className="relative bg-white">
      <div className="relative min-h-[680px] bg-[#07172b] sm:min-h-[720px] lg:min-h-[760px]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/tech&innovation.jpg"
            alt="Software development screens in a technology workspace"
            fill
            priority
            className="scale-[1.015] object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,13,27,0.62)_0%,rgba(5,23,45,0.72)_58%,rgba(4,18,35,0.92)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,17,34,0.42),transparent_48%,rgba(4,17,34,0.3))]" />
          <div className="absolute inset-x-0 top-0 h-px bg-white/15" />
        </div>

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center justify-center px-5 pb-40 pt-32 text-center sm:min-h-[720px] sm:px-6 sm:pb-44 lg:min-h-[760px] lg:px-10">
          <div className="max-w-4xl">
            <div className="mx-auto mb-6 h-px w-12 bg-blue-400" aria-hidden="true" />
            <p className="text-sm font-medium text-white/78">GiGOC Tech & Innovation</p>

            <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-7xl">
              Digital products built around real business needs.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
              We develop our own digital products and help businesses design, build and grow the technology they use every day.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                href="#products"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#2166d1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(10,55,130,0.28)] transition duration-300 hover:bg-[#2b73df]"
              >
                Explore our products
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="#services"
                className="group inline-flex items-center gap-3 border-b border-white/45 pb-1 text-sm font-medium text-white transition hover:border-white"
              >
                View tech services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 translate-y-1/2 px-4 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-7xl items-stretch overflow-hidden border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
            <button
              type="button"
              onClick={() => scrollToService(currentIndex - 1)}
              className="hidden w-12 shrink-0 items-center justify-center border-r border-slate-200 text-[#17365f] transition hover:bg-slate-50 md:flex"
              aria-label="Show previous technology service"
            >
              <ArrowLeft className="h-5 w-5" strokeWidth={1.7} />
            </button>

            <div className="min-w-0 flex-1 overflow-hidden">
              <div
                ref={sliderRef}
                className="flex snap-x snap-mandatory items-center overflow-x-auto px-[calc(50%-6rem)] py-2 [scrollbar-width:none] lg:px-0 [&::-webkit-scrollbar]:hidden"
                aria-label="GiGOC technology services"
              >
                {techServices.map((service, index) => {
                  const Icon = service.icon;
                  const isActive = index === currentIndex;

                  return (
                    <Link
                      key={service.title}
                      ref={(element) => {
                        slideRefs.current[index] = element;
                      }}
                      href="#services"
                      onFocus={() => scrollToService(index)}
                      className={`group flex h-28 w-48 shrink-0 snap-center flex-col items-center justify-center border-r border-slate-200 px-4 text-center transition-all duration-300 first:border-l sm:w-52 ${
                        isActive
                          ? 'h-36 bg-[#2166d1] text-white shadow-[0_12px_28px_rgba(33,102,209,0.28)]'
                          : 'bg-white text-[#17365f] hover:bg-slate-50'
                      }`}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      <Icon className={`h-7 w-7 transition-transform duration-300 group-hover:-translate-y-0.5 ${isActive ? 'text-white' : 'text-[#2166d1]'}`} strokeWidth={1.7} />
                      <span className="mt-3 text-sm font-semibold leading-tight">{service.title}</span>
                      <span className={`mt-1 text-[11px] leading-4 ${isActive ? 'text-white/72' : 'text-slate-500'}`}>
                        {service.description}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={() => scrollToService(currentIndex + 1)}
              className="hidden w-12 shrink-0 items-center justify-center border-l border-slate-200 text-[#17365f] transition hover:bg-slate-50 md:flex"
              aria-label="Show next technology service"
            >
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </button>
          </div>
        </div>
      </div>

      <div className="h-24 bg-white sm:h-28" aria-hidden="true" />
    </section>
  );
}
