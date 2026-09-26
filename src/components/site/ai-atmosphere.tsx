"use client";

/**
 * Site-wide AI atmosphere: fixed aurora light, grid and film grain behind every page,
 * a scroll progress beam, and a soft pointer glow that also drives the spotlight on
 * [data-spotlight] cards. Decorative only (aria-hidden). Pointer effects run only on
 * fine pointers and stop under prefers-reduced-motion.
 */
import { useEffect, useRef } from "react";

export function AiAtmosphere() {
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    let raf = 0;
    let x = 0;
    let y = 0;
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (glow.current) glow.current.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
        const target = (document.elementFromPoint(x, y) as HTMLElement | null)?.closest<HTMLElement>("[data-spotlight]");
        if (target) {
          const r = target.getBoundingClientRect();
          target.style.setProperty("--mx", `${x - r.left}px`);
          target.style.setProperty("--my", `${y - r.top}px`);
        }
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    if (glow.current) glow.current.style.opacity = "1";
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

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
        <div className="aurora-blob -left-40 -top-40 size-[38rem] bg-accent/[0.16]" />
        <div className="aurora-blob -right-40 top-1/4 size-[34rem] bg-ai/[0.10] [animation-delay:-8s]" />
        <div className="aurora-blob bottom-[-12rem] left-1/3 size-[30rem] bg-amber/[0.07] [animation-delay:-15s]" />
        <div className="ai-grid absolute inset-0" />
        <div className="ai-noise absolute inset-0" />
      </div>
      <div
        ref={glow}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-0 size-[400px] rounded-full bg-[radial-gradient(circle,rgb(45_226_196/0.07),transparent_65%)] opacity-0 transition-opacity duration-700"
      />
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5">
        <div id="scroll-progress" className="scroll-progress h-full bg-[linear-gradient(90deg,var(--color-accent),var(--color-amber),var(--color-ai))]" />
      </div>
    </>
  );
}
