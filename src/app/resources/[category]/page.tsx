import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resources, resourceCategories } from "@/content/resources";
import { articles } from "@/content/insights";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { CardGrid } from "@/components/site/blocks";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return resourceCategories.map((c) => ({ category: c.slug }));
}

function itemsFor(slug: string) {
  if (slug === "guides") return articles.filter((a) => a.kind === "How-to" || a.kind === "Decision guide").map((a) => ({ title: a.title, body: a.description, href: `/insights/${a.slug}` }));
  return resources.filter((r) => r.category === slug).map((r) => ({ title: r.title, body: r.description, href: `/resources/${r.category}/${r.slug}` }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const c = resourceCategories.find((x) => x.slug === category);
  if (!c) return {};
  return buildMetadata({ title: c.title, description: c.description, path: `/resources/${c.slug}`, noindex: itemsFor(c.slug).length === 0 });
}

export default async function ResourceCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const c = resourceCategories.find((x) => x.slug === category);
  if (!c) notFound();
  const items = itemsFor(c.slug);
  return (
    <>
      <PageHero crumbs={[{ name: "Resources", path: "/resources" }, { name: c.title, path: `/resources/${c.slug}` }]} eyebrow="Resources" title={c.title} lead={c.description} />
      <Section>{items.length ? <CardGrid items={items} /> : <p className="text-lead text-ink-2">Nothing has been published here yet.</p>}</Section>
    </>
  );
}
