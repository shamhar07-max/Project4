import { resources, resourceCategories, glossary } from "@/content/resources";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { CardGrid } from "@/components/site/blocks";
import { buildMetadata } from "@/lib/seo";

const description = "Free DigitalBurj resources: automation readiness checklist, MVP planning template, software project brief, AI workflow assessment, glossary and more.";
export const metadata = buildMetadata({ title: "Resources: Checklists, Templates & Glossary", description, path: "/resources" });

export default function ResourcesPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Resources", path: "/resources" }]} eyebrow="Resources" title="Practical tools, free to use." lead="The checklists and templates we use ourselves. Worth ten minutes before you spend money on automation or software." />
      {resourceCategories.filter((c) => c.slug === "checklists" || c.slug === "templates").map((c, i) => (
        <Section key={c.slug} tone={i ? "surface" : "paper"} title={c.title} intro={c.description}>
          <CardGrid items={resources.filter((r) => r.category === c.slug).map((r) => ({ title: r.title, body: r.description, href: `/resources/${r.category}/${r.slug}` }))} />
        </Section>
      ))}
      <Section title="More">
        <CardGrid
          items={[
            { title: "Glossary", body: `${glossary.length} terms defined directly, with examples and related concepts.`, href: "/resources/glossary" },
            { title: "Guides", body: "Step-by-step how-to guides from DigitalBurj Insights.", href: "/resources/guides" },
            { title: "Research", body: "Original DigitalBurj research, as it is published.", href: "/resources/research" },
          ]}
        />
      </Section>
    </>
  );
}
