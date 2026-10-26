import { MAILTO, PITCH, SITE } from "@/lib/site";
import { Avatar } from "./Avatar";
import { CopyEmailButton } from "./CopyEmailButton";
import { ExternalLink } from "./ExternalLink";
import { ArrowRight } from "./Icons";

const ROWS: [string, string][] = [
  ["collect", "web sources · APIs · browser automation"],
  ["queue", "Redis job queues, split by type"],
  ["recover", "retries · resume after failure"],
  ["watch", "monitoring · alerts"],
  ["ship", "API + web app"],
];

const STACK =
  "TypeScript · Node.js · React · Next.js · PostgreSQL · Prisma · Python · FastAPI · Playwright · Redis";

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="mx-auto grid max-w-[1120px] items-center gap-10 px-5 pb-20 pt-16 md:px-8 md:pt-24 lg:grid-cols-12 lg:gap-14 lg:pt-[120px]"
    >
      <div className="flex min-w-0 flex-col gap-6 lg:col-span-7">
        <div className="flex items-center gap-3">
          <Avatar size={40} priority />
          <p className="text-mono-label text-balance text-muted"><span className="whitespace-nowrap">Full-stack developer ·</span> <span className="whitespace-nowrap">Argentina (UTC-3)</span></p>
        </div>
        <h1 className="text-display max-w-[620px]">
          Reliable data collection and automation, built to keep running.
        </h1>
        <p className="text-body-lg max-w-[560px] text-muted">{PITCH}</p>
        <div className="flex flex-col items-stretch gap-x-6 gap-y-1 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={MAILTO}
            className="btn-primary inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 text-[15px] font-medium"
          >
            Email me
            <ArrowRight />
          </a>
          <div className="flex gap-6">
            <ExternalLink href={SITE.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={SITE.github}>GitHub</ExternalLink>
          </div>
        </div>
        <div className="text-small flex flex-col gap-1 text-muted">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[13px] text-text">{SITE.email}</span>
            <CopyEmailButton email={SITE.email} />
          </div>
          <p className="m-0">
            {SITE.available && "Currently taking on new pilots. "}I reply within one business day.
          </p>
        </div>
      </div>

      <div className="text-mono-data min-w-0 overflow-hidden rounded-lg border border-border bg-surface shadow-[0_1px_2px_rgba(11,13,16,.04)] dark:shadow-none lg:col-span-5">
        <div className="flex items-center justify-between border-b border-border bg-surface-2 px-4 py-2.5">
          <span className="text-muted">what-i-build</span>
          <div aria-hidden="true" className="flex gap-1.5">
            <span className="size-2 rounded-full bg-border-strong" />
            <span className="size-2 rounded-full bg-border-strong" />
            <span className="size-2 rounded-full bg-border-strong" />
          </div>
        </div>
        <dl className="grid grid-cols-[80px_minmax(0,1fr)] gap-x-4 gap-y-3 px-4 py-5">
          {ROWS.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="text-accent">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <div className="grid grid-cols-[80px_minmax(0,1fr)] gap-x-4 border-t border-border p-4 text-muted">
          <span>stack</span>
          <span>{STACK}</span>
        </div>
      </div>
    </section>
  );
}
