import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, MapPin } from 'lucide-react';
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

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | GIGOC Newsroom`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
    },
  };
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
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar />

      <section className="relative min-h-[720px] overflow-hidden bg-[#07172b] px-5 pb-20 pt-32 sm:min-h-[760px] sm:px-6 lg:px-10 lg:pb-24 lg:pt-36">
        <Image
          src={article.featuredImage.image}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,15,30,0.96)_0%,rgba(4,19,38,0.84)_54%,rgba(4,18,35,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,13,27,0.34)_0%,rgba(3,14,29,0.2)_55%,rgba(3,15,30,0.74)_100%)]" />

        <div className="relative mx-auto flex min-h-[568px] max-w-7xl items-center">
          <div className="max-w-5xl">
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 border-b border-white/35 pb-1 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={1.9} />
              Back to News
            </Link>

            <div className="mt-8 flex items-center gap-4 text-sm font-semibold text-[#8abbff]">
              <span>{article.label}</span>
              <span className="h-px w-16 bg-[#8abbff]/55" aria-hidden="true" />
            </div>
            <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-[4.25rem]">
              {article.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              {article.excerpt}
            </p>

            <div className="mt-9 grid max-w-4xl border-y border-white/20 sm:grid-cols-3">
              {article.details.map((detail, index) => {
                const DetailIcon = articleDetailIcons[detail.icon];

                return (
                  <div
                    key={`${detail.icon}-${detail.info}`}
                    className={`flex items-start gap-3 py-4 text-sm text-white/72 sm:px-5 ${
                      index > 0 ? 'border-t border-white/20 sm:border-l sm:border-t-0' : ''
                    }`}
                  >
                    <DetailIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#8abbff]" strokeWidth={1.8} />
                    <span className="leading-6">{detail.info}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fb] px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl border-t border-slate-300 pt-8 sm:pt-10">
          <div className="mb-8 flex items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-sm font-semibold text-[#2166d1]">
              <span>Gallery</span>
              <span className="h-px w-16 bg-[#2166d1]/45" aria-hidden="true" />
            </div>
            <span className="text-xs font-medium text-slate-500">
              {String(gallery.length).padStart(2, '0')} images
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            <div className="relative min-h-[340px] overflow-hidden rounded-md bg-slate-200 sm:min-h-[520px] lg:col-span-8 lg:min-h-[650px]">
              <Image
                src={primaryImage.image}
                alt={primaryImage.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 67vw"
              />
            </div>

            {secondaryImages.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
                {secondaryImages.map((image) => (
                  <div key={image.id} className="relative min-h-[240px] overflow-hidden rounded-md bg-slate-200 lg:min-h-0">
                    <Image
                      src={image.image}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-slate-300 pt-8 sm:pt-10 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-3">
            <p className="text-sm font-semibold text-[#2166d1]">GIGOC Newsroom</p>
            <div className="mt-6 border-t border-slate-300">
              {article.details.map((detail) => {
                const DetailIcon = articleDetailIcons[detail.icon];

                return (
                  <div key={`${detail.icon}-aside-${detail.info}`} className="grid grid-cols-[1.25rem_1fr] gap-3 border-b border-slate-300 py-4">
                    <DetailIcon className="mt-0.5 h-4 w-4 text-[#2166d1]" strokeWidth={1.8} />
                    <span className="text-sm leading-6 text-slate-600">{detail.info}</span>
                  </div>
                );
              })}
            </div>
          </aside>

          <article className="lg:col-span-7 lg:col-start-5">
            <div className="border-t border-slate-300">
              {article.content.map((section, index) => (
                <section key={section.heading ?? section.paragraphs[0]} className="border-b border-slate-300 py-8 first:pt-0">
                  <div className="grid gap-4 sm:grid-cols-[2.5rem_1fr] sm:gap-5">
                    <span className="pt-1 text-xs font-medium text-[#2166d1]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      {section.heading ? (
                        <h2 className="text-2xl font-semibold leading-tight text-[#17365f] sm:text-3xl">
                          {section.heading}
                        </h2>
                      ) : null}

                      <div className={`${section.heading ? 'mt-5' : ''} space-y-5 text-base leading-8 text-slate-600`}>
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            {article.division === 'biomass' ? (
              <div className="mt-10 border-b border-slate-300 pb-10">
                <p className="max-w-2xl text-sm leading-7 text-slate-600">
                  Explore the main GIGOC Biomass page for the current project overview, proposed production process and development status.
                </p>
                <Link
                  href="/manufacturing"
                  className="group mt-5 inline-flex min-h-11 items-center justify-center gap-3 rounded-md bg-[#2166d1] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2b73df]"
                >
                  Explore GIGOC Biomass
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.9} />
                </Link>
              </div>
            ) : null}
          </article>
        </div>
      </section>

      {videoEmbedUrl ? (
        <section className="relative overflow-hidden bg-[#071a31] px-5 py-20 text-white sm:px-6 lg:px-10 lg:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:12.5%_100%]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl border-t border-white/20 pt-8 sm:pt-10">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 text-sm font-semibold text-[#8abbff]">
                  <span>Featured Media</span>
                  <span className="h-px w-16 bg-[#8abbff]/45" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                  {article.video?.title}
                </h2>
                {article.video?.summary ? (
                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                    {article.video.summary}
                  </p>
                ) : null}
              </div>

              <div className="relative aspect-video overflow-hidden rounded-md bg-slate-950 lg:col-span-7">
                <iframe
                  src={videoEmbedUrl}
                  title={article.video?.title ?? article.title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white px-5 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl border-y border-slate-300 py-8">
          <Link
            href="/news"
            className="group inline-flex items-center gap-3 border-b border-[#17365f]/35 pb-1 text-sm font-semibold text-[#17365f] transition hover:border-[#2166d1] hover:text-[#2166d1]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={1.9} />
            Back to News
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
