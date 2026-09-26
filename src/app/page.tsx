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
import { buildMetadata, webPageJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ArrowLink } from "@/components/site/arrow-link";
import { HeroOrbit } from "@/components/site/hero-orbit";
import { tracks } from "@/content/academy";
import { businessAiPages } from "@/content/business-ai";
import { studioPages } from "@/content/studio";

export const metadata = buildMetadata({
  title: `${site.name} | Business AI, Academy, Studio, Verified Talent & Jobs`,
  absoluteTitle: true,
  description:
    "DigitalBurj automates business operations, builds web apps and SaaS, runs project-based tech courses, and lists jobs where candidates can attach their work.",
  path: "/",
});

const pillarList = [
  { key: "business-ai", name: "Business AI", line: "Automation and AI for operations", icon: "/brand/03_DIVISIONS/DigitalBurj_BusinessAI_Icon.webp", w: 149, h: 164, href: "/business-ai" },
  { key: "academy", name: "Academy", line: "Project-based technology courses", icon: "/brand/03_DIVISIONS/DigitalBurj_Academy_Icon.webp", w: 154, h: 154, href: "/academy" },
  { key: "studio", name: "Studio", line: "Software and product development", icon: "/brand/03_DIVISIONS/DigitalBurj_Studio_Icon.webp", w: 159, h: 159, href: "/studio" },
  { key: "talent", name: "Verified Talent", line: "Skill profiles with the proof attached", icon: "/brand/icons/verifiedtalent.webp", w: 58, h: 50, href: "/talent" },
  { key: "jobs", name: "Jobs", line: "Job listings and shortlisting", icon: "/brand/icons/jobs.webp", w: 54, h: 50, href: "/jobs" },
];

// Real counts from the site's own content, animated in the hero.
const heroStats = [
  { value: 5, label: "Connected divisions" },
  { value: tracks.length, label: "Academy tracks" },
  { value: businessAiPages.length, label: "Business AI services" },
  { value: studioPages.length, label: "Studio services" },
];

const capabilities = [
  { title: "DigitalBurj Business AI", body: "We look at how your team handles enquiries, documents and approvals, take out the steps that shouldn't exist, and automate what's left. You see the before and after numbers.", href: "/business-ai", cta: "Business AI" },
  { title: "DigitalBurj Academy", body: "Technology courses where every module ends in a working project and a review with a person, not a multiple-choice quiz.", href: "/academy", cta: "Academy" },
  { title: "DigitalBurj Studio", body: "Web apps, internal tools and SaaS products. We check people want it before building the full version, then ship something small first.", href: "/studio", cta: "Studio" },
  { title: "DigitalBurj Verified Talent", body: "Profiles that show what someone has built and how each skill was checked. Currently in development.", href: "/talent", cta: "Verified Talent" },
  { title: "DigitalBurj Jobs", body: "Listings where candidates attach project work and employers shortlist on it. We don't guarantee jobs or visas.", href: "/jobs", cta: "Jobs" },
];

const industries = [
  { title: "Logistics", body: "Shipping documents, status updates to customers, and the exceptions that eat the day.", href: "/industries/logistics" },
  { title: "Real Estate", body: "Leads from portals and WhatsApp that need an answer inside the hour.", href: "/industries/real-estate" },
  { title: "Financial Services", body: "Approvals and document checks where every step has to be traceable.", href: "/industries/financial-services" },
  { title: "Healthcare", body: "Scheduling and patient messages, with patient data kept out of AI tools.", href: "/industries/healthcare" },
  { title: "Education", body: "Admissions paperwork, and assessments that test what students can do.", href: "/industries/education" },
  { title: "Professional Services", body: "Client intake and proposals that currently live in someone's inbox.", href: "/industries/professional-services" },
];

const framework = [
  { title: "Look", body: "We watch how the work is done today and write down what's actually going wrong." },
  { title: "Agree", body: "We agree what finished looks like and which number should move." },
  { title: "Build", body: "We build the smallest version that tests the idea." },
  { title: "Launch", body: "It goes to the people who will use it, not a demo audience." },
  { title: "Measure", body: "We compare against the starting numbers and decide what to do next." },
];

