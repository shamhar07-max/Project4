export type Card = { title: string; body: string; href?: string };

export type Block =
  | { type: "text"; heading: string; body: string[] }
  | { type: "list"; heading: string; intro?: string; items: string[]; columns?: 2 | 3 }
  | { type: "cards"; heading: string; intro?: string; items: Card[] }
  | { type: "flow"; heading: string; intro?: string; steps: string[]; caption?: string }
  | { type: "steps"; heading: string; intro?: string; steps: { title: string; body: string }[] }
  | { type: "callout"; heading: string; body: string }
  | { type: "compare"; heading: string; intro?: string; columns: [string, string, string]; rows: [string, string, string][] };

export type Faq = { q: string; a: string };

export type Cta = { heading?: string; body?: string; label: string; href: string };

export type ContentPage = {
  slug: string;
  /** Visible navigation label and breadcrumb name. */
  label: string;
  eyebrow: string;
  h1: string;
  /** SEO title without the " | DigitalBurj" suffix. */
  seoTitle: string;
  description: string;
  /** Direct answer (AEO): first paragraph under the H1, 40–100 words. */
  answer: string;
  keyPoints?: string[];
  blocks: Block[];
  faqs?: Faq[];
  related?: string[];
  cta?: Cta;
  /** Pages awaiting verified content are rendered but kept out of the index and sitemap. */
  indexable?: boolean;
};
