'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

const galleryImages = [
  {
    src: '/section 2 gallery 1.jpg',
    alt: 'Close-up of finished biomass wood pellets.',
    fit: 'cover',
  },
  {
    src: '/section 2 gallery 2.png',
    alt: 'Illustrative view of wood pellets being packaged by industrial equipment.',
    fit: 'cover',
  },
  {
    src: '/section 2 gallery 3.jpg',
    alt: 'The words Wood Pellets arranged using pellet material.',
    fit: 'contain',
  },
  {
    src: '/section 2 gallery 4.jpg',
    alt: 'Wood chips and finished pellets illustrating stages of biomass material processing.',
    fit: 'cover',
  },
] as const;

export default function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const closeModal = useCallback(() => {
    setActiveIndex(null);
    window.requestAnimationFrame(() => lastTriggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }

      if (event.key === 'Tab') {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, closeModal]);

  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4" aria-label="Wood pellet image gallery">
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className="group relative aspect-[4/3] overflow-hidden rounded-[1.1rem] border border-slate-200 bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            onClick={(event) => {
              lastTriggerRef.current = event.currentTarget;
              setActiveIndex(index);
            }}
            aria-haspopup="dialog"
            aria-label={`Open gallery image ${index + 1}: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="(max-width: 1024px) 50vw, 22vw"
              className={`${image.fit === 'contain' ? 'object-contain p-3' : 'object-cover'} motion-safe:transition motion-safe:duration-300 motion-safe:group-hover:scale-[1.035]`}
            />
            <span className="absolute inset-0 bg-slate-950/0 motion-safe:transition motion-safe:duration-300 motion-safe:group-hover:bg-slate-950/10" />
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image ${activeIndex! + 1} of ${galleryImages.length}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/88 p-4 sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="relative flex h-[88vh] w-full max-w-6xl flex-col">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeModal}
              className="ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-slate-950/60 text-white transition hover:bg-white hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Close image viewer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="relative mt-3 min-h-0 flex-1">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="92vw"
                className="object-contain"
              />
            </div>

            <p className="mx-auto mt-3 max-w-3xl shrink-0 text-center text-sm leading-6 text-white/75">
              {activeImage.alt}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
