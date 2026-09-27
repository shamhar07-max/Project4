import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Check, Code2, GraduationCap, Sparkles, Users, Workflow, X } from "lucide-react";
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
import { cn } from "@/lib/utils";

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

const marqueeItems = [
  "Workflow automation", "AI agents", "CRM automation", "Document automation", "Reporting", "Web apps", "SaaS",
  "MVPs", "System integration", "Cloud deployment", "Web development", "AI engineering", "Data", "Cybersecurity",
  "Skill verification", "Job listings",
];

const tabs: DivisionTab[] = [
  {
    key: "business-ai", name: "Business AI", icon: { src: "/brand/light/businessai.webp", w: 149, h: 164 }, photo: "dashboard",
    title: "Most slow processes don't need AI first.",
    body: "They need fewer handoffs. We map the process, time it, cut what's unnecessary, and only then add automation. Anything that needs judgement stays with a person.",
    steps: ["Observe", "Measure", "Simplify", "Automate", "Measure again"], href: "/business-ai", cta: "Explore Business AI",
  },
  {
    key: "academy", name: "Academy", icon: { src: "/brand/light/academy.webp", w: 154, h: 154 }, photo: "students",
    title: "Finish a course with work you can show.",
    body: "Every track is built around projects. You build it, we break it, you fix it, then you walk a reviewer through what you did and why.",
    steps: ["Learn", "Build", "Break", "Fix", "Explain"], href: "/academy", cta: "Explore Academy",
  },
  {
    key: "studio", name: "Studio", icon: { src: "/brand/light/studio.webp", w: 159, h: 159 }, photo: "code",
    title: "Check demand before you build.",
    body: "Before full development we test whether people want the product, agree the smallest useful version, and write down what we won't build.",
    steps: ["Problem", "Demand check", "Scope", "Build", "Launch", "Measure"], href: "/studio", cta: "Explore Studio",
  },
  {
    key: "talent", name: "Verified Talent", icon: { src: "/brand/light/verifiedtalent.webp", w: 58, h: 50 }, photo: "review", badge: "In development",
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



const services = [
  { key: "business-ai", icon: Workflow, title: "Business AI", body: "Map the process, cut the steps that shouldn't exist, then automate what's left.", href: "/business-ai" },
  { key: "studio", icon: Code2, title: "Studio", body: "Web apps, SaaS and internal tools, scoped after a demand check.", href: "/studio" },
  { key: "academy", icon: GraduationCap, title: "Academy", body: "Project-based courses. You build it, we break it, you fix it and explain it.", href: "/academy" },
];

const requests = [
  { text: "Our enquiries sit in WhatsApp for hours…", to: "Business AI" },
  { text: "We need a booking app for our clinic…", to: "Studio", active: true },
  { text: "Our team has to run the new system…", to: "Academy" },
];

const checklist = [
  "Enquiries answered and logged the same day",
  "Documents read, checked and filed",
  "Leads routed to the right owner",
  "Weekly reports that build themselves",
  "A person approves anything that matters",
];

function Head({ eyebrow, title, intro, center = false, className }: { eyebrow: string; title: ReactNode; intro?: string; center?: boolean; className?: string }) {
  return (
    <div className={cn(center && "mx-auto text-center", "max-w-3xl", className)} data-reveal>
      <p className={cn("inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-xs font-semibold text-ink-2")}>
        <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
        {eyebrow}
      </p>
      <h2 className="mt-5 text-h2 font-semibold text-ink">{title}</h2>
      {intro ? <p className={cn("mt-4 text-lead text-ink-2", center && "mx-auto max-w-2xl")}>{intro}</p> : null}
    </div>
  );
}

/** A small illustrative UI card, floating around the hero (quso.ai style). */
function MiniCard({ label, children, className }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div aria-hidden="true" className={cn("glass float-slow absolute hidden w-56 rounded-xl p-3 text-left xl:block", className)}>
      <p className="text-[length:0.6875rem] font-semibold uppercase tracking-wider text-muted">{label}</p>
      <div className="mt-2 space-y-1.5 text-xs text-ink-2">{children}</div>
    </div>
  );
}

/** CSS phone mockup (Sentient style). Purely illustrative. */
function Phone({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div aria-hidden="true" className={cn("phone w-56 shrink-0", className)}>
      <div className="phone-screen h-[27rem] px-4 pb-4 pt-3">
        <div className="flex items-center justify-between text-[length:0.625rem] font-semibold text-ink">
          <span>9:41</span>
          <span className="h-4 w-16 rounded-full bg-ink" />
          <span>●●●</span>
        </div>
        <p className="mt-5 text-[length:0.6875rem] text-muted">DigitalBurj</p>
        <p className="text-base font-semibold tracking-tight text-ink">{title}</p>
        <div className="mt-4 space-y-2">{children}</div>
      </div>
    </div>
  );
}

function Row({ k, v, done }: { k: string; v?: string; done?: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-[length:0.6875rem] shadow-[0_1px_2px_rgb(11_12_12/0.06)]">
      <span className="flex items-center gap-1.5 text-ink-2">
        <span className={cn("grid size-3.5 place-items-center rounded-full", done ? "bg-accent-deep text-white" : "border border-line-strong")}>
          {done ? <Check className="size-2.5" /> : null}
        </span>
        {k}
      </span>
      {v ? <span className="font-semibold text-ink">{v}</span> : null}
    </div>
  );
}

export default function HomePage() {
  const featured = articles.slice(0, 3);
  return (
    <>
      {/* 01 Hero: CodeGuide headline over the quso.ai dotted canvas */}
      <section className="relative isolate -mt-16 overflow-hidden pt-16 sm:-mt-[4.25rem] sm:pt-[4.25rem] lg:-mt-[4.75rem] lg:pt-[4.75rem]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="dot-canvas absolute inset-0" />
          <svg className="absolute inset-x-0 top-0 h-[70%] w-full text-ink/10" viewBox="0 0 1440 600" preserveAspectRatio="none" fill="none">
            <path d="M720 170 L180 0 M720 170 L420 0 M720 170 L1020 0 M720 170 L1260 0 M720 170 L0 330 M720 170 L1440 330" stroke="currentColor" strokeDasharray="3 6" />
          </svg>
          <div className="ember-glow absolute left-1/2 top-[45%] h-[26rem] w-[50rem] -translate-x-1/2" />
        </div>

        <MiniCard label="Business AI" className="left-[4%] top-[22%] -rotate-3">
          <Row k="Enquiry received" done />
          <Row k="Details extracted" done />
          <Row k="Owner assigned" />
        </MiniCard>
        <MiniCard label="Academy · module" className="bottom-[16%] left-[6%] rotate-2 [animation-delay:-2s]">
          <Row k="Build it" done />
          <Row k="Break it" done />
          <Row k="Fix it" />
        </MiniCard>
        <MiniCard label="Studio · release" className="right-[4%] top-[20%] rotate-3 [animation-delay:-1s]">
          <Row k="Scope agreed" done />
          <Row k="Tested on devices" done />
          <Row k="Launch" />
        </MiniCard>
        <MiniCard label="Verified Talent" className="bottom-[18%] right-[6%] -rotate-2 [animation-delay:-3s]">
          <div className="flex flex-wrap gap-1">
            <span className="rounded-full border border-line-strong px-2 py-0.5">self-declared</span>
            <span className="rounded-full border border-line-strong px-2 py-0.5">assessed</span>
            <span className="rounded-full bg-accent-soft px-2 py-0.5 text-accent-strong">verified</span>
          </div>
        </MiniCard>

        <div className="container-site relative pb-14 pt-10 text-center sm:pb-20 sm:pt-14 [@media(max-height:820px)]:pt-6">
          <span className="animate-rise mx-auto grid size-16 place-items-center rounded-2xl border border-line bg-paper shadow-[0_20px_40px_-20px_rgb(11_12_12/0.35)] max-sm:[@media(max-height:740px)]:hidden">
            <Image src="/brand/05_WEB_SOCIAL/favicon-app-128.png" alt="" width={128} height={128} className="size-11" priority />
          </span>
          <h1 className="animate-rise mx-auto mt-7 max-w-5xl text-display font-semibold text-ink max-sm:[@media(max-height:740px)]:mt-2" style={{ ["--d" as string]: "80ms" }}>
            We build the systems.<br className="hidden sm:block" /> <span className="ink-gradient">And the skills to run them.</span>
          </h1>
          <p className="animate-rise mx-auto mt-6 max-w-2xl text-lead text-ink-2 max-sm:[@media(max-height:700px)]:hidden" style={{ ["--d" as string]: "160ms" }}>
            Automation and AI for operations, custom software, hands-on tech training, and hiring on work people have
            actually done.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap justify-center gap-3" style={{ ["--d" as string]: "240ms" }}>
            <a href="#services" className="inline-flex h-12 items-center rounded-full border border-line-strong bg-paper px-6 text-sm font-semibold text-ink shadow-[0_1px_2px_rgb(11_12_12/0.05)] transition-colors hover:border-ink/40">
              See what we do
            </a>
            <TrackedLink
              href="/contact"
              eventLabel="home_hero_conversation"
              className="group inline-flex h-12 items-center gap-3 rounded-full bg-ink pl-6 pr-1.5 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgb(11_12_12/0.7)] transition-colors hover:bg-ink-2"
            >
              Talk to us
              <span className="grid size-9 place-items-center rounded-full bg-accent-deep transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </TrackedLink>
          </div>
          <nav aria-label="DigitalBurj divisions" className="animate-rise mt-12 max-sm:[@media(max-height:740px)]:mt-6" style={{ ["--d" as string]: "320ms" }}>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {pillarList.map((p) => (
                <li key={p.key}>
                  <TrackedLink href={p.href} eventLabel={`home_dock_${p.key}`} className="flex items-center gap-2 text-sm font-semibold text-muted grayscale transition hover:text-ink hover:grayscale-0">
                    <Image src={p.icon} alt="" width={p.w} height={p.h} className="h-5 w-auto" />
                    {p.name}
                    <span className="sr-only">: {p.line}</span>
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* 02 Routing hub (CodeGuide diagram) */}
      <section className="section-pad pt-4">
        <div className="container-site">
          <div className="relative grid items-center gap-8 rounded-[2rem] border border-line bg-paper px-5 py-12 shadow-[0_30px_60px_-40px_rgb(11_12_12/0.3)] sm:px-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-6 lg:py-16" data-reveal>
            <ul className="space-y-3" aria-label="Example requests">
              {requests.map((r) => (
                <li
                  key={r.text}
                  className={cn(
                    "flex items-center gap-3 rounded-full px-4 py-2.5 text-sm",
                    r.active ? "border border-accent/30 bg-paper text-ink shadow-[0_10px_30px_-12px_rgb(252_48_18/0.45)]" : "text-muted",
                  )}
                >
                  <Sparkles aria-hidden="true" className={cn("size-4 shrink-0", r.active ? "text-accent-strong" : "text-muted/60")} />
                  {r.text}
                </li>
              ))}
            </ul>
            <div className="relative mx-auto grid size-56 place-items-center sm:size-72" aria-hidden="true">
              <span className="flow-line absolute right-full top-1/2 hidden h-0.5 w-16 lg:block" />
              <span className="flow-line absolute left-full top-1/2 hidden h-0.5 w-16 lg:block" />
              <div className="hub-ring hub-ring-spin absolute inset-0 rounded-full" />
              <div className="relative grid size-[82%] place-items-center rounded-full bg-paper text-center shadow-[inset_0_2px_20px_rgb(11_12_12/0.06)]">
                <div>
                  <Image src="/brand/05_WEB_SOCIAL/favicon-app-128.png" alt="" width={128} height={128} className="mx-auto size-12" />
                  <p className="mt-3 font-semibold text-ink">DigitalBurj</p>
                  <p className="text-xs text-muted">One team, five divisions</p>
                </div>
              </div>
            </div>
            <ul className="space-y-3" aria-label="Where each request goes">
              {requests.map((r) => (
                <li
                  key={r.to}
                  className={cn(
                    "rounded-xl border px-5 py-3.5",
                    r.active ? "border-line bg-paper shadow-[0_20px_40px_-20px_rgb(11_12_12/0.35)] lg:-ml-4 lg:scale-105" : "border-line/70 bg-canvas/60",
                  )}
                >
                  <p className={cn("text-xs", r.active ? "text-accent-strong" : "text-muted")}>Goes to</p>
                  <p className={cn("font-semibold", r.active ? "text-lg text-ink" : "text-ink-2")}>DigitalBurj {r.to}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-5 text-center text-sm text-muted">Tell us the problem in your own words. We route it to the team that can fix it.</p>
        </div>
      </section>

      {/* 03 About (Aeline statement + bento) */}
      <section id="about" className="scroll-mt-24 section-pad">
        <div className="container-site">
          <div className="text-center" data-reveal>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" /> About us
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-h2 font-semibold text-ink">
              One technology partner for{" "}
              <span className="inline-grid size-[1.1em] translate-y-[0.12em] place-items-center rounded-full bg-accent-soft align-baseline">
                <Image src="/brand/light/businessai.webp" alt="" width={149} height={164} className="h-[0.6em] w-auto" />
              </span>{" "}
              automation, software{" "}
              <span className="text-muted">
                and{" "}
                <span className="inline-grid size-[1.1em] translate-y-[0.12em] place-items-center rounded-full bg-ink align-baseline">
                  <Image src="/brand/dark/academy.webp" alt="" width={154} height={154} className="h-[0.55em] w-auto" />
                </span>{" "}
                the skills to run them.
              </span>
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-[1.1fr_1.2fr_1fr]">
            <div className="relative min-h-80 overflow-hidden rounded-[1.5rem]" data-reveal>
              <Photo photo="headset" sizes="(min-width: 1024px) 30vw, 100vw" />
              <div className="absolute inset-x-4 bottom-4 rounded-xl bg-paper p-5">
                <p className="text-4xl font-semibold tracking-tight text-ink">5</p>
                <p className="mt-1 text-sm text-ink-2">Divisions: Business AI, Academy, Studio, Verified Talent and Jobs.</p>
              </div>
            </div>
            <div className="flex flex-col rounded-[1.5rem] bg-surface p-7" data-reveal style={{ ["--i" as string]: 1 }}>
              <p className="text-sm text-ink-2">How we work</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-ink">Learn. Build. Transform.</p>
              <p className="mt-auto pt-8 text-body-sm text-ink-2">{site.description}</p>
              <ul className="mt-5 flex -space-x-2" aria-label="Divisions">
                {pillarList.map((p) => (
                  <li key={p.key} className="grid size-10 place-items-center rounded-full border-2 border-surface bg-paper">
                    <Image src={p.icon} alt={p.name} width={p.w} height={p.h} className="h-5 w-auto" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4" data-reveal style={{ ["--i" as string]: 2 }}>
              <div className="rounded-[1.5rem] bg-accent-soft p-7">
                <p className="text-sm text-ink-2">Every project</p>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-ink">5 steps</p>
                <p className="mt-3 text-sm text-ink-2">Look, agree, build, launch, measure. We start from today&apos;s numbers.</p>
              </div>
              <div className="flex items-end justify-between rounded-[1.5rem] bg-ink p-7 text-white">
                <p className="text-sm text-white/75">Industries we design for</p>
                <p className="text-4xl font-semibold tracking-tight">{industries.length}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Services (Aeline) */}
      <section id="services" className="scroll-mt-24 section-pad">
        <div className="container-site">
          <Head center eyebrow="Services" title="Everything you need to change how work gets done" intro="Use one division or several. Each one starts from the problem, not the product." />
          <div className="mt-8 text-center">
            <Button asChild>
              <TrackedLink href="/get-started" eventLabel="home_services_get_started">
                Get started <ArrowRight aria-hidden="true" />
              </TrackedLink>
            </Button>
          </div>
          <div className="mt-12 grid gap-4 rounded-[2rem] border border-line bg-paper/70 p-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Link key={s.key} href={s.href} className="card-interactive group flex min-h-64 flex-col rounded-[1.4rem] border border-line bg-paper p-6" data-reveal style={{ ["--i" as string]: i }}>
                <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent-strong">
                  <s.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="mt-auto pt-10 text-lg font-semibold text-ink">{s.title}</span>
                <span className="mt-2 text-body-sm text-muted">{s.body}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                  Learn more <ArrowRight className="size-4 text-accent-strong transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
            <div className="relative min-h-64 overflow-hidden rounded-[1.4rem]" data-reveal style={{ ["--i" as string]: 3 }}>
              <Photo photo="students" sizes="(min-width: 1024px) 18rem, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* 05 Showcase (Sentient phones) */}
      <section className="section-pad overflow-hidden">
        <div className="container-site">
          <Head center eyebrow="In practice" title="One team. Endless possibilities." intro="What the work looks like once it's running: fewer handoffs, clear steps, and a person in charge of every decision." />
          <div className="mt-8 text-center">
            <Button asChild>
              <TrackedLink href="/get-started/studio" eventLabel="home_showcase_start">
                Start a project <ArrowRight aria-hidden="true" />
              </TrackedLink>
            </Button>
          </div>
          <div className="relative mt-14 flex items-end justify-center gap-4 sm:gap-8" data-reveal>
            <div aria-hidden="true" className="ember-glow absolute bottom-0 left-1/2 h-72 w-[40rem] -translate-x-1/2" />
            <Phone title="Enquiry flow" className="relative hidden translate-y-8 scale-90 md:block">
              <Row k="WhatsApp message" done />
              <Row k="Details extracted" done />
              <Row k="CRM record" done />
              <Row k="Owner assigned" done />
              <Row k="Draft reply" />
              <Row k="Person approves" />
            </Phone>
            <Phone title="Backend track" className="relative z-10">
              <div className="rounded-xl bg-white p-3 shadow-[0_1px_2px_rgb(11_12_12/0.06)]">
                <p className="text-[length:0.625rem] text-muted">This module</p>
                <p className="text-sm font-semibold text-ink">Build · Break · Fix · Explain</p>
                <div className="mt-3 flex h-20 items-end gap-1.5">
                  {[40, 65, 50, 85, 60, 95, 70].map((h, i) => (
                    <span key={i} className={cn("flex-1 rounded-t", i === 5 ? "bg-accent-deep" : "bg-ink/80")} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <Row k="Build your project" done />
              <Row k="Fix the bugs we add" done />
              <Row k="Explain it to a reviewer" />
            </Phone>
            <Phone title="Job listing" className="relative hidden translate-y-8 scale-90 md:block">
              <div className="rounded-xl bg-white p-3 text-[length:0.6875rem] shadow-[0_1px_2px_rgb(11_12_12/0.06)]">
                <p className="font-semibold text-ink">Backend developer</p>
                <p className="text-muted">Named employer · closing date</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  <span className="rounded-full bg-fill px-2 py-0.5">Node.js</span>
                  <span className="rounded-full bg-fill px-2 py-0.5">SQL</span>
                  <span className="rounded-full bg-fill px-2 py-0.5">APIs</span>
                </div>
              </div>
              <Row k="Attach a project" done />
              <Row k="Skills checked" done />
              <Row k="Shortlist" />
            </Phone>
          </div>
        </div>
      </section>

      {/* 06 Easy to start (Vital: checklist + card UI) */}
      <section className="section-pad">
        <div className="container-site">
          <div className="grid items-center gap-12 overflow-hidden rounded-[2rem] border border-white bg-[linear-gradient(180deg,var(--color-paper),var(--color-surface))] px-6 py-12 shadow-[0_40px_80px_-50px_rgb(11_12_12/0.35)] sm:px-12 lg:grid-cols-2 lg:py-16">
            <div data-reveal>
              <h2 className="text-h2 font-semibold text-ink">
                Easy to start.
                <br />
                <span className="font-normal text-ink-2">Built around your team.</span>
              </h2>
              <ul className="mt-8 space-y-3">
                {checklist.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-body-sm text-ink-2">
                    <Check aria-hidden="true" className="size-4 text-accent-strong" />
                    {c}
                  </li>
                ))}
              </ul>
              <Link href="/business-ai" className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-ink">
                <span className="grid size-10 place-items-center rounded-full border border-line-strong bg-paper transition-colors group-hover:border-ink">
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
                Explore Business AI
              </Link>
            </div>
            <div className="relative mx-auto w-full max-w-sm" data-reveal style={{ ["--i" as string]: 1 }} aria-hidden="true">
              <div className="rounded-[1.75rem] bg-ink p-6 text-white shadow-[0_30px_60px_-30px_rgb(11_12_12/0.8)]">
                <div className="flex items-center justify-between">
                  <Image src="/brand/dark/wordmark.webp" alt="" width={800} height={152} className="h-4 w-auto" />
                  <span className="text-[length:0.6875rem] text-white/75">Example workflow</span>
                </div>
                <p className="mt-10 text-xs text-white/75">Enquiry flow</p>
                <p className="text-3xl font-semibold tracking-tight">4 of 6 steps</p>
                <p className="text-xs text-white/75">run without anyone touching them</p>
              </div>
              <div className="-mt-6 mx-3 rounded-[1.5rem] bg-paper p-5 shadow-[0_30px_60px_-30px_rgb(11_12_12/0.45)]">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Automated</span>
                  <span className="font-semibold text-ink">4 / 6</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-fill">
                  <div className="animate-bar h-full w-2/3 origin-left rounded-full bg-accent-deep" />
                </div>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-muted">Needs a person</span>
                  <span className="font-semibold text-ink">Approval, exceptions</span>
                </div>
                <div className="mt-5 grid h-11 place-items-center rounded-full bg-ink text-sm font-semibold text-white">Review drafts</div>
              </div>
              <div className="mx-3 mt-3 flex items-center gap-3 rounded-xl bg-paper p-4 shadow-[0_20px_40px_-30px_rgb(11_12_12/0.45)]">
                <Workflow className="size-5 text-accent-strong" />
                <span className="flex-1 text-sm">
                  <span className="block font-semibold text-ink">Logs</span>
                  <span className="text-xs text-muted">Every automated action can be looked up later</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 Divisions in depth */}
      <section className="section-pad">
        <div className="container-site">
          <Head eyebrow="How each division works" title="Pick a division." className="mb-12" />
          <DivisionTabs tabs={tabs} />
        </div>
      </section>

      {/* 08 Prompt bar (display only) */}
      <section className="section-pad-compact">
        <div className="container-site">
          <div className="rounded-[2rem] border border-line bg-paper px-6 py-12 text-center sm:px-12" data-reveal>
            <p className="text-h2 font-semibold text-ink">Describe what you need.</p>
            <p className="mx-auto mt-3 max-w-md text-body-sm text-ink-2">
              A preview of how an enquiry starts. Type anything; to actually send it, use WhatsApp or the contact form.
            </p>
            <div className="mt-8">
              <HeroPrompt />
            </div>
          </div>
        </div>
      </section>

      {/* 09 Hiring */}
      <section className="section-pad">
        <div className="container-site">
          <Head eyebrow="DigitalBurj Jobs" title="Hiring on real work." className="mb-12" />
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { t: "Looking for work", b: "Apply to open roles and attach projects you've built.", href: "/jobs/for-job-seekers", l: "For job seekers", Icon: Briefcase },
              { t: "Hiring", b: "List the skills a role needs and look at candidates' work before you interview.", href: "/jobs/for-employers", l: "For employers", Icon: Users },
            ].map((c, i) => (
              <Link key={c.href} href={c.href} className="card-interactive group flex flex-col rounded-[1.5rem] border border-line bg-paper p-7" data-reveal style={{ ["--i" as string]: i }}>
                <span className="grid size-11 place-items-center rounded-xl bg-accent-soft text-accent-strong">
                  <c.Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="mt-10 text-2xl font-semibold tracking-tight text-ink">{c.t}</span>
                <span className="mt-2 text-body-sm text-ink-2">{c.b}</span>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                  {c.l} <ArrowRight className="size-4 text-accent-strong transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-6 flex max-w-3xl items-start gap-2 text-sm text-muted">
            <X aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-strong" />
            We introduce candidates and employers. We don&apos;t guarantee jobs or visas, and employers make their own hiring decisions.
          </p>
        </div>
      </section>

      {/* 10 Portfolio */}
      <section className="section-pad">
        <div className="container-site">
          <Head center eyebrow="Portfolio" title="Our own products and ventures." />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {projects.map((p, i) => (
              <li key={p.slug} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"} data-reveal style={{ ["--i" as string]: i % 3 }}>
                <Link
                  href={`/portfolio/${p.slug}`}
                  className={cn(
                    "card-interactive group relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] border border-line bg-paper p-7",
                    i < 2 ? "min-h-72" : "min-h-52",
                  )}
                >
                  <span aria-hidden="true" className="dot-canvas absolute inset-0 opacity-50" />
                  <span className="relative flex items-center justify-between text-xs text-muted">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <span>{p.sector ?? "Sector to be confirmed"}</span>
                  </span>
                  <span className="relative text-center text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{p.name}</span>
                  <span className="relative flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-muted">Details coming soon</span>
                    <span className="grid size-11 place-items-center rounded-full bg-ink text-white transition-colors group-hover:bg-accent-deep">
                      <ArrowRight className="size-4" aria-hidden="true" />
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
      <section className="section-pad">
        <div className="container-site">
          <Carousel label="Industries" header={<Head eyebrow="Industries" title="Sectors we design for." />}>
            {industries.map((ind, i) => (
              <li key={ind.href} className="w-[17rem] shrink-0 snap-start sm:w-[20rem]">
                <Link href={ind.href} className="card-interactive group flex h-full flex-col rounded-[1.5rem] border border-line bg-paper p-6">
                  <span className="text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mt-8 text-xl font-semibold text-ink">{ind.title}</span>
                  <span className="mt-2 flex-1 text-body-sm text-ink-2">{ind.body}</span>
                  <ArrowRight aria-hidden="true" className="mt-5 size-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent-strong" />
                </Link>
              </li>
            ))}
          </Carousel>
        </div>
      </section>

      {/* 12 Insights */}
      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Head eyebrow="Insights" title="Guides and articles." intro="Plain-language notes on automation, AI and building software: what works, what doesn't, and how to decide." />
            <Button asChild variant="outline" className="mt-8">
              <Link href="/insights">All insights</Link>
            </Button>
          </div>
          <ul className="space-y-3">
            {featured.map((a, i) => (
              <li key={a.slug} data-reveal style={{ ["--i" as string]: i }}>
                <Link href={`/insights/${a.slug}`} className="card-interactive group flex items-center gap-5 rounded-[1.25rem] border border-line bg-paper p-5">
                  <span className="flex-1">
                    <span className="rounded-full bg-fill px-2.5 py-0.5 text-xs text-ink-2">{a.kind}</span>
                    <span className="mt-2 block font-semibold text-ink">{a.title}</span>
                    <span className="mt-1 line-clamp-2 block text-sm text-muted">{a.description}</span>
                  </span>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-fill transition-colors group-hover:bg-ink group-hover:text-white">
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 13 FAQ */}
      <FaqList title="Quick answers" faqs={answers} />

      {/* 14 Final CTA */}
      <section className="pb-4 pt-8">
        <div className="container-site">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.12)_1px,transparent_0)] bg-[length:18px_18px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000,transparent)]" />
              <div className="absolute bottom-[-40%] left-1/2 h-[80%] w-[60%] -translate-x-1/2 rounded-full bg-accent/30 blur-3xl" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">Next step</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-h1 font-semibold text-white">Tell us what isn&apos;t working.</h2>
            <p className="mx-auto mt-4 max-w-lg text-body-sm text-white/75">Pick the closest option and we&apos;ll route you to the right team. No sales script.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {finalCtas.map((c, i) => (
                <Button key={c.href} asChild variant={i === 0 ? "inverse" : "outline-inverse"}>
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
