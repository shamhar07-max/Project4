import type { ReactNode } from "react";
import type { Crumb } from "@/lib/seo";
import { Breadcrumbs } from "./breadcrumbs";
import { HeroPhoto } from "./photo-bg";
import { cn } from "@/lib/utils";

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  children,
  aside,
  className,
}: {
  crumbs?: Crumb[];
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative isolate overflow-hidden border-b border-line", className)}>
      <HeroPhoto />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="ember-glow absolute -bottom-1/2 right-[-10%] h-full w-[60%] opacity-70" />
        <div className="ai-grid absolute inset-0 opacity-70" />
      </div>
      <div className="container-site relative pb-16 pt-8 sm:pb-20 lg:min-h-[30rem] lg:pb-24">
        {crumbs ? <Breadcrumbs items={crumbs} /> : null}
        <div className={cn("mt-10 grid gap-10 lg:mt-14", aside ? "lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16" : "")}>
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="eyebrow animate-rise flex items-center gap-3 text-accent-strong">
                <span aria-hidden="true" className="h-px w-8 bg-accent" />
                {eyebrow}
              </p>
            ) : null}
            <h1 className="animate-rise mt-5 text-h1 font-medium text-ink" style={{ ["--d" as string]: "80ms" }}>
              {title}
            </h1>
            {lead ? (
              <p className="animate-rise mt-6 max-w-2xl text-lead text-ink-2" style={{ ["--d" as string]: "160ms" }}>
                {lead}
              </p>
            ) : null}
            {children ? (
              <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ ["--d" as string]: "240ms" }}>
                {children}
              </div>
            ) : null}
          </div>
          {aside ? (
            <div className="animate-rise lg:pt-2" style={{ ["--d" as string]: "300ms" }}>
              {aside}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
