# GIGOC Manufacturing Page Implementation Guide

## Document purpose and authority

This document is the primary implementation reference for the new public-facing GIGOC Manufacturing page. It preserves the approved project context, public-information boundaries, content, design direction, image requirements, technical integration notes, phased workflow, and acceptance criteria.

The Manufacturing page must be implemented progressively, one approved phase at a time. At the beginning of every phase, re-read this document and inspect the implementation as it then exists. If a later instruction conflicts with this guide, pause and obtain explicit direction before changing an approved project boundary or factual claim.

Document status: Phase 1 route shell, navigation, and metadata; the approved Phase 2 hero; both Phase 3 sections; the Phase 4 Production Process; both Phase 5 sections; both Phase 6 sections; the Project Development Status portion of Phase 7; the final call to action; the footer-based subscription form; the homepage business integration; and the first GIGOC Biomass newsroom newsletter are implemented. The dedicated Partnership Opportunities section remains pending by owner direction.

Implemented imagery and icon assets:

- `public/wood pellet hero.jpg` — supplied 1199 × 669 hero photograph.
- `public/renewable-energy.png` — supplied 128 × 128 icon displayed beside the hero eyebrow.
- `public/gigoc-biomass.png` — supplied 2500 × 2500 identity image displayed in the Project Overview’s left column using a 16:9 crop.
- `public/section 2 gallery 1.jpg` through `public/section 2 gallery 4.jpg` — supplied product-section gallery imagery.
- `public/read more.png` — supplied icon used by the product-section Read More link.
- `public/facility-related.jpg` — supplied 1199 × 678 illustrative biomass facility image used in the Proposed Facility section with a development-status overlay.
- `public/raw-material-related.jpg`, `public/raw-material-related-2.jpg`, and `public/raw-material-related-3.jpg` — supplied illustrative sourcing imagery used with `facility-related.jpg` in the Responsible Sourcing display.
- `public/Responsible material handling.png`, `public/Dust-control considerations.png`, `public/Safe biomass storage.png`, `public/Workplace health and safety.png`, `public/Regulatory and environmental preparation.png`, and `public/Continuous operational improvement.png` — supplied 128 × 128 icons used in the Environmental and Operational Approach commitment grid.
- `public/subscribe.png` and `public/phone.png` — supplied 128 × 128 icons used by the final call-to-action buttons.
- `public/real estate.png`, `public/car-rental.png`, `public/music and entertainment.png`, `public/modelling.png`, `public/general commerce.png`, `public/tech and innovation.png`, and `public/logistics.png` — supplied 128 × 128 sector icons used with `public/renewable-energy.png` across the homepage business cards.

The supplied hero photograph contains visible stock-provider watermarks. It may be used for the current development preview, but a licensed, watermark-free replacement is required before public launch.

## Initial-task boundary

The initial task is limited to:

1. Reviewing the repository and current website architecture.
2. Recording this complete implementation guide.

Do not create the Manufacturing route, alter navigation, add placeholders, or implement any page section as part of the initial task.

## Repository review

### Framework and programming language

- Framework: Next.js 16.1.6 using the App Router.
- UI runtime: React 19.2.3.
- Language: TypeScript with strict type checking.
- Styling: Tailwind CSS v4 utilities plus global CSS variables.
- Icons: `lucide-react` and `react-icons`.
- Email delivery: Nodemailer through a server-side Next.js route handler.
- Path alias: `@/*` maps to `src/*`.

### Routing structure

Routes are filesystem-based under `src/app`:

- `/` — `src/app/page.tsx`
- `/about` — `src/app/about/page.tsx`
- `/contact` — `src/app/contact/page.tsx`
- `/news` — `src/app/news/page.tsx`
- `/news/[slug]` — `src/app/news/[slug]/page.tsx`
- `/tech&innovation` — `src/app/tech&innovation/page.tsx`
- `/music&entertainment` — `src/app/music&entertainment/page.tsx`
- `/gigoc_rentals` — `src/app/gigoc_rentals/page.tsx`
- `/api/forms/submit` — `src/app/api/forms/submit/route.ts`

The Manufacturing page should be added as:

`src/app/manufacturing/page.tsx`

This produces the approved public route:

`/manufacturing`

The first release remains one comprehensive page. A future supporting SEO page at `/manufacturing/wood-pellets` has now been approved, but it must not be created until separately instructed.

### Application shell and page composition

`src/app/layout.tsx` is the root layout. It:

- Loads `Geist` and `Geist_Mono` with `next/font`.
- Imports `src/app/globals.css`.
- Applies global font variables and antialiasing.
- Defines site-wide title and description metadata.
- Does not render the shared header or footer.

Individual pages currently import and render `Navbar` and `Footer` themselves. The Manufacturing page should follow that established pattern unless a separately approved refactor moves the shell into the root layout.

Existing pages generally use:

```tsx
<main className="min-h-screen ...">
  <Navbar />
  {/* Page content */}
  <Footer />
</main>
```

There is no generic page-layout, section, container, button, card, or SEO component at present. Reuse is primarily achieved through shared `Navbar`, `Footer`, forms, CSS variables, and repeated Tailwind patterns.

### Header and navigation

The shared header is implemented in `src/components/Navbar.tsx` as a client component.

Key behaviour:

- Fixed at the top with a high stacking context.
- Transparent over the initial hero state.
- Changes to a white, blurred, bordered, rounded treatment after scrolling.
- Uses white and blue GIGOC logo variants depending on scroll state.
- Uses `usePathname()` to calculate active links.
- Provides separate desktop and mobile navigation.
- Supports an “Our Businesses” dropdown on desktop and collapsible business list on mobile.
- Supports outside-click and Escape-key closing.
- Locks body scrolling while the mobile menu is open.
- Desktop layout switches on at the Tailwind `lg` breakpoint.

The `divisions` data originally included:

