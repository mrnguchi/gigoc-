# Codebase Index

## Overview

- Framework: Next.js 16 App Router with React 19 and TypeScript
- Styling: Tailwind CSS v4 plus CSS variables in [`src/app/globals.css`](/home/nguchi/Projects/gigoc.org/src/app/globals.css)
- Main app shape: marketing-style site with Home, About, Contact, News list, and News detail pages
- Shared data sources: [`src/data/contact.ts`](/home/nguchi/Projects/gigoc.org/src/data/contact.ts) and [`src/data/news.ts`](/home/nguchi/Projects/gigoc.org/src/data/news.ts)

## Route Map

- `/`
  Entry page in [`src/app/page.tsx`](/home/nguchi/Projects/gigoc.org/src/app/page.tsx)
  Composes `Navbar`, `Hero`, `Section2`, `OurBusinesses`, `ProjectsShowcase`, `WhyChooseUs`, `NewsSection`, `ContactSection`, and `Footer`

- `/about`
  Page in [`src/app/about/page.tsx`](/home/nguchi/Projects/gigoc.org/src/app/about/page.tsx)
  Large standalone marketing page with team, stats, FAQ, and a news spotlight

- `/contact`
  Page in [`src/app/contact/page.tsx`](/home/nguchi/Projects/gigoc.org/src/app/contact/page.tsx)
  Dedicated contact experience with contact cards, social links, and a form UI

- `/news`
  Page in [`src/app/news/page.tsx`](/home/nguchi/Projects/gigoc.org/src/app/news/page.tsx)
  Client component with hero section, card grid, and incremental “load more” behavior

- `/news/[slug]`
  Dynamic detail page in [`src/app/news/[slug]/page.tsx`](/home/nguchi/Projects/gigoc.org/src/app/news/[slug]/page.tsx)
  Uses `generateStaticParams()` from local content data and renders gallery, article blocks, and optional embedded video

## App Shell

- [`src/app/layout.tsx`](/home/nguchi/Projects/gigoc.org/src/app/layout.tsx)
  Root layout for all routes
  Loads Geist fonts and global styles
  Metadata is still the default Create Next App placeholder

- [`src/app/globals.css`](/home/nguchi/Projects/gigoc.org/src/app/globals.css)
  Defines brand tokens such as `--primary`, `--text-main`, and `--bg-main`
  Enables smooth scrolling
  Holds marquee animation used by `CompaniesCarousel`

## Shared Components

- [`src/components/Navbar.tsx`](/home/nguchi/Projects/gigoc.org/src/components/Navbar.tsx)
  Primary site navigation and likely the top-level nav state owner

- [`src/components/Footer.tsx`](/home/nguchi/Projects/gigoc.org/src/components/Footer.tsx)
  Footer navigation, division links, social links, and company contact info

- [`src/components/Hero.tsx`](/home/nguchi/Projects/gigoc.org/src/components/Hero.tsx)
  Largest shared section
  Home-page hero plus business/division presentation and carousel usage

- [`src/components/CompaniesCarousel.tsx`](/home/nguchi/Projects/gigoc.org/src/components/CompaniesCarousel.tsx)
  Animated marquee of partner/company placeholders

- [`src/components/Section2.tsx`](/home/nguchi/Projects/gigoc.org/src/components/Section2.tsx)
  Introductory “multi-sector vision” content block

- [`src/components/OurBusinesses.tsx`](/home/nguchi/Projects/gigoc.org/src/components/OurBusinesses.tsx)
  Business division overview cards

- [`src/components/ProjectsShowcase.tsx`](/home/nguchi/Projects/gigoc.org/src/components/ProjectsShowcase.tsx)
  Project cards for featured work

- [`src/components/WhyChooseUs.tsx`](/home/nguchi/Projects/gigoc.org/src/components/WhyChooseUs.tsx)
  Value proposition section with highlights and CTA

- [`src/components/NewsSection.tsx`](/home/nguchi/Projects/gigoc.org/src/components/NewsSection.tsx)
  Home-page news teaser block driven by shared news data

- [`src/components/ContactSection.tsx`](/home/nguchi/Projects/gigoc.org/src/components/ContactSection.tsx)
  Home-page contact block and presentational form

## Data Modules

- [`src/data/contact.ts`](/home/nguchi/Projects/gigoc.org/src/data/contact.ts)
  Single source for address, email, and phone values reused across pages/components

- [`src/data/news.ts`](/home/nguchi/Projects/gigoc.org/src/data/news.ts)
  Source of truth for news content
  Exports:
  `newsArticles` for detail-page generation
  `getNewsArticleBySlug()` for dynamic route lookup
  `newsSectionData` for the home-page news section and reused news metadata

## Content Flow

- Contact content fans out from [`src/data/contact.ts`](/home/nguchi/Projects/gigoc.org/src/data/contact.ts) into:
  [`src/app/about/page.tsx`](/home/nguchi/Projects/gigoc.org/src/app/about/page.tsx),
  [`src/app/contact/page.tsx`](/home/nguchi/Projects/gigoc.org/src/app/contact/page.tsx),
  [`src/components/ContactSection.tsx`](/home/nguchi/Projects/gigoc.org/src/components/ContactSection.tsx),
  and [`src/components/Footer.tsx`](/home/nguchi/Projects/gigoc.org/src/components/Footer.tsx)

- News content fans out from [`src/data/news.ts`](/home/nguchi/Projects/gigoc.org/src/data/news.ts) into:
  [`src/app/page.tsx`](/home/nguchi/Projects/gigoc.org/src/app/page.tsx),
  [`src/app/about/page.tsx`](/home/nguchi/Projects/gigoc.org/src/app/about/page.tsx),
  [`src/app/news/page.tsx`](/home/nguchi/Projects/gigoc.org/src/app/news/page.tsx),
  and [`src/app/news/[slug]/page.tsx`](/home/nguchi/Projects/gigoc.org/src/app/news/[slug]/page.tsx)

## Size Hotspots

- Largest files by line count:
  [`src/components/Hero.tsx`](/home/nguchi/Projects/gigoc.org/src/components/Hero.tsx) at 425 lines
  [`src/components/Navbar.tsx`](/home/nguchi/Projects/gigoc.org/src/components/Navbar.tsx) at 337 lines
  [`src/app/about/page.tsx`](/home/nguchi/Projects/gigoc.org/src/app/about/page.tsx) at 323 lines
  [`src/app/contact/page.tsx`](/home/nguchi/Projects/gigoc.org/src/app/contact/page.tsx) at 307 lines
  [`src/app/news/page.tsx`](/home/nguchi/Projects/gigoc.org/src/app/news/page.tsx) at 299 lines

## Current Observations

- Metadata in [`src/app/layout.tsx`](/home/nguchi/Projects/gigoc.org/src/app/layout.tsx) is still scaffold default and should be branded
- Several social/profile and project links still point to `#`
- Forms in [`src/components/ContactSection.tsx`](/home/nguchi/Projects/gigoc.org/src/components/ContactSection.tsx) and [`src/app/contact/page.tsx`](/home/nguchi/Projects/gigoc.org/src/app/contact/page.tsx) appear presentational only with no submit handler or backend integration
- README is still the stock Next.js starter and does not describe the actual app
- There are user changes already in progress in [`src/app/about/page.tsx`](/home/nguchi/Projects/gigoc.org/src/app/about/page.tsx)

## Assets Noted

- New/untracked asset observed: `public/GOC.jpg`

