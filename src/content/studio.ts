import type { ContentPage } from "./types";

const eyebrow = "DigitalBurj Studio";
const project = { label: "Start a Project", href: "/get-started/studio" };

export const studioPages: ContentPage[] = [
  {
    slug: "software-development",
    label: "Software Development",
    eyebrow,
    h1: "Custom Software Development",
    seoTitle: "Custom Software Development",
    description:
      "DigitalBurj Studio builds web platforms, business applications, customer portals and transactional systems, with testing, security and deployment included.",
    answer:
      "We build software when an off-the-shelf product doesn't fit: web platforms, internal tools, customer portals, booking and ordering systems. Testing, deployment and monitoring are part of the job, not extras. Before any of that, we check the thing is worth building.",
    blocks: [
      {
        type: "cards",
        heading: "What we build",
        items: [
          { title: "Web platforms", body: "Accounts, roles, content and payments.", href: "/studio/web-app-development" },
          { title: "Internal tools", body: "The app that replaces the shared spreadsheet.", href: "/studio/enterprise-software" },
          { title: "SaaS products", body: "One platform, many paying customer organisations.", href: "/studio/saas-development" },
        ],
      },
      {
        type: "text",
        heading: "The boring parts we take seriously",
        body: [
          "Most expensive software failures are someone seeing data they shouldn't, or a record left half-saved. Permissions are checked on the server, updates either finish or roll back, private files stay private, and there's a tested way to restore from backup.",
        ],
      },
    ],
    faqs: [
      { q: "Do you only build from scratch?", a: "No. If an existing product covers most of what you need, we'll say so and help you connect it instead." },
      { q: "Who owns the code?", a: "You do, as set out in the contract. We hand over the repository and documentation." },
    ],
    related: ["/studio/product-validation", "/studio/mvp-development", "/company/engineering-principles", "/portfolio/loadbyton", "/insights/what-makes-software-production-ready"],
    cta: { heading: "Got software that needs to exist?", body: "Tell us the problem and who has it. We'll start by checking whether it should be built.", ...project },
  },
  {
    slug: "web-app-development",
    label: "Web Applications",
    eyebrow,
    h1: "Web Application Development",
    seoTitle: "Web Application Development",
    description:
      "Fast, accessible and secure web applications built by DigitalBurj Studio, from customer-facing platforms to internal business tools.",
    answer:
      "A web app is software in the browser that lets people do something: manage records, place orders, track work. We build them to load quickly on an ordinary phone, work with a keyboard and screen reader, and keep each user's data to themselves.",
    blocks: [
      {
        type: "list",
        heading: "Included by default",
        items: ["Works on phones, tablets and desktops", "Keyboard and screen-reader support", "Clear form errors", "Server-side permission checks", "Error monitoring after launch"],
      },
    ],
    faqs: [
      { q: "Web app or mobile app?", a: "Start with web unless you need offline use, daily habits, or device features like the camera. It reaches everyone with one codebase." },
    ],
    related: ["/studio/software-development", "/studio/mobile-app-development", "/studio/saas-development", "/studio/cloud-deployment"],
    cta: { heading: "Plan your web app.", ...project },
  },
  {
    slug: "mobile-app-development",
    label: "Mobile Applications",
    eyebrow,
    h1: "Mobile App Development",
    seoTitle: "Mobile App Development",
    description:
      "DigitalBurj Studio builds mobile applications for iOS and Android when a native experience is justified, with shared backends and careful release management.",
    answer:
      "We build iOS and Android apps when being on the phone really matters: daily use, the camera or location, notifications, working offline. If a web app would do the job just as well, we'll tell you, because it's cheaper to build and maintain.",
    blocks: [
      {
        type: "list",
        heading: "Worth planning for",
        items: ["App store review times", "Users who never update", "A shared backend with your web app", "Crash reporting from day one"],
      },
    ],
    faqs: [
      { q: "Native or cross-platform?", a: "Cross-platform for most business apps. Native when performance or deep device features demand it." },
    ],
    related: ["/studio/web-app-development", "/studio/api-development", "/studio/mvp-development", "/academy/software-development"],
    cta: { heading: "Thinking about an app?", body: "We'll help you decide whether mobile should come first.", ...project },
  },
  {
    slug: "saas-development",
    label: "SaaS Development",
    eyebrow,
    h1: "SaaS Development",
    seoTitle: "SaaS Product Development",
    description:
      "Plan and build SaaS products: organisations, permissions, billing, admin tools and secure multi-tenant architecture, sized to your actual stage.",
    answer:
      "SaaS is one platform used by many customer organisations on a subscription. Compared with a single-client app, it needs more plumbing: each customer's data kept apart, team invites and roles, billing, and admin tools for your own staff.",
    blocks: [
      {
        type: "text",
        heading: "Build for the stage you're at",
        body: [
          "Before your first ten customers you don't need enterprise single sign-on or usage-based pricing. You do need tenant data kept separate from day one, because that's very hard to add later.",
        ],
      },
    ],
    faqs: [
      { q: "Can you add billing?", a: "Yes, through an established payments provider. We don't store card details ourselves." },
    ],
    related: ["/studio/mvp-development", "/studio/product-validation", "/studio/web-app-development", "/insights/how-to-scope-an-mvp", "/resources/glossary"],
    cta: { heading: "Building a SaaS product?", ...project },
  },
  {
    slug: "mvp-development",
    label: "MVP Development",
    eyebrow,
    h1: "MVP Development",
    seoTitle: "MVP Development",
    description:
      "An MVP is the smallest product that tests your riskiest assumption with real users. DigitalBurj Studio scopes, builds and measures MVPs.",
    answer:
      "An MVP is the smallest version of a product that lets real users do the one thing it's for, so you can find out whether they want it. Small in scope, but not flimsy. What it does, it should do properly.",
    blocks: [
      {
        type: "steps",
        heading: "How we scope one",
        steps: [
          { title: "Name the risky assumption", body: "The belief that, if wrong, sinks the idea." },
          { title: "Pick the core action", body: "The one thing a user must be able to do." },
          { title: "Write the no-build list", body: "Everything we're deliberately leaving out, agreed in writing." },
          { title: "Decide what to measure", body: "The number that tells you whether to carry on." },
        ],
      },
    ],
    faqs: [
      { q: "MVP or prototype?", a: "A prototype shows an idea. An MVP is used by real people for real, so it has to be secure and reliable." },
      { q: "How long does it take?", a: "Depends on scope. The no-build list is how we keep it short." },
    ],
    related: ["/studio/product-validation", "/studio/saas-development", "/insights/mvp-vs-prototype", "/insights/how-to-scope-an-mvp", "/resources/templates/mvp-planning-template"],
    cta: { heading: "Scope your MVP with us.", ...project },
  },
  {
    slug: "enterprise-software",
    label: "Enterprise Software",
    eyebrow,
    h1: "Enterprise Software Development",
    seoTitle: "Enterprise Software Development",
    description:
      "Internal systems for larger organisations: workflows, approvals and records, built with strong access control, audit history and reliability.",
    answer:
      "Internal systems for bigger organisations: case management, approvals, records and scheduling across departments. Lots of people rely on them daily, so they need tight permissions, a history of who changed what, and they can't go down.",
    blocks: [
      {
        type: "text",
        heading: "Start with one spreadsheet",
        body: [
          "Many processes run on a shared spreadsheet and email until something goes wrong: two versions, no history, no idea where work is stuck. We replace one of these at a time, starting with the one that carries the most risk.",
        ],
      },
    ],
    related: ["/solutions/enterprise-systems", "/studio/system-integration", "/business-ai/enterprise-ai", "/company/security", "/company/engineering-principles"],
    cta: { heading: "Replace the process that worries you most.", ...project },
  },
  {
    slug: "ai-product-development",
    label: "AI Products",
    eyebrow,
    h1: "AI Product Development",
    seoTitle: "AI Product Development",
    description:
      "Build products with AI features that are evaluated, monitored and cost-controlled: assistants, classification, document intelligence and search.",
    answer:
      "Adding an AI feature is quick. Making it dependable is the work: testing it against real examples, deciding what happens when it's wrong, keeping user data safe, and making sure the monthly model bill doesn't surprise you.",
    blocks: [
      {
        type: "list",
        heading: "What we set up with every AI feature",
        items: ["A test set of real examples, run before each release", "A fallback when the model fails or is unsure", "Only the data the feature needs", "Per-user and monthly cost limits"],
      },
    ],
    faqs: [
      { q: "Which model do you use?", a: "Whichever does the job reliably at a sensible cost. We keep the design flexible so it can be swapped later." },
    ],
    related: ["/business-ai/ai-agents", "/company/responsible-ai", "/studio/software-development", "/insights/ai-agent-vs-chatbot", "/academy/artificial-intelligence"],
    cta: { heading: "Adding AI to your product?", ...project },
  },
  {
    slug: "api-development",
    label: "API Development",
    eyebrow,
    h1: "API Development",
    seoTitle: "API Development & Design",
    description:
      "Documented, secure and versioned APIs that let your systems, partners and apps exchange data reliably. DigitalBurj Studio designs and builds them.",
    answer:
      "An API is how two pieces of software talk to each other. A good one is predictable, documented with working examples, secured, and versioned, so the apps and partners using it don't break every time you change something.",
    blocks: [
      {
        type: "text",
        heading: "Written for the developer on the other end",
        body: [
          "Error messages say what to fix. Examples actually run. Breaking changes come with notice. That's what cuts integration time and support tickets.",
        ],
      },
    ],
    related: ["/studio/system-integration", "/business-ai/business-systems", "/studio/software-development", "/resources/glossary"],
    cta: { heading: "Need an API partners can rely on?", ...project },
  },
  {
    slug: "system-integration",
    label: "System Integration",
    eyebrow,
    h1: "System Integration",
    seoTitle: "System Integration Services",
    description:
      "Connect CRM, ERP, payment, messaging and document systems so data flows reliably. DigitalBurj Studio builds monitored integrations with proper error handling.",
    answer:
      "Integration means data typed into one system shows up in the others, and something happening in one can kick off an action elsewhere. The part people skip is failure handling: retries, no duplicates, alerts, and a record of what synced when.",
    blocks: [
      {
        type: "list",
        heading: "Every integration we build has",
        items: ["Safe retries", "Duplicate protection", "An alert when it stops working", "A log of what was sent and received"],
      },
    ],
    related: ["/business-ai/business-systems", "/studio/api-development", "/business-ai/workflow-automation", "/solutions/workflow-automation"],
    cta: { heading: "Connect the systems you already have.", ...project },
  },
  {
    slug: "product-validation",
    label: "Product Validation",
    eyebrow,
    h1: "Product Validation",
    seoTitle: "Product Validation Before Development",
    description:
      "Test whether a product should be built before development: problem, alternatives, demand signals, smallest version and a build, reshape or stop decision.",
    answer:
      "Validation checks, before you pay for development, whether a specific group of people has the problem and would switch from what they use today. It ends with a decision: build, change the idea, or stop. Stopping early is a good result if the signs say so.",
    blocks: [
      {
        type: "steps",
        heading: "What we look at",
        steps: [
          { title: "The problem", body: "Who has it, how often, and what it costs them." },
          { title: "What they do now", body: "The workaround you're competing with, even if it's a spreadsheet." },
          { title: "Signs of demand", body: "Sign-ups, pre-orders, repeat conversations. Not compliments." },
          { title: "The decision", body: "Build, reshape or stop, with the reasons written down." },
        ],
      },
    ],
    faqs: [
      { q: "What if the answer is stop?", a: "Then you've saved the cost of building something nobody wanted. We'd rather tell you early." },
    ],
    related: ["/studio/mvp-development", "/insights/how-to-scope-an-mvp", "/resources/checklists/product-validation-checklist", "/resources/templates/mvp-planning-template", "/company/how-we-work"],
    cta: { heading: "Test the idea before you build it.", ...project },
  },
  {
    slug: "software-modernization",
    label: "Software Modernization",
    eyebrow,
    h1: "Software Modernization",
    seoTitle: "Legacy Software Modernization",
    description:
      "Modernise ageing applications step by step: stabilise, add tests, improve architecture and migrate without stopping the business.",
    answer:
      "Modernising an old system means making it easier to change, safer and able to do new things, without stopping the business that runs on it. We usually go piece by piece: stabilise it, add tests, then replace parts one at a time. A full rewrite is rarely the best first move.",
    blocks: [
      {
        type: "flow",
        heading: "The usual order",
        steps: ["Stabilise", "Add tests", "Fix the riskiest part", "Replace piece by piece"],
      },
    ],
    related: ["/studio/cloud-deployment", "/studio/software-development", "/company/engineering-principles", "/insights/what-makes-software-production-ready"],
    cta: { heading: "Get your existing system assessed.", ...project },
  },
  {
    slug: "cloud-deployment",
    label: "Cloud Deployment",
    eyebrow,
    h1: "Cloud Deployment & Operations",
    seoTitle: "Cloud Deployment & Operations",
    description:
      "Deploy applications with automated pipelines, monitoring, backups and recovery. DigitalBurj Studio sets up cloud infrastructure proportionate to your needs.",
    answer:
      "Deployment is getting software running somewhere reliable: automatic builds and releases, a test environment, monitoring, backups, and a plan for when things break. How much of that you need depends on your size and risk.",
    blocks: [
      {
        type: "list",
        heading: "The minimum we'd set up",
        items: ["Automatic build and release", "A separate test environment", "Alerts when something fails", "Backups you've actually restored from once"],
      },
    ],
    related: ["/studio/software-modernization", "/company/security", "/company/engineering-principles", "/studio/saas-development"],
    cta: { heading: "Deploy without crossing your fingers.", ...project },
  },
];
