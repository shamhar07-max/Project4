import type { ContentPage } from "./types";

const eyebrow = "DigitalBurj Business AI";
const consult = { label: "Discuss Your Business", href: "/get-started/business" };

export const businessAiPages: ContentPage[] = [
  {
    slug: "ai-automation",
    label: "AI Automation",
    eyebrow,
    h1: "AI Automation for Business",
    seoTitle: "AI Automation for Business",
    description:
      "How DigitalBurj applies AI automation to real operational work: suitable use cases, example workflows, integrations, human review and how results are measured.",
    answer:
      "AI automation means software doing steps a person used to do, like reading an email, working out what it's about, and putting the details into your CRM. Plain rules handle the predictable parts. The AI model is only there for the messy input: free-text emails, scanned documents, WhatsApp messages.",
    blocks: [
      {
        type: "flow",
        heading: "Example: handling a new enquiry",
        steps: ["Enquiry arrives", "AI pulls out the details", "CRM record created", "Owner assigned", "Draft reply prepared", "A person approves it"],
        caption: "The model reads and sorts. Rules do the assigning and scheduling. Nothing goes to a customer without a person checking it.",
      },
      {
        type: "callout",
        heading: "When we'd tell you not to use it",
        body: "Decisions with legal, financial or safety consequences. Processes nobody has agreed on yet. Anything with too little history to test against. A clearer process or a simple rule usually does better in those cases.",
      },
    ],
    faqs: [
      { q: "How is AI automation different from regular automation?", a: "Regular automation follows fixed rules: if the form says X, do Y. AI automation can also read unstructured things like the intent of an email. Most working systems use both." },
      { q: "Will it work with our CRM?", a: "If the CRM has an API or a supported integration, usually yes. We check access and permissions before proposing anything." },
      { q: "How do you measure the result?", a: "We record the starting numbers first (response time, hours spent, missed requests) and compare after launch." },
    ],
    related: ["/business-ai/workflow-automation", "/business-ai/ai-agents", "/solutions/ai-automation", "/industries/real-estate", "/insights/when-should-a-company-automate-a-workflow", "/resources/checklists/business-automation-readiness"],
    cta: { heading: "Which of your processes are worth automating?", body: "Tell us where work gets stuck. We'll look at the process before talking about tools.", ...consult },
  },
  {
    slug: "ai-agents",
    label: "AI Agents",
    eyebrow,
    h1: "AI Agents for Business",
    seoTitle: "AI Agents for Business Operations",
    description:
      "What an AI agent is, how it differs from a chatbot, and how DigitalBurj designs bounded, logged and human-approved agents for real business tasks.",
    answer:
      "An AI agent is software that uses a language model to decide which steps to take, and can act in your systems: look up a CRM record, search documents, draft a message. A chatbot only replies. Because an agent can change things, what it's allowed to touch has to be decided carefully.",
    blocks: [
      {
        type: "compare",
        heading: "AI agent vs chatbot",
        columns: ["", "Chatbot", "AI agent"],
        rows: [
          ["What it does", "Answers in a conversation", "Takes steps to finish a task"],
          ["System access", "Little or none", "Tools you give it (CRM, email, files)"],
          ["If it goes wrong", "A bad answer", "A wrong change in a real system"],
          ["Controls needed", "Content guidelines", "Permissions, approvals, logs, limits"],
        ],
      },
      {
        type: "list",
        heading: "What we pin down before building one",
        items: [
          "The one job it's responsible for",
          "What data it can read, and what it must never see",
          "Which actions always need a person to approve",
          "What it does when it's unsure or a tool fails",
          "A monthly cost limit",
        ],
      },
    ],
    faqs: [
      { q: "What are agents actually good at today?", a: "Narrow jobs: sorting incoming requests, drafting replies from known information, summarising a case history, filling records from documents." },
      { q: "Can an agent message customers by itself?", a: "Technically, yes. We recommend a person approves customer messages until the agent has a track record on real cases." },
      { q: "How do you stop it doing something harmful?", a: "By limiting what it can do in the first place: narrow permissions, a fixed list of allowed actions, approval steps and full logs." },
    ],
    related: ["/business-ai/ai-automation", "/business-ai/customer-service-automation", "/company/responsible-ai", "/insights/ai-agent-vs-chatbot", "/resources/glossary", "/studio/ai-product-development"],
    cta: { heading: "Got a task you think an agent could do?", body: "We'll tell you honestly whether an agent is right, or whether a simpler automation would be safer and cheaper.", ...consult },
  },
  {
    slug: "workflow-automation",
    label: "Workflow Automation",
    eyebrow,
    h1: "Workflow Automation",
    seoTitle: "Workflow Automation Services",
    description:
      "Workflow automation moves work between people and systems without manual chasing. How DigitalBurj designs triggers, rules, approvals and exceptions.",
    answer:
      "Workflow automation moves a piece of work through its steps without someone chasing it. Something triggers it (a form, an email, a status change), rules pick the path, and the system updates records or pings the right person. Approvals stay where they're needed.",
    blocks: [
      {
        type: "flow",
        heading: "Example: a new enquiry",
        steps: ["New enquiry", "Checked", "Sorted by type", "Assigned", "Owner notified", "Escalated if unanswered"],
        caption: "If nobody replies within the agreed time, it escalates. Nothing gets missed quietly.",
      },
      {
        type: "callout",
        heading: "Automate a messy process and you get a faster mess",
        body: "If nobody owns the process or it changes every week, we sort that out first.",
      },
    ],
    faqs: [
      { q: "Do we need new tools?", a: "Usually not. Most of the work is connecting the tools you already pay for." },
      { q: "What happens when a step fails?", a: "It retries where that's safe, tells an owner, and shows up in a queue. Failures are never silent." },
    ],
    related: ["/business-ai/business-process-automation", "/business-ai/crm-automation", "/solutions/workflow-automation", "/studio/system-integration", "/insights/when-should-a-company-automate-a-workflow"],
    cta: { heading: "Map one workflow with us.", body: "Bring the process that involves the most chasing. We'll show where automation helps and where it doesn't.", ...consult },
  },
  {
    slug: "business-process-automation",
    label: "Business Process Automation",
    eyebrow,
    h1: "Business Process Automation",
    seoTitle: "Business Process Automation",
    description:
      "Business process automation uses software to run repeatable operational steps end to end. Learn how DigitalBurj redesigns processes before automating them.",
    answer:
      "Business process automation covers a whole process, like lead-to-customer or order-to-payment, not just one task. Done after the process has been simplified, it cuts waiting time and errors. Done before, it locks in the problems you already have.",
    blocks: [
      {
        type: "flow",
        heading: "The order we work in",
        steps: ["Observe", "Measure", "Simplify", "Automate", "Measure again"],
      },
      {
        type: "list",
        heading: "What we usually find",
        items: ["Steps that only exist because two systems don't talk", "The same data typed in twice", "Approvals that add a day but catch nothing", "Work sitting in someone's personal inbox"],
      },
    ],
    faqs: [
      { q: "Which process should we start with?", a: "The one with high volume, a real cost when it's slow, and low risk if something goes wrong." },
      { q: "What shouldn't be automated?", a: "Processes that are still changing, happen rarely, or rely heavily on judgement." },
    ],
    related: ["/business-ai/workflow-automation", "/business-ai/digital-transformation", "/solutions/business-transformation", "/resources/checklists/business-automation-readiness", "/insights/what-is-business-ai"],
    cta: { heading: "Start with a process review.", ...consult },
  },
  {
    slug: "crm-automation",
    label: "CRM Automation",
    eyebrow,
    h1: "CRM Automation",
    seoTitle: "CRM Automation Services",
    description:
      "Automate lead capture, assignment, follow-up and reporting in your CRM. DigitalBurj designs CRM automation that keeps records complete and nothing forgotten.",
    answer:
      "CRM automation keeps your CRM up to date without anyone typing: leads come in from every channel, get an owner, get a follow-up date, and show up in reports. The main win is simple. Fewer enquiries get forgotten.",
    blocks: [
      {
        type: "flow",
        heading: "From enquiry to first contact",
        steps: ["Form or message arrives", "Matched to existing contact", "Source recorded", "Owner assigned", "Reminder set", "Alert if overdue"],
      },
      {
        type: "text",
        heading: "Where AI fits",
        body: [
          "Rules do most of the work. AI helps when information arrives as free text: summarising a long email thread, or picking out budget and timing from a message. It suggests. It doesn't overwrite records or contact customers on its own.",
        ],
      },
    ],
    faqs: [
      { q: "Which CRMs?", a: "Any with a documented API. Some features depend on your subscription plan, so we check that early." },
      { q: "Will it fix our messy data?", a: "It stops new mess at the point of entry. Old data usually needs a one-off clean-up, which we quote separately." },
    ],
    related: ["/business-ai/sales-automation", "/business-ai/ai-automation", "/business-ai/customer-service-automation", "/business-ai/business-systems", "/solutions/crm", "/industries/real-estate"],
    cta: { heading: "Stop losing enquiries between channels.", ...consult },
  },
  {
    slug: "sales-automation",
    label: "Sales Automation",
    eyebrow,
    h1: "Sales Automation",
    seoTitle: "Sales Automation Services",
    description:
      "Sales automation removes admin from selling: routing leads, preparing quotes, scheduling follow-ups and reporting. How DigitalBurj approaches it.",
    answer:
      "Sales automation takes the admin out of selling: routing new leads fast, filling quotes from templates, scheduling follow-ups and keeping the pipeline current. Your salespeople still have the conversations. They just have them sooner.",
    blocks: [
      {
        type: "cards",
        heading: "Where sales time goes",
        items: [
          { title: "Slow first reply", body: "Leads sit in a shared inbox. Routing and alerts close the gap." },
          { title: "Copy-paste quotes", body: "Old proposals edited by hand. Templates filled from the CRM cut errors." },
          { title: "Forgotten follow-ups", body: "Deals stall because nobody set a next step. The system does it." },
        ],
      },
      {
        type: "callout",
        heading: "We don't build spam",
        body: "Automated messages only go to people who've contacted you, and they follow consent and platform rules.",
      },
    ],
    faqs: [
      { q: "Can AI write our sales emails?", a: "It can draft them for a salesperson to edit. We avoid fully automated personal outreach because mistakes land in front of customers." },
    ],
    related: ["/business-ai/crm-automation", "/business-ai/workflow-automation", "/business-ai/ai-agents", "/solutions/crm", "/industries/professional-services"],
    cta: { heading: "Give your sales team their selling time back.", ...consult },
  },
  {
    slug: "customer-service-automation",
    label: "Customer Service Automation",
    eyebrow,
    h1: "Customer Service Automation",
    seoTitle: "Customer Service Automation",
    description:
      "Faster, more consistent customer service: request routing, status answers, draft replies and escalation, with people kept in control.",
    answer:
      "Customer service automation answers the simple questions (\"where's my order?\") straight from your systems, drafts replies for the rest, and hands anything sensitive to a person with the full history attached. Customers wait less. Staff stop answering the same question forty times a day.",
    blocks: [
      {
        type: "steps",
        heading: "Three levels",
        steps: [
          { title: "Route", body: "Every request goes to the right team with its history. Nothing sits unassigned." },
          { title: "Assist", body: "AI drafts a reply from your help content. A person checks it and sends it." },
          { title: "Resolve", body: "Clear-cut questions like booking status are answered automatically." },
        ],
      },
      {
        type: "list",
        heading: "Always handed to a person",
        items: ["The customer asks for a human", "Complaints, refunds or anything legal", "Low-confidence answers", "Sensitive personal information"],
      },
    ],
    faqs: [
      { q: "Will customers know it's automated?", a: "They should. We label automated replies and always offer a way to reach a person." },
      { q: "Does it work across WhatsApp, email and chat?", a: "Yes. All channels feed one queue, so history and reporting stay in one place." },
    ],
    related: ["/business-ai/ai-agents", "/business-ai/crm-automation", "/business-ai/ai-automation", "/company/responsible-ai", "/industries/healthcare"],
    cta: { heading: "Reply faster without sounding like a robot.", ...consult },
  },
  {
    slug: "document-automation",
    label: "Document Automation",
    eyebrow,
    h1: "Document Automation",
    seoTitle: "Document Automation & Intelligent Document Processing",
    description:
      "Automate document intake, classification, extraction, validation, routing and archiving. DigitalBurj builds it with checks and human review.",
    answer:
      "Document automation handles the paperwork around your paperwork: it receives invoices, delivery notes or forms, works out what each one is, pulls out the key fields, checks them, sends them to the right place and files them so you can find them later.",
    blocks: [
      {
        type: "flow",
        heading: "The pipeline",
        steps: ["Received", "Identified", "Fields extracted", "Checked", "Routed", "Filed"],
      },
      {
        type: "callout",
        heading: "Reading a document isn't verifying it",
        body: "Extracting data doesn't prove a document is genuine or legally valid. Where that matters, a qualified person or the issuer still has to confirm it. We make their review faster.",
      },
    ],
    faqs: [
      { q: "Can it read scans?", a: "Printed scans, generally yes. Handwriting and poor scans need more human checking. We test on your real documents first." },
      { q: "How do you handle mistakes?", a: "Low-confidence fields and totals that don't add up go to a person. We keep sampling accuracy after launch because formats change." },
    ],
    related: ["/solutions/document-automation", "/business-ai/workflow-automation", "/industries/logistics", "/industries/financial-services", "/portfolio/attesora", "/company/security"],
    cta: { heading: "Spending hours on paperwork?", body: "Tell us which documents you handle and where they go. We'll show what can be automated safely.", ...consult },
  },
  {
    slug: "data-and-reporting",
    label: "Data & Reporting",
    eyebrow,
    h1: "Data & Reporting Automation",
    seoTitle: "Business Data & Reporting Automation",
    description:
      "Replace manual spreadsheet reporting with consistent, automated operational reports. DigitalBurj connects your systems and defines metrics everyone trusts.",
    answer:
      "Reporting automation pulls numbers from the systems you already use, calculates them the same way every time, and sends the report on schedule. No more Monday-morning export-and-paste, and no more three versions of the same figure.",
    blocks: [
      {
        type: "steps",
        heading: "How we set it up",
        steps: [
          { title: "Start with the decision", body: "What does someone need to decide each week? That drives the report." },
          { title: "Write down the definitions", body: "Exactly how each number is calculated, so everyone means the same thing." },
          { title: "Connect and check", body: "Pull from CRM, finance and spreadsheets, and flag missing or odd values." },
        ],
      },
    ],
    faqs: [
      { q: "Do we need a data warehouse?", a: "Not at first, usually. Scheduled reports straight from your systems are often enough. A warehouse makes sense once you have many sources." },
    ],
    related: ["/solutions/data-analytics", "/business-ai/business-systems", "/business-ai/enterprise-ai", "/academy/data"],
    cta: { heading: "Get one version of the numbers.", ...consult },
  },
  {
    slug: "enterprise-ai",
    label: "Enterprise AI",
    eyebrow,
    h1: "Enterprise AI",
    seoTitle: "Enterprise AI Adoption & Governance",
    description:
      "Adopt AI across a larger organisation with governance, security, evaluation and measurable use cases. How DigitalBurj helps enterprises.",
    answer:
      "For a large organisation, the model is the easy part. The hard parts are picking use cases that pay off, connecting AI to internal data without leaking it, agreeing who may use what, testing quality and keeping costs predictable.",
    blocks: [
      {
        type: "flow",
        heading: "How we'd stage it",
        steps: ["Pick 2–3 pilots", "Set usage rules", "Run the pilots", "Measure", "Scale what worked", "Drop what didn't"],
      },
    ],
    faqs: [
      { q: "Where should we start?", a: "Two or three use cases with a clear owner, enough volume to matter and manageable risk. You should see results in weeks." },
      { q: "How do you keep company data safe?", a: "Each AI component only sees the data its job needs, providers are checked against your data rules, and usage is logged." },
    ],
    related: ["/company/responsible-ai", "/company/security", "/business-ai/digital-transformation", "/business-ai/ai-agents", "/resources/checklists/ai-workflow-assessment"],
    cta: { heading: "Plan AI adoption you can actually govern.", ...consult },
  },
  {
    slug: "business-systems",
    label: "Business Systems",
    eyebrow,
    h1: "Business Systems & Integration",
    seoTitle: "Business Systems & Integration",
    description:
      "Connect CRM, finance, operations and communication tools so data is entered once. DigitalBurj designs and integrates business systems.",
    answer:
      "Most day-to-day friction comes from tools that don't share information: the CRM, accounting, inventory, scheduling. We pick, set up and connect them so each piece of data is typed once and shows up wherever it's needed.",
    blocks: [
      {
        type: "list",
        heading: "Sound familiar?",
        items: ["The same customer exists in three places", "A spreadsheet is the real system", "Nobody's sure which number is right", "New staff spend weeks learning workarounds"],
      },
    ],
    faqs: [
      { q: "Buy or build?", a: "Buy when a product fits most of your process. Build when it's what sets you apart, or nothing fits. Often it's both, connected properly." },
    ],
    related: ["/studio/system-integration", "/studio/api-development", "/solutions/enterprise-systems", "/business-ai/data-and-reporting", "/insights/crm-vs-erp"],
    cta: { heading: "Make your systems talk to each other.", ...consult },
  },
  {
    slug: "digital-transformation",
    label: "Digital Transformation",
    eyebrow,
    h1: "Digital Transformation",
    seoTitle: "Digital Transformation for Operations",
    description:
      "Digital transformation that starts with how work is done: process redesign, systems, automation and team capability, changed together and measured.",
    answer:
      "Buying software doesn't transform anything. What changes a business is a different way of working: fewer steps, systems that fit, automation where it pays, and staff trained to run it. We change those together, in stages you can measure.",
    blocks: [
      {
        type: "text",
        heading: "Why training is part of it",
        body: [
          "Plenty of projects go live and then quietly fail because the team was never prepared. We also run an Academy, so training can be built around the actual process and tools being introduced.",
        ],
      },
    ],
    faqs: [
      { q: "How long does it take?", a: "We split it into stages that each show a measurable change within a few months, instead of one multi-year programme." },
    ],
    related: ["/solutions/business-transformation", "/business-ai/business-process-automation", "/business-ai/enterprise-ai", "/company/how-we-work", "/resources/templates/digital-transformation-questionnaire"],
    cta: { heading: "Change how the work actually gets done.", ...consult },
  },
];
