import { Fragment } from "react";
import { Chevron } from "./Icons";

// [verify] workers really run Python/Playwright and MySQL sits behind the API.
const NODES = [
  { name: "Sources", lines: ["38 modules", "21 people", "17 companies"], core: false },
  { name: "Redis queues", lines: ["one per module", "split by load"], core: true },
  { name: "Workers", lines: ["Python", "Playwright"], core: false },
  { name: "API", lines: ["FastAPI", "MySQL"], core: false },
  { name: "Web app", lines: ["React", "TypeScript"], core: false },
];

export function ArchitectureDiagram() {
  return (
    <figure className="m-0 flex flex-col gap-3">
      <div
        role="img"
        aria-label="Architecture: 38 source modules feed Redis queues, one per module; Python and Playwright workers process them; a FastAPI and MySQL API serves a React and TypeScript web app."
        className="flex flex-col items-stretch lg:flex-row"
      >
        {NODES.map((n, i) => (
          <Fragment key={n.name}>
            {i > 0 && (
              <div
                aria-hidden="true"
                className="flex h-4 shrink-0 items-center justify-center text-muted lg:h-auto lg:w-8"
              >
                <Chevron className="rotate-90 lg:rotate-0" />
              </div>
            )}
            <div
              className={`flex flex-1 basis-0 flex-col gap-2 rounded-lg border p-4 ${
                n.core ? "border-accent bg-accent-soft" : "border-border bg-surface"
              }`}
            >
              <span className={`text-[15px] font-semibold leading-5 ${n.core ? "text-accent" : ""}`}>
                {n.name}
              </span>
              <span className="font-mono text-[12px] leading-[18px] text-muted">
                {n.lines.map((l, j) => (
                  <Fragment key={l}>
                    {j > 0 && <br />}
                    {l}
                  </Fragment>
                ))}
              </span>
            </div>
          </Fragment>
        ))}
      </div>
      <figcaption className="text-small text-muted">
        Simplified. Source names are left out for confidentiality.
      </figcaption>
    </figure>
  );
}
