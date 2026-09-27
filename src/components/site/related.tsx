import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { NavLink } from "@/lib/site";

export function RelatedLinks({ links, title = "Related" }: { links: NavLink[]; title?: string }) {
  if (!links.length) return null;
  return (
    <section className="relative section-pad" aria-labelledby="related-heading">
      <div className="container-site">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-xs font-semibold text-ink-2">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
          Keep reading
        </p>
        <h2 id="related-heading" className="mt-5 text-h2 font-semibold text-ink">
          {title}
        </h2>
        <ul className="mt-10 grid gap-3 rounded-[2rem] border border-line bg-paper/70 p-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l, i) => (
            <li key={l.href} data-reveal style={{ ["--i" as string]: i % 6 }}>
              <Link
                href={l.href}
                className="card-interactive group flex h-full items-center justify-between gap-4 rounded-[1.25rem] border border-line bg-paper p-5"
              >
                <span>
                  <span className="block font-bold text-ink">{l.label}</span>
                  {l.description ? <span className="mt-1 block text-sm text-muted">{l.description}</span> : null}
                </span>
                <ChevronRight
                  className="size-5 shrink-0 text-muted transition-[transform,color] group-hover:translate-x-0.5 group-hover:text-accent-strong"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
