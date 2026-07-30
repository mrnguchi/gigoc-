import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const title = 'What Are Wood Pellets? | GIGOC Biomass';
const description =
  'Learn what biomass wood pellets are, how suitable wood residues are prepared, which quality characteristics matter and how pellets should be handled and stored.';

const qualityCharacteristics = [
  {
    title: 'Raw-material origin',
    description:
      'The source and condition of the wood material influence whether it is suitable for pellet production. Traceability and lawful origin are essential parts of GIGOC’s planned sourcing approach.',
  },
  {
    title: 'Moisture',
    description:
      'Moisture must be controlled during production and after packaging. Excess moisture can weaken pellets, increase breakage and reduce dependable product handling.',
  },
  {
    title: 'Mechanical durability',
    description:
      'Durability describes how well pellets resist breaking during handling and transport. More breakage creates loose material, commonly referred to as fines.',
  },
  {
    title: 'Ash and contamination',
    description:
      'Mineral content and unwanted foreign material affect product quality and suitability for an intended application, which is why feedstock inspection and screening matter.',
  },
  {
    title: 'Dimensions and bulk density',
    description:
      'Consistent dimensions and density support predictable storage, conveying, packaging and controlled fuel-feeding systems.',
  },
] as const;

const references = [
  {
    organisation: 'International Organization for Standardization',
    title: 'ISO 17225-2: Graded wood pellets',
    href: 'https://www.iso.org/standard/76088.html?browse=tc',
  },
  {
    organisation: 'USDA Forest Service',
    title: 'Wood-based energy products and pellet quality characteristics',
    href: 'https://www.fs.usda.gov/pnw/pubs/pnw_gtr845.pdf',
  },
  {
    organisation: 'Forest Research',
    title: 'Types of woodfuel',
    href: 'https://www.forestresearch.gov.uk/tools-and-resources/fthr/biomass-energy-resources/fuel/types-of-woodfuel/',
  },
  {
    organisation: 'Forest Research',
    title: 'Woodfuel storage and handling',
    href: 'https://www.forestresearch.gov.uk/tools-and-resources/fthr/biomass-energy-resources/fuel/woodfuel-production-and-supply/woodfuel-storage-and-handling/woodfuel-storage/',
  },
  {
    organisation: 'UK Health and Safety Executive',
    title: 'Safe storage of wood pellets',
    href: 'https://www.hse.gov.uk/safetybulletins/co-wood-pellets.htm',
  },
] as const;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
  },
};

