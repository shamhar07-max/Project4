"use client";

/**
 * Schedules the cookie banner, the offer popup and timed notifications so they never
 * pile up: the cookie choice comes first, then notifications after a delay, and the offer
 * popup after `offer.delay` seconds or on exit intent (desktop). Each shows at most once
 * per session (the offer is snoozed for `offer.snoozeDays` after closing), and none of
 * them appear on form or legal pages.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "./toaster";
import { nudges, offer, quietPaths } from "@/content/promotions";
import { CONSENT_KEY, readConsent, track } from "@/lib/analytics";
import { whatsappHref } from "@/lib/whatsapp";

function store(kind: "local" | "session") {
  try {
    return kind === "local" ? window.localStorage : window.sessionStorage;
  } catch {
    return null;
  }
}

const OFFER_KEY = `db_offer_${offer.id}`;

export function Engagement() {
  const pathname = usePathname();
  const quiet = quietPaths.some((p) => pathname === p || pathname.startsWith(`${p}/`));
  const [consent, setConsent] = useState<string | null | undefined>(undefined);
  const [offerOpen, setOfferOpen] = useState(false);
  const offerOpenRef = useRef(false);

  useEffect(() => setConsent(readConsent()), []);

  function decide(value: "accepted" | "rejected") {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch {}
    setConsent(value);
  }

  // Timed notifications, once per session each, after the cookie choice.
  useEffect(() => {
    if (consent === undefined || consent === null || quiet) return;
    const session = store("session");
    const timers = nudges
      .filter((n) => !session?.getItem(`db_nudge_${n.id}`))
      .map((n) =>
        window.setTimeout(() => {
          if (offerOpenRef.current || session?.getItem(`db_nudge_${n.id}`)) return;
          session?.setItem(`db_nudge_${n.id}`, "1");
          toast({ title: n.title, body: n.body, action: n.action, duration: 9000 });
        }, n.after * 1000),
      );
    return () => timers.forEach(clearTimeout);
  }, [consent, quiet, pathname]);

  // Offer popup: after a delay or on exit intent; snoozed after closing.
  useEffect(() => {
    if (consent === undefined || consent === null || quiet) return;
    const local = store("local");
    const session = store("session");
    const snoozedUntil = Number(local?.getItem(OFFER_KEY) ?? 0);
    if (Date.now() < snoozedUntil || session?.getItem(OFFER_KEY)) return;
    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      session?.setItem(OFFER_KEY, "1");
      offerOpenRef.current = true;
      setOfferOpen(true);
      track("offer_view", { id: offer.id });
    };
    const t = window.setTimeout(show, offer.delay * 1000);
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) show();
    };
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (fine) document.addEventListener("mouseout", onLeave);
    return () => {
      clearTimeout(t);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [consent, quiet]);

  function closeOffer(open: boolean) {
    if (open) return;
    offerOpenRef.current = false;
    setOfferOpen(false);
    store("local")?.setItem(OFFER_KEY, String(Date.now() + offer.snoozeDays * 864e5));
  }

  return (
    <>
      {consent === null ? (
        <div
          role="region"
          aria-label="Cookie consent"
          className="animate-toast fixed bottom-5 left-5 z-50 w-[min(24rem,calc(100vw-2.5rem))] rounded-lg border border-line bg-paper p-5 shadow-2xl print:hidden"
        >
          <div className="flex items-start gap-3">
            <Cookie aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent-strong" />
            <div>
              <p className="text-sm font-semibold text-ink">Cookies</p>
              <p className="mt-1 text-sm text-ink-2">
                We use a few cookies to see which pages help people. Nothing is sold.{" "}
                <Link href="/cookies" className="link">
                  Cookie policy
                </Link>
              </p>
              <div className="mt-4 flex gap-2">
                <Button size="sm" onClick={() => decide("accepted")}>
                  Accept
                </Button>
                <Button size="sm" variant="outline" onClick={() => decide("rejected")}>
                  Reject
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <DialogPrimitive.Root open={offerOpen} onOpenChange={closeOffer}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm data-[state=open]:animate-[fade-in_0.2s_ease-out]" />
          <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-[min(28rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl bg-paper shadow-2xl data-[state=open]:animate-[menu-in_0.25s_var(--ease-out-quint)]">
            <div className="bg-night px-6 pb-6 pt-7 text-white">
              <p className="eyebrow text-accent">{offer.eyebrow}</p>
              <DialogPrimitive.Title className="mt-2 text-h3 font-bold">{offer.title}</DialogPrimitive.Title>
            </div>
            <div className="p-6">
              <DialogPrimitive.Description className="text-ink-2">{offer.body}</DialogPrimitive.Description>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link
                    href={offer.cta.href}
                    onClick={() => {
                      track("offer_click", { id: offer.id });
                      closeOffer(false);
                    }}
                  >
                    {offer.cta.label}
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={whatsappHref("Hello DigitalBurj, I'd like a free process review.")} target="_blank" rel="noopener noreferrer">
                    Ask on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <DialogPrimitive.Close className="absolute right-3 top-3 grid size-9 place-items-center rounded-full text-white/80 hover:bg-white/10 hover:text-white">
              <X className="size-5" aria-hidden="true" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}
