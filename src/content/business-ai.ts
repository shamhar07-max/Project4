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
      "AI automation uses software and AI models together to carry out steps in a business process that previously needed a person, such as reading an incoming request, classifying it, extracting details and routing it. Conventional automation handles fixed rules. AI adds the ability to work with unstructured input like emails, documents and messages, within limits you define.",
    keyPoints: [
      "Start from a measured operational problem, not from a model.",
      "Use AI only for the steps that need interpretation; keep the rest rule-based.",
      "Keep a person in the loop wherever judgment, risk or privacy is involved.",
    ],
    blocks: [
      {
        type: "list",
        heading: "Problems AI automation is suited to",
        intro: "The strongest candidates are high-volume, repeatable tasks that currently depend on someone reading and re-typing information.",
        items: [
          "Enquiries arriving by email, web form and WhatsApp that must be read and sorted by hand",
          "Details copied from documents into a CRM, ERP or spreadsheet",
          "Requests that wait because nobody owns the first response",
          "Status questions that staff answer by looking up the same systems each time",
          "Reports assembled manually from several tools every week",
          "Approvals that stall because the right person is not notified",
        ],
      },
      {
        type: "flow",
        heading: "Example: an enquiry-handling workflow",
        intro: "A typical first automation connects the inbox to the CRM and removes the manual reading, sorting and assignment.",
        steps: ["Enquiry received", "AI extracts details", "Request classified", "CRM record created", "Owner assigned", "Draft reply prepared", "Person approves", "Follow-up scheduled"],
        caption: "The model reads and classifies; rules handle assignment and scheduling; a person approves anything sent to a customer.",
      },
      {
        type: "list",
        heading: "Systems it commonly connects to",
        items: ["Email and shared inboxes", "Website and landing-page forms", "WhatsApp Business and messaging channels", "CRM platforms", "Spreadsheets and databases", "Document storage", "Accounting and ERP systems", "Internal notification tools"],
      },
      {
        type: "steps",
        heading: "How DigitalBurj implements AI automation",
        steps: [
          { title: "Observe the current process", body: "We map how the work actually happens today, including the workarounds, and where time or requests are lost." },
          { title: "Establish a baseline", body: "Response time, volume, error rate or hours spent: whatever the problem is, we measure it before changing anything." },
          { title: "Redesign before automating", body: "Some steps should be removed or simplified rather than automated. We fix the process first." },
          { title: "Automate the bounded steps", body: "AI is applied only where interpretation is needed. Everything else uses predictable rules." },
          { title: "Add review and exceptions", body: "Low-confidence results, sensitive cases and customer-facing messages go to a person." },
          { title: "Measure and adjust", body: "We compare results against the baseline and change what is not working." },
        ],
      },
      {
        type: "callout",
        heading: "Where AI automation should not be used",
        body: "Decisions with legal, financial or safety consequences, situations with too little data to test against, and processes nobody has agreed on yet. In these cases a clearer process or a simple rule usually produces a better result than a model.",
      },
    ],
    faqs: [
      { q: "What is the difference between AI automation and regular automation?", a: "Regular automation follows fixed rules: if a form field says X, do Y. AI automation adds the ability to interpret unstructured input, such as the intent of an email or the fields in a scanned document. Most good systems combine both: AI for interpretation, rules for everything that can be predicted." },
      { q: "Can AI automation work with our existing CRM?", a: "Usually, yes, provided the CRM offers an API or a supported integration. We confirm access, data fields and permissions during the assessment stage before proposing any build." },
      { q: "How is the result measured?", a: "Against a baseline taken before the change. Typical measures are first-response time, time spent per request, share of requests handled without rework, and the number of requests that go unanswered." },
      { q: "Will AI automation replace staff?", a: "The aim is to remove repetitive handling so people spend time on work that needs judgment. The design keeps people responsible for approvals, exceptions and customer relationships." },
    ],
    related: ["/business-ai/workflow-automation", "/business-ai/ai-agents", "/solutions/ai-automation", "/industries/real-estate", "/insights/when-should-a-company-automate-a-workflow", "/resources/checklists/business-automation-readiness"],
    cta: { heading: "Find out which of your processes are worth automating.", body: "Tell us where work is slowing down. We will start by understanding the process, not by recommending a tool.", ...consult },
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
      "An AI agent is software that uses a language model to decide which steps to take toward a defined goal, using tools it has been given access to, such as reading a CRM record, searching documents or drafting a message. Unlike a chatbot, which only replies in conversation, an agent can act. That is why its access, permissions and approvals must be designed carefully.",
    keyPoints: [
      "Agents should have one bounded job, not open-ended autonomy.",
      "Every tool an agent can use is a permission that must be justified.",
      "Actions are logged, and anything consequential waits for human approval.",
    ],
    blocks: [
      {
        type: "compare",
        heading: "AI agent vs chatbot",
        columns: ["", "Chatbot", "AI agent"],
        rows: [
          ["Primary role", "Answers questions in a conversation", "Completes a task by taking steps"],
          ["Access to systems", "Usually read-only or none", "Uses defined tools (CRM, documents, email)"],
          ["Output", "A reply", "A changed record, a draft, a routed request"],
          ["Main risk", "Wrong or unhelpful answer", "Wrong action taken in a real system"],
          ["Required controls", "Content guidelines", "Permissions, approvals, logging, limits"],
        ],
      },
      {
        type: "flow",
        heading: "Example: a lead-qualification agent",
        steps: ["Incoming lead", "Agent reads the enquiry", "Classifies the request", "Checks CRM for history", "Updates CRM", "Drafts response", "Person approves", "Response sent"],
        caption: "The agent prepares; a person decides. Nothing reaches the customer without approval until the agent has a measured track record on that task.",
      },
      {
        type: "list",
        heading: "What we define before an agent is built",
        items: [
          "The single task the agent is responsible for",
          "Data it may read, and data it must never see",
          "Tools it may use, with the narrowest permission that works",
          "Actions that always need human approval",
          "What happens when it is unsure or a tool fails",
          "How every step is logged and reviewed",
          "How quality is evaluated before and after launch",
          "Cost limits on model usage",
        ],
      },
      {
        type: "text",
        heading: "Why we do not sell agents as autonomous employees",
        body: [
          "Language models can be wrong with confidence, can misread instructions and can be manipulated by the content they read. An agent that acts freely across your systems multiplies those risks.",
          "Useful agents are narrow. They do one well-understood job, are tested against real examples, and hand over to a person at clearly defined points. Their scope can widen as evidence accumulates, not before.",
        ],
      },
    ],
    faqs: [
      { q: "What tasks are AI agents good at today?", a: "Bounded tasks that involve reading unstructured information and preparing a next step: triaging requests, drafting replies from known information, summarising case history, filling records from documents and checking data for obvious inconsistencies." },
      { q: "Can an AI agent send messages to customers on its own?", a: "It can be technically possible, but we recommend human approval for customer-facing messages until the agent has been measured on real cases and the business has agreed the level of risk it accepts." },
      { q: "How do you stop an agent from doing something harmful?", a: "By limiting what it can do in the first place: narrow permissions, an allow-list of actions, approval steps for anything consequential, rate and cost limits, and full logs that are reviewed." },
      { q: "Do AI agents work with WhatsApp, email or CRM systems?", a: "Yes, through the official APIs of those systems. Access is scoped to what the specific task requires." },
    ],
    related: ["/business-ai/ai-automation", "/business-ai/customer-service-automation", "/company/responsible-ai", "/insights/ai-agent-vs-chatbot", "/resources/glossary", "/studio/ai-product-development"],
    cta: { heading: "Have a task you think an agent could handle?", body: "We will assess whether an agent is the right tool, or whether a simpler automation would be safer and cheaper.", ...consult },
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
      "Workflow automation is the use of software to move work through a defined sequence of steps automatically: a trigger starts the workflow, conditions decide the path, and actions update systems or notify people. It removes the manual chasing, copying and reminding that slows most operational processes, while keeping approvals where they are needed.",
    blocks: [
      {
        type: "steps",
        heading: "The parts of an automated workflow",
        steps: [
          { title: "Trigger", body: "The event that starts the workflow: a form submission, a new email, a status change, a date." },
          { title: "Conditions", body: "Rules that decide what happens next, such as request type, value, region or priority." },
          { title: "Actions", body: "What the system does: create a record, assign an owner, send a notification, generate a document." },
          { title: "Approvals", body: "Points where a person must confirm before the workflow continues." },
          { title: "Exceptions", body: "What happens when data is missing, a system is unavailable or a deadline passes." },
          { title: "Measurement", body: "Timestamps at each step so you can see where work waits and whether the change helped." },
        ],
      },
      {
        type: "flow",
        heading: "Example: new enquiry workflow",
        steps: ["New enquiry", "Validate", "Classify", "Assign", "Notify owner", "Follow up", "Escalate if unanswered"],
        caption: "An enquiry that is not answered within the agreed time is escalated automatically, so nothing is silently missed.",
      },
      {
        type: "list",
        heading: "Signs a workflow is ready to automate",
        items: [
          "The same steps happen in the same order most of the time",
          "People spend time moving information between tools",
          "Work regularly waits because someone was not told",
          "There is a clear owner for each step",
          "You can describe what 'done' looks like",
          "Volume is high enough that small savings add up",
        ],
      },
      {
        type: "callout",
        heading: "Automating a broken workflow makes it fail faster",
        body: "If the process itself is unclear, has no owner, or changes every week, we fix that first. Automation is the last step, not the first.",
      },
    ],
    faqs: [
      { q: "What is the difference between workflow automation and business process automation?", a: "Workflow automation usually refers to a specific sequence of tasks, such as handling an enquiry. Business process automation covers the wider operational process that several workflows belong to, such as the whole order-to-cash cycle." },
      { q: "Do we need to replace our current tools?", a: "Usually not. Most workflow automation connects the tools you already use. We recommend replacement only when a tool cannot provide the access or reliability the process needs." },
      { q: "What happens when an automated step fails?", a: "Each workflow has defined exception handling: retries where safe, a notification to an owner, and a visible queue of items needing attention. Failures should never be silent." },
    ],
    related: ["/business-ai/business-process-automation", "/business-ai/crm-automation", "/solutions/workflow-automation", "/studio/system-integration", "/insights/when-should-a-company-automate-a-workflow"],
    cta: { heading: "Map one workflow with us.", body: "Bring the process that causes the most chasing. We will map it and show where automation would and would not help.", ...consult },
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
      "Business process automation uses software to execute repeatable steps in an operational process, such as routing enquiries, updating systems, generating notifications or coordinating approvals, across the whole process rather than one task. Done well, it shortens cycle times and reduces errors. Done without redesign, it hard-codes existing inefficiency.",
    blocks: [
      {
        type: "flow",
        heading: "DigitalBurj's approach: fix the process, then automate it",
        steps: ["Observe", "Diagnose", "Measure", "Redesign", "Automate", "Review", "Measure again"],
        caption: "The DigitalBurj Business AI operating model. Automation sits in the middle of the cycle, after the process has been understood and simplified.",
      },
      {
        type: "cards",
        heading: "Processes commonly automated",
        items: [
          { title: "Lead to customer", body: "Capture, qualification, assignment, follow-up and handover to delivery.", href: "/business-ai/sales-automation" },
          { title: "Request to resolution", body: "Customer requests routed, tracked and escalated until they are closed.", href: "/business-ai/customer-service-automation" },
          { title: "Document intake", body: "Documents received, classified, checked, filed and made searchable.", href: "/business-ai/document-automation" },
          { title: "Approvals", body: "Purchase, discount, leave or content approvals routed to the right person with context.", href: "/business-ai/workflow-automation" },
          { title: "Reporting", body: "Operational data collected from several systems into consistent reports.", href: "/business-ai/data-and-reporting" },
          { title: "Onboarding", body: "Customer, supplier or employee onboarding steps coordinated and tracked.", href: "/business-ai/business-systems" },
        ],
      },
      {
        type: "list",
        heading: "What we look for when diagnosing a process",
        items: ["Steps that exist only because two systems do not talk", "Duplicate data entry", "Hand-offs with no clear owner", "Approvals that add delay but little control", "Rework caused by missing information at the start", "Work that waits in personal inboxes"],
      },
    ],
    faqs: [
      { q: "Which business processes can be automated?", a: "Any process with repeatable steps, clear inputs and a defined outcome is a candidate. The better question is which ones should be automated first: we prioritise by volume, cost of delay and risk." },
      { q: "What processes should not be automated?", a: "Processes that are still changing, that happen rarely, that depend heavily on judgment, or where an error would be costly and hard to detect. These often benefit from better structure instead." },
      { q: "What information is needed before automation?", a: "A description of the current process, the systems involved, rough volumes, who owns each step, and what a good outcome looks like. We help gather this during the assessment." },
    ],
    related: ["/business-ai/workflow-automation", "/business-ai/digital-transformation", "/solutions/business-transformation", "/resources/checklists/business-automation-readiness", "/insights/what-is-business-ai"],
    cta: { heading: "Start with a process assessment.", ...consult },
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
      "CRM automation uses rules and integrations to keep a customer relationship management system up to date without manual effort: capturing leads from every channel, assigning owners, scheduling follow-ups, logging activity and producing pipeline reports. Its main value is that fewer enquiries are forgotten and the data can be trusted.",
    blocks: [
      {
        type: "list",
        heading: "What CRM automation covers",
        items: [
          "Lead capture from website forms, email, WhatsApp and ads",
          "Duplicate detection and record matching",
          "Automatic owner assignment by region, product or workload",
          "Follow-up reminders and overdue alerts",
          "Activity logging from email and messaging",
          "Stage changes triggered by real events",
          "Customer history available before every call",
          "Pipeline and conversion reporting",
        ],
      },
      {
        type: "flow",
        heading: "Example: from enquiry to first contact",
        steps: ["Form or message received", "Record matched or created", "Source recorded", "Owner assigned", "Reminder set", "Overdue alert"],
      },
      {
        type: "text",
        heading: "Where AI helps in a CRM",
        body: [
          "Rules handle most CRM automation. AI becomes useful when information arrives unstructured: summarising a long email thread into the record, extracting budget or timeline from a message, or suggesting the next step based on history.",
          "Suggestions are presented to the account owner; they do not overwrite records or contact customers without approval.",
        ],
      },
    ],
    faqs: [
      { q: "Which CRMs can be automated?", a: "Any CRM with a documented API or supported integration platform. During assessment we confirm what your CRM plan allows, since some features depend on the subscription tier." },
      { q: "Can CRM automation fix poor data quality?", a: "It prevents new problems by validating and matching records at entry. Existing data usually needs a one-off clean-up, which we scope separately." },
      { q: "How do we know it is working?", a: "Measure time to first contact, share of leads with an owner, overdue follow-ups and conversion by source, before and after." },
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
      "Sales automation removes administrative work from the sales process: routing new leads quickly, preparing quotes and proposals from templates, scheduling follow-ups, updating the pipeline and reporting results. It does not replace the conversation with the customer. It makes sure that conversation happens sooner and with better information.",
    blocks: [
      {
        type: "cards",
        heading: "Where sales time is usually lost",
        items: [
          { title: "Slow first response", body: "Leads cool while they wait in a shared inbox. Automatic routing and alerts shorten the gap." },
          { title: "Manual quoting", body: "Proposals assembled by copying old documents. Templates filled from CRM data reduce errors." },
          { title: "Forgotten follow-ups", body: "Deals stall because nobody scheduled the next step. The system prompts it." },
          { title: "Pipeline guesswork", body: "Reports built by hand from memory. Stage changes tied to real events make them reliable." },
        ],
      },
      {
        type: "flow",
        heading: "Example: quote preparation",
        steps: ["Opportunity qualified", "Quote generated from template", "Pricing checked by rules", "Manager approval if above limit", "Sent to customer", "Follow-up scheduled"],
      },
      {
        type: "callout",
        heading: "Automation should not make outreach worse",
        body: "We do not build high-volume unsolicited messaging. Automated contact is limited to people who have engaged with the business, and it respects consent and platform rules.",
      },
    ],
    faqs: [
      { q: "Is sales automation the same as CRM automation?", a: "They overlap. CRM automation keeps customer data complete and current. Sales automation focuses on the steps that move a deal forward, such as quoting, approvals and follow-ups, and usually runs on top of the CRM." },
      { q: "Can AI write our sales emails?", a: "AI can draft messages from known information, which the salesperson reviews and edits. We avoid fully automated personalised outreach, because errors are visible to customers and damage trust." },
    ],
    related: ["/business-ai/crm-automation", "/business-ai/workflow-automation", "/business-ai/ai-agents", "/solutions/crm", "/industries/professional-services"],
    cta: { heading: "Give your sales team back their selling time.", ...consult },
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
      "Customer service automation routes, answers or prepares responses to customer requests using rules and AI, so customers wait less and staff handle fewer repetitive questions. The common pattern is to answer simple status questions automatically, prepare drafts for the rest, and escalate anything sensitive or unusual to a person with full context.",
    blocks: [
      {
        type: "steps",
        heading: "Three levels of automation",
        steps: [
          { title: "Route", body: "Every request is classified and sent to the right team with its history attached. No request waits unassigned." },
          { title: "Assist", body: "AI drafts a reply from your knowledge base and the customer record. A person checks and sends it." },
          { title: "Resolve", body: "Well-defined questions, such as order or booking status, are answered automatically from system data." },
        ],
      },
      {
        type: "flow",
        heading: "Example: a status enquiry on WhatsApp",
        steps: ["Customer asks for status", "Identity matched", "Status read from system", "Answer sent", "Unclear case handed to agent"],
      },
      {
        type: "list",
        heading: "Escalation rules we always include",
        items: ["The customer asks for a person", "A complaint, refund or legal matter is detected", "The AI's confidence is low", "Personal or sensitive data is involved", "The same customer has contacted several times", "The answer would require a commitment the system cannot make"],
      },
    ],
    faqs: [
      { q: "Will customers know they are talking to an automated system?", a: "They should. We recommend clearly identifying automated responses and always offering a route to a person." },
      { q: "Can customer service automation work across WhatsApp, email and web chat?", a: "Yes. Requests from each channel can be brought into one queue so that routing, history and reporting are consistent." },
      { q: "What should not be automated in customer service?", a: "Complaints, refunds, cancellations with consequences, and anything involving sensitive personal circumstances. These should reach a person quickly." },
    ],
    related: ["/business-ai/ai-agents", "/business-ai/crm-automation", "/business-ai/ai-automation", "/company/responsible-ai", "/industries/healthcare"],
    cta: { heading: "Answer faster without losing the human touch.", ...consult },
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
      "Document automation handles the work around business documents automatically: receiving them, identifying what they are, extracting key data, checking it, routing the document to the right person or system, and archiving it so it can be found later. AI is used to read varied or scanned documents; validation rules and people confirm the results.",
    blocks: [
      {
        type: "flow",
        heading: "The document automation pipeline",
        steps: ["Intake", "Classification", "Data extraction", "Validation", "Routing", "Approval", "Archiving", "Search", "Reporting"],
      },
      {
        type: "list",
        heading: "Typical documents",
        items: ["Invoices and receipts", "Purchase orders and delivery notes", "Shipping and customs paperwork", "Contracts and agreements (for filing and tracking, not legal review)", "Identity and onboarding documents", "Application forms", "Certificates and compliance records", "Internal reports"],
      },
      {
        type: "callout",
        heading: "Automation is not authoritative verification",
        body: "Extracting data from a document is not the same as verifying that the document is genuine or legally valid. Where authenticity, legal effect or regulatory compliance matters, a qualified person or the issuing authority must confirm it. We design systems that make that review faster, not systems that replace it.",
      },
      {
        type: "text",
        heading: "How accuracy is managed",
        body: [
          "Each extracted field has a confidence level. Fields below an agreed threshold, and documents that fail validation rules such as totals that do not add up, are queued for a person to check.",
          "We measure accuracy on a sample of your real documents before launch, and keep sampling afterwards, because document formats change.",
        ],
      },
    ],
    faqs: [
      { q: "Can document automation read scanned or handwritten documents?", a: "Scanned printed documents generally work well. Handwriting and poor-quality scans are less reliable and usually need more human review. We test on your real documents before committing to an approach." },
      { q: "Where are documents stored?", a: "In storage you control, with access restricted by role. We do not expose private documents through public links." },
      { q: "Does document automation check whether a document is legally valid?", a: "No. It extracts and organises information and can flag inconsistencies. Legal validity and authenticity must be confirmed by an appropriate person or authority." },
    ],
    related: ["/solutions/document-automation", "/business-ai/workflow-automation", "/industries/logistics", "/industries/financial-services", "/portfolio/attesora", "/company/security"],
    cta: { heading: "Spending hours on paperwork?", body: "Send us a description of the documents you handle and where they go. We will show what can be automated safely.", ...consult },
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
      "Data and reporting automation collects operational data from the systems a business already uses, combines it according to agreed definitions, and produces reports or dashboards on a schedule. It replaces the weekly ritual of exporting and pasting spreadsheets, and it gives teams one version of the numbers instead of several.",
    blocks: [
      {
        type: "steps",
        heading: "How we approach reporting",
        steps: [
          { title: "Agree the questions", body: "Start from the decisions people need to make, not from the data that happens to exist." },
          { title: "Define the metrics", body: "Write down exactly how each number is calculated, so everyone means the same thing." },
          { title: "Connect the sources", body: "Pull data from CRM, finance, operations and spreadsheets automatically." },
          { title: "Check the data", body: "Add checks for missing, duplicated or implausible values." },
          { title: "Publish and review", body: "Deliver reports where people already work, and review whether they are used." },
        ],
      },
      {
        type: "list",
        heading: "Common reports",
        items: ["Lead volume, response time and conversion by source", "Operational throughput and backlog", "Service levels and overdue work", "Revenue and collections", "Exception and error reports", "Automation performance against baseline"],
      },
    ],
    faqs: [
      { q: "Do we need a data warehouse?", a: "Not always. Smaller organisations can often start with scheduled reports built directly from their systems. A warehouse becomes worthwhile when data volume, the number of sources or reporting complexity grows." },
      { q: "How is this different from buying a dashboard tool?", a: "A tool displays data. The work is in connecting sources, defining metrics and making the data reliable. We do that work, and use whichever display tool suits you." },
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
      "Enterprise AI is the controlled adoption of AI across a larger organisation: choosing use cases with measurable value, connecting AI to internal data securely, setting rules for acceptable use, evaluating quality and managing cost. The challenge is rarely the model. It is governance, integration with existing systems and changing how teams work.",
    blocks: [
      {
        type: "cards",
        heading: "What enterprise AI adoption involves",
        items: [
          { title: "Use-case portfolio", body: "A prioritised list of AI opportunities, each with an owner, a baseline and a success measure." },
          { title: "Data access", body: "Connecting AI to internal knowledge and systems without exposing data to people who should not see it." },
          { title: "Acceptable-use policy", body: "Clear rules on which tools and data may be used for which purposes." },
          { title: "Evaluation", body: "Test sets and review processes that show whether an AI feature is accurate enough for its job." },
          { title: "Security and privacy", body: "Access control, logging, retention and vendor review for every AI component." },
          { title: "Cost management", body: "Usage monitoring and limits so AI costs stay predictable." },
        ],
      },
      {
        type: "flow",
        heading: "A staged adoption path",
        steps: ["Assess readiness", "Select pilot use cases", "Set governance", "Run controlled pilots", "Measure", "Scale what works", "Retire what does not"],
      },
    ],
    faqs: [
      { q: "Where should an enterprise start with AI?", a: "With two or three use cases that have a clear owner, enough volume to matter, available data and manageable risk. Early results should be measurable within weeks, not quarters." },
      { q: "How do you keep company data safe when using AI?", a: "By controlling which data each AI component can access, using providers and settings that meet your data-handling requirements, logging use, and excluding sensitive categories where the risk is not justified." },
    ],
    related: ["/company/responsible-ai", "/company/security", "/business-ai/digital-transformation", "/business-ai/ai-agents", "/resources/checklists/ai-workflow-assessment"],
    cta: { heading: "Plan AI adoption you can govern.", ...consult },
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
      "Business systems are the software an organisation relies on to run daily operations: CRM, accounting, inventory, scheduling, document storage and communication tools. Most operational friction comes from these systems not sharing information. DigitalBurj selects, configures and connects them so that data is entered once and flows to where it is needed.",
    blocks: [
      {
        type: "list",
        heading: "Symptoms of disconnected systems",
        items: ["The same customer is entered in three places", "Staff check several tools to answer one question", "Spreadsheets act as the real system of record", "Nobody is sure which number is correct", "New staff take weeks to learn workarounds", "Automation is impossible because data is not accessible"],
      },
      {
        type: "steps",
        heading: "Our approach",
        steps: [
          { title: "Inventory", body: "List every system, what it holds and who uses it." },
          { title: "System of record", body: "Decide which system owns each type of data." },
          { title: "Integration design", body: "Define how data moves between systems, how often and in which direction." },
          { title: "Build and test", body: "Implement integrations with error handling and monitoring." },
          { title: "Retire workarounds", body: "Remove the spreadsheets and manual steps the integration replaces." },
        ],
      },
    ],
    faqs: [
      { q: "Should we buy off-the-shelf software or build custom?", a: "Buy when a product fits most of your process and can be configured for the rest. Build when the process is a genuine differentiator or no product fits without heavy compromise. Often the answer is both, connected well." },
      { q: "Who builds the integrations?", a: "DigitalBurj Studio engineers build and test integrations as part of the engagement, using documented APIs." },
    ],
    related: ["/studio/system-integration", "/studio/api-development", "/solutions/enterprise-systems", "/business-ai/data-and-reporting", "/insights/crm-vs-erp"],
    cta: { heading: "Make your systems work together.", ...consult },
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
      "Digital transformation is a sustained change in how an organisation operates, using software, data and automation to make work faster, more reliable and easier to measure. It succeeds when it is anchored to specific operational outcomes and when people are trained to work in the new way. Buying software alone does not transform anything.",
    blocks: [
      {
        type: "cards",
        heading: "Four things that have to change together",
        items: [
          { title: "Process", body: "How work flows, who owns each step, and what is removed.", href: "/business-ai/business-process-automation" },
          { title: "Systems", body: "The tools that hold data and support the process.", href: "/business-ai/business-systems" },
          { title: "Automation", body: "Bounded, measured automation of repeatable steps.", href: "/business-ai/ai-automation" },
          { title: "Capability", body: "People trained to use and improve the new way of working.", href: "/academy" },
        ],
      },
      {
        type: "text",
        heading: "Why DigitalBurj includes capability",
        body: [
          "Transformation projects often fail after launch, when the team that has to run the new system was never prepared for it. Because DigitalBurj also operates an Academy, training can be designed around the actual processes and systems being introduced.",
        ],
      },
      {
        type: "flow",
        heading: "A transformation cycle",
        steps: ["Understand", "Define outcomes", "Redesign", "Build & integrate", "Train", "Deploy", "Measure", "Improve"],
      },
    ],
    faqs: [
      { q: "How long does digital transformation take?", a: "It depends on scope. We break transformation into stages that each deliver a measurable change within a few months, rather than a single multi-year programme." },
      { q: "How is success measured?", a: "Against operational outcomes agreed at the start: cycle time, error rates, response times, cost per transaction or capacity. Each stage has its own baseline." },
    ],
    related: ["/solutions/business-transformation", "/business-ai/business-process-automation", "/business-ai/enterprise-ai", "/company/how-we-work", "/resources/templates/digital-transformation-questionnaire"],
    cta: { heading: "Change how the work is done.", ...consult },
  },
];
