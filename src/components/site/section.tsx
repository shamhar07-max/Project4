import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
  tone?: "paper" | "surface" | "ink";
  className?: string;
  headingLevel?: 2 | 3;
}) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <section
      id={id}
      className={cn(
        "relative isolate scroll-mt-24 overflow-hidden section-pad",
        tone === "surface" && "border-y border-line bg-surface",
        tone === "ink" && "border-y border-line bg-night text-white",
        className,
      )}
    >
      <div className="container-site">
        {title ? (
          <div className="max-w-3xl" data-reveal>
            {eyebrow ? (
              <p className={cn("eyebrow", tone === "ink" ? "text-accent-strong" : "text-accent-strong")}>{eyebrow}</p>
            ) : null}
            <H className={cn("mt-3 text-h2 font-semibold", tone === "ink" ? "text-white" : "text-ink")}>{title}</H>
            {intro ? (
              <div className={cn("mt-5 text-lead", tone === "ink" ? "text-white/75" : "text-ink-2")}>{intro}</div>
            ) : null}
          </div>
        ) : null}
        <div className={title ? "mt-10 sm:mt-12" : ""} data-reveal style={{ ["--i" as string]: 1 }}>
          {children}
        </div>
      </div>
    </section>
  );
}
