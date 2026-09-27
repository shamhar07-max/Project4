"use client";

import { usePathname } from "next/navigation";
import { photoFor, type Photo } from "@/content/backgrounds";
import { cn } from "@/lib/utils";

const widths = [480, 800, 1200, 1600];
const url = (src: string, w: number) => `${src}?auto=format&fit=crop&q=65&w=${w}`;

/**
 * Page-hero photo card (Sentient / Lumini style): the route's hero photo in a rounded,
 * softly shadowed card. Decorative, so it carries no alt text.
 */
export function HeroPhoto({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/";
  const p: Photo = photoFor(pathname);
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-white bg-paper shadow-[0_40px_80px_-40px_rgb(11_12_12/0.45)]",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- remote Unsplash hotlink with its own resizing */}
      <img
        src={url(p.src, 1200)}
        srcSet={widths.map((w) => `${url(p.src, w)} ${w}w`).join(", ")}
        sizes="(min-width: 1024px) 34rem, 100vw"
        alt=""
        fetchPriority="high"
        decoding="async"
        style={p.position ? { objectPosition: p.position } : undefined}
        className="size-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgb(11_12_12/0.35))]" />
    </div>
  );
}
