"use client";

/** Horizontal scroll-snap carousel with previous/next buttons (a scroll area on touch). */
import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel({ label, children }: { label: string; children: ReactNode }) {
  const ref = useRef<HTMLUListElement>(null);
  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(280, el.clientWidth * 0.8), behavior: "smooth" });
  };
  return (
    <div className="relative">
      <ul
        ref={ref}
        aria-label={label}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-4 [scrollbar-width:thin] sm:mx-0 sm:px-0"
      >
        {children}
      </ul>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => go(-1)}
          className="grid size-10 place-items-center rounded-full border border-line-strong bg-fill text-ink transition-colors hover:border-ai/60 hover:bg-ai-soft"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="grid size-10 place-items-center rounded-full border border-line-strong bg-fill text-ink transition-colors hover:border-ai/60 hover:bg-ai-soft"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
}
