"use client";

import Script from "next/script";

const src = process.env.NEXT_PUBLIC_CHAT_WIDGET_SRC;
let attrs: Record<string, string> = {};
try {
  attrs = JSON.parse(process.env.NEXT_PUBLIC_CHAT_WIDGET_ATTRS ?? "{}");
} catch {
  attrs = {};
}

/**
 * Loads the MyChatBot (or any) chat widget script after the page is idle, so it never
 * competes with page rendering. Configure NEXT_PUBLIC_CHAT_WIDGET_SRC with the script URL
 * from the widget's embed snippet, and NEXT_PUBLIC_CHAT_WIDGET_ATTRS with any data-* attributes
 * it needs, as JSON.
 */
export function ChatWidget() {
  if (!src) return null;
  return <Script src={src} strategy="lazyOnload" {...attrs} />;
}
