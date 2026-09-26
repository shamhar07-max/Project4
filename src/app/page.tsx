import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/site/photo";
import { TrackedLink } from "@/components/site/tracked-link";
import { JsonLd } from "@/components/site/json-ld";
import { HeroPrompt } from "@/components/site/hero-prompt";
import { DivisionTabs, type DivisionTab } from "@/components/site/division-tabs";
import { Carousel } from "@/components/site/carousel";
import { FaqList } from "@/components/site/faq";
import { articles } from "@/content/insights";
import { projects } from "@/content/portfolio";
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
  { key: "business-ai", name: "Business AI", line: "Automation and AI for operations", icon: "/brand/dark/businessai.webp", w: 149, h: 164, href: "/business-ai" },
  { key: "academy", name: "Academy", line: "Project-based technology courses", icon: "/brand/dark/academy.webp", w: 154, h: 154, href: "/academy" },
  { key: "studio", name: "Studio", line: "Software and product development", icon: "/brand/dark/studio.webp", w: 159, h: 159, href: "/studio" },
  { key: "talent", name: "Verified Talent", line: "Skill profiles with the proof attached", icon: "/brand/dark/verifiedtalent.webp", w: 58, h: 50, href: "/talent" },
  { key: "jobs", name: "Jobs", line: "Job listings and shortlisting", icon: "/brand/dark/jobs.webp", w: 54, h: 50, href: "/jobs" },
];

const marqueeItems = [
  "Workflow automation", "AI agents", "CRM automation", "Document automation", "Reporting", "Web apps", "SaaS",
  "MVPs", "System integration", "Cloud deployment", "Web development", "AI engineering", "Data", "Cybersecurity",
  "Skill verification", "Job listings",
];

