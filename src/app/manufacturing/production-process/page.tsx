import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const title = 'Wood-Pellet Manufacturing Process | GIGOC Biomass';
const description =
  'Follow the wood-pellet manufacturing process from raw-material receipt and moisture control through pellet formation, cooling, screening, storage and packaging.';

const productionStages = [
  {
    title: 'Raw-material receipt and verification',
    description:
      'Suitable wood-processing residues are received, documented and checked against defined sourcing and material requirements. Origin, contamination, moisture and general condition are considered before material enters production.',
  },
  {
    title: 'Sorting and foreign-material removal',
    description:
      'The material is screened so that unsuitable pieces and foreign objects can be separated. This protects downstream equipment and supports a more consistent feedstock.',
  },
  {
    title: 'Primary size reduction',
    description:
      'Larger material is chipped or ground into smaller particles. A controlled particle range supports more dependable drying, milling and pellet formation.',
  },
  {
    title: 'Drying and moisture control',
    description:
      'Prepared biomass is dried toward the moisture condition required by the selected production system. Moisture is monitored because material that is too wet or too dry can affect formation and finished-pellet quality.',
  },
  {
    title: 'Fine milling and conditioning',
    description:
      'The dried material is milled to a more uniform size. Depending on the approved process design and feedstock, controlled conditioning may be used to prepare the material for pressing.',
  },
  {
    title: 'Pellet formation',
    description:
      'Prepared biomass is compressed through openings in a pellet die. Pressure and process heat help the particles consolidate into dense, cylindrical pellets.',
  },
  {
    title: 'Cooling and stabilisation',
    description:
      'Fresh pellets leave the forming stage warm and comparatively soft. Controlled cooling lowers their temperature and helps them harden before further handling.',
  },
  {
    title: 'Screening and fines management',
    description:
      'Cooled pellets are screened to separate loose particles and broken material. Fines are managed within the approved production and quality-control procedure.',
  },
  {
    title: 'Storage, packaging and release',
    description:
      'Qualified pellets are protected from moisture and unnecessary breakage while awaiting packaging, bulk handling or distribution. Product release depends on the required checks and records.',
  },
] as const;

const processControls = [
  {
    title: 'Material traceability',
    description: 'Document approved sources and preserve material records through receipt and use.',
  },
  {
    title: 'Moisture management',
    description: 'Monitor moisture during preparation and protect finished pellets from water exposure.',
  },
  {
    title: 'Contamination control',
    description: 'Inspect and screen incoming material to remove unsuitable or foreign matter.',
  },
  {
    title: 'Dust management',
    description: 'Contain dust at transfer points and support disciplined housekeeping.',
  },
  {
    title: 'Product verification',
    description: 'Assess agreed characteristics before pellets are approved for storage or dispatch.',
  },
  {
    title: 'Safe material flow',
    description: 'Plan movement, access and storage so people and materials can be managed safely.',
  },
] as const;

