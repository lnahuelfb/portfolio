import { SectionHeading } from "./SectionHeading";

const STEPS = [
  ["You describe the problem by email.", "Tell me what data you need, where it comes from and how often."],
  ["We agree on a small fixed-scope pilot.", "Scope, price and delivery date are agreed in writing up front. You get a working deliverable, then decide whether to continue."],
  ["I work async and report every week, in writing.", "Each week you get a written update on what's done and we agree on what comes next. You can write to me in between if something looks off."],
  ["Optionally, a monthly retainer.", "Sources change without warning. On a monthly retainer I monitor your collection, handle breakages quickly and send a written report each month on what ran, what failed and what I did."],
] as const;

export function HowIWork() {
  return (
    <section id="process" aria-labelledby="process-title" className="border-t border-border">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-10 px-5 py-16 md:px-8 md:py-24">
        <SectionHeading id="process-title" label="02 / How I work" title="Start small, in writing" />
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
              I&apos;m on UTC-3. That overlaps with US East and Central business hours and with European afternoons.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
