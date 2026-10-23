import { ExternalLink } from "./ExternalLink";
import { SectionHeading } from "./SectionHeading";

type Project = {
  name: string;
  description: string;
  tags: string[];
  placeholderTags?: string[];
  demo: string;
  source: string;
};

// [placeholder] every "#" link, project name, description line and stack gap.
const PROJECTS: Project[] = [
  {
    name: "[Project name]",
    description: "A credit-card and debt management app. [Add one line on what a user does with it.]",
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Zod", "TanStack Query", "JWT"],
    demo: "#",
    source: "#",
  },
  {
    name: "Turnealo",
    description: "An appointment-management SaaS. [Add one line on who it's for.]",
    tags: ["Next.js"],
    placeholderTags: ["[rest of stack]"],
    demo: "#",
    source: "#",
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
                {p.placeholderTags?.map((t) => (
                  <li key={t} className="rounded border border-dashed border-border-strong px-2 py-1">{t}</li>
                ))}
              </ul>
              <div className="mt-auto flex gap-6">
                <ExternalLink href={p.demo} className="text-text">Live demo</ExternalLink>
                <ExternalLink href={p.source}>Source</ExternalLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
