import Link from "next/link";
import { glossary } from "@/content/resources";
import { PageHero } from "@/components/site/page-hero";
import { JsonLd } from "@/components/site/json-ld";
import { buildMetadata, definedTermSetJsonLd } from "@/lib/seo";
import { tagLinkClass } from "@/components/ui/tag";

const description = "Plain-language definitions of business AI, automation, software and capability terms: AI agent, API, CRM, ERP, MVP, RBAC, SaaS, workflow automation and more.";
export const metadata = buildMetadata({ title: "Glossary", description, path: "/resources/glossary" });

export default function GlossaryPage() {
  const terms = [...glossary].sort((a, b) => a.term.localeCompare(b.term));
  return (
    <>
      <PageHero crumbs={[{ name: "Resources", path: "/resources" }, { name: "Glossary", path: "/resources/glossary" }]} eyebrow="Resources" title="Glossary" lead="Each term has a direct definition, a short explanation, an example and related concepts." />
      <div className="container-site section-pad">
        <nav aria-label="Glossary terms" className="flex flex-wrap gap-2">
          {terms.map((t) => (
            <a key={t.slug} href={`#${t.slug}`} className={tagLinkClass}>
              {t.term.split(" (")[0]}
            </a>
          ))}
        </nav>
        <dl className="mt-12 divide-y divide-line border-y border-line">
          {terms.map((t) => (
            <div key={t.slug} id={t.slug} className="grid scroll-mt-24 gap-4 py-8 md:grid-cols-[16rem_1fr]">
              <dt>
                <h2 className="text-h3 font-bold text-ink">{t.term}</h2>
              </dt>
              <dd className="max-w-3xl space-y-3 text-ink-2">
                <p className="text-body font-semibold text-ink">{t.definition}</p>
                <p>{t.explanation}</p>
                <p><strong className="text-ink">Example: </strong>{t.example}</p>
                <p className="text-sm"><strong className="text-ink">Related: </strong>{t.related.join(", ")}</p>
                <p className="text-sm">
                  <strong className="text-ink">At DigitalBurj: </strong>
                  <Link href={t.relevance.href} className="link">{t.relevance.label}</Link>
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <JsonLd data={definedTermSetJsonLd(terms.map((t) => ({ term: t.term, definition: t.definition, slug: t.slug })))} />
    </>
  );
}
