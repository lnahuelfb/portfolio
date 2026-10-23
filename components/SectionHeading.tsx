export function SectionHeading({
  id,
  label,
  title,
  intro,
}: {
  id: string;
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="flex max-w-[720px] flex-col gap-3">
      <p className="text-mono-label text-accent">{label}</p>
      <h2 id={id} className="text-h2">{title}</h2>
      {intro && <p className="text-body-lg mt-1 text-muted">{intro}</p>}
    </div>
  );
}
