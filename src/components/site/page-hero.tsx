import type { ReactNode } from "react";
import type { Crumb } from "@/lib/seo";
import { Breadcrumbs } from "./breadcrumbs";
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
    <section className={cn("relative overflow-hidden border-b border-line", className)}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(252_48_18/0.18),transparent)]" />
        <div className="absolute -right-20 top-10 size-72 rounded-full bg-[radial-gradient(closest-side,rgb(45_226_196/0.12),transparent)]" />
      </div>
      <div className="container-site relative pb-14 pt-8 sm:pb-16 lg:pb-20">
        {crumbs ? <Breadcrumbs items={crumbs} /> : null}
        <div className={cn("mt-10 grid gap-10 lg:mt-14", aside ? "lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16" : "")}>
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="eyebrow animate-rise flex items-center gap-3 text-accent-strong">
                <span aria-hidden="true" className="relative flex size-2"><span className="absolute inset-0 animate-ping rounded-full bg-ai/60" /><span className="relative size-2 rounded-full bg-ai" /></span>
                {eyebrow}
              </p>
            ) : null}
            <h1 className="animate-rise mt-4 text-h1 font-extrabold text-ink" style={{ ["--d" as string]: "80ms" }}>
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
