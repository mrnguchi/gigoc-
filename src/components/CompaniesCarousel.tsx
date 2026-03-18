interface Company {
  id: number;
  name: string;
  accent: string;
}

const companies: Company[] = [
  {
    id: 1,
    name: 'Partner One',
    accent: '#2563eb',
  },
  {
    id: 2,
    name: 'Partner Two',
    accent: '#7c3aed',
  },
  {
    id: 3,
    name: 'Partner Three',
    accent: '#0f766e',
  },
  {
    id: 4,
    name: 'Partner Four',
    accent: '#ea580c',
  },
  {
    id: 5,
    name: 'Partner Five',
    accent: '#ca8a04',
  },
  {
    id: 6,
    name: 'Partner Six',
    accent: '#4f46e5',
  },
];

export default function CompaniesCarousel() {
  const marqueeCompanies = [...companies, ...companies];

  return (
    <section
      id="trusted-companies"
      className="rounded-[1.75rem] border px-5 py-6 shadow-[0_24px_80px_rgba(15,23,42,0.18)] backdrop-blur-md sm:px-6 sm:py-7"
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.42)',
        borderColor: 'rgba(255, 255, 255, 0.12)',
      }}
    >
      <div className="grid items-center gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.22em] uppercase text-white/70">
            Social proof
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Trusted by many companies
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-white/70">
            A flexible partner strip is ready here for the brands, names, and logos you want to showcase later.
          </p>
        </div>

        <div
          className="companies-marquee overflow-hidden rounded-[1.5rem] border px-4 py-4 sm:px-5"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderColor: 'rgba(255, 255, 255, 0.12)',
          }}
        >
          <div className="companies-marquee-track flex w-max gap-4">
            {marqueeCompanies.map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className="flex min-w-[190px] items-center gap-3 rounded-[1.25rem] border px-4 py-3 shadow-sm"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  borderColor: 'rgba(148, 163, 184, 0.18)',
                }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-semibold text-white"
                  style={{ backgroundColor: company.accent }}
                >
                  {company.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-main)' }}>
                    {company.name}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-soft)' }}>
                    Logo placeholder
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
