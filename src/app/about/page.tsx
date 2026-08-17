import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { companyContact } from '@/data/contact';

const chiefExecutive = {
  name: 'Bill B. Gebah',
  role: 'Chief Executive Officer',
  description: 'Sets the direction for the group and oversees its long-term development.',
  image: '/GOC.jpg',
  imagePosition: 'object-[center_40%]',
};

const leadershipTeam = [
  {
    name: 'Ndifon Harrison',
    role: 'General Manager',
    description: 'Coordinates performance and execution across GiGOC businesses.',
    image: null,
    imagePosition: 'object-center',
  },
  {
    name: 'Nguchi N.',
    role: 'IT Engineer',
    description: 'Supports the group’s digital systems, infrastructure and technical work.',
    image: '/nguchi.jpg',
    imagePosition: 'object-center',
  },
  {
    name: 'Miss Blandine',
    role: 'Secretary',
    description: 'Supports communication, scheduling and office coordination.',
    image: '/Blandine.jpg',
    imagePosition: 'object-top',
  },
];

const operatingPrinciples = [
  {
    title: 'Start with a real need',
    description: 'We look for practical opportunities and build around a clear purpose, market and customer.',
  },
  {
    title: 'Build the operation',
    description: 'Ideas move forward when the right people, systems and partnerships are in place.',
  },
  {
    title: 'Stay close to the work',
    description: 'Group leadership remains involved as each business develops and takes on new responsibilities.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar />

      <section className="relative min-h-[720px] overflow-hidden bg-[#07172b] sm:min-h-[760px]">
        <Image
          src="/hero-00.png"
          alt="GiGOC corporate office overlooking a city"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,15,30,0.94)_0%,rgba(4,19,38,0.78)_48%,rgba(4,18,35,0.38)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,13,27,0.35)_0%,rgba(3,14,29,0.18)_55%,rgba(3,15,30,0.72)_100%)]" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-5 pb-24 pt-32 sm:min-h-[760px] sm:px-6 lg:px-10 lg:pt-36">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-sm font-semibold text-[#8abbff]">
              <span>About GiGOC</span>
              <span className="h-px w-16 bg-[#8abbff]/55" aria-hidden="true" />
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5rem]">
              One group. Seven sectors. Built from Cameroon.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Gebah Investment Group of Companies develops and operates businesses in manufacturing, mobility, technology, entertainment and talent, logistics, real estate and commerce.
            </p>

            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Link
                href="/#our-businesses"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#2166d1] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(10,55,130,0.28)] transition hover:bg-[#2b73df]"
              >
                Explore our businesses
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.9} />
              </Link>
              <Link
                href="#leadership"
                className="group inline-flex items-center gap-3 border-b border-white/45 pb-1 text-sm font-semibold text-white transition hover:border-white"
              >
                Meet our team
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.9} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl border-t border-slate-300 pt-8 sm:pt-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-4 text-sm font-semibold text-[#2166d1]">
                <span>Who we are</span>
                <span className="h-px w-16 bg-[#2166d1]/45" aria-hidden="true" />
              </div>
              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#17365f] sm:text-5xl lg:text-[3.5rem]">
                We build businesses, not just ideas.
              </h2>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 lg:pt-10">
              <p className="text-xl leading-8 text-[#273f60] sm:text-2xl sm:leading-9">
                GiGOC brings several businesses under one group. Each serves a different market, but all share the same leadership and long-term outlook.
              </p>
            </div>
          </div>

          <div className="mt-14 grid border-y border-slate-300 py-8 lg:mt-16 lg:grid-cols-12 lg:gap-8 lg:py-10">
            <p className="max-w-sm text-sm font-semibold text-[#2166d1] lg:col-span-3">
              Gebah Investment Group of Companies
            </p>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 lg:col-span-7 lg:col-start-6 lg:mt-0">
              <p>
                Our businesses cover property development, executive mobility, biomass manufacturing, entertainment and talent, commerce, technology and logistics.
              </p>
              <p>
                The group gives each company a common foundation while allowing its team to stay focused on the realities of its sector. We support the work through planning, operations, partnerships and shared standards.
              </p>
              <p>
                GiGOC is based in Limbe, Cameroon. We are building carefully, one business at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071a31] px-5 py-20 text-white sm:px-6 lg:px-10 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:12.5%_100%]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl border-t border-white/20 pt-8 sm:pt-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-4 text-sm font-semibold text-[#8abbff]">
                <span>How we work</span>
                <span className="h-px w-16 bg-[#8abbff]/45" aria-hidden="true" />
              </div>
              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
                A practical approach to building companies.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-white/65 sm:text-lg lg:col-span-4 lg:col-start-9">
              Different sectors require different expertise. Our approach stays consistent.
            </p>
          </div>

          <div className="mt-14 border-t border-white/15 lg:mt-16">
            {operatingPrinciples.map((principle, index) => (
              <div
                key={principle.title}
                className="grid gap-4 border-b border-white/15 py-7 transition hover:bg-white/[0.025] sm:grid-cols-[3rem_1fr] lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-8"
              >
                <span className="text-sm font-medium text-[#5ea0ff] lg:col-span-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-semibold sm:text-2xl lg:col-span-4">{principle.title}</h3>
                <p className="max-w-2xl text-sm leading-7 text-white/60 sm:col-start-2 sm:text-base lg:col-span-6 lg:col-start-7">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="scroll-mt-24 bg-[#f4f7fb] px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl border-t border-slate-300 pt-8 sm:pt-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 text-sm font-semibold text-[#2166d1]">
                <span>Leadership</span>
                <span className="h-px w-16 bg-[#2166d1]/45" aria-hidden="true" />
              </div>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#17365f] sm:text-5xl lg:text-[3.5rem]">
                The people responsible for the work.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:col-span-4 lg:col-start-9">
              GiGOC’s leadership team oversees the group and supports the work within each business.
            </p>
          </div>

          <article className="mt-14 grid border-y border-slate-300 py-7 lg:mt-16 lg:grid-cols-12 lg:items-stretch lg:gap-10 lg:py-8">
            <div className="relative min-h-[440px] overflow-hidden rounded-md bg-slate-200 sm:min-h-[560px] lg:col-span-6">
              <Image
                src={chiefExecutive.image}
                alt={chiefExecutive.name}
                fill
                className={`object-cover ${chiefExecutive.imagePosition}`}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-end py-8 lg:col-span-5 lg:col-start-8 lg:py-10">
              <p className="text-sm font-semibold text-[#2166d1]">Group leadership</p>
              <h3 className="mt-4 text-3xl font-semibold text-[#17365f] sm:text-4xl">{chiefExecutive.name}</h3>
              <p className="mt-2 text-base font-medium text-slate-500">{chiefExecutive.role}</p>
              <p className="mt-7 max-w-lg text-base leading-8 text-slate-600">{chiefExecutive.description}</p>
              <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                He works with the management team to keep the group focused, organised and ready for its next stage of growth.
              </p>
            </div>
          </article>

          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipTeam.map((member, index) => (
              <article key={member.name} className="group border-b border-slate-300 pb-6">
                <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-slate-200">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] ${member.imagePosition}`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : null}
                  <span className="absolute left-4 top-4 bg-[#071a31]/80 px-2.5 py-1.5 text-[10px] font-medium text-white backdrop-blur-sm">
                    {String(index + 2).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#17365f]">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-[#2166d1]">{member.role}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{member.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 border-y border-slate-300 py-10 lg:grid-cols-12 lg:items-center lg:py-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 text-sm font-semibold text-[#2166d1]">
              <span>Work with GiGOC</span>
              <span className="h-px w-16 bg-[#2166d1]/45" aria-hidden="true" />
            </div>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#17365f] sm:text-5xl">
              Have a project or partnership in mind?
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-7 text-slate-600">
              Tell us what you are working on. We will connect you with the right part of the group.
            </p>
            <div className="mt-7 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-md bg-[#2166d1] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2b73df]"
              >
                Contact GiGOC
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.9} />
              </Link>
              <Link
                href={`mailto:${companyContact.email}`}
                className="group inline-flex items-center gap-2 border-b border-[#17365f]/35 pb-1 text-sm font-semibold text-[#17365f] transition hover:border-[#2166d1] hover:text-[#2166d1]"
              >
                <Mail className="h-4 w-4" strokeWidth={1.8} />
                {companyContact.email}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
