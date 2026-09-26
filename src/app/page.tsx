import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/section";
import { FlowDiagram, StepList, CardGrid } from "@/components/site/blocks";
import { TrackedLink } from "@/components/site/tracked-link";
import { JsonLd } from "@/components/site/json-ld";
import { articles } from "@/content/insights";
import { projects } from "@/content/portfolio";
import { learningLoop } from "@/content/academy";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ArrowLink } from "@/components/site/arrow-link";

export const metadata = buildMetadata({
  title: `${site.name} | Business AI, Academy, Studio, Verified Talent & Jobs`,
  absoluteTitle: true,
  description:
    "DigitalBurj combines Business AI, practical education, software engineering, verified professional capability and jobs in one connected technology company.",
  path: "/",
});

const pillarList = [
  { key: "business-ai", name: "Business AI", line: "Transform operations", icon: "/brand/03_DIVISIONS/DigitalBurj_BusinessAI_Icon.webp", w: 149, h: 164, href: "/business-ai" },
  { key: "academy", name: "Academy", line: "Build practical capability", icon: "/brand/03_DIVISIONS/DigitalBurj_Academy_Icon.webp", w: 154, h: 154, href: "/academy" },
  { key: "studio", name: "Studio", line: "Build digital products", icon: "/brand/03_DIVISIONS/DigitalBurj_Studio_Icon.webp", w: 159, h: 159, href: "/studio" },
  { key: "talent", name: "Verified Talent", line: "Discover demonstrated capability", icon: "/brand/icons/verifiedtalent.webp", w: 58, h: 50, href: "/talent" },
  { key: "jobs", name: "Jobs", line: "Connect talent and opportunity", icon: "/brand/icons/jobs.webp", w: 54, h: 50, href: "/jobs" },
];

const capabilities = [
  { title: "DigitalBurj Business AI", body: "Fix the process, then automate it. We diagnose where operations lose time and customers, redesign the workflow, and bring in automation or AI where we can show it pays off.", href: "/business-ai", cta: "Explore Business AI" },
  { title: "DigitalBurj Academy", body: "Learn it, apply it, prove it. Practical technology and professional learning built around projects, assessment and evidence of capability.", href: "/academy", cta: "Explore Academy" },
  { title: "DigitalBurj Studio", body: "Build what deserves to exist. Product validation, design, engineering and deployment for software that people need.", href: "/studio", cta: "Explore Studio" },
  { title: "DigitalBurj Verified Talent", body: "Capability you can see, evidence you can trust. Professional profiles built on demonstrated skills rather than claims.", href: "/talent", cta: "Explore Verified Talent" },
  { title: "DigitalBurj Jobs", body: "More than applications. Genuine opportunities connected with evidence of capability, for better hiring decisions.", href: "/jobs", cta: "Explore Jobs" },
];

const gaps = [
  "Businesses lose opportunities because systems do not connect.",
  "People complete courses without proving capability.",
  "Teams build products before proving demand.",
  "Employers struggle to distinguish claims from demonstrated skills.",
  "Professionals struggle to make their real capability visible.",
];

const ecosystem = [
  { verb: "Learn", name: "Academy", href: "/academy" },
  { verb: "Build", name: "Studio", href: "/studio" },
  { verb: "Transform", name: "Business AI", href: "/business-ai" },
  { verb: "Prove", name: "Verified Talent", href: "/talent" },
  { verb: "Connect", name: "Jobs", href: "/jobs" },
];

const industries = [
  { title: "Logistics", body: "Document flows, shipment communication and exception management.", href: "/industries/logistics" },
  { title: "Real Estate", body: "Enquiry capture, qualification, CRM and follow-up.", href: "/industries/real-estate" },
  { title: "Financial Services", body: "Controlled workflows, documents, approvals and audit history.", href: "/industries/financial-services" },
  { title: "Healthcare", body: "Operational workflows and patient communication, privacy-aware.", href: "/industries/healthcare" },
  { title: "Education", body: "Admissions, learning platforms and evidence-based assessment.", href: "/industries/education" },
  { title: "Professional Services", body: "Client intake, proposals and engagement workflows.", href: "/industries/professional-services" },
];

