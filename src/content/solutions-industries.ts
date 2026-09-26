import type { ContentPage } from "./types";

const solEyebrow = "Solutions";
const indEyebrow = "Industries";
const consult = { label: "Discuss Your Business", href: "/get-started/business" };

/**
 * Solutions are organised by business problem. They summarise and route to the
 * detailed Business AI and Studio pages rather than duplicating them.
 */
export const solutionPages: ContentPage[] = [
  {
    slug: "ai-automation",
    label: "AI Automation",
    eyebrow: solEyebrow,
    h1: "Solutions for Repetitive, Manual Work",
    seoTitle: "AI Automation Solutions for Manual Work",
    description:
      "Hours spent reading, sorting and re-typing information? See when AI automation helps, which processes suit it, the risks and how DigitalBurj approaches it.",
    answer:
      "When skilled people spend a large part of their day reading messages, copying details between systems and chasing updates, the business is paying for work software could do. AI automation removes that handling for well-defined tasks, while people keep responsibility for decisions and customer relationships.",
    blocks: [
      { type: "list", heading: "Symptoms you may need it", items: ["Enquiries sit unread for hours", "Details are re-typed from emails or documents", "Staff answer the same status questions all day", "Work depends on one person remembering to act", "Growth means hiring just to handle volume"] },
      { type: "list", heading: "Risks to manage", items: ["AI misreading unusual inputs", "Customer-facing mistakes", "Sensitive data exposure", "Automating a process nobody agreed on"] },
      { type: "cards", heading: "How DigitalBurj helps", items: [
        { title: "Business AI: AI Automation", body: "Diagnosis, redesign and bounded automation with human review.", href: "/business-ai/ai-automation" },
        { title: "Business AI: AI Agents", body: "Narrow agents for well-defined tasks, with approvals and logs.", href: "/business-ai/ai-agents" },
        { title: "Studio: AI Product Development", body: "When the automation needs to become a product.", href: "/studio/ai-product-development" },
      ] },
    ],
    related: ["/business-ai/ai-automation", "/resources/checklists/ai-workflow-assessment", "/insights/when-should-a-company-automate-a-workflow"],
    cta: { heading: "Find the work that should not be manual.", ...consult },
  },
  {
    slug: "software-development",
    label: "Software Development",
    eyebrow: solEyebrow,
    h1: "Solutions When Off-the-Shelf Software Does Not Fit",
    seoTitle: "Custom Software Solutions",
    description:
      "When existing products force workarounds, custom software may be justified. How to decide, what to validate first, and how DigitalBurj Studio builds it.",
    answer:
      "If your team relies on workarounds because no product fits the way you operate, or you are building a product for others, custom software may be the right answer. The first step is to confirm the need and define the smallest version worth building, before committing to full development.",
    blocks: [
      { type: "list", heading: "Signs custom software may be justified", items: ["Critical processes run on spreadsheets", "Several tools are stitched together manually", "The process is a real differentiator", "Integration needs rule out available products", "You are launching a product for customers"] },
      { type: "cards", heading: "How DigitalBurj helps", items: [
        { title: "Product Validation", body: "Test whether it should be built.", href: "/studio/product-validation" },
        { title: "MVP Development", body: "Build the smallest version that tests your core assumption.", href: "/studio/mvp-development" },
        { title: "Software Development", body: "Full engineering, testing and deployment.", href: "/studio/software-development" },
      ] },
    ],
    related: ["/studio/software-development", "/studio/product-validation", "/resources/templates/software-project-brief"],
    cta: { heading: "Describe what you need to build.", label: "Start a Project", href: "/get-started/studio" },
  },
  {
    slug: "business-transformation",
    label: "Business Transformation",
    eyebrow: solEyebrow,
    h1: "Solutions for Operations That Have Outgrown Their Systems",
    seoTitle: "Business Transformation Solutions",
    description:
      "When growth exposes slow processes, disconnected tools and unreliable data, a staged transformation helps. What it involves and how DigitalBurj approaches it.",
    answer:
      "Businesses often grow faster than their processes. Work that ran on memory, email and spreadsheets starts to break: requests are missed, reports disagree and new staff struggle. Business transformation redesigns processes, connects systems, automates suitable steps and trains people, in stages with measurable results.",
    blocks: [
      { type: "list", heading: "Symptoms", items: ["Different teams report different numbers", "Onboarding new staff takes weeks", "Customers chase you for updates", "Managers cannot see where work is stuck", "Every new customer adds manual work"] },
      { type: "flow", heading: "A staged approach", steps: ["Assess", "Prioritise", "Redesign", "Connect systems", "Automate", "Train", "Measure"] },
    ],
    related: ["/business-ai/digital-transformation", "/business-ai/business-process-automation", "/resources/templates/digital-transformation-questionnaire"],
    cta: { heading: "Start with an assessment.", ...consult },
  },
  {
    slug: "workflow-automation",
    label: "Workflow Automation",
    eyebrow: solEyebrow,
    h1: "Solutions for Work That Waits Between People",
    seoTitle: "Workflow Automation Solutions",
    description:
      "When work stalls between people and systems, workflow automation keeps it moving. Symptoms, suitable processes, an example workflow, risks and measurement.",
    answer:
      "Most delays in operations happen between steps, not during them: a request waits for someone to notice it, an approval waits in an inbox, a hand-off is forgotten. Workflow automation moves work to the next step automatically, notifies the right person and escalates when deadlines pass.",
    blocks: [
      { type: "list", heading: "Processes suited to workflow automation", items: ["Enquiry handling and assignment", "Approvals for purchases, discounts or content", "Customer and supplier onboarding", "Document collection and review", "Internal requests to IT, HR or finance", "Scheduled follow-ups and renewals"] },
      { type: "flow", heading: "Example workflow", steps: ["Request submitted", "Validated", "Routed to owner", "Approved or returned", "Systems updated", "Requester notified"] },
      { type: "list", heading: "How success is measured", items: ["Time from request to completion", "Time spent waiting between steps", "Share of requests completed without rework", "Number of escalations"] },
    ],
    related: ["/business-ai/workflow-automation", "/studio/system-integration", "/industries/professional-services", "/insights/when-should-a-company-automate-a-workflow"],
    cta: { heading: "Map the workflow that waits the most.", ...consult },
  },
  {
    slug: "enterprise-systems",
    label: "Enterprise Systems",
    eyebrow: solEyebrow,
    h1: "Solutions for Complex Internal Operations",
    seoTitle: "Enterprise Systems Solutions",
    description:
      "Internal platforms, integrations, access control and audit history for larger organisations with many teams and systems, from DigitalBurj.",
    answer:
      "Larger organisations need internal systems that many teams can rely on: consistent processes, controlled access, audit history and integration with existing platforms. DigitalBurj helps by replacing the riskiest manual processes first and connecting systems so data has one source of truth.",
    blocks: [
      { type: "cards", heading: "How DigitalBurj helps", items: [
        { title: "Enterprise Software", body: "Internal platforms with access control and audit history.", href: "/studio/enterprise-software" },
        { title: "Enterprise AI", body: "Governed AI adoption across teams.", href: "/business-ai/enterprise-ai" },
        { title: "System Integration", body: "Reliable connections between existing systems.", href: "/studio/system-integration" },
      ] },
    ],
    related: ["/studio/enterprise-software", "/business-ai/enterprise-ai", "/company/security"],
    cta: { heading: "Discuss your internal systems.", ...consult },
  },
  {
    slug: "crm",
    label: "CRM",
    eyebrow: solEyebrow,
    h1: "Solutions for Lost Leads and Unreliable Customer Data",
    seoTitle: "CRM Solutions",
    description:
      "If leads slip through the cracks or your CRM data cannot be trusted, CRM automation and integration can help. Symptoms, approach and measurement.",
    answer:
      "A CRM only helps when it is complete and current. If enquiries arrive in several channels, staff forget to log activity, or nobody trusts the pipeline report, the CRM has become a record of what people remembered to type. Automation and integration make capture, assignment and follow-up happen by default.",
    blocks: [
      { type: "list", heading: "Symptoms", items: ["Leads arrive in inboxes and chats but never reach the CRM", "No owner for new enquiries", "Follow-ups depend on memory", "Duplicate or incomplete records", "Pipeline reports built by hand"] },
      { type: "cards", heading: "How DigitalBurj helps", items: [
        { title: "CRM Automation", body: "Capture, assignment, reminders and reporting.", href: "/business-ai/crm-automation" },
        { title: "Sales Automation", body: "Quotes, approvals and follow-ups.", href: "/business-ai/sales-automation" },
      ] },
    ],
    related: ["/business-ai/crm-automation", "/industries/real-estate", "/insights/crm-vs-erp"],
    cta: { heading: "Make your CRM trustworthy.", ...consult },
  },
  {
    slug: "data-analytics",
    label: "Data & Analytics",
    eyebrow: solEyebrow,
    h1: "Solutions for Reports Nobody Trusts",
    seoTitle: "Data & Analytics Solutions",
    description:
      "When reporting is manual and numbers disagree, connected data and agreed metrics help. How DigitalBurj approaches operational reporting and analytics.",
    answer:
      "If preparing a weekly report takes a day of exporting spreadsheets, or two teams bring different numbers to the same meeting, the problem is usually undefined metrics and disconnected data, not a missing dashboard. Agreeing definitions and connecting sources produces numbers people can act on.",
    blocks: [
      { type: "flow", heading: "Approach", steps: ["Agree the decisions", "Define the metrics", "Connect the sources", "Add data checks", "Publish", "Review usage"] },
    ],
    related: ["/business-ai/data-and-reporting", "/academy/data"],
    cta: { heading: "Get numbers you can act on.", ...consult },
  },
  {
    slug: "document-automation",
    label: "Document Automation",
    eyebrow: solEyebrow,
    h1: "Solutions for Document-Heavy Operations",
    seoTitle: "Document Automation Solutions",
    description:
      "When staff spend hours handling invoices, forms and paperwork, document automation can classify, extract, route and archive documents with human checks.",
    answer:
      "Operations that run on documents, such as invoices, shipping paperwork, applications and certificates, lose time to receiving, reading, checking and filing them. Document automation handles those steps and routes exceptions to people, while leaving legal and authenticity judgments to qualified reviewers.",
    blocks: [
      { type: "list", heading: "Symptoms", items: ["Documents arrive by email and are saved by hand", "Data is typed from PDFs into systems", "Documents are hard to find later", "Errors are found late, after processing", "Approvals wait for paper or attachments"] },
      { type: "cards", heading: "How DigitalBurj helps", items: [
        { title: "Document Automation", body: "Intake, extraction, validation, routing and archiving.", href: "/business-ai/document-automation" },
        { title: "Attesora", body: "A DigitalBurj document platform venture.", href: "/portfolio/attesora" },
      ] },
    ],
    related: ["/business-ai/document-automation", "/industries/logistics", "/industries/financial-services"],
    cta: { heading: "Reduce the paperwork.", ...consult },
  },
];

