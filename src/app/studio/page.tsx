import Link from "next/link";
import { studioPages } from "@/content/studio";
import { projects } from "@/content/portfolio";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { CardGrid, StepList } from "@/components/site/blocks";
import { FaqList } from "@/components/site/faq";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { TrackedLink } from "@/components/site/tracked-link";
import { Button } from "@/components/ui/button";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";
import { ArrowLink } from "@/components/site/arrow-link";

const description = "DigitalBurj Studio validates, designs, engineers and deploys software products: web and mobile apps, SaaS, MVPs, enterprise software, AI products and integrations.";
export const metadata = buildMetadata({ title: "Software Development & Product Studio", description, path: "/studio" });

const process = [
  { title: "Understand the problem", body: "Who has it, how often, and what they do today." },
  { title: "Validate demand", body: "Evidence that people will use or pay for a solution." },
  { title: "Define the smallest buildable version", body: "The core action and nothing more." },
  { title: "Define what will not be built", body: "An explicit no-build list." },
  { title: "Architecture", body: "A structure as simple as the problem allows." },
  { title: "Product design", body: "Flows and interfaces built from a consistent system." },
  { title: "Development", body: "Engineering to DigitalBurj standards." },
  { title: "Testing", body: "Automated and manual testing on real devices." },
  { title: "Assurance", body: "Independent review before release." },
  { title: "Deployment", body: "Automated, monitored and reversible." },
  { title: "Measurement", body: "What real users actually do." },
  { title: "Improvement", body: "Build further, reshape or stop, on evidence." },
];

const faqs = [
  { q: "What does DigitalBurj Studio build?", a: "Web platforms, business applications, customer portals, SaaS products, MVPs, mobile applications, AI-enabled products, APIs and integrations." },
  { q: "Do you build without validation?", a: "We recommend validation for any new product. For well-understood internal systems, a shorter discovery stage may be enough. Either way, we confirm the problem before building." },
  { q: "What happens if validation shows the product should not be built?", a: "We recommend stopping or reshaping it. That is a successful outcome: it saves the cost of building something people will not use." },
];

export default function StudioPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Studio", path: "/studio" }]}
        eyebrow="DigitalBurj Studio"
        title="Validate. Build. Launch. Learn."
        lead="DigitalBurj Studio helps businesses and founders turn problems into validated, buildable digital products, from discovery and product architecture through engineering, deployment and measurement."
      >
        <Button asChild size="lg">
          <TrackedLink href="/get-started/studio" event="project_enquiry_start" eventLabel="studio_hero">
            Start a Project
          </TrackedLink>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/portfolio">Explore Our Work</Link>
        </Button>
      </PageHero>
      <Section eyebrow="Services" title="What Studio builds">
        <CardGrid items={studioPages.map((p) => ({ title: p.label, body: p.description, href: `/studio/${p.slug}` }))} />
      </Section>
      <Section tone="surface" eyebrow="Process" title="Twelve stages, with a decision at each one." intro="Validation comes before full development. Every stage can end in build, reshape or stop.">
        <StepList steps={process} />
      </Section>
      <Section eyebrow="Portfolio" title="DigitalBurj ventures">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/portfolio/${p.slug}`} className="card-interactive flex h-full flex-col rounded-lg border border-line p-5 hover:border-line-strong">
                <span className="font-extrabold text-ink">{p.name}</span>
                <span className="mt-1 text-sm text-muted">{p.sector ?? "Sector to be confirmed"}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ArrowLink href="/portfolio" className="mt-6">Portfolio</ArrowLink>
      </Section>
      <FaqList faqs={faqs} />
      <CtaBand heading="Test the idea before you build it." label="Start a Project" href="/get-started/studio" secondary={{ label: "Product Validation", href: "/studio/product-validation" }} />
      <JsonLd data={webPageJsonLd({ title: "Studio", description, path: "/studio" })} />
    </>
  );
}
