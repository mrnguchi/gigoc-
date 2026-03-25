'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const divisions = [
  'Real Estate',
  'Manufacturing',
  'Music & Entertainment',
  'GiGOC Rentals',
  'Logistics',
  'Tech & Innovation',
  'General Commerce',
  'Modelling',
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

  const navTextClassName = isScrolled ? 'text-[#1e4a95] hover:text-[#2563eb]' : 'text-white/90 hover:text-white';
  const homeHref = '/#home';

  const getDesktopLinkClassName = (href: string) => {
    const isActive = isActivePath(pathname, href);

    return `rounded-full px-3 py-2 text-sm transition ${
      isActive
        ? isScrolled
          ? 'bg-[#1e4a95]/10 font-semibold text-[#1e4a95]'
          : 'bg-white/12 font-semibold text-white'
        : `font-medium ${navTextClassName}`
    }`;
  };

  const getMobileLinkClassName = (href: string) => {
    const isActive = isActivePath(pathname, href);

    return `rounded-2xl px-4 py-3 text-sm transition ${
      isActive ? 'bg-white/12 font-semibold text-white' : 'text-white/90 hover:bg-white/6'
    }`;
  };

  const desktopDivisionsClassName = `flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition ${
    isDivisionsOpen
      ? isScrolled
        ? 'bg-[#1e4a95]/10 text-[#1e4a95]'
        : 'bg-white/12 text-white'
      : navTextClassName
  }`;

  const mobileDivisionsClassName = `flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
    isMobileDivisionsOpen ? 'bg-white/12 text-white' : 'text-white'
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
          className="fixed inset-0 z-40 bg-slate-950/78 backdrop-blur-sm lg:hidden"
          onClick={closeMobileMenu}
          aria-label="Close navigation menu backdrop"
        />
      ) : null}

      <div className="relative z-[60] px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          className={`relative z-50 mx-auto flex max-w-7xl items-center justify-between px-4 py-3 transition-all duration-300 sm:px-6 ${
            isScrolled ? 'rounded-[1.75rem] border shadow-[0_18px_45px_rgba(15,23,42,0.12)]' : ''
          }`}
          style={{
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'transparent',
            borderColor: isScrolled ? 'rgba(148, 163, 184, 0.22)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(18px)' : 'none',
          }}
        >
          <Link href="/#home" className="flex items-center gap-3">
            <Image
              src={isScrolled ? '/gigoc-blue.png' : '/gigoc-white.png'}
              alt="Gebah Investment Group Of Companies logo"
              width={120}
              height={150}
              priority
            />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            <Link href={homeHref} className={getDesktopLinkClassName(homeHref)}>
              Home
            </Link>

            <div ref={divisionsMenuRef} className="relative">
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
                  className="absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 rounded-3xl border p-3 shadow-2xl"
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.96)',
                    borderColor: 'rgba(255, 255, 255, 0.12)',
                  }}
                >
                  {divisions.map((division) => (
                    <Link
                      key={division}
                      href="/#hero-divisions"
                      className="block rounded-2xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                      onClick={() => setIsDivisionsOpen(false)}
                    >
                      {division}
                    </Link>
                  ))}
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
              className="rounded-full text-center px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)',
                boxShadow: '0 18px 30px rgba(37, 99, 235, 0.24)',
              }}
            >
              Start a Project
            </Link>
          </div>

          <button
              type="button"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition-colors lg:hidden ${
                isScrolled ? 'text-[#1e4a95]' : 'text-white'
              }`}
              style={{
                backgroundColor: isScrolled ? 'rgba(30, 74, 149, 0.06)' : 'rgba(255, 255, 255, 0.06)',
                borderColor: isScrolled ? 'rgba(30, 74, 149, 0.18)' : 'rgba(255, 255, 255, 0.12)',
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
              className="mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] border shadow-2xl backdrop-blur-xl"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.94)',
                borderColor: 'rgba(255, 255, 255, 0.12)',
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="max-h-[calc(100vh-7rem)] overflow-y-auto p-4">
                <div className="flex flex-col gap-2">
                  <Link href={homeHref} className={getMobileLinkClassName(homeHref)} onClick={closeMobileMenu}>
                    Home
                  </Link>

                  <div className="rounded-2xl border" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
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
                        {divisions.map((division) => (
                          <Link
                            key={division}
                            href="/#hero-divisions"
                            className="rounded-2xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
                            onClick={closeMobileMenu}
                          >
                            {division}
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
                    className="mt-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
                    onClick={closeMobileMenu}
                    style={{ background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)' }}
                  >
                    Start a Project
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
