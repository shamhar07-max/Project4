import { photos, type PhotoKey } from "@/content/backgrounds";
import { cn } from "@/lib/utils";

const widths = [480, 800, 1200, 1800];
const url = (src: string, w: number) => `${src}?auto=format&fit=crop&q=65&w=${w}`;

/** A content photo from Unsplash (credited on /credits). Decorative by default. */
export function Photo({
  photo,
  alt = "",
  sizes = "100vw",
  priority = false,
  className,
}: {
  photo: PhotoKey;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const p = photos[photo] as { src: string; position?: string };
  return (
    // eslint-disable-next-line @next/next/no-img-element -- remote Unsplash hotlink with its own resizing
    <img
      src={url(p.src, 1200)}
      srcSet={widths.map((w) => `${url(p.src, w)} ${w}w`).join(", ")}
      sizes={sizes}
      alt={alt}
      aria-hidden={alt ? undefined : true}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      style={p.position ? { objectPosition: p.position } : undefined}
      className={cn("size-full object-cover", className)}
    />
  );
}
