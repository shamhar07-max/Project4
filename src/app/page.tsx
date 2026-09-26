import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BellRing, Check, CircleDashed, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/section";
import { StepList } from "@/components/site/blocks";
import { TrackedLink } from "@/components/site/tracked-link";
import { JsonLd } from "@/components/site/json-ld";
import { ArrowLink } from "@/components/site/arrow-link";
import { TechStack } from "@/components/site/tech-stack";
import { DivisionTabs, type DivisionTab } from "@/components/site/division-tabs";
import { Carousel } from "@/components/site/carousel";
import { CountUp } from "@/components/site/count-up";
import { FaqList } from "@/components/site/faq";
import { articles } from "@/content/insights";
import { projects } from "@/content/portfolio";
import { tracks } from "@/content/academy";
import { businessAiPages } from "@/content/business-ai";
import { studioPages } from "@/content/studio";
import { resources } from "@/content/resources";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: `${site.name} | Business AI, Academy, Studio, Verified Talent & Jobs`,
  absoluteTitle: true,
  description:
    "DigitalBurj automates business operations, builds web apps and SaaS, runs project-based tech courses, and lists jobs where candidates can attach their work.",
  path: "/",
});

const pillarList = [
  { key: "business-ai", name: "Business AI", line: "Automation and AI for operations", icon: "/brand/light/businessai.webp", w: 149, h: 164, href: "/business-ai" },
  { key: "academy", name: "Academy", line: "Project-based technology courses", icon: "/brand/light/academy.webp", w: 154, h: 154, href: "/academy" },
  { key: "studio", name: "Studio", line: "Software and product development", icon: "/brand/light/studio.webp", w: 159, h: 159, href: "/studio" },
  { key: "talent", name: "Verified Talent", line: "Skill profiles with the proof attached", icon: "/brand/light/verifiedtalent.webp", w: 58, h: 50, href: "/talent" },
  { key: "jobs", name: "Jobs", line: "Job listings and shortlisting", icon: "/brand/light/jobs.webp", w: 54, h: 50, href: "/jobs" },
];

// Real counts from the site's own content, animated in the hero.
// Real counts from this site's own content (no invented metrics).
const kpis = [
  { value: 5, label: "Divisions" },
  { value: businessAiPages.length, label: "Business AI services" },
  { value: studioPages.length, label: "Studio services" },
  { value: tracks.length, label: "Academy tracks" },
  { value: articles.length, label: "Guides & articles" },
  { value: resources.length, label: "Free checklists & templates" },
];

const marqueeItems = [
  "Workflow automation", "AI agents", "CRM automation", "Document automation", "Reporting", "Web apps", "SaaS",
  "MVPs", "System integration", "Cloud deployment", "Web development", "AI engineering", "Data", "Cybersecurity",
  "Skill verification", "Job listings",
];

