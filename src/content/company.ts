import type { ContentPage } from "./types";
import { site } from "@/lib/site";

const eyebrow = "Company";

export const companyPages: ContentPage[] = [
  {
    slug: "about",
    label: "About",
    eyebrow,
    h1: "About DigitalBurj",
    seoTitle: "About DigitalBurj",
    description: site.description,
    answer:
      "DigitalBurj is a technology company with five divisions: Business AI, Academy, Studio, Verified Talent and Jobs. You can hire any one of them on its own. They share one habit: measure the problem first, then check afterwards whether what we did actually helped.",
    blocks: [
      {
        type: "text",
        heading: "Why five divisions",
        body: [
          "Automation and software projects need people who can build. Training is more useful when learners work on real systems. Employers want to see what candidates have made. Each part feeds the others, so they sit under one roof.",
        ],
      },
    ],
    related: ["/company/how-we-work", "/company/leadership", "/company/engineering-principles", "/company/responsible-ai", "/contact"],
    cta: { heading: "Talk to us.", label: "Contact Us", href: "/contact" },
  },
  {
    slug: "leadership",
    label: "Leadership",
    eyebrow,
    h1: "Leadership",
    seoTitle: "DigitalBurj Leadership",
    description: "The people responsible for DigitalBurj and its divisions.",
    answer:
      "This page will introduce the people who run DigitalBurj and each division. We'll publish profiles once titles and biographies are confirmed.",
    blocks: [],
    related: ["/company/about", "/contact"],
    cta: { heading: "Get in touch.", label: "Contact Us", href: "/contact" },
    indexable: false,
  },
  {
    slug: "how-we-work",
    label: "How We Work",
    eyebrow,
    h1: "How We Work",
    seoTitle: "How DigitalBurj Works",
    description:
      "The principles and seven-step framework behind every DigitalBurj engagement: understand, define, build, verify, deploy, measure and improve.",
    answer:
      "Whether it's an automation, a software product or a course, we work the same way: understand the problem, agree what success looks like, build the smallest thing that tests it, check it, launch it, measure it, then decide what's next.",
    blocks: [
      {
        type: "steps",
        heading: "Seven steps",
        steps: [
          { title: "Understand", body: "How the work happens today, and who it affects." },
          { title: "Define", body: "What done looks like, and which number should move." },
          { title: "Build", body: "The smallest version that tests the idea." },
          { title: "Verify", body: "Test it against what we agreed." },
          { title: "Deploy", body: "Real users, with monitoring and support." },
          { title: "Measure", body: "Compare with the starting numbers." },
          { title: "Improve", body: "Keep going, change direction or stop." },
        ],
      },
      {
        type: "text",
        heading: "Things we won't do",
        body: [
          "Invent customers, numbers or testimonials. Promise learners jobs or visas. Automate away a decision that needs a person. Keep building a product the evidence says nobody wants.",
        ],
      },
    ],
    related: ["/company/engineering-principles", "/company/responsible-ai", "/studio/product-validation", "/business-ai"],
    cta: { heading: "Work with us.", label: "Get Started", href: "/get-started" },
  },
  {
    slug: "engineering-principles",
    label: "Engineering Principles",
    eyebrow,
    h1: "Engineering Principles",
    seoTitle: "DigitalBurj Engineering Principles",
    description:
      "The standards every DigitalBurj system meets: architecture, authorisation, data integrity, testing, security, observability, recovery and documentation.",
    answer:
      "Before anything we build goes live, it has to meet a short list of standards. None of them are exciting. All of them are what separates software that works in a demo from software that works on a busy Monday.",
    blocks: [
      {
        type: "cards",
        heading: "The list",
        items: [
          { title: "Permissions on the server", body: "Users only ever reach data they're allowed to see." },
          { title: "All or nothing", body: "Related changes succeed or fail together. No half-saved orders." },
          { title: "Tests on what matters", body: "Critical paths are tested. A bug gets a test before it gets a fix." },
          { title: "Secrets out of code", body: "Keys and passwords never live in the repository." },
          { title: "Alerts", body: "We hear about failures before users do." },
          { title: "Restores we've tried", body: "Backups are automatic, and we've actually restored from them." },
          { title: "A second pair of eyes", body: "Nothing ships without someone other than the author reviewing it." },
        ],
      },
    ],
    related: ["/company/security", "/studio/software-development", "/insights/what-makes-software-production-ready"],
    cta: { heading: "Build to these standards.", label: "Start a Project", href: "/get-started/studio" },
  },
  {
    slug: "responsible-ai",
    label: "Responsible AI",
    eyebrow,
    h1: "Responsible AI at DigitalBurj",
    seoTitle: "Responsible AI",
    description:
      "How DigitalBurj uses AI responsibly: human oversight, privacy, data handling, evaluation, stated limitations, auditing and care in sensitive workflows.",
    answer:
      "We use AI where it clearly helps, and keep people in charge of decisions involving judgement, risk or sensitive data. Every AI feature is tested before use, sees only the data it needs, and logs what it does. We say plainly what it can't do.",
    blocks: [
      {
        type: "list",
        heading: "In practice",
        items: [
          "A person approves anything customer-facing or costly",
          "AI gets the minimum data for its task",
          "Quality is tested on real examples, before and after launch",
          "Every AI action is logged",
        ],
      },
      {
        type: "callout",
        heading: "Extra care",
        body: "Hiring, credit and access to services. Health, legal and money matters. Personal data. In these areas AI assists a person at most. It never decides.",
      },
    ],
    related: ["/business-ai/ai-agents", "/business-ai/enterprise-ai", "/company/security", "/studio/ai-product-development"],
    cta: { heading: "Talk to us about AI in your operations.", label: "Discuss Your Business", href: "/get-started/business" },
  },
  {
    slug: "security",
    label: "Security",
    eyebrow,
    h1: "Security",
    seoTitle: "Security at DigitalBurj",
    description:
      "DigitalBurj security principles: secure development, access control, data protection, testing, monitoring, backups, incident response and vendor review.",
    answer:
      "People and systems get the least access they need. Data is encrypted in transit and at rest. Permissions are tested, systems are monitored, backups are restored in practice runs, and the outside services we rely on are reviewed.",
    blocks: [
      {
        type: "callout",
        heading: "Found a vulnerability?",
        body: "Please report it through the contact page and choose Support. Give us a chance to fix it before telling anyone else.",
      },
    ],
    related: ["/company/engineering-principles", "/company/responsible-ai", "/privacy"],
    cta: { heading: "Report an issue or ask a question.", label: "Contact Us", href: "/contact" },
  },
  {
    slug: "careers",
    label: "Careers",
    eyebrow,
    h1: "Careers at DigitalBurj",
    seoTitle: "Careers at DigitalBurj",
    description: "Work at DigitalBurj. How we hire, what we look for, and current openings.",
    answer:
      "We hire people who can show us their work and explain their choices. Expect a practical task rather than a quiz about your degree. There are no openings right now. Register and we'll contact you when something suitable opens.",
    blocks: [
      {
        type: "list",
        heading: "What we look for",
        items: ["Work you can show us", "Clear thinking and clear writing", "Honesty about what you don't know yet"],
      },
    ],
    related: ["/jobs", "/jobs/find-jobs", "/company/how-we-work"],
    cta: { heading: "Register your interest.", label: "Register Interest", href: "/get-started/jobs" },
  },
];
