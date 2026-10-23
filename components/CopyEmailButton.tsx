"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "./Icons";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function onClick() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-md border border-border-strong bg-transparent px-3.5 font-mono text-[13px] text-text transition-colors hover:border-accent hover:text-accent"
    >
      {copied ? <Check /> : <Copy />}
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
