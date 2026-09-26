"use client";

/**
 * Full-bleed background photo for a section. Place inside a parent with `relative isolate`.
 *
 * Readability is fixed by maths, not by eye: the photo's tonal range is compressed with a CSS
 * filter and then covered by a brand-colour overlay, so the worst-case pixel under any text still
 * gives WCAG AA contrast for every text colour we use.
 *  - light: contrast(.7) brightness(1.2) under paper/90. Darkest possible backdrop is a light grey (about 234/255), where
 *    ink is 14.6:1, muted 5.2:1 and accent-strong 4.5:1.
 *  - dark: contrast(.9) brightness(.55) under night/80. Lightest possible backdrop is a deep green-grey, where
 *    white is 13.5:1 and white/60 is 5.9:1.
 */
import { usePathname } from "next/navigation";
import { photoFor, photos, type Photo, type PhotoKey } from "@/content/backgrounds";
import { cn } from "@/lib/utils";

const widths = [640, 1080, 1600, 2200];
const url = (src: string, w: number) => `${src}?auto=format&fit=crop&q=60&w=${w}`;

export function PhotoBg({
  seed = "section",
  photo,
  index,
  tone = "light",
  priority = false,
  className,
}: {
  seed?: string;
  photo?: PhotoKey;
  /** Position on the page; spreads neighbouring sections across the pool. */
  index?: number;
  tone?: "light" | "dark";
  priority?: boolean;
  className?: string;
}) {
  const pathname = usePathname() ?? "/";
  const p: Photo = photo ? photos[photo] : photoFor(pathname, seed, index);
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- remote Unsplash hotlink with its own resizing */}
      <img
        src={url(p.src, 1600)}
        srcSet={widths.map((w) => `${url(p.src, w)} ${w}w`).join(", ")}
        sizes="100vw"
        alt=""
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        style={p.position ? { objectPosition: p.position } : undefined}
        className={cn(
          "size-full object-cover",
          tone === "light" ? "[filter:contrast(.7)_brightness(1.2)]" : "[filter:contrast(.9)_brightness(.55)]",
        )}
      />
      <div className={cn("absolute inset-0", tone === "light" ? "bg-paper/90" : "bg-night/80")} />
    </div>
  );
}
