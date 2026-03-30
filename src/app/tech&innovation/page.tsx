import Image from 'next/image';
import Link from 'next/link';
import { Boxes, Code2, Cpu } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const highlights = [
  {
    title: 'Development',
    subtitle: 'Web, product, and systems delivery',
    icon: Code2,
  },
  {
    title: 'Solutions',
    subtitle: 'Business-focused digital execution',
    icon: Boxes,
  },
  {
    title: 'Innovation',
    subtitle: 'Scalable tools for modern growth',
    icon: Cpu,
  },
];

export default function TechInnovationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--bg-main)]">
      <Navbar />

      <section className="relative px-0 pt-24 md:pt-30">
        <div className="absolute inset-0">
          <Image src="/hero-00.png" alt="GiGOC Tech and Innovation hero background" fill className="object-cover object-center" sizes="100vw" priority />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(4,10,24,0.92)_0%,rgba(8,18,36,0.8)_48%,rgba(19,63,145,0.62)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_26%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-6 md:grid-cols-[1.02fr_0.98fr] md:items-center md:px-4 md:py-18 lg:gap-12">
          <div className="flex flex-col gap-5">
            <div
              className="inline-flex w-fit items-center self-center rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.22em] uppercase text-white/80 md:self-start"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderColor: 'rgba(255, 255, 255, 0.12)',
              }}
            >
              GiGOC Tech & Innovation
            </div>

            <h1 className="max-w-[15ch] text-center text-4xl font-semibold leading-[1.02] text-white  sm:text-4xl md:max-w-[16ch] md:text-left md:text-5xl">
              We develop digital products and systems built for growth
            </h1>

            <p className="max-w-[44rem] text-center text-base leading-8 text-white/76 md:text-left md:text-lg">
              GiGOC&apos;s Tech sector focuses on development that solves real business problems. From websites, mobile apps, product design, and digital infrastructure.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row md:gap-4">
              <Link
                href="/contact"
                className="w-full rounded-full px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_35px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 sm:w-auto sm:px-8 md:text-base"
                style={{ background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)' }}
              >
                Build With Our Team
              </Link>
              <Link
                href="#"
                className="w-full rounded-full border px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:px-8 md:text-base"
                style={{ borderColor: 'rgba(255, 255, 255, 0.18)' }}
              >
                Explore Solutions
              </Link>
            </div>

            <div
              className="grid w-full max-w-[60rem] divide-y divide-white/12 overflow-hidden rounded-[1.75rem] border sm:grid-cols-3 sm:divide-x sm:divide-y-0"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.12)',
              }}
            >
              {highlights.map((highlight) => {
                const Icon = highlight.icon;

                return (
                  <div key={highlight.title} className="px-4 py-4 sm:px-5 sm:py-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)' }}>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-white sm:h-10 sm:w-10">
                      <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" strokeWidth={2.1} />
                    </span>
                    <p className="mt-2.5 text-[1.65rem] font-semibold text-white md:text-[1.8rem]">{highlight.title}</p>
                    <p className="mt-1.5 text-[10px] leading-5 text-white/70 md:text-xs">{highlight.subtitle}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/tech-hero-image.png"
              alt="GiGOC tech development showcase"
              width={980}
              height={980}
              className="h-auto w-full max-w-[33rem] object-contain"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
