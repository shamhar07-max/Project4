"use client";

/**
 * PromptBar: a prompt input with an animated metallic outline and two small option menus.
 * Recreates the 21st.dev "Prompt Bar" by @marcellinleclercq (MIT) with the same API:
 * <PromptBar onSubmit={(value) => …} />.
 *
 * Pass `demo` to make it a display piece: people can type and use the menus, a sample
 * prompt types itself while the bar is idle, but nothing is ever submitted. Enter or the
 * send button just shows `demoNote`.
 */
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowUp, Check, ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Menu = { label: string; options: string[] };

function OptionMenu({ menu, value, onChange }: { menu: Menu; value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !ref.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("pointerdown", close);
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("pointerdown", close);
      window.removeEventListener("keydown", close);
    };
  }, [open]);
  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${menu.label}: ${value}`}
        onClick={() => setOpen((o) => !o)}
        className="flex h-8 items-center gap-1 rounded-full px-2.5 text-sm text-ink-2 transition-colors hover:bg-fill hover:text-ink"
      >
        {value}
        <ChevronDown className={cn("size-3.5 text-muted transition-transform", open && "rotate-180")} aria-hidden="true" />
      </button>
      {open ? (
        <ul
          role="listbox"
          aria-label={menu.label}
          className="animate-toast absolute bottom-full left-0 z-20 mb-2 min-w-44 rounded-md border border-line bg-paper p-1 text-left shadow-xl"
        >
          {menu.options.map((o) => (
            <li key={o} role="option" aria-selected={o === value}>
              <button
                type="button"
                onClick={() => {
                  onChange(o);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between gap-3 rounded-sm px-3 py-2 text-sm text-ink hover:bg-fill"
              >
                {o}
                {o === value ? <Check className="size-3.5 text-accent-strong" aria-hidden="true" /> : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function PromptBar({
  onSubmit,
  placeholder = "Describe what you want to build…",
  menus = [
    { label: "Stack", options: ["Vite + React + TS", "Next.js + React", "React Native"] },
    { label: "Mode", options: ["Balanced", "Fast", "Thorough"] },
  ],
  demo = false,
  demoPrompts = [],
  demoNote,
  className,
}: {
  onSubmit?: (value: string) => void;
  placeholder?: string;
  menus?: Menu[];
  demo?: boolean;
  demoPrompts?: string[];
  demoNote?: ReactNode;
  className?: string;
}) {
  const [value, setValue] = useState("");
  const [typed, setTyped] = useState("");
  const [touched, setTouched] = useState(false);
  const [note, setNote] = useState(false);
  const [choices, setChoices] = useState(menus.map((m) => m.options[0]));

  // Idle demo: type a sample prompt, pause, delete, next. Stops as soon as someone types.
  useEffect(() => {
    if (!demo || touched || !demoPrompts.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    let c = 0;
    let dir = 1;
    let t: number;
    const tick = () => {
      const s = demoPrompts[i];
      c += dir;
      setTyped(s.slice(0, Math.max(0, c)));
      if (dir === 1 && c >= s.length) {
        dir = -1;
        t = window.setTimeout(tick, 2400);
        return;
      }
      if (dir === -1 && c <= 0) {
        dir = 1;
        i = (i + 1) % demoPrompts.length;
        t = window.setTimeout(tick, 500);
        return;
      }
      t = window.setTimeout(tick, dir === 1 ? 55 : 22);
    };
    t = window.setTimeout(tick, 1200);
    return () => window.clearTimeout(t);
  }, [demo, touched, demoPrompts]);

  function submit(e: FormEvent) {
    e.preventDefault();
    if (demo) {
      setNote(true);
      return;
    }
    if (value.trim()) {
      onSubmit?.(value.trim());
      setValue("");
    }
  }

  const showTyped = demo && !touched && !value;
  const canSend = !demo && value.trim().length > 0;

  return (
    <div className={cn("w-full max-w-2xl", className)}>
      <form onSubmit={submit} className="metal-outline relative rounded-[1.75rem] bg-paper p-2 shadow-[0_12px_40px_-18px_rgb(0_0_0/0.35)]">
        <label htmlFor="prompt-bar" className="sr-only">
          {placeholder}
        </label>
        <div className="relative px-3 pt-1.5">
          <textarea
            id="prompt-bar"
            rows={2}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setTouched(true);
              setNote(false);
            }}
            onFocus={() => setTouched(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) submit(e);
            }}
            placeholder={showTyped ? "" : placeholder}
            className="block h-[3.25em] w-full resize-none bg-transparent text-left text-base leading-relaxed text-ink placeholder:text-muted focus:outline-none max-sm:h-[1.625em] [@media(max-height:820px)]:h-[1.625em]"
          />
          {showTyped ? (
            <p aria-hidden="true" className="pointer-events-none absolute inset-x-3 top-1.5 truncate text-left text-base leading-relaxed text-muted">
              {typed}
              <span className="ml-px inline-block h-[1.1em] w-0.5 translate-y-[0.15em] animate-pulse bg-ink" />
            </p>
          ) : null}
        </div>
        <div className="mt-1 flex items-center gap-1">
          <button
            type="button"
            aria-label="Add attachment"
            className="grid size-8 place-items-center rounded-full text-ink-2 transition-colors hover:bg-fill hover:text-ink"
          >
            <Plus className="size-4" aria-hidden="true" />
          </button>
          {menus.map((m, i) => (
            <OptionMenu
              key={m.label}
              menu={m}
              value={choices[i]}
              onChange={(v) => setChoices((cs) => cs.map((x, j) => (j === i ? v : x)))}
            />
          ))}
          <button
            type="submit"
            aria-disabled={!canSend}
            className={cn(
              "ml-auto grid size-9 place-items-center rounded-full transition-colors",
              canSend ? "bg-ink text-night hover:bg-ink-2" : "cursor-not-allowed bg-fill text-muted",
            )}
          >
            <ArrowUp className="size-4" aria-hidden="true" />
            <span className="sr-only">Send</span>
          </button>
        </div>
      </form>
      {demo && note && demoNote ? (
        <p role="status" className="animate-toast mt-3 text-sm text-ink-2">
          {demoNote}
        </p>
      ) : null}
    </div>
  );
}
