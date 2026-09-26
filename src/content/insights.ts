/**
 * DigitalBurj Insights. Structure: direct answer → explanation → example → limitations → next step.
 * Authorship is attributed to DigitalBurj until named authors and reviewers are assigned.
 */

export type InsightCategory = { slug: string; title: string; description: string };

export const insightCategories: InsightCategory[] = [
  { slug: "ai", title: "Artificial Intelligence", description: "How AI works in real business operations and products, including its limits. Definitions, comparisons and decision guides from DigitalBurj." },
  { slug: "business", title: "Business Systems", description: "Business processes, workflow automation, CRM, ERP and operational change: practical DigitalBurj writing for operators and managers." },
  { slug: "software", title: "Software Engineering", description: "Building, validating and running software products: MVPs, production readiness, access control and engineering practice." },
  { slug: "education", title: "Education", description: "Practical learning, assessment and evidence of capability: how DigitalBurj Academy thinks about education that produces results." },
  { slug: "careers", title: "Careers", description: "Skills, evidence-based hiring and professional development: DigitalBurj guidance for professionals and the employers who hire them." },
  { slug: "industries", title: "Industries", description: "Technology, automation and operational change in specific sectors, including logistics, real estate, finance and healthcare." },
];

export type ArticleSection = { heading: string; paragraphs?: string[]; list?: string[]; ordered?: boolean };

export type Article = {
  slug: string;
  title: string;
  category: string;
  kind: "Definition" | "How-to" | "Comparison" | "Decision guide" | "Framework";
  description: string;
  answer: string;
  keyPoints: string[];
  sections: ArticleSection[];
  limitations: string[];
  related: string[];
  published: string;
  updated: string;
};

const D = "2026-09-26";