const tabs: DivisionTab[] = [
  {
    key: "business-ai", name: "Business AI", icon: { src: "/brand/light/businessai.webp", w: 149, h: 164 },
    title: "Most slow processes don't need AI first.",
    body: "They need fewer handoffs. We map the process, time it, cut what's unnecessary, and only then add automation. Anything that needs judgement stays with a person.",
    steps: ["Observe", "Measure", "Simplify", "Automate", "Measure again"], href: "/business-ai", cta: "Explore Business AI",
  },
  {
    key: "academy", name: "Academy", icon: { src: "/brand/light/academy.webp", w: 154, h: 154 },
    title: "Finish a course with work you can show.",
    body: "Every track is built around projects. You build it, we break it, you fix it, then you walk a reviewer through what you did and why.",
    steps: ["Learn", "Build", "Break", "Fix", "Explain"], href: "/academy", cta: "Explore Academy",
  },
  {
    key: "studio", name: "Studio", icon: { src: "/brand/light/studio.webp", w: 159, h: 159 },
    title: "Check demand before you build.",
    body: "Before full development we test whether people want the product, agree the smallest useful version, and write down what we won't build.",
    steps: ["Problem", "Demand check", "Scope", "Build", "Launch", "Measure"], href: "/studio", cta: "Explore Studio",
  },
  {
    key: "talent", name: "Verified Talent", icon: { src: "/brand/light/verifiedtalent.webp", w: 58, h: 50 }, badge: "In development",
    title: "Skills with the proof attached.",
    body: "Each skill on a profile will say where it came from: self-reported, assessed, or checked by a reviewer.",
    steps: ["Add a skill", "Attach the work", "Get it assessed", "Reviewed", "Share the profile"], href: "/talent", cta: "Explore Verified Talent",
  },
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

export default function HomePage() {
  const featured = articles.slice(0, 3);
  const maxKpi = Math.max(...kpis.map((k) => k.value));
  return (
    <>
      {/* 01 Hero: AI chat interface over an aurora, with the division dock */}
      <section className="relative -mt-16 overflow-hidden border-b border-line pt-16 sm:-mt-[4.25rem] sm:pt-[4.25rem] lg:-mt-[4.75rem] lg:pt-[4.75rem]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[64rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(252_48_18/0.10),transparent)]" />
          <div className="absolute right-[-10rem] top-40 size-[28rem] rounded-full bg-[radial-gradient(closest-side,rgb(23_104_63/0.14),transparent)]" />
          <div className="ai-grid absolute inset-0" />
        </div>
        <div className="container-site relative pb-8 pt-6 text-center sm:pb-10 sm:pt-8 [@media(max-height:820px)]:pt-4 max-sm:[@media(max-height:740px)]:pb-4">
          <span aria-hidden="true" className="ai-orb animate-rise mx-auto hidden size-12 sm:block [@media(max-height:820px)]:hidden" />
          <p className="animate-rise mx-auto inline-flex sm:mt-4 [@media(max-height:820px)]:mt-0 max-sm:[@media(max-height:740px)]:hidden items-center gap-2 rounded-full border border-line-strong bg-fill px-3 py-1 text-xs text-ink-2 backdrop-blur-md" style={{ ["--d" as string]: "80ms" }}>
            <span className="size-1.5 rounded-full bg-ai shadow-[0_0_8px_var(--color-ai)]" aria-hidden="true" />
            DigitalBurj <span className="hidden text-muted sm:inline">· {site.tagline}</span>
          </p>
          <h1 className="animate-rise mx-auto mt-4 max-w-6xl text-display max-sm:[@media(max-height:740px)]:mt-0 font-extrabold text-ink" style={{ ["--d" as string]: "160ms" }}>
            We build the systems.<br className="hidden sm:block" />{" "}
            <span className="text-gradient">And the skills to run them.</span>
          </h1>
          <p className="animate-rise mx-auto mt-4 max-w-2xl text-lead text-ink-2 max-sm:[@media(max-height:740px)]:mt-3 max-sm:[@media(max-height:600px)]:hidden" style={{ ["--d" as string]: "240ms" }}>
            Automation and AI for operations, custom software, hands-on tech training, and hiring based on work people
            have actually done.
          </p>
          <div className="animate-rise mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 max-sm:[@media(max-height:740px)]:mt-4" style={{ ["--d" as string]: "320ms" }}>
            <Button asChild size="lg" className="max-sm:h-11 max-sm:px-4 max-sm:text-body-sm max-[359px]:px-3! max-[359px]:text-sm! max-[359px]:[&_svg]:hidden">
              <a href="#capabilities">
                See what we do <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="max-sm:h-11 max-sm:px-4 max-sm:text-body-sm max-[359px]:px-3! max-[359px]:text-sm!">
              <TrackedLink href="/contact" eventLabel="home_hero_conversation">
                Talk to us
              </TrackedLink>
            </Button>
          </div>
          <div className="animate-rise mt-6 max-sm:[@media(max-height:740px)]:mt-3" style={{ ["--d" as string]: "380ms" }}>
            <TechStack />
          </div>
          <nav aria-label="DigitalBurj divisions" className="animate-rise mt-6 max-sm:[@media(max-height:740px)]:mt-4" style={{ ["--d" as string]: "420ms" }}>
            <ul className="glass mx-auto inline-flex max-w-full items-end justify-center gap-0.5 rounded-2xl p-1.5 sm:gap-2 sm:p-2">
              {pillarList.map((p) => (
                <li key={p.key}>
                  <TrackedLink
                    href={p.href}
                    eventLabel={`home_dock_${p.key}`}
                    className="group flex flex-col items-center gap-1 whitespace-nowrap rounded-xl px-1.5 py-2 text-xs font-semibold text-ink-2 transition-all duration-300 ease-(--ease-out-quint) hover:-translate-y-1.5 hover:bg-fill hover:text-ink sm:px-3"
                  >
                    <span className="grid size-10 place-items-center rounded-xl border border-line-strong bg-paper transition-all duration-300 group-hover:scale-110 group-hover:border-ai/50 group-hover:shadow-[0_0_24px_-6px_var(--color-ai)] sm:size-12">
                      <Image src={p.icon} alt="" width={p.w} height={p.h} className="h-6 w-auto sm:h-7" />
                    </span>
                    {p.key === "talent" ? (
                      <>
                        <span className="sm:hidden">Talent</span>
                        <span className="max-sm:hidden">{p.name}</span>
                      </>
                    ) : (
                      p.name
                    )}
                    <span className="sr-only">: {p.line}</span>
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* 02 Marquee */}
      <div className="marquee overflow-hidden border-b border-line bg-surface/70 py-4" aria-label="What we work on">
        <ul className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((m, i) => (
            <li key={i} aria-hidden={i >= marqueeItems.length ? true : undefined} className="flex items-center gap-4 px-4 text-sm text-muted">
              <span className="text-accent" aria-hidden="true">✦</span>
              {m}
            </li>
          ))}
        </ul>
      </div>

      {/* 03 Bento: what we do */}
      <Section id="capabilities" eyebrow="What we do" title="Five divisions. Use one, or several.">
        <ul className="grid gap-4 md:grid-cols-6">
          <li className="card-interactive rounded-xl border border-line bg-paper/85 p-6 backdrop-blur-md md:col-span-4">
            <p className="eyebrow text-accent-strong">DigitalBurj Business AI</p>
            <h3 className="mt-2 text-h3 font-bold text-ink">Take the repetitive steps out of operations.</h3>
            <p className="mt-2 max-w-xl text-body-sm text-ink-2">
              We look at how your team handles enquiries, documents and approvals, remove the steps that shouldn&apos;t
              exist, and automate what&apos;s left.
            </p>
            <ol aria-label="Example automated workflow" className="mt-5 grid gap-2 text-xs sm:grid-cols-2">
              {["Enquiry received", "Details extracted", "CRM record created", "Owner assigned", "Draft reply prepared", "Person approves"].map((s, i) => (
                <li key={s} className="animate-rise flex items-center gap-2 rounded-md border border-line bg-paper px-3 py-2 text-ink-2" style={{ ["--d" as string]: `${i * 90}ms` }}>
                  {i < 5 ? <Check aria-hidden="true" className="size-3.5 text-ai" /> : <CircleDashed aria-hidden="true" className="size-3.5 animate-spin text-amber [animation-duration:3s]" />}
                  {s}
                </li>
              ))}
            </ol>
            <ArrowLink href="/business-ai" className="mt-5">Business AI</ArrowLink>
          </li>
          <li className="card-interactive rounded-xl border border-line bg-paper/85 p-6 backdrop-blur-md md:col-span-2">
            <p className="eyebrow text-accent-strong">DigitalBurj Academy</p>
            <h3 className="mt-2 text-h3 font-bold text-ink">Courses that end in a project.</h3>
            <ol aria-label="How a module runs" className="mt-4 space-y-1.5 rounded-md border border-line bg-surface p-3 text-sm text-ink-2">
              {[
                ["✓", "Build", "your project", "text-ai"],
                ["✗", "Break", "we add bugs", "text-accent-strong"],
                ["✓", "Fix", "until tests pass", "text-ai"],
                ["→", "Explain", "to a reviewer", "text-accent-strong"],
              ].map(([icon, verb, rest, tone]) => (
                <li key={verb} className="flex gap-2">
                  <span aria-hidden="true" className={tone}>{icon}</span>
                  <span><span className="font-semibold text-ink">{verb}</span> {rest}</span>
                </li>
              ))}
            </ol>
            <ArrowLink href="/academy" className="mt-5">Academy</ArrowLink>
          </li>
          <li className="card-interactive rounded-xl border border-line bg-paper/85 p-6 backdrop-blur-md md:col-span-2">
            <p className="eyebrow text-accent-strong">DigitalBurj Studio</p>
            <h3 className="mt-2 text-h3 font-bold text-ink">Web apps, SaaS and internal tools.</h3>
            <div aria-hidden="true" className="mt-4 space-y-2 rounded-md border border-line bg-surface p-3">
              <div className="flex gap-1.5"><span className="size-2 rounded-full bg-accent/70" /><span className="size-2 rounded-full bg-amber/70" /><span className="size-2 rounded-full bg-ai/70" /></div>
              <div className="text-shimmer h-2.5 w-3/4 rounded bg-line-strong" />
              <div className="h-2.5 w-1/2 rounded bg-line-strong/70" />
              <div className="grid grid-cols-3 gap-1.5 pt-1"><div className="h-8 rounded bg-line" /><div className="h-8 rounded bg-line" /><div className="h-8 rounded bg-ai-soft" /></div>
            </div>
            <ArrowLink href="/studio" className="mt-5">Studio</ArrowLink>
          </li>
          <li className="card-interactive rounded-xl border border-line bg-paper/85 p-6 backdrop-blur-md md:col-span-2">
            <div className="flex items-center justify-between gap-2">
              <p className="eyebrow text-accent-strong">Verified Talent</p>
              <span className="rounded-full border border-amber/40 bg-amber/10 px-2 py-0.5 text-[length:0.6875rem] text-amber">In development</span>
            </div>
            <h3 className="mt-2 text-h3 font-bold text-ink">Skills with the proof attached.</h3>
            <ul aria-label="Verification labels" className="mt-4 flex flex-wrap gap-2 text-xs">
              <li className="rounded-full border border-line-strong px-2.5 py-1 text-muted">self-declared</li>
              <li className="rounded-full border border-amber/40 px-2.5 py-1 text-amber">assessed</li>
              <li className="rounded-full border border-ai/50 bg-ai-soft px-2.5 py-1 text-ai">verified</li>
            </ul>
            <ArrowLink href="/talent" className="mt-5">Verified Talent</ArrowLink>
          </li>
          <li className="card-interactive rounded-xl border border-line bg-paper/85 p-6 backdrop-blur-md md:col-span-2">
            <p className="eyebrow text-accent-strong">DigitalBurj Jobs</p>
            <h3 className="mt-2 text-h3 font-bold text-ink">Jobs, with the work attached.</h3>
            <div className="mt-4 flex items-center gap-3 rounded-md border border-dashed border-line-strong p-3">
              <BellRing aria-hidden="true" className="size-5 shrink-0 text-muted" />
              <p className="text-sm text-muted">No open listings right now. We don&apos;t guarantee jobs or visas.</p>
            </div>
            <ArrowLink href="/jobs" className="mt-5">Jobs</ArrowLink>
          </li>
        </ul>
      </Section>

      {/* 04 Stats & chart: counts from this site's own content */}
      <Section tone="surface" eyebrow="By the numbers" title="What's on this site today.">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {kpis.map((k) => (
              <div key={k.label} className="bg-paper p-5">
                <dd className="text-stat font-extrabold tabular-nums text-ink">
                  <CountUp to={k.value} />
                </dd>
                <dt className="mt-2 text-sm text-muted">{k.label}</dt>
              </div>
            ))}
          </dl>
          <figure className="rounded-xl border border-line bg-paper p-6">
            <figcaption className="text-xs uppercase tracking-[0.14em] text-muted">Pages by type</figcaption>
            <ul className="mt-5 space-y-3">
              {kpis.slice(1).map((k) => (
                <li key={k.label} className="grid grid-cols-[9rem_1fr_2rem] items-center gap-3 text-sm">
                  <span className="truncate text-ink-2">{k.label}</span>
                  <span className="h-2.5 overflow-hidden rounded-full bg-line">
                    <span
                      className="animate-bar block h-full origin-left rounded-full bg-[linear-gradient(90deg,var(--color-accent),var(--color-amber),var(--color-ai))]"
                      style={{ width: `${(k.value / maxKpi) * 100}%` }}
                    />
                  </span>
                  <span className="text-right tabular-nums text-ink">{k.value}</span>
                </li>
              ))}
            </ul>
          </figure>
        </div>
      </Section>

      {/* 05 Tabs + stepper per division */}
      <Section eyebrow="How each division works" title="Pick a division.">
        <DivisionTabs tabs={tabs} />
      </Section>

      {/* 06 Jobs */}
      <Section tone="surface" eyebrow="DigitalBurj Jobs" title="Jobs, with the work attached.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card-interactive rounded-xl border border-line bg-paper p-6">
            <h3 className="text-h3 font-bold text-ink">Looking for work</h3>
            <p className="mt-3 text-ink-2">Apply to open roles and attach projects you&apos;ve built.</p>
            <ArrowLink href="/jobs/for-job-seekers" className="mt-5">For job seekers</ArrowLink>
          </div>
          <div className="card-interactive rounded-xl border border-line bg-paper p-6">
            <h3 className="text-h3 font-bold text-ink">Hiring</h3>
            <p className="mt-3 text-ink-2">List the skills a role needs and look at candidates&apos; work before you interview.</p>
            <ArrowLink href="/jobs/for-employers" className="mt-5">For employers</ArrowLink>
          </div>
        </div>
        <p className="mt-6 flex max-w-3xl items-start gap-2 text-sm text-muted">
          <X aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-strong" />
          We introduce candidates and employers. We don&apos;t guarantee jobs or visas, and employers make their own hiring decisions.
        </p>
      </Section>

      {/* 07 Industries carousel */}
      <Section eyebrow="Industries" title="Sectors we design for.">
        <Carousel label="Industries">
          {industries.map((ind) => (
            <li key={ind.href} className="w-[17rem] shrink-0 snap-start sm:w-[20rem]">
              <Link href={ind.href} className="card-interactive group flex h-full flex-col rounded-xl border border-line bg-paper/85 p-6 backdrop-blur-md">
                <span className="text-xs text-ai">/industries</span>
                <span className="mt-3 text-h3 font-bold text-ink">{ind.title}</span>
                <span className="mt-2 flex-1 text-body-sm text-ink-2">{ind.body}</span>
                <ArrowRight aria-hidden="true" className="mt-5 size-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent-strong" />
              </Link>
            </li>
          ))}
        </Carousel>
      </Section>

      {/* 08 Portfolio gallery */}
      <Section tone="surface" eyebrow="Portfolio" title="Our own products and ventures.">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((p, i) => (
            <li key={p.slug}>
              <Link href={`/portfolio/${p.slug}`} className="card-interactive group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper">
                <span aria-hidden="true" className="relative grid h-24 place-items-center overflow-hidden border-b border-line bg-[linear-gradient(135deg,rgb(252_48_18/0.10),rgb(23_104_63/0.08))]">
                  <span className="ai-dots absolute inset-0 opacity-60" />
                  <span className="relative text-3xl font-bold text-ink/80 transition-transform duration-500 group-hover:scale-110">
                    {p.name.slice(0, 2)}
                  </span>
                  <span className="absolute right-2 top-2 text-[length:0.6875rem] text-muted">{String(i + 1).padStart(2, "0")}</span>
                </span>
                <span className="flex flex-1 flex-col p-4">
                  <span className="font-bold text-ink">{p.name}</span>
                  <span className="mt-1 text-sm text-muted">{p.sector ?? "Sector to be confirmed"}</span>
                  <span className="mt-auto pt-3 text-[length:0.6875rem] uppercase tracking-wider text-muted">Details coming soon</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/portfolio">View Portfolio</Link>
        </Button>
      </Section>

      {/* 09 Timeline */}
      <Section eyebrow="How we work" title="How a project runs.">
        <StepList steps={framework} />
        <ArrowLink href="/company/how-we-work" className="mt-8">More on how we work</ArrowLink>
      </Section>

      {/* 10 Insights */}
      <Section tone="surface" eyebrow="Insights" title="Guides and articles.">
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((a) => (
            <li key={a.slug}>
              <Link href={`/insights/${a.slug}`} className="card-interactive group flex h-full flex-col rounded-xl border border-line bg-paper p-6">
                <span className="w-fit rounded-full border border-ai/40 bg-ai-soft px-2.5 py-0.5 text-xs text-ai">{a.kind}</span>
                <span className="mt-4 text-h3 font-bold text-ink group-hover:underline">{a.title}</span>
                <span className="mt-2 text-body-sm leading-relaxed text-ink-2">{a.description}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/insights">All Insights</Link>
        </Button>
      </Section>

      {/* 11 Accordion FAQ */}
      <FaqList title="Quick answers" faqs={answers} />

      {/* 12 Final CTA */}
      <section className="pb-4 pt-8">
        <div className="container-site">
          <div className="beam relative overflow-hidden rounded-xl bg-night px-6 py-14 sm:px-12">
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 size-96 rounded-full bg-accent/20 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-10 size-96 rounded-full bg-ai/10 blur-3xl" />
            <div aria-hidden="true" className="ai-grid pointer-events-none absolute inset-0" />
            <div className="relative">
              <p className="eyebrow text-accent">Next step</p>
              <h2 className="mt-3 max-w-2xl text-h2 font-extrabold text-white">Tell us what isn&apos;t working.</h2>
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
        </div>
      </section>

      <JsonLd data={webPageJsonLd({ title: site.name, description: site.description, path: "/" })} />
    </>
  );
}
