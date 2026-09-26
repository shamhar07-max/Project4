/**
 * Single source of truth for the DigitalBurj entity.
 * Keep names and the canonical description identical everywhere (GEO / entity consistency).
 */
export const site = {
  name: "DigitalBurj",
  url: "https://digitalburj.com",
  tagline: "Learn. Build. Transform.",
  /** Canonical one-sentence definition. Reuse verbatim; do not paraphrase per page. */
  description:
    "DigitalBurj is a technology company combining Business AI, practical education, software engineering, verified professional capability and employment infrastructure.",
  logo: "/brand/02_LOGO_LOCKUPS/DigitalBurj_Primary_Wordmark.png",
  ogImage: "/brand/05_WEB_SOCIAL/OpenGraph_1200x630.png",
  locale: "en",
} as const;

/** Official product names. Do not introduce variants such as "DB Academy". */
export const pillars = {
  businessAi: { name: "DigitalBurj Business AI", short: "Business AI", href: "/business-ai" },
  academy: { name: "DigitalBurj Academy", short: "Academy", href: "/academy" },
  studio: { name: "DigitalBurj Studio", short: "Studio", href: "/studio" },
  talent: { name: "DigitalBurj Verified Talent", short: "Verified Talent", href: "/talent" },
  jobs: { name: "DigitalBurj Jobs", short: "Jobs", href: "/jobs" },
} as const;

export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = { heading?: string; links: NavLink[] };
export type NavItem = {
  label: string;
  href: string;
  title: string;
  summary: string;
  groups: NavGroup[];
  cta: NavLink;
};

