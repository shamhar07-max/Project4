import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { NavLink } from "@/lib/site";

export function RelatedLinks({ links, title = "Related" }: { links: NavLink[]; title?: string }) {
  if (!links.length) return null;
  return (
    <section className="border-t border-line section-pad" aria-labelledby="related-heading">
      <div className="container-site">
        <h2 id="related-heading" className="text-h2 font-extrabold text-ink">
          {title}
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l, i) => (
            <li key={l.href} data-reveal style={{ ["--i" as string]: i % 6 }}>
              <Link
                href={l.href}
                className="card-interactive group flex h-full items-start justify-between gap-4 rounded-lg border border-line bg-paper p-5 hover:border-line-strong"
              >
                <span>
                  <span className="block font-bold text-ink">{l.label}</span>
                  {l.description ? <span className="mt-1 block text-sm text-muted">{l.description}</span> : null}
                </span>
                <ArrowRight
                  className="size-4 shrink-0 text-accent-strong transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
