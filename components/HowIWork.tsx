import { SectionHeading } from "./SectionHeading";

const STEPS = [
  ["You describe the problem by email.", "Tell me what data you need, where it comes from and how often. A few paragraphs is enough."],
  ["We agree on a small fixed-scope pilot.", "One clear deliverable, scope agreed in writing before I start, so you can judge the work before committing to more."],
  ["I work async and report every week, in writing.", "Each week you get a written update on what's done, and we agree on what comes next. If something looks wrong or missing in between, write to me and I'll deal with it."],
  ["Optional: an ongoing retainer.", "Websites and data sources change, and scrapers break when they do. On a monthly retainer I keep the system running and fix what breaks, and you get a written report of the support each month."],
] as const;

export function HowIWork() {
  return (
    <section id="process" aria-labelledby="process-title" className="border-t border-border">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-10 px-5 py-16 md:px-8 md:py-24">
        <SectionHeading id="process-title" label="03 / How I work" title="Start small, in writing" />
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <ol className="m-0 flex list-none flex-col border-b border-border p-0 lg:col-span-8">
            {STEPS.map(([title, body], i) => (
              <li key={title} className="grid grid-cols-[40px_minmax(0,1fr)] border-t border-border py-5 md:grid-cols-[48px_minmax(0,1fr)]">
                <span className="font-mono text-[13px] leading-[26px] text-accent">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-h3">{title}</h3>
                  <p className="m-0 text-muted">{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <aside className="flex flex-col gap-2 rounded-lg border border-border bg-surface p-5 shadow-[0_1px_2px_rgba(11,13,16,.04)] dark:shadow-none lg:sticky lg:top-24 lg:col-span-4">
            <span className="text-mono-label text-accent">Time zone</span>
            <p className="m-0 text-[15px] leading-6">
              I&apos;m on UTC-3. That overlaps with the full US business day and with European afternoons.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
