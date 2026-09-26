import Link from "next/link";
import { articles, insightCategories } from "@/content/insights";
import { ArticleList } from "@/components/site/article-list";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { buildMetadata } from "@/lib/seo";
import { tagLinkClass } from "@/components/ui/tag";

const description = "DigitalBurj Insights: direct, practical writing on business AI, software engineering, product development, education and careers.";
export const metadata = buildMetadata({ title: "Insights", description, path: "/insights" });

export default function InsightsPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Insights", path: "/insights" }]} eyebrow="DigitalBurj Insights" title="Knowledge you can use." lead="Definitions, how-to guides, comparisons and decision guides. Every article starts with a direct answer, then explains, gives an example and states its limitations." />
      <Section title="Categories">
        <ul className="flex flex-wrap gap-2">
          {insightCategories.map((c) => (
            <li key={c.slug}>
              <Link href={`/insights/${c.slug}`} className={tagLinkClass}>
                {c.title}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="surface" title="All articles">
        <ArticleList items={articles} />
      </Section>
    </>
  );
}
