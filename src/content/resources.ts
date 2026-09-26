export type ResourceCategory = { slug: string; title: string; description: string };

export const resourceCategories: ResourceCategory[] = [
  { slug: "guides", title: "Guides", description: "Step-by-step how-to and decision guides from DigitalBurj Insights, on automation, MVPs, logistics documents and more." },
  { slug: "templates", title: "Templates", description: "Structured templates for planning products, briefing software projects and preparing for digital transformation." },
  { slug: "checklists", title: "Checklists", description: "Checklists to assess automation readiness, AI workflows, product validation, career skills and technical projects before you invest." },
  { slug: "research", title: "Research", description: "Original DigitalBurj research on automation, learning and capability, published as it becomes available." },
];

export type Resource = {
  slug: string;
  category: "templates" | "checklists";
  title: string;
  description: string;
  intro: string;
  howToUse: string;
  sections: { heading: string; items: string[] }[];
  related: string[];
};

export const resources: Resource[] = [
  {
    slug: "business-automation-readiness",
    category: "checklists",
    title: "Business Automation Readiness Checklist",
    description: "Assess whether a business process is ready to automate: stability, volume, data, ownership, risk and measurement.",
    intro: "Use this checklist before investing in automation. It helps you tell whether a process is ready, or whether it needs to be clarified and simplified first.",
    howToUse: "Pick one process. Answer each item honestly. Items you cannot tick point to work that should happen before, or as part of, automation.",
    sections: [
      { heading: "Process stability", items: ["The process is followed the same way by most people", "It has not changed significantly in the last three months", "There is a written or agreed description of the steps", "There is a named owner for the process"] },
      { heading: "Volume and value", items: ["The process runs at least daily or weekly", "We know roughly how long each case takes", "Delays in this process affect customers or revenue", "Staff time spent on it could be used better elsewhere"] },
      { heading: "Data and systems", items: ["Inputs arrive in digital form (email, form, file, system)", "The systems involved have APIs or export options", "We know which system is the source of truth for each data item", "Data quality is acceptable, or we know what to fix"] },
      { heading: "Risk and control", items: ["We know what an error would cost", "Errors would be noticed and could be corrected", "We have identified steps that need human approval", "Sensitive data involved has been identified"] },
      { heading: "Measurement", items: ["We have, or can collect, a baseline measure", "We have agreed what improvement would look like", "Someone will review results after launch"] },
    ],
    related: ["/business-ai/workflow-automation", "/insights/when-should-a-company-automate-a-workflow", "/get-started/business"],
  },
  {
    slug: "ai-workflow-assessment",
    category: "checklists",
    title: "AI Workflow Assessment",
    description: "Decide whether a workflow step should use AI, rules or a person, and what controls it needs.",
    intro: "Not every automated step needs AI. This assessment helps you decide, step by step, whether to use rules, AI or a person, and what controls to put around AI.",
    howToUse: "List the steps in your workflow. For each step, work through the questions below.",
    sections: [
      { heading: "Does this step need AI?", items: ["The input is unstructured (free text, documents, images)", "Rules alone cannot handle the variety of inputs", "An occasional error can be caught by review or validation", "We have real examples to test against"] },
      { heading: "Data and privacy", items: ["We know what data the AI will see", "Sensitive data is excluded or its use is justified", "The AI provider's data handling meets our requirements", "Access is limited to what the step needs"] },
      { heading: "Control", items: ["Low-confidence results go to a person", "Customer-facing or consequential actions need approval", "All AI actions are logged", "There is a fallback when the AI service is unavailable", "Usage cost has a limit and is monitored"] },
      { heading: "Quality", items: ["We have defined what a correct output is", "We have a test set of real examples, including difficult ones", "Accuracy will be measured before and after launch", "We will re-test when prompts, models or data change"] },
    ],
    related: ["/business-ai/ai-agents", "/company/responsible-ai", "/business-ai/enterprise-ai"],
  },
  {
    slug: "product-validation-checklist",
    category: "checklists",
    title: "Product Validation Checklist",
    description: "Check that a product idea is supported by evidence before committing to development.",
    intro: "Use this before commissioning development. Each unchecked item is a risk you are choosing to take.",
    howToUse: "Work through each section with evidence, not opinions. Note the source of evidence next to each item.",
    sections: [
      { heading: "Problem", items: ["We have spoken to at least ten people who have the problem", "We can describe the problem in their words", "We know how often it happens and what it costs them"] },
      { heading: "Alternatives", items: ["We know what people use today, including manual workarounds", "We know why current alternatives are not good enough"] },
      { heading: "Demand", items: ["Some people have committed something: time, a pilot, a deposit, a letter of intent", "We know how we would reach the first users"] },
      { heading: "Scope", items: ["We have defined the core action", "We have written a no-build list", "We have defined the measures of success and failure", "We have set a date for the build, reshape or stop decision"] },
    ],
    related: ["/studio/product-validation", "/studio/mvp-development", "/resources/templates/mvp-planning-template"],
  },
  {
    slug: "career-skills-checklist",
    category: "checklists",
    title: "Career Skills Checklist",
    description: "Review your readiness for a target role: skills, evidence, communication and professional practice.",
    intro: "Use this to see where you stand against a target role and what to work on next.",
    howToUse: "Write down your target role. Collect five job descriptions for it. Then work through the checklist.",
    sections: [
      { heading: "Role understanding", items: ["I can describe what someone in this role does each day", "I have listed the skills that appear in most job descriptions"] },
      { heading: "Skills and evidence", items: ["For each key skill, I can give a specific example", "I have evidence (project, assessment, reference) for the most important skills", "My evidence is recent"] },
      { heading: "Presentation", items: ["My CV describes achievements, not only duties", "I can explain my decisions in my best project", "I have prepared questions for interviewers"] },
    ],
    related: ["/jobs/skills-guide", "/jobs/cv-guide", "/academy/learning-paths"],
  },
  {
    slug: "technical-project-checklist",
    category: "checklists",
    title: "Technical Project Checklist",
    description: "Check a software project against production-readiness essentials before launch.",
    intro: "A pre-launch checklist based on DigitalBurj engineering principles.",
    howToUse: "Review with the engineering team before each major release.",
    sections: [
      { heading: "Correctness and security", items: ["Permissions are enforced on the server", "Related data changes are transactional", "Inputs are validated", "Secrets are not in the code repository", "Private files require authorisation"] },
      { heading: "Quality", items: ["Critical paths have automated tests", "The product has been tested on real devices", "Accessibility has been checked with keyboard and screen reader"] },
      { heading: "Operations", items: ["Errors are logged and alerted", "Backups are automated", "A restore has been tested", "Deployment is automated and can be rolled back", "Documentation exists for running the system"] },
    ],
    related: ["/insights/what-makes-software-production-ready", "/company/engineering-principles"],
  },
  {
    slug: "mvp-planning-template",
    category: "templates",
    title: "MVP Planning Template",
    description: "A one-page template to scope a minimum viable product: problem, user, core action, assumptions, scope, no-build list and measures.",
    intro: "Complete this template before briefing a development team. If a section is hard to fill in, that is where more validation is needed.",
    howToUse: "Copy the headings into a document and answer each in a few sentences.",
    sections: [
      { heading: "Template", items: ["Problem (in the user's words)", "Target user (one specific group)", "Current alternative", "Core action", "Critical assumptions, ranked by risk", "Features required for the core action", "No-build list", "Success measures", "Failure measures", "First-user acquisition plan", "Decision date: build, reshape or stop"] },
    ],
    related: ["/insights/how-to-scope-an-mvp", "/studio/mvp-development"],
  },
  {
    slug: "software-project-brief",
    category: "templates",
    title: "Software Project Brief",
    description: "A template to brief a software team clearly: goals, users, workflows, integrations, constraints and success measures.",
    intro: "A good brief shortens discovery and improves estimates. Use this before contacting DigitalBurj Studio or any development team.",
    howToUse: "Answer what you know. Mark unknowns clearly rather than guessing.",
    sections: [
      { heading: "Template", items: ["Background: what the organisation does", "Problem: what is not working today", "Users: who will use the software and how often", "Core workflows: the three to five most important tasks", "Current systems and required integrations", "Data: what is stored, and its sensitivity", "Constraints: timeline, budget range, regulations", "Success measures", "Known risks and open questions"] },
    ],
    related: ["/studio/software-development", "/get-started/studio"],
  },
  {
    slug: "digital-transformation-questionnaire",
    category: "templates",
    title: "Digital Transformation Questionnaire",
    description: "Questions to assess where an organisation stands before a digital transformation: processes, systems, data, people and priorities.",
    intro: "Use this questionnaire with managers from each team to build a shared picture before planning change.",
    howToUse: "Ask each team lead to answer independently, then compare answers.",
    sections: [
      { heading: "Processes", items: ["Which process causes the most delay or complaints?", "Where is information re-entered by hand?", "Which processes depend on one person?"] },
      { heading: "Systems and data", items: ["Which systems does your team use daily?", "Which report do you trust least, and why?", "Where does the 'real' data live today?"] },
      { heading: "People", items: ["Which skills does your team lack for new tools?", "How are new staff trained today?"] },
      { heading: "Priorities", items: ["If one thing improved in six months, what should it be?", "How would you measure that improvement?"] },
    ],
    related: ["/business-ai/digital-transformation", "/solutions/business-transformation"],
  },
];

