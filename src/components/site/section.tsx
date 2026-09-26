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
        "scroll-mt-24 section-pad",
        tone === "surface" && "bg-surface",
        tone === "ink" && "bg-ink text-white",
        className,
      )}
    >
      <div className="container-site">
        {title ? (
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className={cn("eyebrow", tone === "ink" ? "text-accent" : "text-accent-strong")}>{eyebrow}</p>
            ) : null}
            <H className={cn("mt-3 text-h2 font-extrabold", tone === "ink" ? "text-white" : "text-ink")}>{title}</H>
            {intro ? (
              <div className={cn("mt-5 text-lead", tone === "ink" ? "text-white/75" : "text-ink-2")}>{intro}</div>
            ) : null}
          </div>
        ) : null}
        <div className={title ? "mt-10 sm:mt-12" : ""}>{children}</div>
      </div>
    </section>
  );
}
