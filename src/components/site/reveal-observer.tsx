"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Reveals [data-reveal] elements as they scroll into view by setting data-revealed.
 * The hidden state only applies under html.js (see globals.css), so content is
 * always visible without JavaScript and to crawlers.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const reveal = (el: Element) => el.setAttribute("data-revealed", "");
    const pending = () => Array.from(document.querySelectorAll("[data-reveal]:not([data-revealed])"));

    if (!("IntersectionObserver" in window)) {
      pending().forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const observeAll = () => pending().forEach((el) => io.observe(el));
    observeAll();

    // Content that appears later (e.g. after a form submits) is picked up too.
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
