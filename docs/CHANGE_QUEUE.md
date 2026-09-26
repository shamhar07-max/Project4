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