```ts
{ label: 'Manufacturing', href: '/#hero-divisions' }
```

During Phase 1, the target changed to `/manufacturing`. The project owner later approved the navigation label `GIGOC Biomass`. This places the page in the existing “Our Businesses” menu rather than crowding the top-level row, and applies to both desktop and mobile because both render from the same array.

The unscrolled navigation assumes a dark or image-backed hero because its initial logo and link text are white. The Manufacturing hero must preserve sufficient contrast behind the fixed navigation.

### Footer

The shared footer is implemented in `src/components/Footer.tsx`.

It contains:

- GIGOC logo and corporate summary.
- Company links.
- Division links.
- Social links.
- Shared company address, email, and telephone data.
- A compact newsletter subscription form beneath the Contact Info details.
- Dynamic copyright year.

The footer’s `divisionLinks` array already contains:

```ts
{ label: 'Manufacturing', href: '/#' }
```

During Phase 1, change only this Manufacturing link target to `/manufacturing`. The new page must render the existing `Footer`; do not create a Manufacturing-specific footer.

Several unrelated footer and social links are still placeholders. They are outside this page’s scope and must not be changed incidentally.

### Typography

- Primary typeface: Geist via `next/font`.
- Fallbacks: Arial, Helvetica, sans-serif.
- Headings commonly use `font-semibold`, compact line-height, and responsive sizes.
- Common page H1 pattern: `text-4xl sm:text-5xl lg:text-6xl`, although division pages sometimes use `text-3xl` at the smallest size.
- Common section H2 pattern: `text-3xl sm:text-4xl`.
- Common body pattern: `text-base leading-7`, often with `sm:text-lg` for hero copy.
- Section labels commonly use `text-sm font-semibold tracking-[0.22em] uppercase`.

Manufacturing should use the same type family and scale, with only one H1. It should keep paragraphs short and scannable.

### Spacing, containers, and shape language

Recurring layout conventions include:

- Page/container width: `mx-auto max-w-7xl`.
- Horizontal page padding: usually `px-4` or `px-5`, then `sm:px-6` and `lg:px-8` or `lg:px-10`.
- Hero top padding beneath fixed navigation: commonly `pt-28` through `lg:pt-32`.
- Section vertical spacing: generally in the range represented by `py-18`, `pb-20`, `lg:pb-24`, and `lg:py-22`.
- Grid breakpoints: `sm`, `md`, `lg`, and `xl`.
- Common panel radii: `rounded-[1.5rem]`, `rounded-[1.75rem]`, and `rounded-[2rem]`.
- Borders typically use low-opacity slate or white.
- Shadows are soft, wide, and low-opacity.

Tailwind’s standard v4 breakpoints are in use; the repository defines no custom breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Colours

Brand and surface tokens in `src/app/globals.css`:

```css
--background: #ffffff;
--foreground: #171717;
--bg-main: #f8fafc;
--bg-soft: #f1f5f9;
--primary: #1e4a95;
--primary-soft: #eaf2ff;
--text-main: #2d4162;
--text-soft: #54595f;
--border-soft: #e2e8f0;
```

Common dark sections use deep navy values such as `#081224`, `#081a4d`, `#0f172a`, and `#101827`. The dominant button treatment is a restrained blue gradient from `#1e4a95` to `#2563eb`.

Manufacturing should primarily reuse these tokens. Industrial credibility should come from composition, photography, typography, restrained dividers, and clear process information—not a new decorative colour system.

### Reusable components and patterns

Approved existing components that can be reused:

- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/components/forms/ContactForm.tsx`, if later extended in a narrowly compatible way
- `src/components/forms/NewsletterForm.tsx`
- `src/data/contact.ts`

Reusable visual patterns, though not formal components:

- `max-w-7xl` centred content container.
- Uppercase, letter-spaced section labels.
- Responsive H1/H2 scales.
- Pill-shaped primary and secondary links.
- Alternating white and `var(--bg-main)` section backgrounds.
- Split editorial layouts using responsive CSS grids.
- `next/image` wrappers with fixed aspect ratio or reserved height.
- Deep navy CTA and footer surfaces.
- Low-opacity borders and restrained shadows.

Do not force every Manufacturing item into a card. Formal extraction of a small page-local `SectionHeading`, `Container`, image placeholder, or button helper may be considered only if it improves consistency without creating a broad refactor.

### Contact functionality

Contact UI exists in two places:

- Homepage contact section: `src/components/ContactSection.tsx`
- Dedicated contact page: `src/app/contact/page.tsx`

Both use `src/components/forms/ContactForm.tsx`, which posts JSON to `/api/forms/submit`. The server route validates submissions and `src/lib/mailer.ts` sends:

1. An internal notification email.
2. An acknowledgement email to the sender.

The contact-page service selector already offers:

```html
<option value="manufacturing">Manufacturing</option>
```

Partnership calls to action should link to `/contact` initially. A query such as `/contact?service=manufacturing` should be added only if Phase 7 explicitly includes a clean update to read and apply that value. The current form does not parse search parameters, and adding a query today would not preselect the service.

SMTP requires the environment variables documented in `.env.example`, including the SMTP host, port, user, and password. Form success depends on correct deployment configuration.

### Newsletter functionality

`src/components/forms/NewsletterForm.tsx` posts `submissionType: "newsletter"` with an email address to `/api/forms/submit`. The server validates the address and uses Nodemailer to:

- Notify the configured GIGOC inbox about the signup.
- Send an acknowledgement to the subscriber.

Important limitation: the repository contains no subscriber database, mailing-list provider, preference centre, unsubscribe endpoint, or suppression handling. The current implementation is an email-notification workflow, not a durable newsletter subscription platform. Its acknowledgement currently states that the address was added to an updates list, although no persistence is visible in the repository.

For the Manufacturing newsletter phase:

- Reuse the existing visual component and endpoint only after confirming with the project owner that the SMTP-notification workflow is acceptable.
- The required consent sentence must be visibly included.
- Do not claim a fully managed subscription or unsubscribe system unless one is actually integrated.
- If durable subscription management is required, implement only the visual section in Phase 8 and document the backend integration requirement rather than creating a disconnected second system.

### SEO and metadata

`src/app/layout.tsx` defines only site-wide title and description metadata. No route currently exports page-specific metadata, `generateMetadata`, Open Graph fields, Twitter card fields, `metadataBase`, canonical URLs, or structured data.

The Manufacturing route should be a server component so Phase 1 can export Next.js `Metadata` directly. Add page-specific title, description, and suitable Open Graph metadata using verifiable content only. Do not invent structured data.

Because no approved Manufacturing social image exists yet, use only an existing genuinely suitable brand image or omit `openGraph.images` until the supplied Manufacturing imagery is integrated. Do not represent an unrelated facility as GIGOC’s project.

### Image handling

Current image convention:

- Local assets live directly in `public/`.
- Components use `next/image`.
- Hero images use `fill`, `object-cover`, and often `priority`.
- Many responsive images specify `sizes`.
- Noncritical images rely on Next.js default lazy loading.
- No remote image domains are configured in `next.config.ts`.
- No blur placeholders or shared content-image placeholder component exist.
- No Manufacturing placeholder assets currently exist.

For Manufacturing:

- Do not download or commit stock photography.
- Create a clearly marked local temporary visual placeholder during the phase that introduces each image position.
- Keep placeholder layout dimensions identical to the final intended asset.
- Use `next/image`, meaningful `sizes`, and reserved aspect-ratio containers.
- Prioritise only the hero image.
- Lazy-load noncritical images through the normal `next/image` behaviour.
- Do not add remote-image configuration unless separately approved.
- Keep all important explanatory content in HTML rather than inside images.

The placeholder may be a deliberately neutral, code-rendered surface or an approved local temporary asset. It must not suggest that a real third-party factory belongs to GIGOC. Each placeholder must be identified in a nearby code comment with the intended filename, dimensions/aspect ratio, subject, and temporary alt text.

### Existing animations

The global stylesheet includes smooth scrolling and one marquee animation. Some components use hover transitions and restrained transforms. There is no general entrance-animation library.

The Manufacturing page should not introduce a new animation dependency. Use no entrance animation unless a later approved phase identifies a clear, accessible need. Respect reduced-motion behaviour if any motion is added.

## Technical concerns and scope conflicts

1. **Newsletter persistence and unsubscribe:** the existing newsletter does not visibly store subscriptions or support unsubscribe, despite acknowledgement copy implying list membership. This must be resolved or transparently documented during Phase 8.
2. **Contact preselection:** the contact form includes a Manufacturing option but does not support a query-driven default. A normal `/contact` link works now; preselection requires an approved, scoped enhancement.
3. **Metadata baseline:** route-specific and Open Graph metadata patterns do not yet exist. Manufacturing can establish a minimal Next.js metadata pattern without refactoring unrelated routes.
4. **Navbar hero contrast:** the header begins transparent with white text/logo, so the Manufacturing hero must have a reliably dark top region and sufficient contrast.
5. **Placeholder method:** the repository has no established page-image placeholder system. A small, explicit, layout-stable local convention must be introduced only when an approved section needs it.
6. **Existing placeholder links:** unrelated navigation, footer, and social items still use `#` or homepage anchors. Only Manufacturing targets should be changed in Phase 1.
7. **No shared section/button primitives:** repeated styles exist but are not extracted. Avoid turning this page into a broad design-system refactor.
8. **Client-component risk:** most of the Manufacturing page is static and should remain server-rendered. Add client components only for interactive form or local navigation behaviour.
9. **Image truthfulness:** supplied or temporary imagery must not imply that construction, commissioning, production, partnerships, or certifications are complete.
10. **Public-claim control:** all copy must preserve development-stage language and avoid exact capacity, job counts, investment figures, or unverified environmental claims.
11. **Deployment email configuration:** contact and newsletter flows require valid SMTP environment variables.
12. **Existing data typo:** the shared contact address currently spells “Camerron.” Correcting shared company data affects the entire website and is outside the Manufacturing phase unless separately approved.

## Project context

GIGOC, Gebah Investment Group of Companies, is developing a biomass wood-pellet manufacturing project in Limbe, South West Region, Cameroon.

The project is currently in its development stage. It is not yet an operational factory.

The page must communicate that GIGOC is seriously developing the project through technical planning, supplier assessment, regulatory preparation, infrastructure evaluation, and financing arrangements.

The page must not suggest that:

- Commercial production has already started.
- The plant has already been commissioned.
- All permits and certifications have been obtained.
- Buyers, investors, or international partners have already been secured.
- Production quantities or export contracts have been confirmed.

## Public-information boundary

### Information that may be communicated publicly

- The proposed location in Limbe, Cameroon.
- The planned production of biomass wood pellets.
- The intended use of suitable wood-processing residues and biomass materials.
- The general manufacturing process.
- GIGOC’s commitment to responsible sourcing.
- Environmental and safety considerations.
- Expected employment and local economic opportunities.
- The project’s current development status.
- Opportunities for legitimate technical, financial, supply, and commercial partnerships.

### Information that must not be disclosed

- Supplier quotations.
- Machinery prices.
- Total project investment.
- Financing arrangements.
- Internal financial projections.
- Production costs or expected profit.
- Detailed machinery models.
- Electrical capacity or transformer specifications.
- Detailed factory drawings.
- Security arrangements.
- Private supplier agreements.
- Unconfirmed buyers, investors, or partners.
- Confidential regulatory or commercial documents.

## Route and navigation

- Route: `/manufacturing`
- Main navigation label: `GIGOC Biomass`
- Navigation location: existing “Our Businesses” dropdown/collapsible menu.
- Footer location: existing “Divisions” list.
- First-phase information architecture: one comprehensive page only.

