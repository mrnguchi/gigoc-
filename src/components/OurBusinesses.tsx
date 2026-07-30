'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Keeping the shape small and clear makes it easier to attach real destination pages later.
type Business = {
  title: string;
  summary: string;
  icon: string;
  href: string;
};

// This is the content powering the business cards.
const businesses: Business[] = [
  { title: 'Real Estate', icon: '/real estate.png', href: '#', summary: 'Property development and real estate opportunities focused on quality assets and long-term value.' },
  { title: 'Car Rentals', icon: '/car-rental.png', href: '/gigoc_rentals', summary: 'Reliable and executive vehicle rental solutions tailored for convenience, comfort, and flexibility.' },
  { title: 'GIGOC Biomass', icon: '/renewable-energy.png', href: '/manufacturing', summary: 'Developing biomass wood-pellet production from suitable wood-processing residues in Limbe, Cameroon.' },
  { title: 'Music & Entertainment', icon: '/music and entertainment.png', href: '/music&entertainment', summary: 'Experiences, production, and promotion that turn creative ideas into meaningful audience impact.' },
  { title: 'Modelling', icon: '/modelling.png', href: '#', summary: 'Talent development, visual direction, and brand campaigns designed to build a stronger presence.' },
  { title: 'General Commerce', icon: '/general commerce.png', href: '#', summary: 'Commercial solutions that connect supply, demand, and market opportunities across industries.' },
  { title: 'Tech & Innovation', icon: '/tech and innovation.png', href: '#', summary: 'Technology-driven products, automation, and systems that support modern business transformation.' },
  { title: 'Logistics', icon: '/logistics.png', href: '#', summary: 'Efficient and reliable logistics solutions that connect supply chains, optimize operations, and ensure timely delivery.' },
];

export default function OurBusinesses() {
  const [showAll, setShowAll] = useState(false);

  // We show six first, then reveal the remaining cards when the user asks for more.
  const visibleBusinesses = showAll ? businesses : businesses.slice(0, 6);

  return (
    <section id="our-businesses" className="bg-white -mt-18 md:-mt-15 px-5 py-18 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
            -- Our businesses --
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl" style={{ color: 'var(--text-main)' }}>
            Built across sectors, aligned under one vision
          </h2>
          <p className="mt-4 text-base leading-7" style={{ color: 'var(--text-soft)' }}>
            Explore the businesses that shape GiGOC’s multi-sector footprint, each focused on delivering value with consistency,
            innovation, and long-term ambition.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleBusinesses.map((business, index) => {
            return (
              <Link
                key={business.title}
                href={business.href}
                className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-[0.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#60a5fa]/50 hover:shadow-[0_24px_48px_rgba(15,23,42,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-4 sm:min-h-[360px] sm:p-7"
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#10213c] p-3 transition-colors duration-300 group-hover:bg-[#17335c]"
                      aria-hidden="true"
                    >
                      <Image
                        src={business.icon}
                        alt=""
                        width={32}
                        height={32}
                        className="h-8 w-8 object-contain"
                      />
                    </span>

                    <span className="text-sm font-medium text-[var(--primary)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-[var(--text-main)]">
                    {business.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[var(--text-soft)] sm:text-base">
                    {business.summary}
                  </p>

                  <div className="mt-auto flex items-center justify-end pt-8 text-sm font-medium text-[var(--primary)]">
                    <span className="inline-flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                      Explore
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.9} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {businesses.length > 6 ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="rounded-full px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)' }}
            >
              {showAll ? 'View Less' : 'View More'}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
