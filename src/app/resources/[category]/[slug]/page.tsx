import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resources, resourceCategories } from "@/content/resources";
import { resolveLinks } from "@/content/registry";
import { PageHero } from "@/components/site/page-hero";
import { RelatedLinks } from "@/components/site/related";
import { PrintButton } from "@/components/site/print-button";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return resources.map((r) => ({ category: r.category, slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category, slug } = await params;
  const r = resources.find((x) => x.slug === slug && x.category === category);
  if (!r) return {};
  return buildMetadata({ title: r.title, description: r.description, path: `/resources/${category}/${slug}` });
}

export default async function ResourcePage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const r = resources.find((x) => x.slug === slug && x.category === category);
  if (!r) notFound();
  const cat = resourceCategories.find((c) => c.slug === category)!;
  const path = `/resources/${category}/${slug}`;
  const isChecklist = r.category === "checklists";
  return (
    <>
      <PageHero crumbs={[{ name: "Resources", path: "/resources" }, { name: cat.title, path: `/resources/${category}` }, { name: r.title, path }]} eyebrow={`DigitalBurj ${cat.title.replace(/s$/, "")}`} title={r.title} lead={r.intro}>
        <PrintButton label={r.slug} />
      </PageHero>
      <div className="container-site section-pad">
        <p className="max-w-3xl rounded-lg bg-surface p-5 text-ink-2">
          <strong className="text-ink">How to use it: </strong>
          {r.howToUse}
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {r.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-h3 font-bold text-ink">{s.heading}</h2>
              {isChecklist ? (
                <ul className="mt-4 space-y-2">
                  {s.items.map((i) => (
                    <li key={i}>
                      <label className="flex cursor-pointer gap-3 rounded-md border border-line p-3 text-ink-2 hover:border-line-strong">
                        <input type="checkbox" className="mt-1 size-4 shrink-0 accent-accent-strong" />
                        <span>{i}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              ) : (
                <ol className="mt-4 space-y-2">
                  {s.items.map((i, n) => (
                    <li key={i} className="flex gap-3 rounded-md border border-line p-3 text-ink-2">
                      <span className="font-bold tabular-nums text-accent-strong">{String(n + 1).padStart(2, "0")}</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          ))}
        </div>
      </div>
      <RelatedLinks links={resolveLinks(r.related)} />
      <JsonLd data={webPageJsonLd({ title: r.title, description: r.description, path })} />
    </>
  );
}