Do not create separate Manufacturing subpages unless later instructed.

### Homepage business integration

- Homepage business cards identify the sector as `GIGOC Biomass`, not the generic `Manufacturing`.
- Both homepage business presentations link the GIGOC Biomass entry to `/manufacturing`.
- The later Our Businesses grid follows the same sector order as the hero business carousel.
- The hero business carousel and the later Our Businesses grid use white card surfaces, dark typography, restrained borders and shadows, and the supplied sector icons on dark icon tiles.
- The hero statistic reflects the eight business divisions currently presented.
- The shared navigation label is `GIGOC Biomass`; the footer division label remains `Manufacturing` unless separately directed.

### Newsroom and newsletter integration

- The first GIGOC Biomass newsletter uses the existing dynamic news-detail route at `/news/gigoc-biomass-project-development-update`.
- Its copy preserves the project’s development-stage position and does not claim completed construction, commissioning, permits, contracts, production or partnerships.
- The newsletter reuses approved local biomass imagery already supplied for the Manufacturing project.
- The supplied YouTube video `https://www.youtube.com/watch?v=a96xXW0cFIM&pp=ygUMd29vZCBwZWxsZXRz` is embedded through YouTube’s privacy-enhanced domain and clearly identified as independent educational context. It must not be described as GIGOC footage or confirmation of the project’s final equipment configuration.
- Shared news data keeps the newest story first. The GIGOC Biomass newsletter is therefore the initial story shown on the homepage, About page and main News page.
- The homepage Newsroom provides accessible Previous and Next controls that transition the complete story presentation—gallery, copy, details, video and supporting image—with restrained fade-and-position motion and a reduced-motion fallback.
- News articles include a division field so the Music & Entertainment page can continue to show only entertainment stories.

## SEO details

Page title:

> Biomass Wood-Pellet Manufacturing | GIGOC

Meta description:

> Learn about GIGOC’s developing biomass wood-pellet manufacturing project in Limbe, Cameroon, focused on responsible raw-material use, industrial development and sustainable economic opportunities.

Page heading:

> Biomass Wood-Pellet Manufacturing

Requirements:

- Use a proper semantic heading hierarchy.
- Render exactly one H1.
- Add suitable Open Graph metadata using the project’s existing Next.js metadata approach.
- Use only verified properties.
- Do not invent structured-data properties.
- Do not add an unrelated or misleading social preview image.

Note: the approved visible hero headline differs from the recommended page heading above. Preserve exactly one H1 by using the approved hero main heading as the H1, while representing “Biomass Wood-Pellet Manufacturing” in metadata, the eyebrow/supporting content, or another non-H1 semantic location. Do not render a second H1 merely to repeat the SEO heading phrase.

## Design direction

The page must:

- Match the existing GIGOC website.
- Look professional, industrial, and credible.
- Avoid exaggerated environmental imagery.
- Avoid excessive gradients, badges, floating decorations, and unnecessary cards.
- Avoid a generic AI-generated appearance.
- Use strong typography, generous spacing, and clear section separation.
- Be fully responsive.
- Maintain accessibility standards.
- Use short paragraphs and easily scannable content.
- Avoid presenting every item inside a card.
- Use restrained icons only where they improve understanding.
- Reuse existing website components wherever practical.

Recommended visual approach:

- Deep navy, image-backed hero that supports the existing transparent navigation.
- Editorial split layouts and alternating white/light-slate sections.
- A restrained process line or numbered flow rather than six decorative cards.
- Clean rules, labels, and typography for the status table.
- Purposeful photography with honest captions/alt text.
- Blue brand colour for navigation, links, focus, and primary actions.

## Image workflow

The hero image and renewable-energy icon have been supplied. The remaining final section images will be supplied later by the project owner.

Do not download or permanently introduce external stock images.

For every image position:

- Create a temporary placeholder using the project’s documented local placeholder convention.
- Clearly identify the placeholder in code.
- Provide the recommended filename, dimensions, aspect ratio, and subject in a nearby code comment.
- Add descriptive temporary alt text.
- Reserve the final layout dimensions so replacing the placeholder does not require restructuring.
- Do not misrepresent a third-party factory as a completed GIGOC facility.

Suggested concrete pixel dimensions, derived from the approved aspect ratios:

| Placement | Recommended filename | Suggested dimensions | Aspect ratio | Subject |
|---|---|---:|---:|---|
| Hero | `manufacturing-hero-placeholder.jpg` | 1800 × 1125 or 1920 × 1080 | 3:2 or 16:9 | Wood pellets, biomass material, or a modern pellet-production environment |
| Product explanation | `wood-pellets-product-placeholder.jpg` | 1200 × 900 or 1200 × 1200 | 4:3 or 1:1 | Finished pellets beside sawdust or clean wood residue |
| Process | `pellet-production-process-placeholder.jpg` | 1800 × 900 | 2:1 landscape | Simplified production sequence or biomass moving through stages |
| Proposed facility | `proposed-facility-placeholder.jpg` | 1920 × 1080 | 16:9 | Approved concept render, actual site, or clearly conceptual industrial exterior |
| Responsible sourcing | `responsible-biomass-sourcing-placeholder.jpg` | 1500 × 1000 | 3:2 | Managed sawdust, wood chips, or residue collection |
| Community impact | `manufacturing-community-impact-placeholder.jpg` | 1500 × 1000 | 3:2 | Professional technical workers or supervised biomass handling |

## Page content and section order

The following order and approved copy must be preserved unless management supplies a later approved revision.

### Section 1: Hero

**Purpose**

Immediately introduce the manufacturing project while clearly identifying its development status.

**Eyebrow**

> GIGOC BIOMASS

Display the supplied renewable-energy icon immediately beside this eyebrow text. Use the icon only once in the hero.

**Main heading**

