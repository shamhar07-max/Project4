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
    answer: `${site.description} Its five connected divisions, Business AI, Academy, Studio, Verified Talent and Jobs, can each operate independently, while sharing one approach: find out what the problem actually is, show the work, and check whether it helped.`,
    blocks: [
      {
        type: "cards",
        heading: "What DigitalBurj does",
        items: [
          { title: "DigitalBurj Business AI", body: "Diagnoses operational problems, redesigns processes and automates the steps where the gain can be measured.", href: "/business-ai" },
          { title: "DigitalBurj Academy", body: "Practical technology and professional education built around projects, assessment and evidence.", href: "/academy" },
          { title: "DigitalBurj Studio", body: "Validates, designs, engineers and deploys software products.", href: "/studio" },
          { title: "DigitalBurj Verified Talent", body: "Makes professional capability visible through evidence and verification.", href: "/talent" },
          { title: "DigitalBurj Jobs", body: "Connects demonstrated capability with genuine opportunities.", href: "/jobs" },
        ],
      },
      {
        type: "text",
        heading: "Purpose",
        body: [
          "Many of the problems DigitalBurj works on share a cause: claims are easier to make than to prove. Businesses buy technology without measuring the problem it should solve. Learners complete courses without producing evidence of capability. Products are built before anyone confirms they are needed. Employers struggle to tell claimed skills from demonstrated ones.",
          "DigitalBurj is structured around closing those gaps, with each division reinforcing the others.",
        ],
      },
      {
        type: "flow",
        heading: "Operating model",
        steps: ["Understand", "Define", "Build", "Verify", "Deploy", "Measure", "Improve"],
        caption: "The same seven-step framework is used across Business AI, Studio and Academy. See How We Work.",
      },
    ],
    related: ["/company/how-we-work", "/company/leadership", "/company/engineering-principles", "/company/responsible-ai", "/contact"],
    cta: { heading: "Talk to DigitalBurj.", label: "Contact Us", href: "/contact" },
  },
  {
    slug: "leadership",
    label: "Leadership",
    eyebrow,
    h1: "Leadership",
    seoTitle: "DigitalBurj Leadership",
    description: "The people responsible for DigitalBurj and its divisions.",
    answer:
      "This page will introduce the people who lead DigitalBurj and each of its divisions, with their verified titles, areas of responsibility and professional backgrounds. Profiles are published only after titles and biographies have been confirmed.",
    blocks: [
      {
        type: "callout",
        heading: "Profiles are being verified",
        body: "Leadership profiles will appear here once each person's title and biography have been confirmed for publication. For enquiries in the meantime, please contact us.",
      },
    ],
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
      "DigitalBurj works in seven stages: understand the actual problem, define requirements and evidence, build the smallest meaningful system, verify it, deploy it, measure what changes and improve based on evidence. The same framework applies whether the work is a business automation, a software product or a learning programme.",
    blocks: [
      {
        type: "steps",
        heading: "The DigitalBurj framework",
        steps: [
          { title: "Understand", body: "Understand the actual problem, including how work happens today and who it affects." },
          { title: "Define", body: "Define requirements, the evidence that will show success, and the constraints." },
          { title: "Build", body: "Develop the smallest meaningful system that addresses the problem." },
          { title: "Verify", body: "Test the work against the requirements and the evidence criteria." },
          { title: "Deploy", body: "Put the system into real use, with support and monitoring." },
          { title: "Measure", body: "Observe what actually changes against the baseline." },
          { title: "Improve", body: "Use the evidence to decide what happens next." },
        ],
      },
      {
        type: "list",
        heading: "Principles",
        items: [
          "Understand before building.",
          "Evidence before claims.",
          "Validate before scaling.",
          "Automate bounded repetition.",
          "Keep human review where judgment matters.",
          "Test before production.",
          "Measure after deployment.",
        ],
      },
      {
        type: "text",
        heading: "What we will not do",
        body: [
          "We do not publish fabricated customers, metrics or testimonials. We do not promise jobs or visas to learners. We do not recommend automation where it would remove necessary human judgment, and we will recommend stopping a product when the evidence says it should not be built.",
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
      "DigitalBurj engineering principles are the standards every system we build must meet before it reaches production: sound architecture, server-enforced authorisation, transactional data integrity, meaningful tests, secure handling of secrets and files, observability, tested recovery and documentation someone else can use.",
    blocks: [
      {
        type: "cards",
        heading: "The principles",
        items: [
          { title: "Architecture", body: "As simple as the problem allows, with clear boundaries and a data model designed for real queries." },
          { title: "Authorisation", body: "Every permission is checked on the server. Users can only reach data they are entitled to." },
          { title: "Data integrity", body: "Related changes succeed or fail together. Money and inventory are never left half-updated." },
          { title: "Testing", body: "Critical paths have automated tests. Bugs are reproduced in a test before they are fixed." },
          { title: "Security", body: "Secrets stay out of code, dependencies are monitored, and private files are served only through authorised access." },
          { title: "Observability", body: "Logs, metrics and alerts show what the system is doing and when it is failing." },
          { title: "Recovery", body: "Backups are automated and restores are tested. Recovery time is known." },
          { title: "Documentation", body: "Another engineer can understand, run and change the system." },
          { title: "Assurance", body: "Work is reviewed by someone other than its author before release." },
        ],
      },
    ],
    related: ["/company/security", "/studio/software-development", "/insights/what-makes-software-production-ready"],
    cta: { heading: "Build with these standards.", label: "Start a Project", href: "/get-started/studio" },
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
      "DigitalBurj uses AI where it clearly earns its keep and keeps people responsible for decisions that involve judgment, risk or sensitive data. AI components are evaluated before use, limited to the data and actions they need, logged and monitored. We are open about their limitations.",
    blocks: [
      {
        type: "list",
        heading: "Commitments",
        items: [
          "Purpose: AI is used for a defined task with a measurable benefit.",
          "Human oversight: people approve consequential and customer-facing actions.",
          "Privacy: AI receives only the data the task requires.",
          "Data handling: providers and settings are chosen to meet the data's sensitivity.",
          "Evaluation: quality is tested on real examples before and after launch.",
          "Limitations: we state what the system cannot reliably do.",
          "Auditing: AI actions are logged and reviewable.",
          "Security: AI tools and integrations are included in security review.",
        ],
      },
      {
        type: "callout",
        heading: "What we do not claim",
        body: "No AI system is free of error or bias. We do not claim otherwise. We design for errors to be caught, corrected and learned from.",
      },
      {
        type: "list",
        heading: "Workflows that need extra care",
        items: ["Decisions about people: hiring, credit, access to services", "Health, legal and financial matters", "Communication sent on behalf of a business", "Processing of personal or confidential data"],
      },
    ],
    related: ["/business-ai/ai-agents", "/business-ai/enterprise-ai", "/company/security", "/studio/ai-product-development"],
    cta: { heading: "Discuss AI in your operations.", label: "Discuss Your Business", href: "/get-started/business" },
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
      "Security at DigitalBurj is built into how systems are designed, developed and operated: least-privilege access, protection of data in transit and at rest, security testing, monitoring, tested backups, a defined incident response process and review of the vendors we depend on.",
    blocks: [
      {
        type: "cards",
        heading: "Principles",
        items: [
          { title: "Secure development", body: "Code review, dependency monitoring and security testing as part of development." },
          { title: "Access control", body: "Least privilege for people and systems; access reviewed and removed when no longer needed." },
          { title: "Data protection", body: "Encryption in transit and at rest; private files are never publicly accessible." },
          { title: "Testing", body: "Security-relevant behaviour, such as permissions, is covered by tests." },
          { title: "Monitoring", body: "Logging and alerting for errors and suspicious activity." },
          { title: "Backups", body: "Automated backups with tested restores." },
          { title: "Incident response", body: "A defined process to contain, investigate, fix and communicate." },
          { title: "Vendor management", body: "Third-party services are reviewed for security and data handling." },
        ],
      },
      {
        type: "callout",
        heading: "Reporting a security issue",
        body: "If you believe you have found a security vulnerability in a DigitalBurj system, please report it through the contact page and choose Support. Please do not disclose it publicly until we have had a chance to respond.",
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
      "DigitalBurj hires people who can show what they can do and explain why they did it. We assess candidates through practical work rather than credentials alone. There are no open positions listed at the moment. You can register your interest and we will contact you when a suitable role opens.",
    blocks: [
      {
        type: "list",
        heading: "What we look for",
        items: ["Work you can show us", "Clear reasoning and communication", "Care for users and quality", "Honesty about what you know and do not know", "Willingness to measure and improve"],
      },
      {
        type: "callout",
        heading: "No current openings",
        body: "When DigitalBurj has open roles, they will be listed on DigitalBurj Jobs with full details.",
      },
    ],
    related: ["/jobs", "/jobs/find-jobs", "/company/how-we-work"],
    cta: { heading: "Register your interest.", label: "Register Interest", href: "/get-started/jobs" },
  },
];
