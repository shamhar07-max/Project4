# Change queue

Items are recorded here as they are received and are **not implemented** until the instruction "finalise".
On "finalise": implement every open item in order, run the full QA (build, typecheck, check:content, crawl,
mobile overflow, accessibility), then commit and push.

| # | Received | Request | Status |
|---|---|---|---|

Standing item carried from earlier: temporary Cloudflare link. Blocked by the environment's network policy
(`api.trycloudflare.com`, `api.cloudflare.com` return 403). Retry at finalise.
