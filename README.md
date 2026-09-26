# digitalburj.com

The public DigitalBurj website: **Business AI → Academy → Studio → Verified Talent → Jobs**, plus
Solutions, Industries, Portfolio, Insights, Resources and Company pages, all on one domain.

Built with Next.js 16 (App Router, static pre-rendering), Tailwind CSS v4, shadcn/ui patterns on Radix
(navigation menu, mobile sheet, buttons) and React Aria Components (forms).

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
npm run typecheck
npm run check:content   # brand-voice, promise and design-token checks (P0 fails the run)
```

Copy `.env.example` to `.env.local` and set `ENQUIRY_WEBHOOK_URL` so form submissions reach your CRM or
automation platform. In development, submissions without a webhook are logged instead.

## Design system

- Figma: [DigitalBurj Web Design System](https://www.figma.com/design/MDcYuMHppBlvhTqmDB7Pzg): colour and
  spacing variables, Manrope text styles, and Button / Card / Timeline Step / Flow Chip components that map
  1:1 to `globals.css` and `src/components`.
- Consistency: [docs/ui-consistency-report.md](docs/ui-consistency-report.md) (P0–P3 findings, fixes, rules).
  `npm run check:content` enforces the rules.
- The process timeline (`StepList`) is adapted from the 21st.dev component `ln-dev7/how-it-works-02`.

## Where things live

| Path | What |
|---|---|
| `src/lib/site.ts` | Entity name, canonical description, header/footer navigation |
| `src/lib/seo.ts` | Metadata builder (canonical, OpenGraph, Twitter) and JSON-LD helpers |
| `src/lib/forms.ts` | Every enquiry form's fields; shared by the UI and server validation |
| `src/lib/analytics.ts` | Outcome events pushed to `window.dataLayer` (no third-party scripts) |
| `src/content/*.ts` | All page copy as structured data (one file per section) |
| `src/content/registry.ts` | Route registry → sitemap.xml, HTML sitemap, related-link titles, link checking |
| `src/components/site/` | Header/mega menu, footer, page templates, blocks, FAQ, forms |
| `src/app/` | Routes. Most sections use `[slug]` pages generated from content files |
| `public/brand/` | The DigitalBurj EXACT master deliverables, unchanged, plus derived web sizes |

### Adding a page

Add an entry to the relevant `src/content/*.ts` array. The route, sitemap entry, breadcrumbs, metadata and
structured data are generated from it. Any `related` link that does not resolve to a real page fails the build.

### Pages kept out of search

Pages awaiting verified content render normally but carry `noindex` and are excluded from `sitemap.xml`:
leadership, portfolio project details, professional Academy categories/paths, career bundles, research and
the form pages. Flip `indexable` / `verified` once real content is in. See `CONTENT_TODO.md`.

## SEO / AEO / GEO

- One H1 per page, one canonical URL (`https://digitalburj.com`, no trailing slash; `www` → apex 301).
- Every content page opens with a 40–100-word direct answer, then detail, examples, limits and FAQs.
- FAQs use native `<details>`, so answers are in the HTML without JavaScript.
- JSON-LD: Organization, WebSite, WebPage, BreadcrumbList (mirrors visible breadcrumbs), Article, Course,
  DefinedTermSet. Only verified properties are included.
- `robots.txt`, `sitemap.xml` (indexable pages only), branded 404 with a real 404 status.
