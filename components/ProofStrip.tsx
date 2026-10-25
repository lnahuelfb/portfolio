const STATS = [
  ["38", "Data source modules"],
  ["~1,700", "Automated tests"],
  ["~3 months", "Built solo"],
  ["3–4 min", "Per report"],
] as const;

export function ProofStrip() {
  return (
    <section aria-label="Case study numbers" className="mx-auto max-w-[1120px] px-5 pb-16 md:px-8 md:pb-24">
      <p className="text-mono-label mb-3 text-muted">Case study · due diligence platform</p>
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
        {STATS.map(([value, label]) => (
          <div key={label} className="flex flex-col-reverse justify-end gap-2 bg-bg p-4 md:p-6">
            <dt className="text-mono-label text-muted">{label}</dt>
            <dd className="m-0 text-[24px] font-semibold leading-7 tracking-[-0.02em] md:text-stat">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="text-small mt-3 text-muted">
        From the case study below. Report time measured on the first 20 reports.
      </p>
    </section>
  );
}
