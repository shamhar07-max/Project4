import { businessAiPages } from "./business-ai";
import { studioPages } from "./studio";
import { talentPages, jobsPages } from "./talent-jobs";
import { solutionPages, industryPages } from "./solutions-industries";
import { companyPages } from "./company";
import { academyCategories, learningPaths, tracks } from "./academy";
import { articles, insightCategories } from "./insights";
import { resources, resourceCategories } from "./resources";
import { projects } from "./portfolio";
import type { ContentPage } from "./types";
import type { NavLink } from "@/lib/site";

export type Section = "Company" | "Business AI" | "Academy" | "Studio" | "Verified Talent" | "Jobs" | "Solutions" | "Industries" | "Portfolio" | "Insights" | "Resources" | "Utility";

export type RouteEntry = { path: string; title: string; section: Section; indexable: boolean };

export const contentCollections: { base: string; section: Section; pages: ContentPage[] }[] = [
  { base: "/business-ai", section: "Business AI", pages: businessAiPages },
  { base: "/studio", section: "Studio", pages: studioPages },
  { base: "/talent", section: "Verified Talent", pages: talentPages },
  { base: "/jobs", section: "Jobs", pages: jobsPages },
  { base: "/solutions", section: "Solutions", pages: solutionPages },
  { base: "/industries", section: "Industries", pages: industryPages },
  { base: "/company", section: "Company", pages: companyPages },
];

export const getStartedIntents = ["business", "studio", "academy", "talent", "hire", "jobs", "partnership"] as const;

const staticRoutes: RouteEntry[] = [
  { path: "/", title: "Home", section: "Company", indexable: true },
  { path: "/company", title: "Company", section: "Company", indexable: true },
  { path: "/business-ai", title: "Business AI", section: "Business AI", indexable: true },
  { path: "/academy", title: "Academy", section: "Academy", indexable: true },
  { path: "/academy/courses", title: "All Courses", section: "Academy", indexable: true },
  { path: "/academy/learning-paths", title: "Learning Paths", section: "Academy", indexable: true },
  { path: "/academy/career-bundles", title: "Career Bundles", section: "Academy", indexable: false },
  { path: "/studio", title: "Studio", section: "Studio", indexable: true },
  { path: "/talent", title: "Verified Talent", section: "Verified Talent", indexable: true },
  { path: "/jobs", title: "Jobs", section: "Jobs", indexable: true },
  { path: "/solutions", title: "Solutions", section: "Solutions", indexable: true },
  { path: "/industries", title: "Industries", section: "Industries", indexable: true },
  { path: "/portfolio", title: "Portfolio", section: "Portfolio", indexable: true },
  { path: "/insights", title: "Insights", section: "Insights", indexable: true },
  { path: "/resources", title: "Resources", section: "Resources", indexable: true },
  { path: "/resources/glossary", title: "Glossary", section: "Resources", indexable: true },
  { path: "/get-started", title: "Get Started", section: "Utility", indexable: true },
  { path: "/contact", title: "Contact", section: "Utility", indexable: true },
  { path: "/privacy", title: "Privacy Policy", section: "Utility", indexable: true },
  { path: "/terms", title: "Terms of Use", section: "Utility", indexable: true },
  { path: "/cookies", title: "Cookie Policy", section: "Utility", indexable: true },
  { path: "/sitemap", title: "Sitemap", section: "Utility", indexable: true },
];

const intentTitles: Record<(typeof getStartedIntents)[number], string> = {
  business: "Improve My Business",
  studio: "Start a Project",
  academy: "Academy Enquiry",
  talent: "Verified Talent Interest",
  hire: "Hire or Find Talent",
  jobs: "Jobs Interest",
  partnership: "Partnership Enquiry",
};

export function intentTitle(intent: string) {
  return intentTitles[intent as keyof typeof intentTitles];
}

export function allRoutes(): RouteEntry[] {
  const routes: RouteEntry[] = [...staticRoutes];
  for (const c of contentCollections) {
    for (const p of c.pages) {
      routes.push({ path: `${c.base}/${p.slug}`, title: p.label, section: c.section, indexable: p.indexable !== false });
    }
  }
  for (const cat of academyCategories) {
    routes.push({ path: `/academy/${cat.slug}`, title: cat.title, section: "Academy", indexable: cat.indexable });
  }
  for (const t of tracks) {
    routes.push({ path: `/academy/courses/${t.slug}`, title: t.title, section: "Academy", indexable: true });
  }
  for (const lp of learningPaths) {
    routes.push({ path: `/academy/learning-paths/${lp.slug}`, title: `${lp.title} Learning Path`, section: "Academy", indexable: lp.indexable });
  }
  for (const c of insightCategories) {
    routes.push({ path: `/insights/${c.slug}`, title: c.title, section: "Insights", indexable: true });
  }
  for (const a of articles) {
    routes.push({ path: `/insights/${a.slug}`, title: a.title, section: "Insights", indexable: true });
  }
  for (const rc of resourceCategories) {
    const hasItems = rc.slug === "guides" || resources.some((r) => r.category === rc.slug);
    routes.push({ path: `/resources/${rc.slug}`, title: rc.title, section: "Resources", indexable: hasItems });
  }
  for (const r of resources) {
    routes.push({ path: `/resources/${r.category}/${r.slug}`, title: r.title, section: "Resources", indexable: true });
  }
  for (const p of projects) {
    routes.push({ path: `/portfolio/${p.slug}`, title: p.name, section: "Portfolio", indexable: p.verified });
  }
  for (const i of getStartedIntents) {
    routes.push({ path: `/get-started/${i}`, title: intentTitles[i], section: "Utility", indexable: false });
  }
  return routes;
}

let cache: Map<string, RouteEntry> | null = null;

export function routeByPath(path: string) {
  if (!cache) cache = new Map(allRoutes().map((r) => [r.path, r]));
  return cache.get(path.split("#")[0]);
}

/** Resolve internal hrefs to labelled links. Throws in development if a link has no page. */
export function resolveLinks(hrefs: string[] = []): NavLink[] {
  return hrefs.map((href) => {
    const r = routeByPath(href);
    if (!r) throw new Error(`Unknown internal link: ${href}`);
    return { href, label: r.title, description: r.section };
  });
}
