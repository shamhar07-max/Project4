import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { CtaBand } from "@/components/site/cta-band";
import { buildMetadata } from "@/lib/seo";

const description = "DigitalBurj Academy career bundles group courses toward a career objective, with projects and assessment. Bundles are being finalised.";
export const metadata = buildMetadata({ title: "Career Bundles", description, path: "/academy/career-bundles", noindex: true });

export default function CareerBundlesPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Academy", path: "/academy" }, { name: "Career Bundles", path: "/academy/career-bundles" }]} eyebrow="DigitalBurj Academy" title="Career bundles" lead="A career bundle groups several courses toward one career objective, in a recommended order, with projects and assessment. Bundles and their prices are being finalised and will be published here." />
      <Section title="What each bundle will include">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {["Career objective", "Included courses", "Recommended order", "Total estimated learning time", "Skills covered", "Projects", "Assessment", "Who should take it", "Price, once confirmed"].map((i) => (
            <li key={i} className="rounded-md border border-line px-4 py-3 font-semibold text-ink">{i}</li>
          ))}
        </ul>
      </Section>
      <CtaBand heading="Hear when bundles are published." label="Register Interest" href="/get-started/academy" secondary={{ label: "View Learning Paths", href: "/academy/learning-paths" }} />
    </>
  );
}
