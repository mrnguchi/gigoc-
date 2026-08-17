'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, ChevronDown } from 'lucide-react';

const divisions = [
  {
    label: 'Real Estate',
    description: 'Property and development',
    icon: '/real estate.png',
    href: '/#our-businesses',
  },
  {
    label: 'GiGOC Rentals',
    description: 'Executive mobility',
    icon: '/car-rental.png',
    href: '/gigoc_rentals',
  },
  {
    label: 'GiGOC Biomass',
    description: 'Renewable manufacturing',
    icon: '/renewable-energy.png',
    href: '/manufacturing',
  },
  {
    label: 'Entertainment & Talent',
    description: 'Music, talent and campaigns',
    icon: '/music and entertainment.png',
    href: '/music&entertainment',
  },
  {
    label: 'General Commerce',
    description: 'Trade and market access',
    icon: '/general commerce.png',
    href: '/#our-businesses',
  },
  {
    label: 'Tech & Innovation',
    description: 'Digital products and systems',
    icon: '/tech and innovation.png',
    href: '/tech&innovation',
  },
  {
    label: 'Logistics',
    description: 'Supply and distribution',
    icon: '/logistics.png',
    href: '/#our-businesses',
  },
];

function isActivePath(pathname: string, href: string) {
  if (!href || href === '#') {
    return false;
  }

  if (href.startsWith('/#')) {
    return pathname === '/';
  }

  if (href === '/') {
    return pathname === '/';
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { name: 'Investor Relations', href: '#' },
    { name: 'About Us', href: '/about' },
    { name: 'GiGOC News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDivisionsOpen, setIsMobileDivisionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const divisionsMenuRef = useRef<HTMLDivElement | null>(null);
  const useLightHeader = isScrolled || isMobileMenuOpen;

  const navTextClassName = isScrolled ? 'text-[#1e4a95] hover:text-[#2563eb]' : 'text-white/90 hover:text-white';
  const homeHref = '/#home';

  const getDesktopLinkClassName = (href: string) => {
    const isActive = isActivePath(pathname, href);

    return `border-b-2 px-1 py-2 text-sm transition-colors ${
      isActive
        ? isScrolled
          ? 'border-[#2166d1] font-semibold text-[#17365f]'
          : 'border-white/80 font-semibold text-white'
        : `border-transparent font-medium ${navTextClassName}`
    }`;
  };

  const getMobileLinkClassName = (href: string) => {
    const isActive = isActivePath(pathname, href);

    return `rounded-md border-l-2 px-4 py-3 text-sm transition ${
      isActive
        ? 'border-[#2166d1] bg-[#edf4ff] font-semibold text-[#17365f]'
        : 'border-transparent text-slate-700 hover:bg-slate-50 hover:text-[#2166d1]'
    }`;
  };

  const desktopDivisionsClassName = `flex items-center gap-2 border-b-2 px-1 py-2 text-sm font-medium transition-colors ${
    isDivisionsOpen
      ? isScrolled
        ? 'border-[#2166d1] text-[#17365f]'
        : 'border-white/80 text-white'
      : `border-transparent ${navTextClassName}`
  }`;

  const mobileDivisionsClassName = `flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-sm font-semibold transition ${
    isMobileDivisionsOpen ? 'bg-[#edf4ff] text-[#17365f]' : 'text-[#17365f] hover:bg-slate-50'
  }`;

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileDivisionsOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((open) => {
      if (open) {
        setIsMobileDivisionsOpen(false);
      }

      return !open;
    });
  };

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!divisionsMenuRef.current?.contains(event.target as Node)) {
        setIsDivisionsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDivisionsOpen(false);
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {isMobileMenuOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-slate-950/55 backdrop-blur-sm lg:hidden"
          onClick={closeMobileMenu}
          aria-label="Close navigation menu backdrop"
        />
      ) : null}

      <div
        className={`relative z-[60] transition-all duration-300 ${
          useLightHeader
            ? 'border-b border-slate-200/90 bg-white/95 px-5 shadow-[0_10px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-6 lg:px-10'
            : 'px-4 pt-4 sm:px-6 lg:px-8'
        }`}
      >
        <nav
          className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-1 py-3 transition-all duration-300 sm:px-2"
        >
          <Link href="/#home" className="flex items-center gap-3">
            <Image
              src={useLightHeader ? '/gigoc-blue.png' : '/gigoc-white.png'}
              alt="Gebah Investment Group Of Companies logo"
              width={120}
              height={150}
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <Link href={homeHref} className={getDesktopLinkClassName(homeHref)}>
              Home
            </Link>

            <div
              ref={divisionsMenuRef}
              className="relative"
              onMouseEnter={() => setIsDivisionsOpen(true)}
              onMouseLeave={() => setIsDivisionsOpen(false)}
            >
              <button
                type="button"
                className={desktopDivisionsClassName}
                onClick={() => setIsDivisionsOpen((open) => !open)}
                aria-expanded={isDivisionsOpen}
                aria-haspopup="menu"
              >
                Our Businesses
                <span className={`text-xs transition-transform ${isDivisionsOpen ? 'rotate-180' : ''}`}>
                  <ChevronDown size={14} />
                </span>
              </button>

              {isDivisionsOpen ? (
                <div
                  className={`fixed left-1/2 w-[calc(100vw-3rem)] max-w-7xl -translate-x-1/2 border border-slate-200 border-t-[3px] border-t-[#2166d1] bg-white p-3 shadow-[0_24px_65px_rgba(15,23,42,0.18)] sm:p-4 ${
                    isScrolled ? 'top-[4.55rem]' : 'top-[5.25rem]'
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between gap-6 border-b border-slate-200 px-1 pb-3">
                    <p className="text-sm font-semibold text-[#17365f]">Our businesses</p>
                    <Link
                      href="/#our-businesses"
                      className="text-xs font-semibold text-[#2166d1] transition hover:text-[#17365f]"
                      onClick={() => setIsDivisionsOpen(false)}
                    >
                      View all businesses
                    </Link>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
                    {divisions.map((division, index) => (
                      <Link
                        key={division.label}
                        href={division.href}
                        className="group relative grid min-h-28 grid-cols-[5.5rem_1fr] gap-4 rounded-md border border-slate-200 p-3 transition duration-300 hover:border-[#2166d1]/45 hover:bg-[#f8fbff] hover:shadow-[0_10px_25px_rgba(15,23,42,0.07)] lg:col-span-2"
                        onClick={() => setIsDivisionsOpen(false)}
                      >
                        <span className="flex min-h-20 items-center justify-center rounded-[3px] border border-slate-200 bg-[#f0f4f8]">
                          <span
                            className="h-10 w-10 bg-[#2166d1] transition-transform duration-300 group-hover:scale-105"
                            style={{
                              WebkitMaskImage: `url("${division.icon}")`,
                              maskImage: `url("${division.icon}")`,
                              WebkitMaskPosition: 'center',
                              maskPosition: 'center',
                              WebkitMaskRepeat: 'no-repeat',
                              maskRepeat: 'no-repeat',
                              WebkitMaskSize: 'contain',
                              maskSize: 'contain',
                            }}
                            aria-hidden="true"
                          />
                        </span>

                        <span className="flex min-w-0 flex-col justify-center">
                          <span className="absolute right-3 top-3 text-[10px] font-semibold tracking-[0.12em] text-slate-400">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="text-[15px] font-semibold leading-5 text-[#10243f]">
                            {division.label}
                          </span>
                          <span className="mt-1 text-xs leading-5 text-slate-500">
                            {division.description}
                          </span>
                          <span className="mt-2 w-fit border-b border-[#2166d1]/55 pb-0.5 text-xs font-semibold text-[#2166d1] transition group-hover:border-[#2166d1]">
                            Explore business
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={getDesktopLinkClassName(link.href)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-md bg-[#2166d1] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_12px_26px_rgba(33,102,209,0.18)] transition hover:bg-[#2b73df]"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.9} />
            </Link>
          </div>

          <button
              type="button"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-md border transition-colors lg:hidden ${
                useLightHeader ? 'text-[#1e4a95]' : 'text-white'
              }`}
              style={{
                backgroundColor: useLightHeader ? 'rgba(30, 74, 149, 0.06)' : 'rgba(255, 255, 255, 0.06)',
                borderColor: useLightHeader ? 'rgba(30, 74, 149, 0.18)' : 'rgba(255, 255, 255, 0.12)',
              }}
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="text-lg">{isMobileMenuOpen ? '✕' : '☰'}</span>
            </button>
        </nav>

        {isMobileMenuOpen ? (
          <div className="fixed inset-x-0 top-0 z-40 px-4 pb-4 pt-24 sm:px-6 lg:hidden">
            <div
              className="mx-auto max-w-7xl overflow-hidden rounded-md border border-slate-200 bg-white shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="max-h-[calc(100vh-7rem)] overflow-y-auto p-4">
                <div className="flex flex-col gap-2">
                  <Link href={homeHref} className={getMobileLinkClassName(homeHref)} onClick={closeMobileMenu}>
                    Home
                  </Link>

                  <div className="rounded-md border border-slate-200">
                    <button
                      type="button"
                      className={mobileDivisionsClassName}
                      onClick={() => setIsMobileDivisionsOpen((open) => !open)}
                      aria-expanded={isMobileDivisionsOpen}
                    >
                      <span>Our Businesses</span>
                      <span className={`text-xs transition-transform ${isMobileDivisionsOpen ? 'rotate-180' : ''}`}>
                        ▾
                      </span>
                    </button>

                    {isMobileDivisionsOpen ? (
                      <div className="grid gap-2 px-3 pb-3 sm:grid-cols-2">
                        {divisions.map((division, index) => (
                          <Link
                            key={division.label}
                            href={division.href}
                            className="group grid grid-cols-[2.75rem_minmax(0,1fr)_1rem] items-center gap-3 rounded-md border border-slate-200 bg-white p-2.5 transition hover:border-[#2166d1]/45 hover:bg-[#f8fbff]"
                            onClick={closeMobileMenu}
                          >
                            <span className="flex h-11 w-11 items-center justify-center rounded-[3px] border border-slate-200 bg-[#f0f4f8]">
                              <span
                                className="h-6 w-6 bg-[#2166d1] transition-transform duration-300 group-hover:scale-105"
                                style={{
                                  WebkitMaskImage: `url("${division.icon}")`,
                                  maskImage: `url("${division.icon}")`,
                                  WebkitMaskPosition: 'center',
                                  maskPosition: 'center',
                                  WebkitMaskRepeat: 'no-repeat',
                                  maskRepeat: 'no-repeat',
                                  WebkitMaskSize: 'contain',
                                  maskSize: 'contain',
                                }}
                                aria-hidden="true"
                              />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-sm font-semibold leading-5 text-[#10243f]">{division.label}</span>
                              <span className="mt-0.5 block text-[11px] leading-4 text-slate-500">{division.description}</span>
                            </span>
                            <span className="flex flex-col items-end gap-2">
                              <span className="text-[9px] font-semibold tracking-[0.1em] text-slate-400">{String(index + 1).padStart(2, '0')}</span>
                              <ArrowRight className="h-4 w-4 text-[#2166d1] transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.8} />
                            </span>
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  {navLinks.slice(1).map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={getMobileLinkClassName(link.href)}
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <Link
                    href="/contact"
                    className="group mt-2 flex items-center justify-between gap-4 rounded-md bg-[#2166d1] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2b73df]"
                    onClick={closeMobileMenu}
                  >
                    Start a Project
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.9} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
