# Change queue

Items are recorded here as they are received and are **not implemented** until the instruction "finalise".
On "finalise": implement every open item in order, run the full QA (build, typecheck, check:content, crawl,
mobile overflow, accessibility), then commit and push.

| # | Received | Request | Status |
|---|---|---|---|
| 1 | 2026-09-26 | **Full animated redesign via 21st.dev.** (a) Hero: animate in the style of 21st.dev `@makviesainte/builders-community-hero` (https://21st.dev/?preview=%2F%40makviesainte%2Fcomponents%2Fbuilders-community-hero). (b) Rebuild every component and element (features, hooks/sections, cards, navigation, CTAs, forms, footer, everything) from 21st.dev equivalents. (c) Whole frontend animated and highlighted: smooth, subtle transitions; world-class corporate but professional; performance preserved (respect reduced-motion, keep LCP/CLS/INP). (d) WhatsApp chat button on every page. (e) MyChatBot: build and run an AI sales agent for the business (connector available). | Queued |

Standing item carried from earlier: temporary Cloudflare link. Blocked by the environment's network policy
(`api.trycloudflare.com`, `api.cloudflare.com` return 403). Retry at finalise.

## Open inputs needed before finalise
- Item 1(d): WhatsApp number (international format) and default greeting message.
- Item 1(e): MyChatBot agent details: business description, languages, what it may and may not promise, where leads go, and which channels (website widget, WhatsApp).
