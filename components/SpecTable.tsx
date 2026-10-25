const ROWS: [string, string][] = [
  ["role", "Sole developer (backend, API, frontend)"],
  ["sources", "38 modules: 21 for people, 17 for companies"],
  ["queues", "Redis, separate queues and workers by type of source"],
  ["scheduling", "Global cap on concurrent reports, turns shared between accounts"],
  ["backend", "Python (RQ workers), FastAPI, Playwright, Redis"],
  ["database", "MySQL, private, not exposed to the internet"],
  ["frontend", "React, TypeScript"],
  ["quality", "~1,700 automated tests · CI on every pull request"],
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
