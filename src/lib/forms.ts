/**
 * Enquiry form definitions. Shared by the client form (rendering + native validation)
 * and the /api/enquiry route (server-side validation), so the two can never drift.
 */
export type FieldType = "text" | "email" | "url" | "tel" | "textarea" | "select" | "radio";

export type FieldDef = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  description?: string;
  options?: string[];
  autoComplete?: string;
  maxLength?: number;
  /** Render at full width in the two-column grid. */
  wide?: boolean;
};

export type FormDef = {
  intent: string;
  title: string;
  intro: string;
  submitLabel: string;
  /** Shown after a successful submission: what happens next. */
  nextSteps: string;
  /** Outcome event recorded on submit (never includes field contents). */
  startEvent: "consultation_start" | "project_enquiry_start" | "professional_interest" | "employer_interest" | "form_started";
  submitEvent: "consultation_submit" | "project_enquiry_submit" | "professional_interest" | "employer_interest" | "form_completed";
  fields: FieldDef[];
};

const name: FieldDef = { name: "name", label: "Name", type: "text", required: true, autoComplete: "name", maxLength: 120 };
const email: FieldDef = { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", maxLength: 200 };
const workEmail: FieldDef = { ...email, label: "Work email" };
const organization: FieldDef = { name: "organization", label: "Organisation", type: "text", required: true, autoComplete: "organization", maxLength: 200 };
const message: FieldDef = { name: "message", label: "Anything else we should know?", type: "textarea", maxLength: 3000, wide: true };

export const industriesOptions = ["Logistics", "Real Estate", "Financial Services", "Healthcare", "Education", "Retail", "Procurement", "Professional Services", "Other"];

export const forms: Record<string, FormDef> = {
  business: {
    intent: "business",
    title: "Discuss your business",
    intro: "Tell us where work is slowing down. A few details are enough to start; we will ask for more if it helps.",
    submitLabel: "Send enquiry",
    nextSteps: "A member of the DigitalBurj Business AI team will review your enquiry and reply by your preferred contact method, usually to arrange a short conversation about the process involved.",
    startEvent: "consultation_start",
    submitEvent: "consultation_submit",
    fields: [
      name,
      workEmail,
      organization,
      { name: "website", label: "Website", type: "url", autoComplete: "url", description: "Include https://", maxLength: 300 },
      { name: "industry", label: "Industry", type: "select", required: true, options: industriesOptions },
      { name: "companySize", label: "Company size", type: "select", required: true, options: ["1–10", "11–50", "51–200", "201–1,000", "1,000+"] },
      { name: "problem", label: "What is the main problem?", type: "textarea", required: true, wide: true, maxLength: 3000, description: "For example: enquiries are answered slowly, documents are re-typed, reports take a day to prepare." },
      { name: "systems", label: "Which systems do you use today?", type: "text", wide: true, maxLength: 500, description: "For example: CRM, accounting software, WhatsApp, spreadsheets." },
      { name: "outcome", label: "What would a good outcome look like?", type: "textarea", wide: true, maxLength: 2000 },
      { name: "contactMethod", label: "Preferred contact method", type: "radio", required: true, options: ["Email", "Phone", "WhatsApp"] },
      { name: "phone", label: "Phone or WhatsApp number", type: "tel", autoComplete: "tel", maxLength: 40, description: "Only needed if you prefer phone or WhatsApp." },
      message,
    ],
  },
  studio: {
    intent: "studio",
    title: "Start a project",
    intro: "Describe what you want to build. We will start by understanding the problem and whether it should be built.",
    submitLabel: "Send project enquiry",
    nextSteps: "DigitalBurj Studio will review your project and reply by email, usually to arrange a discovery conversation. If a validation stage would help, we will say so.",
    startEvent: "project_enquiry_start",
    submitEvent: "project_enquiry_submit",
    fields: [
      name,
      email,
      { ...organization, required: false },
      { name: "build", label: "What are you trying to build?", type: "textarea", required: true, wide: true, maxLength: 3000 },
      { name: "stage", label: "Current stage", type: "radio", required: true, options: ["Idea", "Existing MVP", "Existing application", "Replacement / modernization"], wide: true },
      { name: "users", label: "Who are the target users?", type: "text", required: true, wide: true, maxLength: 500 },
      { name: "functionality", label: "Most important functionality", type: "textarea", wide: true, maxLength: 2000 },
      { name: "timeline", label: "Approximate timeline", type: "select", options: ["Exploring", "Within 3 months", "3–6 months", "6+ months"] },
      { name: "budget", label: "Budget range", type: "select", options: ["Not yet defined", "Under $25k", "$25k–$75k", "$75k–$200k", "$200k+"] },
      { name: "documentLink", label: "Link to a supporting document", type: "url", wide: true, maxLength: 500, description: "A shared link to a brief, deck or specification." },
    ],
  },
  academy: {
    intent: "academy",
    title: "Academy enquiry",
    intro: "Tell us what you want to learn. We will let you know about suitable courses and when enrollment opens.",
    submitLabel: "Register interest",
    nextSteps: "DigitalBurj Academy will email you about relevant courses and learning paths. You can ask us to stop at any time.",
    startEvent: "form_started",
    submitEvent: "form_completed",
    fields: [
      name,
      email,
      { name: "area", label: "Area of interest", type: "select", required: true, options: ["Software Development", "Artificial Intelligence", "Data", "Cybersecurity", "Business & Product", "Accounting & Finance", "Office Administration", "Logistics", "Real Estate", "Human Resources", "Sales & Marketing", "Team training"] },
      { name: "level", label: "Current level", type: "select", required: true, options: ["Beginner", "Some experience", "Working in the field"] },
      message,
    ],
  },
  talent: {
    intent: "talent",
    title: "Verified Talent: register interest",
    intro: "Verified Talent is in development. Register to be among the first professionals we contact.",
    submitLabel: "Register interest",
    nextSteps: "We will email you when Verified Talent features become available. Registering does not create a public profile.",
    startEvent: "professional_interest",
    submitEvent: "professional_interest",
    fields: [
      name,
      email,
      { name: "role", label: "Your role or profession", type: "text", required: true, maxLength: 200 },
      { name: "skills", label: "Key skills you would like to evidence", type: "textarea", wide: true, maxLength: 2000 },
      message,
    ],
  },
  hire: {
    intent: "hire",
    title: "Hire or find talent",
    intro: "Tell us what capability you hire for. We will explain how DigitalBurj Jobs and Verified Talent can help.",
    submitLabel: "Send employer enquiry",
    nextSteps: "The DigitalBurj Talent team will reply by email. DigitalBurj facilitates recruitment; hiring decisions remain yours.",
    startEvent: "employer_interest",
    submitEvent: "employer_interest",
    fields: [
      name,
      workEmail,
      organization,
      { name: "roles", label: "Roles you hire for", type: "text", required: true, wide: true, maxLength: 500 },
      { name: "capability", label: "Capabilities you need to see evidence of", type: "textarea", wide: true, maxLength: 2000 },
      message,
    ],
  },
  jobs: {
    intent: "jobs",
    title: "Jobs: register interest",
    intro: "Tell us what kind of role you are looking for. We will contact you when genuine opportunities that match are listed.",
    submitLabel: "Register interest",
    nextSteps: "We will email you when matching opportunities are published. DigitalBurj does not charge job seekers and does not guarantee employment or visas.",
    startEvent: "professional_interest",
    submitEvent: "professional_interest",
    fields: [
      name,
      email,
      { name: "targetRole", label: "Target role", type: "text", required: true, maxLength: 200 },
      { name: "location", label: "Preferred location or remote", type: "text", maxLength: 200 },
      message,
    ],
  },
  partnership: {
    intent: "partnership",
    title: "Partnership enquiry",
    intro: "Tell us about your organisation and the partnership you have in mind.",
    submitLabel: "Send enquiry",
    nextSteps: "The appropriate DigitalBurj team will review your enquiry and reply by email.",
    startEvent: "form_started",
    submitEvent: "form_completed",
    fields: [name, workEmail, organization, { name: "proposal", label: "What partnership do you have in mind?", type: "textarea", required: true, wide: true, maxLength: 3000 }],
  },
  contact: {
    intent: "contact",
    title: "Contact DigitalBurj",
    intro: "Choose a topic so your message reaches the right team.",
    submitLabel: "Send message",
    nextSteps: "Your message has been routed to the team responsible for this topic, who will reply by email.",
    startEvent: "form_started",
    submitEvent: "form_completed",
    fields: [
      name,
      email,
      { ...organization, required: false },
      { name: "topic", label: "Topic", type: "select", required: true, options: ["General enquiry", "Business AI", "Studio", "Academy", "Verified Talent", "Jobs", "Partnership", "Media", "Support"] },
      { name: "message", label: "Message", type: "textarea", required: true, wide: true, maxLength: 4000 },
    ],
  },
};