const answers = [
  { q: "What is DigitalBurj?", a: "A technology company with five divisions: DigitalBurj Business AI (automation for operations), DigitalBurj Academy (training), DigitalBurj Studio (software), DigitalBurj Verified Talent (skill profiles) and DigitalBurj Jobs (hiring). You can work with any one of them on its own." },
  { q: "Is DigitalBurj a software company?", a: "Partly. Studio builds software, but most Business AI work is about fixing a process first, and the Academy is a training business. Software is usually one part of the answer." },
  { q: "What does Business AI mean here?", a: "Measuring a process, simplifying it, then automating the repetitive steps. Sometimes that includes an AI model. Often a simple rule does the job better." },
  { q: "Is Verified Talent live?", a: "Not yet. It's in development. Pages describe how it will work, and we'll say clearly when it opens." },
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
  const featured = articles.slice(0, 3);
  return (
    <>
      {/* 01 Hero — orbit adapted from 21st.dev builders-community-hero. Sized to fit the first screen. */}
      {/* Negative top margin lets the ambient light run underneath the floating glass header */}
      <section className="relative -mt-16 overflow-hidden border-b border-line pt-16 sm:-mt-[4.25rem] sm:pt-[4.25rem] lg:-mt-[4.75rem] lg:pt-[4.75rem]">
        {/* iOS 27-style ambient light behind the glass elements */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-32 size-[34rem] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -right-32 top-20 size-[30rem] rounded-full bg-success/10 blur-3xl" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-line)_1px,transparent_0)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_40%,transparent_100%)]"
        />
        <div className="container-site relative pb-8 pt-3 sm:pb-10 sm:pt-4">
          <HeroOrbit stats={heroStats} />
          <p className="sr-only">
            {heroStats.map((s) => `${s.value} ${s.label}`).join(", ")}
          </p>
          <div className="mx-auto mt-4 max-w-6xl text-center sm:mt-5">
            <p className="eyebrow animate-rise text-accent-strong" style={{ ["--d" as string]: "100ms" }}>
              DigitalBurj <span className="hidden text-muted sm:inline">· {site.tagline}</span>
            </p>
            <h1 className="animate-rise mt-3 text-display font-extrabold text-ink" style={{ ["--d" as string]: "180ms" }}>
              We build the systems.<br className="hidden sm:block" />{" "}<span className="text-accent-strong">And the skills to run them.</span>
            </h1>
            <p className="animate-rise mx-auto mt-4 max-w-2xl text-lead text-ink-2" style={{ ["--d" as string]: "280ms" }}>
              Automation and AI for operations, custom software, hands-on tech training, and hiring based on work
              people have actually done.
            </p>
            <div className="animate-rise mt-6 flex flex-wrap justify-center gap-2 sm:gap-3" style={{ ["--d" as string]: "380ms" }}>
              <Button asChild size="lg" className="max-sm:h-11 max-sm:px-4 max-sm:text-body-sm">
                <a href="#capabilities">
                  See what we do <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="max-sm:h-11 max-sm:px-4 max-sm:text-body-sm">
                <TrackedLink href="/contact" eventLabel="home_hero_conversation">
                  Talk to us
                </TrackedLink>
              </Button>
            </div>
          </div>
          <nav aria-label="DigitalBurj divisions" className="mx-auto mt-6 max-w-4xl">
            <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {pillarList.map((p, i) => (
                <li key={p.key} className="animate-rise" style={{ ["--d" as string]: `${500 + i * 80}ms` }}>
                  <TrackedLink
                    href={p.href}
                    eventLabel={`home_selector_${p.key}`}
                    className="group flex h-9 items-center gap-2 glass rounded-full pl-1 pr-3 text-sm font-semibold text-ink transition-all duration-300 ease-(--ease-out-quint) hover:-translate-y-0.5 hover:bg-paper active:scale-[0.97] sm:h-11 sm:gap-2.5 sm:pl-1.5 sm:pr-4"
                  >
                    <span className="grid size-7 shrink-0 place-items-center overflow-hidden rounded-full bg-surface transition-colors duration-300 group-hover:bg-accent-soft sm:size-8">
                      <Image src={p.icon} alt="" width={p.w} height={p.h} className="h-4 w-auto mix-blend-multiply sm:h-5" />
                    </span>
                    {p.name}
                    <span className="sr-only">: {p.line}</span>
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* 02 What DigitalBurj does */}
      <Section id="capabilities" eyebrow="What we do" title="Five divisions. Use one, or several.">
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
              Academy graduates build real projects. Studio and Business AI work needs people who can build. That&apos;s
              why they sit under one roof.
            </p>
          </li>
        </ul>
      </Section>

      {/* 03–06 Division features */}
      <PillarFeature
        id="business-ai"
        tone="surface"
        eyebrow="DigitalBurj Business AI"
        title="Most slow processes don't need AI first."
        body="They need fewer handoffs. We map the process, time it, cut what's unnecessary, and only then add automation. Anything that needs judgement stays with a person."
        steps={["Observe", "Measure", "Simplify", "Automate", "Measure again"]}
        href="/business-ai"
        cta="Explore Business AI"
        icon={{ src: "/brand/03_DIVISIONS/DigitalBurj_BusinessAI_Icon.webp", w: 149, h: 164 }}
      />
      <PillarFeature
        id="academy"
        eyebrow="DigitalBurj Academy"
        title="Finish a course with work you can show."
        body="Every track is built around projects. You build it, we break it, you fix it, then you walk a reviewer through what you did and why."
        steps={["Learn", "Build", "Break", "Fix", "Explain"]}
        href="/academy"
        cta="Explore Academy"
        icon={{ src: "/brand/03_DIVISIONS/DigitalBurj_Academy_Icon.webp", w: 154, h: 154 }}
      />
      <PillarFeature
        id="studio"
        tone="surface"
        eyebrow="DigitalBurj Studio"
        title="Check demand before you build."
        body="Before full development we test whether people want the product, agree the smallest useful version, and write down what we won't build. After each stage you decide: carry on, change direction or stop."
        steps={["Problem", "Demand check", "Scope", "Build", "Launch", "Measure"]}
        href="/studio"
        cta="Explore Studio"
        icon={{ src: "/brand/03_DIVISIONS/DigitalBurj_Studio_Icon.webp", w: 159, h: 159 }}
      />
      <PillarFeature
        id="talent"
        eyebrow="DigitalBurj Verified Talent"
        title="Skills with the proof attached."
        body="Verified Talent is still in development. Each skill on a profile will say where it came from: self-reported, assessed, or checked by a reviewer."
        href="/talent"
        cta="Explore Verified Talent"
      >
        <p className="flex flex-wrap items-center gap-2 text-lg font-bold text-ink" aria-label="Skills plus projects plus reviews equals a profile">
          {["Skills", "Projects", "Reviews"].map((t, i) => (
            <span key={t} className="inline-flex items-center gap-2">
              <span className="rounded-full border border-line px-3.5 py-2">{t}</span>
              <span aria-hidden="true" className="text-accent-strong">
                {i < 2 ? "+" : "="}
              </span>
            </span>
          ))}
          <span className="rounded-full bg-ink px-3.5 py-2 text-white">Profile</span>
        </p>
      </PillarFeature>

      {/* 07 Jobs */}
      <Section tone="surface" eyebrow="DigitalBurj Jobs" title="Jobs, with the work attached.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-line bg-paper p-6">
            <h3 className="text-h3 font-bold text-ink">Looking for work</h3>
            <p className="mt-3 text-ink-2">Apply to open roles and attach projects you&apos;ve built.</p>
            <ArrowLink href="/jobs/for-job-seekers" className="mt-5">For job seekers</ArrowLink>
          </div>
          <div className="rounded-lg border border-line bg-paper p-6">
            <h3 className="text-h3 font-bold text-ink">Hiring</h3>
            <p className="mt-3 text-ink-2">List the skills a role needs and look at candidates&apos; work before you interview.</p>
            <ArrowLink href="/jobs/for-employers" className="mt-5">For employers</ArrowLink>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-sm text-muted">
          We introduce candidates and employers. We don&apos;t guarantee jobs or visas, and employers make their own
          hiring decisions.
        </p>
      </Section>

      {/* 08 Industries */}
      <Section eyebrow="Industries" title="Sectors we design for.">
        <CardGrid items={industries} />
        <Button asChild variant="outline" className="mt-8">
          <Link href="/industries">All industries</Link>
        </Button>
      </Section>

      {/* 09 Portfolio */}
      <Section tone="surface" eyebrow="Portfolio" title="Our own products and ventures.">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/portfolio/${p.slug}`} className="card-interactive flex h-full flex-col rounded-lg border border-line bg-paper p-5 hover:border-line-strong">
                <span className="text-lg font-extrabold text-ink">{p.name}</span>
                <span className="mt-1 text-sm text-muted">{p.sector ?? "Sector to be confirmed"}</span>
                <span className="mt-auto pt-4 text-xs font-semibold uppercase tracking-wider text-muted">Details coming soon</span>
              </Link>
            </li>
          ))}
        </ul>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/portfolio">View Portfolio</Link>
        </Button>
      </Section>

      {/* 10 How we work */}
      <Section eyebrow="How we work" title="How a project runs.">
        <StepList steps={framework} />
        <ArrowLink href="/company/how-we-work" className="mt-8">More on how we work</ArrowLink>
      </Section>

      {/* 11 Insights */}
      <Section tone="surface" eyebrow="Insights" title="Guides and articles.">
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((a) => (
            <li key={a.slug}>
              <Link href={`/insights/${a.slug}`} className="card-interactive group flex h-full flex-col rounded-lg border border-line bg-paper p-6 hover:border-line-strong">
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

      {/* 12 Direct answers */}
      <Section eyebrow="Questions" title="Quick answers">
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
          <div className="relative overflow-hidden rounded-xl bg-ink px-6 py-14 sm:px-12">
            <h2 className="max-w-2xl text-h2 font-extrabold text-white">Tell us what isn&apos;t working.</h2>
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
