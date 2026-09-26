# UI consistency report

Scope: every UI surface in `src/` (Next.js + Tailwind v4, 46 `.tsx` files). Source of truth: the tokens in
`src/app/globals.css`, mirrored in the Figma file
[DigitalBurj Web Design System](https://www.figma.com/design/MDcYuMHppBlvhTqmDB7Pzg) (variables
`DigitalBurj / Color`, `DigitalBurj / Spacing & Radius`, text styles `DigitalBurj/*`, components Button,
Card, Timeline Step, Flow Chip).

Severity: **P0** breaks function or accessibility · **P1** visible inconsistency a visitor notices ·
**P2** inconsistency in code that will cause visible drift later · **P3** polish.

## Findings

| # | Sev | Area | Finding | Evidence | Status |
|---|---|---|---|---|---|
| 1 | P1 | Typography | Section headings collapsed to body size when combined with a colour class: `tailwind-merge` treated the custom `text-h2` size as a colour and dropped it | Every `Section` heading on every page | Fixed (earlier): custom sizes registered with `extendTailwindMerge` |
| 2 | P1 | Typography | H3 used two weights: 23 × `font-extrabold`, 3 × `font-bold`, so card titles looked heavier on some pages than on others | `blocks.tsx` vs hub pages | Fixed: H3 = `font-bold` everywhere (matches Figma `DigitalBurj/H3`) |
| 3 | P1 | Typography | Four ad-hoc body sizes outside the scale: `text-[0.9375rem]` ×17, `text-[0.9875rem]` ×2, `text-[1.0625rem]` ×3, `text-[1rem]` ×1 | cards, lists, FAQ, forms | Fixed: new tokens `text-body` (17px) and `text-body-sm` (15px); 23 call sites migrated |
| 4 | P1 | Spacing | Five different vertical section paddings (`py-16/20`, `py-14/16`, `py-14`, `py-12/16`, `py-10/12`), so the rhythm changed between hub pages and content pages | `Section`, `BlockSection`, `FaqList`, `RelatedLinks`, page bodies | Fixed: two utilities, `section-pad` (56/80px) and `section-pad-compact` (40/56px); 14 call sites migrated |
| 5 | P1 | Components | Numbered processes rendered as a 3-column grid, which reads left-to-right and hides sequence | Business AI model, Studio process, How We Work | Fixed: single `StepList` timeline (adapted from 21st.dev `how-it-works-02`), columns read top-to-bottom |
| 6 | P2 | Components | "Text link + arrow" hand-built 8 times with drifting margins and gaps (`gap-1.5` vs `gap-2`) | homepage, Business AI, Studio | Fixed: `ArrowLink` component |
| 7 | P2 | Iconography | Two arrows for the same meaning: `ArrowUpRight` (external-link convention) used for internal links in Related and the ecosystem strip | `related.tsx`, homepage | Fixed: `ArrowRight` for all internal links |
| 8 | P2 | Components | Seven pill/tag class variants (padding `px-3`/`px-3.5`, weight, ring vs fill) | Academy, Portfolio, Business AI, Glossary, Insights | Fixed: `Tag` (static) and `tagLinkClass` (interactive) |
| 9 | P2 | Spacing | Card padding drift: `p-5` ×9, `p-6` ×13, `p-7` ×3, `p-8` ×1 | homepage capability grid, Jobs cards | Fixed: cards `p-6`; compact list tiles keep `p-5`; success panel keeps `p-8` |
| 10 | P2 | Color | Raw hex values in 4 components (`#b01f04`, `#fef3f2`, `#cd2506`) | button, footer, form, checklist | Fixed: tokens `accent-hover`, `danger-soft`; `accent-accent-strong` |
| 11 | P3 | Interaction | Hover treatment differs by element type (cards: border → ink; nav items: surface fill; text links: underline). This is intentional and consistent per type | — | Documented, no change |
| 12 | P3 | Typography | Eyebrow colour: accent-strong for section/hero eyebrows, muted inside cards and panels | — | Documented rule, no change |

No P0 findings: an axe-core scan (WCAG 2 A/AA + best practice) of 14 representative pages reports no
violations, and no page overflows horizontally at 375px.

## Rules now enforced

`npm run check:content` fails or warns on:

- ad-hoc font sizes (`text-[…rem]`) → use `text-body` / `text-body-sm` or the heading tokens (P1)
- H3 weights other than `font-bold` (P1)
- ad-hoc section padding (`py-N sm:py-N`) → use `section-pad` / `section-pad-compact` (P2)
- `ArrowUpRight` for internal links (P2)
- raw hex colours outside `globals.css` (P2)
- hype vocabulary, outcome promises and unofficial product names (content rules)

## Remediation plan for new work

1. Add a colour, size or spacing value to `globals.css` first, then to the Figma variables, and only then use it.
2. Reuse `Section`, `StepList`, `FlowDiagram`, `CardGrid`, `ArrowLink`, `Tag`, `Button` before writing new markup.
3. Run `npm run check:content` and `npm run typecheck` before committing.