const framework = [
  { title: "Understand", body: "Understand the actual problem." },
  { title: "Define", body: "Define requirements, evidence and constraints." },
  { title: "Build", body: "Develop the smallest meaningful system." },
  { title: "Verify", body: "Test the work." },
  { title: "Deploy", body: "Put the system into use." },
  { title: "Measure", body: "Observe what changes." },
  { title: "Improve", body: "Use evidence to decide what happens next." },
];

const answers = [
  { q: "What is DigitalBurj?", a: `${site.description} Its divisions are DigitalBurj Business AI, DigitalBurj Academy, DigitalBurj Studio, DigitalBurj Verified Talent and DigitalBurj Jobs.` },
  { q: "What does DigitalBurj do?", a: "DigitalBurj helps organisations improve and automate operations, builds software products, provides practical education, makes professional capability verifiable, and connects capability with employment opportunities. Each service starts from a defined problem and is measured by its result." },
  { q: "Is DigitalBurj a software company?", a: "Partly. DigitalBurj Studio is a software engineering and product studio, but DigitalBurj also operates Business AI consulting and implementation, an Academy, and Verified Talent and Jobs. It is best described as a technology company with five connected divisions." },
  { q: "What is DigitalBurj Academy?", a: "DigitalBurj Academy provides practical technology and professional education. Learners complete realistic missions, including breaking and fixing systems, and must explain and defend their work. A course is finished when there is evidence of what the learner can do, not when the last video ends." },
  { q: "What is DigitalBurj Studio?", a: "DigitalBurj Studio validates, designs, builds and deploys software products for businesses and founders. It begins with product validation and ends each stage with a build, reshape or stop decision based on evidence." },
  { q: "What is Business AI?", a: "Business AI is the use of AI, automation and process redesign to improve how an organisation operates. DigitalBurj Business AI observes and measures the process first, redesigns it, and automates only the steps where the benefit shows up in the numbers. People keep the decisions that need judgment." },
  { q: "What is Verified Talent?", a: "DigitalBurj Verified Talent is a platform in development for showing professional capability through evidence. Profiles distinguish self-declared, assessed, approved and independently verified skills, so employers can see what has actually been demonstrated." },
];

const finalCtas = [
  { label: "Improve My Business", href: "/get-started/business" },
  { label: "Learn", href: "/get-started/academy" },
  { label: "Build a Product", href: "/get-started/studio" },
  { label: "Find Talent", href: "/get-started/hire" },
  { label: "Find Opportunities", href: "/get-started/jobs" },
];

function PillarFeature({
  id,
  eyebrow,
  title,
  body,
  steps,
  href,
  cta,
  icon,
  tone = "paper",
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  steps?: string[];
  href: string;
  cta: string;
  icon?: { src: string; w: number; h: number };
  tone?: "paper" | "surface" | "ink";
  children?: React.ReactNode;
}) {
  return (
    <Section id={id} tone={tone}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
        <div>
          {icon ? (
            <Image src={icon.src} alt="" width={icon.w} height={icon.h} className="mb-6 h-14 w-auto mix-blend-multiply" />
          ) : null}
          <p className={cn("eyebrow", tone === "ink" ? "text-accent" : "text-accent-strong")}>{eyebrow}</p>
          <h2 className={cn("mt-3 text-h2 font-extrabold", tone === "ink" ? "text-white" : "text-ink")}>{title}</h2>
          <p className={cn("mt-5 text-lead", tone === "ink" ? "text-white/75" : "text-ink-2")}>{body}</p>
          <Button asChild className="mt-8" variant={tone === "ink" ? "inverse" : "primary"}>
            <TrackedLink href={href} eventLabel={`home_${id}`}>
              {cta} <ArrowRight aria-hidden="true" />
            </TrackedLink>
          </Button>
        </div>
        <div className="lg:pt-14">{steps ? <FlowDiagram steps={steps} tone={tone === "ink" ? "ink" : "paper"} /> : children}</div>
      </div>
    </Section>
  );
}

