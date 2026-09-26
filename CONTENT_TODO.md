# Content to verify before launch

The site was built without inventing facts. These items need real, verified information from DigitalBurj.

## Must supply (pages are `noindex` until done)
- [ ] **Leadership** (`src/content/company.ts`, slug `leadership`): names, verified titles, responsibilities, bios. Then remove `indexable: false`.
- [ ] **Portfolio** (`src/content/portfolio.ts`): for LoadByTon, Attesora, Procurazo, VelozTrade, HospyQ, supply description, status, architecture, screenshots/diagrams and lessons; confirm sectors for VelozTrade and HospyQ. Set `verified: true` per project. Add any other genuine projects.
- [ ] **Academy catalogue** (`src/content/academy.ts`): confirm track names against DB-00 to DB-22, and add course codes, modules, durations, difficulty, prerequisites and credential details. Professional categories and paths stay `noindex` until real courses exist.
- [ ] **Career bundles**: titles, included courses, time, prices. `/academy/career-bundles` is `noindex` until then.

## Must confirm
- [ ] **Organization schema** (`src/lib/seo.ts`): add `sameAs` (official social profiles), `contactPoint`, `address`, `foundingDate` once verified.
- [ ] **Legal pages** (`/privacy`, `/terms`, `/cookies`): add legal entity name, registered address and jurisdiction; have counsel review.
- [ ] **Studio budget ranges** (`src/lib/forms.ts`): currently in USD. Change the currency or ranges, or remove the field.
- [ ] **Insights authorship**: articles are attributed to "DigitalBurj". Assign named authors/reviewers with bios when available (update `articleJsonLd` to `Person`).
- [ ] **Enquiry delivery**: set `ENQUIRY_WEBHOOK_URL` in production and test each form reaches the right team.
- [ ] **Analytics**: connect a tag manager or analytics tool to `window.dataLayer`, and update the cookie policy if it sets cookies.

## After launch
- [ ] Verify the domain in Google Search Console and Bing Webmaster Tools; submit `/sitemap.xml`.
- [ ] Validate structured data with the Rich Results Test.
