import { MAILTO } from "@/lib/site";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { ArrowRight } from "./Icons";
import { SectionHeading } from "./SectionHeading";
import { SpecTable } from "./SpecTable";

const POINTS = [
  ["Isolation", "Redis queues are split by type of source, each with its own worker, so a heavy module doesn't hold up the light ones. A dispatcher shares capacity between accounts."],
  ["Testing", "About 1,700 automated tests, and CI runs on every pull request."],
] as const;

// Message from the client, translated from Spanish. Published with their approval; kept anonymous like the rest of the case study.
const CLIENT_QUOTE =
  "…great responsibility and work ethic, which is the basis for long-term relationships. I was really glad that the need for a written agreement came from you. You are always concerned with complementary matters and with the global view of the solution (improvements, risks, etc.). It is exactly the kind of support I’m looking for.";

export function CaseStudy() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-border">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-10 px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          id="work-title"
          label="01 / Case study"
          title="A due-diligence reporting platform, built solo"
          intro="A web platform that produces due diligence reports on people and companies. It collects data from 38 source modules in parallel and assembles the results into one report. The client uses it internally, in production. I built the backend, the API and the web app on my own in about three months."
        />
        <ArchitectureDiagram />
        <div className="grid gap-8 md:grid-cols-2">
          {POINTS.map(([label, text]) => (
            <div key={label} className="flex flex-col gap-2 border-t border-border pt-4">
              <span className="text-mono-label text-accent">{label}</span>
              <p className="m-0">{text}</p>
            </div>
          ))}
        </div>
        <SpecTable />
        <figure className="m-0 flex max-w-[720px] flex-col gap-3 border-l-2 border-accent pl-5">
          <span className="text-mono-label text-accent">From the client</span>
          <blockquote className="text-body-lg m-0">
            <p className="m-0">&ldquo;{CLIENT_QUOTE}&rdquo;</p>
          </blockquote>
          <figcaption className="text-small text-muted">
            Client of the due-diligence platform · translated from Spanish
          </figcaption>
        </figure>
        <div className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 shadow-[0_1px_2px_rgba(11,13,16,.04)] dark:shadow-none sm:flex-row sm:items-center sm:justify-between">
          <p className="text-h3 m-0">
            Have a similar problem? <span className="text-muted">Email me a short description.</span>
          </p>
          <a
            href={MAILTO}
            className="btn-primary inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-accent px-5 text-[15px] font-medium"
          >
            Email me
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
