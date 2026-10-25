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
    name: "Deudas App",
    description:
      "A debt management app. Log what you owe across credit cards, Mercado Pago and informal debts, then track purchases, installments, due dates and totals for each creditor.",
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Zod", "TanStack Query", "JWT"],
    demo: "https://deudas-ashen.vercel.app",
    source: "https://github.com/lnahuelfb/deudas-frontend",
  },
  {
    name: "Turnealo",
    description:
      "A booking SaaS for businesses that run on appointments. Clients book themselves, each professional has their own schedule and services, and each business gets its own page.",
    tags: ["Next.js", "React", "TypeScript", "Prisma", "Supabase", "Zod", "Web Push"],
    demo: "https://turnealo.com.ar",
    // Repo is private: add `source` once it is public.
  },
  {
    name: "Che Steam",
    description:
      "A web app that estimates what a Steam game costs in Argentine pesos. It reads Steam's store data, adds taxes and converts at the official, MEP or crypto rate, and serves results from the edge cache.",
    tags: ["Next.js", "React", "TypeScript", "Edge runtime"],
    demo: "https://che-steam.vercel.app",
    source: "https://github.com/lnahuelfb/che-steam-web",
  },
];

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-border">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-10 px-5 py-16 md:px-8 md:py-24">
        <SectionHeading id="projects-title" label="03 / Personal projects" title="Three things I built for myself" />
        <div className="grid gap-6 lg:grid-cols-3">
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
                <ExternalLink href={p.demo} name={p.name} className="text-text">Live demo</ExternalLink>
                {p.source && <ExternalLink href={p.source} name={p.name}>Source</ExternalLink>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
