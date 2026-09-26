import { businessAiPages } from "@/content/business-ai";
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

const description =
  "Explore DigitalBurj Business AI services for workflow automation, business systems, AI agents, customer operations and measurable digital transformation.";

export const metadata = buildMetadata({ title: "Business AI & Automation", description, path: "/business-ai" });

const model = [
  { title: "Watch the work", body: "We sit with the people doing it and note the workarounds." },
  { title: "Measure it", body: "How long it takes, how often it goes wrong, how many requests get missed." },
  { title: "Simplify", body: "Remove steps before automating any of them." },
  { title: "Automate the repetitive parts", body: "Approvals, exceptions and sensitive cases stay with people." },
  { title: "Measure again", body: "Compare with the starting numbers and adjust." },
];

const outcomes: Record<string, string> = {
  "ai-automation": "Stop people reading, sorting and re-typing the same things all day.",
  "ai-agents": "Narrow tasks handled by software, with a person approving anything that matters.",
  "workflow-automation": "Enquiries routed and escalated without anyone chasing them.",
  "business-process-automation": "Whole processes run end to end, after they've been simplified.",
  "crm-automation": "Every lead gets an owner and a follow-up date.",
  "sales-automation": "Quotes and follow-ups without the admin.",
  "customer-service-automation": "Status questions answered instantly, the rest routed with history.",
  "document-automation": "Invoices, forms and delivery notes read, checked and filed.",
  "data-and-reporting": "Weekly reports that build themselves, with one set of numbers.",
  "enterprise-ai": "AI across teams, with rules, testing and a budget.",
  "business-systems": "CRM, finance and operations tools connected so data is typed once.",
  "digital-transformation": "Process, tools and training changed together, in stages.",
};

const faqs = [
  { q: "What is Business AI?", a: "Using automation, AI and simpler processes to make operations faster and more reliable, judged by numbers like response time and error rate." },
  { q: "How is it different from generative AI?", a: "Generative AI is a technology that writes text or images. Business AI is a way of improving operations that sometimes uses it, alongside plain rules, integrations and people." },
  { q: "Does it work with WhatsApp, email and our CRM?", a: "Yes, through their official APIs, with access limited to what each task needs." },
  { q: "How long does it take?", a: "It depends on the process. We scope after an assessment and deliver in stages so you see results early." },
];

export default function BusinessAiPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Business AI", path: "/business-ai" }]}
        eyebrow="DigitalBurj Business AI"
        title="Fix the process. Then automate it."
        lead="We find where your team loses time, cut the steps that don't need to exist, and automate what's left. You see the before and after numbers."
      >
        <Button asChild size="lg">
          <TrackedLink href="/get-started/business" event="consultation_start" eventLabel="business_hero">
            Discuss Your Business
          </TrackedLink>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="#services">Explore Solutions</a>
        </Button>
      </PageHero>

      <Section tone="surface" eyebrow="How it works" title="Five steps, in this order.">
        <StepList steps={model} />
      </Section>

      <Section id="services" eyebrow="Services" title="What we can help with">
        <CardGrid items={businessAiPages.map((p) => ({ title: p.label, body: outcomes[p.slug] ?? p.description, href: `/business-ai/${p.slug}` }))} />
      </Section>

      <Section tone="surface" eyebrow="Safeguards" title="Built in, every time.">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Human approval", "Anything customer-facing or costly waits for a person."],
            ["Least data", "AI only sees what its task needs."],
            ["Logs", "Every automated action can be looked up later."],
          ].map(([t, b]) => (
            <li key={t} className="rounded-lg border border-line p-5">
              <h3 className="font-bold text-ink">{t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{b}</p>
            </li>
          ))}
          <li className="flex items-center rounded-lg bg-paper p-5">
            <ArrowLink href="/company/responsible-ai">Responsible AI at DigitalBurj</ArrowLink>
          </li>
        </ul>
      </Section>

      <FaqList faqs={faqs} />
      <CtaBand heading="Start with the process that costs you most." body="Tell us where work gets stuck. We'll look at the process before we talk about tools." label="Discuss Your Business" href="/get-started/business" />
      <JsonLd data={webPageJsonLd({ title: "Business AI", description, path: "/business-ai" })} />
    </>
  );
}
