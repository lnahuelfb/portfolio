import Image from "next/image";

// 192x192 WebP, shown at 40 or 64 px so it stays sharp on 3x screens.
export function Avatar({ size, priority = false }: { size: 40 | 64; priority?: boolean }) {
  return (
    <Image
      src="/avatar-192.webp"
      alt="Nahuel Fernandez"
      width={size}
      height={size}
      priority={priority}
      className="shrink-0 rounded-full border border-border-strong bg-surface-2 object-cover"
    />
  );
}