> Building Cameroon’s Next Biomass Manufacturing Opportunity

**Supporting text**

> GIGOC is developing a modern biomass wood-pellet production facility in Limbe, Cameroon, designed to transform responsibly sourced wood-processing residues into efficient and commercially valuable biomass fuel products.

**Project status**

> Project currently under development

**Primary button**

> Explore the Project

The button must scroll to the Project Overview section. Give that section a stable semantic ID, recommended: `project-overview`, with suitable scroll offset for the fixed navigation.

**Secondary button**

> Discuss a Partnership

Link to `/contact`, unless a later approved contact enhancement supports Manufacturing preselection cleanly.

**Image**

- Subject: wide industrial image showing wood pellets, biomass material, or a modern pellet-production environment.
- Truthfulness: must not present another company’s facility as GIGOC’s completed factory.
- Temporary filename: `manufacturing-hero-placeholder.jpg`
- Aspect ratio: 16:9 or approximately 3:2
- Temporary alt text: `Biomass wood pellets and processed wood material representing GIGOC’s proposed manufacturing project.`

### Section 2: Project Overview

**Section label**

> THE PROJECT

**Heading**

> Developing Value from Biomass Resources

**Content**

> GIGOC’s biomass manufacturing initiative is being developed to convert suitable wood-processing residues and other approved biomass materials into compact wood pellets.

> The proposed facility will bring together raw-material preparation, moisture control, pellet formation, cooling, screening and packaging within an organised industrial production process.

> Located in Limbe, the project is intended to support local industrial development, create new economic opportunities and position GIGOC within the growing renewable biomass value chain.

> The project remains in its development phase, with technical planning, regulatory preparation, supplier evaluation, infrastructure assessment and financing arrangements currently being advanced.

Present this section as clear editorial content rather than a large collection of cards.

Optional supporting facts:

- Proposed location: Limbe, Cameroon
- Product: Biomass wood pellets
- Current phase: Project development

Do not include exact production capacity unless management approves it later.

Implementation note: this section uses an editorial two-column layout. The wider left column contains the section label, a full-width heading without a narrow character cap, and the supplied `gigoc-biomass.png` identity image. The approved copy remains in the second column behind a restrained divider. No cards, buttons, or repeated project facts are used.

### Section 3: What Are Wood Pellets?

**Section label**

No separate eyebrow or section label. Begin with the semantic H2 to keep the presentation direct.

**Heading**

> What Are Wood Pellets?

**Content**

> Biomass wood pellets are compact fuel products created by processing and compressing suitable wood residues into small, uniform forms.

> Materials such as sawdust and processed wood residues are reduced to the required size, dried to a controlled moisture level and compressed under pressure. The resulting pellets are easier to handle, store and transport than loose biomass materials.

> Their consistent shape and density make them suitable for controlled heating and energy applications where biomass fuel is accepted.

Do not describe the product as carbon neutral, zero-emission, or completely sustainable.

**Image gallery**

- Use the four supplied assets named `section 2 gallery 1` through `section 2 gallery 4`.
- Present them as a clean 2 × 2 responsive gallery.
- Use layout-stable 4:3 frames and `next/image`.
- Apply a subtle hover scale and overlay only.
- Clicking an image opens an accessible modal.
- The modal must close from its close button, the Escape key, or a click outside the image.
- Lock background scrolling while the modal is open and return keyboard focus to the triggering image after closing.

**Read More**

- Display a `Read More` link using `public/read more.png`.
- Planned destination: `/manufacturing/wood-pellets`.
- The destination page is approved for later SEO-focused development but is not part of the current scope.

Implementation note: this section uses a responsive split layout with the approved text and four-image gallery. The content comes first on mobile; the gallery sits to the left on larger screens. The earlier spaced-out eyebrow was removed, and explicit letter-spacing treatments were removed from Manufacturing-page labels.

### Section 4: Production Process

**Section label**

> WOOD PELLET MANUFACTURING PROCESS

**Heading**

> From Wood Residue to Finished Pellets

**Introduction**

> The proposed manufacturing process is designed to convert suitable biomass residues into consistent finished pellets through a controlled sequence of preparation, production and quality-handling stages.

**Stages**

1. **Raw-Material Collection**

   Suitable wood-processing residues are received from approved and traceable sources.

2. **Chipping and Size Reduction**

   Larger wood materials are reduced into smaller particles suitable for further processing.

3. **Drying and Moisture Control**

   The prepared biomass is dried to achieve the moisture condition required for pellet production.

4. **Pellet Formation**

   The dried material is compressed through specialised pellet-forming equipment to create dense and uniform pellets.

5. **Cooling and Screening**

   Fresh pellets are cooled and screened to remove loose particles and unsuitable material.

6. **Storage and Packaging**

   Qualified pellets are temporarily stored and prepared for handling, transport or distribution.

Do not publish machinery models, equipment prices, rated electrical power, or detailed factory-layout measurements.

**Image or diagram**

Use one of:

- A simplified horizontal process diagram.
- A vertically arranged mobile-friendly process flow.
- A supporting image showing biomass moving through production stages.

The HTML process content must remain understandable without the image. Do not reuse the confidential supplier flowchart directly on the public website.

- Temporary filename: `pellet-production-process-placeholder.jpg`
- Aspect ratio: wide landscape
- Temporary alt text: `Simplified stages of biomass wood-pellet production from raw material to packaging.`

Implementation note: the approved image-free option is used because no dedicated process asset has been supplied. The six stages are presented as a semantic ordered list with visible numbering and restrained horizontal rules. The sequence remains linear and readable on mobile without cards, icons, confidential diagrams, or machinery specifications.

**Read More**

- Display a `Read More` link beneath the left-column introduction using `public/read more.png`.
- Planned destination: `/manufacturing/production-process`.
- The supporting process page is reserved for later implementation and is not part of the current scope.

