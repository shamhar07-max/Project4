import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { NavLink } from "@/lib/site";
import { PhotoBg } from "./photo-bg";

export function RelatedLinks({ links, title = "Related", index }: { links: NavLink[]; title?: string; index?: number }) {
  if (!links.length) return null;
  return (
    <section className="relative isolate overflow-hidden border-t border-line section-pad" aria-labelledby="related-heading">
      <PhotoBg seed={`related-${title}`} index={index} />
      <div className="container-site">
        <h2 id="related-heading" className="text-h2 font-extrabold text-ink">
          {title}
        </h2>
        <ul className="mt-8 grid gap-2 rounded-xl border border-line bg-surface/60 p-2 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l, i) => (
            <li key={l.href} data-reveal style={{ ["--i" as string]: i % 6 }}>
              <Link
                href={l.href}
                className="card-interactive group flex h-full items-center justify-between gap-4 rounded-lg border border-line bg-paper p-5"
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
