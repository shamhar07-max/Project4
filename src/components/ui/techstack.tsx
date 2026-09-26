"use client";

/**
 * ToolDock: a tilted, overlapping row of app icons that swells under the pointer,
 * opens up to make room, and shares one tooltip that glides between them.
 * Recreates the 21st.dev "techstack" component by @carolinaraulino (MIT), same API:
 * <ToolDock items label /> and <ToolDockTile className>.
 *
 * Everything is driven by the pointer's x position (distance to each tile's centre),
 * not by hit-testing, so the tooltip never flickers between tiles. Keyboard focus
 * drives the same state. Under prefers-reduced-motion the tiles don't swell.
 */
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useMotionValueEvent,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ToolDockItem = { label: string; icon: ReactNode };

/** The rounded app-icon square a logo sits on. */
export function ToolDockTile({ className, children }: { className?: string; children?: ReactNode }) {
  return (
    <div
      className={cn(
        "grid size-full place-items-center overflow-hidden rounded-[23%] shadow-[0_1px_1px_rgb(0_0_0/0.08),0_6px_16px_-6px_rgb(0_0_0/0.35)] ring-1 ring-black/10",
        className,
      )}
    >
      {children}
    </div>
  );
}

const SPRING = { mass: 0.1, stiffness: 180, damping: 14 };

function useBaseSize() {
  const [base, setBase] = useState(48);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const set = () => setBase(mq.matches ? 48 : 30);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);
  return base;
}

function DockTile({
  item,
  index,
  mouseX,
  base,
  magnify,
  radius,
  active,
  onFocusTile,
  onBlurTile,
  onSettle,
  tileRef,
}: {
  item: ToolDockItem;
  index: number;
  mouseX: MotionValue<number>;
  base: number;
  magnify: number;
  radius: number;
  active: boolean;
  onFocusTile: () => void;
  onBlurTile: () => void;
  onSettle: () => void;
  tileRef: (el: HTMLDivElement | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (x) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r || !Number.isFinite(x)) return radius * 4;
    return x - (r.left + r.width / 2);
  });
  const target = useTransform(distance, [-radius, 0, radius], [base, base * magnify, base]);
  const size = useSpring(target, SPRING);
  const lift = useTransform(size, (s) => -(s - base) * 0.35);
  const zIndex = useTransform(size, (s) => Math.round(s));
  // Neighbours grow after the pointer stops, so keep the tooltip on this tile while they settle.
  useMotionValueEvent(size, "change", () => {
    if (active) onSettle();
  });
  // Alternate the tilt so the row reads as a loose, hand-placed stack.
  const tilt = index % 2 === 0 ? -6 : 5;

  return (
    <motion.div
      ref={(el) => {
        ref.current = el;
        tileRef(el);
      }}
      role="listitem"
      tabIndex={0}
      aria-label={item.label}
      onFocus={onFocusTile}
      onBlur={onBlurTile}
      style={{ width: size, height: size, y: lift, zIndex, marginLeft: index === 0 ? 0 : -base * 0.16 }}
      animate={{ rotate: active ? 0 : tilt }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="relative shrink-0 cursor-default rounded-[23%] outline-none focus-visible:ring-2 focus-visible:ring-accent-strong focus-visible:ring-offset-2"
    >
      {item.icon}
    </motion.div>
  );
}

export function ToolDock({
  items,
  label,
  className,
  magnify = 1.55,
  radius = 120,
}: {
  items: ToolDockItem[];
  label: string;
  className?: string;
  magnify?: number;
  radius?: number;
}) {
  const reduce = useReducedMotion();
  const base = useBaseSize();
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);
  const rowRef = useRef<HTMLDivElement>(null);
  const tiles = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const shown = useRef(false);
  const tipTarget = useMotionValue(0);
  const tipX = useSpring(tipTarget, { stiffness: 320, damping: 30 });

  function centreOf(i: number) {
    const el = tiles.current[i];
    const row = rowRef.current;
    if (!el || !row) return 0;
    const r = el.getBoundingClientRect();
    return r.left + r.width / 2 - row.getBoundingClientRect().left;
  }

  function pointAt(clientX: number) {
    if (!reduce) mouseX.set(clientX);
    // Nearest tile centre to the pointer, measured, not hit-tested.
    let best = 0;
    let bestD = Infinity;
    tiles.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const d = Math.abs(clientX - (r.left + r.width / 2));
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    });
    const c = centreOf(best);
    tipTarget.set(c);
    // First appearance: start at the tile instead of gliding in from the left edge.
    if (!shown.current) tipX.jump(c);
    shown.current = true;
    setActive(best);
  }

  function leave() {
    mouseX.set(Number.POSITIVE_INFINITY);
    shown.current = false;
    setActive(null);
  }

  return (
    <div className={cn("relative mx-auto w-fit max-w-full pt-9", className)}>
      <AnimatePresence>
        {active !== null ? (
          <motion.div
            key="tip"
            aria-hidden="true"
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            style={{ x: tipX }}
            className="pointer-events-none absolute left-0 top-0 z-50"
          >
            <div className="-translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2.5 py-1 text-xs font-semibold text-white shadow-lg">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={items[active]?.label}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.12 }}
                  className="block"
                >
                  {items[active]?.label}
                </motion.span>
              </AnimatePresence>
              <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-ink" />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div
        ref={rowRef}
        role="list"
        aria-label={label}
        onPointerMove={(e) => pointAt(e.clientX)}
        onPointerLeave={leave}
        className="flex items-end justify-center px-2"
        style={{ height: base * 1.2 + 6 }}
      >
        {items.map((item, i) => (
          <DockTile
            key={item.label}
            item={item}
            index={i}
            mouseX={mouseX}
            base={base}
            magnify={reduce ? 1 : magnify}
            radius={radius}
            active={active === i}
            tileRef={(el) => {
              tiles.current[i] = el;
            }}
            onFocusTile={() => {
              const el = tiles.current[i];
              if (el) {
                const r = el.getBoundingClientRect();
                pointAt(r.left + r.width / 2);
              }
            }}
            onBlurTile={leave}
            onSettle={() => tipTarget.set(centreOf(i))}
          />
        ))}
      </div>
    </div>
  );
}
