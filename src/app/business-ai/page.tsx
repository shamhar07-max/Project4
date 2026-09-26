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
import { Tag } from "@/components/ui/tag";

const description =
  "Explore DigitalBurj Business AI services for workflow automation, business systems, AI agents, customer operations and measurable digital transformation.";

export const metadata = buildMetadata({ title: "Business AI & Automation", description, path: "/business-ai" });

const problems = [
  "Slow lead response", "Disconnected customer data", "Manual document handling", "Repeated data entry", "Missed follow-ups",
  "Fragmented reporting", "Manual approvals", "Operational bottlenecks", "Poor visibility", "Inconsistent customer handling",
];

const model = [
  { title: "Observe the workflow", body: "See how work actually happens, including workarounds." },
  { title: "Identify the leak", body: "Find where time, customers or money are lost." },
  { title: "Establish a baseline", body: "Measure the problem before changing anything." },
  { title: "Redesign the process", body: "Remove and simplify before automating." },
  { title: "Decide what to automate", body: "Only bounded, repeatable steps with a clear benefit." },
  { title: "Keep humans where judgment matters", body: "Approvals, exceptions and sensitive cases stay with people." },
  { title: "Implement", body: "Build, integrate and test with real examples." },
  { title: "Measure results", body: "Compare against the baseline and adjust." },
];

const outcomes: Record<string, string> = {
  "ai-automation": "Remove manual reading, sorting and re-typing from high-volume work.",
  "ai-agents": "Hand bounded tasks to agents with narrow permissions and approval steps.",
  "workflow-automation": "Route incoming enquiries automatically, assign ownership and escalate anything unanswered.",
  "business-process-automation": "Run repeatable operational processes end to end, after redesign.",
  "crm-automation": "Capture every lead, assign an owner and never miss a follow-up.",
  "sales-automation": "Prepare quotes, approvals and follow-ups without administrative drag.",
  "customer-service-automation": "Answer status questions instantly and route the rest with full context.",
  "document-automation": "Classify, extract, check, route and archive business documents.",
  "data-and-reporting": "Replace manual spreadsheet reports with consistent, trusted numbers.",
  "enterprise-ai": "Adopt AI across teams with governance, evaluation and cost control.",
  "business-systems": "Connect CRM, finance and operations so data is entered once.",
  "digital-transformation": "Change process, systems, automation and capability together.",
};

const faqs = [
  { q: "What is Business AI?", a: "Business AI is the use of AI, automation and process redesign to improve how an organisation operates, judged by operational results such as response time, error rate and capacity." },
  { q: "How is Business AI different from generative AI?", a: "Generative AI is a technology that produces text, images or code. Business AI is an approach to improving operations that may use generative AI as one component, alongside rules, integrations, data and people." },
  { q: "Which business processes can be automated?", a: "Processes with repeatable steps, digital inputs, clear owners and enough volume to matter: enquiry handling, document intake, approvals, CRM updates, reporting and customer status updates are common starting points." },
  { q: "Can AI integrate with an existing CRM?", a: "Usually, through the CRM's API or a supported integration. We confirm what your CRM and plan allow during assessment." },
  { q: "What processes should not be automated?", a: "Processes that are still changing, happen rarely, depend on expert judgment, or where an error would be costly and hard to detect." },
  { q: "How long does business automation take?", a: "It depends on the process and the systems involved. We scope each engagement after the assessment and deliver in stages so that results can be measured early." },
  { q: "What information is needed before automation?", a: "A description of how the process works today, the systems involved, approximate volumes, who owns each step and what a good outcome looks like. We help gather this." },
  { q: "Can AI work with WhatsApp, email or CRM systems?", a: "Yes, through the official APIs of those platforms, with access limited to what the task requires." },
  { q: "How is business AI measured?", a: "Against a baseline taken before the change: for example first-response time, time per case, rework rate or the share of requests that go unanswered." },
];

export default function BusinessAiPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Business AI", path: "/business-ai" }]}
        eyebrow="DigitalBurj Business AI"
        title="Business AI built around real operations."
        lead="DigitalBurj helps organisations identify operational friction, redesign workflows, connect systems and bring in AI or automation where the difference can be measured."
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

      <Section eyebrow="The starting point" title="AI is not the starting point. The business problem is." intro="These are the problems we are usually asked to solve. None of them start with a model.">
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {problems.map((p) => (
            <li key={p} className="rounded-md border border-line px-4 py-3 text-body-sm font-semibold text-ink">
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface" eyebrow="Operating model" title="Fix the process. Then automate it.">
        <StepList steps={model} />
      </Section>

      <Section id="services" eyebrow="Services" title="Business AI services" intro="Each service is described by the outcome it produces.">
        <CardGrid items={businessAiPages.map((p) => ({ title: p.label, body: outcomes[p.slug] ?? p.description, href: `/business-ai/${p.slug}` }))} />
      </Section>

      <Section tone="surface" eyebrow="Industries" title="Business AI in context">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { t: "Real Estate", h: "/industries/real-estate", items: ["Lead capture", "Customer qualification", "CRM", "Follow-up", "Document handling", "Reporting"] },
            { t: "Logistics", h: "/industries/logistics", items: ["Document flows", "Shipment communication", "Customer updates", "Operations reporting", "Exception management"] },
          ].map((x) => (
            <div key={x.t} className="rounded-lg border border-line bg-paper p-6">
              <h3 className="text-h3 font-bold text-ink">{x.t}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {x.items.map((i) => (
                  <li key={i}><Tag>{i}</Tag></li>
                ))}
              </ul>
              <ArrowLink href={x.h} className="mt-6">{x.t}</ArrowLink>
            </div>
          ))}
        </div>
        <ArrowLink href="/industries" className="mt-6">All industries</ArrowLink>
      </Section>

      <Section eyebrow="Control" title="Automation requires control." intro="Every Business AI system we deliver includes the controls below. Where judgment, privacy or risk makes full automation inappropriate, a person stays in the loop.">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Human approval", "Consequential and customer-facing actions wait for a person."],
            ["Privacy", "AI receives only the data the task requires."],
            ["Sensitive data", "Excluded unless its use is justified and controlled."],
            ["Audit history", "Every automated action is logged and reviewable."],
            ["Model limits", "We state what the system cannot reliably do."],
            ["Error handling", "Failures are visible, retried safely or routed to a person."],
            ["Escalation", "Clear rules send unusual cases to the right owner."],
          ].map(([t, b]) => (
            <li key={t} className="rounded-lg border border-line p-5">
              <h3 className="font-bold text-ink">{t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{b}</p>
            </li>
          ))}
          <li className="flex items-center rounded-lg bg-surface p-5">
            <ArrowLink href="/company/responsible-ai">Responsible AI at DigitalBurj</ArrowLink>
          </li>
        </ul>
      </Section>

      <FaqList faqs={faqs} />
      <CtaBand heading="Start with the process that costs you most." body="Tell us where work is slowing down. We will start by understanding it, not by recommending a tool." label="Discuss Your Business" href="/get-started/business" />
      <JsonLd data={webPageJsonLd({ title: "Business AI", description, path: "/business-ai" })} />
    </>
  );
}
