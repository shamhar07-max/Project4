import type { ReactNode } from "react";
import type { ContentPage } from "@/content/types";
import { PageHero } from "./page-hero";
import { Section } from "./section";
import { CardGrid } from "./blocks";
import { CtaBand } from "./cta-band";
import { JsonLd } from "./json-ld";
import { webPageJsonLd } from "@/lib/seo";

export function CollectionHub({
  path,
  name,
  eyebrow,
  title,
  lead,
  description,
  pages,
  listTitle,
  children,
  cta,
}: {
  path: string;
  name: string;
  eyebrow: string;
  title: string;
  lead: string;
  description: string;
  pages: ContentPage[];
  listTitle: string;
  children?: ReactNode;
  cta: { heading: string; label: string; href: string; body?: string };
}) {
  return (
    <>
      <PageHero crumbs={[{ name, path }]} eyebrow={eyebrow} title={title} lead={lead} />
      <Section title={listTitle}>
        <CardGrid items={pages.map((p) => ({ title: p.label, body: p.description, href: `${path}/${p.slug}` }))} />
      </Section>
      {children}
      <CtaBand {...cta} />
      <JsonLd data={webPageJsonLd({ title, description, path })} />
    </>
  );
}
