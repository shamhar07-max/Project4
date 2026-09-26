"use client";

import { track } from "@/lib/analytics";

const number = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/[^\d]/g, "");
const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? "Hello DigitalBurj, I'd like to talk about ";

/**
 * Floating WhatsApp chat button, shown on every page once NEXT_PUBLIC_WHATSAPP_NUMBER is set
 * (international format, digits only, e.g. 9715XXXXXXXX). Hidden otherwise, so the site never
 * links to an unconfigured number.
 */
export function WhatsAppButton() {
  if (!number) return null;
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DigitalBurj on WhatsApp (opens in a new tab)"
      onClick={() => track("whatsapp_click", { page: window.location.pathname })}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 print:hidden sm:bottom-6 sm:right-6"
      style={{ animation: "wa-in 0.6s var(--ease-out-quint) 1.2s both" }}
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-ink px-3.5 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
      <span className="relative grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_-8px_rgb(5_29_24/0.45)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-whatsapp"
          style={{ animation: "wa-ring 1.8s ease-out 2s 2" }}
        />
        <svg viewBox="0 0 32 32" className="relative size-7" aria-hidden="true" fill="currentColor">
          <path d="M16.004 3.2C8.94 3.2 3.2 8.94 3.2 16c0 2.26.6 4.47 1.73 6.41L3.1 28.8l6.55-1.72A12.77 12.77 0 0 0 16.004 28.8C23.06 28.8 28.8 23.06 28.8 16S23.06 3.2 16.004 3.2Zm0 23.27c-1.95 0-3.86-.52-5.53-1.52l-.4-.24-3.89 1.02 1.04-3.79-.26-.39A10.46 10.46 0 0 1 5.53 16c0-5.78 4.7-10.47 10.47-10.47 5.78 0 10.47 4.7 10.47 10.47 0 5.78-4.7 10.47-10.47 10.47Zm5.74-7.84c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.81 1.02-1 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.52-1.56-.93-.83-1.56-1.86-1.74-2.17-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.62 0 1.55 1.13 3.05 1.28 3.26.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.86-.76 2.12-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.6-.37Z" />
        </svg>
      </span>
    </a>
  );
}
