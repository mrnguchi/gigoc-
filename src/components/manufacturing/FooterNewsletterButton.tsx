'use client';

import Image from 'next/image';

const highlightClass = 'footer-newsletter-glow';

export default function FooterNewsletterButton() {
  function handleClick() {
    const target = document.getElementById('footer-newsletter');

    if (!target) {
      return;
    }

    const newsletterTarget = target;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function highlightTarget() {
      newsletterTarget.classList.remove(highlightClass);
      void newsletterTarget.offsetWidth;
      newsletterTarget.classList.add(highlightClass);

      window.setTimeout(() => {
        newsletterTarget.classList.remove(highlightClass);
      }, 1900);
    }

    const bounds = newsletterTarget.getBoundingClientRect();
    const isAlreadyVisible = bounds.top < window.innerHeight && bounds.bottom > 0;

    if (isAlreadyVisible || prefersReducedMotion) {
      newsletterTarget.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'center',
      });
      highlightTarget();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          highlightTarget();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(newsletterTarget);
    newsletterTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-controls="footer-newsletter"
      className="inline-flex min-h-11 items-center justify-center gap-2.5 rounded-md border border-[#b9cbea] bg-[#f3f7fd] px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:border-[#91add8] hover:bg-[#eaf2ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
    >
      <Image
        src="/subscribe.png"
        alt=""
        width={20}
        height={20}
        aria-hidden="true"
        className="h-5 w-5 object-contain"
      />
      Subscribe for Updates
    </button>
  );
}
