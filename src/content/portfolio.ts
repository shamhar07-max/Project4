/**
 * DigitalBurj portfolio.
 *
 * Only names and sectors confirmed in the DigitalBurj source material are published.
 * Descriptions, status, architecture and screenshots must be supplied and verified by
 * DigitalBurj before a project page is indexed (verified: true). Never add customer counts,
 * revenue, transaction volume, partnerships or traction that has not been verified.
 */
export type Project = {
  slug: string;
  name: string;
  /** Sector as confirmed in source material; null when not yet confirmed. */
  sector: string | null;
  filter: string | null;
  summary: string;
  status: string;
  relatedCapabilities: { label: string; href: string }[];
  verified: boolean;
};

export const portfolioFilters = ["Logistics", "FinTech", "Healthcare", "Procurement", "Documents", "Education", "Commerce", "Tourism", "Workforce", "Resilience"];

export const projects: Project[] = [
  {
    slug: "loadbyton",
    name: "LoadByTon",
    sector: "Logistics",
    filter: "Logistics",
    summary: "A DigitalBurj logistics venture and software platform.",
    status: "Project details are being prepared for publication.",
    relatedCapabilities: [
      { label: "Software Development", href: "/studio/software-development" },
      { label: "Logistics", href: "/industries/logistics" },
    ],
    verified: false,
  },
  {
    slug: "attesora",
    name: "Attesora",
    sector: "Documents",
    filter: "Documents",
    summary: "A DigitalBurj document platform venture.",
    status: "Project details are being prepared for publication.",
    relatedCapabilities: [
      { label: "Document Automation", href: "/business-ai/document-automation" },
      { label: "Document Systems learning", href: "/academy/courses/document-systems" },
    ],
    verified: false,
  },
  {
    slug: "procurazo",
    name: "Procurazo",
    sector: "Procurement",
    filter: "Procurement",
    summary: "A DigitalBurj procurement venture.",
    status: "Project details are being prepared for publication.",
    relatedCapabilities: [
      { label: "Procurement", href: "/industries/procurement" },
      { label: "Workflow Automation", href: "/business-ai/workflow-automation" },
    ],
    verified: false,
  },
  {
    slug: "veloztrade",
    name: "VelozTrade",
    sector: null,
    filter: null,
    summary: "A DigitalBurj venture.",
    status: "Project details are being prepared for publication.",
    relatedCapabilities: [{ label: "Studio", href: "/studio" }],
    verified: false,
  },
  {
    slug: "hospyq",
    name: "HospyQ",
    sector: null,
    filter: null,
    summary: "A DigitalBurj venture.",
    status: "Project details are being prepared for publication.",
    relatedCapabilities: [{ label: "Studio", href: "/studio" }],
    verified: false,
  },
];

/** Fields every published project page should eventually contain (portfolio detail template). */
export const projectTemplateSections = [
  "Background",
  "Problem",
  "Who the product serves",
  "System objective",
  "Core workflows",
  "Architecture overview",
  "Engineering challenges",
  "Technology approach",
  "Security and reliability considerations",
  "Screens and diagrams",
  "Current status",
  "Lessons",
];
