/**
 * Announcements, the offer popup and timed notifications.
 *
 * OWNER TO CONFIRM BEFORE LAUNCH: these offers are commitments the business must honour.
 * Keep them to things DigitalBurj actually provides. No invented discounts, deadlines,
 * scarcity ("only 3 left") or fake activity ("Ahmed just booked").
 */

export type Announcement = { id: string; text: string; cta: string; href: string };

export const announcements: Announcement[] = [
  { id: "review", text: "Free 30-minute process review for your first workflow.", cta: "Book yours", href: "/get-started/business" },
  { id: "academy", text: "Academy enrolment opens soon. Join the early list.", cta: "Join the list", href: "/get-started/academy" },
  { id: "studio", text: "Have a product idea? Talk it through on a free validation call.", cta: "Book a call", href: "/get-started/studio" },
];

export const offer = {
  id: "process-review-v1",
  eyebrow: "Offer",
  title: "Free 30-minute process review",
  body: "Tell us about one process that eats your team's time. We'll map it with you and tell you honestly whether automation would help. No obligation.",
  cta: { label: "Book a review", href: "/get-started/business" },
  /** Seconds on a page before the popup shows (it can also show on exit intent). */
  delay: 25,
  /** Days before the popup can show again after being closed. */
  snoozeDays: 3,
};

export type Nudge = { id: string; after: number; title: string; body: string; action: { label: string; href: string } };

export const nudges: Nudge[] = [
  {
    id: "guide-automate",
    after: 15,
    title: "New guide",
    body: "When should a company automate a workflow?",
    action: { label: "Read it", href: "/insights/when-should-a-company-automate-a-workflow" },
  },
  {
    id: "checklist",
    after: 55,
    title: "Free checklist",
    body: "Is your process ready to automate? Check in five minutes.",
    action: { label: "Open checklist", href: "/resources/checklists/business-automation-readiness" },
  },
];

/** Pages where popups and nudges stay out of the way. */
export const quietPaths = ["/get-started", "/contact", "/privacy", "/terms", "/cookies", "/credits"];
