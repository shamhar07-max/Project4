/**
 * Client-side search over /search-index.json. Plain keyword ranking with a small
 * synonym map. Nothing typed is sent anywhere.
 */
import type { IndexEntry } from "./site-index";

export type { IndexEntry };

let loading: Promise<IndexEntry[]> | null = null;

export function loadIndex(): Promise<IndexEntry[]> {
  if (!loading) {
    loading = fetch("/search-index.json")
      .then((r) => (r.ok ? (r.json() as Promise<IndexEntry[]>) : []))
      .catch(() => {
        loading = null;
        return [];
      });
  }
  return loading;
}

const stop = new Set(
  "a an the and or of to in on for with is are be can do does i we you my our your me how what which who when where why it this that at by from as about want need get any".split(" "),
);

const synonyms: Record<string, string[]> = {
  automate: ["automation", "workflow"],
  automation: ["automate", "workflow"],
  bot: ["agent", "chatbot"],
  chatbot: ["agent", "customer", "service"],
  whatsapp: ["customer service", "crm", "enquiry"],
  enquiries: ["enquiry", "customer service", "crm"],
  leads: ["crm", "sales", "enquiry"],
  lead: ["crm", "sales", "enquiry"],
  course: ["academy", "track", "learning"],
  courses: ["academy", "track", "learning"],
  learn: ["academy", "course", "track"],
  train: ["academy", "training"],
  training: ["academy", "course"],
  app: ["studio", "application", "software"],
  website: ["web", "studio", "application"],
  build: ["studio", "software", "development"],
  mvp: ["studio", "validation"],
  saas: ["studio", "product"],
  hire: ["talent", "employers", "jobs"],
  hiring: ["talent", "employers", "jobs"],
  job: ["jobs", "vacancies", "seekers"],
  jobs: ["job", "seekers", "vacancies"],
  cv: ["resume", "career"],
  resume: ["cv", "career"],
  invoice: ["document", "documents"],
  invoices: ["document", "documents"],
  paperwork: ["document", "documents"],
  report: ["reporting", "data"],
  reports: ["reporting", "data"],
  price: ["contact", "enquiry"],
  pricing: ["contact", "enquiry"],
  cost: ["contact", "enquiry"],
  ai: ["ai", "agent", "automation"],
};

function tokens(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !stop.has(t));
}

export function search(query: string, index: IndexEntry[], limit = 5): IndexEntry[] {
  const base = tokens(query);
  if (!base.length) return [];
  const terms = new Map<string, number>();
  for (const t of base) {
    terms.set(t, 1);
    for (const s of synonyms[t] ?? []) if (!terms.has(s)) terms.set(s, 0.4);
  }
  const scored = index.map((e) => {
    const title = e.title.toLowerCase();
    const section = e.section.toLowerCase();
    const summary = e.summary.toLowerCase();
    let score = 0;
    for (const [t, w] of terms) {
      if (title.includes(t)) score += 4 * w;
      if (section.includes(t)) score += 1.5 * w;
      if (summary.includes(t)) score += 1 * w;
    }
    if (title === query.trim().toLowerCase()) score += 6;
    // Reward pages that cover more of the words actually typed.
    const hay = `${title} ${section} ${summary}`;
    const covered = base.filter((t) => hay.includes(t) || (synonyms[t] ?? []).some((s) => hay.includes(s))).length;
    score *= 0.6 + (0.8 * covered) / base.length;
    if (e.section === "Insights") score -= 0.5;
    // Prefer hub and service pages over glossary entries when scores tie.
    if (e.section === "Glossary") score -= 0.3;
    return { e, score };
  });
  return scored
    .filter((x) => x.score > 0.9)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.e);
}

/** Where to send someone who wants to act on the best match. */
export function nextStepFor(entry: IndexEntry): { label: string; href: string } {
  switch (entry.section) {
    case "Business AI":
    case "Solutions":
    case "Industries":
      return { label: "Discuss your business", href: "/get-started/business" };
    case "Studio":
    case "Portfolio":
      return { label: "Start a project", href: "/get-started/studio" };
    case "Academy":
      return { label: "Hear when enrolment opens", href: "/get-started/academy" };
    case "Verified Talent":
      return { label: "Register interest", href: "/get-started/talent" };
    case "Jobs":
      return { label: "Register for job alerts", href: "/get-started/jobs" };
    default:
      return { label: "Talk to us", href: "/contact" };
  }
}