export const industryPages: ContentPage[] = [
  {
    slug: "logistics",
    label: "Logistics",
    eyebrow: indEyebrow,
    h1: "Technology and AI for Logistics Operations",
    seoTitle: "Technology & AI for Logistics",
    description:
      "Software, automation and training for logistics operations: document flows, shipment communication, customer updates, reporting and exception management.",
    answer:
      "Logistics operations depend on many parties exchanging documents and status updates quickly and accurately. DigitalBurj helps logistics businesses reduce manual document handling, keep customers informed, connect operational systems and train staff, through Business AI, Studio and Academy working together.",
    blocks: [
      { type: "list", heading: "Common operational challenges", items: ["Shipping and customs documents handled manually", "Customers chasing status updates by phone and message", "Quotes prepared slowly from scattered rate information", "Exceptions discovered late", "Reporting assembled from several systems", "Knowledge concentrated in a few experienced staff"] },
      { type: "cards", heading: "Where DigitalBurj helps", items: [
        { title: "Document workflows", body: "Intake, extraction and validation of shipping paperwork.", href: "/business-ai/document-automation" },
        { title: "Customer communication", body: "Automatic status updates and routed enquiries.", href: "/business-ai/customer-service-automation" },
        { title: "Operations reporting", body: "Throughput, delays and exceptions in one view.", href: "/business-ai/data-and-reporting" },
        { title: "Logistics software", body: "Platforms and integrations built by Studio.", href: "/studio/software-development" },
        { title: "Logistics learning", body: "Academy learning for logistics roles.", href: "/academy/logistics" },
        { title: "LoadByTon", body: "A DigitalBurj logistics venture.", href: "/portfolio/loadbyton" },
      ] },
    ],
    faqs: [
      { q: "Can automation handle customs documentation?", a: "Automation can extract, check and route customs paperwork, and flag inconsistencies. Regulatory compliance and filing decisions remain with licensed staff." },
    ],
    related: ["/business-ai/document-automation", "/academy/logistics", "/portfolio/loadbyton", "/insights/industries"],
    cta: { heading: "Discuss your logistics operation.", ...consult },
  },
  {
    slug: "real-estate",
    label: "Real Estate",
    eyebrow: indEyebrow,
    h1: "Technology and AI for Real Estate",
    seoTitle: "Technology & AI for Real Estate",
    description:
      "Lead capture, qualification, CRM, enquiry routing, document workflows, follow-up and reporting for real estate businesses, with Business AI and Studio.",
    answer:
      "Real estate businesses receive enquiries from many portals and channels, and response speed matters. DigitalBurj helps agencies and developers capture every enquiry, qualify and route it to the right agent, keep CRM records complete, handle documents and report on performance.",
    blocks: [
      { type: "list", heading: "Where time and leads are lost", items: ["Enquiries from portals, social media and WhatsApp not captured centrally", "Slow first response", "Unclear agent assignment", "Follow-ups forgotten", "Documents collected by email", "Manual performance reporting"] },
      { type: "flow", heading: "Example: property enquiry handling", steps: ["Enquiry from portal", "Captured to CRM", "Requirements extracted", "Matched to agent", "Agent notified", "Follow-up scheduled"] },
      { type: "callout", heading: "Local rules apply", body: "Real estate regulation varies by jurisdiction. Systems are configured with your compliance team; DigitalBurj does not provide legal or regulatory advice." },
    ],
    related: ["/business-ai/crm-automation", "/business-ai/sales-automation", "/academy/real-estate", "/solutions/crm"],
    cta: { heading: "Respond to every enquiry, fast.", ...consult },
  },
  {
    slug: "financial-services",
    label: "Financial Services",
    eyebrow: indEyebrow,
    h1: "Technology and AI for Financial Services Operations",
    seoTitle: "Technology & AI for Financial Services",
    description:
      "Workflow systems, customer operations, document handling, approvals, reporting and auditability for financial services, with controlled automation.",
    answer:
      "Financial services operations require accuracy, audit trails and controlled access. DigitalBurj helps with operational workflows, customer onboarding paperwork, approvals, reporting and controlled automation, designed so that every action is traceable and consequential decisions stay with authorised people.",
    blocks: [
      { type: "list", heading: "Focus areas", items: ["Workflow and case management", "Customer operations", "Document intake and checking", "Approval chains", "Reporting", "Audit history", "Controlled automation"] },
      { type: "callout", heading: "Scope", body: "DigitalBurj builds operational systems. It does not provide investment, legal or regulatory advice, and systems are configured with your compliance function." },
    ],
    related: ["/business-ai/document-automation", "/studio/enterprise-software", "/academy/accounting-finance", "/company/security"],
    cta: { heading: "Discuss your operations.", ...consult },
  },
  {
    slug: "healthcare",
    label: "Healthcare",
    eyebrow: indEyebrow,
    h1: "Technology for Healthcare Operations",
    seoTitle: "Technology for Healthcare Operations",
    description:
      "Operational workflows, appointments, patient communication, documents, internal systems and reporting for healthcare providers, with privacy-aware architecture.",
    answer:
      "Healthcare providers carry a heavy administrative load alongside care. DigitalBurj helps with the operational side: appointment workflows, patient communication, document handling, internal systems and reporting, built with privacy-aware architecture. DigitalBurj does not provide clinical decision-making systems.",
    blocks: [
      { type: "list", heading: "Operational areas", items: ["Appointment booking and reminders", "Patient enquiries and routing", "Referral and document intake", "Internal scheduling and coordination", "Operational reporting"] },
      { type: "callout", heading: "Not clinical", body: "DigitalBurj's work in healthcare is operational. Clinical decisions, diagnosis and treatment are outside its scope, and health data is handled according to applicable law and the provider's policies." },
    ],
    related: ["/business-ai/customer-service-automation", "/company/responsible-ai", "/company/security"],
    cta: { heading: "Reduce administrative load.", ...consult },
  },
  {
    slug: "education",
    label: "Education",
    eyebrow: indEyebrow,
    h1: "Technology for Education Providers",
    seoTitle: "Technology for Education Providers",
    description:
      "Learning platforms, admissions workflows, assessment and evidence systems, and operational automation for education and training providers.",
    answer:
      "Education and training providers need systems for admissions, learning delivery, assessment and records. DigitalBurj brings direct experience from operating its own Academy, and helps providers with enquiry and admissions workflows, learning and assessment platforms, and evidence-based credentials.",
    blocks: [
      { type: "list", heading: "Where DigitalBurj helps", items: ["Enquiry and admissions workflows", "Learning platforms", "Practical assessment and evidence capture", "Learner communication", "Reporting on progress and outcomes"] },
    ],
    related: ["/academy", "/talent/how-verification-works", "/insights/what-is-evidence-based-learning"],
    cta: { heading: "Discuss your learning systems.", ...consult },
  },
  {
    slug: "retail",
    label: "Retail",
    eyebrow: indEyebrow,
    h1: "Technology for Retail Operations",
    seoTitle: "Technology for Retail Operations",
    description:
      "Order handling, customer service, inventory reporting and system integration for retail and commerce businesses.",
    answer:
      "Retail businesses juggle orders, stock, customer questions and several sales channels. DigitalBurj helps connect those channels to one source of truth, automate order-status and service enquiries, and report on stock and sales without manual spreadsheets.",
    blocks: [
      { type: "list", heading: "Common needs", items: ["Order and delivery status enquiries", "Stock levels across channels", "Returns handling", "Customer service routing", "Sales reporting"] },
    ],
    related: ["/business-ai/customer-service-automation", "/studio/system-integration", "/business-ai/data-and-reporting"],
    cta: { heading: "Connect your channels.", ...consult },
  },
  {
    slug: "procurement",
    label: "Procurement",
    eyebrow: indEyebrow,
    h1: "Technology for Procurement",
    seoTitle: "Technology for Procurement",
    description:
      "Requisitions, approvals, supplier onboarding, document handling and spend reporting for procurement teams.",
    answer:
      "Procurement teams coordinate requests, approvals, suppliers and documents across the organisation. DigitalBurj helps structure requisition and approval workflows, automate supplier document handling and report on spend, and is developing Procurazo, a procurement venture.",
    blocks: [
      { type: "list", heading: "Common needs", items: ["Requisition and approval workflows", "Supplier onboarding and documents", "Quote comparison", "Purchase order tracking", "Spend reporting"] },
    ],
    related: ["/portfolio/procurazo", "/business-ai/workflow-automation", "/business-ai/document-automation"],
    cta: { heading: "Streamline procurement.", ...consult },
  },
  {
    slug: "professional-services",
    label: "Professional Services",
    eyebrow: indEyebrow,
    h1: "Technology for Professional Services Firms",
    seoTitle: "Technology for Professional Services",
    description:
      "Client intake, proposals, engagement workflows, document handling and reporting for consultancies, agencies and professional firms.",
    answer:
      "Professional services firms sell expertise, so time spent on administration is expensive. DigitalBurj helps automate client intake, proposal preparation, engagement workflows, document collection and reporting, so professionals spend more time on client work.",
    blocks: [
      { type: "list", heading: "Common needs", items: ["Client enquiry intake and qualification", "Proposal and engagement letter preparation", "Document collection from clients", "Task and deadline tracking", "Utilisation and pipeline reporting"] },
    ],
    related: ["/business-ai/sales-automation", "/business-ai/workflow-automation", "/business-ai/document-automation"],
    cta: { heading: "Spend more time on client work.", ...consult },
  },
  {
    slug: "small-business",
    label: "Small Business",
    eyebrow: indEyebrow,
    h1: "Technology and Automation for Small Businesses",
    seoTitle: "Technology & Automation for Small Businesses",
    description:
      "Practical automation for small businesses: capture every enquiry, follow up reliably, reduce admin and connect the tools you already use.",
    answer:
      "Small businesses rarely need complex systems. They need every enquiry captured, reliable follow-up, less administration and tools that work together. DigitalBurj starts with the few changes that save the most time, using the tools you already have wherever possible.",
    blocks: [
      { type: "list", heading: "Typical first steps", items: ["All enquiries into one place", "Automatic acknowledgement and follow-up reminders", "Simple CRM set-up", "Invoice and document handling", "A weekly report that builds itself"] },
    ],
    related: ["/business-ai/crm-automation", "/business-ai/workflow-automation", "/resources/checklists/business-automation-readiness"],
    cta: { heading: "Start with what saves the most time.", ...consult },
  },
];
