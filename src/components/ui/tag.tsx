import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Static label pill (skills, roles, sectors). Interactive filters use `tagLinkClass`. */
export function Tag({ children, tone = "surface", className }: { children: ReactNode; tone?: "surface" | "paper"; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-sm text-ink-2",
        tone === "surface" ? "bg-surface" : "bg-paper ring-1 ring-line",
        className,
      )}
    >
      {children}
    </span>
  );
}

export const tagLinkClass =
  "inline-flex h-10 items-center rounded-full border border-line px-4 text-sm font-semibold text-ink transition-colors hover:border-ai/60 hover:bg-ai-soft";
