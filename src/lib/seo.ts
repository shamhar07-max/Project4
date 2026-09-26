import type { Metadata } from "next";
import { site } from "./site";

type MetaInput = {
  /** Page topic, without the " | DigitalBurj" suffix (added by the root layout template). */
  title: string;
  description: string;
  path: string;
  /** Use the title exactly as given (homepage, or titles that already lead with the brand). */
  absoluteTitle?: boolean;
  noindex?: boolean;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${site.url}${path === "/" ? "" : path}`;
}

export function buildMetadata(input: MetaInput): Metadata {
  const url = absoluteUrl(input.path);
  const fullTitle = input.absoluteTitle ? input.title : `${input.title} | ${site.name}`;
  const image = input.ogImage ?? site.ogImage;
  return {
    title: input.absoluteTitle ? { absolute: input.title } : input.title,
    description: input.description,
    alternates: { canonical: url },
    robots: input.noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: input.type ?? "website",
      url,
      siteName: site.name,
      title: fullTitle,
      description: input.description,
      locale: "en",
      images: [{ url: image, width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
      ...(input.type === "article"
        ? { publishedTime: input.publishedTime, modifiedTime: input.modifiedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: input.description,
      images: [image],
    },
  };
}

/* ---------- Structured data (schema.org) ---------- */

const orgId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;

/** Only verified properties. Add sameAs / contactPoint / address once confirmed. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    url: site.url,
    logo: absoluteUrl(site.logo),
    description: site.description,
    slogan: site.tagline,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: site.name,
    url: site.url,
    publisher: { "@id": orgId },
    inLanguage: "en",
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function webPageJsonLd(p: { title: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(p.path)}#webpage`,
    url: absoluteUrl(p.path),
    name: p.title,
    description: p.description,
    isPartOf: { "@id": websiteId },
    publisher: { "@id": orgId },
    inLanguage: "en",
  };
}

export function articleJsonLd(a: {
  title: string;
  description: string;
  path: string;
  published: string;
  updated: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    mainEntityOfPage: absoluteUrl(a.path),
    datePublished: a.published,
    dateModified: a.updated,
    image: absoluteUrl(site.ogImage),
    // Organisation authorship until named, verified authors are assigned (see CONTENT_TODO.md).
    author: { "@type": "Organization", name: a.author, url: site.url },
    publisher: { "@id": orgId },
  };
}

export function courseJsonLd(c: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: c.name,
    description: c.description,
    url: absoluteUrl(c.path),
    provider: { "@type": "Organization", name: "DigitalBurj Academy", url: absoluteUrl("/academy") },
  };
}

export function definedTermSetJsonLd(terms: { term: string; definition: string; slug: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "DigitalBurj Glossary",
    url: absoluteUrl("/resources/glossary"),
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      url: absoluteUrl(`/resources/glossary#${t.slug}`),
    })),
  };
}
