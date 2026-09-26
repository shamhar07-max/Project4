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

const description = "DigitalBurj Jobs lists real vacancies where candidates can attach their work, plus practical guides for job seekers and employers.";
export const metadata = buildMetadata({ title: "Jobs & Career Opportunities", description, path: "/jobs" });

export default function JobsPage() {
  const seekers = jobsPages.filter((p) => ["find-jobs", "for-job-seekers", "for-employers"].includes(p.slug));
  const resources = jobsPages.filter((p) => !seekers.includes(p));
  return (
    <>
      <PageHero
        crumbs={[{ name: "Jobs", path: "/jobs" }]}
        eyebrow="DigitalBurj Jobs"
        title="Jobs, with the work attached."
        lead="Real vacancies with a named employer and a closing date. Candidates can attach projects they've built, so employers see the work before the interview."
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
          We'd rather show nothing than pad this page. Register and we'll tell you when a role matching your skills
          goes up.
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
      <Section eyebrow="Career resources" title="Guides for applying and hiring">
        <CardGrid items={resources.map((p) => ({ title: p.label, body: p.description, href: `/jobs/${p.slug}` }))} columns={4} />
      </Section>
      <FaqList
        faqs={[
          { q: "Do you guarantee jobs or visas?", a: "No. We don't guarantee jobs, placements or visas, and we never charge job seekers a placement fee." },
          { q: "How does it link to Verified Talent?", a: "Once Verified Talent opens, you'll be able to attach your profile to applications." },
          { q: "Who decides who gets hired?", a: "The employer. We make introductions." },
        ]}
      />
      <CtaBand heading="Hear when a matching role goes up." label="Register Interest" href="/get-started/jobs" secondary={{ label: "Employer Enquiry", href: "/get-started/hire" }} />
      <JsonLd data={webPageJsonLd({ title: "Jobs", description, path: "/jobs" })} />
    </>
  );
}
