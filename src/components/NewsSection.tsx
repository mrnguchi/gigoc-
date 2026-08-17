import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';
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

export type NewsStory = {
  id: string;
  slides: NewsSlide[];
  article: NewsArticle;
  imageCard: NewsImageCard;
  videoCard: NewsVideoCard;
};

export type NewsSectionData = {
  sectionLabel: string;
  sectionTitle: string;
  sectionDescription: string;
  stories: NewsStory[];
  slides: NewsSlide[];
  article: NewsArticle;
  imageCard: NewsImageCard;
  videoCard: NewsVideoCard;
};

type NewsSectionProps = {
  data: NewsSectionData;
};

function getDetail(article: NewsArticle, icon: 'calendar' | 'location') {
  return article.details.find((detail) => detail.icon === icon)?.info;
}

export default function NewsSection({ data }: NewsSectionProps) {
  const fallbackStory: NewsStory = {
    id: 'featured-story',
    slides: data.slides,
    article: data.article,
    imageCard: data.imageCard,
    videoCard: data.videoCard,
  };
  const stories = data.stories.length > 0 ? data.stories : [fallbackStory];
  const [featuredStory, ...latestStories] = stories;
  const hasSingleLatestStory = latestStories.length === 1;
  const featuredImage = featuredStory.slides[0];
  const featuredDate = getDetail(featuredStory.article, 'calendar');
  const featuredLocation = getDetail(featuredStory.article, 'location');

  if (!featuredImage) {
    return null;
  }

  return (
    <section id="news-room" className="bg-[#f4f7fb] px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl border-t border-slate-300 pt-8 sm:pt-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 text-sm font-semibold text-[#2166d1]">
              <span>{data.sectionLabel}</span>
              <span className="h-px w-16 bg-[#2166d1]/45" aria-hidden="true" />
            </div>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#17365f] sm:text-5xl lg:text-[3.5rem]">
              News and updates from across GiGOC.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Follow our projects, company announcements and events as they happen.
            </p>
            <Link
              href="/news"
              className="group mt-6 inline-flex items-center gap-3 border-b border-[#17365f]/35 pb-1 text-sm font-semibold text-[#17365f] transition hover:border-[#2166d1] hover:text-[#2166d1]"
            >
              Visit the newsroom
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.9} />
            </Link>
          </div>
        </div>

        <article className="mt-14 border-y border-slate-300 py-6 sm:py-8 lg:mt-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-0">
            <Link
              href={featuredStory.article.href}
              className="group relative block min-h-[300px] overflow-hidden rounded-md bg-slate-200 sm:min-h-[430px] lg:col-span-7 lg:min-h-[520px]"
              aria-label={`Read ${featuredStory.article.title}`}
            >
              <Image
                src={featuredImage.image}
                alt={featuredImage.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a31]/35 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/85 sm:bottom-7 sm:left-7">
                Lead story
              </span>
            </Link>

            <div className="flex flex-col lg:col-span-5 lg:border-l lg:border-slate-300 lg:py-3 lg:pl-10 xl:pl-12">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500">
                <span className="font-semibold uppercase tracking-[0.14em] text-[#2166d1]">
                  {featuredStory.article.label}
                </span>
                {featuredDate ? (
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-3.5 w-3.5" strokeWidth={1.8} />
                    {featuredDate}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-6 text-3xl font-semibold leading-[1.15] tracking-[-0.025em] text-[#17365f] sm:text-4xl">
                {featuredStory.article.title}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                {featuredStory.article.excerpt}
              </p>

              {featuredLocation ? (
                <p className="mt-7 inline-flex items-start gap-2 text-sm font-medium text-[#273f60]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2166d1]" strokeWidth={1.9} />
                  {featuredLocation}
                </p>
              ) : null}

              <div className="mt-auto pt-9">
                <Link
                  href={featuredStory.article.href}
                  className="group inline-flex items-center gap-3 rounded-md bg-[#2166d1] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2b73df]"
                >
                  Read the story
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.9} />
                </Link>
              </div>
            </div>
          </div>
        </article>

        {latestStories.length > 0 ? (
          <div className="mt-12">
            <div className="flex items-end justify-between gap-6 border-b border-slate-300 pb-4">
              <h3 className="text-lg font-semibold text-[#17365f]">More from the newsroom</h3>
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                Latest stories
              </span>
            </div>

            <div className="grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">
              {latestStories.map((story, index) => {
                const storyImage = story.slides[0];
                const storyDate = getDetail(story.article, 'calendar');

                if (!storyImage) {
                  return null;
                }

                return (
                  <article key={story.id} className={`group border-b border-slate-300 py-7 ${hasSingleLatestStory ? 'md:col-span-2 lg:col-span-3' : ''}`}>
                    <Link
                      href={story.article.href}
                      className={hasSingleLatestStory ? 'grid gap-6 md:grid-cols-12 md:items-center md:gap-8' : 'block'}
                    >
                      <div className={`relative aspect-[16/10] overflow-hidden rounded-md bg-slate-200 ${hasSingleLatestStory ? 'md:col-span-5 lg:col-span-4' : ''}`}>
                        <Image
                          src={storyImage.image}
                          alt={storyImage.alt}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>

                      <div className={`mt-5 ${hasSingleLatestStory ? 'md:col-span-7 md:mt-0 lg:col-span-8' : ''}`}>
                        <div className="flex items-center justify-between gap-4 text-xs font-medium text-slate-500">
                          <span className="font-semibold uppercase tracking-[0.12em] text-[#2166d1]">
                            {story.article.label}
                          </span>
                          {storyDate ? <span>{storyDate}</span> : null}
                        </div>

                        <div className="mt-3 grid grid-cols-[2rem_1fr] gap-3">
                          <span className="pt-1 text-xs font-medium text-slate-400">
                            {String(index + 2).padStart(2, '0')}
                          </span>
                          <div>
                            <h4 className={`font-semibold leading-snug text-[#17365f] transition-colors group-hover:text-[#2166d1] ${hasSingleLatestStory ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                              {story.article.title}
                            </h4>
                            {hasSingleLatestStory ? (
                              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                                {story.article.excerpt}
                              </p>
                            ) : null}
                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#17365f]">
                              Read article
                              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.9} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
