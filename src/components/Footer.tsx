import Image from 'next/image';
import Link from 'next/link';

type SocialPlatform = 'facebook' | 'instagram' | 'linkedin';

const companyLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/about' },
  { label: 'Projects', href: '#' },
  { label: 'Contact', href: '/contact' },
];

const divisionLinks = [
  { label: 'Modelling', href: '/#hero-divisions' },
  { label: 'Real Estate', href: '/#hero-divisions' },
  { label: 'Manufacturing', href: '/#hero-divisions' },
  { label: 'Tech & Innovation', href: '/#hero-divisions' },
];

const socialLinks = [
  { label: 'Facebook', platform: 'facebook' as const, href: '#' },
  { label: 'Instagram', platform: 'instagram' as const, href: '#' },
  { label: 'LinkedIn', platform: 'linkedin' as const, href: '#' },
];

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  switch (platform) {
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.6 1.6-1.6H16V4.9c-.3 0-.9-.1-1.8-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.5v3H10v7h3.5Z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r=".9" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M6.8 8.3a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8ZM5 9.8h3.5V19H5V9.8Zm5.5 0h3.3V11h.1c.5-.9 1.6-1.6 3.2-1.6 3.4 0 4 2.1 4 4.9V19h-3.5v-4.1c0-1 0-2.3-1.5-2.3s-1.7 1.1-1.7 2.2V19h-3.5V9.8Z" />
        </svg>
      );
  }
}

export default function Footer() {
  return (
    <footer className="bg-[#081224] px-5 pb-10 pt-16 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 px-6 py-10 backdrop-blur-sm sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <Link href="/#home" className="inline-flex items-center">
              <Image src="/gigoc-footer.png" alt="GiGOC logo" width={180} height={60} />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
              GiGOC brings together creative, commercial, and operational divisions to build modern businesses and lasting value.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-sm font-semibold text-white/80 transition hover:border-blue-400 hover:bg-blue-500/15 hover:text-white"
                >
                  <SocialIcon platform={social.platform} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-white/55">Company</h3>
            <div className="mt-5 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-white/70 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-white/55">Divisions</h3>
            <div className="mt-5 flex flex-col gap-3">
              {divisionLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-white/70 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-white/55">Contact Info</h3>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/70">
              <p>Limbe, Cameroon</p>
              <p>
                <Link href="mailto:hello@gigoc.org" className="transition hover:text-white">
                  hello@gigoc.org
                </Link>
              </p>
              <p>
                <Link href="tel:+237600000000" className="transition hover:text-white">
                  +237 600 000 000
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} Gebah Investment Group Of Companies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}