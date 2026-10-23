"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "./Icons";

export function ThemeToggle({ size = 36 }: { size?: 32 | 36 }) {
  const { resolvedTheme, setTheme } = useTheme();
  // Both icons are in the HTML and CSS picks one, so there is no hydration mismatch.
  return (
    <button
      type="button"
      aria-label="Toggle light and dark theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      style={{ width: size, height: size }}
      className="inline-flex cursor-pointer items-center justify-center rounded-md border border-border bg-transparent text-muted transition-colors hover:text-accent"
    >
      <Moon className="dark:hidden" />
      <Sun className="hidden dark:block" />
    </button>
  );
}
