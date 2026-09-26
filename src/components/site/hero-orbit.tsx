"use client";

/**
 * Hero orbit, adapted from the 21st.dev component "Builders Community Hero"
 * (@makviesainte/builders-community-hero): arcs draw in, items pop onto two orbits and
 * float gently, stats count up. Content is DigitalBurj's own: division icons, process
 * milestones and real counts from the site. No stock avatars, no invented metrics.
 * Scaling is done in CSS (.hero-orbit in globals.css, by width and height) so the hero never shifts
 * layout and the whole hero fits in the first screen.
 */
import Image from "next/image";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { animate, motion, MotionConfig, useReducedMotion } from "motion/react";
import { CircleCheck } from "lucide-react";

type Ring = "outer" | "inner";
type Item =
  | { kind: "icon"; ring: Ring; angle: number; src: string; w: number; h: number; label: string }
  | { kind: "pill"; ring: Ring; angle: number; label: string; dot?: boolean }
  | { kind: "status"; ring: Ring; angle: number; label: string }
  | { kind: "check"; ring: Ring; angle: number };

const STAGE_W = 1200;
const STAGE_H = 375;
const CENTER = { x: 600, y: 515 };
const RADIUS: Record<Ring, number> = { outer: 492, inner: 404 };

function pos(ring: Ring, angle: number): CSSProperties {
  const rad = (angle * Math.PI) / 180;
  return { left: CENTER.x + RADIUS[ring] * Math.cos(rad), top: CENTER.y - RADIUS[ring] * Math.sin(rad) };
}

function arcPath(r: number) {
  const dy = CENTER.y - STAGE_H;
  const dx = Math.sqrt(r * r - dy * dy);
  return `M ${CENTER.x - dx} ${STAGE_H} A ${r} ${r} 0 0 1 ${CENTER.x + dx} ${STAGE_H}`;
}

const items: Item[] = [
  { kind: "status", ring: "outer", angle: 138, label: "Baseline measured" },
  { kind: "icon", ring: "outer", angle: 113, src: "/brand/03_DIVISIONS/DigitalBurj_BusinessAI_Icon.webp", w: 149, h: 164, label: "Business AI" },
  { kind: "pill", ring: "outer", angle: 90, label: "Learn · Build · Transform", dot: true },
  { kind: "pill", ring: "outer", angle: 67.5, label: "Workflow automated" },
  { kind: "icon", ring: "outer", angle: 51, src: "/brand/03_DIVISIONS/DigitalBurj_Academy_Icon.webp", w: 154, h: 154, label: "Academy" },
  { kind: "pill", ring: "outer", angle: 40, label: "Skills verified" },
  { kind: "icon", ring: "inner", angle: 128, src: "/brand/03_DIVISIONS/DigitalBurj_Studio_Icon.webp", w: 159, h: 159, label: "Studio" },
  { kind: "pill", ring: "inner", angle: 110, label: "MVP validated" },
  { kind: "icon", ring: "inner", angle: 90, src: "/brand/icons/verifiedtalent.webp", w: 58, h: 50, label: "Verified Talent" },
  { kind: "pill", ring: "inner", angle: 70, label: "Evidence attached" },
  { kind: "check", ring: "inner", angle: 52 },
];

function Pill({ label, dot }: { label: string; dot?: boolean }) {
  return (
    <div className="glass flex h-8 items-center gap-2 whitespace-nowrap rounded-full px-3 text-sm font-semibold text-ink-2">
      {dot ? <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" /> : null}
      {label}
    </div>
  );
}

function renderItem(item: Item): ReactNode {
  switch (item.kind) {
    case "icon":
      return (
        <div className="glass grid size-[58px] place-items-center rounded-[18px]">
          <Image src={item.src} alt="" width={item.w} height={item.h} className="h-8 w-auto mix-blend-multiply" />
        </div>
      );
    case "pill":
      return <Pill label={item.label} dot={item.dot} />;
    case "status":
      return (
        <div className="flex h-8 items-center gap-1.5 whitespace-nowrap rounded-full border border-success/25 bg-success-soft px-3 text-sm font-semibold text-success">
          <CircleCheck className="size-4" aria-hidden="true" />
          {item.label}
        </div>
      );
    case "check":
      return (
        <div className="grid size-12 place-items-center rounded-full border border-success/25 bg-success-soft text-success">
          <CircleCheck className="size-5" aria-hidden="true" />
        </div>
      );
  }
}

function CountUp({ to, delay }: { to: number; delay: number }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? to : 0);
  useEffect(() => {
    if (reduce) return setN(to);
    const c = animate(0, to, { delay, duration: 1.6, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [to, delay, reduce]);
  return <>{n}</>;
}

export function HeroOrbit({ stats }: { stats: { value: number; label: string }[] }) {
  return (
    <MotionConfig reducedMotion="user">
      <div
        aria-hidden="true"
        className="hero-orbit relative mx-auto w-full max-w-[1200px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
      >
        <div
          className="hero-orbit-stage absolute left-1/2 top-0 origin-top -translate-x-1/2"
          style={{ width: STAGE_W, height: STAGE_H }}
        >
          <svg
            className="pointer-events-none absolute inset-0"
            width={STAGE_W}
            height={STAGE_H}
            viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}
            fill="none"
            style={{ maskImage: "linear-gradient(to bottom, #000 60%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, #000 60%, transparent 100%)" }}
          >
            <motion.path d={arcPath(RADIUS.outer)} stroke="var(--color-line)" strokeWidth={2} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, ease: "easeOut" }} />
            <motion.path d={arcPath(RADIUS.inner)} stroke="var(--color-line-strong)" strokeWidth={2.5} strokeDasharray="2 7" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }} />
          </svg>

          {items.map((item, i) => (
            <motion.div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={pos(item.ring, item.angle)}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.4 + i * 0.07 }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4 + (i % 4) * 0.6, repeat: Infinity, ease: "easeInOut", delay: (i * 0.4) % 2 }}
              >
                {renderItem(item)}
              </motion.div>
            </motion.div>
          ))}

        </div>
        <div className="absolute inset-x-0 bottom-0 hidden justify-center gap-6 sm:flex lg:gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-h2 font-extrabold text-ink tabular-nums">
                <CountUp to={s.value} delay={0.8 + i * 0.12} />
              </span>
              <span className="mt-1 whitespace-nowrap text-xs font-semibold text-muted lg:text-sm">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionConfig>
  );
}
