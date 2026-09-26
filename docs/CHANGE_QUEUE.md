# Change queue

Items are recorded here as they are received and are **not implemented** until the instruction "finalise".
On "finalise": implement every open item in order, run the full QA (build, typecheck, check:content, crawl,
mobile overflow, accessibility), then commit and push.

| # | Received | Request | Status |
|---|---|---|---|
| 1 | 2026-09-26 | **Full animated redesign via 21st.dev.** (a) Hero: animate in the style of 21st.dev `@makviesainte/builders-community-hero` (https://21st.dev/?preview=%2F%40makviesainte%2Fcomponents%2Fbuilders-community-hero). (b) Rebuild every component and element (features, hooks/sections, cards, navigation, CTAs, forms, footer, everything) from 21st.dev equivalents. (c) Whole frontend animated and highlighted: smooth, subtle transitions; world-class corporate but professional; performance preserved (respect reduced-motion, keep LCP/CLS/INP). (d) WhatsApp chat button on every page. (e) MyChatBot: build and run an AI sales agent for the business (connector available). | Done (see notes) |

Standing item carried from earlier: temporary Cloudflare link. Blocked by the environment's network policy
(`api.trycloudflare.com`, `api.cloudflare.com` return 403). Retry at finalise.

## Open inputs needed before finalise
- Item 1(d): WhatsApp number (international format) and default greeting message.
- Item 1(e): MyChatBot agent details: business description, languages, what it may and may not promise, where leads go, and which channels (website widget, WhatsApp).

## Finalise log — item 1
- (a) Hero: rebuilt from the 21st.dev component `@makviesainte/builders-community-hero` (source retrieved via the 21st connector): orbit arcs draw in, items pop in and float, stats count up. Sample content replaced with DigitalBurj division icons, process milestones and real counts from the site.
- (b)/(c) Site-wide motion system in `globals.css` + `RevealObserver`: page fade transitions, scroll reveals with stagger, card lift + accent rule, timeline rail drawing, sequential flow-step highlight, button and link micro-interactions, mega-menu transitions, header shrink on scroll, smooth FAQ open. Respects reduced motion; content is never hidden without JavaScript. Only the hero uses the motion library.
  - 21st.dev free tier allows 2 component retrievals per day; both were used (timeline earlier, hero now). Other components use the same motion language implemented in-house rather than further 21st.dev code.
- (d) WhatsApp button on every page: set `NEXT_PUBLIC_WHATSAPP_NUMBER` (digits, international format). Hidden until set.
- (e) MyChatBot: "DigitalBurj Assistant" drafted from site content and sent for approval (approval card). Not built until approved. After approval: create the website widget and set `NEXT_PUBLIC_CHAT_WIDGET_SRC` / `NEXT_PUBLIC_CHAT_WIDGET_ATTRS`.

## Finalise log — Cloudflare preview
- Live: https://digitalburj-preview.shamhar07.workers.dev (Worker `digitalburj-preview` on the shamhar07 account; the existing `digitalburj` Worker was not touched).
- Serves the static export pushed to branch `preview-static` (from raw.githubusercontent.com, 5-minute edge cache). Marked `noindex` so it does not compete with the real domain. Enquiry forms report "not connected" on the preview.
- To refresh after changes: rebuild the static export and force-push `preview-static`; the Worker needs no redeploy. To remove: delete the Worker in the Cloudflare dashboard (or ask Claude).

## iOS & iPadOS 27 restyle (2026-09-26)

The user approved restyling the site in the iOS & iPadOS 27 design language (the Figma Community file can't be read through the connector, so the language was applied directly in code). DigitalBurj colours, logo, content and SEO are unchanged.

- Tokens: system font stack (SF Pro on Apple devices, no webfont download); grouped background `#f2f2f7`; iOS fill colour; radii 8 / 12 / 22 / 28px; Apple-style spring curve.
- Materials: `.glass` / `.glass-dark` frosted surfaces with an opaque fallback where `backdrop-filter` isn't supported.
- Header: floating glass capsule with pill navigation triggers; opaque rounded mega-menu; mobile menu as a floating sheet with an inset grouped list.
- Buttons and chips: capsule shape with a press-scale; flow chips and topic chips are pills.
- FAQ: inset grouped list with rotating chevrons. Related links: tiles grouped on a tinted panel.
- Forms: filled fields that turn white on focus; select popover with a glass finish; radio options as pills.
- Home hero: ambient light behind glass orbit items and division pills, running under the header; orbit items pop in on a spring.
- QA: build (169 pages), `check:content` 0 findings, 164 pages crawled with no broken links, no overflow at 375px, axe clean.

## Remove MyChatBot, fit hero, cut and rewrite copy (2026-09-26)

- MyChatBot widget removed from the site (component, layout, env var, check-content allowlist). The WhatsApp button is back at bottom-right. The MyChatBot "DigitalBurj Assistant", its website widget, its one conversation and both DigitalBurj FAQ knowledge bases were then deleted from the MyChatBot account at the owner's request.
- Home hero: the empty top of the orbit stage is removed and the orbit scales by width *and* viewport height (`.hero-orbit` in globals.css). The stats sit below the orbit at a readable size. Orbit, headline, buttons and division pills now fit in the first screen at 1920×1080, 1440×900, 1366×768, 1280×720, 1024×768, 768×1024 and 390×844.
- Copy: every content page cut to a short plain answer, one or two sections and at most three FAQs; key-points lists removed; hub pages trimmed (Business AI, Studio, Academy, Talent, Jobs); homepage "gaps" and "ecosystem" sections removed; site description, nav summaries and page leads rewritten in plain language. Slugs, SEO titles, meta descriptions (except the site/home description) and internal links unchanged. Colours, fonts, animation and components unchanged.

## AI-themed makeover (2026-09-26)

Whole frontend restyled as an AI interface, using patterns from the 21st.dev "AI Chats" collection (built in-house; the free 21st.dev code retrievals were used up for the day).

- Theme: dark palette built from the brand (deep green-black background, burj red accent) plus an AI teal signal colour; mono labels; light logo and division icons generated from the brand files (`public/brand/dark/`).
- Atmosphere: fixed aurora light, grid and grain behind every page; pointer glow and card spotlight; scroll progress beam; border beam; shimmer and gradient text; thinking orb. All motion stops under reduced motion.
- Home hero: AI chat interface ("site guide"): prompt with typed placeholder, suggestions, tool-call steps, streamed answer, numbered sources and a next step. It searches a static index of this site's pages (`/search-index.json`) in the browser; nothing typed is sent anywhere, and it says so.
- Header: ⌘K / Ctrl+K / "/" command palette over the same index; full menu from 1280px, hamburger below.
- Homepage: division dock, marquee, bento grid, KPI numbers and a bar chart built only from real content counts, tabs with steppers, industries carousel, portfolio gallery, timeline, accordion FAQ, beam CTA.
- Shared UI: gradient glow buttons, glowing form fields, radio/checkbox states, spinner, toast notifications, alert with icon, empty states, badges; footer with ASCII burj and oversized outline wordmark.
- Not built, because they'd need content that doesn't exist and the content rules forbid inventing it: pricing, testimonials, client logos, team profiles, sign-in/sign-up, calendars/date pickers, maps, videos, dashboards with invented data.
- QA: build (170), check:content 0, 164 pages crawled, no overflow at 375px, axe clean (incl. guide answer and palette), hero fits 1920×1080 down to 390×844.

## Previous colours and font, hero fits small phones (2026-09-26)

- Colours back to the earlier light palette (white, ink #051D18, burj red; the brand success green replaces the AI teal for glows). Dark panels (footer, CTA bands) are the earlier ink colour with white text.
- Font back to the system font; monospace removed everywhere except the footer ASCII art, which needs it to line up.
- Logo and division icons: transparent versions of the original artwork (`public/brand/light/`), so they sit cleanly on glass and tinted backgrounds.
- Everything else from the AI makeover kept: site guide, command palette, atmosphere, bento, tabs, carousel, marquee, chart, toasts, etc.
- Hero fits the first screen from 1920×1080 down to 320×568 (short phones hide the brand pill and suggestion chips; ≤600px tall also hides the intro line).

## Hero: chat removed, tech stack dock added (2026-09-26)

- Removed the site-guide chat from the hero (component deleted; the ⌘K search stays in the header). Hero buttons "See what we do" / "Talk to us" are back.
- Added the 21st.dev "techstack" dock by @carolinaraulino with the owner's list (Claude Code, Codex, VS Code, GitHub, Figma, Supabase, Slack, Vercel, PostHog, Cursor, Cloudflare, Sentry). The component source is a paid 21st.dev download (free quota used up), so `src/components/ui/techstack.tsx` recreates it with the same API from its published description, using `motion`: tilted overlapping tiles that swell under the pointer, one shared gliding tooltip driven by pointer position, keyboard focus support, no swelling under reduced motion, smaller tiles on phones.
- Logos from svgl.app are stored locally in `public/brand/stack/` (fetched from the svgl GitHub repo) instead of hot-linking svgl.app.
- Hero still fits the first screen from 1920×1080 down to 320×568.