### Section 5: The Proposed Facility

**Section label**

> PLANNED FACILITY

**Heading**

> An Integrated Biomass Production Facility in Limbe

**Content**

> The proposed GIGOC facility is being planned as an integrated industrial operation covering biomass preparation, drying, pellet production, cooling, screening, storage and packaging.

> The project’s technical configuration is being evaluated to support dependable material flow, workplace safety, dust management, operational efficiency and consistent product handling.

> Final construction, equipment installation and commissioning will proceed only after the required technical, financial and regulatory preparations have been completed.

**Supporting points**

- Planned industrial production workflow
- Integrated material preparation and pellet production
- Dust-control and material-handling considerations
- Structured storage and packaging process
- Development subject to engineering and regulatory confirmation

**Image**

- Subject: exterior industrial concept image, approved factory render, or future image of the actual project site.
- Truthfulness: must not imply that the GIGOC factory has already been constructed.
- Temporary filename: `proposed-facility-placeholder.jpg`
- Aspect ratio: 16:9
- Temporary alt text: `Conceptual industrial biomass production facility representing GIGOC’s planned manufacturing project in Limbe.`

Implementation note: `public/facility-related.jpg` is used in the layout-stable 16:9 position with a restrained dark overlay and the clarification “Facility planning in progress — illustration only.” The alt text also makes clear that the scene is illustrative and is not GIGOC’s completed facility. Supporting points remain a simple divided list beneath the image rather than individual cards.

### Section 6: Responsible Raw-Material Sourcing

**Section label**

> RESPONSIBLE SOURCING

**Heading**

> Creating Value from Suitable Wood Residues

**Content**

> GIGOC intends to prioritise suitable residues generated by legally operating wood processors and other approved biomass suppliers.

> The sourcing approach is expected to focus on materials such as sawdust, wood chips and recoverable processing residues that can be documented, prepared and used within the proposed manufacturing process.

> Supplier relationships will be expected to support traceability, lawful material origin, consistent quality and reliable delivery.

> The project’s final sourcing programme will be developed in accordance with applicable forestry, environmental and industrial requirements.

**Supporting points**

- Preference for traceable wood-processing residues
- Engagement with legally operating suppliers
- Material-quality and moisture requirements
- Documented supplier relationships
- Compliance with applicable regulations

Do not claim that all sourcing contracts have already been signed.

**Image**

- Subject: realistic sawdust, wood chips, or residues at a professionally managed sawmill or collection point.
- Temporary filename: `responsible-biomass-sourcing-placeholder.jpg`
- Aspect ratio: 3:2
- Temporary alt text: `Wood-processing residues prepared for responsible biomass production.`

Implementation note: the section uses a restrained static image arrangement with `facility-related.jpg` as the larger image and the three `raw-material-related` files beneath it. A visible caption identifies the set as illustrative, and alt text avoids presenting the scenes as confirmed GIGOC suppliers or operations. The approved sourcing commitments remain a simple divided list rather than cards.

### Section 7: Environmental and Operational Approach

**Section label**

> OUR APPROACH

**Heading**

> Responsible Industrial Development

**Content**

> GIGOC is approaching the biomass project with consideration for environmental compliance, safe material handling and responsible industrial operations.

> The proposed production system includes processes intended to support dust collection, moisture control, material containment and organised product storage.

> Environmental and social requirements will be addressed as part of the project’s regulatory preparation before full construction and operation.

> The company’s objective is to develop a facility that creates productive value from suitable biomass residues while continuously improving operational efficiency, safety and environmental performance.

**Commitments**

- Responsible material handling
- Dust-control considerations
- Safe biomass storage
- Workplace health and safety
- Regulatory and environmental preparation
- Continuous operational improvement

Do not use any of these unverified claims:

- Zero environmental impact
- Zero emissions
- Completely carbon neutral
- One hundred per cent sustainable

Implementation note: the section remains intentionally concise. It uses the first approved paragraph as a brief development-stage introduction followed by one responsive, shared-divider grid containing the six approved commitments and their supplied icons. The items do not add explanatory claims. Hover styling is limited to a subtle background change and slight icon movement.

### Section 8: Economic and Community Value

**Section label**

> EXPECTED IMPACT

**Heading**

> Supporting Local Industry and Economic Opportunity

**Introduction**

> As the project progresses, GIGOC expects the manufacturing initiative to contribute to local industrial activity and create opportunities across the biomass supply chain.

**Impact areas**

1. **Local Employment**

   The project is expected to create technical, operational, administrative, logistics and support roles as development advances.

2. **Skills Development**

   Plant operation and maintenance can support the development of practical manufacturing, safety and equipment-management skills.

3. **Local Supply Opportunities**

   Approved sawmills, biomass suppliers, transport providers and service businesses may benefit from structured commercial relationships.

4. **Industrial and Export Potential**

   The project is intended to strengthen local value addition and support Cameroon’s participation in regional and international biomass markets.

Do not publish an exact number of jobs unless management confirms it.

**Image**

- Subject: technical workers, local industrial activity, or supervised biomass handling.
- Tone: professional employment and skills development, not staged charity imagery.
- Temporary filename: `manufacturing-community-impact-placeholder.jpg`
- Aspect ratio: 3:2
- Temporary alt text: `Industrial workers supporting biomass manufacturing and local skills development.`

Implementation note: by owner direction, the first release mentions the four approved impact areas concisely in an editorial numbered list without a supporting image. No exact employment figures or confirmed commercial outcomes are stated.

### Section 9: Project Development Status

**Section label**

> PROJECT STATUS

**Heading**

> Progressing Through the Development Phase

**Content**

> The GIGOC biomass wood-pellet project is currently in its development phase. Technical planning, equipment evaluation, regulatory preparation, infrastructure assessment and financing arrangements are being undertaken before construction and commissioning.

**Status presentation**

Use a clean, semantic table or accessible structured list with this exact wording:

