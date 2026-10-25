import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { SectionHeading } from "./SectionHeading";
import { SpecTable } from "./SpecTable";

const POINTS = [
  ["Isolation", "Redis queues are split by type of source, each with its own worker, so a heavy module doesn't hold up the light ones. A dispatcher shares capacity fairly between accounts."],
  ["Testing", "About 1,700 automated tests, and CI runs on every pull request."],
  ["Delivery", "An API and a web app in React and TypeScript, used internally by the client in production."],
] as const;

export function CaseStudy() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-border">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-10 px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          id="work-title"
          label="01 / Case study"
          title="A due diligence report platform, built solo"
          intro="A web platform that produces due diligence reports on people and companies. It collects data from 38 source modules in parallel and assembles the results into one report. The client uses it in production, internally. I built the backend, the API and the web app on my own in about three months."
        />
        <ArchitectureDiagram />
        <div className="grid gap-8 md:grid-cols-3">
          {POINTS.map(([label, text]) => (
            <div key={label} className="flex flex-col gap-2 border-t border-border pt-4">
              <span className="text-mono-label text-accent">{label}</span>
              <p className="m-0">{text}</p>
            </div>
          ))}
        </div>
        <SpecTable />
      </div>
    </section>
  );
}
