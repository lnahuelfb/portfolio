import { ExternalLink } from "./ExternalLink";
import { SectionHeading } from "./SectionHeading";

type Project = {
  name: string;
  description: string;
  tags: string[];
  demo: string;
  source?: string;
};

const PROJECTS: Project[] = [
  {
    name: "dedudas-app",
    description:
      "A debt management app. Log what you owe across credit cards, Mercado Pago and informal debts, then track purchases, installments, due dates and totals for each creditor.",
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Zod", "TanStack Query", "JWT"],
    demo: "https://deudas-ashen.vercel.app",
    source: "https://github.com/lnahuelfb/deudas-frontend",
  },
  {
    name: "Turnealo",
    description:
      "An appointment-booking SaaS for any business that runs on appointments. Clients book on their own, each professional has their own agenda and services, and each business gets its own page.",
    tags: ["Next.js", "React", "TypeScript", "Prisma", "Supabase", "Zod", "Web Push"],
    demo: "https://turnealo.com.ar",
    // Repo is private: add `source` once it is public.
  },
];

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-border">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-10 px-5 py-16 md:px-8 md:py-24">
        <SectionHeading id="projects-title" label="02 / Personal projects" title="Two things I built for myself" />
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="flex min-w-0 flex-col gap-4 rounded-lg border border-border bg-surface p-6 shadow-[0_1px_2px_rgba(11,13,16,.04)] transition-colors hover:border-border-strong dark:shadow-none"
            >
              <h3 className="text-h3">{p.name}</h3>
              <p className="m-0 text-muted">{p.description}</p>
              <ul aria-label="Stack" className="m-0 flex list-none flex-wrap gap-1.5 p-0 font-mono text-[12px] leading-4 text-muted">
                {p.tags.map((t) => (
                  <li key={t} className="rounded border border-border px-2 py-1">{t}</li>
                ))}
              </ul>
              <div className="mt-auto flex gap-6">
                <ExternalLink href={p.demo} className="text-text">Live demo</ExternalLink>
                {p.source && <ExternalLink href={p.source}>Source</ExternalLink>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
