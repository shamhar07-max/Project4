/**
 * Search index for the on-site AI guide and the command palette.
 * Built from the same content files as the pages, so every answer quotes a real page.
 * Served statically at /search-index.json.
 */
import { allRoutes, contentCollections, type Section } from "@/content/registry";
import { academyCategories, learningPaths, tracks } from "@/content/academy";
import { articles } from "@/content/insights";
import { glossary, resources } from "@/content/resources";

export type IndexEntry = { path: string; title: string; section: Section | "Glossary"; summary: string };

const hubSummaries: Record<string, string> = {
  "/": "DigitalBurj automates business operations, builds software, runs hands-on tech training and helps employers hire on real work.",
  "/business-ai": "We find where your team loses time, cut the steps that don't need to exist, and automate what's left. You see the before and after numbers.",
  "/studio": "We build web apps, SaaS products and internal tools for businesses and founders, starting with whether anyone needs the thing.",
  "/academy": "Technology courses built around projects. You build it, we break it, you fix it, then you explain it to a reviewer.",
  "/academy/courses": "Every Academy track ends with a project and a review. Durations and prices go on each course page when enrolment opens.",
  "/academy/learning-paths": "Academy tracks in a sensible order for a particular kind of role.",
  "/talent": "Verified Talent profiles will link each skill to the work behind it and say how it was checked. It's in development.",
  "/jobs": "Real vacancies with a named employer and a closing date. Candidates can attach projects they've built. No open listings right now.",
  "/solutions": "Start from the problem you've got. Each solution page says how to spot it and what we'd do about it.",
  "/industries": "The day-to-day problems in each sector, and where we can help with them.",
  "/portfolio": "Projects DigitalBurj is building or running. Details go up once they're confirmed.",
  "/insights": "Guides and articles on AI, business systems, software, learning and careers.",
  "/resources": "Checklists and templates we use ourselves, free to use.",
  "/resources/glossary": "Plain definitions of the terms used across the site.",
  "/contact": "Send a message, or pick a dedicated form so the right person replies.",
  "/get-started": "Choose what you want to do and we'll take you to the right form.",
  "/company": "Who DigitalBurj is and how we work.",
};

export function buildSiteIndex(): IndexEntry[] {
  const summaries = new Map<string, string>(Object.entries(hubSummaries));
  for (const c of contentCollections) for (const p of c.pages) summaries.set(`${c.base}/${p.slug}`, p.answer);
  for (const c of academyCategories) summaries.set(`/academy/${c.slug}`, c.answer);
  for (const t of tracks) summaries.set(`/academy/courses/${t.slug}`, `${t.summary} For: ${t.forWho}`);
  for (const l of learningPaths) summaries.set(`/academy/learning-paths/${l.slug}`, `${l.overview} For: ${l.forWho}`);
  for (const a of articles) summaries.set(`/insights/${a.slug}`, a.answer);
  for (const r of resources) summaries.set(`/resources/${r.category}/${r.slug}`, r.intro);

  const entries: IndexEntry[] = allRoutes()
    .filter((r) => r.indexable && summaries.has(r.path))
    .map((r) => ({ path: r.path, title: r.title, section: r.section, summary: summaries.get(r.path)! }));
  for (const g of glossary) {
    entries.push({ path: `/resources/glossary#${g.slug}`, title: g.term, section: "Glossary", summary: g.definition });
  }
  return entries;
}