export type GlossaryTerm = {
  slug: string;
  term: string;
  definition: string;
  explanation: string;
  example: string;
  related: string[];
  relevance: { label: string; href: string };
};

export const glossary: GlossaryTerm[] = [
  { slug: "aeo", term: "AEO (Answer Engine Optimisation)", definition: "Structuring content so that search and AI answer engines can extract a direct, accurate answer from it.", explanation: "AEO favours pages that state a clear answer early, then explain, give examples and note limitations.", example: "A service page that opens with a 60-word definition of workflow automation before the detail.", related: ["GEO", "Structured data"], relevance: { label: "Search & Visibility track", href: "/academy/courses/search-and-visibility" } },
  { slug: "ai-agent", term: "AI agent", definition: "Software that uses a language model to decide which steps to take toward a goal, using tools it has been given access to.", explanation: "Agents can act in real systems, so their permissions, approvals and logging must be designed carefully.", example: "An agent that reads an incoming enquiry, checks CRM history and drafts a reply for approval.", related: ["Human-in-the-loop", "Workflow automation"], relevance: { label: "AI Agents", href: "/business-ai/ai-agents" } },
  { slug: "api", term: "API", definition: "An application programming interface: a defined way for software systems to exchange data and trigger actions.", explanation: "Good APIs are documented, versioned, secured and predictable, so systems depending on them keep working.", example: "A CRM API that lets a website create a new lead record.", related: ["System integration"], relevance: { label: "API Development", href: "/studio/api-development" } },
  { slug: "business-ai", term: "Business AI", definition: "The use of AI, automation and process redesign to improve how an organisation operates, judged by operational results.", explanation: "Business AI starts from a measured operational problem, not from a technology.", example: "Reducing time to first response on customer enquiries by automating capture, classification and routing.", related: ["Business automation", "AI agent"], relevance: { label: "DigitalBurj Business AI", href: "/business-ai" } },
  { slug: "business-automation", term: "Business automation", definition: "Using software to perform repeatable business tasks that people previously did manually.", explanation: "It ranges from simple rules to AI-assisted steps, and works best after the process has been simplified.", example: "Automatically creating an invoice when an order is marked delivered.", related: ["Workflow automation", "Business AI"], relevance: { label: "Business Process Automation", href: "/business-ai/business-process-automation" } },
  { slug: "capability-verification", term: "Capability verification", definition: "An independent check that evidence supports a person's claimed skill, against defined criteria.", explanation: "It is distinct from self-declaration, course completion and reviewer approval.", example: "A reviewer independent of the learner checks a submitted project against published criteria for 'designs relational schemas'.", related: ["Evidence-based learning"], relevance: { label: "How Verification Works", href: "/talent/how-verification-works" } },
  { slug: "crm", term: "CRM", definition: "Customer relationship management: a system for managing interactions with customers and prospects.", explanation: "A CRM holds contacts, enquiries, opportunities and activity history, and is most useful when kept complete automatically.", example: "Every website enquiry creating a CRM record with an assigned owner.", related: ["ERP"], relevance: { label: "CRM Automation", href: "/business-ai/crm-automation" } },
  { slug: "erp", term: "ERP", definition: "Enterprise resource planning: a system for managing internal operations such as orders, inventory, purchasing and accounting.", explanation: "ERP is inward-facing; it is often integrated with a CRM so that sales flow into operations.", example: "An accepted quote in the CRM creating a sales order in the ERP.", related: ["CRM"], relevance: { label: "CRM vs ERP", href: "/insights/crm-vs-erp" } },
  { slug: "geo", term: "GEO (Generative Engine Optimisation)", definition: "Making an organisation and its content easy for generative AI systems to identify, understand and cite accurately.", explanation: "GEO relies on consistent entity descriptions, original content, clear structure and stable URLs.", example: "Describing a company with the same one-sentence definition on every page.", related: ["AEO"], relevance: { label: "Search & Visibility track", href: "/academy/courses/search-and-visibility" } },
  { slug: "human-in-the-loop", term: "Human-in-the-loop", definition: "A design in which a person reviews or approves an automated or AI-generated result before it takes effect.", explanation: "It is used where errors are costly, judgment is needed or trust has not yet been established.", example: "An AI-drafted customer reply that an agent approves before it is sent.", related: ["AI agent"], relevance: { label: "Responsible AI", href: "/company/responsible-ai" } },
  { slug: "mvp", term: "MVP", definition: "Minimum viable product: the smallest working product that lets real users complete the core action so an assumption can be tested.", explanation: "An MVP is small in scope but built properly for what it does.", example: "A load-matching platform where payments are invoiced manually at first.", related: ["Prototype", "Product validation"], relevance: { label: "MVP Development", href: "/studio/mvp-development" } },
  { slug: "rbac", term: "RBAC", definition: "Role-based access control: assigning permissions to roles and users to roles.", explanation: "Permissions must be enforced on the server, and scoped to the organisation in multi-tenant software.", example: "Only users with the 'approver' role can approve purchase requests.", related: ["SaaS"], relevance: { label: "What is RBAC?", href: "/insights/what-is-rbac" } },
  { slug: "saas", term: "SaaS", definition: "Software as a service: software that many customer organisations use through a subscription, from one shared platform.", explanation: "SaaS requires data separation between customers, organisation and user management, and billing.", example: "A scheduling platform used by hundreds of clinics, each seeing only its own data.", related: ["RBAC", "MVP"], relevance: { label: "SaaS Development", href: "/studio/saas-development" } },
  { slug: "workflow-automation", term: "Workflow automation", definition: "Software that moves work through a defined sequence of steps using triggers, conditions and actions.", explanation: "It removes manual chasing between steps, with approvals and exception handling designed in.", example: "A new enquiry is validated, classified, assigned and escalated if unanswered.", related: ["Business automation"], relevance: { label: "Workflow Automation", href: "/business-ai/workflow-automation" } },
];