export const mainNav: NavItem[] = [
  {
    label: "Business",
    href: "/business-ai",
    title: "Business AI",
    summary: "Fix the process. Then automate it.",
    groups: [
      {
        heading: "Business AI",
        links: [
          { label: "Overview", href: "/business-ai" },
          { label: "AI Automation", href: "/business-ai/ai-automation" },
          { label: "AI Agents", href: "/business-ai/ai-agents" },
          { label: "Workflow Automation", href: "/business-ai/workflow-automation" },
          { label: "Business Process Automation", href: "/business-ai/business-process-automation" },
          { label: "CRM Automation", href: "/business-ai/crm-automation" },
          { label: "Sales Automation", href: "/business-ai/sales-automation" },
          { label: "Customer Service Automation", href: "/business-ai/customer-service-automation" },
          { label: "Document Automation", href: "/business-ai/document-automation" },
          { label: "Enterprise AI", href: "/business-ai/enterprise-ai" },
          { label: "Digital Transformation", href: "/business-ai/digital-transformation" },
        ],
      },
      {
        heading: "Popular solutions",
        links: [
          { label: "Automate repetitive work", href: "/solutions/workflow-automation" },
          { label: "Improve customer response", href: "/business-ai/customer-service-automation" },
          { label: "Connect business systems", href: "/business-ai/business-systems" },
          { label: "Automate documents", href: "/solutions/document-automation" },
          { label: "Use AI safely in operations", href: "/company/responsible-ai" },
        ],
      },
    ],
    cta: { label: "Explore Business AI", href: "/business-ai" },
  },
  {
    label: "Academy",
    href: "/academy",
    title: "Academy",
    summary: "Learn it. Apply it. Prove it.",
    groups: [
      {
        heading: "Technology",
        links: [
          { label: "Software Development", href: "/academy/software-development" },
          { label: "Artificial Intelligence", href: "/academy/artificial-intelligence" },
          { label: "Data", href: "/academy/data" },
          { label: "Cybersecurity", href: "/academy/cybersecurity" },
        ],
      },
      {
        heading: "Professional",
        links: [
          { label: "Accounting & Finance", href: "/academy/accounting-finance" },
          { label: "Office Administration", href: "/academy/office-administration" },
          { label: "Logistics", href: "/academy/logistics" },
          { label: "Real Estate", href: "/academy/real-estate" },
          { label: "Human Resources", href: "/academy/human-resources" },
          { label: "Sales & Marketing", href: "/academy/sales-marketing" },
        ],
      },
      {
        heading: "Explore",
        links: [
          { label: "All Courses", href: "/academy/courses" },
          { label: "Career Bundles", href: "/academy/career-bundles" },
          { label: "Learning Paths", href: "/academy/learning-paths" },
          { label: "How Learning Works", href: "/academy#how-learning-works" },
        ],
      },
    ],
    cta: { label: "Explore Academy", href: "/academy" },
  },
  {
    label: "Studio",
    href: "/studio",
    title: "Studio",
    summary: "Build what deserves to exist.",
    groups: [
      {
        heading: "Studio",
        links: [
          { label: "Software Development", href: "/studio/software-development" },
          { label: "Web Applications", href: "/studio/web-app-development" },
          { label: "Mobile Applications", href: "/studio/mobile-app-development" },
          { label: "SaaS Development", href: "/studio/saas-development" },
          { label: "MVP Development", href: "/studio/mvp-development" },
          { label: "Enterprise Software", href: "/studio/enterprise-software" },
          { label: "AI Products", href: "/studio/ai-product-development" },
          { label: "API Development", href: "/studio/api-development" },
          { label: "System Integration", href: "/studio/system-integration" },
        ],
      },
      {
        heading: "Discover",
        links: [
          { label: "Product Validation", href: "/studio/product-validation" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "How We Work", href: "/company/how-we-work" },
          { label: "Start a Project", href: "/get-started/studio" },
        ],
      },
    ],
    cta: { label: "Explore Studio", href: "/studio" },
  },
  {
    label: "Talent",
    href: "/talent",
    title: "Verified Talent",
    summary: "Capability backed by evidence.",
    groups: [
      {
        heading: "Verified Talent",
        links: [
          { label: "Overview", href: "/talent" },
          { label: "For Professionals", href: "/talent/for-professionals" },
          { label: "For Employers", href: "/talent/for-employers" },
          { label: "Verified Skills", href: "/talent/verified-skills" },
          { label: "Capability Passport", href: "/talent/capability-passport" },
          { label: "Evidence", href: "/talent/evidence" },
          { label: "Assessment", href: "/talent/assessment" },
          { label: "How Verification Works", href: "/talent/how-verification-works" },
        ],
      },
    ],
    cta: { label: "Explore Verified Talent", href: "/talent" },
  },
  {
    label: "Jobs",
    href: "/jobs",
    title: "Jobs",
    summary: "Connect capability to opportunity.",
    groups: [
      {
        heading: "Jobs",
        links: [
          { label: "Find Jobs", href: "/jobs/find-jobs" },
          { label: "For Job Seekers", href: "/jobs/for-job-seekers" },
          { label: "For Employers", href: "/jobs/for-employers" },
        ],
      },
      {
        heading: "Career resources",
        links: [
          { label: "Career Guides", href: "/jobs/career-resources" },
          { label: "Interview Preparation", href: "/jobs/interview-preparation" },
          { label: "CV Guide", href: "/jobs/cv-guide" },
          { label: "Skills Guide", href: "/jobs/skills-guide" },
        ],
      },
    ],
    cta: { label: "Explore Jobs", href: "/jobs" },
  },
  {
    label: "Insights",
    href: "/insights",
    title: "Insights",
    summary: "Original thinking on AI, software, learning and careers.",
    groups: [
      {
        heading: "Insights",
        links: [
          { label: "All insights", href: "/insights" },
          { label: "Artificial Intelligence", href: "/insights/ai" },
          { label: "Business Systems", href: "/insights/business" },
          { label: "Software Engineering", href: "/insights/software" },
          { label: "Education", href: "/insights/education" },
          { label: "Careers", href: "/insights/careers" },
          { label: "Industries", href: "/insights/industries" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Guides", href: "/resources/guides" },
          { label: "Templates", href: "/resources/templates" },
          { label: "Checklists", href: "/resources/checklists" },
          { label: "Glossary", href: "/resources/glossary" },
        ],
      },
    ],
    cta: { label: "Read Insights", href: "/insights" },
  },
];

export const companyNav: NavItem = {
  label: "Company",
  href: "/company",
  title: "Company",
  summary: "Who we are and how we work.",
  groups: [
    {
      heading: "Company",
      links: [
        { label: "About", href: "/company/about" },
        { label: "Leadership", href: "/company/leadership" },
        { label: "How We Work", href: "/company/how-we-work" },
        { label: "Engineering Principles", href: "/company/engineering-principles" },
        { label: "Responsible AI", href: "/company/responsible-ai" },
        { label: "Security", href: "/company/security" },
        { label: "Careers", href: "/company/careers" },
      ],
    },
    {
      heading: "Explore",
      links: [
        { label: "Solutions", href: "/solutions" },
        { label: "Industries", href: "/industries" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Resources", href: "/resources" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  cta: { label: "About DigitalBurj", href: "/company/about" },
};

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Business AI",
    links: [
      { label: "Overview", href: "/business-ai" },
      { label: "AI Automation", href: "/business-ai/ai-automation" },
      { label: "AI Agents", href: "/business-ai/ai-agents" },
      { label: "Workflow Automation", href: "/business-ai/workflow-automation" },
      { label: "CRM Automation", href: "/business-ai/crm-automation" },
      { label: "Document Automation", href: "/business-ai/document-automation" },
    ],
  },
  {
    heading: "Academy",
    links: [
      { label: "Overview", href: "/academy" },
      { label: "All Courses", href: "/academy/courses" },
      { label: "Learning Paths", href: "/academy/learning-paths" },
      { label: "Career Bundles", href: "/academy/career-bundles" },
      { label: "Software Development", href: "/academy/software-development" },
      { label: "Logistics", href: "/academy/logistics" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { label: "Overview", href: "/studio" },
      { label: "Software Development", href: "/studio/software-development" },
      { label: "SaaS Development", href: "/studio/saas-development" },
      { label: "MVP Development", href: "/studio/mvp-development" },
      { label: "Product Validation", href: "/studio/product-validation" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    heading: "Talent & Jobs",
    links: [
      { label: "Verified Talent", href: "/talent" },
      { label: "Capability Passport", href: "/talent/capability-passport" },
      { label: "How Verification Works", href: "/talent/how-verification-works" },
      { label: "Jobs", href: "/jobs" },
      { label: "For Employers", href: "/jobs/for-employers" },
      { label: "Career Resources", href: "/jobs/career-resources" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "Solutions", href: "/solutions" },
      { label: "Industries", href: "/industries" },
      { label: "Insights", href: "/insights" },
      { label: "Resources", href: "/resources" },
      { label: "Glossary", href: "/resources/glossary" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "How We Work", href: "/company/how-we-work" },
      { label: "Responsible AI", href: "/company/responsible-ai" },
      { label: "Security", href: "/company/security" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "Sitemap", href: "/sitemap" },
];
