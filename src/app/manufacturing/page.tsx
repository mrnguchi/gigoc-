import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import FooterNewsletterButton from '@/components/manufacturing/FooterNewsletterButton';
import ProductGallery from '@/components/manufacturing/ProductGallery';

const title = 'Biomass Wood-Pellet Manufacturing | GIGOC';
const description =
  'Learn about GIGOC’s developing biomass wood-pellet manufacturing project in Limbe, Cameroon, focused on responsible raw-material use, industrial development and sustainable economic opportunities.';

const productionStages = [
  {
    title: 'Raw-Material Collection',
    description: 'Suitable wood-processing residues are received from approved and traceable sources.',
  },
  {
    title: 'Chipping and Size Reduction',
    description: 'Larger wood materials are reduced into smaller particles suitable for further processing.',
  },
  {
    title: 'Drying and Moisture Control',
    description:
      'The prepared biomass is dried to achieve the moisture condition required for pellet production.',
  },
  {
    title: 'Pellet Formation',
    description:
      'The dried material is compressed through specialised pellet-forming equipment to create dense and uniform pellets.',
  },
  {
    title: 'Cooling and Screening',
    description: 'Fresh pellets are cooled and screened to remove loose particles and unsuitable material.',
  },
  {
    title: 'Storage and Packaging',
    description:
      'Qualified pellets are temporarily stored and prepared for handling, transport or distribution.',
  },
] as const;

const sourcingPoints = [
  'Preference for traceable wood-processing residues',
  'Engagement with legally operating suppliers',
  'Material-quality and moisture requirements',
  'Documented supplier relationships',
  'Compliance with applicable regulations',
] as const;

const sourcingImages = [
  {
    src: '/raw-material-related.jpg',
    alt: 'Illustrative forestry processing equipment handling wood material.',
  },
  {
    src: '/raw-material-related-2.jpg',
    alt: 'Illustrative forestry operations and material collection activity.',
  },
  {
    src: '/raw-material-related-3.jpg',
    alt: 'Sawdust and fine wood-processing residues suitable for assessment as biomass material.',
  },
] as const;

const operationalCommitments = [
  {
    title: 'Responsible material handling',
    icon: '/Responsible material handling.png',
  },
  {
    title: 'Dust-control considerations',
    icon: '/Dust-control considerations.png',
  },
  {
    title: 'Safe biomass storage',
    icon: '/Safe biomass storage.png',
  },
  {
    title: 'Workplace health and safety',
    icon: '/Workplace health and safety.png',
  },
  {
    title: 'Regulatory and environmental preparation',
    icon: '/Regulatory and environmental preparation.png',
  },
  {
    title: 'Continuous operational improvement',
    icon: '/Continuous operational improvement.png',
  },
] as const;

const economicImpactAreas = [
  {
    title: 'Local Employment',
    description:
      'The project is expected to create technical, operational, administrative, logistics and support roles as development advances.',
  },
  {
    title: 'Skills Development',
    description:
      'Plant operation and maintenance can support practical manufacturing, safety and equipment-management skills.',
  },
  {
    title: 'Local Supply Opportunities',
    description:
      'Approved sawmills, biomass suppliers, transport providers and service businesses may benefit from structured commercial relationships.',
  },
  {
    title: 'Industrial and Export Potential',
    description:
      'The project is intended to strengthen local value addition and support Cameroon’s participation in regional and international biomass markets.',
  },
] as const;

