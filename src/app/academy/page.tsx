import Link from "next/link";
import { academyCategories, learningPaths, tracks } from "@/content/academy";
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
        title="Finish a course with work you can show."
        lead="Technology courses built around projects. You build it, we break it, you fix it, then you explain it to a reviewer."
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

      <Section id="how-learning-works" tone="surface" eyebrow="How learning works" title="The same loop in every track." intro="We break your work on purpose. Working out why something failed is most of the job.">
        <FlowDiagram steps={["Brief", "Learn", "Build", "Break", "Fix", "Explain", "Ship"]} />
      </Section>

      <Section eyebrow="Technology" title="Technology tracks">
        <CardGrid items={tech.map((c) => ({ title: c.title, body: c.description, href: `/academy/${c.slug}` }))} />
        <Link href="/academy/technology" className="link mt-6 inline-block text-sm font-semibold">Technology overview</Link>
      </Section>

      <Section tone="surface" eyebrow="Professional careers" title="Coming later" intro="These courses are still being prepared. Register to hear when they open.">
        <CardGrid items={pro.map((c) => ({ title: c.title, body: c.description, href: `/academy/${c.slug}` }))} />
      </Section>

      <Section eyebrow="Tracks" title="All tracks">
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

      <Section tone="surface" eyebrow="Learning paths" title="Tracks in order, for a specific role">
        <CardGrid items={learningPaths.filter((l) => l.indexable).map((l) => ({ title: l.title, body: l.overview, href: `/academy/learning-paths/${l.slug}` }))} />
      </Section>

      <Section eyebrow="Assessment & evidence" title="What you leave with">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Projects", "Things you built, broke and fixed, with your code or files attached."],
            ["A review", "A record of how you explained and defended your choices."],
            ["A profile entry", "Usable on DigitalBurj Verified Talent once it opens."],
          ].map(([t, b]) => (
            <div key={t} className="rounded-lg border border-line p-6">
              <h3 className="text-h3 font-bold text-ink">{t}</h3>
              <p className="mt-2 text-ink-2">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <FaqList
        faqs={[
          { q: "Is it a video-course platform?", a: "No. There are lessons, but the course is the projects and the review." },
          { q: "Will a course get me a job?", a: "We don't promise jobs or visas. What you build can make your applications stronger." },
          { q: "Where are durations and prices?", a: "On each course page once enrolment opens. Register and we'll let you know." },
        ]}
      />
      <CtaBand heading="Want to hear when enrolment opens?" label="Register Interest" href="/get-started/academy" secondary={{ label: "Explore Courses", href: "/academy/courses" }} />
      <JsonLd data={webPageJsonLd({ title: "DigitalBurj Academy", description, path: "/academy" })} />
    </>
  );
}
