'use client';

import { useState, type CSSProperties } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export type NewsSlide = {
  id: string;
  image: string;
  alt: string;
};

export type NewsArticle = {
  label: string;
  title: string;
  excerpt: string;
  details: Array<{
    icon: 'calendar' | 'location' | 'time';
    info: string;
  }>;
  href: string;
};

export type NewsImageCard = {
  image: string;
  alt: string;
};

export type NewsVideoCard = {
  title: string;
  summary: string;
  youtubeUrl: string;
};

export type NewsSectionData = {
  sectionLabel: string;
  sectionTitle: string;
  sectionDescription: string;
  slides: NewsSlide[];
  article: NewsArticle;
  imageCard: NewsImageCard;
  videoCard: NewsVideoCard;
};

const articleClampStyle: CSSProperties = {
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

function getYouTubeEmbedUrl(youtubeUrl: string) {
  try {
    const parsedUrl = new URL(youtubeUrl);

    if (parsedUrl.hostname === 'youtu.be') {
      const videoId = parsedUrl.pathname.replace('/', '');
      return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : null;
    }

    const videoIdFromQuery = parsedUrl.searchParams.get('v');
    if (videoIdFromQuery) {
      return `https://www.youtube-nocookie.com/embed/${videoIdFromQuery}`;
    }

    const embedMatch = parsedUrl.pathname.match(/\/embed\/([^/]+)/);
    if (embedMatch?.[1]) {
      return `https://www.youtube-nocookie.com/embed/${embedMatch[1]}`;
    }
  } catch {
    return null;
  }

  return null;
}

type NewsSectionProps = {
  data: NewsSectionData;
};

const articleDetailIcons = {
  calendar: CalendarDays,
  location: MapPin,
  time: Clock3,
};

export default function NewsSection({ data }: NewsSectionProps) {
  // I keep the slideshow manual so visitors can stay on the story they care about.
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // I keep the controls simple so I can move through each news image without autoplay.
  const showPreviousSlide = () => {
    setActiveSlideIndex((currentIndex) => (currentIndex === 0 ? data.slides.length - 1 : currentIndex - 1));
  };

  const showNextSlide = () => {
    setActiveSlideIndex((currentIndex) => (currentIndex === data.slides.length - 1 ? 0 : currentIndex + 1));
  };

  const activeSlide = data.slides[activeSlideIndex] ?? data.slides[0];
  const videoEmbedUrl = getYouTubeEmbedUrl(data.videoCard.youtubeUrl);

  if (!activeSlide) {
    return null;
  }

  return (
    <section id="news-room" className="bg-white px-5 py-16 sm:px-6 lg:px-10 lg:py-18">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
            -- News Room --
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl" style={{ color: 'var(--text-main)' }}>
            The latest stories, updates, and media from GiGOC
          </h2>
          <p className="mt-4 text-base leading-7" style={{ color: 'var(--text-soft)' }}>
            A flexible media block for featured stories, news imagery, and video content from across the group.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr] xl:grid-cols-[0.66fr_1.34fr]">
            {/* I keep the slideshow visual and clean, with manual controls only. */}
            <article
              className="overflow-hidden rounded-[0.75rem] border bg-white shadow-[0_12px_28px_rgba(15,23,42,0.07)]"
              style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}
            >
              <div className="relative min-h-[260px] sm:min-h-[310px] lg:min-h-[390px] xl:min-h-[430px]">
                <Image src={activeSlide.image} alt={activeSlide.alt} fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 34vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-slate-900/10 to-transparent" />

                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 sm:inset-x-4 sm:bottom-4">
                  <div className="flex items-center gap-2 rounded-[0.75rem] bg-slate-950/45 px-3 py-2 backdrop-blur-sm">
                    {data.slides.map((slide, index) => (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => setActiveSlideIndex(index)}
                        className="h-2.5 rounded-full transition-all duration-300"
                        style={{
                          width: index === activeSlideIndex ? 28 : 10,
                          backgroundColor: index === activeSlideIndex ? '#ffffff' : 'rgba(255, 255, 255, 0.45)',
                        }}
                        aria-label={`Show news slide ${index + 1}`}
                        aria-pressed={index === activeSlideIndex}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={showPreviousSlide}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/88 text-slate-900 shadow-lg transition hover:bg-white"
                      aria-label="Show previous news slide"
                    >
                      <ArrowLeft className="h-4 w-4" strokeWidth={2.4} />
                    </button>
                    <button
                      type="button"
                      onClick={showNextSlide}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/88 text-slate-900 shadow-lg transition hover:bg-white"
                      aria-label="Show next news slide"
                    >
                      <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* I keep the article copy tight so the card stays balanced even when content gets longer later. */}
            <article
              className="flex h-full flex-col rounded-[0.75rem] border bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.07)] sm:p-6"
              style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}
            >
              <p className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
                {data.article.label}
              </p>
              <h3 className="mt-2 text-xl sm:mt-3 font-semibold leading-tight sm:text-[2.65rem]" style={{ color: 'var(--text-main)' }}>
                {data.article.title}
              </h3>
              <p className="mt-3 md:mt-2 text-sm leading-6 sm:text-[15px]" style={{ ...articleClampStyle, color: 'var(--text-soft)' }}>
                {data.article.excerpt}
              </p>

              {/* I keep this event info stacked so the important details are easy to scan. */}
              <div className="mt-4 space-y-2.5 rounded-[0.75rem] border bg-slate-50/80 p-3 sm:p-4" style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}>
                {data.article.details.map((detail) => {
                  const DetailIcon = articleDetailIcons[detail.icon];

                  return (
                    <div key={`${detail.icon}-${detail.info}`} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm" style={{ color: 'var(--primary)' }}>
                        <DetailIcon className="h-4 w-4" strokeWidth={2.2} />
                      </span>
                      <p className="text-sm leading-6 sm:text-[15px]" style={{ color: 'var(--text-soft)' }}>
                        {detail.info}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto pt-6">
                <Link
                  href={data.article.href}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(37,99,235,0.2)] transition hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)' }}
                >
                  Read more
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </Link>
              </div>
            </article>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <article
              className="flex flex-col rounded-[0.75rem] border bg-white  shadow-[0_12px_28px_rgba(15,23,42,0.07)] "
              style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[0.75rem] bg-slate-950 lg:aspect-[16/8.6]">
                {videoEmbedUrl ? (
                  <iframe
                    src={videoEmbedUrl}
                    title={data.videoCard.title}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-6 text-center text-sm text-white/70 sm:text-base">
                    Add a valid YouTube link to display the video here.
                  </div>
                )}
              </div>

                
            </article>

            <article
              className="overflow-hidden rounded-[0.75rem] border bg-white shadow-[0_12px_28px_rgba(15,23,42,0.07)]"
              style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}
            >
              {/* I lock in a minimum height here so the news image stays visible on smaller screens. */}
              <div className="relative min-h-[270px] overflow-hidden rounded-[0.75rem] sm:min-h-[220px] lg:h-full">
                <Image src={data.imageCard.image} alt={data.imageCard.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 38vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}