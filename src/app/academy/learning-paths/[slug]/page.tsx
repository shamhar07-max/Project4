import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { learningPaths, trackBySlug } from "@/content/academy";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { FaqList } from "@/components/site/faq";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";
import { Tag } from "@/components/ui/tag";

export const dynamicParams = false;
export function generateStaticParams() {
  return learningPaths.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = learningPaths.find((x) => x.slug === slug);
  if (!l) return {};
  return buildMetadata({ title: `${l.title} Learning Path`, description: `${l.overview} Capabilities, recommended course sequence and practical projects.`, path: `/academy/learning-paths/${l.slug}`, noindex: !l.indexable });
}

export default async function LearningPathPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = learningPaths.find((x) => x.slug === slug);
  if (!l) notFound();
  const path = `/academy/learning-paths/${l.slug}`;
  return (
    <>
      <PageHero crumbs={[{ name: "Academy", path: "/academy" }, { name: "Learning Paths", path: "/academy/learning-paths" }, { name: l.title, path }]} eyebrow="Learning path" title={`${l.title} Learning Path`} lead={`${l.overview} ${l.forWho}`} />
      <Section title="Core capabilities">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {l.capabilities.map((c) => (
            <li key={c} className="rounded-md border border-line px-4 py-3 font-semibold text-ink">{c}</li>
          ))}
        </ul>
      </Section>
      <Section tone="surface" title="Recommended learning sequence">
        <ol className="max-w-3xl space-y-3">
          {l.sequence.map((s, i) => {
            const t = trackBySlug(s);
            if (!t) return null;
            return (
              <li key={s}>
                <Link href={`/academy/courses/${t.slug}`} className="flex gap-5 rounded-lg border border-line bg-paper p-5 hover:border-ink">
                  <span className="text-lg font-extrabold tabular-nums text-accent-strong">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block font-extrabold text-ink">{t.title}</span>
                    <span className="mt-1 block text-sm text-ink-2">{t.summary}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
        {!l.indexable ? <p className="mt-6 text-sm text-muted">Role-specific courses for this path are being prepared.</p> : null}
      </Section>
      <Section title="Practical projects">
        <ul className="grid gap-3 md:grid-cols-3">
          {l.projects.map((p) => (
            <li key={p} className="rounded-lg border border-line p-5 text-ink-2">{p}</li>
          ))}
        </ul>
        <h3 className="mt-10 text-h3 font-bold text-ink">Assessment approach</h3>
        <p className="mt-3 max-w-3xl text-ink-2">Each project is assessed: you explain and defend your work to a reviewer, and the result becomes evidence of capability.</p>
        <h3 className="mt-10 text-h3 font-bold text-ink">Possible entry-level roles</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {l.roles.map((r) => (
            <li key={r}><Tag>{r}</Tag></li>
          ))}
        </ul>
      </Section>
      <FaqList faqs={[{ q: "Does this path guarantee a job?", a: "No. It builds the capabilities and evidence these roles require. Employers make their own hiring decisions." }, { q: "Can I start in the middle?", a: "Yes, if you already have the earlier capabilities. You may be asked to demonstrate them." }]} />
      <CtaBand heading="Start this path." label="Register Interest" href="/get-started/academy" />
      <JsonLd data={webPageJsonLd({ title: `${l.title} Learning Path`, description: l.overview, path })} />
    </>
  );
}
