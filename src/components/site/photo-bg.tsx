"use client";

import { usePathname } from "next/navigation";
import { photoFor, type Photo } from "@/content/backgrounds";
import { cn } from "@/lib/utils";

const widths = [640, 1080, 1600, 2200];
const url = (src: string, w: number) => `${src}?auto=format&fit=crop&q=60&w=${w}`;

/**
 * Page-hero photo panel: the route's hero photo on the right, melting into the canvas on its
 * left and bottom edges. Large screens only, so it never sits under body text.
 */
export function HeroPhoto({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/";
  const p: Photo = photoFor(pathname);
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
