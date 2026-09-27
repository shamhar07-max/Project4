import type { ReactNode } from "react";
import type { Crumb } from "@/lib/seo";
import { Breadcrumbs } from "./breadcrumbs";
import { HeroPhoto } from "./photo-bg";
import { cn } from "@/lib/utils";

/**
 * Inner-page hero, built from the homepage hero: the same framed rounded panel (dotted canvas,
 * frame guides, warm gradient), the same pill label and headline scale, and the same buttons
 * (first action orange, second grey). The route's photo sits in a rounded card on the right;
 * on content pages the key points float over it as a glass card.
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
    <section className={cn("px-2 sm:px-4", className)}>
      <div className="relative isolate mx-auto max-w-[88rem] overflow-hidden rounded-[2rem] border border-white bg-[linear-gradient(180deg,var(--color-paper)_0%,var(--color-canvas)_60%,var(--color-accent-soft)_100%)] shadow-[0_30px_80px_-50px_rgb(11_12_12/0.35)]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="dot-canvas absolute inset-0 opacity-80" />
          <div className="absolute inset-x-6 top-6 h-px bg-line-strong sm:inset-x-10" />
          <div className="absolute inset-y-6 left-6 w-px bg-line-strong sm:left-10" />
          <div className="absolute inset-y-6 right-6 w-px bg-line-strong sm:right-10" />
          <div className="ember-glow absolute -right-40 bottom-[-30%] size-[36rem]" />
        </div>
        <div className="container-site relative pb-14 pt-10 sm:pb-16 lg:pb-20">
          {crumbs ? <Breadcrumbs items={crumbs} /> : null}
          <div className="mt-8 grid items-center gap-12 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-16">
            <div className="max-w-3xl">
              {eyebrow ? (
                <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-xs font-semibold text-ink-2 shadow-[0_1px_2px_rgb(11_12_12/0.05)]">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                  {eyebrow}
                </p>
              ) : null}
              <h1
                className="animate-rise mt-5 text-[length:clamp(2.1rem,1.1rem+3vw,3.9rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink"
                style={{ ["--d" as string]: "80ms" }}
              >
                {title}
              </h1>
              {lead ? (
                <p className="animate-rise mt-5 max-w-2xl text-lead text-ink-2" style={{ ["--d" as string]: "160ms" }}>
                  {lead}
                </p>
              ) : null}
              {children ? (
                <div
                  className={cn(
                    "animate-rise mt-8 flex flex-wrap gap-3",
                    // Same pair as the homepage hero: orange first action, grey second.
                    "[&>a]:h-12 [&>a]:rounded-full [&>a]:px-6",
                    "[&>a:first-child]:bg-accent-deep [&>a:first-child]:text-white [&>a:first-child]:shadow-[0_12px_30px_-12px_rgb(252_48_18/0.8)] [&>a:first-child:hover]:bg-accent-hover",
                    "[&>a:nth-child(2)]:border-transparent [&>a:nth-child(2)]:bg-fill [&>a:nth-child(2)]:shadow-none [&>a:nth-child(2):hover]:bg-line-strong",
                  )}
                  style={{ ["--d" as string]: "240ms" }}
                >
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
      </div>
    </section>
  );
}
