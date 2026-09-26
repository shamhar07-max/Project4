import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, insightCategories } from "@/content/insights";
import { resolveLinks } from "@/content/registry";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { ArticleList } from "@/components/site/article-list";
import { RelatedLinks } from "@/components/site/related";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { articleJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

/** /insights/{category} and /insights/{article} share one segment; slugs never collide. */
export const dynamicParams = false;
export function generateStaticParams() {
  return [...insightCategories.map((c) => ({ slug: c.slug })), ...articles.map((a) => ({ slug: a.slug }))];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = insightCategories.find((c) => c.slug === slug);
  if (cat) return buildMetadata({ title: `${cat.title} Insights`, description: cat.description, path: `/insights/${slug}` });
  const a = articles.find((x) => x.slug === slug);
  if (!a) return {};
  return buildMetadata({ title: a.title, description: a.description, path: `/insights/${slug}`, type: "article", publishedTime: a.published, modifiedTime: a.updated });
}

function formatDate(d: string) {
  return new Date(d + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = insightCategories.find((c) => c.slug === slug);
  if (cat) {
    const items = articles.filter((a) => a.category === slug);
    return (
      <>
        <PageHero crumbs={[{ name: "Insights", path: "/insights" }, { name: cat.title, path: `/insights/${slug}` }]} eyebrow="DigitalBurj Insights" title={`${cat.title} insights`} lead={cat.description} />
        <Section>{items.length ? <ArticleList items={items} /> : <p className="text-lead text-ink-2">Articles in this category are in preparation.</p>}</Section>
        <JsonLd data={webPageJsonLd({ title: `${cat.title} Insights`, description: cat.description, path: `/insights/${slug}` })} />
      </>
    );
  }
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  const category = insightCategories.find((c) => c.slug === a.category)!;
  const path = `/insights/${a.slug}`;
  return (
    <>
      <PageHero
        crumbs={[{ name: "Insights", path: "/insights" }, { name: category.title, path: `/insights/${category.slug}` }, { name: a.title, path }]}
        eyebrow={`${category.title} · ${a.kind}`}
        title={a.title}
      />
      <article className="container-site grid gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="prose-db">
          <p className="!text-lead font-medium text-ink">{a.answer}</p>
          <h2>Key points</h2>
          <ul>
            {a.keyPoints.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
          {a.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
              {s.list ? (
                s.ordered ? (
                  <ol>{s.list.map((l) => <li key={l}>{l}</li>)}</ol>
                ) : (
                  <ul>{s.list.map((l) => <li key={l}>{l}</li>)}</ul>
                )
              ) : null}
            </section>
          ))}
          <h2>Limitations and considerations</h2>
          <ul>
            {a.limitations.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
        <aside className="space-y-6 text-sm lg:sticky lg:top-24 lg:self-start">
          <dl className="rounded-lg border border-line p-5">
            <dt className="eyebrow">Written by</dt>
            <dd className="mt-1 text-ink">DigitalBurj</dd>
            <dt className="eyebrow mt-4">Published</dt>
            <dd className="mt-1 text-ink"><time dateTime={a.published}>{formatDate(a.published)}</time></dd>
            <dt className="eyebrow mt-4">Updated</dt>
            <dd className="mt-1 text-ink"><time dateTime={a.updated}>{formatDate(a.updated)}</time></dd>
          </dl>
          <Link href={`/insights/${category.slug}`} className="link font-semibold">More in {category.title}</Link>
        </aside>
      </article>
      <RelatedLinks title="Related DigitalBurj pages" links={resolveLinks(a.related)} />
      <CtaBand heading="Have a problem like this?" label="Get Started" href="/get-started" />
      <JsonLd data={articleJsonLd({ title: a.title, description: a.description, path, published: a.published, updated: a.updated, author: "DigitalBurj" })} />
    </>
  );
}
