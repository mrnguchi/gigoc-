import Link from 'next/link';
import Image from 'next/image';

type ProjectStatus = 'Completed' | 'Ongoing';

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  status: ProjectStatus;
  href: string;
};

const projects: Project[] = [
  {
    title: 'Signature Residences Development',
    category: 'Real Estate',
    description: 'A premium mixed-use property project focused on modern living, functional design, and lasting investment value.',
    image: '/gigoc-house.jpg',
    status: 'Completed',
    href: '#',
  },
  {
    title: 'Asake in Cameroon',
    category: 'Music & Entertainment',
    description: 'A music tour project designed to bring top-tier entertainment experiences to fans across Cameroon, showcasing the best of live performances.',
    image: '/asake.jpg',
    status: 'Ongoing',
    href: '#',
  },
  {
    title: 'GiGOC Rentals',
    category: 'Car Rentals',
    description: 'A car rental service project offering a fleet of reliable and luxury vehicles, providing mobility solutions with comfort and style.',
    image: '/gigoc-rentals.png',
    status: 'Ongoing',
    href: '#',
  },
];

function OpenLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M14 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14 19 5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function badgeStyles(status: ProjectStatus) {
  return status === 'Completed'
    ? {
        backgroundColor: 'rgba(34, 197, 94, 0.92)',
        color: '#f0fdf4',
        fontSize: '0.5rem',
      }
    : {
        backgroundColor: 'rgba(59, 130, 246, 0.92)',
        color: '#eff6ff',
        fontSize: '0.5rem',
        padding: '0.25rem 1rem',
      };
}

export default function ProjectsShowcase() {
  return (
    <section className="bg-white px-5 -mt-12 py-18 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl text-center mx-auto">
          <p className="text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--primary)' }}>
            -- Our projects -- 
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl" style={{ color: 'var(--text-main)' }}>
            A look at some of the work we have delivered
          </h2>
          <p className="mt-4 text-base leading-7" style={{ color: 'var(--text-soft)' }}>
            Featured projects presented by GiGOC
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="block overflow-hidden rounded-[1.75rem] border bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2"
              style={{ borderColor: 'rgba(148, 163, 184, 0.16)' }}
            >
              <article className="h-full">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                  <span
                    className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase shadow-lg"
                    style={badgeStyles(project.status)}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="px-6 py-6">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--primary)' }}>
                      {project.category}
                    </p>
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full"
                      style={{ backgroundColor: 'rgba(30, 74, 149, 0.08)', color: 'var(--primary)' }}
                      aria-hidden="true"
                    >
                      <OpenLinkIcon />
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold" style={{ color: 'var(--text-main)' }}>
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                    {project.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}