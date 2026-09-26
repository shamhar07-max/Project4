import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { academyCategories, learningLoop, learningPaths, tracks } from "@/content/academy";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { FlowDiagram } from "@/components/site/blocks";
import { FaqList } from "@/components/site/faq";
import { RelatedLinks } from "@/components/site/related";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata, courseJsonLd } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return tracks.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = tracks.find((x) => x.slug === slug);
  if (!t) return {};
  return buildMetadata({ title: `${t.title} Course`, description: t.summary.length < 120 ? `${t.summary} A practical DigitalBurj Academy course.` : t.summary, path: `/academy/courses/${t.slug}` });
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = tracks.find((x) => x.slug === slug);
  if (!t) notFound();
  const path = `/academy/courses/${t.slug}`;
  const cat = academyCategories.find((c) => c.slug === t.category);
  const paths = learningPaths.filter((l) => l.sequence.includes(t.slug) && l.indexable);
  const nextSlug = paths[0]?.sequence[paths[0].sequence.indexOf(t.slug) + 1];
  const next = nextSlug ? tracks.find((x) => x.slug === nextSlug) : undefined;
  const related = tracks.filter((x) => x.category === t.category && x.slug !== t.slug).slice(0, 5);
  return (
    <>
      <PageHero
        crumbs={[{ name: "Academy", path: "/academy" }, { name: "All Courses", path: "/academy/courses" }, { name: t.title, path }]}
        eyebrow={`DigitalBurj Academy · ${cat?.title ?? "Course"}`}
        title={t.title}
        lead={t.summary}
      />
      <Section title="Overview">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-h3 font-bold text-ink">Who this course is for</h3>
            <p className="mt-3 text-ink-2">{t.forWho}</p>
            <h3 className="mt-8 text-h3 font-bold text-ink">Skills covered</h3>
            <ul className="mt-4 space-y-2.5">
              {t.skills.map((s) => (
                <li key={s} className="flex gap-3 text-ink-2">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 bg-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-line bg-surface p-6">
            <h3 className="text-h3 font-bold text-ink">Example practical missions</h3>
            <ul className="mt-4 space-y-3">
              {t.missions.map((m) => (
                <li key={m} className="border-b border-line pb-3 text-ink-2 last:border-0">{m}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">Module list, estimated duration, difficulty and credential details are confirmed at enrollment.</p>
          </div>
        </div>
      </Section>
      <Section tone="surface" title="How this course is assessed" intro="Learners complete the DigitalBurj learning loop and finish by explaining and defending their work. The assessed output becomes evidence of capability.">
        <FlowDiagram steps={learningLoop} />
      </Section>
      {next ? (
        <Section title="Recommended next course">
          <Link href={`/academy/courses/${next.slug}`} className="card-interactive block max-w-2xl rounded-lg border border-line p-6 hover:border-line-strong">
            <span className="text-h3 font-bold text-ink">{next.title}</span>
            <span className="mt-2 block text-ink-2">{next.summary}</span>
          </Link>
        </Section>
      ) : null}
      <FaqList
        faqs={[
          { q: `What will I be able to do after ${t.title}?`, a: `You will have practised ${t.skills.slice(0, 3).join(", ").toLowerCase()} and more through practical missions, and you will leave with assessed evidence of that work.` },
          { q: "Is there a certificate?", a: "Completion and credential details are confirmed at enrollment. DigitalBurj emphasises assessed evidence, which is more informative to employers than attendance." },
        ]}
      />
      <RelatedLinks title="Related courses" links={related.map((r) => ({ label: r.title, href: `/academy/courses/${r.slug}`, description: "Course" }))} />
      <CtaBand heading={`Interested in ${t.title}?`} label="Express Interest" href="/get-started/academy" />
      <JsonLd data={courseJsonLd({ name: t.title, description: t.summary, path })} />
    </>
  );
}
