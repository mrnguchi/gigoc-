'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

type ProjectStatus = 'Completed' | 'Ongoing';

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  status: ProjectStatus;
  href: string;
};

const projects: Project[] = [
  {
    title: 'Signature Residences Development',
    category: 'Real Estate',
    description: 'A premium mixed-use property project focused on modern living, functional design and lasting investment value.',
    image: '/gigoc-house.jpg',
    status: 'Completed',
    href: '/contact',
  },
  {
    title: 'Asake in Cameroon',
    category: 'Entertainment & Talent',
    description: 'A live music project bringing a leading African performance experience to audiences in Cameroon.',
    image: '/asake.jpg',
    status: 'Ongoing',
    href: '/music&entertainment',
  },
  {
    title: 'GiGOC Rentals',
    category: 'Mobility',
    description: 'A growing vehicle rental service built around reliable cars, straightforward access and comfortable mobility.',
    image: '/gigoc-rentals.png',
    status: 'Ongoing',
    href: '/gigoc_rentals',
  },
  {
    title: 'GiGOC Biomass',
    category: 'Manufacturing',
    description: 'A wood-pellet production initiative using suitable wood-processing residues in Limbe, Cameroon.',
    image: '/gigoc-biomass.png',
    status: 'Ongoing',
    href: '/manufacturing',
  },
];

export default function ProjectsShowcase() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [scrollState, setScrollState] = useState({ canGoBack: false, canGoForward: true });

  const updateScrollState = useCallback(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    setScrollState({
      canGoBack: slider.scrollLeft > 8,
      canGoForward: slider.scrollLeft < maxScrollLeft - 8,
    });
  }, []);

  const moveProjects = (direction: -1 | 1) => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.scrollBy({
      left: direction * Math.min(slider.clientWidth * 0.82, 430),
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    updateScrollState();
    slider.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      slider.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  return (
    <section id="our-projects" className="scroll-mt-28 bg-[#f5f7fa] px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-8 border-b border-slate-300 pb-7">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-sm font-semibold text-[#2166d1]">
              <span>Our Projects</span>
              <span className="h-px w-16 bg-[#2166d1]/45" aria-hidden="true" />
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#17365f] sm:text-4xl lg:text-5xl">
              Selected work across the group
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              A view of the ventures GiGOC is building, operating and bringing to market.
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => moveProjects(-1)}
              disabled={!scrollState.canGoBack}
              className="flex h-11 w-11 items-center justify-center border border-slate-300 bg-white text-[#17365f] transition hover:border-[#2166d1] hover:text-[#2166d1] disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Show previous projects"
            >
              <ArrowLeft className="h-5 w-5" strokeWidth={1.7} />
            </button>
            <button
              type="button"
              onClick={() => moveProjects(1)}
              disabled={!scrollState.canGoForward}
              className="flex h-11 w-11 items-center justify-center border border-slate-300 bg-white text-[#17365f] transition hover:border-[#2166d1] hover:text-[#2166d1] disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Show next projects"
            >
              <ArrowRight className="h-5 w-5" strokeWidth={1.7} />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="mt-9 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 [scrollbar-width:none] sm:gap-6 [&::-webkit-scrollbar]:hidden"
          aria-label="Featured GiGOC projects"
        >
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block w-[84vw] max-w-[410px] shrink-0 snap-start overflow-hidden rounded-lg border border-slate-200 bg-white transition duration-300 hover:border-slate-400 hover:shadow-[0_16px_34px_rgba(15,23,42,0.09)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2166d1] focus-visible:ring-offset-4 sm:w-[390px] lg:w-[400px] xl:w-[410px]"
            >
              <article className="flex h-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    sizes="(max-width: 640px) 84vw, 410px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 border border-white/30 bg-slate-950/58 px-2.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
                  <div className="flex items-center justify-between gap-4 text-xs font-medium">
                    <span className="text-[#2166d1]">{project.category}</span>
                    <span className="inline-flex items-center gap-2 text-slate-500">
                      <span
                        className={`h-1.5 w-1.5 ${project.status === 'Completed' ? 'bg-emerald-600' : 'bg-blue-600'}`}
                        aria-hidden="true"
                      />
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold leading-snug text-[#17365f] sm:text-2xl">
                    {project.title}
                  </h3>
                  <span className="mt-3 h-px w-10 bg-[#2166d1] transition-all duration-300 group-hover:w-20" aria-hidden="true" />
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-6 text-sm font-semibold text-[#17365f]">
                    <span>View project</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <p className="mt-1 text-xs text-slate-500 sm:hidden">Swipe to explore more projects</p>
      </div>
    </section>
  );
}
