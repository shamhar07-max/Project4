"use client";

/**
 * Horizontal scroll-snap carousel (a scroll area on touch). With `header`, the previous/next
 * buttons sit at the top right beside it, as in the NeoVision "Our service" row.
 */
import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Carousel({ label, header, children }: { label: string; header?: ReactNode; children: ReactNode }) {
  const ref = useRef<HTMLUListElement>(null);
  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(280, el.clientWidth * 0.8), behavior: "smooth" });
  };
  const controls = (
    <div className="flex shrink-0 gap-2">
      {([-1, 1] as const).map((d) => (
        <button
          key={d}
          type="button"
          onClick={() => go(d)}
          className="grid size-11 place-items-center rounded-full border border-line-strong bg-fill text-ink transition-colors hover:border-accent/70 hover:bg-accent/15"
        >
          {d < 0 ? <ChevronLeft className="size-5" aria-hidden="true" /> : <ChevronRight className="size-5" aria-hidden="true" />}
          <span className="sr-only">{d < 0 ? "Previous" : "Next"}</span>
        </button>
      ))}
    </div>
  );
  return (
    <div className="relative">
      {header ? (
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>{header}</div>
          {controls}
        </div>
      ) : null}
      <ul
        ref={ref}
        aria-label={label}
        className={cn(
          "-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:px-0",
        )}
      >
        {children}
      </ul>
      {header ? null : <div className="mt-4">{controls}</div>}
    </div>
  );
}
