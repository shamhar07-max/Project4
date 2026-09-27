import type { ReactNode } from "react";
import type { Crumb } from "@/lib/seo";
import { Breadcrumbs } from "./breadcrumbs";
import { HeroPhoto } from "./photo-bg";
import { cn } from "@/lib/utils";

/**
 * Page hero in the light SaaS style: copy on the left, the route's photo in a rounded card on
 * the right, and (on content pages) the key points as a floating glass card over the photo.
 */
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
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="dot-canvas absolute inset-0 opacity-70" />
        <div className="ember-glow absolute -right-40 top-10 size-[36rem]" />
      </div>
      <div className="container-site relative pb-16 pt-8 sm:pb-20 lg:pb-24">
        {crumbs ? <Breadcrumbs items={crumbs} /> : null}
        <div className="mt-10 grid items-center gap-12 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:gap-16">
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-xs font-semibold text-ink-2 shadow-[0_1px_2px_rgb(11_12_12/0.05)]">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                {eyebrow}
              </p>
            ) : null}
            <h1 className="animate-rise mt-5 text-h1 font-semibold text-ink" style={{ ["--d" as string]: "80ms" }}>
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
          <div className="animate-rise relative" style={{ ["--d" as string]: "300ms" }}>
            <HeroPhoto className={aside ? "aspect-[4/3] max-lg:hidden" : "aspect-[4/3]"} />
            {aside ? <div className="relative lg:-mt-28 lg:mx-6">{aside}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
