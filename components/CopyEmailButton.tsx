"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "./Icons";

type State = "idle" | "copied" | "failed";

const LABEL: Record<State, string> = {
  idle: "Copy email",
  copied: "Copied",
  failed: "Copy failed",
};

export function CopyEmailButton({ email }: { email: string }) {
  const [state, setState] = useState<State>("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function onClick() {
    let next: State = "copied";
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      next = "failed";
    }
    setState(next);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), next === "failed" ? 3000 : 2000);
  }

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-md border border-border-strong bg-transparent px-3.5 font-mono text-[13px] text-text transition-colors hover:border-accent hover:text-accent"
      >
        {state === "copied" ? <Check /> : <Copy />}
        <span>{LABEL[state]}</span>
      </button>
      {/* Sibling live region: screen readers do not reliably announce changes inside a focused button. */}
      <span role="status" className="sr-only">
        {state === "copied" && "Email copied"}
        {state === "failed" && "Copy failed. Select the address and copy it manually."}
      </span>
    </>
  );
}