const references = [
  {
    organisation: 'USDA Forest Service',
    title: 'Wood pellet manufacturing and market overview',
    href: 'https://www.fs.usda.gov/pnw/pubs/pnw_gtr861.pdf',
  },
  {
    organisation: 'Forest Research',
    title: 'Wood pellet production',
    href: 'https://cdn.forestresearch.gov.uk/2022/02/fr_bec_wood_pellets_production_ipin_1508_2011.pdf',
  },
  {
    organisation: 'Food and Agriculture Organization of the United Nations',
    title: 'Biomass densification overview',
    href: 'https://www.fao.org/4/t0275e/T0275E04.htm',
  },
  {
    organisation: 'US Occupational Safety and Health Administration',
    title: 'Combustible dust in industry',
    href: 'https://obis.osha.gov/Publications/3371combustible-dust.html',
  },
  {
    organisation: 'UK Health and Safety Executive',
    title: 'Safe storage of wood pellets',
    href: 'https://www.hse.gov.uk/safetybulletins/co-wood-pellets.htm',
  },
  {
    organisation: 'International Organization for Standardization',
    title: 'ISO 17225-2: Graded wood pellets',
    href: 'https://www.iso.org/standard/76088.html?browse=tc',
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

export default function ProductionProcessPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar />

      <section className="px-3 pb-14 pt-3 sm:px-5 sm:pb-16">
        <div className="relative mx-auto min-h-[39rem] max-w-[90rem] overflow-hidden rounded-[1.4rem] bg-[#131b22] sm:min-h-[42rem] sm:rounded-[1.75rem]">
          <Image
            src="/facility-related.jpg"
            alt="Illustrative biomass material-handling facility used to explain the proposed production process."
            fill
            priority
            sizes="(max-width: 1536px) 100vw, 1440px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,35,0.91)_0%,rgba(7,18,35,0.75)_48%,rgba(7,18,35,0.48)_100%)]" />

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
              <span>Process guide</span>
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Wood-Pellet Manufacturing Process
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              From documented raw-material receipt to finished-product handling, pellet production
              depends on an organised sequence of preparation, control and verification.
            </p>
            <p className="mt-7 border-l-2 border-[#68b887] pl-4 text-sm leading-6 text-white/72">
              Industry illustration only. GIGOC’s Limbe facility is still being planned and the
              final process remains subject to engineering and regulatory confirmation.
            </p>
          </div>
        </div>
      </section>

      <nav aria-label="On this page" className="px-5 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-7 gap-y-3 border-y border-slate-200 py-5 text-sm font-medium text-[var(--text-soft)]">
          <span className="text-[var(--text-main)]">On this page</span>
          <Link className="transition hover:text-[var(--primary)]" href="#process">
            Process stages
          </Link>
          <Link className="transition hover:text-[var(--primary)]" href="#controls">
            Process controls
          </Link>
          <Link className="transition hover:text-[var(--primary)]" href="#quality-checks">
            Quality checks
          </Link>
          <Link className="transition hover:text-[var(--primary)]" href="#safety">
            Operational safety
          </Link>
        </div>
      </nav>

      <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <header>
            <p className="text-sm font-semibold text-[var(--primary)]">How the process works</p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight text-[var(--text-main)] sm:text-4xl">
              A connected production system
            </h2>
          </header>
          <div className="space-y-6 text-base leading-8 text-[var(--text-soft)] sm:text-lg">
            <p className="text-xl font-medium leading-9 text-[var(--text-main)]">
              Pellet production is more than a single pressing operation. Each stage prepares the
              material for the next and influences finished-product consistency.
            </p>
            <p>
              The exact configuration depends on the feedstock, intended product specification,
              site conditions and approved engineering design. A dependable process therefore
              combines physical equipment with sampling, records, maintenance, safety controls and
              trained operators.
            </p>
            <p>
              The sequence below explains a typical industrial approach. It is not a final layout
              or equipment specification for GIGOC’s proposed facility.
            </p>
          </div>
        </div>
      </section>

      <section
        id="process"
        aria-labelledby="process-heading"
        className="scroll-mt-28 bg-[#f2f4f1] px-5 py-20 sm:px-6 sm:py-24 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
          <header className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-sm font-semibold text-[var(--primary)]">Production sequence</p>
            <h2
              id="process-heading"
              className="mt-4 max-w-sm text-3xl font-semibold leading-tight text-[var(--text-main)] sm:text-4xl"
            >
              From residue to finished pellets
            </h2>
            <p className="mt-6 max-w-sm text-base leading-7 text-[var(--text-soft)]">
              Nine connected stages provide a clear view of the proposed production logic without
              disclosing equipment models, capacities or factory-layout details.
            </p>
          </header>

          <ol className="divide-y divide-slate-300 border-y border-slate-300">
            {productionStages.map((stage, index) => (
              <li key={stage.title} className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr] sm:gap-7">
                <span className="text-sm font-semibold text-[var(--primary)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl font-semibold leading-7 text-[var(--text-main)]">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                    {stage.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="controls"
        aria-labelledby="controls-heading"
        className="scroll-mt-28 px-5 py-20 sm:px-6 sm:py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <header>
              <p className="text-sm font-semibold text-[var(--primary)]">Across every stage</p>
              <h2
                id="controls-heading"
                className="mt-4 text-3xl font-semibold leading-tight text-[var(--text-main)] sm:text-4xl"
              >
                Process controls connect the full operation
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-[var(--text-soft)]">
                These controls are not isolated tasks. They support the movement of material from
                receipt through product release.
              </p>
            </header>

            <dl className="grid border-t border-slate-200 sm:grid-cols-2">
              {processControls.map((control, index) => (
                <div
                  key={control.title}
                  className={`border-b border-slate-200 py-7 ${
                    index % 2 === 0 ? 'sm:pr-8' : 'sm:border-l sm:pl-8'
                  }`}
                >
                  <dt className="text-lg font-semibold text-[var(--text-main)]">{control.title}</dt>
                  <dd className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                    {control.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="mt-16 overflow-hidden rounded-[1.5rem] bg-[#0f213d]">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[28rem]">
                <Image
                  src="/section 2 gallery 2.png"
                  alt="Illustrative equipment packaging finished biomass wood pellets."
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex flex-col justify-center px-6 py-9 text-white sm:px-10 lg:px-12">
                <p className="text-sm font-semibold text-[#92c9a6]">Illustrative equipment</p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
                  Packaging follows production and product checks
                </h3>
                <p className="mt-5 text-base leading-8 text-white/72">
                  Packaging is planned around the required product format, protection from moisture,
                  safe handling and market needs. The pictured equipment is an industry example and
                  is not presented as installed GIGOC machinery.
                </p>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      <section
        id="quality-checks"
        aria-labelledby="quality-checks-heading"
        className="scroll-mt-28 bg-[#f2f4f1] px-5 py-20 sm:px-6 sm:py-24 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-20">
          <header>
            <p className="text-sm font-semibold text-[var(--primary)]">Quality checkpoints</p>
            <h2
              id="quality-checks-heading"
              className="mt-4 max-w-md text-3xl font-semibold leading-tight text-[var(--text-main)] sm:text-4xl"
            >
              Verification begins before pellet formation
            </h2>
          </header>

          <div className="space-y-9">
            <div className="border-l-2 border-[#5faa79] pl-6">
              <h3 className="text-xl font-semibold text-[var(--text-main)]">Incoming material</h3>
              <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                Supplier documentation, material origin, contamination, particle condition and
                moisture are considered at receipt.
              </p>
            </div>
            <div className="border-l-2 border-[#5faa79] pl-6">
              <h3 className="text-xl font-semibold text-[var(--text-main)]">In-process control</h3>
              <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                Particle preparation, moisture and operating conditions are monitored so material
                remains within the approved production procedure.
              </p>
            </div>
            <div className="border-l-2 border-[#5faa79] pl-6">
              <h3 className="text-xl font-semibold text-[var(--text-main)]">Finished product</h3>
              <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                Relevant checks may cover dimensions, moisture, durability, fines, bulk density,
                ash and other characteristics required by the intended specification.
              </p>
            </div>
            <div className="border-l-2 border-[#5faa79] pl-6">
              <h3 className="text-xl font-semibold text-[var(--text-main)]">Records and release</h3>
              <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                Sampling, results and product identification support release decisions and
                traceability. The final GIGOC quality plan will be defined during project
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="safety"
        aria-labelledby="safety-heading"
        className="scroll-mt-28 px-5 py-20 sm:px-6 sm:py-24 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <header>
            <p className="text-sm font-semibold text-[var(--primary)]">Operational safety</p>
            <h2
              id="safety-heading"
              className="mt-4 max-w-md text-3xl font-semibold leading-tight text-[var(--text-main)] sm:text-4xl"
            >
              Safety must be designed into the process
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[var(--text-soft)]">
              Detailed controls will depend on the approved facility design and risk assessments.
            </p>
          </header>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-main)]">Combustible wood dust</h3>
              <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                Size reduction, transfer and screening can generate dust. Collection, containment,
                housekeeping and ignition-source controls are central considerations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-main)]">Heat and fire prevention</h3>
              <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                Drying, pressing and stored biomass require monitoring, maintenance and
                appropriately designed fire-prevention and response measures.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-main)]">Machinery and movement</h3>
              <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                Guarding, isolation procedures, controlled access and safe traffic routes help
                manage risks around moving equipment and material handling.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-main)]">Enclosed pellet storage</h3>
              <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                Stored pellets can emit carbon monoxide and reduce oxygen in confined spaces.
                Ventilation, monitoring, training and controlled entry are important.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f213d] px-5 py-16 text-white sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold text-[#92c9a6]">GIGOC project context</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              A proposed process, not an operating factory
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-white/72">
            <p>
              GIGOC is assessing the technical configuration, suppliers, infrastructure,
              environmental requirements and financing structure for a proposed facility in Limbe.
              Final equipment selection, construction and commissioning remain pending.
            </p>
            <p>
              This page communicates the intended production logic at a responsible public level. It
              does not confirm installed machinery, production capacity, certification or commercial
              output.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="references-heading" className="bg-[#f2f4f1] px-5 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 id="references-heading" className="text-2xl font-semibold text-[var(--text-main)]">
            Technical references
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--text-soft)]">
            This process overview draws on the following official forestry, standards and
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
              Learn more about the finished product
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--text-soft)]">
              Explore wood-pellet materials, quality characteristics and responsible storage and
              handling considerations.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[var(--text-main)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              Contact GIGOC
            </Link>
            <Link
              href="/manufacturing/wood-pellets"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#173c7b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              What are wood pellets?
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
