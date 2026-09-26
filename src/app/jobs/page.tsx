import { jobsPages } from "@/content/talent-jobs";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { CardGrid } from "@/components/site/blocks";
import { FaqList } from "@/components/site/faq";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { TrackedLink } from "@/components/site/tracked-link";
import { Button } from "@/components/ui/button";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";

const description = "DigitalBurj Jobs connects demonstrated capability with genuine opportunities, and publishes practical resources for job seekers and employers.";
export const metadata = buildMetadata({ title: "Jobs & Career Opportunities", description, path: "/jobs" });

export default function JobsPage() {
  const seekers = jobsPages.filter((p) => ["find-jobs", "for-job-seekers", "for-employers"].includes(p.slug));
  const resources = jobsPages.filter((p) => !seekers.includes(p));
  return (
    <>
      <PageHero
        crumbs={[{ name: "Jobs", path: "/jobs" }]}
        eyebrow="DigitalBurj Jobs"
        title="Connect capability to opportunity."
        lead="DigitalBurj Jobs publishes genuine opportunities from DigitalBurj and the employers it works with, and helps professionals support applications with evidence of what they can do."
      >
        <Button asChild size="lg">
          <TrackedLink href="/jobs/find-jobs" eventLabel="jobs_hero_explore">
            Explore Jobs
          </TrackedLink>
        </Button>
        <Button asChild size="lg" variant="outline">
          <TrackedLink href="/get-started/hire" event="employer_interest" eventLabel="jobs_hero_employer">
            Employer Enquiry
          </TrackedLink>
        </Button>
      </PageHero>
      <Section eyebrow="Current opportunities" title="No open listings right now.">
        <p className="max-w-3xl text-lead text-ink-2">
          We only publish real vacancies with a named employer and closing date. Register your interest to hear when
          roles that match your skills are listed.
        </p>
        <Button asChild className="mt-6">
          <TrackedLink href="/get-started/jobs" eventLabel="jobs_register">
            Register Interest
          </TrackedLink>
        </Button>
      </Section>
      <Section tone="surface" title="For job seekers and employers">
        <CardGrid items={seekers.map((p) => ({ title: p.label, body: p.description, href: `/jobs/${p.slug}` }))} />
      </Section>
      <Section eyebrow="Career resources" title="Prepare with evidence">
        <CardGrid items={resources.map((p) => ({ title: p.label, body: p.description, href: `/jobs/${p.slug}` }))} columns={4} />
      </Section>
      <FaqList
        faqs={[
          { q: "Does DigitalBurj guarantee jobs or visas?", a: "No. DigitalBurj does not guarantee employment, placements or visas, and does not charge job seekers placement fees." },
          { q: "How does Jobs connect with Verified Talent?", a: "Applications can include evidence and verified skills from a Verified Talent profile, so employers can review demonstrated capability." },
          { q: "Who makes hiring decisions?", a: "Employers. DigitalBurj facilitates the process." },
        ]}
      />
      <CtaBand heading="Hear about genuine opportunities." label="Register Interest" href="/get-started/jobs" secondary={{ label: "Employer Enquiry", href: "/get-started/hire" }} />
      <JsonLd data={webPageJsonLd({ title: "Jobs", description, path: "/jobs" })} />
    </>
  );
}
