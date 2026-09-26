import Link from "next/link";
import { allRoutes, type Section } from "@/content/registry";
import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/seo";
import { PhotoBg } from "@/components/site/photo-bg";

export const metadata = buildMetadata({ title: "Sitemap", description: "Every public page on digitalburj.com, organised by section: Business AI, Academy, Studio, Verified Talent, Jobs, Insights and more.", path: "/sitemap" });

const order: Section[] = ["Company", "Business AI", "Academy", "Studio", "Verified Talent", "Jobs", "Solutions", "Industries", "Portfolio", "Insights", "Resources", "Utility"];

export default function HtmlSitemapPage() {
  const routes = allRoutes().filter((r) => r.indexable);
  return (
    <>
      <PageHero crumbs={[{ name: "Sitemap", path: "/sitemap" }]} title="Sitemap" lead="Every public page on this website, by section." />
      <div className="relative isolate overflow-hidden">
        <PhotoBg seed="body" />
      <div className="container-site grid gap-10 section-pad sm:grid-cols-2 lg:grid-cols-3">
        {order.map((s) => {
          const items = routes.filter((r) => r.section === s);
          if (!items.length) return null;
          return (
            <section key={s}>
              <h2 className="text-h3 font-bold text-ink">{s === "Utility" ? "More" : s}</h2>
              <ul className="mt-4 space-y-2">
                {items.map((r) => (
                  <li key={r.path}>
                    <Link href={r.path} className="text-ink-2 hover:text-ink hover:underline">{r.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
      </div>
    </>
  );
}
