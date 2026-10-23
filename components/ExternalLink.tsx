import { ArrowUpRight } from "./Icons";

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={`inline-flex min-h-11 items-center gap-1 font-mono text-[14px] ${className}`}
    >
      {children}
      <ArrowUpRight />
      <span className="sr-only">(opens in new tab)</span>
    </a>
  );
}