export default function HomePage() {
  const featured = articles.slice(0, 6);
  return (
    <>
      {/* 01 Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="container-site grid gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_25rem] lg:gap-16 lg:pb-24 lg:pt-24">
          <div>
            <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-accent-strong">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              DigitalBurj
              <span className="text-muted">Technology • Capability • Business</span>
            </p>
            <h1 className="mt-6 max-w-3xl text-display font-extrabold text-ink">
              Technology built around <span className="text-accent-strong">real capability.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lead text-ink-2">
              DigitalBurj brings together business transformation, practical education, software engineering, verified
              professional capability and employment opportunities within one connected technology ecosystem.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#capabilities">Explore DigitalBurj</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <TrackedLink href="/contact" eventLabel="home_hero_conversation">
                  Start a Conversation
                </TrackedLink>
              </Button>
            </div>
          </div>
          <nav aria-label="DigitalBurj divisions" className="lg:pt-4">
            <ul className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-paper">
              {pillarList.map((p) => (
                <li key={p.key}>
                  <TrackedLink
                    href={p.href}
                    eventLabel={`home_selector_${p.key}`}
                    className="group flex items-center gap-4 px-5 py-4 hover:bg-surface"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden">
                      <Image
                        src={p.icon}
                        alt=""
                        width={p.w}
                        height={p.h}
                        className="h-9 w-auto mix-blend-multiply"
                      />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-extrabold uppercase tracking-[0.08em] text-ink">{p.name}</span>
                      <span className="block text-sm text-muted">{p.line}</span>
                    </span>
                    <ArrowRight className="size-4 text-line-strong transition-colors group-hover:text-accent-strong" aria-hidden="true" />
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* 02 What DigitalBurj does */}
      <Section id="capabilities" eyebrow="What DigitalBurj does" title="One company. Five connected capabilities.">
        <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <li key={c.title} className="flex flex-col bg-paper p-6">
              <h3 className="text-h3 font-bold text-ink">{c.title}</h3>
              <p className="mt-3 flex-1 text-body-sm leading-relaxed text-ink-2">{c.body}</p>
              <ArrowLink href={c.href} className="mt-6">{c.cta}</ArrowLink>
            </li>
          ))}
          <li className="flex flex-col justify-center bg-ink p-6 text-white">
            <p className="text-sm font-semibold tracking-[0.2em]">LEARN. BUILD. TRANSFORM.</p>
            <p className="mt-3 text-body-sm leading-relaxed text-white/75">
              Each division can be engaged on its own. Together they reinforce one another.
            </p>
          </li>
        </ul>
      </Section>

      {/* 03 Business problems */}
      <Section tone="ink" eyebrow="The gaps we work on" title="Claims are easy. Evidence is harder.">
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gaps.map((g, i) => (
            <li key={g} className="rounded-lg border border-white/15 p-6">
              <span className="text-sm font-bold tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-lg font-semibold leading-snug text-white">{g}</p>
            </li>
          ))}
          <li className="flex items-center rounded-lg bg-accent-strong p-6">
            <p className="text-lg font-bold leading-snug text-white">DigitalBurj is structured around these gaps.</p>
          </li>
        </ul>
      </Section>

      {/* 04 Ecosystem */}
      <Section
        eyebrow="The ecosystem"
        title="Learn. Build. Transform. Prove. Connect."
        intro="Each DigitalBurj division can operate independently, while the shared ecosystem allows learning, real work, capability evidence and business demand to reinforce one another."
      >
        <ol className="grid gap-3 sm:grid-cols-5">
          {ecosystem.map((e, i) => (
            <li key={e.name} className="relative">
              <Link href={e.href} className="group flex h-full flex-col rounded-lg border border-line p-5 hover:border-ink">
                <span className="eyebrow text-accent-strong">{e.verb}</span>
                <span className="mt-2 text-lg font-extrabold text-ink">{e.name}</span>
                <ArrowRight className="mt-auto size-4 pt-0 text-line-strong group-hover:text-accent-strong" aria-hidden="true" />
              </Link>
              {i < ecosystem.length - 1 ? (
                <ArrowRight aria-hidden="true" className="absolute -right-3 top-1/2 z-10 hidden size-4 -translate-y-1/2 bg-paper text-accent sm:block" />
              ) : null}
            </li>
          ))}
        </ol>
      </Section>

      {/* 05–08 Pillar features */}
      <PillarFeature
        id="business-ai"
        tone="surface"
        eyebrow="DigitalBurj Business AI"
        title="Improve the business before automating it."
        body="Business AI at DigitalBurj starts with the leak, not the demo: observe how work actually happens, measure it, redesign the process, and automate only what earns its place. Decisions that need judgment stay with people."
        steps={["Observe", "Diagnose", "Measure", "Redesign", "Automate", "Review", "Measure again"]}
        href="/business-ai"
        cta="Explore Business AI"
        icon={{ src: "/brand/03_DIVISIONS/DigitalBurj_BusinessAI_Icon.webp", w: 149, h: 164 }}
      />
      <PillarFeature
        id="academy"
        eyebrow="DigitalBurj Academy"
        title="Learning should produce evidence."
        body="Academy learning is built around practical missions: learners build, break, fix and test real work, then explain and defend it. What they leave with is proof of what they can do."
        steps={learningLoop.slice(1)}
        href="/academy"
        cta="Explore Academy"
        icon={{ src: "/brand/03_DIVISIONS/DigitalBurj_Academy_Icon.webp", w: 154, h: 154 }}
      />
      <PillarFeature
        id="studio"
        tone="surface"
        eyebrow="DigitalBurj Studio"
        title="Build what should exist."
        body="Studio validates demand before full development, defines the smallest buildable version and what will not be built, then engineers, launches and measures it. Every stage ends with a build, reshape or stop decision."
        steps={["Problem", "Demand", "Validation", "Scope", "Build", "Launch", "Measure", "Improve"]}
        href="/studio"
        cta="Explore Studio"
        icon={{ src: "/brand/03_DIVISIONS/DigitalBurj_Studio_Icon.webp", w: 159, h: 159 }}
      />
      <PillarFeature
        id="talent"
        eyebrow="DigitalBurj Verified Talent"
        title="Capability should be visible through evidence."
        body="Verified Talent is being built as an evidence-first alternative to the CV warehouse: skills backed by assessments, projects and evidence, each labelled with how it was verified."
        href="/talent"
        cta="Explore Verified Talent"
      >
        <p className="flex flex-wrap items-center gap-2 text-lg font-bold text-ink" aria-label="Skills plus assessments plus projects plus evidence plus verification equals a capability profile">
          {["Skills", "Assessments", "Projects", "Evidence", "Verification"].map((t, i) => (
            <span key={t} className="inline-flex items-center gap-2">
              <span className="rounded-md border border-line px-3.5 py-2">{t}</span>
              <span aria-hidden="true" className="text-accent-strong">
                {i < 4 ? "+" : "="}
              </span>
            </span>
          ))}
          <span className="rounded-md bg-ink px-3.5 py-2 text-white">Capability Profile</span>
        </p>
      </PillarFeature>

      {/* 09 Jobs */}
      <Section tone="surface" eyebrow="DigitalBurj Jobs" title="Connect capability to opportunity.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-line bg-paper p-6">
            <h3 className="text-h3 font-bold text-ink">For professionals</h3>
            <p className="mt-3 text-ink-2">Apply to genuine openings and back your CV with proof of your work.</p>
            <ArrowLink href="/jobs/for-job-seekers" className="mt-5">For job seekers</ArrowLink>
          </div>
          <div className="rounded-lg border border-line bg-paper p-6">
            <h3 className="text-h3 font-bold text-ink">For employers</h3>
            <p className="mt-3 text-ink-2">Define the capability a role needs, review evidence and shortlist before interview.</p>
            <ArrowLink href="/jobs/for-employers" className="mt-5">For employers</ArrowLink>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-sm text-muted">
          DigitalBurj facilitates connections between professionals and employers. It does not guarantee employment or
          visas, and employers make their own hiring decisions.
        </p>
      </Section>

      {/* 10 Industries */}
      <Section eyebrow="Industries" title="Technology in operational context.">
        <CardGrid items={industries} />
        <Button asChild variant="outline" className="mt-8">
          <Link href="/industries">Explore Industries</Link>
        </Button>
      </Section>

      {/* 11 Portfolio */}
      <Section tone="surface" eyebrow="Portfolio" title="Selected DigitalBurj systems and ventures.">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/portfolio/${p.slug}`} className="flex h-full flex-col rounded-lg border border-line bg-paper p-5 hover:border-ink">
                <span className="text-lg font-extrabold text-ink">{p.name}</span>
                <span className="mt-1 text-sm text-muted">{p.sector ?? "Sector to be confirmed"}</span>
                <span className="mt-4 text-sm text-ink-2">{p.summary}</span>
                <span className="mt-auto pt-4 text-xs font-semibold uppercase tracking-wider text-muted">Details in preparation</span>
              </Link>
            </li>
          ))}
        </ul>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/portfolio">View Portfolio</Link>
        </Button>
      </Section>

      {/* 12 How we work */}
      <Section eyebrow="How we work" title="One framework across everything we do.">
        <StepList steps={framework} />
        <ArrowLink href="/company/how-we-work" className="mt-8">How DigitalBurj works</ArrowLink>
      </Section>

      {/* 13 Insights */}
      <Section tone="surface" eyebrow="Insights" title="Knowledge you can use.">
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((a) => (
            <li key={a.slug}>
              <Link href={`/insights/${a.slug}`} className="group flex h-full flex-col rounded-lg border border-line bg-paper p-6 hover:border-ink">
                <span className="eyebrow">{a.kind}</span>
                <span className="mt-3 text-h3 font-bold text-ink group-hover:underline">{a.title}</span>
                <span className="mt-2 text-body-sm leading-relaxed text-ink-2">{a.description}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/insights">All Insights</Link>
        </Button>
      </Section>

      {/* 14 Direct answers */}
      <Section eyebrow="Direct answers" title="Understanding DigitalBurj">
        <dl className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {answers.map((x) => (
            <div key={x.q} className="border-t border-line pt-6">
              <dt>
                <h3 className="text-h3 font-bold text-ink">{x.q}</h3>
              </dt>
              <dd className="mt-3 leading-relaxed text-ink-2">{x.a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Final CTA */}
      <section className="pb-4 pt-8">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-lg bg-ink px-6 py-14 sm:px-12">
            <span aria-hidden="true" className="absolute inset-y-0 right-0 w-2 bg-accent" />
            <h2 className="max-w-2xl text-h2 font-extrabold text-white">Start with the problem you need to solve.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {finalCtas.map((c, i) => (
                <Button key={c.href} asChild size="lg" variant={i === 0 ? "primary" : "outline-inverse"}>
                  <TrackedLink href={c.href} eventLabel={`home_final_${c.label}`}>
                    {c.label}
                  </TrackedLink>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <JsonLd data={webPageJsonLd({ title: site.name, description: site.description, path: "/" })} />
    </>
  );
}
