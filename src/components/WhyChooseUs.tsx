import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const reasons = [
  {
    title: 'A clear direction',
    description: 'Every GiGOC business follows the same standards and long-term outlook, while staying focused on its own market.',
  },
  {
    title: 'Support where it matters',
    description: 'We help our teams with planning, operations and partnerships, then stay involved as the work moves forward.',
  },
  {
    title: 'Cameroon is home',
    description: 'We know the market because we work here. That understanding shapes the opportunities we pursue and the people we serve.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl border-t border-slate-300 pt-8 sm:pt-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 text-sm font-semibold text-[#2166d1]">
              <span>Why GiGOC</span>
              <span className="h-px w-16 bg-[#2166d1]/45" aria-hidden="true" />
            </div>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#17365f] sm:text-5xl lg:text-[3.5rem]">
              We stay involved in every business we build.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:pt-10">
            <p className="max-w-xl text-xl leading-8 text-[#273f60] sm:text-2xl sm:leading-9">
              GiGOC is more than a collection of companies. We work closely with each team, helping them make sound decisions, run well and grow responsibly.
            </p>
          </div>
        </div>

        <div className="mt-14 grid items-stretch gap-10 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <figure className="relative min-h-[420px] overflow-hidden rounded-md bg-slate-200 sm:min-h-[520px] lg:min-h-0">
            <Image
              src="/GOC.jpg"
              alt="Bill B. Gebah, Chief Executive Officer of GiGOC"
              fill
              className="object-cover object-[center_42%]"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071a31]/90 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 text-white sm:p-8">
              <div>
                <p className="text-lg font-semibold">Bill B. Gebah</p>
                <p className="mt-1 text-sm text-white/70">Chief Executive Officer</p>
              </div>
              <span className="hidden text-xs text-white/55 sm:block">Group leadership</span>
            </figcaption>
          </figure>

          <div className="flex flex-col">
            <div className="border-t border-slate-300">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="grid gap-4 border-b border-slate-300 py-7 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-8"
                >
                  <span className="text-sm font-medium text-[#2166d1]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-[#17365f] sm:text-2xl">{reason.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto flex flex-col items-start gap-5 pt-8 sm:flex-row sm:items-center">
              <Link
                href="#contact-section"
                className="group inline-flex items-center gap-3 rounded-md bg-[#2166d1] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(33,102,209,0.2)] transition hover:bg-[#2b73df]"
              >
                Discuss a project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.9} />
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 border-b border-[#17365f]/40 pb-1 text-sm font-semibold text-[#17365f] transition hover:border-[#2166d1] hover:text-[#2166d1]"
              >
                Meet the team
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
