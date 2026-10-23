const ROWS: [string, string][] = [
  ["role", "Sole developer (backend, API, front end)"],
  ["sources", "38 modules: 21 for people, 17 for companies"],
  ["queues", "Redis, one queue per module, split by load"],
  ["backend", "Python, FastAPI, Playwright, Redis, MySQL"],
  ["front end", "React, TypeScript"],
  ["quality", "~1,700 automated tests · CI on every pull request"],
  ["timeline", "~3 months"],
  ["report time", "~3–4 minutes (first 20 studies)"],
  ["status", "In production, used internally by the client"],
  ["sources used", "Public and third-party web sources"],
];

export function SpecTable() {
  return (
    <div className="flex max-w-[720px] flex-col gap-3">
      <dl className="m-0 border-t border-border text-[15px] leading-[22px]">
        {ROWS.map(([k, v]) => (
          <div key={k} className="border-b border-border py-3 md:grid md:grid-cols-[140px_minmax(0,1fr)]">
            <dt className="font-mono text-[13px] text-muted">{k}</dt>
            <dd className="m-0">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="text-small text-muted">Client and data sources anonymized.</p>
    </div>
  );
}