const projectStatuses = [
  { area: 'Preliminary technical concept', status: 'Developed' },
  { area: 'Equipment and supplier evaluation', status: 'In progress' },
  { area: 'Factory and infrastructure planning', status: 'In progress' },
  { area: 'Regulatory and environmental preparation', status: 'In progress' },
  { area: 'Financing structure', status: 'Under review' },
  { area: 'Construction and commissioning', status: 'Pending' },
] as const;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
  },
};

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f2f4f1]">
      <Navbar />

      <section aria-labelledby="manufacturing-hero-heading" className="px-3 pb-16 pt-3 sm:px-5 sm:pb-20">
        <div className="relative mx-auto min-h-[44rem] max-w-[90rem] overflow-hidden rounded-[1.4rem] bg-[#101820] sm:min-h-[46rem] sm:rounded-[1.75rem]">
          <Image
            src="/wood pellet hero.jpg"
            alt="Wood pellets in an industrial storage setting, representing GIGOC’s proposed manufacturing project."
            fill
            priority
            sizes="(max-width: 1536px) 100vw, 1440px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/58" />

          <div className="relative mx-auto flex min-h-[44rem] max-w-7xl flex-col items-center px-5 pb-52 pt-32 text-center sm:min-h-[46rem] sm:px-8 sm:pb-48 sm:pt-36 lg:justify-center lg:pb-44 lg:pt-32">
            <div className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase text-white/78 sm:text-sm">
              <Image
                src="/renewable-energy.png"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
                className="h-5 w-5 object-contain sm:h-6 sm:w-6"
              />
              <span>GIGOC Biomass</span>
            </div>

            <h1
              id="manufacturing-hero-heading"
              className="mt-5 max-w-[20ch] text-4xl font-semibold leading-[1.06] text-white sm:text-5xl lg:text-[3.6rem]"
            >
              Building Cameroon’s Next Biomass Manufacturing Opportunity
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              GIGOC is developing a modern biomass wood-pellet production facility in Limbe, Cameroon,
              designed to transform responsibly sourced wood-processing residues into efficient and
              commercially valuable biomass fuel products.
            </p>
          </div>
        </div>

        <div className="relative z-10 mx-auto -mt-36 max-w-5xl rounded-[1.35rem] border border-slate-200/90 bg-white px-5 py-5 shadow-[0_22px_50px_rgba(15,23,42,0.14)] sm:-mt-32 sm:rounded-[1.6rem] sm:px-7 sm:py-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-[1.25fr_0.75fr] md:items-center md:gap-8">
            <div>
              <p className="text-xs font-semibold uppercase text-[#68756b]">
                Project status
              </p>
              <p className="mt-1.5 text-lg font-semibold leading-6 text-[var(--text-main)]">
                Project currently under development
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-5 border-t border-slate-200 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <div>
                <dt className="text-xs font-medium text-[var(--text-soft)]">Proposed location</dt>
                <dd className="mt-1 text-sm font-semibold text-[var(--text-main)]">Limbe, Cameroon</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-[var(--text-soft)]">Product</dt>
                <dd className="mt-1 text-sm font-semibold text-[var(--text-main)]">Wood pellets</dd>
              </div>
            </dl>
          </div>

          <div className="mt-5 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-[var(--text-soft)]">
              A development-stage biomass manufacturing initiative by GIGOC.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#project-overview"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#173c7b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                Explore the Project
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[var(--text-main)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                Discuss a Partnership
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="project-overview"
        aria-labelledby="project-overview-heading"
        className="scroll-mt-28 bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-20">
          <header>
            <p className="text-sm font-semibold uppercase text-[var(--primary)]">
              The Project
            </p>
            <h2
              id="project-overview-heading"
              className="mt-4 text-3xl font-semibold leading-tight text-[var(--text-main)] sm:text-4xl"
            >
              Developing Value from Biomass Resources
            </h2>

            <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden">
              {/* Supplied GIGOC Biomass identity image: 2500 × 2500, displayed in a 16:9 crop. */}
              <Image
                src="/gigoc-biomass.png"
                alt="GIGOC Biomass identity mark"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover object-center"
              />
            </div>
          </header>

          <div className="border-t border-slate-200 pt-8 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
            <p className="max-w-3xl text-lg leading-8 text-[var(--text-main)] sm:text-xl sm:leading-9">
              GIGOC’s biomass manufacturing initiative is being developed to convert suitable
              wood-processing residues and other approved biomass materials into compact wood pellets.
            </p>

            <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-[var(--text-soft)]">
              <p>
                The proposed facility will bring together raw-material preparation, moisture control,
                pellet formation, cooling, screening and packaging within an organised industrial
                production process.
              </p>
              <p>
                Located in Limbe, the project is intended to support local industrial development,
                create new economic opportunities and position GIGOC within the growing renewable
                biomass value chain.
              </p>
              <p>
                The project remains in its development phase, with technical planning, regulatory
                preparation, supplier evaluation, infrastructure assessment and financing arrangements
                currently being advanced.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="wood-pellets"
        aria-labelledby="wood-pellets-heading"
        className="scroll-mt-28 bg-[var(--bg-main)] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-24">
          <div className="order-2 lg:order-1">
            <ProductGallery />
          </div>

          <div className="order-1 lg:order-2">
            <h2
              id="wood-pellets-heading"
              className="max-w-[17ch] text-3xl font-semibold leading-tight text-[var(--text-main)] sm:text-4xl"
            >
              What Are Wood Pellets?
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-main)] sm:text-xl sm:leading-9">
              Biomass wood pellets are compact fuel products created by processing and compressing
              suitable wood residues into small, uniform forms.
            </p>

            <div className="mt-6 max-w-2xl space-y-5 text-base leading-8 text-[var(--text-soft)]">
              <p>
                Materials such as sawdust and processed wood residues are reduced to the required size,
                dried to a controlled moisture level and compressed under pressure. The resulting
                pellets are easier to handle, store and transport than loose biomass materials.
              </p>
              <p>
                Their consistent shape and density make them suitable for controlled heating and energy
                applications where biomass fuel is accepted.
              </p>
            </div>

            {/* The supporting SEO page will be implemented in a later phase. */}
            <Link
              href="/manufacturing/wood-pellets"
              aria-label="Read more about wood pellets"
              className="mt-8 inline-flex min-h-11 items-center gap-2.5 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-[var(--text-main)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              Read More
              <Image
                src="/read more.png"
                alt=""
                width={22}
                height={22}
                aria-hidden="true"
                className="h-[1.15rem] w-[1.15rem] object-contain"
              />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="production-process"
        aria-labelledby="production-process-heading"
        className="scroll-mt-28 bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 xl:gap-24">
          <header>
            <p className="text-sm font-semibold uppercase text-[var(--primary)]">
              Wood Pellet Manufacturing Process
            </p>
            <h2
              id="production-process-heading"
              className="mt-4 max-w-[16ch] text-3xl font-semibold leading-tight text-[var(--text-main)] sm:text-4xl"
            >
              From Wood Residue to Finished Pellets
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-soft)]">
              The proposed manufacturing process is designed to convert suitable biomass residues into
              consistent finished pellets through a controlled sequence of preparation, production and
              quality-handling stages.
            </p>

            {/* The supporting process page will be implemented later. */}
            <Link
              href="/manufacturing/production-process"
              aria-label="Read more about the wood-pellet production process"
              className="mt-8 inline-flex min-h-11 items-center gap-2.5 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-[var(--text-main)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              Read More
              <Image
                src="/read more.png"
                alt=""
                width={22}
                height={22}
                aria-hidden="true"
                className="h-[1.15rem] w-[1.15rem] object-contain"
              />
            </Link>
          </header>

          <ol className="border-b border-slate-200">
            {productionStages.map((stage, index) => (
              <li
                key={stage.title}
                className="grid grid-cols-[2.75rem_1fr] gap-4 border-t border-slate-200 py-6 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:py-7"
              >
                <span aria-hidden="true" className="pt-0.5 text-sm font-semibold text-[var(--primary)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="grid gap-2 md:grid-cols-[0.82fr_1.18fr] md:gap-8">
                  <h3 className="text-lg font-semibold leading-7 text-[var(--text-main)]">
                    {stage.title}
                  </h3>
                  <p className="text-base leading-7 text-[var(--text-soft)]">{stage.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="proposed-facility"
        aria-labelledby="proposed-facility-heading"
        className="scroll-mt-28 bg-[var(--bg-main)] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase text-[var(--primary)]">Planned Facility</p>
            <h2
              id="proposed-facility-heading"
              className="mt-4 max-w-[18ch] text-3xl font-semibold leading-tight text-[var(--text-main)] sm:text-4xl"
            >
              An Integrated Biomass Production Facility in Limbe
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-main)] sm:text-xl sm:leading-9">
              The proposed GIGOC facility is being planned as an integrated industrial operation
              covering biomass preparation, drying, pellet production, cooling, screening, storage and
              packaging.
            </p>

            <div className="mt-6 max-w-2xl space-y-5 text-base leading-8 text-[var(--text-soft)]">
              <p>
                The project’s technical configuration is being evaluated to support dependable
                material flow, workplace safety, dust management, operational efficiency and
                consistent product handling.
              </p>
              <p>
                Final construction, equipment installation and commissioning will proceed only after
                the required technical, financial and regulatory preparations have been completed.
              </p>
            </div>
          </div>

          <div>
            <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-slate-300 bg-slate-800">
              {/* Supplied illustrative facility image: 1199 × 678, displayed at 16:9. */}
              <Image
                src="/facility-related.jpg"
                alt="Illustrative biomass material-handling facility representing the type of operation under consideration, not GIGOC’s completed facility."
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-slate-950/45" />
              <p className="absolute inset-x-6 bottom-6 text-sm font-medium leading-6 text-white sm:inset-x-8 sm:bottom-8">
                Facility planning in progress — illustration only.
              </p>
            </div>

            <ul className="mt-8 border-t border-slate-300 text-sm leading-6 text-[var(--text-main)]">
              {[
                'Planned industrial production workflow',
                'Integrated material preparation and pellet production',
                'Dust-control and material-handling considerations',
                'Structured storage and packaging process',
                'Development subject to engineering and regulatory confirmation',
              ].map((point) => (
                <li key={point} className="border-b border-slate-300 py-3.5">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="responsible-sourcing"
        aria-labelledby="responsible-sourcing-heading"
        className="scroll-mt-28 bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16 xl:gap-20">
          <figure className="order-2 lg:order-1">
            <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-200">
              <Image
                src="/facility-related.jpg"
                alt="Illustrative biomass storage and material-handling site."
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover object-center"
              />
            </div>

            <div className="mt-3 grid grid-cols-3 gap-3 sm:gap-4">
              {sourcingImages.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-square overflow-hidden rounded-[1rem] border border-slate-200 bg-slate-200"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 33vw, 17vw"
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>

            <figcaption className="mt-4 text-sm leading-6 text-[var(--text-soft)]">
              Illustrative sourcing and material-handling scenes.
            </figcaption>
          </figure>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase text-[var(--primary)]">
              Responsible Sourcing
            </p>
            <h2
              id="responsible-sourcing-heading"
              className="mt-4 max-w-[17ch] text-3xl font-semibold leading-tight text-[var(--text-main)] sm:text-4xl"
            >
              Creating Value from Suitable Wood Residues
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-main)] sm:text-xl sm:leading-9">
              GIGOC intends to prioritise suitable residues generated by legally operating wood
              processors and other approved biomass suppliers.
            </p>

            <div className="mt-6 max-w-2xl space-y-5 text-base leading-8 text-[var(--text-soft)]">
              <p>
                The sourcing approach is expected to focus on materials such as sawdust, wood chips
                and recoverable processing residues that can be documented, prepared and used within
                the proposed manufacturing process.
              </p>
              <p>
                Supplier relationships will be expected to support traceability, lawful material
                origin, consistent quality and reliable delivery.
              </p>
              <p>
                The project’s final sourcing programme will be developed in accordance with applicable
                forestry, environmental and industrial requirements.
              </p>
            </div>

            <ul className="mt-8 border-t border-slate-300 text-sm leading-6 text-[var(--text-main)]">
              {sourcingPoints.map((point) => (
                <li key={point} className="border-b border-slate-300 py-3.5">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="environmental-approach"
        aria-labelledby="environmental-approach-heading"
        className="scroll-mt-28 bg-[var(--bg-main)] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
            <header>
              <p className="text-sm font-semibold uppercase text-[var(--primary)]">Our Approach</p>
              <h2
                id="environmental-approach-heading"
                className="mt-4 max-w-[18ch] text-3xl font-semibold leading-tight text-[var(--text-main)] sm:text-4xl"
              >
                Responsible Industrial Development
              </h2>
            </header>

            <p className="max-w-2xl text-base leading-8 text-[var(--text-soft)] lg:justify-self-end">
              GIGOC is approaching the biomass project with consideration for environmental
              compliance, safe material handling and responsible industrial operations.
            </p>
          </div>

          <ul className="mt-12 grid overflow-hidden rounded-[1.25rem] border-l border-t border-slate-300 bg-white sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {operationalCommitments.map((commitment) => (
              <li
                key={commitment.title}
                className="group flex min-h-36 items-center gap-5 border-b border-r border-slate-300 p-6 transition-colors duration-200 hover:bg-[#f3f7f3] sm:p-7"
              >
                <Image
                  src={commitment.icon}
                  alt=""
                  width={52}
                  height={52}
                  aria-hidden="true"
                  className="h-12 w-12 shrink-0 object-contain transition-transform duration-200 motion-safe:group-hover:-translate-y-0.5 sm:h-[3.25rem] sm:w-[3.25rem]"
                />
                <span className="text-base font-semibold leading-6 text-[var(--text-main)]">
                  {commitment.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="expected-impact"
        aria-labelledby="expected-impact-heading"
        className="scroll-mt-28 bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 xl:gap-24">
          <header>
            <p className="text-sm font-semibold uppercase text-[var(--primary)]">Expected Impact</p>
            <h2
              id="expected-impact-heading"
              className="mt-4 max-w-[18ch] text-3xl font-semibold leading-tight text-[var(--text-main)] sm:text-4xl"
            >
              Supporting Local Industry and Economic Opportunity
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-soft)]">
              As the project progresses, GIGOC expects the manufacturing initiative to contribute to
              local industrial activity and create opportunities across the biomass supply chain.
            </p>
          </header>

          <ol className="border-t border-slate-300">
            {economicImpactAreas.map((area, index) => (
              <li
                key={area.title}
                className="grid gap-3 border-b border-slate-300 py-6 sm:grid-cols-[2.5rem_11rem_1fr] sm:gap-5 sm:py-7"
              >
                <span aria-hidden="true" className="text-sm font-semibold text-[var(--primary)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-base font-semibold leading-7 text-[var(--text-main)]">
                  {area.title}
                </h3>
                <p className="text-base leading-7 text-[var(--text-soft)]">{area.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="project-status"
        aria-labelledby="project-status-heading"
        className="scroll-mt-28 bg-[var(--bg-main)] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 xl:gap-24">
          <header>
            <p className="text-sm font-semibold uppercase text-[var(--primary)]">Project Status</p>
            <h2
              id="project-status-heading"
              className="mt-4 max-w-[17ch] text-3xl font-semibold leading-tight text-[var(--text-main)] sm:text-4xl"
            >
              Progressing Through the Development Phase
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-soft)]">
              Technical planning, equipment evaluation, regulatory preparation, infrastructure
              assessment and financing arrangements are being undertaken before construction and
              commissioning.
            </p>
          </header>

          <div>
            <div className="overflow-hidden rounded-[1.25rem] border border-slate-300 bg-white">
              <table className="w-full table-fixed border-collapse text-left">
                <caption className="sr-only">
                  Current development status of the GIGOC biomass wood-pellet project
                </caption>
                <thead>
                  <tr className="border-b border-slate-300 bg-slate-100">
                    <th
                      scope="col"
                      className="w-[64%] px-4 py-4 text-sm font-semibold text-[var(--text-main)] sm:px-6"
                    >
                      Project Area
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-4 text-sm font-semibold text-[var(--text-main)] sm:px-6"
                    >
                      Current Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projectStatuses.map((item) => (
                    <tr key={item.area} className="border-b border-slate-200 last:border-b-0">
                      <th
                        scope="row"
                        className="px-4 py-4 text-sm font-medium leading-6 text-[var(--text-main)] sm:px-6 sm:py-5"
                      >
                        {item.area}
                      </th>
                      <td className="px-4 py-4 text-sm font-semibold leading-6 text-[var(--primary)] sm:px-6 sm:py-5">
                        {item.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-5 border-l-2 border-[var(--primary)] pl-4 text-sm leading-6 text-[var(--text-soft)]">
              The information presented reflects the project’s current development position and will
              be updated as major implementation milestones are completed.
            </p>
          </div>
        </div>
      </section>

      <section
        id="manufacturing-cta"
        aria-labelledby="manufacturing-final-cta-heading"
        className="bg-[var(--bg-main)] px-5 pb-20 sm:px-6 sm:pb-24 lg:px-10 lg:pb-28"
      >
        <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-slate-200 bg-white px-6 py-10 shadow-[0_18px_55px_rgba(15,23,42,0.09)] sm:px-9 sm:py-12 lg:px-12 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
            <div>
              <h2
                id="manufacturing-final-cta-heading"
                className="max-w-3xl text-2xl font-semibold leading-tight text-[var(--text-main)] sm:text-3xl"
              >
                Interested in the Future of Biomass Manufacturing in Cameroon?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-soft)]">
                Connect with GIGOC to learn more about the developing wood-pellet project or follow
                future project announcements.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <FooterNewsletterButton />
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#173c7b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                <Image
                  src="/phone.png"
                  alt=""
                  width={19}
                  height={19}
                  aria-hidden="true"
                  className="h-[1.15rem] w-[1.15rem] object-contain"
                />
                Contact GIGOC
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
