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
    <section className={cn("border-b border-line bg-paper", className)}>
      <div className="container-site pb-14 pt-8 sm:pb-16 lg:pb-20">
        {crumbs ? <Breadcrumbs items={crumbs} /> : null}
        <div className={cn("mt-10 grid gap-10 lg:mt-14", aside ? "lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16" : "")}>
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="eyebrow flex items-center gap-3 text-accent-strong">
                <span aria-hidden="true" className="h-px w-8 bg-accent" />
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-4 text-h1 font-extrabold text-ink">{title}</h1>
            {lead ? <p className="mt-6 max-w-2xl text-lead text-ink-2">{lead}</p> : null}
            {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
          </div>
          {aside ? <div className="lg:pt-2">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
