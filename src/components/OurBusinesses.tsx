import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

type Business = {
  title: string;
  summary: string;
  icon: string;
  href?: string;
};

const businesses: Business[] = [
  {
    title: 'Real Estate',
    icon: '/real estate.png',
    summary: 'Property development and real estate opportunities focused on quality assets and long-term value.',
  },
  {
    title: 'GiGOC Rentals',
    icon: '/car-rental.png',
    href: '/gigoc_rentals',
    summary: 'Reliable executive vehicle rentals built around convenience, comfort and flexibility.',
  },
  {
    title: 'GiGOC Biomass',
    icon: '/renewable-energy.png',
    href: '/manufacturing',
    summary: 'Wood-pellet production using suitable wood-processing residues in Limbe, Cameroon.',
  },
  {
    title: 'Entertainment & Talent',
    icon: '/music and entertainment.png',
    href: '/music&entertainment',
    summary: 'Music production, live experiences, talent development and visual campaigns.',
  },
  {
    title: 'General Commerce',
    icon: '/general commerce.png',
    summary: 'Commercial activity that connects products, markets and new business opportunities.',
  },
  {
    title: 'Tech & Innovation',
    icon: '/tech and innovation.png',
    href: '/tech&innovation',
    summary: 'Digital products, automation and technology systems designed for modern operations.',
  },
  {
    title: 'Logistics',
    icon: '/logistics.png',
    summary: 'Practical logistics solutions supporting the movement of goods and reliable operations.',
  },
];

function SectorContent({ business, index }: { business: Business; index: number }) {
  return (
    <>
      <span className="w-8 shrink-0 pt-1 text-xs font-medium text-blue-300/75">
        {String(index + 1).padStart(2, '0')}
      </span>

      <span
        className="mt-0.5 h-8 w-8 shrink-0 bg-blue-400 transition-colors duration-300 group-hover:bg-white"
        style={{
          WebkitMaskImage: `url("${business.icon}")`,
          maskImage: `url("${business.icon}")`,
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
        }}
        aria-hidden="true"
      />

      <div className="min-w-0 flex-1">
        <h3 className="text-xl font-semibold tracking-[-0.015em] text-white sm:text-2xl">
          {business.title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-slate-300/75 sm:text-[15px]">
          {business.summary}
        </p>
      </div>

      {business.href ? (
        <ArrowUpRight
          className="mt-1 h-5 w-5 shrink-0 text-blue-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
          strokeWidth={1.7}
          aria-hidden="true"
        />
      ) : null}
    </>
  );
}

export default function OurBusinesses() {
  return (
    <section id="our-businesses" className="relative overflow-hidden bg-[#071a31] px-5 py-20 text-white sm:px-6 lg:px-10 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:12.5%_100%]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 border-t border-white/20 pt-8 lg:grid-cols-12 lg:gap-8 lg:pt-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 text-sm font-semibold text-blue-300">
              <span>Our Businesses</span>
              <span className="h-px w-16 bg-blue-300/45" aria-hidden="true" />
            </div>
            <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
              Seven sectors. One connected group.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:pt-10">
            <p className="max-w-xl text-lg leading-8 text-slate-200/80">
              GiGOC develops businesses across industries with a shared focus on practical execution, strong operations and long-term value.
            </p>
          </div>
        </div>

        <div className="mt-14 grid border-t border-white/15 lg:mt-16 lg:grid-cols-2">
          {businesses.map((business, index) => {
            const rowClassName = `group flex min-h-40 items-start gap-4 border-b border-white/15 px-0 py-8 transition duration-300 hover:border-blue-400/45 hover:bg-white/[0.035] sm:gap-5 sm:px-6 ${
              index % 2 === 0 ? 'lg:border-r' : ''
            }`;

            if (!business.href) {
              return (
                <div key={business.title} className={rowClassName}>
                  <SectorContent business={business} index={index} />
                </div>
              );
            }

            return (
              <Link key={business.title} href={business.href} className={rowClassName}>
                <SectorContent business={business} index={index} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
