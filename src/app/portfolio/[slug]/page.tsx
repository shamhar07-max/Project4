import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, projectTemplateSections } from "@/content/portfolio";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { RelatedLinks } from "@/components/site/related";
import { CtaBand } from "@/components/site/cta-band";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return buildMetadata({ title: `${p.name}${p.sector ? ` | ${p.sector}` : ""}`, description: `${p.name}: ${p.summary}`, path: `/portfolio/${p.slug}`, noindex: !p.verified });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const path = `/portfolio/${p.slug}`;
  return (
    <>
      <PageHero crumbs={[{ name: "Portfolio", path: "/portfolio" }, { name: p.name, path }]} eyebrow={p.sector ?? "DigitalBurj venture"} title={p.name} lead={p.summary} />
      <Section title="Current status">
        <p className="max-w-3xl text-lead text-ink-2">{p.status}</p>
        <p className="mt-4 max-w-3xl text-ink-2">
          This page will describe the project once its details are verified for publication:
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {projectTemplateSections.map((s) => (
            <li key={s} className="rounded-md border border-dashed border-line-strong px-4 py-3 text-sm text-muted">{s}</li>
          ))}
        </ul>
      </Section>
      <RelatedLinks title="Related capabilities" links={p.relatedCapabilities} />
      <CtaBand heading="Discuss a similar system." label="Start a Project" href="/get-started/studio" />
    </>
  );
}
