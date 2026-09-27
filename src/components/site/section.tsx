import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The one section heading used across the site (homepage and inner pages): a pill label with
 * an orange dot, a semibold sentence-case title and an optional intro.
 */
export function SectionHead({
  eyebrow,
  title,
  intro,
  center = false,
  as: H = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
  as?: "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center", className)} data-reveal>
      {eyebrow ? (
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-xs font-semibold text-ink-2">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
          {eyebrow}
        </p>
      ) : null}
      <H className={cn("text-h2 font-semibold text-ink", eyebrow && "mt-5")}>{title}</H>
      {intro ? <div className={cn("mt-4 text-lead text-ink-2", center && "mx-auto max-w-2xl")}>{intro}</div> : null}
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "paper",
  className,
  headingLevel = 2,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: ReactNode;
  children?: ReactNode;
  /** Kept for existing callers; sections share the homepage's plain canvas, so tone no longer paints a band. */
  tone?: "paper" | "surface" | "ink";
  className?: string;
  headingLevel?: 2 | 3;
}) {
  void tone;
  return (
    <section id={id} className={cn("relative scroll-mt-24 section-pad", className)}>
      <div className="container-site">
        {title ? <SectionHead eyebrow={eyebrow} title={title} intro={intro} as={headingLevel === 2 ? "h2" : "h3"} /> : null}
        <div className={title ? "mt-10 sm:mt-12" : ""} data-reveal style={{ ["--i" as string]: 1 }}>
          {children}
        </div>
      </div>
    </section>
  );
}