export const articles: Article[] = [
  {
    slug: "what-is-business-ai",
    title: "What is Business AI?",
    category: "ai",
    kind: "Definition",
    description: "Business AI is the practical use of AI and automation to improve how an organisation operates. A plain-language definition, with examples and limits.",
    answer: "Business AI is the use of artificial intelligence, together with ordinary automation and better processes, to improve how an organisation operates: responding to customers faster, reducing manual data handling, and making operational information easier to use. It is judged by operational results, not by how advanced the technology is.",
    keyPoints: [],
    sections: [
      { heading: "How Business AI differs from 'using ChatGPT at work'", paragraphs: ["Individual use of AI assistants can make one person faster at drafting or summarising. Business AI changes a process that many people depend on: how enquiries are handled, how documents move, how reports are produced. It is designed, integrated with business systems, measured and governed."] },
      { heading: "What Business AI typically includes", list: ["Mapping how work currently happens and where it is lost", "Removing unnecessary steps before automating anything", "Rule-based automation for predictable steps", "AI for reading unstructured input such as emails and documents", "Human approval for consequential or customer-facing actions", "Measurement against a baseline"] },
      { heading: "An example", paragraphs: ["A property agency receives enquiries from portals, its website and WhatsApp. Before: staff check each channel, copy details into a spreadsheet, and assign agents informally; some enquiries wait a day. After: every enquiry is captured into the CRM, AI extracts the requirements from free text, rules assign the right agent, and unanswered enquiries are escalated. The measure is time to first response and the share of enquiries that receive one."] }],
    limitations: ["AI can misread unusual inputs and must be tested on real examples.", "It does not fix a process nobody has agreed on."],
    related: ["/business-ai", "/business-ai/ai-automation", "/insights/when-should-a-company-automate-a-workflow", "/resources/glossary"],
    published: D,
    updated: D,
  },
  {
    slug: "when-should-a-company-automate-a-workflow",
    title: "When should a company automate a workflow?",
    category: "business",
    kind: "Decision guide",
    description: "A practical decision guide: which workflows are ready for automation, which are not, and how to decide what to automate first.",
    answer: "A company should automate a workflow when the steps are repeatable and agreed, the volume is high enough for time savings to matter, the inputs are available in digital form, and the cost of an occasional error is manageable or can be caught by review. If the process is still changing or nobody owns it, fix that first.",
    keyPoints: [],
    sections: [
      { heading: "Five questions to ask", ordered: true, list: ["Do the steps happen the same way most of the time?", "Is there enough volume that saving a few minutes per case adds up?", "Is the information needed available digitally, or could it be?", "Is there a clear owner for the process and each step?", "If the automation gets something wrong, will someone notice and can it be corrected?"], paragraphs: ["Four or five 'yes' answers suggest a good candidate. Two or fewer suggest the process needs work before automation."] },
      { heading: "Signs a workflow is not ready", list: ["People disagree about how it should work", "It happens a few times a month", "Every case is an exception", "Errors would have serious legal, financial or safety consequences and would be hard to detect"] },
      { heading: "How to choose what to automate first", paragraphs: ["Score candidate workflows by volume, time per case, cost of delay and risk. Start with one that is high in volume and delay cost but low in risk. Measure a baseline before changing anything, so you can show whether the automation helped."] }],
    limitations: ["Volume and risk estimates are only as good as the data behind them; measure where possible.", "Automation creates maintenance work when connected systems change."],
    related: ["/business-ai/workflow-automation", "/resources/checklists/business-automation-readiness", "/solutions/workflow-automation", "/insights/what-is-workflow-automation"],
    published: D,
    updated: D,
  },
  {
    slug: "what-is-workflow-automation",
    title: "What is workflow automation?",
    category: "business",
    kind: "Definition",
    description: "Workflow automation moves work through defined steps automatically using triggers, conditions and actions. Definition, components, example and limits.",
    answer: "Workflow automation is the use of software to move work through a defined sequence of steps without manual intervention: an event triggers the workflow, conditions decide the path, and actions update systems or notify people. It removes chasing and copying between steps while keeping people involved where approval is needed.",
    keyPoints: [],
    sections: [
      { heading: "The components", list: ["Trigger: the event that starts the workflow", "Conditions: rules that decide what happens next", "Actions: records created, messages sent, tasks assigned", "Approvals: points where a person must confirm", "Exceptions: what happens when something is missing or fails", "Measurement: timestamps for each step"] },
      { heading: "Example", paragraphs: ["A new supplier submits an onboarding form. The workflow checks required documents are attached, creates the supplier in the finance system as 'pending', assigns a reviewer, and reminds them after two days. When approved, the supplier is activated and notified. If documents are missing, the supplier is asked for them automatically."] },
      { heading: "Workflow automation vs business process automation", paragraphs: ["The terms overlap. Workflow automation usually describes one sequence of tasks; business process automation covers a wider process that contains several workflows."] }],
    limitations: ["Automating an unclear process makes problems happen faster.", "Integrations need monitoring as connected systems change."],
    related: ["/business-ai/workflow-automation", "/insights/when-should-a-company-automate-a-workflow", "/resources/glossary"],
    published: D,
    updated: D,
  },
  {
    slug: "ai-agent-vs-chatbot",
    title: "AI agent vs chatbot: what is the difference?",
    category: "ai",
    kind: "Comparison",
    description: "A chatbot replies in conversation; an AI agent takes actions using tools. The practical differences, risks and when to use each.",
    answer: "A chatbot answers questions in a conversation. An AI agent works toward a goal by deciding which steps to take and using tools it has been given, such as reading a CRM record or drafting an email. An agent can change things in your systems, so it needs tighter controls: limited permissions, approval steps and logging.",
    keyPoints: [],
    sections: [
      { heading: "Side by side", list: ["Chatbot output: a message. Agent output: a changed record, a routed request, a prepared document.", "Chatbot risk: a wrong answer. Agent risk: a wrong action in a real system.", "Chatbot controls: content guidelines. Agent controls: permissions, approvals, logs, limits."] },
      { heading: "When a chatbot is enough", paragraphs: ["If users mainly need answers from known information, such as opening hours, policies or product details, a well-grounded chatbot is simpler and safer."] },
      { heading: "When an agent is worth it", paragraphs: ["When a task requires reading information, deciding a next step and updating systems, repeatedly and at volume. For example: triaging incoming requests, preparing CRM updates from emails, or assembling case summaries for staff."] }],
    limitations: ["Agents can be misled by content they read, so input must be treated as untrusted.", "Agents multiply the cost of errors; evaluation and monitoring are essential."],
    related: ["/business-ai/ai-agents", "/company/responsible-ai", "/studio/ai-product-development"],
    published: D,
    updated: D,
  },
  {
    slug: "crm-vs-erp",
    title: "CRM vs ERP: what is the difference?",
    category: "business",
    kind: "Comparison",
    description: "CRM manages customer relationships and sales; ERP manages operations and finance. How they differ, where they overlap and how they connect.",
    answer: "A CRM (customer relationship management) system manages interactions with customers and prospects: enquiries, contacts, opportunities and follow-ups. An ERP (enterprise resource planning) system manages internal operations and finance: orders, inventory, purchasing, accounting. Most growing businesses need both, connected so that a won deal flows into operations without re-entry.",
    keyPoints: [],
    sections: [
      { heading: "What each system owns", list: ["CRM: leads, contacts, companies, opportunities, activities, pipeline", "ERP: products, inventory, orders, purchasing, invoices, general ledger"] },
      { heading: "Where they meet", paragraphs: ["The hand-off from sale to delivery is where the two meet. When a deal is won in the CRM, customer and order details should flow into the ERP. Invoice and payment status can flow back so that account managers see it."] },
      { heading: "Example", paragraphs: ["A distributor tracks quotes in its CRM and fulfils orders in its ERP. Without integration, staff re-type accepted quotes as orders, introducing errors. With integration, an accepted quote creates the order automatically, and the salesperson sees fulfilment status in the CRM."] }],
    limitations: ["Some products combine CRM and ERP features; the right choice depends on your processes, not on labels."],
    related: ["/business-ai/business-systems", "/business-ai/crm-automation", "/studio/system-integration"],
    published: D,
    updated: D,
  },
  {
    slug: "what-makes-software-production-ready",
    title: "What makes software production-ready?",
    category: "software",
    kind: "Framework",
    description: "Production-ready software is correct, secure, observable, recoverable and maintainable. A checklist of what that means in practice.",
    answer: "Software is production-ready when it can be relied on by real users with real data: it enforces permissions correctly, keeps data consistent, handles errors, is monitored, can be recovered after failure, and can be understood and changed by someone other than its author. “It works on my laptop” doesn’t count.",
    keyPoints: [],
    sections: [
      { heading: "The checklist", list: ["Permissions enforced on the server for every action", "Related data changes succeed or fail together", "Inputs validated, errors handled with clear messages", "Automated tests for critical paths", "Secrets kept out of code", "Private files served only to authorised users", "Logging, metrics and alerts in place", "Automated backups and a tested restore", "Deployment is automated and reversible", "Documentation for running and changing the system"] },
      { heading: "Example", paragraphs: ["A booking system works in testing. In production, two customers book the last slot at the same moment and both receive confirmations. A production-ready system uses a transaction or constraint so that only one booking succeeds and the other customer is told immediately."] }],
    limitations: ["The level of rigour should match the risk: an internal prototype needs less than a payment system."],
    related: ["/company/engineering-principles", "/studio/software-development", "/studio/cloud-deployment", "/resources/checklists/technical-project-checklist"],
    published: D,
    updated: D,
  },
  {
    slug: "how-to-scope-an-mvp",
    title: "How to scope an MVP",
    category: "software",
    kind: "How-to",
    description: "A step-by-step method to scope a minimum viable product: problem, user, core action, assumptions, what to build, what not to build and how to measure.",
    answer: "To scope an MVP, define the problem and the specific user, identify the single core action that delivers value, list the assumptions that must be true, build only what is needed for users to complete that action and test those assumptions, write down what you will not build, and decide in advance how you will measure the result.",
    keyPoints: [],
    sections: [
      { heading: "The steps", ordered: true, list: ["Write the problem in the user's own words.", "Choose one specific user group to serve first.", "Define the core action: the one thing users must be able to do.", "List critical assumptions and rank them by risk.", "Define the minimum features needed for the core action.", "Write the no-build list: features deliberately excluded.", "Define measures of success and failure.", "Plan how you will reach the first users.", "Set the date for the build, reshape or stop decision."] },
      { heading: "Example", paragraphs: ["Idea: a platform for small hauliers to find loads. Core action: a haulier finds and accepts a suitable load. Riskiest assumption: shippers will post loads on a new platform. MVP: shippers post loads through a simple form, hauliers browse and accept, payment is invoiced manually. Not built yet: in-app payments, ratings, route optimisation, mobile app."] }],
    limitations: ["An MVP can disprove an idea; be ready to accept that result.", "Small scope is not an excuse for insecure or unreliable software."],
    related: ["/studio/mvp-development", "/studio/product-validation", "/resources/templates/mvp-planning-template", "/insights/mvp-vs-prototype"],
    published: D,
    updated: D,
  },
  {
    slug: "mvp-vs-prototype",
    title: "MVP vs prototype: what is the difference?",
    category: "software",
    kind: "Comparison",
    description: "A prototype explores and communicates an idea; an MVP puts it in front of users doing their normal work. When to use each.",
    answer: "A prototype is a model of a product used to explore or communicate an idea, often with simulated functionality. An MVP is a working product, small in scope, that people actually use, so you can learn whether your core assumption holds. Prototypes answer 'does this make sense?'; MVPs answer 'will people actually use it?'",
    keyPoints: [],
    sections: [
      { heading: "When to prototype", list: ["Stakeholders cannot picture the idea", "You need feedback on a workflow or interface", "Several design options must be compared quickly"] },
      { heading: "When to build an MVP", list: ["The concept is understood but demand is unproven", "You need evidence that people will change behaviour or pay", "The core action can be delivered with a small, reliable product"] }],
    limitations: ["Positive prototype feedback does not prove people will use the product."],
    related: ["/studio/mvp-development", "/insights/how-to-scope-an-mvp", "/studio/product-validation"],
    published: D,
    updated: D,
  },
  {
    slug: "what-is-rbac",
    title: "What is RBAC (role-based access control)?",
    category: "software",
    kind: "Definition",
    description: "Role-based access control grants permissions to roles rather than individual users. How it works, an example, and common mistakes.",
    answer: "Role-based access control (RBAC) is a way of managing permissions in software by assigning them to roles, such as 'manager' or 'viewer', and then assigning users to roles. It makes permissions easier to understand and audit than granting rights to individuals, and it must be enforced on the server, not only in the user interface.",
    keyPoints: [],
    sections: [
      { heading: "Example", paragraphs: ["In a procurement system: requesters can create purchase requests; approvers can approve requests up to a limit; finance can create purchase orders; administrators manage users. A requester who edits the page to show an 'approve' button still cannot approve, because the server checks the role."] },
      { heading: "Common mistakes", list: ["Hiding buttons in the interface but not checking permissions on the server", "Forgetting to scope access to the user's organisation in multi-tenant software", "Creating a new role for every exception until nobody understands them", "Never reviewing who holds which role"] }],
    limitations: ["Some requirements need attribute-based rules (for example, 'only records in my region') in addition to roles."],
    related: ["/company/engineering-principles", "/studio/saas-development", "/resources/glossary"],
    published: D,
    updated: D,
  },
  {
    slug: "what-is-evidence-based-learning",
    title: "What is evidence-based learning?",
    category: "education",
    kind: "Framework",
    description: "Evidence-based learning means learners finish with proof of what they can do, not just a certificate of attendance. How DigitalBurj Academy applies it.",
    answer: "In the DigitalBurj Academy sense, evidence-based learning means that learning is complete only when the learner has produced evidence of capability: work they built, tested, explained and defended. It contrasts with completion-based learning, where watching lessons or passing a recall quiz counts as finishing.",
    keyPoints: [],
    sections: [
      { heading: "The DigitalBurj learning loop", paragraphs: ["Brief → Learn → Investigate → Try → Build → Break → Fix → Test → Explain → Defend → Ship → Evidence. Breaking and fixing are deliberate: diagnosing failure is one of the most valuable professional skills and one of the least taught."] },
      { heading: "Example", paragraphs: ["In a backend track, a learner doesn't just build an API. They are given a version with a permissions bug, must find and fix it, write a test proving the fix, and explain to a reviewer why the bug happened and how they would prevent it."] },
      { heading: "Why it matters to employers", paragraphs: ["A certificate says someone attended. Evidence shows what they can do. That is the link between DigitalBurj Academy and Verified Talent."] }],
    limitations: ["Evidence-based learning takes longer than watching videos and requires human review capacity."],
    related: ["/academy", "/talent/evidence", "/talent/how-verification-works", "/industries/education"],
    published: D,
    updated: D,
  },
  {
    slug: "what-does-verified-professional-capability-mean",
    title: "What does verified professional capability mean?",
    category: "careers",
    kind: "Definition",
    description: "Verified capability means a skill is supported by evidence that has been independently checked. How it differs from claims, courses and approvals.",
    answer: "Verified professional capability means a person's skill is supported by evidence that someone independent has checked against defined criteria. It is stronger than a self-declared skill, a course completion or a reviewer's approval, because the check is independent and the criteria are stated.",
    keyPoints: [],
    sections: [
      { heading: "Levels, from weakest to strongest", ordered: true, list: ["Self-declared", "Course-completed", "Assessed", "Approved", "Verified", "Production evidence"] },
      { heading: "Why labels must be precise", paragraphs: ["If every level is described as 'verified', the word stops meaning anything. DigitalBurj keeps approval and independent verification separate so employers can trust what a label says."] }],
    limitations: ["Verification reduces uncertainty but does not predict future performance with certainty."],
    related: ["/talent/how-verification-works", "/talent/capability-passport", "/talent/for-employers"],
    published: D,
    updated: D,
  },
  {
    slug: "document-automation-in-logistics",
    title: "Where to start with document automation in logistics",
    category: "industries",
    kind: "How-to",
    description: "A practical starting point for logistics companies automating document handling: which documents first, how to measure, and where people stay involved.",
    answer: "Logistics companies should start document automation with high-volume, standardised documents that are already received digitally, such as commercial invoices and delivery notes, and automate intake, classification and field extraction first. Keep people reviewing low-confidence results and anything with regulatory consequences.",
    keyPoints: [],
    sections: [
      { heading: "A staged approach", ordered: true, list: ["Collect all documents in one intake point", "Classify document types automatically", "Extract key fields from the most common types", "Validate against shipment data", "Route exceptions to staff", "Measure accuracy and time saved", "Expand to more document types"] },
      { heading: "Where people stay involved", list: ["Customs and regulatory filings", "Documents that fail validation", "Low-confidence extractions", "Disputes and claims"] }],
    limitations: ["Poor scans and handwritten documents reduce accuracy.", "Automation extracts information; it does not confirm legal validity."],
    related: ["/industries/logistics", "/business-ai/document-automation", "/academy/logistics"],
    published: D,
    updated: D,
  },
];
