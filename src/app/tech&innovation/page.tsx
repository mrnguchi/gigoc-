import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Brush,
  Code2,
  Megaphone,
  Search,
  ShoppingBag,
  Smartphone,
} from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TechHero from '@/components/tech/TechHero';

export const metadata: Metadata = {
  title: 'Tech & Innovation | GiGOC',
  description: 'Explore GiGOC digital products and technology services, from product development and design to digital growth and automation.',
};

const services = [
  {
    title: 'Web Development',
    description: 'Corporate websites, online stores and custom web platforms built for speed, clarity and long-term use.',
    icon: Code2,
  },
  {
    title: 'Graphic Design',
    description: 'Brand identities, campaign artwork and digital assets that keep communication clear and consistent.',
    icon: Brush,
  },
  {
    title: 'Mobile App Development',
    description: 'Mobile products for iOS and Android, designed around practical customer and business needs.',
    icon: Smartphone,
  },
  {
    title: 'Search Engine Optimisation',
    description: 'Technical and content improvements that help the right customers find your business organically.',
    icon: Search,
  },
  {
    title: 'Meta Advertising',
    description: 'Campaign planning, creative setup and performance management across Facebook and Instagram.',
    icon: Megaphone,
  },
  {
    title: 'Google Advertising',
    description: 'Search and display campaigns structured around relevant audiences and measurable business goals.',
    icon: ArrowUpRight,
  },
  {
    title: 'AI & Workflow Automation',
    description: 'Useful automation for repetitive work, connected tools and smoother internal processes.',
    icon: Bot,
  },
];

export default function TechInnovationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar />
      <TechHero />

      <section id="products" className="scroll-mt-24 bg-white px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl border-t border-slate-300 pt-8 sm:pt-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-4 text-sm font-semibold text-[#2166d1]">
                <span>Products in development</span>
                <span className="h-px w-16 bg-[#2166d1]/45" aria-hidden="true" />
              </div>
              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#17365f] sm:text-5xl lg:text-[3.5rem]">
                Products we are building and supporting.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:col-span-5 lg:col-start-8">
              Each product starts with a clear use case: easier mobility or more accessible commerce.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <Link
              href="/gigoc_rentals"
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition duration-300 hover:border-slate-400 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#edf3ff]">
                <Image
                  src="/G-rides card image.png"
                  alt="G-Rides product preview"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <span className="absolute left-4 top-4 border border-white/45 bg-[#071a31]/88 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                  In development
                </span>
              </div>
              <div className="flex min-h-72 flex-1 flex-col border-t border-slate-200 px-6 py-7">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2166d1]">Mobility</p>
                <div className="mt-3 flex items-start justify-between gap-5">
                  <h3 className="text-3xl font-semibold tracking-[-0.03em] text-[#17365f]">G-Rides</h3>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[#2166d1] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.8} />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  A car rental platform for finding vehicles, listing privately owned cars and requesting a driver when needed.
                </p>
                <span className="mt-auto pt-6 text-sm font-semibold text-[#17365f]">Explore G-Rides</span>
              </div>
            </Link>

            <article className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#f3f6fa] p-6">
                <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(to_right,rgba(33,102,209,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(33,102,209,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
                <span className="absolute left-4 top-4 border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-600">
                  Early development
                </span>
                <div className="relative flex h-full flex-col items-center justify-center text-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-[#2166d1] text-white">
                    <ShoppingBag className="h-7 w-7" strokeWidth={1.8} />
                  </span>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#2166d1]">Bato</p>
                </div>
              </div>
              <div className="flex min-h-72 flex-1 flex-col border-t border-slate-200 px-6 py-7">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2166d1]">Marketplace</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#17365f]">Bato</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  A general commerce marketplace for buyers and sellers. More product details will be added as development progresses.
                </p>
                <span className="mt-auto pt-6 text-sm font-semibold text-slate-400">More details coming soon</span>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-white px-5 py-20 text-[#17365f] sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl border-t border-slate-300 pt-8 sm:pt-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-4 text-sm font-semibold text-[#2166d1]">
                <span>Technology services</span>
                <span className="h-px w-16 bg-[#2166d1]/45" aria-hidden="true" />
              </div>
              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-[3.5rem]">
                Practical digital support for growing businesses.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                From the first design decision to launch and ongoing growth, our work stays focused on clear business outcomes.
              </p>
              <Link href="/contact" className="group mt-6 inline-flex items-center gap-3 border-b border-[#2166d1]/45 pb-1 text-sm font-semibold text-[#17365f] transition hover:border-[#2166d1] hover:text-[#2166d1]">
                Discuss a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.8} />
              </Link>
            </div>
          </div>

          <div className="mt-14 grid border-t border-slate-200 lg:mt-16 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className={`group grid min-h-52 grid-cols-[2.5rem_1fr] gap-4 border-b border-slate-200 py-8 transition duration-300 hover:bg-slate-50/70 sm:grid-cols-[3rem_3rem_1fr] sm:gap-5 sm:px-5 ${index % 2 === 0 ? 'lg:border-r' : ''}`}
                >
                  <span className="pt-1 text-xs font-semibold text-[#2166d1]/70">{String(index + 1).padStart(2, '0')}</span>
                  <span className="hidden h-10 w-10 items-center justify-center border border-slate-300 text-[#2166d1] transition group-hover:border-[#2166d1]/60 group-hover:bg-[#2166d1] group-hover:text-white sm:flex">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#17365f] sm:text-2xl">{service.title}</h3>
                    <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">{service.description}</p>
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
