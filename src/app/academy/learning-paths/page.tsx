import { learningPaths } from "@/content/academy";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { CardGrid } from "@/components/site/blocks";
import { CtaBand } from "@/components/site/cta-band";
import { buildMetadata } from "@/lib/seo";

const description = "DigitalBurj Academy learning paths: structured sequences of courses and projects toward software, AI, automation and professional roles.";
export const metadata = buildMetadata({ title: "Career Learning Paths", description, path: "/academy/learning-paths" });

export default function LearningPathsPage() {
  const ready = learningPaths.filter((l) => l.indexable);
  const soon = learningPaths.filter((l) => !l.indexable);
  return (
    <>
      <PageHero crumbs={[{ name: "Academy", path: "/academy" }, { name: "Learning Paths", path: "/academy/learning-paths" }]} eyebrow="DigitalBurj Academy" title="Learning paths" lead="A learning path is a recommended sequence of courses and projects toward a type of role. Paths describe the capabilities you build; they do not promise employment." />
      <Section title="Technology paths">
        <CardGrid items={ready.map((l) => ({ title: l.title, body: l.overview, href: `/academy/learning-paths/${l.slug}` }))} />
      </Section>
      <Section tone="surface" title="Professional paths in preparation">
        <CardGrid items={soon.map((l) => ({ title: l.title, body: l.overview, href: `/academy/learning-paths/${l.slug}` }))} />
      </Section>
      <CtaBand heading="Not sure which path fits?" label="Ask the Academy" href="/get-started/academy" />
    </>
  );
}
