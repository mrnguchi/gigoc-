import Image from 'next/image';
import Link from 'next/link';

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-5 pb-20 pt-2 sm:px-6 lg:px-10 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
        <div
          className="rounded-[2rem] border px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:px-8 sm:py-10 lg:px-10"
          style={{
            background: 'linear-gradient(180deg, rgba(248,250,252,1) 0%, rgba(241,245,249,0.92) 100%)',
            borderColor: 'rgba(148, 163, 184, 0.16)',
          }}
        >
          <p className="text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
            Why choose us
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl" style={{ color: 'var(--text-main)' }}>
            We combine vision, execution, and industry reach under one group
          </h2>
          <p className="mt-5 text-base leading-7" style={{ color: 'var(--text-soft)' }}>
            GiGOC brings together multiple business divisions to deliver projects with creativity, structure, and long-term value.
            From concept development to final execution, we focus on quality, trust, and results that move brands and businesses
            forward.
          </p>
          <p className="mt-4 text-sm leading-7 sm:text-base" style={{ color: 'var(--text-soft)' }}>
            Whether you are launching a new idea, building a brand, or expanding operations, we offer the flexibility and support
            needed to bring your project to life.
          </p>

          <Link
            href="#contact-section"
            className="mt-10 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)' }}
          >
            Start a Project
          </Link>
        </div>

        <div className="relative">
          <Image
            src="/gigoc-1.png"
            alt="Featured GiGOC project"
            width={320}
            height={300}
            className="h-auto w-full object-cover"
          />
          <div
            className="absolute left-4 top-4 max-w-[220px] rounded-2xl px-4 py-3 text-sm font-semibold text-white shadow-2xl sm:left-6 sm:top-6"
            style={{ background: 'linear-gradient(135deg, rgba(30,74,149,0.96) 0%, rgba(37,99,235,0.96) 100%)' }}
          >
            Built to deliver ambitious projects with confidence.
          </div>
        </div>
      </div>
    </section>
  );
}