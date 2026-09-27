import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import type { ContentPage } from "@/content/types";
import { resolveLinks } from "@/content/registry";
import { buildMetadata, webPageJsonLd, type Crumb } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { PageHero } from "./page-hero";
import { BlockSection } from "./blocks";
import { FaqList } from "./faq";
import { RelatedLinks } from "./related";
import { CtaBand } from "./cta-band";
import { JsonLd } from "./json-ld";
import { TrackedLink } from "./tracked-link";

export function ContentPageView({ page, path, crumbs }: { page: ContentPage; path: string; crumbs: Crumb[] }) {
  const related = resolveLinks(page.related);
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow={page.eyebrow}
        title={page.h1}
        lead={page.answer}
        aside={
          page.keyPoints?.length ? (
            <div className="glass rounded-xl p-6">
              <p className="eyebrow">Key points</p>
              <ul className="mt-4 space-y-3">
                {page.keyPoints.map((k) => (
                  <li key={k} className="flex gap-3 text-body-sm leading-relaxed text-ink-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent-strong" aria-hidden="true" />
                    {k}
                  </li>
                ))}
              </ul>
            </div>
          ) : undefined
        }
      >
        {page.cta ? (
          <Button asChild size="lg">
            <TrackedLink href={page.cta.href} eventLabel={`${page.slug}_hero`}>
              {page.cta.label}
            </TrackedLink>
          </Button>
        ) : null}
      </PageHero>
      {page.blocks.map((b, i) => (
        <BlockSection key={b.heading} block={b} index={i} />
      ))}
      {page.faqs?.length ? <FaqList faqs={page.faqs} /> : null}
      <RelatedLinks links={related} />
      {page.cta ? <CtaBand heading={page.cta.heading} body={page.cta.body} label={page.cta.label} href={page.cta.href} /> : null}
      <JsonLd data={webPageJsonLd({ title: page.h1, description: page.description, path })} />
    </>
  );
}

/** Builds the static-params / metadata / page trio for a collection of content pages. */
export function contentRoute(pages: ContentPage[], base: string, parent: Crumb) {
  const find = (slug: string) => pages.find((p) => p.slug === slug);
  return {
    generateStaticParams: () => pages.map((p) => ({ slug: p.slug })),
    generateMetadata: async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
      const { slug } = await params;
      const page = find(slug);
      if (!page) return {};
      return buildMetadata({
        title: page.seoTitle,
        description: page.description,
        path: `${base}/${slug}`,
        noindex: page.indexable === false,
      });
    },
    Page: async function Page({ params }: { params: Promise<{ slug: string }> }) {
      const { slug } = await params;
      const page = find(slug);
      if (!page) notFound();
      const path = `${base}/${slug}`;
      return <ContentPageView page={page} path={path} crumbs={[parent, { name: page.label, path }]} />;
    },
  };
}
