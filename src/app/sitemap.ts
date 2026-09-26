export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { allRoutes } from "@/content/registry";
import { articles } from "@/content/insights";
import { absoluteUrl } from "@/lib/seo";

/** Only canonical, indexable pages. Split into section sitemaps with generateSitemaps() as the site grows. */
export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Map(articles.map((a) => [`/insights/${a.slug}`, a.updated]));
  return allRoutes()
    .filter((r) => r.indexable)
    .map((r) => ({
      url: absoluteUrl(r.path),
      lastModified: updated.get(r.path) ?? "2026-09-26",
      changeFrequency: r.path === "/" ? "weekly" : "monthly",
      priority: r.path === "/" ? 1 : ["/business-ai", "/academy", "/studio"].includes(r.path) ? 0.9 : 0.7,
    }));
}