| Project Area | Current Status |
|---|---|
| Preliminary technical concept | Developed |
| Equipment and supplier evaluation | In progress |
| Factory and infrastructure planning | In progress |
| Regulatory and environmental preparation | In progress |
| Financing structure | Under review |
| Construction and commissioning | Pending |

**Visible clarification**

> The information presented reflects the project’s current development position and will be updated as major implementation milestones are completed.

Do not use percentage progress bars because no verified completion percentages exist.

Implementation note: the approved wording is presented in a semantic two-column table that wraps on narrow screens. The visible clarification remains directly below the table, and no percentage-based progress treatment is used.

### Section 10: Partnership Opportunities

**Section label**

> WORK WITH GIGOC

**Heading**

> Building the Project Through Responsible Partnerships

**Content**

> GIGOC welcomes discussions with credible organisations interested in contributing to the responsible development of the biomass manufacturing project.

**Relevant areas**

- Biomass and wood-residue supply
- Industrial equipment and technical services
- Engineering and infrastructure development
- Logistics and material handling
- Project financing
- Environmental and quality support
- Commercial distribution and market access

**Closing text**

> All partnership discussions will be subject to technical, legal and commercial review by GIGOC.

**Primary button**

> Discuss a Partnership

Link to the existing `/contact` page or contact form. Add a query parameter, subject field, or preselected `Manufacturing Partnership` category only if the existing contact implementation is deliberately extended to support it cleanly in the approved phase.

Implementation status: pending by owner direction. The closing contact action does not claim or identify any secured partner, buyer, investor, or agreement.

### Section 11: Newsletter and Project Updates

**Section label**

> STAY INFORMED

**Heading**

> Follow the Development of GIGOC Manufacturing

**Content**

> Receive selected updates about the development of GIGOC’s biomass manufacturing project, responsible raw-material sourcing, industrial progress and the future of biomass production in Cameroon.

**Field**

> Email address

**Button**

> Subscribe for Updates

**Consent**

> By subscribing, you agree to receive occasional updates from GIGOC. You may unsubscribe at any time.

Reuse the existing newsletter system only with the limitations documented in the repository review. Do not create a disconnected subscription system without first reporting the architecture. If no acceptable backend exists, create only the visual section during Phase 8 and clearly document the integration requirement.

Implementation note: the subscription form is intentionally omitted from the Manufacturing page body and placed beneath the shared footer’s Contact Info details. It contains one short introduction, a stacked email field, and a full-width Subscribe button. The existing `NewsletterForm` and `/api/forms/submit` email-notification workflow are reused; no separate backend is created. The repository still has no visible durable subscriber store, preference centre, or unsubscribe endpoint.

### Section 12: Final Call to Action

**Heading**

> Interested in the Future of Biomass Manufacturing in Cameroon?

**Content**

> Connect with GIGOC to learn more about the developing wood-pellet project, explore partnership opportunities or follow future project announcements.

**First button**

> Subscribe for Updates

Display the supplied `public/subscribe.png` icon. Clicking the button smoothly scrolls to the shared footer subscription form. When that form enters the viewport because of this button action, it receives one brief, subtle glow. Normal page scrolling does not trigger the glow, and reduced-motion preferences are respected.

**Second button**

> Contact GIGOC

Link to `/contact` and display the supplied `public/phone.png` icon.

Implementation note: the final call to action is presented as a wide white panel on a light background with a restrained border and subtle shadow. The final copy omits partnership language while the dedicated Partnership Opportunities section is pending. The subscription form itself is not rendered here; a small page-local client control handles the explicit scroll-and-highlight interaction.

## Footer and internal linking

Use the existing website footer.

Where contextually appropriate, link to:

- About GIGOC: `/about`
- Contact: `/contact`
- News or Updates: `/news`
- Sustainability, only if such a page later exists
- A relevant business-sector overview, only if a real route exists

Do not create empty pages to satisfy internal linking.

## Accessibility requirements

- Use semantic HTML.
- Maintain keyboard navigation.
- Preserve visible focus states for all controls and links.
- Use descriptive link and button labels.
- Add accurate alt text.
- Maintain acceptable colour contrast.
- Do not place important text inside images.
- Ensure the process section remains understandable without images.
- Ensure status information is accessible on mobile devices.
- Use a semantic table with headers when the table form is retained.
- Avoid colour-only status communication.
- Ensure fixed navigation does not obscure anchor targets.
- Keep touch targets comfortably sized.
- Respect reduced-motion preferences if any motion is introduced.
- Do not use an image alt value that claims a conceptual image is the completed GIGOC facility.

## Performance requirements

- Use `next/image`, the project’s existing image-optimisation system.
- Prevent large uncompressed images.
- Supply correct intrinsic dimensions or a reserved aspect-ratio wrapper.
- Add accurate `sizes` values.
- Avoid unnecessary animation libraries.
- Use restrained entrance animations only if the existing website pattern and accessibility needs justify them.
- Prevent layout shifting.
- Lazy-load noncritical images.
- Prioritise the hero image only.
- Keep the static page server-rendered wherever possible.
- Avoid unnecessary client-side state and JavaScript.

## Implementation workflow after approval

Do not implement multiple phases in advance unless explicitly instructed.

### Phase 1

- Route and page shell
- Navigation entry
- SEO metadata

Expected scope:

- Add `src/app/manufacturing/page.tsx` with the page shell only.
- Reuse `Navbar` and `Footer`.
- Change only the existing Manufacturing links in header and footer to `/manufacturing`.
- Add the approved page-level metadata and Open Graph text fields.
- Do not implement the hero or later sections.

### Phase 2

- Hero section

### Phase 3

- Project Overview
- What Are Biomass Wood Pellets?

### Phase 4

- Production Process

### Phase 5

- Proposed Facility
- Responsible Raw-Material Sourcing

### Phase 6

