import { tracks, academyCategories } from "@/content/academy";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { CardGrid } from "@/components/site/blocks";
import { CtaBand } from "@/components/site/cta-band";
import { buildMetadata } from "@/lib/seo";

const description = "All DigitalBurj Academy curriculum tracks: foundations, web, backend, AI engineering, data, security, testing, payments, production engineering, product and more.";
export const metadata = buildMetadata({ title: "All Academy Courses", description, path: "/academy/courses" });

export default function CoursesPage() {
  const groups = Array.from(new Set(tracks.map((t) => t.category)));
  return (
    <>
      <PageHero crumbs={[{ name: "Academy", path: "/academy" }, { name: "All Courses", path: "/academy/courses" }]} eyebrow="DigitalBurj Academy" title="All courses" lead="Every track ends with a project and a review. Durations and prices go on each course page when enrolment opens." />
      {groups.map((g, i) => {
        const cat = academyCategories.find((c) => c.slug === g);
        return (
          <Section key={g} tone={i % 2 ? "surface" : "paper"} title={cat?.title ?? g}>
            <CardGrid items={tracks.filter((t) => t.category === g).map((t) => ({ title: t.title, body: t.summary, href: `/academy/courses/${t.slug}` }))} />
          </Section>
        );
      })}
      <CtaBand heading="Hear when enrollment opens." label="Register Interest" href="/get-started/academy" />
    </>
  );
}
