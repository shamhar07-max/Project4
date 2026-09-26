import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { academyCategories, learningPaths, tracks } from "@/content/academy";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { CardGrid } from "@/components/site/blocks";
import { FaqList } from "@/components/site/faq";
import { RelatedLinks } from "@/components/site/related";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";
import { Tag } from "@/components/ui/tag";

export const dynamicParams = false;
export function generateStaticParams() {
  return academyCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = academyCategories.find((x) => x.slug === slug);
  if (!c) return {};
  return buildMetadata({ title: c.h1, description: c.description, path: `/academy/${c.slug}`, noindex: !c.indexable });
}

export default async function AcademyCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = academyCategories.find((x) => x.slug === slug);
  if (!c) notFound();
  const path = `/academy/${c.slug}`;
  const catTracks = tracks.filter((t) => c.trackCategory?.includes(t.category));
  const lp = learningPaths.find((l) => l.slug === c.path);
  const siblings = academyCategories.filter((x) => x.group === c.group && x.slug !== c.slug && x.indexable).slice(0, 6);
  return (
    <>
      <PageHero crumbs={[{ name: "Academy", path: "/academy" }, { name: c.title, path }]} eyebrow="DigitalBurj Academy" title={c.h1} lead={c.answer} />
      <Section title={c.group === "professional" ? "What these professionals do" : "What this learning prepares you to do"}>
        <div className="grid gap-10 md:grid-cols-3">
          {[
            ["The work", c.whatTheyDo],
            ["Skills required", c.skills],
            ["Who this is for", c.forWho],
          ].map(([h, items]) => (
            <div key={h as string}>
              <h3 className="text-h3 font-bold text-ink">{h as string}</h3>
              <ul className="mt-4 space-y-2.5">
                {(items as string[]).map((i) => (
                  <li key={i} className="flex gap-3 text-ink-2">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 bg-accent" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="surface" title="Courses">
        {catTracks.length ? (
          <CardGrid items={catTracks.map((t) => ({ title: t.title, body: t.summary, href: `/academy/courses/${t.slug}` }))} />
        ) : (
          <p className="max-w-2xl text-lead text-ink-2">
            Courses in this category are being prepared. Register interest to be notified when enrollment opens.
          </p>
        )}
      </Section>
      {lp ? (
        <Section title="Learning pathway">
          <Link href={`/academy/learning-paths/${lp.slug}`} className="card-interactive block max-w-2xl rounded-lg border border-line p-6 hover:border-line-strong">
            <span className="text-h3 font-bold text-ink">{lp.title} Learning Path</span>
            <span className="mt-2 block text-ink-2">{lp.overview}</span>
          </Link>
        </Section>
      ) : null}
      <Section tone="surface" title="Practical exercises and assessment">
        <p className="max-w-3xl text-lead text-ink-2">
          Every DigitalBurj Academy track follows the same learning loop: learners build, break, fix and test real work, then
          explain and defend it to a reviewer. Assessment produces evidence of capability that can be shared through
          DigitalBurj Verified Talent.
        </p>
        <h3 className="mt-10 text-h3 font-bold text-ink">Related professional roles</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {c.roles.map((r) => (
            <li key={r}><Tag tone="paper">{r}</Tag></li>
          ))}
        </ul>
      </Section>
      <FaqList
        faqs={[
          { q: `Do I need experience to start ${c.title} learning?`, a: "Each course states its prerequisites. Foundations tracks are designed for beginners." },
          { q: "Does completing the learning guarantee a job?", a: "No. Academy learning builds capability and evidence. Employment decisions are made by employers." },
        ]}
      />
      <RelatedLinks title="Related Academy categories" links={siblings.map((s) => ({ label: s.title, href: `/academy/${s.slug}` }))} />
      <CtaBand heading={`Start ${c.title} learning.`} label="Register Interest" href="/get-started/academy" />
      <JsonLd data={webPageJsonLd({ title: c.h1, description: c.description, path })} />
    </>
  );
}
