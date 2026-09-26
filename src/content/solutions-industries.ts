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
      "If skilled people spend half their day reading messages, copying details between systems and chasing updates, you're paying for work software could do. AI automation takes over that handling for well-defined tasks. People keep the decisions and the customer relationships.",
    blocks: [
      {
        type: "list",
        heading: "Signs it would help",
        items: ["The same information is typed into two or more systems", "Someone reads every incoming email just to decide who it's for", "Reports are copied together by hand every week"],
      },
    ],
    related: ["/business-ai/ai-automation", "/resources/checklists/ai-workflow-assessment", "/insights/when-should-a-company-automate-a-workflow"],
    cta: { heading: "Find the work that shouldn't be manual.", ...consult },
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
      "If your team lives on workarounds because no product fits how you operate, or you're building a product to sell, custom software may be the answer. First we confirm the need and agree the smallest version worth building.",
    blocks: [
      {
        type: "compare",
        heading: "Buy or build?",
        columns: ["", "Buy", "Build"],
        rows: [
          ["Fits your process", "Mostly", "Not without heavy compromise"],
          ["Sets you apart", "No", "Yes"],
          ["Upfront cost", "Lower", "Higher"],
        ],
      },
    ],
    related: ["/studio/software-development", "/studio/product-validation", "/resources/templates/software-project-brief"],
    cta: { heading: "Tell us what you need built.", label: "Start a Project", href: "/get-started/studio" },
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
      "Businesses often outgrow their processes. What ran on memory, email and spreadsheets starts to crack: requests get missed, reports disagree, new staff are lost. We simplify the process, connect the tools, automate what's repetitive and train the team, one stage at a time.",
    blocks: [
      {
        type: "flow",
        heading: "One stage",
        steps: ["Assess", "Simplify", "Connect", "Automate", "Train", "Measure"],
      },
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
      "Most delays happen between steps, not during them. A request waits for someone to notice it. An approval sits in an inbox. Workflow automation moves the work on, tells the right person, and escalates when a deadline passes.",
    blocks: [
      {
        type: "flow",
        heading: "Example",
        steps: ["Request in", "Assigned", "Owner notified", "Deadline passes", "Escalated"],
      },
    ],
    related: ["/business-ai/workflow-automation", "/studio/system-integration", "/industries/professional-services", "/insights/when-should-a-company-automate-a-workflow"],
    cta: { heading: "Map the workflow that waits the longest.", ...consult },
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
      "Larger organisations need internal systems that many teams can depend on, with tight access control and a history of every change. We replace the riskiest manual process first, then connect systems so each piece of data has one home.",
    blocks: [],
    related: ["/studio/enterprise-software", "/business-ai/enterprise-ai", "/company/security"],
    cta: { heading: "Talk to us about your internal systems.", ...consult },
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
      "A CRM is only useful when it's complete. If enquiries come in through five channels and staff forget to log calls, your CRM is a record of what people remembered to type. We make capture, assignment and follow-up happen automatically.",
    blocks: [
      {
        type: "list",
        heading: "What we'd measure",
        items: ["Time to first reply", "Leads without an owner", "Overdue follow-ups", "Conversion by source"],
      },
    ],
    related: ["/business-ai/crm-automation", "/industries/real-estate", "/insights/crm-vs-erp"],
    cta: { heading: "Make your CRM something you can trust.", ...consult },
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
      "If the weekly report takes a day of exporting spreadsheets, or two teams bring different numbers to the same meeting, you don't need a new dashboard. You need agreed definitions and connected data. Then the numbers match.",
    blocks: [],
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
      "If your operation runs on invoices, shipping paperwork, applications or certificates, a lot of time goes into receiving, reading, checking and filing them. Automation handles those steps and sends the odd ones to a person. Legal and authenticity checks stay with qualified people.",
    blocks: [],
    related: ["/business-ai/document-automation", "/industries/logistics", "/industries/financial-services"],
    cta: { heading: "Cut down the paperwork.", ...consult },
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
      "Logistics runs on documents and status updates passing between many parties, fast. We help cut manual document handling, keep customers updated without phone calls, connect operational systems and train staff.",
    blocks: [
      {
        type: "list",
        heading: "Where we usually start",
        items: ["Shipping documents read and filed automatically", "Status updates sent to customers from your system", "Exceptions flagged before the customer notices"],
      },
    ],
    related: ["/business-ai/document-automation", "/academy/logistics", "/portfolio/loadbyton", "/insights/industries"],
    cta: { heading: "Talk to us about your operation.", ...consult },
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
      "Enquiries arrive from portals, WhatsApp, calls and the website, and the agency that replies first usually wins. We help capture every one, route it to the right agent, keep the CRM complete and follow up on time.",
    blocks: [
      {
        type: "flow",
        heading: "An enquiry, handled",
        steps: ["Portal or WhatsApp lead", "Logged in CRM", "Agent assigned", "Reply within minutes", "Viewing booked"],
      },
    ],
    related: ["/business-ai/crm-automation", "/business-ai/sales-automation", "/academy/real-estate", "/solutions/crm"],
    cta: { heading: "Reply to every enquiry, fast.", ...consult },
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
      "Financial operations need accuracy, audit trails and tight access. We help with onboarding paperwork, approvals and reporting, built so every action can be traced and anything consequential is decided by an authorised person.",
    blocks: [],
    related: ["/business-ai/document-automation", "/studio/enterprise-software", "/academy/accounting-finance", "/company/security"],
    cta: { heading: "Talk to us about your operations.", ...consult },
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
      "We help with the admin side of healthcare: appointments, patient messages, documents and reporting, with patient data kept tightly controlled. We don't build clinical decision tools or give medical advice.",
    blocks: [],
    related: ["/business-ai/customer-service-automation", "/company/responsible-ai", "/company/security"],
    cta: { heading: "Lighten the admin load.", ...consult },
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
      "We run our own Academy, so we know the systems a training provider needs firsthand. We help with admissions workflows, learning and assessment platforms, and credentials that show what a learner can actually do.",
    blocks: [],
    related: ["/academy", "/talent/how-verification-works", "/insights/what-is-evidence-based-learning"],
    cta: { heading: "Talk to us about your learning systems.", ...consult },
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
      "Retailers juggle orders, stock, customer questions and several sales channels. We connect the channels so stock is right everywhere, answer order-status questions automatically, and report on sales without spreadsheets.",
    blocks: [],
    related: ["/business-ai/customer-service-automation", "/studio/system-integration", "/business-ai/data-and-reporting"],
    cta: { heading: "Connect your sales channels.", ...consult },
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
      "Procurement teams chase requests, approvals, suppliers and documents across the whole organisation. We help set up requisition and approval workflows, automate supplier paperwork and report on spend. We're also building Procurazo, our own procurement venture.",
    blocks: [],
    related: ["/portfolio/procurazo", "/business-ai/workflow-automation", "/business-ai/document-automation"],
    cta: { heading: "Speed up procurement.", ...consult },
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
      "When you sell expertise by the hour, admin time is expensive. We automate client intake, proposal drafts, document collection and reporting so your people spend more of the week on client work.",
    blocks: [],
    related: ["/business-ai/sales-automation", "/business-ai/workflow-automation", "/business-ai/document-automation"],
    cta: { heading: "Get more hours back for client work.", ...consult },
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
      "Small businesses rarely need complex systems. They need every enquiry caught, follow-ups that happen, and less admin. We start with the two or three changes that save the most time, using tools you already have where we can.",
    blocks: [],
    related: ["/business-ai/crm-automation", "/business-ai/workflow-automation", "/resources/checklists/business-automation-readiness"],
    cta: { heading: "Start with what saves the most time.", ...consult },
  },
];
