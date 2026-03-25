import { Clock3, Mail, MapPin, PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaXTwitter } from 'react-icons/fa6';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { companyContact } from '@/data/contact';

const contactDetails = [
  {
    title: 'Address',
    icon: MapPin,
    lines: companyContact.addressLines,
  },
  {
    title: 'Contact',
    icon: PhoneCall,
    lines: [`Phone: ${companyContact.phoneDisplay}`, `Email: ${companyContact.email}`],
  },
  {
    title: 'Open Time',
    icon: Clock3,
    lines: ['Monday - Friday', '09:00 am - 05:00 pm'],
  },
];

const socialLinks = [
  { label: 'Facebook', href: '#', icon: FaFacebookF },
  { label: 'X', href: '#', icon: FaXTwitter },
  { label: 'Instagram', href: '#', icon: FaInstagram },
  { label: 'LinkedIn', href: '#', icon: FaLinkedinIn },
];

const heroHighlights = [
  { value: 'Fast', label: 'Response Time' },
  { value: 'Tailored', label: 'Project Quotes' },
  { value: 'Multi-Sector', label: 'Support Team' },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white" style={{ overflow: 'hidden' }}>
      <Navbar />

      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0f172a 0%, #101827 100%)' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/hero-00.png"
            alt="GiGOC contact page hero background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl flex-col px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <div className="grid flex-1 items-center gap-14 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-12">
            <div className="max-w-2xl">
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.22em] uppercase text-white/80"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderColor: 'rgba(255, 255, 255, 0.12)',
                }}
              >
             Contact Us
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Let’s Talk About Your Next Big Move
              </h1>

              <div className="mt-6 space-y-3 text-base leading-7 text-white/70 sm:text-lg">
                <p>
                  Whether you need business support, partnership direction, or a tailored quote, our team is ready to listen and help you move forward with clarity.
                </p>
              </div>

              <div
                className="mt-8 grid gap-px overflow-hidden rounded-[1.75rem] border sm:grid-cols-3"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.12)',
                }}
              >
                {heroHighlights.map((item) => (
                  <div key={item.label} className="px-5 py-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)' }}>
                    <p className="text-2xl font-semibold text-white sm:text-3xl">{item.value}</p>
                    <p className="mt-2 text-sm text-white/70">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[31rem] lg:ml-auto lg:mr-0">
              <div
                className="rounded-[2rem] border p-6 text-white shadow-[0_30px_60px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:p-7"
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.5)',
                  borderColor: 'rgba(255, 255, 255, 0.12)',
                }}
              >
                <p className="text-sm font-semibold tracking-[0.22em] uppercase text-white/65">Quick Reach</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">We’re here to help you get started</h2>
                <div className="mt-6 space-y-4 text-sm leading-7 text-white/75">
                  <p>Talk to us about projects, partnerships, investments, or operational support.</p>
                  <p>
                    Email us at{' '}
                    <Link href={`mailto:${companyContact.email}`} className="font-medium text-white transition hover:text-blue-200">
                      {companyContact.email}
                    </Link>
                    {' '}or call{' '}
                    <Link href={`tel:${companyContact.phoneHref}`} className="font-medium text-white transition hover:text-blue-200">
                      {companyContact.phoneDisplay}
                    </Link>
                    .
                  </p>
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href={`mailto:${companyContact.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1e4a95] transition hover:-translate-y-0.5"
                  >
                    <Mail className="h-4 w-4" strokeWidth={2.2} />
                    Email Us
                  </Link>
                  <Link
                    href={`tel:${companyContact.phoneHref}`}
                    className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    style={{ borderColor: 'rgba(255, 255, 255, 0.16)' }}
                  >
                    <PhoneCall className="h-4 w-4" strokeWidth={2.2} />
                    Call Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-16 bg-[var(--bg-main)] px-5 pb-20 pt-0 sm:px-6 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border bg-white px-5 py-6 shadow-[0_22px_70px_rgba(15,23,42,0.1)] sm:px-7 sm:py-7 lg:px-8 lg:py-8">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
            <aside className="relative overflow-hidden rounded-[1.75rem] bg-[#081a4d] p-6 text-white sm:p-7">
              <div
                className="absolute inset-0 opacity-35"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.26) 0, transparent 22%), radial-gradient(circle at 80% 30%, rgba(96,165,250,0.22) 0, transparent 24%), radial-gradient(circle at 40% 75%, rgba(99,102,241,0.18) 0, transparent 28%)',
                }}
              />
              <div className="relative flex h-full flex-col">
                <div className="space-y-8">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title}>
                        <div className="flex items-center gap-2.5">
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white">
                            <Icon className="h-4 w-4" strokeWidth={2.2} />
                          </span>
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                        </div>
                        <div className="mt-3 space-y-1 pl-[2.9rem] text-sm leading-7 text-white/75">
                          {item.lines.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-10 pt-8 lg:mt-auto">
                  <p className="text-lg font-semibold">Stay Connected</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {socialLinks.map((item) => {
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          aria-label={item.label}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-white/16"
                        >
                          <Icon className="h-4 w-4" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>

            <div className="rounded-[1.75rem] bg-white px-1 py-2 sm:px-3 lg:px-4">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold tracking-[0.18em] uppercase" style={{ color: 'var(--primary)' }}>
                  -- Contact Us --
                </p>
                <h2 className="mt-2 text-3xl font-semibold leading-tight sm:text-4xl" style={{ color: 'var(--text-main)' }}>
                  Get A Response within <span style={{ color: '#4f7cff' }}>48 Hours</span> !
                </h2>
              </div>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium" style={{ color: 'var(--text-main)' }}>
                      Your Name *
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="E.g. John Doe"
                      className="w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]"
                      style={{ borderColor: 'rgba(148, 163, 184, 0.22)', color: 'var(--text-main)' }}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium" style={{ color: 'var(--text-main)' }}>
                      Email *
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      className="w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]"
                      style={{ borderColor: 'rgba(148, 163, 184, 0.22)', color: 'var(--text-main)' }}
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium" style={{ color: 'var(--text-main)' }}>
                      Phone *
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter Phone Number"
                      className="w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]"
                      style={{ borderColor: 'rgba(148, 163, 184, 0.22)', color: 'var(--text-main)' }}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium" style={{ color: 'var(--text-main)' }}>
                      Service *
                    </span>
                    <select
                      name="service"
                      defaultValue=""
                      className="w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]"
                      style={{ borderColor: 'rgba(148, 163, 184, 0.22)', color: 'var(--text-main)' }}
                    >
                      <option value="" disabled>
                        Select Services
                      </option>
                      <option value="real-estate">Real Estate</option>
                      <option value="logistics">Logistics</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="entertainment">Music & Entertainment</option>
                      <option value="technology">Tech & Innovation</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium" style={{ color: 'var(--text-main)' }}>
                    Your Message *
                  </span>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Enter here..."
                    className="w-full rounded-[1.5rem] border px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]"
                    style={{ borderColor: 'rgba(148, 163, 184, 0.22)', color: 'var(--text-main)' }}
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex rounded-full px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
