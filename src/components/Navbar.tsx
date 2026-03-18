'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const divisions = [
  'Modelling',
  'Real Estate',
  'Manufacturing',
  'Logistics',
  'Music & Entertainment',
  'General Commerce',
  'Tech & Innovation',
];

export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDivisionsOpen, setIsMobileDivisionsOpen] = useState(false);
  const divisionsMenuRef = useRef<HTMLDivElement | null>(null);

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

      <div className="relative z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between rounded-[1.75rem] border px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-6"
          style={{
            backgroundColor: 'rgba(225, 228, 235, 0.72)',
            borderColor: 'rgba(255, 255, 255, 0.12)',
          }}
        >
          <Link href="#home" className="flex items-center gap-3">
            <Image
                src="/g-logo.png"
                alt="Gebah Investment Group Of Companies logo"
                width={100}
                height={120}
                priority
              />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            <Link href="#home" className="text-sm font-medium text-white/90 transition hover:text-white">
              Home
            </Link>

            <div ref={divisionsMenuRef} className="relative">
              <button
                type="button"
                className="flex items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white"
                onClick={() => setIsDivisionsOpen((open) => !open)}
                aria-expanded={isDivisionsOpen}
                aria-haspopup="menu"
              >
                Divisions
                <span className={`text-xs transition-transform ${isDivisionsOpen ? 'rotate-180' : ''}`}>
                  ▾
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
                      href="#hero-divisions"
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
                className="text-sm font-medium text-white/90 transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="#contact-section"
              className="rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
                boxShadow: '0 18px 30px rgba(37, 99, 235, 0.24)',
              }}
            >
              Start a Project
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border text-white lg:hidden"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              borderColor: 'rgba(255, 255, 255, 0.12)',
            }}
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="text-lg">☰</span>
          </button>
        </nav>

        {isMobileMenuOpen ? (
          <div className="fixed inset-x-0 top-0 z-50 px-4 pb-4 pt-24 sm:px-6 lg:hidden">
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
                  <Link href="#home" className="rounded-2xl px-4 py-3 text-success" onClick={closeMobileMenu}>
                    Home
                  </Link>

                  <div className="rounded-2xl border" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-white"
                      onClick={() => setIsMobileDivisionsOpen((open) => !open)}
                      aria-expanded={isMobileDivisionsOpen}
                    >
                      <span>Divisions</span>
                      <span className={`text-xs transition-transform ${isMobileDivisionsOpen ? 'rotate-180' : ''}`}>
                        ▾
                      </span>
                    </button>

                    {isMobileDivisionsOpen ? (
                      <div className="grid gap-2 px-3 pb-3 sm:grid-cols-2">
                        {divisions.map((division) => (
                          <Link
                            key={division}
                            href="#hero-divisions"
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
                      className="rounded-2xl px-4 py-3 text-white/90"
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <Link
                    href="#contact-section"
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
