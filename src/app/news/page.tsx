import { ArrowRight, ArrowUpRight, CalendarDays, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { newsArticles } from '@/data/news';

export default function NewsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar />

      <section className="relative min-h-[680px] overflow-hidden bg-[#07172b] sm:min-h-[720px]">
        <Image
          src="/hero-00.png"
          alt="GiGOC newsroom"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,15,30,0.94)_0%,rgba(4,19,38,0.78)_50%,rgba(4,18,35,0.4)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,13,27,0.34)_0%,rgba(3,14,29,0.18)_55%,rgba(3,15,30,0.7)_100%)]" />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 pb-24 pt-32 sm:min-h-[720px] sm:px-6 lg:px-10 lg:pt-36">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-sm font-semibold text-[#8abbff]">
              <span>GiGOC News</span>
              <span className="h-px w-16 bg-[#8abbff]/55" aria-hidden="true" />
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5rem]">
              GIGOC Newsroom
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              This page brings together featured events, company announcements, and curated media highlights in one clean newsroom experience.
            </p>

            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Link
                href="#news-grid"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#2166d1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(10,55,130,0.28)] transition hover:bg-[#2b73df]"
              >
                Browse News
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.9} />
              </Link>
              <Link
                href="/"
                className="group inline-flex items-center gap-3 border-b border-white/45 pb-1 text-sm font-semibold text-white transition hover:border-white"
              >
                Back Home
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.9} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="news-grid" className="scroll-mt-24 bg-[#f4f7fb] px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl border-t border-slate-300 pt-8 sm:pt-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 text-sm font-semibold text-[#2166d1]">
                <span>News Room</span>
                <span className="h-px w-16 bg-[#2166d1]/45" aria-hidden="true" />
              </div>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#17365f] sm:text-5xl lg:text-[3.5rem]">
                Latest News &amp; Updates
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:col-span-4 lg:col-start-9">
              A growing collection of event highlights, official updates, and news moments from across GiGOC.
            </p>
          </div>

          <div className="mt-14 border-t border-slate-300 lg:mt-16">
            {newsArticles.map((article, index) => {
              const date = article.details.find((detail) => detail.icon === 'calendar')?.info;
              const location = article.details.find((detail) => detail.icon === 'location')?.info;
              const image = article.gallery[0] ?? article.featuredImage;

              return (
                <article key={article.slug} className="group border-b border-slate-300 py-7 sm:py-8">
                  <div className="grid gap-7 lg:grid-cols-12 lg:items-stretch lg:gap-10">
                    <Link
                      href={article.href}
                      className="relative block min-h-[300px] overflow-hidden rounded-md bg-slate-200 sm:min-h-[400px] lg:col-span-5 lg:min-h-[430px]"
                      aria-label={`Read ${article.title}`}
                    >
                      <Image
                        src={image.image}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                        sizes="(max-width: 1024px) 100vw, 42vw"
                      />
                      <span className="absolute left-5 top-5 bg-[#071a31]/80 px-2.5 py-1.5 text-[10px] font-medium text-white backdrop-blur-sm">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </Link>

                    <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500">
                        <span className="font-semibold uppercase tracking-[0.12em] text-[#2166d1]">
                          {article.label}
                        </span>
                        {date ? (
                          <span className="inline-flex items-center gap-2">
                            <CalendarDays className="h-3.5 w-3.5" strokeWidth={1.8} />
                            {date}
                          </span>
                        ) : null}
                      </div>

                      <h3 className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.14] tracking-[-0.025em] text-[#17365f] transition-colors group-hover:text-[#2166d1] sm:text-4xl">
                        {article.title}
                      </h3>
                      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{article.excerpt}</p>

                      {location ? (
                        <p className="mt-6 inline-flex items-start gap-2 text-sm font-medium text-[#273f60]">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2166d1]" strokeWidth={1.9} />
                          {location}
                        </p>
                      ) : null}

                      <Link
                        href={article.href}
                        className="mt-8 inline-flex w-fit items-center gap-3 border-b border-[#17365f]/35 pb-1 text-sm font-semibold text-[#17365f] transition hover:border-[#2166d1] hover:text-[#2166d1]"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.9} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
