export default function ContactSection() {
  return (
    <section id="contact-section" className="scroll-mt-32 bg-[var(--bg-main)] px-5 pb-20 pt-4 sm:px-6 lg:px-10 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-start gap-10 rounded-[2rem] border bg-white px-6 py-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:px-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div className="lg:pl-6">
          <p className="text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
            Contact us
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl" style={{ color: 'var(--text-main)' }}>
            Let’s talk about your next project
          </h2>
          <p className="mt-5 text-base leading-7" style={{ color: 'var(--text-soft)' }}>
            Share your idea, business need, or partnership goal and our team will get back to you with the right next steps.
          </p>
          <p className="mt-4 text-sm leading-7 sm:text-base" style={{ color: 'var(--text-soft)' }}>
            We work across multiple industries, so whether your project is creative, commercial, or operational, we are ready to help you move it forward.
          </p>
        </div>

        <form className="space-y-5" style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium" style={{ color: 'var(--text-main)' }}>
                Name
              </span>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-blue-500"
                style={{ borderColor: 'rgba(148, 163, 184, 0.22)', color: 'var(--text-main)' }}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium" style={{ color: 'var(--text-main)' }}>
                Email
              </span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-blue-500"
                style={{ borderColor: 'rgba(148, 163, 184, 0.22)', color: 'var(--text-main)' }}
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium" style={{ color: 'var(--text-main)' }}>
                Phone Number
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="+237 6XX XXX XXX"
                className="w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-blue-500"
                style={{ borderColor: 'rgba(148, 163, 184, 0.22)', color: 'var(--text-main)' }}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium" style={{ color: 'var(--text-main)' }}>
                Address
              </span>
              <input
                type="text"
                name="address"
                placeholder="Your address"
                className="w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-blue-500"
                style={{ borderColor: 'rgba(148, 163, 184, 0.22)', color: 'var(--text-main)' }}
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-medium" style={{ color: 'var(--text-main)' }}>
              Message
            </span>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us a bit about your project"
              className="w-full rounded-[1.5rem] border px-4 py-3 text-sm outline-none transition focus:border-blue-500"
              style={{ borderColor: 'rgba(148, 163, 184, 0.22)', color: 'var(--text-main)' }}
            />
          </label>

          <button
            type="submit"
            className="rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #1e4a95 0%, #2563eb 100%)' }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}