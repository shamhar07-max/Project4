"use client";

/**
 * Full-bleed background photo for a section. Place inside a parent with `relative isolate`.
 *
 * Noir treatment: the photo is partly desaturated and darkened (contrast .9, brightness .55, so no
 * pixel is brighter than about 140/255), then covered with the canvas colour at 80% and a vignette.
 * The brightest possible backdrop is a deep charcoal (about 34/255), where the muted text colour
 * is still 4.9:1 and body text is over 10:1. `tone` only changes how dark the overlay is.
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
          "[filter:grayscale(.45)_contrast(.9)_brightness(.55)]",
        )}
      />
      <div className={cn("absolute inset-0", tone === "light" ? "bg-canvas/80" : "bg-night/78")} />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_40%,var(--color-canvas)_100%)]" />
    </div>
  );
}

/**
 * Page-hero photo panel: the route's hero photo on the right, melting into the canvas on its
 * left and bottom edges. Large screens only, so it never sits under body text.
 */
export function HeroPhoto({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/";
  const p: Photo = photoFor(pathname, "hero");
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[46%] lg:block",
        "[mask-image:linear-gradient(90deg,transparent,#000_40%),linear-gradient(180deg,#000_60%,transparent)] [mask-composite:intersect]",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- remote Unsplash hotlink with its own resizing */}
      <img
        src={url(p.src, 1600)}
        srcSet={widths.map((w) => `${url(p.src, w)} ${w}w`).join(", ")}
        sizes="46vw"
        alt=""
        fetchPriority="high"
        decoding="async"
        style={p.position ? { objectPosition: p.position } : undefined}
        className="size-full object-cover [filter:grayscale(.4)_contrast(1.05)_brightness(.7)]"
      />
    </div>
  );
}
