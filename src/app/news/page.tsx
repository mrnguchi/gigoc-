'use client';

import { useState, type CSSProperties } from 'react';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { newsSectionData } from '@/data/news';

type NewsCardItem = {
  id: string;
  image: string;
  alt: string;
  label: string;
  title: string;
  excerpt: string;
  href: string;
  date?: string;
  location?: string;
};

const excerptClampStyle: CSSProperties = {
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

const primaryNewsImage = newsSectionData.slides[0]?.image ?? newsSectionData.imageCard.image;
const newsDate = newsSectionData.article.details.find((detail) => detail.icon === 'calendar')?.info;
const newsLocation = newsSectionData.article.details.find((detail) => detail.icon === 'location')?.info;

const heroHighlights = [
  { value: 'News', label: 'Across the Group' },
  { value: 'Events', label: 'Highlights & Coverage' },
  { value: 'Updates', label: 'Announcements & Media' },
];

const newsCards: NewsCardItem[] = [
  {
    id: 'featured-asake-live',
    image: primaryNewsImage,
    alt: newsSectionData.article.title,
    label: newsSectionData.article.label,
    title: newsSectionData.article.title,
    excerpt: newsSectionData.article.excerpt,
    date: newsDate,
    location: newsLocation,
    href: newsSectionData.article.href,
  },
  {
    id: 'coming-soon-1',
    image: '/gigoc-news.png',
    alt: newsSectionData.slides[1]?.alt ?? 'More GiGOC stories coming soon',
    label: 'Coming Soon',
    title: 'More updates from across GiGOC are on the way',
    excerpt:
      'We are preparing more company stories, event recaps, and milestone announcements so this newsroom keeps growing with meaningful updates.',
    location: 'Across GiGOC',
    href: '#',
  },
  {
    id: 'coming-soon-2',
    image: '/gigoc-news.png',
    alt: newsSectionData.slides[2]?.alt ?? 'Fresh GiGOC newsroom stories coming soon',
    label: 'Coming Soon',
    title: 'Fresh stories will be published here very soon',
    excerpt:
      'As new partnerships, launches, and public activities happen, they will appear here in the same clean card layout for visitors to explore.',
    date: 'Publishing soon',
    href: '#',
  },
];

function NewsCard({ item }: { item: NewsCardItem }) {
  return (
    <article
      className="group overflow-hidden rounded-[1.5rem] border bg-white shadow-[0_18px_40px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(15,23,42,0.11)]"
      style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="px-5 py-5">
        <span
          className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase"
          style={{ backgroundColor: 'var(--primary-soft)', color: 'var(--primary)' }}
        >
          {item.label}
        </span>

        {item.date || item.location ? (
          <div className="mt-4 flex flex-wrap gap-4 text-xs" style={{ color: 'var(--text-soft)' }}>
            {item.date ? (
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" />
                {item.date}
              </span>
            ) : null}
            {item.location ? (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {item.location}
              </span>
            ) : null}
          </div>
        ) : null}

        <h3 className="mt-4 text-xl font-semibold leading-snug" style={{ color: 'var(--text-main)' }}>
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-7" style={{ ...excerptClampStyle, color: 'var(--text-soft)' }}>
          {item.excerpt}
        </p>

        <Link
          href={item.href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
          style={{ color: 'var(--primary)' }}
        >
          Read More
          <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
        </Link>
      </div>
    </article>
  );
}

export default function NewsPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  const visibleCards = newsCards.slice(0, visibleCount);
  const hasMoreCards = visibleCount < newsCards.length;

  return (
    <main className="min-h-screen bg-white" style={{ overflow: 'hidden' }}>
      <Navbar />

      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0f172a 0%, #101827 100%)' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/hero-00.png"
            alt="GiGOC news page hero background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl flex-col px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <div className="grid flex-1 items-center gap-14 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-12">
            <div className="max-w-2xl">
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.22em] uppercase text-white/80"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderColor: 'rgba(255, 255, 255, 0.12)',
                }}
              >
                GiGOC News
              </div>

              {/* <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Quiet updates, stories, and moments from across the group.
              </h1> */}

              <div className="mt-6 space-y-3 text-base leading-7 text-white/70 sm:text-lg">
                <p>
                  This page brings together featured events, company announcements, and curated media highlights in one clean newsroom experience.
                </p>
              </div>

              <div
                className="mt-8 grid gap-px overflow-hidden rounded-[1.75rem] border sm:grid-cols-3"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.12)',
                }}
              >
                {heroHighlights.map((item) => (
                  <div key={item.label} className="px-5 py-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)' }}>
                    <p className="text-2xl font-semibold text-white sm:text-3xl">{item.value}</p>
                    <p className="mt-2 text-sm text-white/70">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#news-grid"
                  className="rounded-full px-7 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
                    boxShadow: '0 18px 35px rgba(37, 99, 235, 0.28)',
                  }}
                >
                  Browse News
                </Link>
                <Link
                  href="/"
                  className="rounded-full border px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                  style={{ borderColor: 'rgba(255, 255, 255, 0.18)' }}
                >
                  Back Home
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[31rem] lg:ml-auto lg:mr-0">
              <div
                className="rounded-[2rem] border p-6 text-white shadow-[0_30px_60px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:p-7"
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.48)',
                  borderColor: 'rgba(255, 255, 255, 0.12)',
                }}
              >
                <p className="text-sm font-semibold tracking-[0.22em] uppercase text-white/65">Currently Featured</p>
                <h2 className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl">{newsSectionData.article.title}</h2>
                <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/75">
                  {newsDate ? (
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      {newsDate}
                    </span>
                  ) : null}
                  {newsLocation ? (
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {newsLocation}
                    </span>
                  ) : null}
                </div>
                <p className="mt-5 text-sm leading-7 text-white/75" style={excerptClampStyle}>
                  {newsSectionData.article.excerpt}
                </p>
                <Link
                  href="#news-grid"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1e4a95] transition hover:-translate-y-0.5"
                >
                  View Stories
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="news-grid" className="bg-white px-5 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
              -- News Room --
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl" style={{ color: 'var(--text-main)' }}>
              Latest News & Updates
            </h2>
            <p className="mt-4 text-base leading-7" style={{ color: 'var(--text-soft)' }}>
              A growing collection of event highlights, official updates, and news moments from across GiGOC.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleCards.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>

          {hasMoreCards ? (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((currentCount) => currentCount + 6)}
                className="rounded-full px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)' }}
              >
                View More
              </button>
            </div>
          ) : null}
        </div>
      </section>

      <Footer />
    </main>
  );
}
