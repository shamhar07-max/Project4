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
      "DigitalBurj Studio develops custom software for organisations whose needs are not met by off-the-shelf products: web platforms, internal business applications, customer portals and transactional systems. Every engagement covers architecture, engineering, testing, deployment and monitoring, and starts by confirming that the software is worth building.",
    blocks: [
      {
        type: "cards",
        heading: "What we develop",
        items: [
          { title: "Web platforms", body: "Multi-user platforms with accounts, roles, content and transactions.", href: "/studio/web-app-development" },
          { title: "Business applications", body: "Internal tools that replace spreadsheets and manual coordination.", href: "/studio/enterprise-software" },
          { title: "Customer portals", body: "Secure areas where customers track orders, documents, bookings or cases." },
          { title: "Transactional systems", body: "Marketplaces, booking and ordering systems where data integrity matters most." },
          { title: "SaaS products", body: "Subscription software serving many organisations from one platform.", href: "/studio/saas-development" },
          { title: "AI-enabled products", body: "Software with controlled AI features, evaluated and monitored.", href: "/studio/ai-product-development" },
        ],
      },
      {
        type: "list",
        heading: "Engineering we include as standard",
        columns: 3,
        items: ["Architecture and data modelling", "Frontend engineering", "Backend services and APIs", "Database design", "Authentication and authorisation", "Automated testing", "Security review", "Deployment pipelines", "Monitoring and alerting", "Backups and recovery", "Technical documentation", "Handover and support"],
      },
      {
        type: "flow",
        heading: "Engagement process",
        steps: ["Discovery", "Validation", "Scope", "Architecture", "Design", "Build", "Test", "Deploy", "Measure"],
        caption: "Each stage ends with a decision point. If the evidence says the product should be reshaped or stopped, we say so.",
      },
      {
        type: "text",
        heading: "Authorisation and data integrity are not optional",
        body: [
          "The most expensive software failures come from users seeing data they should not, or records being left half-updated. We design role-based access control, server-side permission checks and transactional updates from the start, rather than adding them after launch.",
          "Private files are stored privately and served through authorised access only. Every system we deploy has monitoring and a tested way to recover from failure.",
        ],
      },
    ],
    faqs: [
      { q: "How do you decide between custom software and an existing product?", a: "We check whether an existing product covers most of the need first. Custom software is justified when the process is a differentiator, when integration requirements rule out products, or when the cost of compromise is higher than the cost of building." },
      { q: "Who owns the code?", a: "Ownership terms are agreed in the contract for each engagement. Our standard position is that clients own the software built specifically for them." },
      { q: "Do you provide support after launch?", a: "Yes. Support, monitoring and improvement arrangements are agreed per project, based on how critical the system is." },
    ],
    related: ["/studio/product-validation", "/studio/mvp-development", "/company/engineering-principles", "/portfolio/loadbyton", "/insights/what-makes-software-production-ready"],
    cta: { heading: "Have software that needs to exist?", body: "Tell us the problem it solves and who it is for. We will start by testing whether it should be built.", ...project },
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
      "A web application is software that runs in the browser and lets users do something, not just read: manage records, place orders, collaborate or track work. DigitalBurj Studio builds web applications that are fast on ordinary devices, accessible to people using assistive technology, and secure by design.",
    blocks: [
      {
        type: "list",
        heading: "Qualities we build for",
        items: ["Server-rendered pages that load quickly and can be indexed where needed", "Responsive layouts that work on phones first", "Keyboard and screen-reader accessibility", "Clear error messages and recoverable forms", "Role-based permissions enforced on the server", "Observability: logs, metrics and error tracking"],
      },
      {
        type: "steps",
        heading: "What a typical build includes",
        steps: [
          { title: "User flows", body: "The core journeys mapped and agreed before interface design starts." },
          { title: "Interface design", body: "A consistent component system rather than one-off screens." },
          { title: "Application logic", body: "Business rules implemented and tested on the server." },
          { title: "Data layer", body: "A data model designed for the queries the product actually needs." },
          { title: "Quality", body: "Automated tests for critical paths, and manual testing on real devices." },
          { title: "Launch", body: "Deployment, monitoring and a rollback plan." },
        ],
      },
    ],
    faqs: [
      { q: "Should we build a web app or a mobile app first?", a: "For most business products, a responsive web application reaches more users faster and is easier to update. A native mobile app is worth it when you need device features, offline use or frequent daily engagement." },
      { q: "Can a web application work on mobile?", a: "Yes. We design mobile-first, and web applications can be installed to the home screen as progressive web apps where that helps." },
    ],
    related: ["/studio/software-development", "/studio/mobile-app-development", "/studio/saas-development", "/studio/cloud-deployment"],
    cta: { heading: "Plan your web application.", ...project },
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
      "DigitalBurj Studio builds mobile applications for iOS and Android when a product genuinely benefits from being on the phone: frequent daily use, device features such as camera or location, notifications, or offline work. Where a responsive web app would serve users equally well, we will recommend that instead.",
    blocks: [
      {
        type: "compare",
        heading: "Native, cross-platform or web?",
        columns: ["", "When it fits", "Trade-off"],
        rows: [
          ["Responsive web app", "Most business tools and portals", "Limited device integration"],
          ["Cross-platform app", "One team serving iOS and Android with shared code", "Some platform-specific work remains"],
          ["Native apps", "Performance-critical or deeply device-integrated products", "Two codebases to maintain"],
        ],
      },
      {
        type: "list",
        heading: "What we handle",
        items: ["App architecture and shared backend APIs", "Authentication and secure storage on device", "Push notifications", "Offline behaviour and synchronisation", "App store submission and release management", "Crash reporting and analytics", "Accessibility on iOS and Android"],
      },
    ],
    faqs: [
      { q: "How are app updates delivered?", a: "Through the app stores, which involves review times. We plan releases accordingly and keep as much logic as possible on the server so that fixes do not always need a new app version." },
      { q: "Do you build the backend as well?", a: "Yes. The mobile app, web app and any integrations usually share one backend and API, which we design together." },
    ],
    related: ["/studio/web-app-development", "/studio/api-development", "/studio/mvp-development", "/academy/software-development"],
    cta: { heading: "Considering a mobile app?", body: "We will help you decide whether mobile is the right first platform.", ...project },
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
      "SaaS (software as a service) is software that many customer organisations use through a subscription, from one shared platform. Building SaaS adds requirements that single-client software does not have: separating each customer's data, organisation and user management, roles and permissions, billing, and admin tools for your own team.",
    blocks: [
      {
        type: "list",
        heading: "What SaaS development covers",
        columns: 3,
        items: ["SaaS planning and pricing assumptions", "Multi-user and multi-organisation architecture", "Organisations and team management", "Roles and permissions", "Billing and subscription models", "Admin and support tools", "Product analytics", "Security and data separation", "Testing and release process", "Infrastructure and backups", "Scale considerations", "Customer onboarding flows"],
      },
      {
        type: "callout",
        heading: "Build for the scale you have evidence for",
        body: "Most SaaS products do not need microservices or complex infrastructure at launch. A well-structured single application with a sound data model is easier to change while you learn what customers want. We design so that scaling later is possible, without paying for it upfront.",
      },
      {
        type: "flow",
        heading: "From idea to paying customers",
        steps: ["Validate the problem", "Define the smallest product", "Build the core workflow", "Onboard early customers", "Add billing", "Measure retention", "Expand"],
      },
    ],
    faqs: [
      { q: "How do you keep each customer's data separate?", a: "Every record is tied to an organisation, and every query is scoped to the signed-in user's organisation on the server. We test that users cannot access other organisations' data." },
      { q: "When should billing be added?", a: "Often after the first customers are using the product and pricing has been tested in conversation. Early customers can be invoiced manually while the product finds its shape." },
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
      "An MVP (minimum viable product) is the smallest version of a product that lets real users complete the core action, so you can test your most important assumption with evidence. It is not a cheap or unfinished version of the full product. A good MVP is small in scope but works properly for what it does.",
    blocks: [
      {
        type: "steps",
        heading: "How we scope an MVP",
        steps: [
          { title: "Problem", body: "State the problem in the user's words, and what they do about it today." },
          { title: "Target user", body: "Pick one specific group to serve first." },
          { title: "Core action", body: "The one thing a user must be able to do for the product to have value." },
          { title: "Critical assumptions", body: "What must be true for this to work, ranked by risk." },
          { title: "What to build", body: "Only what is needed to deliver the core action and test the assumptions." },
          { title: "What not to build", body: "An explicit list of features deliberately left out." },
          { title: "Measurement", body: "The signals that will tell you whether the assumption held." },
          { title: "Launch", body: "Real users, real use, with support in place." },
          { title: "Next decision", body: "Build further, reshape or stop, based on what was learned." },
        ],
      },
      {
        type: "compare",
        heading: "MVP vs prototype",
        columns: ["", "Prototype", "MVP"],
        rows: [
          ["Purpose", "Explore and communicate an idea", "Test an assumption with real use"],
          ["Users", "Stakeholders, test participants", "Real target users"],
          ["Works for real?", "Often simulated", "Yes, for the core action"],
          ["Typical output", "Feedback on concept and usability", "Behavioural evidence"],
        ],
      },
    ],
    faqs: [
      { q: "How long does it take to build an MVP?", a: "It depends on the core action and the integrations it needs. We give an estimate after scoping, and we reduce scope rather than extend timelines when trade-offs are needed." },
      { q: "Do you build 'cheap apps'?", a: "No. We build small products properly. Cutting corners on security, data integrity or reliability makes an MVP harder to learn from and more expensive to continue." },
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
      "Enterprise software supports the internal operations of larger organisations: workflow and case management, approvals, records, scheduling and reporting across departments. Its defining requirements are fine-grained access control, audit history, integration with existing systems and reliability, because many people depend on it every day.",
    blocks: [
      {
        type: "list",
        heading: "Requirements we design for",
        items: ["Single sign-on and role-based access", "Audit history of who changed what and when", "Approval chains and delegation", "Integration with ERP, HR, finance and identity systems", "Data retention and export", "Availability, backups and disaster recovery", "Performance with large data volumes", "Administration without developer help"],
      },
      {
        type: "text",
        heading: "Replacing spreadsheets and email chains",
        body: [
          "Many enterprise processes run on shared spreadsheets and email. That works until it does not: version conflicts, no audit trail, and no way to see where work is stuck. A focused internal application can replace one of these processes at a time, starting with the one causing most risk.",
        ],
      },
    ],
    faqs: [
      { q: "Can you integrate with our identity provider?", a: "Yes. We support standard single sign-on protocols so staff use their existing company accounts." },
      { q: "How do you handle sensitive internal data?", a: "With least-privilege access, audit logging, encryption in transit and at rest, and data handling agreed with your security team." },
    ],
    related: ["/solutions/enterprise-systems", "/studio/system-integration", "/business-ai/enterprise-ai", "/company/security", "/company/engineering-principles"],
    cta: { heading: "Replace the process that causes most risk.", ...project },
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
      "AI product development is building software in which AI performs part of the product's job, such as answering questions from a knowledge base, classifying requests, reading documents or recommending next steps. The engineering challenge is making AI behaviour reliable enough for the use case: evaluating quality, handling failure, protecting data and controlling cost.",
    blocks: [
      {
        type: "list",
        heading: "AI capabilities we build",
        columns: 3,
        items: ["LLM-powered features", "AI assistants over your knowledge", "Classification and routing", "Document intelligence", "Semantic search", "Recommendations", "Automation with approvals", "Human-in-the-loop review", "Evaluation pipelines", "Monitoring and feedback", "Cost controls", "Privacy controls"],
      },
      {
        type: "steps",
        heading: "How we make AI features dependable",
        steps: [
          { title: "Define success", body: "Write down what a good output looks like, with real examples." },
          { title: "Build an evaluation set", body: "Collect test cases, including hard and adversarial ones, before building." },
          { title: "Constrain the model", body: "Limit inputs, tools and outputs to what the feature needs." },
          { title: "Design for failure", body: "Decide what users see when the AI is unsure or wrong." },
          { title: "Monitor in production", body: "Track quality, latency and cost, and capture user feedback." },
          { title: "Re-evaluate on change", body: "Rerun evaluations whenever prompts, models or data change." },
        ],
      },
    ],
    faqs: [
      { q: "Which AI models do you use?", a: "We choose models per feature based on quality, latency, cost and data-handling requirements, and we design so that the model can be changed later." },
      { q: "How do you stop AI from making things up?", a: "You cannot eliminate it entirely. We reduce it by grounding answers in your data, constraining outputs, showing sources, evaluating systematically, and routing low-confidence cases to people." },
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
      "An API (application programming interface) is a defined way for software systems to exchange data and trigger actions. A good API is predictable, documented, secure and versioned, so that the apps, partners and integrations that depend on it keep working as it evolves.",
    blocks: [
      {
        type: "list",
        heading: "What we include",
        items: ["Resource and endpoint design", "Authentication and scoped access keys", "Input validation and clear error responses", "Rate limiting", "Versioning and deprecation policy", "Webhooks for event notifications", "Reference documentation and examples", "Automated contract tests", "Monitoring and usage analytics"],
      },
      {
        type: "text",
        heading: "Designing for the people who integrate",
        body: [
          "An API is a product for developers. We write documentation with working examples, return errors that explain what to fix, and avoid breaking changes without notice. That reduces integration time and support requests.",
        ],
      },
    ],
    faqs: [
      { q: "REST or GraphQL?", a: "REST suits most integrations and is widely understood. GraphQL can help when many clients need different shapes of the same data. We choose based on who will consume the API." },
      { q: "Can you document an existing API?", a: "Yes. We can review, document and add tests to an existing API before extending it." },
    ],
    related: ["/studio/system-integration", "/business-ai/business-systems", "/studio/software-development", "/resources/glossary"],
    cta: { heading: "Need an API your partners can rely on?", ...project },
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
      "System integration connects separate software systems so that data entered in one is available in the others, and events in one trigger actions elsewhere. Reliable integrations handle failure explicitly: retries, duplicate protection, alerts and a clear record of what was synchronised.",
    blocks: [
      {
        type: "list",
        heading: "Common integrations",
        items: ["CRM with website, email and messaging", "ERP or accounting with sales and operations", "Payment providers with order systems", "Document storage with workflow tools", "Identity providers with internal apps", "Data sources with reporting"],
      },
      {
        type: "steps",
        heading: "What makes an integration reliable",
        steps: [
          { title: "Clear ownership", body: "Each piece of data has one system of record." },
          { title: "Idempotency", body: "Repeated messages do not create duplicate records." },
          { title: "Retries and queues", body: "Temporary failures are retried safely." },
          { title: "Alerts", body: "Persistent failures notify a person." },
          { title: "Reconciliation", body: "Regular checks confirm that systems agree." },
        ],
      },
    ],
    faqs: [
      { q: "Should we use an integration platform or custom code?", a: "Integration platforms are quick for simple, low-volume connections. Custom integrations are better for high volume, complex logic or strict reliability needs. Many businesses use both." },
      { q: "What if a system has no API?", a: "Options include file-based exchange, database-level integration with care, or replacing the system. We assess risk before recommending an approach." },
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
      "Product validation is the work of testing whether a product idea addresses a real problem, for a specific group of people, better than the alternatives they already use, before paying to build it. It ends in a clear decision: build, reshape or stop. Stopping early is a successful outcome when the evidence says so.",
    keyPoints: [
      "Most failed products were built well but were not needed.",
      "Validation is cheaper than development, and faster.",
      "A 'stop' decision saves the most money of all.",
    ],
    blocks: [
      {
        type: "steps",
        heading: "The DigitalBurj validation process",
        steps: [
          { title: "Problem validation", body: "Confirm that the problem exists, how often it occurs and what it costs the people who have it." },
          { title: "Alternative analysis", body: "Map what people use today, including spreadsheets, manual work and competitors." },
          { title: "Demand signals", body: "Look for evidence of willingness to switch or pay: pre-orders, pilots, letters of intent, active search." },
          { title: "User validation", body: "Test the proposed solution with real target users through interviews and prototypes." },
          { title: "Smallest buildable version", body: "Define the minimum product that delivers the core action." },
          { title: "No-build list", body: "Write down everything that will not be built in the first version, and why." },
          { title: "Measurement plan", body: "Agree which signals after launch will show success or failure." },
          { title: "Decision", body: "Build, reshape or stop, with the evidence written down." },
        ],
      },
      {
        type: "callout",
        heading: "Why building immediately is risky",
        body: "Development locks in assumptions about users, workflows and pricing. Changing them after launch costs far more than testing them first. Validation turns assumptions into evidence while change is still cheap.",
      },
    ],
    faqs: [
      { q: "What do we receive at the end of validation?", a: "A written summary of evidence gathered, the decision recommended (build, reshape or stop), and if the decision is to build, a scoped first version with a no-build list and measurement plan." },
      { q: "Can validation be done for an internal tool?", a: "Yes. The users are your staff, and the questions are the same: is the problem real, what do people use today, and will they adopt the new tool?" },
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
      "Software modernization updates an existing application so it is easier to maintain, more secure and able to support new needs, without interrupting the business that depends on it. It is usually done incrementally: stabilise first, then replace or improve parts of the system one at a time. A full rebuild is only one option, and often not the best one.",
    blocks: [
      {
        type: "compare",
        heading: "Modernize or rebuild?",
        columns: ["", "Incremental modernization", "Full rebuild"],
        rows: [
          ["Risk", "Lower: the system keeps running", "Higher: all behaviour must be re-created"],
          ["Time to first improvement", "Weeks", "Months"],
          ["Best when", "Core logic is sound but hard to change", "Technology is unsupported or the model no longer fits"],
          ["Hidden cost", "Temporary complexity during migration", "Rediscovering undocumented rules"],
        ],
      },
      {
        type: "flow",
        heading: "Modernization sequence",
        steps: ["Assess", "Add monitoring", "Add tests around critical paths", "Fix security risks", "Improve or replace components", "Migrate data", "Retire old parts"],
      },
    ],
    faqs: [
      { q: "How do you understand a system with no documentation?", a: "By reading the code, observing production behaviour, interviewing users and writing tests that capture current behaviour before changing it." },
      { q: "Can we modernise while adding features?", a: "Yes, with planning. New features are often a good place to introduce the new architecture." },
    ],
    related: ["/studio/cloud-deployment", "/studio/software-development", "/company/engineering-principles", "/insights/what-makes-software-production-ready"],
    cta: { heading: "Assess your existing system.", ...project },
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
      "Cloud deployment is the process of running software on managed infrastructure so that it is available, secure and recoverable. It covers automated build and release pipelines, environments for testing, monitoring and alerts, backups, and a plan for recovering from failure. The right setup depends on the product's scale and risk, not on trends.",
    blocks: [
      {
        type: "list",
        heading: "What we set up",
        items: ["Automated build, test and deployment pipelines", "Separate staging and production environments", "Secrets management", "Monitoring, logging and alerting", "Automated backups with tested restores", "Content delivery network and caching", "Access control for infrastructure", "Cost monitoring"],
      },
      {
        type: "callout",
        heading: "A backup is only real once it has been restored",
        body: "We test recovery procedures, not just backup schedules, and document how long recovery takes.",
      },
    ],
    faqs: [
      { q: "Which cloud provider do you use?", a: "We work with major cloud providers and managed platforms, and choose based on your requirements, existing contracts and team skills." },
      { q: "Do you manage infrastructure after launch?", a: "We can, under an agreed support arrangement, or hand over to your team with documentation." },
    ],
    related: ["/studio/software-modernization", "/company/security", "/company/engineering-principles", "/studio/saas-development"],
    cta: { heading: "Deploy with confidence.", ...project },
  },
];
