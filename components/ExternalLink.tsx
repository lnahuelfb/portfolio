import { ArrowUpRight } from "./Icons";

export function ExternalLink({
  href,
  children,
  name,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  /** Project or site name, added to the screen-reader text only. */
  name?: string;
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
      <span className="sr-only">({name ? `${name}, ` : ""}opens in new tab)</span>
    </a>
  );
}