const tabs: DivisionTab[] = [
  {
    key: "business-ai", name: "Business AI", icon: { src: "/brand/dark/businessai.webp", w: 149, h: 164 }, photo: "dashboard",
    title: "Most slow processes don't need AI first.",
    body: "They need fewer handoffs. We map the process, time it, cut what's unnecessary, and only then add automation. Anything that needs judgement stays with a person.",
    steps: ["Observe", "Measure", "Simplify", "Automate", "Measure again"], href: "/business-ai", cta: "Explore Business AI",
  },
  {
    key: "academy", name: "Academy", icon: { src: "/brand/dark/academy.webp", w: 154, h: 154 }, photo: "students",
    title: "Finish a course with work you can show.",
    body: "Every track is built around projects. You build it, we break it, you fix it, then you walk a reviewer through what you did and why.",
    steps: ["Learn", "Build", "Break", "Fix", "Explain"], href: "/academy", cta: "Explore Academy",
  },
  {
    key: "studio", name: "Studio", icon: { src: "/brand/dark/studio.webp", w: 159, h: 159 }, photo: "code",
    title: "Check demand before you build.",
    body: "Before full development we test whether people want the product, agree the smallest useful version, and write down what we won't build.",
    steps: ["Problem", "Demand check", "Scope", "Build", "Launch", "Measure"], href: "/studio", cta: "Explore Studio",
  },
  {
    key: "talent", name: "Verified Talent", icon: { src: "/brand/dark/verifiedtalent.webp", w: 58, h: 50 }, photo: "review", badge: "In development",
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


const services: Record<string, string> = {
  "business-ai": "Map the process, cut the steps that shouldn't exist, then automate what's left.",
  academy: "Project-based courses. You build it, we break it, you fix it and explain it.",
  studio: "Web apps, SaaS and internal tools, scoped after a demand check.",
  talent: "Skill profiles that show where each skill came from. In development.",
  jobs: "Listings where candidates attach their work. No job or visa guarantees.",
};

function Head({ eyebrow, title, className }: { eyebrow: string; title: string; className?: string }) {
  return (
    <div className={className} data-reveal>
      <p className="eyebrow text-accent-strong">{eyebrow}</p>
      <h2 className="mt-4 max-w-4xl text-h2 font-normal uppercase text-ink">{title}</h2>
    </div>
  );
}

export default function HomePage() {
  const featured = articles.slice(0, 3);
  return (
    <>
      {/* 01 Hero: rim-lit portrait over a giant wordmark (STRUCT x Zenrixa) */}
      <section className="relative isolate -mt-16 flex min-h-[100svh] flex-col overflow-hidden border-b border-line pt-16 sm:-mt-[4.25rem] sm:pt-[4.25rem] lg:-mt-[4.75rem] lg:pt-[4.75rem]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="ember-glow absolute bottom-[-10%] left-1/2 h-[80%] w-[70rem] max-w-[140vw] -translate-x-1/2" />
          <div className="ai-grid absolute inset-0 opacity-60" />
          <p className="mega-outline absolute inset-x-0 bottom-[9%] select-none text-center text-mega font-semibold uppercase max-sm:bottom-[26%]">
            DigitalBurj
          </p>
          <div className="fade-edges absolute bottom-0 left-1/2 h-[82%] w-[min(40rem,92vw)] -translate-x-1/2 max-lg:opacity-50 lg:h-[90%]">
            <Photo photo="silhouette" priority sizes="(min-width: 1024px) 40rem, 92vw" className="[filter:brightness(.8)_saturate(1.1)] max-lg:[filter:brightness(.7)]" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-canvas)_0%,rgb(8_9_9/0.82)_30%,transparent_62%)] max-lg:bg-[linear-gradient(180deg,rgb(8_9_9/0.85)_0%,rgb(8_9_9/0.55)_45%,transparent_70%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,var(--color-canvas))]" />
        </div>

        <div className="container-site relative grid flex-1 content-start gap-10 pb-10 pt-10 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_19rem] lg:pt-16 [@media(max-height:820px)]:pt-6">
          <div>
            <p className="animate-rise flex items-center gap-3 text-sm text-ink-2">
              <span aria-hidden="true" className="h-4 w-px bg-accent" />
              Technology company · {site.tagline}
            </p>
            <h1 className="animate-rise mt-6 max-w-2xl text-display font-medium text-ink [text-shadow:0_2px_30px_rgb(0_0_0/0.6)]" style={{ ["--d" as string]: "80ms" }}>
              We build the systems. <span className="text-ink-2">And the skills to run them.</span>
            </h1>
            <p className="animate-rise mt-6 max-w-md text-lead text-ink-2 max-sm:[@media(max-height:700px)]:hidden" style={{ ["--d" as string]: "160ms" }}>
              Automation and AI for operations, custom software, hands-on tech training, and hiring on work people have
              actually done.
            </p>
            <div className="animate-rise mt-8 flex flex-wrap items-center gap-3" style={{ ["--d" as string]: "240ms" }}>
              <TrackedLink
                href="/contact"
                eventLabel="home_hero_conversation"
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-ink pl-5 pr-1.5 text-sm font-semibold text-night transition-colors hover:bg-white"
              >
                Talk to us
                <span className="grid size-9 place-items-center rounded-full bg-accent-deep text-white transition-transform group-hover:rotate-[-45deg]">
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </TrackedLink>
              <a href="#services" className="inline-flex h-12 items-center rounded-full border border-line-strong bg-white/[0.04] px-5 text-sm font-semibold text-ink backdrop-blur-md transition-colors hover:border-white/50">
                See what we do
              </a>
            </div>
          </div>

          <aside aria-label="Divisions at a glance" className="animate-rise hidden space-y-5 lg:block" style={{ ["--d" as string]: "320ms" }}>
            <Link href="/business-ai" className="glass group flex gap-4 rounded-xl p-3 transition-transform hover:-translate-y-1">
              <span className="relative h-28 w-24 shrink-0 overflow-hidden rounded-lg">
                <Photo photo="ember" sizes="96px" />
              </span>
              <span className="flex flex-col py-1">
                <span className="text-xs uppercase tracking-[0.16em] text-muted">Business AI</span>
                <span className="mt-2 text-lg font-medium leading-snug text-ink">Fix the process. Then automate it.</span>
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-accent-strong">
                  Explore <ArrowRight className="size-3.5" aria-hidden="true" />
                </span>
              </span>
            </Link>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">Five divisions</p>
              <ul className="mt-3 grid grid-cols-5 gap-2">
                {pillarList.map((p) => (
                  <li key={p.key}>
                    <TrackedLink
                      href={p.href}
                      eventLabel={`home_dock_${p.key}`}
                      title={p.name}
                      className="grid aspect-square place-items-center rounded-lg border border-line bg-white/[0.03] transition-colors hover:border-accent/60 hover:bg-accent/10"
                    >
                      <Image src={p.icon} alt="" width={p.w} height={p.h} className="h-6 w-auto" />
                      <span className="sr-only">
                        {p.name}: {p.line}
                      </span>
                    </TrackedLink>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="container-site relative pb-6">
          <div className="hidden items-end gap-4 lg:flex">
            <Link href="/academy" className="group relative w-52 overflow-hidden rounded-xl bg-[linear-gradient(140deg,var(--color-accent-deep),var(--color-accent-warm))] p-4 text-white shadow-[0_20px_50px_-20px_rgb(252_48_18/0.8)]">
              <span aria-hidden="true" className="flex gap-1"><span className="h-1 w-5 rounded-full bg-white" /><span className="h-1 w-1.5 rounded-full bg-white/60" /><span className="h-1 w-1.5 rounded-full bg-white/60" /></span>
              <span className="mt-5 block text-sm font-bold uppercase leading-tight">Academy</span>
              <span className="mt-1 block text-sm leading-snug">Courses that end in a project.</span>
            </Link>
            <Link href="/studio" className="group flex w-72 items-center gap-3 rounded-xl bg-cream p-3 text-night">
              <span className="flex-1">
                <span className="block text-sm font-bold uppercase">Studio</span>
                <span className="mt-1 block text-xs leading-snug text-stone">Web apps, SaaS and internal tools, from scope to launch.</span>
              </span>
              <span className="relative size-16 shrink-0 overflow-hidden rounded-lg">
                <Photo photo="corridor" sizes="64px" />
                <span className="absolute bottom-1 right-1 grid size-6 place-items-center rounded-full bg-night text-white">
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </span>
              </span>
            </Link>
          </div>
          <div className="glass mt-4 flex items-center justify-between rounded-full px-5 py-2.5 text-xs text-ink-2">
            <span className="flex items-center gap-2"><span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />5 divisions</span>
            <span className="hidden sm:inline">Business AI · Academy · Studio · Verified Talent · Jobs</span>
            <a href="#about" className="flex items-center gap-1.5 hover:text-ink">
              Scroll down <ArrowDown className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* 02 Division strip (in place of client logos: we only show our own divisions) */}
      <div className="marquee overflow-hidden border-b border-line py-6" aria-label="What we work on">
        <ul className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((m, i) => (
            <li key={i} aria-hidden={i >= marqueeItems.length ? true : undefined} className="flex items-center gap-5 px-5 text-lg font-light uppercase tracking-wide text-muted">
              <span className="size-1.5 rotate-45 bg-accent" aria-hidden="true" />
              {m}
            </li>
          ))}
        </ul>
      </div>

      {/* 03 About (NeoVision "The Digital Frontier") */}
      <section id="about" className="scroll-mt-24 section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="fade-edges relative aspect-[4/3.4] overflow-hidden" data-reveal>
            <Photo photo="headset" sizes="(min-width: 1024px) 50vw, 100vw" className="photo-noir" />
          </div>
          <div data-reveal style={{ ["--i" as string]: 1 }}>
            <p className="eyebrow text-accent-strong">About us</p>
            <h2 className="mt-4 text-h1 font-normal uppercase text-ink">Learn. Build. Transform.</h2>
            <ul className="mt-6 flex flex-wrap gap-2 text-xs text-ink-2">
              {["Business AI", "Academy", "Studio", "Verified Talent", "Jobs"].map((t) => (
                <li key={t} className="rounded-full border border-line-strong px-3 py-1">{t}</li>
              ))}
            </ul>
            <p className="mt-6 max-w-lg text-body text-ink-2">{site.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button asChild variant="outline">
                <Link href="/company">About DigitalBurj</Link>
              </Button>
              <Link href="/company/how-we-work" className="group inline-flex items-center gap-3 text-sm font-semibold text-ink">
                <span className="grid size-10 place-items-center rounded-full border border-line-strong transition-colors group-hover:border-accent group-hover:bg-accent/15">
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
                How we work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Light interlude (Zenrixa): statement + pill row */}
      <section className="px-2 sm:px-4">
        <div className="mx-auto max-w-[90rem] overflow-hidden rounded-[2rem] bg-cream text-night">
          <div className="container-site grid gap-10 section-pad lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div className="relative" data-reveal>
              <div aria-hidden="true" className="absolute -left-24 -top-24 size-80 rounded-full bg-[radial-gradient(circle_at_1px_1px,rgb(5_6_6/0.25)_1px,transparent_0)] bg-[length:9px_9px] [mask-image:radial-gradient(closest-side,#000,transparent)]" />
              <span className="relative inline-flex items-center gap-2 rounded-full bg-night/[0.06] px-3 py-1 text-xs font-semibold">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-night" />
                What we do
              </span>
              <p className="relative mt-6 max-w-xs text-sm text-stone">Five divisions, one team. Use one of them, or several.</p>
            </div>
            <p className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl" data-reveal>
              We help businesses fix how work gets done{" "}
              <span className="text-stone">through automation, custom software, practical training and hiring on real work.</span>
            </p>
          </div>
          <div className="container-site -mt-4 pb-14 sm:pb-20">
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Learn, build, transform">
              <li className="grid h-24 place-items-center rounded-full bg-white text-2xl font-medium sm:h-28 sm:text-3xl">Learn</li>
              <li className="grid h-24 place-items-center rounded-full bg-[linear-gradient(120deg,var(--color-accent-deep),var(--color-accent-warm))] text-2xl font-medium text-white sm:h-28 sm:text-3xl">Build</li>
              <li>
                <Link href="/get-started" className="group grid h-24 place-items-center rounded-full bg-night text-white sm:h-28" aria-label="Get started">
                  <ArrowRight className="size-10 transition-transform duration-500 group-hover:translate-x-2" aria-hidden="true" />
                </Link>
              </li>
              <li className="grid h-24 place-items-center rounded-full bg-cream-2 text-2xl font-medium text-stone sm:h-28 sm:text-3xl">Transform</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 05 Services (NeoVision "Our service") */}
      <section id="services" className="scroll-mt-24 section-pad">
        <div className="container-site">
          <Carousel label="Divisions" header={<Head eyebrow="Our divisions" title="What we do" />}>
            {pillarList.map((p) => (
              <li key={p.key} className="w-[17rem] shrink-0 snap-start sm:w-[22rem]">
                <Link href={p.href} className="card-interactive group flex h-full flex-col items-center rounded-xl border border-line bg-paper px-6 py-9 text-center">
                  <span className="grid size-14 place-items-center rounded-full border border-line-strong bg-white/[0.03] transition-colors group-hover:border-accent/60">
                    <Image src={p.icon} alt="" width={p.w} height={p.h} className="h-6 w-auto" />
                  </span>
                  <span className="mt-6 text-lg font-medium text-ink">{p.name}</span>
                  <span className="mt-3 flex-1 text-body-sm text-muted">{services[p.key]}</span>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                    Learn more <ArrowRight className="size-4 text-accent-strong transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </Carousel>
        </div>
      </section>

      {/* 06 Try it: the prompt bar (display only) */}
      <section className="section-pad-compact">
        <div className="container-site grid items-center gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div data-reveal>
            <p className="eyebrow text-accent-strong">Start here</p>
            <p className="mt-4 text-h2 font-normal uppercase text-ink">Describe what you need.</p>
            <p className="mt-4 max-w-md text-body-sm text-ink-2">
              A preview of how an enquiry starts. Type anything; to actually send it, use WhatsApp or the contact form.
            </p>
          </div>
          <div data-reveal style={{ ["--i" as string]: 1 }}>
            <HeroPrompt />
          </div>
        </div>
      </section>

      {/* 07 Divisions in depth (NeoVision "Limitless possibilities") */}
      <section className="section-pad">
        <div className="container-site">
          <Head eyebrow="How each division works" title="One team. Five ways in." className="mb-12" />
          <DivisionTabs tabs={tabs} />
        </div>
      </section>

      {/* 08 Philosophy (STRUCT) */}
      <section className="section-pad border-y border-line bg-surface">
        <div className="container-site grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-16">
          <div className="flex flex-col justify-between gap-10" data-reveal>
            <p className="text-sm text-ink-2"><span className="text-accent-strong">01/</span> how we work</p>
            <div>
              <p className="text-sm font-bold uppercase text-ink">Look. Agree. Build.</p>
              <p className="mt-3 text-sm text-muted">We write down how the work is done today before we change anything, so we can show what moved.</p>
            </div>
          </div>
          <div>
            <p className="text-2xl font-normal leading-snug tracking-tight text-ink sm:text-4xl" data-reveal>
              We don&apos;t start with software. <span className="text-accent-strong">We start with the process</span> and build only
              what it needs.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-[1.4fr_1fr]">
              <div className="relative min-h-60 overflow-hidden rounded-xl" data-reveal>
                <Photo photo="corridor" sizes="(min-width: 768px) 45vw, 100vw" />
              </div>
              <div className="flex flex-col rounded-xl bg-cream p-6 text-night" data-reveal style={{ ["--i" as string]: 1 }}>
                <span aria-hidden="true" className="flex justify-end gap-1"><span className="h-1.5 w-6 rounded-full bg-night" /><span className="size-1.5 rounded-full bg-accent-deep" /><span className="size-1.5 rounded-full bg-accent-deep" /></span>
                <p className="mt-auto pt-10 text-3xl font-medium tracking-tight">Measured, not assumed.</p>
                <p className="mt-3 text-sm text-stone">Every project starts from today&apos;s numbers, and ends by comparing against them.</p>
              </div>
            </div>
            <ol className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-5">
              {framework.map((f, i) => (
                <li key={f.title} data-reveal style={{ ["--i" as string]: i }}>
                  <span className="text-xs text-accent-strong">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-2 font-semibold text-ink">{f.title}</p>
                  <p className="mt-1 text-sm text-muted">{f.body}</p>
                </li>
              ))}
            </ol>
            <Link href="/company/how-we-work" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink">
              More on how we work <ArrowRight className="size-4 text-accent-strong transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 09 Jobs and talent */}
      <section className="section-pad">
        <div className="container-site">
          <Head eyebrow="DigitalBurj Jobs" title="Hiring on real work" className="mb-12" />
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { n: "01", t: "Looking for work", b: "Apply to open roles and attach projects you've built.", href: "/jobs/for-job-seekers", l: "For job seekers" },
              { n: "02", t: "Hiring", b: "List the skills a role needs and look at candidates' work before you interview.", href: "/jobs/for-employers", l: "For employers" },
            ].map((c, i) => (
              <Link key={c.href} href={c.href} className="card-interactive group flex flex-col rounded-xl border border-line bg-paper p-7" data-reveal style={{ ["--i" as string]: i }}>
                <span className="flex items-start justify-between">
                  <span className="text-5xl font-light text-ink-2">{c.n}</span>
                  <span className="grid size-11 place-items-center rounded-full border border-line-strong transition-colors group-hover:border-accent group-hover:bg-accent/15">
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </span>
                <span className="mt-10 text-2xl font-medium text-ink">{c.t}</span>
                <span className="mt-2 text-body-sm text-ink-2">{c.b}</span>
                <span className="mt-5 text-sm font-semibold text-accent-strong">{c.l}</span>
              </Link>
            ))}
          </div>
          <p className="mt-6 flex max-w-3xl items-start gap-2 text-sm text-muted">
            <X aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-strong" />
            We introduce candidates and employers. We don&apos;t guarantee jobs or visas, and employers make their own hiring decisions.
          </p>
        </div>
      </section>

      {/* 10 Works (Zenrixa "Explore our works") */}
      <section className="section-pad border-t border-line">
        <div className="container-site">
          <div className="text-center" data-reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-fill px-3 py-1 text-xs text-ink-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              Portfolio
            </span>
            <h2 className="mx-auto mt-5 max-w-3xl text-h1 font-medium text-ink">Our own products and ventures.</h2>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {projects.map((p, i) => (
              <li key={p.slug} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"} data-reveal style={{ ["--i" as string]: i % 3 }}>
                <Link
                  href={`/portfolio/${p.slug}`}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-line bg-night p-7 transition-colors hover:border-accent/50 ${i < 2 ? "min-h-80" : "min-h-56"}`}
                >
                  <span aria-hidden="true" className="ember-glow absolute -bottom-1/2 left-1/2 h-full w-[140%] -translate-x-1/2 opacity-0 transition-opacity duration-700 group-hover:opacity-60" />
                  <span className="relative flex items-center justify-between text-xs text-muted">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <span>{p.sector ?? "Sector to be confirmed"}</span>
                  </span>
                  <span className="relative text-center text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{p.name}</span>
                  <span className="relative flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-muted">Details coming soon</span>
                    <span className="grid size-12 place-items-center rounded-full bg-white/10 text-ink backdrop-blur-md transition-colors group-hover:bg-accent-deep">
                      <ArrowRight className="size-5" aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/portfolio">View portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 11 Industries */}
      <section className="section-pad border-t border-line">
        <div className="container-site">
          <Carousel label="Industries" header={<Head eyebrow="Industries" title="Sectors we design for" />}>
            {industries.map((ind, i) => (
              <li key={ind.href} className="w-[17rem] shrink-0 snap-start sm:w-[20rem]">
                <Link href={ind.href} className="card-interactive group flex h-full flex-col rounded-xl border border-line bg-paper p-6">
                  <span className="text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mt-8 text-xl font-medium text-ink">{ind.title}</span>
                  <span className="mt-2 flex-1 text-body-sm text-ink-2">{ind.body}</span>
                  <ArrowRight aria-hidden="true" className="mt-5 size-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent-strong" />
                </Link>
              </li>
            ))}
          </Carousel>
        </div>
      </section>

      {/* 12 Insights (NeoVision "Voices" layout, with our articles instead of testimonials) */}
      <section className="relative section-pad overflow-hidden border-t border-line">
        <svg aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-64 w-full text-white/10" viewBox="0 0 1440 260" preserveAspectRatio="none" fill="none">
          <path d="M0 200 C 360 60, 720 260, 1080 120 S 1440 60, 1440 60" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div data-reveal>
            <p className="eyebrow text-accent-strong">Insights</p>
            <h2 className="mt-4 text-h1 font-normal uppercase text-ink">Guides and articles</h2>
            <div aria-hidden="true" className="hairline mt-8 h-px w-2/3" />
            <p className="mt-8 max-w-md text-body-sm text-ink-2">
              Plain-language notes on automation, AI and building software: what works, what doesn&apos;t, and how to decide.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/insights">All insights</Link>
            </Button>
          </div>
          <ul className="space-y-4">
            {featured.map((a, i) => (
              <li key={a.slug} data-reveal style={{ ["--i" as string]: i }}>
                <Link href={`/insights/${a.slug}`} className="glass group flex items-center gap-5 rounded-xl p-5 transition-transform hover:-translate-x-1">
                  <span className="flex-1">
                    <span className="text-xs text-muted">{a.kind}</span>
                    <span className="mt-1.5 block font-medium text-ink">{a.title}</span>
                    <span className="mt-1 line-clamp-2 block text-sm text-muted">{a.description}</span>
                  </span>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white/[0.06] transition-colors group-hover:bg-accent-deep">
                    <ArrowRight className="size-5 text-ink" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 13 FAQ */}
      <FaqList title="Quick answers" faqs={answers} photo="students" />

      {/* 14 Final CTA (NeoVision "Dive into the future") */}
      <section className="pb-4 pt-8">
        <div className="container-site">
          <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-line">
            <div aria-hidden="true" className="absolute inset-0 -z-10">
              <Photo photo="dubai" sizes="(min-width: 1280px) 76rem, 100vw" className="[filter:grayscale(.6)_brightness(.5)]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(5_6_6/0.92),rgb(5_6_6/0.55)_60%,rgb(5_6_6/0.75))]" />
              <div className="ember-glow absolute -bottom-1/3 -right-1/4 h-full w-3/4 opacity-70" />
            </div>
            <div className="grid gap-10 px-6 py-16 sm:px-12 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:items-end">
              <div>
                <p className="eyebrow text-accent-strong">Next step</p>
                <h2 className="mt-4 text-h1 font-normal uppercase text-white">Tell us what isn&apos;t working.</h2>
              </div>
              <div>
                <p className="text-body-sm text-white/75">Pick the closest option and we&apos;ll route you to the right team. No sales script.</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {finalCtas.map((c, i) => (
                    <Button key={c.href} asChild size="md" variant={i === 0 ? "primary" : "outline-inverse"}>
                      <TrackedLink href={c.href} eventLabel={`home_final_${c.label}`}>
                        {c.label}
                      </TrackedLink>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JsonLd data={webPageJsonLd({ title: site.name, description: site.description, path: "/" })} />
    </>
  );
}
