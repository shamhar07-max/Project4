"use client";

/**
 * Division switcher in the NeoVision "Limitless possibilities" layout: a vertical tab list,
 * a cinematic photo, and the division's story. Follows the WAI-ARIA tabs pattern:
 * arrow keys move between tabs, Home/End jump, panels are labelled by their tab.
 */
import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight } from "lucide-react";
import type { PhotoKey } from "@/content/backgrounds";
import { Photo } from "./photo";
import { TrackedLink } from "./tracked-link";
import { cn } from "@/lib/utils";

export type DivisionTab = {
  key: string;
  name: string;
  icon: { src: string; w: number; h: number };
  photo: PhotoKey;
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
    if (e.key === "ArrowDown" || e.key === "ArrowRight") n = (i + 1) % tabs.length;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = tabs.length - 1;
    else return;
    e.preventDefault();
    setActive(n);
    refs.current[n]?.focus();
  }

  const t = tabs[active];
  return (
    <div className="grid gap-8 lg:grid-cols-[11rem_minmax(0,1fr)_20rem] lg:gap-10">
      <div role="tablist" aria-label="Divisions" aria-orientation="vertical" className="flex gap-1 overflow-x-auto lg:flex-col lg:gap-3 lg:pt-2">
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
              "flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-left text-sm transition-colors lg:rounded-none lg:px-0 lg:py-0",
              i === active ? "bg-fill text-ink lg:bg-transparent" : "text-muted hover:text-ink",
            )}
          >
            <span aria-hidden="true" className={cn("hidden h-px transition-all duration-500 lg:block", i === active ? "w-6 bg-accent" : "w-0 bg-transparent")} />
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
        className="animate-rise grid gap-8 lg:col-span-2 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-10"
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-paper">
          <Photo photo={t.photo} sizes="(min-width: 1024px) 40vw, 100vw" className="photo-noir" />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgb(0_0_0/0.75))]" />
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md">
              <Image src={t.icon.src} alt="" width={t.icon.w} height={t.icon.h} className="h-5 w-auto" />
            </span>
            <span className="text-sm font-semibold text-white">DigitalBurj {t.name}</span>
          </div>
        </div>
        <div className="flex flex-col">
          {t.badge ? (
            <span className="mb-3 w-fit rounded-full border border-amber/40 bg-amber/10 px-2.5 py-1 text-xs text-amber">{t.badge}</span>
          ) : null}
          <h3 className="text-2xl font-medium leading-tight tracking-tight text-ink">{t.title}</h3>
          <p className="mt-4 text-body-sm text-ink-2">{t.body}</p>
          <TrackedLink
            href={t.href}
            eventLabel={`home_tab_${t.key}`}
            className="group mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-ink"
          >
            {t.cta}
            <ArrowRight aria-hidden="true" className="size-4 text-accent-strong transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </TrackedLink>
          <ol aria-label={`${t.name} steps`} className="mt-6 flex flex-wrap gap-x-4 gap-y-1 border-t border-line pt-5 text-xs text-muted lg:mt-auto">
            {t.steps.map((s, i) => (
              <li key={s}>
                <span className="text-accent-strong">{String(i + 1).padStart(2, "0")}</span> {s}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