- Environmental and Operational Approach
- Economic and Community Value

### Phase 7

- Project Development Status
- Partnership Opportunities

### Phase 8

- Newsletter section
- Final call to action

### Phase 9

- Supplied image integration
- Responsive testing
- Accessibility review
- SEO review
- Final refinement

## Required procedure at the beginning of every phase

1. Re-read `MANUFACTURING_PAGE_IMPLEMENTATION_GUIDE.md` in full.
2. Inspect the existing implementation and current working tree.
3. State exactly what the phase will change.
4. Wait for approval where necessary.
5. Modify only the approved section or phase.
6. Report every file changed.
7. Confirm that unrelated website functionality was not modified.

## Verification expectations by phase

Use verification proportional to the approved changes:

- Run ESLint after TypeScript/TSX changes.
- Run a production build when route, metadata, shared navigation, form behaviour, or image integration changes.
- Check the changed route at small mobile, tablet, laptop, and wide desktop widths.
- Verify keyboard access to the navbar, dropdowns, anchors, form fields, and calls to action.
- Verify exactly one H1.
- Verify no broken links or missing local assets.
- Verify no confidential details or unapproved numerical claims appear in rendered content, metadata, alt text, source constants, or comments.
- Verify the page consistently uses development-stage language.
- Verify the fixed header does not obscure anchored content.
- Verify noncritical images are not prioritised.
- Verify the status presentation remains understandable and usable on narrow screens.

## Content and claim-control checklist

Before approving any phase, confirm:

- [ ] The facility is consistently described as proposed, planned, developing, or under development.
- [ ] No copy implies that production or commissioning has begun.
- [ ] No copy states or implies that every permit or certification has been secured.
- [ ] No buyer, investor, supplier, or international partner is presented as confirmed without management approval.
- [ ] No production capacity, contract quantity, or export contract is claimed.
- [ ] No supplier quotation, machinery price, total investment, financing detail, projection, cost, or profit is disclosed.
- [ ] No detailed model, electrical specification, factory drawing, or security arrangement is disclosed.
- [ ] No confidential agreement or regulatory/commercial document is exposed.
- [ ] No “zero impact,” “zero emissions,” “carbon neutral,” or “100% sustainable” claim appears.
- [ ] No exact job count appears without approval.
- [ ] Every external-facing partnership statement remains subject to review.
- [ ] Every image and alt text is truthful about the project’s development status.

## Initial readiness decision

The repository architecture supports the proposed `/manufacturing` route without disrupting existing pages. The cleanest approved integration is:

1. Add `src/app/manufacturing/page.tsx`.
2. Render the existing `Navbar` and `Footer`.
3. Point the existing Manufacturing item in the “Our Businesses” menu to `/manufacturing`.
4. Point the existing Manufacturing item in the footer’s “Divisions” list to `/manufacturing`.
5. Keep the page mostly server-rendered and add client behaviour only where existing forms require it.

Phase 1 is technically ready to commence after explicit approval. No Manufacturing implementation is included in this initial documentation task.

## Approved educational read-more pages

The two read-more controls on the GIGOC Biomass page now have dedicated educational routes:

- `/manufacturing/wood-pellets`
- `/manufacturing/production-process`

These routes extend the approved public information boundary without changing the development-stage
position of the Limbe project.

### What Are Wood Pellets?

**Route**

`/manufacturing/wood-pellets`

**SEO title**

`What Are Wood Pellets? | GIGOC Biomass`

**Content structure**

1. Image-led introduction and explicit project-development clarification
2. Plain-language definition of wood pellets
3. Suitable wood residues and feedstock considerations
4. Important product-quality characteristics
5. Standards and specification context
6. Responsible handling and storage
7. A clear qualification of environmental claims
8. Official technical references
9. Cross-links to the GIGOC Biomass project and production-process guide

The page must not claim that GIGOC currently manufactures, certifies or sells pellets. Product
standards are discussed as future specification considerations, not as achieved certification.

### Wood-Pellet Manufacturing Process

**Route**

`/manufacturing/production-process`

**SEO title**

`Wood-Pellet Manufacturing Process | GIGOC Biomass`

**Content structure**

1. Image-led introduction and illustration disclaimer
2. Explanation of the connected production system
3. Nine-stage educational process sequence:
   - Raw-material receipt and verification
   - Sorting and foreign-material removal
   - Primary size reduction
   - Drying and moisture control
   - Fine milling and conditioning
   - Pellet formation
   - Cooling and stabilisation
   - Screening and fines management
   - Storage, packaging and release
4. Process-wide controls
5. Product quality checkpoints
6. High-level operational safety considerations
7. Explicit GIGOC project-development context
8. Official technical references
9. Cross-links to the product guide, contact page and main project page

The process page remains intentionally non-confidential. It does not include equipment models,
electrical requirements, capacities, process settings, factory measurements or detailed layout
information.

### Research and claim controls

The educational content is informed by primary and official sources from:

- International Organization for Standardization
- United States Department of Agriculture Forest Service
- United Kingdom Forest Research
- United Kingdom Health and Safety Executive
- United States Occupational Safety and Health Administration
- Food and Agriculture Organization of the United Nations

Each page includes a visible technical-reference list linking directly to the relevant official
resource. Source material is paraphrased. No source investment estimates, production capacities or
supplier-specific equipment details are included.

### Visual and interaction decisions

- Reuse the shared `Navbar` and `Footer`.
- Keep both routes server-rendered.
- Use supplied local imagery through `next/image`; do not add external stock assets.
- Label illustrative industrial imagery so it cannot be mistaken for an operating GIGOC facility.
- Use editorial sections, divided lists and restrained call-to-action panels instead of repeated card
  grids.
- Use plain section labels without widely spaced display lettering.
- Provide semantic in-page navigation with anchor targets that account for the fixed header.
- Preserve one H1 per route, visible focus states and descriptive alt text.
