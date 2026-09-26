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
  { title: "The problem", body: "Who has it, how often, and what they do about it today." },
  { title: "Demand", body: "Signs people would use or pay for a fix. Sign-ups, not compliments." },
  { title: "Scope", body: "The one core action, plus a written list of what we won't build." },
  { title: "Build and test", body: "Engineered, tested on real devices and reviewed before release." },
  { title: "Launch", body: "Automated, monitored, and easy to roll back." },
  { title: "Decide", body: "Look at what users actually did. Build more, change course or stop." },
];

const blurbs: Record<string, string> = {
  "software-development": "Custom platforms, portals and internal tools.",
  "web-app-development": "Browser apps that are fast on ordinary phones.",
  "mobile-app-development": "iOS and Android, when the phone really matters.",
  "saas-development": "One platform, many paying customers.",
  "mvp-development": "The smallest version real users can use for real.",
  "enterprise-software": "Internal systems many people rely on daily.",
  "ai-product-development": "AI features that are tested and have a budget.",
  "api-development": "APIs partners can build on without surprises.",
  "system-integration": "Your existing tools, connected properly.",
  "product-validation": "Find out if it's wanted before paying to build it.",
  "software-modernization": "Update an old system without stopping the business.",
  "cloud-deployment": "Releases, monitoring, backups and recovery.",
};

const faqs = [
  { q: "Do you build without validation?", a: "For new products we recommend it. For well-understood internal tools, a short discovery phase is usually enough." },
  { q: "What if validation says don't build it?", a: "Then we'll say so. It's the cheapest outcome you can get." },
];

export default function StudioPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Studio", path: "/studio" }]}
        eyebrow="DigitalBurj Studio"
        title="Check it’s wanted. Then build it well."
        lead="We build web apps, SaaS products and internal tools for businesses and founders, starting with whether anyone needs the thing."
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
        <CardGrid items={studioPages.map((p) => ({ title: p.label, body: blurbs[p.slug] ?? p.description, href: `/studio/${p.slug}` }))} />
      </Section>
      <Section tone="surface" eyebrow="Process" title="How a Studio project runs.">
        <StepList steps={process} />
      </Section>
      <Section eyebrow="Portfolio" title="Our own ventures">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/portfolio/${p.slug}`} className="card-interactive flex h-full flex-col rounded-lg border border-line p-5 hover:border-line-strong">
                <span className="font-medium text-ink">{p.name}</span>
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
