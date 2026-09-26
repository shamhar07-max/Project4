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
        title="Capability backed by evidence."
        lead="DigitalBurj Verified Talent is being built to show what professionals can actually do: skills supported by assessments, projects and evidence, each labelled with how it was verified."
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
      <Section eyebrow="The model" title="From claim to evidence.">
        <StepList
          steps={[
            { title: "Claim", body: "\"I know this.\" Stated by the professional." },
            { title: "Assessment", body: "\"I demonstrated this.\" Completed under defined conditions." },
            { title: "Evidence", body: "\"Here is what demonstrates it.\" Examinable artefacts of the work." },
          ]}
        />
        <p className="mt-6 max-w-3xl text-ink-2">
          Verification is the final step: an independent check that the evidence supports the claim. Approval and
          verification are labelled separately so that every label means exactly what happened.
        </p>
      </Section>
      <Section tone="surface" title="Explore Verified Talent">
        <CardGrid items={talentPages.map((p) => ({ title: p.label, body: p.description, href: `/talent/${p.slug}` }))} />
      </Section>
      <FaqList
        faqs={[
          { q: "Is Verified Talent available now?", a: "Verified Talent is in development. Registering interest adds you to the list of early professionals and employers we contact as features become available." },
          { q: "Does DigitalBurj guarantee candidate quality?", a: "No. Verification labels describe what was checked and how. Employers remain responsible for their hiring decisions." },
          { q: "How does Verified Talent relate to the Academy?", a: "Academy learning produces evidence that can support a profile, but evidence from other learning and work will also be accepted." },
        ]}
      />
      <CtaBand heading="Be among the first on Verified Talent." label="Register Interest" href="/get-started/talent" secondary={{ label: "Employer Enquiry", href: "/get-started/hire" }} />
      <JsonLd data={webPageJsonLd({ title: "Verified Talent", description, path: "/talent" })} />
    </>
  );
}
