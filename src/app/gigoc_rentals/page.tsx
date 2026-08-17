import { ArrowLeft, Menu, X } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import RentalsWaitlistForm from '@/components/forms/RentalsWaitlistForm';
import RentalsFeatureShowcase from '@/components/rentals/RentalsFeatureShowcase';

export const metadata: Metadata = {
  title: 'G-Rides | Car rentals made simpler',
  description: 'Find and rent vehicles, list your car, or provide driver services through G-Rides by GiGOC.',
};

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/gigoc_rentals" className="inline-flex items-center gap-0.5" aria-label="G-Rides home">
      <span className={`${compact ? 'h-8 w-8' : 'h-10 w-10'} flex items-center justify-center`}>
        <Image
          src="/app-mockup(rentals)/logo.png"
          alt="G"
          width={48}
          height={48}
          className="h-full w-full object-contain [filter:brightness(0)_saturate(100%)_invert(32%)_sepia(87%)_saturate(1803%)_hue-rotate(209deg)_brightness(86%)_contrast(101%)]"
        />
      </span>
      <span className={`${compact ? 'text-lg' : 'text-xl'} -ml-[.6rem] font-semibold tracking-[-0.03em] text-[#10243f]`}>
        - Rides
      </span>
    </Link>
  );
}

export default function GigocRentalsPage() {
  return (
    <main className="min-h-screen bg-[#e9ecef] px-0 py-0 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-[1440px] overflow-hidden bg-white shadow-[0_18px_70px_rgba(15,23,42,0.06)]">
        <header className="bg-white px-5 sm:px-8 lg:px-14">
          <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between border-b border-slate-200/80">
            <Brand />

            <div className="hidden items-center gap-8 md:flex">
              <Link href="#how-it-works" className="text-sm font-medium text-slate-600 transition hover:text-[#245cdb]">
                How it works
              </Link>
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-[#245cdb]">
                <ArrowLeft className="h-4 w-5" strokeWidth={1.8} aria-hidden="true" />
                Back to GiGOC
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="#waitlist"
                className="hidden rounded-xl bg-[#245cdb] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#1749bd] sm:inline-flex sm:px-5 sm:text-sm"
              >
                Join the waitlist
              </Link>

              <details className="group relative md:hidden">
                <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-200 text-[#10243f] transition hover:border-[#245cdb]/40 hover:bg-slate-50 hover:text-[#245cdb] [&::-webkit-details-marker]:hidden">
                  <span className="sr-only">Open navigation menu</span>
                  <Menu className="h-5 w-5 group-open:hidden" strokeWidth={1.8} aria-hidden="true" />
                  <X className="hidden h-5 w-5 group-open:block" strokeWidth={1.8} aria-hidden="true" />
                </summary>

                <div className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_20px_50px_rgba(15,23,42,0.14)]">
                  <Link
                    href="#how-it-works"
                    className="flex rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#245cdb]"
                  >
                    How it works
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#245cdb]"
                  >
                    <ArrowLeft className="h-4 w-5" strokeWidth={1.8} aria-hidden="true" />
                    Back to GiGOC
                  </Link>
                  <Link
                    href="#waitlist"
                    className="mt-1 flex justify-center rounded-xl bg-[#245cdb] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1749bd] sm:hidden"
                  >
                    Join the waitlist
                  </Link>
                </div>
              </details>
            </div>
          </nav>
        </header>

        <section className="px-5 pb-14 pt-12 sm:px-8 sm:pt-16 lg:px-14 lg:pb-20 lg:pt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-[#245cdb]">A new car rental app by GiGOC</p>
              <h1 className="mt-6 text-[3.25rem] font-semibold leading-[0.98] tracking-[-0.05em] text-[#0d1726] sm:text-6xl lg:text-[5rem]">
                Rent a car. List your own. Add a driver when you need one.
              </h1>
              <p className="mt-6 text-4xl font-medium tracking-[-0.04em] text-[#245cdb] sm:text-5xl">Meet G-Rides.</p>
              <p className="mt-8 max-w-xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
                Find trusted vehicles nearby, choose self-drive or chauffeur service, and manage the full rental from one app.
              </p>

              <div id="waitlist" className="mt-8 scroll-mt-24">
                <RentalsWaitlistForm />
              </div>
              <p className="mt-3 text-xs text-slate-400">G-Rides is currently under development. Join for launch updates.</p>
            </div>

            <div className="relative mx-auto flex min-h-[25rem] w-full max-w-[34rem] items-end justify-center sm:min-h-[35rem] lg:ml-auto lg:mr-0 lg:min-h-[40rem]">
              <div className="absolute bottom-3 left-1/2 h-[17rem] w-[64%] -translate-x-1/2 rounded-[2.5rem] bg-[#2f3fe8] sm:h-[20rem] sm:w-[62%] lg:h-[24rem] lg:w-[64%]" />
              <Image
                src="/app-mockup(rentals)/hero-mockup.png"
                alt="G-Rides app showing nearby rental vehicles on a map"
                width={1080}
                height={1080}
                priority
                className="relative z-10 mb-10 h-auto w-[32rem] max-w-[96%] object-contain drop-shadow-[0_30px_35px_rgba(15,23,42,0.18)] sm:w-[33rem] lg:w-[35rem]"
              />
            </div>
          </div>
        </section>

        <RentalsFeatureShowcase />

        <section id="for-owners" className="px-5 pt-6 sm:px-8 sm:pt-8 lg:px-14 lg:pt-14">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="mx-auto max-w-3xl text-3xl font-medium tracking-[-0.035em] text-[#0d1726] sm:text-4xl">
              Coming soon on iOS and Android…
            </h2>

            <div className="relative mx-auto mt-5 h-[19rem] max-w-5xl overflow-hidden sm:h-[25rem] lg:h-[29rem]">
              <div className="absolute left-1/2 top-4 h-[19rem] w-[19rem] -translate-x-1/2 rounded-full border border-slate-200/75 sm:h-[26rem] sm:w-[26rem] lg:h-[31rem] lg:w-[31rem]" />
              <div className="absolute left-1/2 top-9 h-[16rem] w-[16rem] -translate-x-1/2 rounded-full border border-slate-200/75 sm:h-[22rem] sm:w-[22rem] lg:h-[27rem] lg:w-[27rem]" />
              <div className="absolute left-1/2 top-14 h-[13rem] w-[13rem] -translate-x-1/2 rounded-full border border-slate-200/75 sm:h-[18rem] sm:w-[18rem] lg:h-[23rem] lg:w-[23rem]" />
              <div className="absolute left-1/2 top-[4.75rem] h-[10rem] w-[10rem] -translate-x-1/2 rounded-full border border-slate-200/75 sm:h-[14rem] sm:w-[14rem] lg:h-[19rem] lg:w-[19rem]" />
              <Image
                src="/app-mockup(rentals)/bottom-section-mockup-1.png"
                alt="G-Rides owner earnings and payouts screen"
                width={1485}
                height={1485}
                loading="eager"
                className="absolute -ml-[.5rem] left-1/2 top-2 h-auto w-[22rem] max-w-none -translate-x-1/2 object-contain sm:top-0 sm:w-[30rem] lg:w-[38rem]"
              />
            </div>
          </div>
        </section>

        <footer className="relative z-20 mx-5 -mt-8 mb-5 rounded-t-[1.75rem] bg-[#f3f4f6] px-6 py-10 sm:mx-8 sm:-mt-12 sm:px-9 lg:mx-14 lg:-mt-16 lg:px-12 lg:py-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 border-b border-slate-300 pb-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <Brand compact />
                <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
                  G-Rides is a digital car rental platform developed and operated by GiGOC in Limbe, Cameroon.
                </p>
                <div className="mt-6 max-w-md">
                  <RentalsWaitlistForm compact />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold text-[#10243f]">Product</p>
                  <div className="mt-4 space-y-3 text-sm text-slate-500">
                    <Link href="#how-it-works" className="block transition hover:text-[#245cdb]">How it works</Link>
                    <Link href="#for-owners" className="block transition hover:text-[#245cdb]">For owners</Link>
                    <Link href="#waitlist" className="block transition hover:text-[#245cdb]">Launch updates</Link>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#10243f]">GiGOC</p>
                  <div className="mt-4 space-y-3 text-sm text-slate-500">
                    <Link href="/about" className="block transition hover:text-[#245cdb]">About us</Link>
                    <Link href="/news" className="block transition hover:text-[#245cdb]">Newsroom</Link>
                    <Link href="/contact" className="block transition hover:text-[#245cdb]">Contact</Link>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#10243f]">Support</p>
                  <div className="mt-4 space-y-3 text-sm text-slate-500">
                    <Link href="mailto:info@gigoc.org" className="block transition hover:text-[#245cdb]">info@gigoc.org</Link>
                    <Link href="tel:+237676111147" className="block transition hover:text-[#245cdb]">+237 676 111 147</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 Gebah Investment Group of Companies. All rights reserved.</p>
              <div className="flex items-center gap-2 text-slate-500">
                {/* <ShieldCheck className="h-4 w-4 text-[#245cdb]" strokeWidth={1.8} />
                Built around verification and trust */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
