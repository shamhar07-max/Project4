import Link from "next/link";
import { academyCategories, learningLoop, learningPaths, tracks } from "@/content/academy";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { CardGrid, FlowDiagram } from "@/components/site/blocks";
import { FaqList } from "@/components/site/faq";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { TrackedLink } from "@/components/site/tracked-link";
import { Button } from "@/components/ui/button";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";

const description = "DigitalBurj Academy: practical technology and professional education built around skills, projects, assessment and evidence of capability.";
export const metadata = buildMetadata({ title: "DigitalBurj Academy | Practical Technology & Professional Courses", absoluteTitle: true, description, path: "/academy" });

export default function AcademyPage() {
  const tech = academyCategories.filter((c) => c.group === "technology" && c.slug !== "technology");
  const pro = academyCategories.filter((c) => c.group === "professional");
  return (
    <>
      <PageHero
        crumbs={[{ name: "Academy", path: "/academy" }]}
        eyebrow="DigitalBurj Academy"
        title="Learn by doing. Prove what you can do."
        lead="Practical technology and professional education built around skills, projects, assessment and evidence."
      >
        <Button asChild size="lg">
          <TrackedLink href="/academy/courses" event="enroll_click" eventLabel="academy_hero_courses">
            Explore Courses
          </TrackedLink>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/academy/learning-paths">View Learning Paths</Link>
        </Button>
      </PageHero>

      <Section id="how-learning-works" tone="surface" eyebrow="How learning works" title="Every track ends in evidence." intro="Academy learning follows one loop. Breaking and fixing are deliberate: diagnosing failure is one of the most valuable professional skills.">
        <FlowDiagram steps={learningLoop} caption="The DigitalBurj Academy learning loop." />
      </Section>

      <Section eyebrow="Technology Academy" title="Technology learning">
        <CardGrid items={tech.map((c) => ({ title: c.title, body: c.description, href: `/academy/${c.slug}` }))} />
        <Link href="/academy/technology" className="link mt-6 inline-block text-sm font-semibold">Technology overview</Link>
      </Section>

      <Section tone="surface" eyebrow="Professional Career Academy" title="Professional career learning" intro="Professional tracks are in preparation. Each category page describes the role and its skills; register interest to hear when courses open.">
        <CardGrid items={pro.map((c) => ({ title: c.title, body: c.description, href: `/academy/${c.slug}` }))} />
      </Section>

      <Section eyebrow="Tracks" title="Curriculum tracks">
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map((t) => (
            <li key={t.slug}>
              <Link href={`/academy/courses/${t.slug}`} className="flex h-full items-center rounded-md border border-line px-4 py-3 font-semibold text-ink hover:border-ink">
                {t.title}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface" eyebrow="Learning paths" title="Structured routes toward a role">
        <CardGrid items={learningPaths.filter((l) => l.indexable).map((l) => ({ title: l.title, body: l.overview, href: `/academy/learning-paths/${l.slug}` }))} />
      </Section>

      <Section eyebrow="Assessment & evidence" title="What you leave with">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Practical missions", "Realistic briefs where you build, break, fix and test real work."],
            ["Assessment", "You explain and defend your decisions to a reviewer."],
            ["Credentials & evidence", "A record of what you built and how it was assessed, usable with DigitalBurj Verified Talent."],
          ].map(([t, b]) => (
            <div key={t} className="rounded-lg border border-line p-6">
              <h3 className="text-h3 font-extrabold text-ink">{t}</h3>
              <p className="mt-2 text-ink-2">{b}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-12 text-h3 font-extrabold text-ink">Who Academy is for</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {["Career starters", "Career changers", "Working professionals upskilling", "Teams adopting new systems", "Founders and operators"].map((w) => (
            <li key={w} className="rounded-full bg-surface px-3.5 py-1.5 text-sm text-ink-2">{w}</li>
          ))}
        </ul>
      </Section>

      <FaqList
        faqs={[
          { q: "Is DigitalBurj Academy a video-course platform?", a: "No. Lessons support the work, but learners complete practical missions and assessments, and must explain and defend what they built." },
          { q: "Do Academy courses guarantee a job?", a: "No. Academy learning builds capability and evidence, which can strengthen applications. DigitalBurj does not promise employment or visas." },
          { q: "Can organisations train their teams?", a: "Yes. Contact us to discuss training built around your processes and systems." },
          { q: "Where are course durations and prices?", a: "They are published with each course when enrollment opens. Register interest to be notified." },
        ]}
      />
      <CtaBand heading="Build capability you can prove." label="Register Interest" href="/get-started/academy" secondary={{ label: "Explore Courses", href: "/academy/courses" }} />
      <JsonLd data={webPageJsonLd({ title: "DigitalBurj Academy", description, path: "/academy" })} />
    </>
  );
}
