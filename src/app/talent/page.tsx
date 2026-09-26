import { talentPages } from "@/content/talent-jobs";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { CardGrid, StepList } from "@/components/site/blocks";
import { FaqList } from "@/components/site/faq";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { TrackedLink } from "@/components/site/tracked-link";
import { Button } from "@/components/ui/button";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";

const description = "DigitalBurj Verified Talent makes professional capability visible through skills, assessments, projects, evidence and verification. In development: register interest.";
export const metadata = buildMetadata({ title: "Verified Talent & Capability Evidence", description, path: "/talent" });

export default function TalentPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Verified Talent", path: "/talent" }]}
        eyebrow="DigitalBurj Verified Talent"
        title="Skills with the proof attached."
        lead="We're building profiles where each skill links to the work behind it, and says plainly how it was checked. It's not live yet. Register and we'll let you know."
      >
        <Button asChild size="lg">
          <TrackedLink href="/get-started/talent" event="professional_interest" eventLabel="talent_hero">
            Register Interest
          </TrackedLink>
        </Button>
        <Button asChild size="lg" variant="outline">
          <TrackedLink href="/get-started/hire" event="employer_interest" eventLabel="talent_hero_employer">
            Talk to the Talent Team
          </TrackedLink>
        </Button>
      </PageHero>
      <Section eyebrow="How it works" title="Three kinds of skill, labelled differently.">
        <StepList
          steps={[
            { title: "Self-reported", body: "The person says they can do it. Useful, but unchecked." },
            { title: "Assessed", body: "They passed a set task under set conditions." },
            { title: "Reviewed", body: "Someone independent looked at their actual work and agreed." },
          ]}
        />
        <p className="mt-6 max-w-3xl text-ink-2">
          Every label on a profile will say exactly which of these happened. No vague &ldquo;verified&rdquo; badges.
        </p>
      </Section>
      <Section tone="surface" title="Explore Verified Talent">
        <CardGrid items={talentPages.map((p) => ({ title: p.label, body: p.description, href: `/talent/${p.slug}` }))} />
      </Section>
      <FaqList
        faqs={[
          { q: "Is it live?", a: "Not yet. Register and we'll contact you when the first features open." },
          { q: "Do you guarantee candidates?", a: "No. Labels describe what was checked. Employers still make their own hiring decisions." },
          { q: "Do I have to take Academy courses?", a: "No. Academy projects can go on a profile, but so can work from anywhere else." },
        ]}
      />
      <CtaBand heading="Want to be on the early list?" label="Register Interest" href="/get-started/talent" secondary={{ label: "Employer Enquiry", href: "/get-started/hire" }} />
      <JsonLd data={webPageJsonLd({ title: "Verified Talent", description, path: "/talent" })} />
    </>
  );
}
