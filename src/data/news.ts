import type { NewsSectionData, NewsStory } from '@/components/NewsSection';

export type NewsDetailBlock = {
  heading?: string;
  paragraphs: string[];
};

export type NewsDivision = 'biomass' | 'music-entertainment';

export type NewsDetailArticle = {
  slug: string;
  division: NewsDivision;
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

const biomassNewsArticle: NewsDetailArticle = {
  slug: 'gigoc-biomass-project-development-update',
  division: 'biomass',
  label: 'GIGOC Biomass Newsletter',
  title: 'GIGOC Biomass: Developing a Wood-Pellet Manufacturing Opportunity in Limbe',
  excerpt:
    'GIGOC is advancing plans for a biomass wood-pellet manufacturing project in Limbe through technical planning, supplier evaluation, regulatory preparation, infrastructure assessment and financing review.',
  details: [
    { icon: 'calendar', info: 'July 2026' },
    { icon: 'location', info: 'Limbe, Cameroon' },
    { icon: 'time', info: '5 min read' },
  ],
  href: '/news/gigoc-biomass-project-development-update',
  featuredImage: {
    image: '/section 2 gallery 1.jpg',
    alt: 'Finished biomass wood pellets representing the product planned by GIGOC Biomass.',
  },
  gallery: [
    {
      id: 'biomass-gallery-1',
      image: '/section 2 gallery 1.jpg',
      alt: 'Finished biomass wood pellets representing GIGOC’s planned product.',
    },
    {
      id: 'biomass-gallery-2',
      image: '/section 2 gallery 2.png',
      alt: 'Wood pellets and processed wood material shown for product context.',
    },
    {
      id: 'biomass-gallery-3',
      image: '/raw-material-related-3.jpg',
      alt: 'Sawdust and wood-processing residues suitable for assessment as biomass raw material.',
    },
  ],
  video: {
    title: 'Pellet Production: An Educational Overview',
    summary:
      'This independent educational video provides general context on pellet formation. It does not depict GIGOC’s proposed facility or confirm its final equipment configuration.',
    youtubeUrl:
      'https://www.youtube.com/watch?v=a96xXW0cFIM&pp=ygUMd29vZCBwZWxsZXRz',
  },
  content: [
    {
      heading: 'A Project in Development',
      paragraphs: [
        'GIGOC is developing a biomass wood-pellet manufacturing project in Limbe, South West Region, Cameroon. The initiative remains in its development phase and is not yet an operational factory.',
        'Current work includes technical planning, equipment and supplier assessment, regulatory preparation, infrastructure evaluation and financing review before construction and commissioning decisions are completed.',
      ],
    },
    {
      heading: 'Creating Value from Wood-Processing Residues',
      paragraphs: [
        'The proposed project is intended to convert suitable sawdust, wood chips and other approved wood-processing residues into compact biomass pellets. These materials would be documented, prepared and assessed before entering the production process.',
        'Finished pellets have a consistent shape and density that can make them easier to handle, store and transport than loose biomass material.',
      ],
    },
    {
      heading: 'Planning the Production Process',
      paragraphs: [
        'The proposed workflow brings together raw-material collection, size reduction, drying and moisture control, pellet formation, cooling, screening, storage and packaging.',
        'GIGOC is evaluating how these stages can support dependable material flow, safe handling, dust management and consistent product handling without disclosing confidential machinery, pricing or factory-layout information.',
      ],
    },
    {
      heading: 'Responsible Industrial Development',
      paragraphs: [
        'The sourcing approach is expected to prioritise suitable residues from legally operating wood processors and other approved biomass suppliers. Traceability, lawful origin, material quality and reliable delivery will inform the final sourcing programme.',
        'Environmental, social and workplace-safety requirements will be addressed through the project’s regulatory and engineering preparation before full construction and operation.',
      ],
    },
    {
      heading: 'Looking Ahead',
      paragraphs: [
        'The next stage is to continue advancing the technical, regulatory, infrastructure and financing work required for an informed implementation decision.',
        'GIGOC will publish selected updates as major development milestones are reached. Until then, all public information should be understood as reflecting a proposed project that remains subject to technical, financial and regulatory confirmation.',
      ],
    },
  ],
};

const asakeNewsArticle: NewsDetailArticle = {
  slug: 'asake-live-in-cameroon',
  division: 'music-entertainment',
  label: 'Featured Event',
  title: 'Asake Live in Cameroon',
  excerpt:
    'Get ready for an electrifying night as Asake performs live in Cameroon. Experience high-energy music, a vibrant crowd, and world-class entertainment powered by GiGOC’s vision to deliver unforgettable moments.',
  details: [
    { icon: 'calendar', info: 'December 2026' },
    { icon: 'location', info: 'Japoma Stadium, Douala, Cameroon' },
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
    title: 'Latest Media Coverage',
    summary: 'Watch the latest media spotlight and event energy around Asake Live in Cameroon.',
    youtubeUrl:
      'https://www.youtube.com/watch?v=0ycogL4hY04&list=RDu_t7IpdSQ3A&index=9',
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

// Newest newsroom content is kept first.
export const newsArticles: NewsDetailArticle[] = [biomassNewsArticle, asakeNewsArticle];

export const musicNewsArticles = newsArticles.filter(
  (article) => article.division === 'music-entertainment',
);

export function getNewsArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}

function toNewsStory(article: NewsDetailArticle): NewsStory {
  return {
    id: article.slug,
    slides: article.gallery,
    article: {
      label: article.label,
      title: article.title,
      excerpt: article.excerpt,
      details: article.details,
      href: article.href,
    },
    imageCard:
      article.division === 'biomass'
        ? {
            image: '/gigoc-biomass.png',
            alt: 'GIGOC Biomass identity artwork.',
          }
        : {
            image: '/gigoc-news.png',
            alt: 'GiGOC news spotlight artwork.',
          },
    videoCard: {
      title: article.video?.title ?? 'Latest media coverage',
      summary:
        article.video?.summary ??
        'Selected media relating to this GIGOC newsroom story.',
      youtubeUrl: article.video?.youtubeUrl ?? '',
    },
  };
}

const newsStories = newsArticles.map(toNewsStory);
const latestStory = newsStories[0];

export const newsSectionData: NewsSectionData = {
  sectionLabel: 'Newsroom',
  sectionTitle: 'The latest stories and updates from GIGOC',
  sectionDescription:
    'Explore selected project developments, company news and media from across the group.',
  stories: newsStories,
  slides: latestStory.slides,
  article: latestStory.article,
  imageCard: latestStory.imageCard,
  videoCard: latestStory.videoCard,
};