export default function WoodPelletsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar />

      <section className="px-3 pb-14 pt-3 sm:px-5 sm:pb-16">
        <div className="relative mx-auto min-h-[39rem] max-w-[90rem] overflow-hidden rounded-[1.4rem] bg-[#131b22] sm:min-h-[42rem] sm:rounded-[1.75rem]">
          <Image
            src="/section 2 gallery 1.jpg"
            alt="Detailed close-up of finished biomass wood pellets."
            fill
            priority
            sizes="(max-width: 1536px) 100vw, 1440px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,35,0.88)_0%,rgba(7,18,35,0.72)_48%,rgba(7,18,35,0.42)_100%)]" />

          <div className="relative mx-auto flex min-h-[39rem] max-w-7xl flex-col justify-end px-5 pb-12 pt-32 sm:min-h-[42rem] sm:px-8 sm:pb-16 lg:px-10">
            <Link
              href="/manufacturing"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              GIGOC Biomass
            </Link>

            <div className="mt-6 flex items-center gap-2.5 text-sm font-semibold text-white/80">
              <Image
                src="/renewable-energy.png"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
                className="h-6 w-6 object-contain"
              />
              <span>Wood-pellet guide</span>
            </div>

            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              What Are Wood Pellets?
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              A practical introduction to how suitable wood residues become dense, uniform fuel
              products—and the quality and handling considerations that shape their use.
            </p>
            <p className="mt-7 border-l-2 border-[#68b887] pl-4 text-sm leading-6 text-white/72">
              GIGOC’s biomass project in Limbe is currently under development. This page explains
              the product and does not represent current commercial production.
            </p>
          </div>
        </div>
      </section>

      <nav aria-label="On this page" className="px-5 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-7 gap-y-3 border-y border-slate-200 py-5 text-sm font-medium text-[var(--text-soft)]">
          <span className="text-[var(--text-main)]">On this page</span>
          <Link className="transition hover:text-[var(--primary)]" href="#definition">
            Definition
          </Link>
          <Link className="transition hover:text-[var(--primary)]" href="#materials">
            Suitable materials
          </Link>
          <Link className="transition hover:text-[var(--primary)]" href="#quality">
            Product quality
          </Link>
          <Link className="transition hover:text-[var(--primary)]" href="#handling">
            Handling and storage
          </Link>
        </div>
      </nav>

      <section
        id="definition"
        aria-labelledby="definition-heading"
        className="scroll-mt-28 px-5 py-20 sm:px-6 sm:py-24 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <header>
            <p className="text-sm font-semibold text-[var(--primary)]">The product</p>
            <h2
              id="definition-heading"
              className="mt-4 max-w-md text-3xl font-semibold leading-tight text-[var(--text-main)] sm:text-4xl"
            >
              A compact form of processed wood biomass
            </h2>
          </header>

          <div className="space-y-6 text-base leading-8 text-[var(--text-soft)] sm:text-lg">
            <p className="text-xl font-medium leading-9 text-[var(--text-main)]">
              Wood pellets are small, dense products made by preparing suitable wood material and
              pressing it through specialised pellet-forming equipment.
            </p>
            <p>
              The raw material is reduced to a controlled particle size and moisture condition
              before pressure shapes it into a consistent cylindrical form. Heat created during
              processing helps soften the wood’s natural lignin, which contributes to binding the
              particles together as the pellets form.
            </p>
            <p>
              Compared with loose sawdust or irregular wood residues, the finished product is more
              uniform. That form can support organised storage, mechanical handling, transport and
              controlled energy applications where biomass fuel is accepted.
            </p>
          </div>
        </div>
      </section>

      <section
        id="materials"
        aria-labelledby="materials-heading"
        className="scroll-mt-28 bg-[#f2f4f1] px-5 py-20 sm:px-6 sm:py-24 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <div className="relative min-h-[30rem] overflow-hidden rounded-[1.5rem] bg-[#dfe5dd] sm:min-h-[36rem]">
            <Image
              src="/raw-material-related-3.jpg"
              alt="Clean sawdust and fine wood residues prepared for assessment as biomass feedstock."
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-[var(--primary)]">Suitable raw materials</p>
            <h2
              id="materials-heading"
              className="mt-4 text-3xl font-semibold leading-tight text-[var(--text-main)] sm:text-4xl"
            >
              Not every wood residue is automatically suitable
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-[var(--text-soft)]">
              <p>
                Pellet production can use suitable sawdust, shavings, chips and other
                wood-processing by-products. Their suitability depends on origin, cleanliness,
                moisture, particle size and the requirements of the intended pellet specification.
              </p>
              <p>
                Foreign material, chemical contamination and inconsistent feedstock can compromise
                both production and finished-product quality. Responsible sourcing therefore begins
                before material reaches the production line.
              </p>
              <p>
                GIGOC intends to prioritise documented residues from legally operating wood
                processors and other approved suppliers. The final sourcing programme remains
                subject to technical, environmental and regulatory preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="quality"
        aria-labelledby="quality-heading"
        className="scroll-mt-28 px-5 py-20 sm:px-6 sm:py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <header>
              <p className="text-sm font-semibold text-[var(--primary)]">Understanding quality</p>
              <h2
                id="quality-heading"
                className="mt-4 text-3xl font-semibold leading-tight text-[var(--text-main)] sm:text-4xl"
              >
                The characteristics that matter
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-[var(--text-soft)]">
                Pellet quality is assessed against the intended application and an agreed
                specification. Appearance alone is not enough.
              </p>
            </header>

            <dl className="divide-y divide-slate-200 border-t border-slate-200">
              {qualityCharacteristics.map((item) => (
                <div
                  key={item.title}
                  className="grid gap-3 py-7 sm:grid-cols-[0.42fr_0.58fr] sm:gap-8"
                >
                  <dt className="text-lg font-semibold text-[var(--text-main)]">{item.title}</dt>
                  <dd className="text-base leading-7 text-[var(--text-soft)]">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-16 grid overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[#0f213d] lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[23rem]">
              <Image
                src="/section 2 gallery 2.png"
                alt="Illustrative packaging equipment filling a clear bag with finished wood pellets."
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-12">
              <p className="text-sm font-semibold text-[#92c9a6]">Standards and specifications</p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Product requirements must be defined and verified
              </h3>
              <p className="mt-5 text-base leading-8 text-white/72">
                ISO 17225-2 provides quality classes and specifications for graded wood pellets used
                in industrial and non-industrial applications. A future GIGOC product specification
                would need to reflect the intended market, verified test results and applicable
                buyer or regulatory requirements.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/60">
                GIGOC is not currently claiming product certification or conformance with a
                particular quality class.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="handling"
        aria-labelledby="handling-heading"
        className="scroll-mt-28 bg-[#f2f4f1] px-5 py-20 sm:px-6 sm:py-24 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <header>
            <p className="text-sm font-semibold text-[var(--primary)]">Handling and storage</p>
            <h2
              id="handling-heading"
              className="mt-4 text-3xl font-semibold leading-tight text-[var(--text-main)] sm:text-4xl"
            >
              Keep pellets dry, contained and carefully managed
            </h2>
          </header>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-main)]">Protect from moisture</h3>
              <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                Pellets can absorb water, swell and break down. Storage and packaging should limit
                weather exposure and water ingress.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-main)]">Limit breakage and fines</h3>
              <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                Careful conveying and handling help preserve durability and reduce loose particles
                that can accumulate as dust.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-main)]">Control dust and ignition sources</h3>
              <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                Wood dust is combustible. Industrial systems require suitable containment,
                housekeeping and ignition-control measures.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-main)]">Manage enclosed storage safely</h3>
              <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                Stored pellets can create low-oxygen and carbon-monoxide risks in confined spaces.
                Ventilation, monitoring and controlled access are important safety considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="claims-heading" className="px-5 py-20 sm:px-6 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl border-l-4 border-[#5faa79] bg-[#f7faf7] px-6 py-8 sm:px-9">
          <h2 id="claims-heading" className="text-2xl font-semibold text-[var(--text-main)]">
            A responsible approach to environmental claims
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[var(--text-soft)]">
            Wood pellets should not automatically be described as zero-emission, carbon-neutral or
            completely sustainable. Environmental performance depends on factors including material
            origin, production, transport, storage and the way the fuel is used. GIGOC’s public
            communications will remain evidence-based as the project develops.
          </p>
        </div>
      </section>

      <section aria-labelledby="references-heading" className="bg-[#f2f4f1] px-5 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 id="references-heading" className="text-2xl font-semibold text-[var(--text-main)]">
            Technical references
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--text-soft)]">
            This educational overview draws on the following official standards, forestry and
            workplace-safety resources.
          </p>
          <ul className="mt-8 divide-y divide-slate-300 border-y border-slate-300">
            {references.map((reference) => (
              <li key={reference.href}>
                <Link
                  href={reference.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start justify-between gap-6 py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
                >
                  <span>
                    <span className="block text-sm text-[var(--text-soft)]">
                      {reference.organisation}
                    </span>
                    <span className="mt-1 block font-semibold text-[var(--text-main)] transition group-hover:text-[var(--primary)]">
                      {reference.title}
                    </span>
                  </span>
                  <ExternalLink
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-[var(--primary)]"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f2f4f1] px-5 pb-20 sm:px-6 sm:pb-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[1.6rem] border border-slate-200 bg-white px-6 py-10 shadow-[0_20px_50px_rgba(15,23,42,0.07)] sm:px-10 lg:grid-cols-[1fr_auto] lg:px-12">
          <div>
            <h2 className="text-2xl font-semibold leading-tight text-[var(--text-main)] sm:text-3xl">
              See how wood pellets are manufactured
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--text-soft)]">
              Follow the production sequence from feedstock receipt and preparation through
              pellet formation, cooling, screening and packaging.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/manufacturing"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[var(--text-main)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              Biomass project
            </Link>
            <Link
              href="/manufacturing/production-process"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#173c7b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              Production process
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
