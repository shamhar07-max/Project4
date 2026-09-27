"use client";

/**
 * Site-wide background: soft brand-colour light, a faint grid and grain behind every
 * page, plus a scroll progress line. Decorative only (aria-hidden). Motion stops under
 * prefers-reduced-motion.
 */
import { useEffect } from "react";

export function AiAtmosphere() {
  useEffect(() => {
    // Scroll progress fallback where CSS scroll-driven animations are unsupported.
    if (CSS.supports("animation-timeline: scroll()")) return;
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="aurora-blob -left-40 -top-40 size-[38rem] bg-accent/[0.06]" />
        <div className="aurora-blob -right-40 top-1/4 size-[34rem] bg-accent/[0.05] [animation-delay:-8s]" />
        <div className="ai-grid absolute inset-0" />
        <div className="ai-noise absolute inset-0" />
      </div>
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5">
        <div id="scroll-progress" className="scroll-progress h-full bg-accent" />
      </div>
    </>
  );
}
