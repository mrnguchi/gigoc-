import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Section2() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl border-t border-slate-300 pt-8 sm:pt-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 text-sm font-semibold text-[#2166d1]">
              <span>Our Direction</span>
              <span className="h-px w-16 bg-[#2166d1]/45" aria-hidden="true" />
            </div>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#17365f] sm:text-5xl lg:text-[3.5rem]">
              A multi-sector vision, built around one direction.
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
            <p className="max-w-2xl text-xl leading-8 text-[#273f60] sm:text-2xl sm:leading-9">
              GiGOC brings businesses from different industries under one group, creating a stronger foundation for each venture to grow.
            </p>

            <div className="mt-8 border-l-2 border-[#2166d1] pl-5 sm:pl-7">
              <p className="max-w-2xl text-base leading-8 text-slate-600">
                This structure allows knowledge, resources and opportunities to move more effectively between our businesses—from manufacturing and mobility to entertainment and talent, technology, logistics and commerce.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Our focus is practical: develop capable businesses, strengthen their operations and create value that can last.
              </p>
            </div>

            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-3 border-b border-[#17365f]/45 pb-1 text-sm font-semibold text-[#17365f] transition hover:border-[#2166d1] hover:text-[#2166d1]"
            >
              Learn about GiGOC
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
