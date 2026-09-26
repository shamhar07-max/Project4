import Link from "next/link";
import { projects, portfolioFilters } from "@/content/portfolio";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { CtaBand } from "@/components/site/cta-band";
import { buildMetadata } from "@/lib/seo";
import { Tag } from "@/components/ui/tag";

const description = "Selected DigitalBurj systems and ventures across logistics, documents, procurement and more. Project details are published as they are verified.";
export const metadata = buildMetadata({ title: "Portfolio", description, path: "/portfolio" });

export default function PortfolioPage() {
  const used = new Set(projects.map((p) => p.filter).filter(Boolean));
  return (
    <>
      <PageHero crumbs={[{ name: "Portfolio", path: "/portfolio" }]} eyebrow="Portfolio" title="Selected DigitalBurj systems and ventures." lead="Every project here is genuine DigitalBurj work. We publish architecture, status and lessons only once they have been verified, and we never publish invented traction or customer figures." />
      <Section title="Projects">
        <ul aria-label="Sectors" className="mb-8 flex flex-wrap gap-2">
          {portfolioFilters.filter((f) => used.has(f)).map((f) => (
            <li key={f}><Tag>{f}</Tag></li>
          ))}
        </ul>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/portfolio/${p.slug}`} className="card-interactive flex h-full flex-col rounded-lg border border-line p-6 hover:border-line-strong">
                <span className="eyebrow">{p.sector ?? "Sector to be confirmed"}</span>
                <span className="mt-3 text-h3 font-bold text-ink">{p.name}</span>
                <span className="mt-2 text-ink-2">{p.summary}</span>
                <span className="mt-auto pt-5 text-sm text-muted">Status: {p.status}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand heading="Build something that should exist." label="Start a Project" href="/get-started/studio" />
    </>
  );
}
