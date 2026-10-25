// Placeholder until the headshot exists. When it does, swap for next/image
// (128x128 / 192x192 AVIF/WebP, `priority` in the hero) with the same size.
export function Avatar({ size }: { size: 40 | 64 }) {
  return (
    <div
      aria-hidden="true"
      style={{ width: size, height: size }}
      className="flex shrink-0 items-center justify-center rounded-full border border-border-strong bg-surface-2 font-mono text-[12px] text-muted"
    >
      NF
    </div>
  );
}
