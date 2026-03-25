import type { NewsSectionData } from '@/components/NewsSection';

export type NewsDetailBlock = {
  heading?: string;
  paragraphs: string[];
};

export type NewsDetailArticle = {
  slug: string;
  label: string;
  title: string;
  excerpt: string;
  details: NewsSectionData['article']['details'];
  href: string;
  featuredImage: {
    image: string;
    alt: string;
  };
  gallery: Array<{
    id: string;
    image: string;
    alt: string;
  }>;
  video?: {
    title: string;
    summary: string;
    youtubeUrl: string;
  };
  content: NewsDetailBlock[];
};

const featuredNewsArticle: NewsDetailArticle = {
  slug: 'asake-live-in-cameroon',
  label: 'Featured Event',
  title: 'Asake Live in Cameroon',
  excerpt:
    'Get ready for an electrifying night as Asake performs live in Cameroon. Experience high-energy music, a vibrant crowd, and world-class entertainment powered by GiGOC’s vision to deliver unforgettable moments.',
  details: [
    { icon: 'calendar', info: 'Saturday, 12 April 2026' },
    { icon: 'location', info: 'Palais des Sports, Yaoundé, Cameroon' },
    { icon: 'time', info: 'Doors open at 7:00 PM' },
  ],
  href: '/news/asake-live-in-cameroon',
  featuredImage: {
    image: '/asake.jpg',
    alt: 'Asake live in Cameroon featured poster',
  },
  gallery: [
    { id: 'asake-gallery-1', image: '/asake.jpg', alt: 'Asake live event visual one' },
    { id: 'asake-gallery-2', image: '/asake-2.jpg', alt: 'Asake live event visual two' },
    { id: 'asake-gallery-3', image: '/asake-3.jpg', alt: 'Asake live event visual three' },
  ],
  video: {
    title: 'Latest media coverage',
    summary: 'Watch the latest media spotlight and event energy around Asake Live in Cameroon.',
    youtubeUrl: 'https://www.youtube.com/watch?v=0ycogL4hY04&list=RDu_t7IpdSQ3A&index=9',
  },
  content: [
    {
      heading: 'Event Overview',
      paragraphs: [
        'Asake Live in Cameroon is one of the standout entertainment moments currently featured in the GiGOC newsroom. Built around a strong live-performance experience, the event brings together music, audience energy, and premium show production in one memorable night.',
        'With GiGOC involved in delivering and promoting experiences of this scale, the event reflects the group’s ambition to create cultural moments that connect people, brands, and entertainment at a higher level.',
      ],
    },
    {
      heading: 'What Guests Can Expect',
      paragraphs: [
        'Attendees can expect an atmosphere designed for impact: a vibrant crowd, a well-produced stage experience, and a night shaped around performance, excitement, and live audience connection. The goal is not only to host an event, but to deliver something people will remember long after the night ends.',
        'From doors opening to the main performance, the experience is intended to feel polished, energetic, and worthy of the headline moment. Every touchpoint contributes to the larger impression of quality and presence.',
      ],
    },
    {
      heading: 'Why It Matters to GiGOC',
      paragraphs: [
        'This feature also highlights GiGOC’s wider interest in music, entertainment, and public-facing experiences. It shows how the group can participate in moments that strengthen visibility, expand audience reach, and position the brand within creative and commercial spaces at the same time.',
        'As more news stories are published, this newsroom will continue to document events, launches, and milestone updates that show the range of GiGOC activity across its divisions.',
      ],
    },
  ],
};

export const newsArticles: NewsDetailArticle[] = [featuredNewsArticle];

export function getNewsArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}

export const newsSectionData: NewsSectionData = {
  sectionLabel: '-- News Room --',
  sectionTitle: 'The latest stories, updates, and media from GiGOC',
  sectionDescription: 'A flexible media block for featured stories, news imagery, and video content from across the group.',
  slides: featuredNewsArticle.gallery,
  article: {
    label: featuredNewsArticle.label,
    title: featuredNewsArticle.title,
    excerpt: featuredNewsArticle.excerpt,
    details: featuredNewsArticle.details,
    href: featuredNewsArticle.href,
  },
  imageCard: {
    image: '/gigoc-news.png',
    alt: 'GiGOC news spotlight artwork',
  },
  videoCard: {
    title: featuredNewsArticle.video?.title ?? 'Latest media coverage',
    summary: featuredNewsArticle.video?.summary ?? 'This video block is ready for a live YouTube link so visitors can watch interviews, event recaps, or company updates without leaving the page.',
    youtubeUrl: featuredNewsArticle.video?.youtubeUrl ?? '',
  },
};