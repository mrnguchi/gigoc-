'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

const productFeatures = [
  {
    number: '01',
    title: 'Find cars near you',
    description: 'Search by vehicle type or location and compare available cars on the map.',
    image: '/app-mockup(rentals)/middle-section-1.png',
    placement: 'bottom',
  },
  {
    number: '02',
    title: 'One secure account',
    description: 'Sign in once, complete verification, and keep your activity in one place.',
    image: '/app-mockup(rentals)/middle-section-2.png',
    placement: 'top',
  },
  {
    number: '03',
    title: 'Switch roles anytime',
    description: 'Rent a car, list one of your own, or accept driver requests from the same account.',
    image: '/app-mockup(rentals)/middle-section-3.png',
    placement: 'bottom',
  },
];

export default function RentalsFeatureShowcase() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function updateActiveCard() {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const cards = Array.from(slider.children) as HTMLElement[];
    const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - sliderCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }

  function goToCard(index: number) {
    const slider = sliderRef.current;
    const card = slider?.children[index] as HTMLElement | undefined;

    if (!slider || !card) {
      return;
    }

    slider.scrollTo({
      left: card.offsetLeft - slider.offsetLeft,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  }

  return (
    <section id="how-it-works" className="px-5 pb-8 pt-2 sm:px-8 sm:pb-12 lg:px-14 lg:pb-24 lg:pt-4">
      <div className="mx-auto max-w-7xl">
        <div className="relative h-[24rem] overflow-hidden rounded-[1.75rem] bg-[#070a0f] px-5 pt-12 text-white sm:px-8 sm:pt-14 lg:h-[23rem] lg:px-10 lg:pt-14">
          <div className="absolute inset-x-0 top-0 h-72 overflow-hidden rounded-t-[1.75rem]">
            <div className="absolute left-1/2 top-[-16rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-[#3347ff]/35 shadow-[0_0_90px_rgba(48,63,232,0.38)]" />
            <div className="absolute left-1/2 top-[-10rem] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full border border-[#3347ff]/25" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-[#6f7cff]">How G-Rides works</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              One app for the full rental.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/55 sm:text-base">
              Search, verify, book, track, and manage payments without moving between different services.
            </p>
          </div>
        </div>

        <div className="relative z-10 mx-4 -mt-24 sm:mx-6 lg:mx-10 lg:-mt-[10.5rem]">
          <div
            ref={sliderRef}
            role="region"
            aria-label="G-Rides app features"
            onScroll={updateActiveCard}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:pb-0"
          >
            {productFeatures.map((feature) => (
              <article
                key={feature.number}
                className="relative h-[28rem] w-full shrink-0 snap-center overflow-hidden rounded-2xl bg-[#f6f7f9] text-[#10243f] shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                {feature.placement === 'bottom' ? (
                  <div className="relative z-10 px-5 pt-6 sm:px-6">
                    <div className="flex items-start justify-between gap-5">
                      <h3 className="max-w-[14ch] text-xl font-semibold leading-tight tracking-[-0.025em] sm:text-2xl">
                        {feature.title}
                      </h3>
                      <span className="text-xs font-semibold text-[#245cdb]">{feature.number}</span>
                    </div>
                    <p className="mt-3 max-w-[30rem] text-sm leading-6 text-slate-500">{feature.description}</p>
                  </div>
                ) : (
                  <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#f6f7f9] via-[#f6f7f9] to-transparent px-5 pb-6 pt-16 sm:px-6">
                    <div className="flex items-start justify-between gap-5">
                      <h3 className="max-w-[14ch] text-xl font-semibold leading-tight tracking-[-0.025em] sm:text-2xl">
                        {feature.title}
                      </h3>
                      <span className="text-xs font-semibold text-[#245cdb]">{feature.number}</span>
                    </div>
                    <p className="mt-3 max-w-[30rem] text-sm leading-6 text-slate-500">{feature.description}</p>
                  </div>
                )}

                <Image
                  src={feature.image}
                  alt={`${feature.title} screen in the G-Rides app`}
                  width={1080}
                  height={1080}
                  className={`absolute left-1/2 h-auto w-[27rem] max-w-none -translate-x-1/2 object-contain sm:w-[29rem] ${feature.placement === 'top' ? 'top-[-9rem]' : 'bottom-[-7rem] sm:bottom-[-9rem]'}`}
                />
              </article>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 lg:hidden" aria-label="Feature slide controls">
            {productFeatures.map((feature, index) => (
              <button
                key={feature.number}
                type="button"
                onClick={() => goToCard(index)}
                aria-label={`Show feature ${index + 1}: ${feature.title}`}
                aria-current={activeIndex === index ? 'true' : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-8 bg-[#245cdb]' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
