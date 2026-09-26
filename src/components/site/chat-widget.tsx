"use client";

import Script from "next/script";
import { useEffect } from "react";

/**
 * MyChatBot website widget for the "DigitalBurj Assistant" (assistant 16259, widget "digitalburj-site").
 * These values come from MyChatBot's public embed snippet. Assets load only after the page is idle,
 * and the widget mounts once for the whole session (it survives client-side navigation).
 * Set NEXT_PUBLIC_CHAT_WIDGET_DISABLED=1 to turn it off.
 */
const config = {
  account_id: "823ac6fd-b211-4d21-a3d6-33579e5d1935",
  widget_id: "digitalburj-site",
  api_url: "https://api.mychatbot.app",
  assistant_name: "DigitalBurj Assistant",
  color: "#CD2506",
  lang: "en",
};
const assets = "https://storage.googleapis.com/mychatbot-widget-assets/v1";

declare global {
  interface Window {
    MyChatBot?: { mount: (selector: string, options: typeof config) => void };
    __dbChatMounted?: boolean;
  }
}

function mount() {
  if (window.__dbChatMounted || !window.MyChatBot) return;
  window.__dbChatMounted = true;
  window.MyChatBot.mount("#my-chat-widget-container", config);
}

export function ChatWidget() {
  const disabled = process.env.NEXT_PUBLIC_CHAT_WIDGET_DISABLED === "1";

  useEffect(() => {
    if (disabled || document.querySelector(`link[href="${assets}/style.css"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${assets}/style.css`;
    document.head.appendChild(link);
  }, [disabled]);

  if (disabled) return null;
  return (
    <>
      <div id="my-chat-widget-container" className="print:hidden" />
      <Script src={`${assets}/widget.js`} strategy="lazyOnload" onLoad={mount} onReady={mount} />
    </>
  );
}
