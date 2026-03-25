import { ArrowLeft, CalendarDays, Clock3, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { getNewsArticleBySlug, newsArticles } from '@/data/news';

type NewsDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const articleDetailIcons = {
  calendar: CalendarDays,
  location: MapPin,
  time: Clock3,
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

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const gallery = article.gallery.length > 0 ? article.gallery : [{ id: 'fallback', ...article.featuredImage }];
  const [primaryImage, ...secondaryImages] = gallery;
  const videoEmbedUrl = article.video?.youtubeUrl ? getYouTubeEmbedUrl(article.video.youtubeUrl) : null;

  return (
    <main className="min-h-screen bg-white" style={{ overflow: 'hidden' }}>
      <Navbar />

      <section
        className="relative overflow-hidden px-5 pb-24 pt-28 sm:px-6 lg:px-10 lg:pb-28 lg:pt-32"
        style={{ background: 'linear-gradient(180deg, #0f172a 0%, #101827 100%)' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/hero-00.png"
            alt="GiGOC news detail background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2.2} />
              Back to News
            </Link>

            <div className="mt-6">
              <span className="inline-flex rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-semibold uppercase text-white/85 backdrop-blur-sm">
                {article.label}
              </span>

              <h1 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {article.title}
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
                {article.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/75">
                {article.details.map((detail) => {
                  const DetailIcon = articleDetailIcons[detail.icon];

                  return (
                    <span
                      key={`${detail.icon}-${detail.info}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 backdrop-blur-sm"
                    >
                      <DetailIcon className="h-4 w-4" strokeWidth={2.1} />
                      {detail.info}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-14 bg-[var(--bg-main)] px-5 pb-14 pt-0 sm:px-6 lg:px-10 lg:pb-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border bg-white px-5 py-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:px-6 sm:py-6 lg:px-8 lg:py-8" style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}>
          <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:min-h-[420px] lg:min-h-[520px]">
              <Image
                src={primaryImage.image}
                alt={primaryImage.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {secondaryImages.map((image) => (
                <div key={image.id} className="relative min-h-[190px] overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:min-h-[230px] lg:min-h-[248px]">
                  <Image src={image.image} alt={image.alt} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 28vw" />
                </div>
              ))}
            </div>
          </div>

          {videoEmbedUrl ? (
            <section className="mt-10 rounded-[1.75rem] border bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:p-6" style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}>
              <div className="mb-5">
                <p className="text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
                  -- Media --
                </p>
                <h2 className="mt-2 text-2xl font-semibold" style={{ color: 'var(--text-main)' }}>
                  {article.video?.title}
                </h2>
                {article.video?.summary ? (
                  <p className="mt-3 max-w-3xl text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                    {article.video.summary}
                  </p>
                ) : null}
              </div>

              <div className="relative aspect-[16/9] overflow-hidden rounded-[1.25rem] bg-slate-950">
                <iframe
                  src={videoEmbedUrl}
                  title={article.video?.title ?? article.title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </section>
          ) : null}

          <article className="mt-10 rounded-[1.75rem] border bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10" style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}>
            <p className="text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
              -- Story Content --
            </p>

            <div className="mt-6 space-y-8">
              {article.content.map((section) => (
                <div key={section.heading ?? section.paragraphs[0]}>
                  {section.heading ? (
                    <h2 className="text-2xl font-semibold" style={{ color: 'var(--text-main)' }}>
                      {section.heading}
                    </h2>
                  ) : null}

                  <div className="mt-3 space-y-4 text-base leading-8" style={{ color: 'var(--text-soft)' }}>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}