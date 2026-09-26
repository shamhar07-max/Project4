"use client";

/**
 * Tabs with a stepper per division. Follows the WAI-ARIA tabs pattern:
 * arrow keys move between tabs, Home/End jump, panels are labelled by their tab.
 */
import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "./tracked-link";
import { cn } from "@/lib/utils";

export type DivisionTab = {
  key: string;
  name: string;
  icon: { src: string; w: number; h: number };
  title: string;
  body: string;
  steps: string[];
  href: string;
  cta: string;
  badge?: string;
};

export function DivisionTabs({ tabs }: { tabs: DivisionTab[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKey(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    let n = i;
    if (e.key === "ArrowRight") n = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = tabs.length - 1;
    else return;
    e.preventDefault();
    setActive(n);
    refs.current[n]?.focus();
  }

  const t = tabs[active];
  return (
    <div>
      <div role="tablist" aria-label="Divisions" className="glass inline-flex max-w-full gap-1 overflow-x-auto rounded-full p-1">
        {tabs.map((tab, i) => (
          <button
            key={tab.key}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            id={`tab-${tab.key}`}
            aria-selected={i === active}
            aria-controls={`panel-${tab.key}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
            className={cn(
              "flex h-10 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-all duration-300",
              i === active
                ? "bg-ink text-white"
                : "text-ink-2 hover:bg-fill hover:text-ink",
            )}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div
        key={t.key}
        role="tabpanel"
        id={`panel-${t.key}`}
        aria-labelledby={`tab-${t.key}`}
        tabIndex={0}
        className="animate-rise mt-8 grid gap-10 rounded-xl border border-line bg-paper/80 p-6 backdrop-blur-md sm:p-10 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-16"
        data-spotlight
      >
        <div>
          <div className="flex items-center gap-3">
            <Image src={t.icon.src} alt="" width={t.icon.w} height={t.icon.h} className="h-12 w-auto" />
            {t.badge ? (
              <span className="rounded-full border border-amber/40 bg-amber/10 px-2.5 py-1 text-xs text-amber">{t.badge}</span>
            ) : null}
          </div>
          <h3 className="mt-6 text-h2 font-extrabold text-ink">{t.title}</h3>
          <p className="mt-4 text-lead text-ink-2">{t.body}</p>
          <Button asChild className="mt-8">
            <TrackedLink href={t.href} eventLabel={`home_tab_${t.key}`}>
              {t.cta} <ArrowRight aria-hidden="true" />
            </TrackedLink>
          </Button>
        </div>
        <ol className="relative space-y-3 self-center" aria-label={`${t.name} steps`}>
          <span aria-hidden="true" className="absolute bottom-5 left-[1.1875rem] top-5 w-px bg-[linear-gradient(to_bottom,var(--color-accent),var(--color-ai))] opacity-50" />
          {t.steps.map((s, i) => (
            <li key={s} className="animate-rise relative flex items-center gap-4" style={{ ["--d" as string]: `${i * 80}ms` }}>
              <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full border border-line-strong bg-paper text-sm text-ai shadow-[0_0_16px_-6px_var(--color-ai)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="rounded-md border border-line bg-paper px-4 py-2.5 text-body-sm font-semibold text-ink">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
