import { SITE } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-5 py-6 font-mono text-[12px] leading-4 text-muted md:px-8">
        <span>© 2026 {SITE.fullName}</span>
        <div className="flex items-center gap-5">
          <a href={SITE.linkedin} target="_blank" rel="noopener">
            LinkedIn<span className="sr-only"> (opens in new tab)</span>
          </a>
          <a href={SITE.github} target="_blank" rel="noopener">
            GitHub<span className="sr-only"> (opens in new tab)</span>
          </a>
          <ThemeToggle size={32} />
        </div>
      </div>
    </footer>
  );
}
