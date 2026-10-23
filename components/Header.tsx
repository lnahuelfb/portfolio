import { MAILTO, SITE } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[1120px] items-center justify-between gap-4 px-5 md:px-8">
        <a href="#top" className="text-[15px] font-semibold text-text">
          {SITE.name}
        </a>
        <nav aria-label="Main" className="flex items-center gap-3 md:gap-6">
          <a href="#work" className="hidden font-mono text-[13px] md:inline">Case study</a>
          <a href="#projects" className="hidden font-mono text-[13px] md:inline">Projects</a>
          <a href="#process" className="hidden font-mono text-[13px] md:inline">How I work</a>
          <a
            href={MAILTO}
            className="btn-outline inline-flex h-10 items-center rounded-md border border-border-strong px-3.5 text-[14px] font-medium"
          >
            Email me
          </a>
          <ThemeToggle size={36} />
        </nav>
      </div>
    </header>
  );
}
