"use client";

/**
 * DigitalBurj site guide: the AI-chat hero.
 * Interface patterns adapted from the 21st.dev "AI Chats" collection (prompt input with
 * border beam, suggestions, thinking orb, tool-call steps, streaming text, source
 * citations). The answers are not generated: the guide searches an index of this site's
 * own pages in the browser and quotes the best match, with links. Nothing typed leaves
 * the page.
 */
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUp, Check, CornerDownLeft, FileText, Search, Sparkles, RotateCcw } from "lucide-react";
import { loadIndex, nextStepFor, search, type IndexEntry } from "@/lib/site-search";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const suggestions = [
  "Automate WhatsApp enquiries",
  "Build an MVP",
  "Learn web development",
  "Hire people who can show their work",
];

const placeholders = [
  "How do I stop losing leads from WhatsApp?",
  "Can you build an internal tool to replace our spreadsheet?",
  "Which course teaches AI agents?",
  "Do you guarantee jobs or visas?",
];

type Phase = "idle" | "thinking" | "streaming" | "done";
type Step = { label: string; done: boolean };

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useTypedPlaceholder(active: boolean) {
  const [text, setText] = useState(placeholders[0]);
  useEffect(() => {
    if (!active || prefersReducedMotion()) return;
    let i = 0;
    let c = 0;
    let dir = 1;
    let t: number;
    const tick = () => {
      const target = placeholders[i];
      c += dir;
      setText(target.slice(0, Math.max(0, c)));
      if (dir === 1 && c >= target.length) {
        dir = -1;
        t = window.setTimeout(tick, 2200);
        return;
      }
      if (dir === -1 && c <= 0) {
        dir = 1;
        i = (i + 1) % placeholders.length;
      }
      t = window.setTimeout(tick, dir === 1 ? 45 : 18);
    };
    t = window.setTimeout(tick, 1200);
    return () => window.clearTimeout(t);
  }, [active]);
  return text;
}

export function AiGuide() {
  const [q, setQ] = useState("");
  const [asked, setAsked] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [steps, setSteps] = useState<Step[]>([]);
  const [results, setResults] = useState<IndexEntry[]>([]);
  const [streamed, setStreamed] = useState("");
  const [pageCount, setPageCount] = useState<number | null>(null);
  const timers = useRef<number[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const placeholder = useTypedPlaceholder(phase === "idle" && q === "");

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  function later(fn: () => void, ms: number) {
    timers.current.push(window.setTimeout(fn, ms));
  }

  async function ask(query: string) {
    const text = query.trim();
    if (!text) return;
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setAsked(text);
    setQ("");
    setStreamed("");
    setResults([]);
    setPhase("thinking");
    track("site_guide_query", { length: text.length });
    requestAnimationFrame(() => panelRef.current?.scrollIntoView({ block: "nearest", behavior: prefersReducedMotion() ? "auto" : "smooth" }));

    const reduce = prefersReducedMotion();
    const index = await loadIndex();
    setPageCount(index.length);
    const found = search(text, index, 4);
    const plan: Step[] = [
      { label: "Reading your question", done: false },
      { label: `Searching ${index.length} pages on this site`, done: false },
      { label: found.length ? `Found ${found.length} relevant page${found.length > 1 ? "s" : ""}` : "No close match found", done: false },
    ];
    setSteps(plan);
    const stepMs = reduce ? 0 : 520;
    plan.forEach((_, i) => later(() => setSteps((s) => s.map((x, j) => (j <= i ? { ...x, done: true } : x))), stepMs * (i + 1)));

    later(() => {
      setResults(found);
      const answer = found[0]
        ? found[0].summary
        : "I couldn't find a page that answers that. Try one of the suggestions, or send us a message and a person will reply.";
      if (reduce) {
        setStreamed(answer);
        setPhase("done");
        return;
      }
      setPhase("streaming");
      const words = answer.split(/(\s+)/);
      let n = 0;
      const stream = () => {
        n += 2;
        setStreamed(words.slice(0, n).join(""));
        if (n < words.length) later(stream, 28);
        else setPhase("done");
      };
      stream();
    }, stepMs * (plan.length + 0.6));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void ask(q);
  }

  function reset() {
    timers.current.forEach(clearTimeout);
    setPhase("idle");
    setAsked("");
    setStreamed("");
    setResults([]);
    requestAnimationFrame(() => inputRef.current?.focus());
  }

  const best = results[0];
  const next = best ? nextStepFor(best) : { label: "Talk to us", href: "/contact" };
  const busy = phase === "thinking" || phase === "streaming";

  return (
    <div className="mx-auto w-full max-w-2xl text-left">
      <form onSubmit={onSubmit} className="beam glass group/prompt relative rounded-xl p-2 transition-shadow duration-500 focus-within:shadow-[0_0_0_1px_rgb(23_104_63/0.35),0_0_60px_-12px_rgb(23_104_63/0.45)]">
        <label htmlFor="site-guide" className="sr-only">
          Ask the DigitalBurj site guide
        </label>
        <div className="flex items-center gap-2">
          <Sparkles aria-hidden="true" className="ml-3 size-5 shrink-0 text-ai" />
          <input
            ref={inputRef}
            id="site-guide"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={placeholder}
            autoComplete="off"
            className="h-12 min-w-0 flex-1 bg-transparent text-base text-ink placeholder:text-muted focus:outline-none"
          />
          <button
            type="submit"
            disabled={!q.trim() || busy}
            className="grid size-10 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,var(--color-accent-deep),var(--color-ember))] text-white shadow-[0_0_24px_-6px_var(--color-accent)] transition-[transform,opacity] hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {busy ? <span className="spinner size-4" aria-hidden="true" /> : <ArrowUp className="size-5" aria-hidden="true" />}
            <span className="sr-only">Ask</span>
          </button>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-line px-3 pb-1 pt-2 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-ai shadow-[0_0_8px_var(--color-ai)]" aria-hidden="true" />
            site guide · answers from this website
          </span>
          <span className="hidden items-center gap-1 sm:flex">
            <CornerDownLeft className="size-3" aria-hidden="true" /> to ask
          </span>
        </div>
      </form>

      {phase === "idle" ? (
        <ul className="mt-4 flex flex-wrap justify-center gap-2 max-sm:[&>li:nth-child(n+3)]:hidden [@media(max-height:820px)]:[&>li:nth-child(n+4)]:hidden max-sm:[@media(max-height:740px)]:hidden" aria-label="Suggestions">
          {suggestions.map((s, i) => (
            <li key={s} className="animate-rise" style={{ ["--d" as string]: `${500 + i * 70}ms` }}>
              <button
                type="button"
                onClick={() => void ask(s)}
                className="rounded-full border border-line-strong bg-paper/80 px-3.5 py-1.5 text-sm text-ink-2 backdrop-blur-md transition-colors hover:border-ai/50 hover:bg-ai-soft hover:text-ink"
              >
                {s}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div ref={panelRef} aria-live="polite" className="glass animate-rise mt-4 scroll-mb-6 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface text-xs font-semibold text-ink">
              You
            </span>
            <p className="pt-1 text-ink">{asked}</p>
          </div>
          <div className="mt-4 flex items-start gap-3">
            <span aria-hidden="true" className="ai-orb mt-0.5 size-8 shrink-0" data-state={busy ? "thinking" : "idle"} />
            <div className="min-w-0 flex-1">
              <ol className="space-y-1.5 text-xs">
                {steps.map((s, i) => {
                  const Icon = i === 0 ? FileText : i === 1 ? Search : Check;
                  return (
                    <li key={s.label} className={cn("flex items-center gap-2", s.done ? "text-muted" : "text-shimmer")}>
                      <Icon aria-hidden="true" className={cn("size-3.5 shrink-0", s.done ? "text-ai" : "text-muted")} />
                      {s.label}
                    </li>
                  );
                })}
              </ol>
              {phase === "thinking" && steps.every((s) => s.done) ? (
                <p className="ai-dots-loader mt-3 flex gap-1" aria-label="Preparing answer">
                  <span />
                  <span />
                  <span />
                </p>
              ) : null}
              {streamed ? (
                <p className={cn("mt-3 leading-relaxed text-ink-2", phase === "streaming" && "caret")}>
                  {streamed}
                  {phase === "done" && best ? (
                    <sup>
                      <a href="#src-1" className="ml-1 text-ai">[1]</a>
                    </sup>
                  ) : null}
                </p>
              ) : null}
              {phase === "done" ? (
                <div className="mt-4">
                  {results.length ? (
                    <>
                      <p className="text-xs uppercase tracking-[0.14em] text-muted">Sources</p>
                      <ol className="mt-2 flex flex-wrap gap-2">
                        {results.map((r, i) => (
                          <li key={r.path} id={`src-${i + 1}`}>
                            <Link
                              href={r.path}
                              onClick={() => track("site_guide_source", { path: r.path })}
                              className="inline-flex items-center gap-2 rounded-md border border-line-strong bg-paper px-2.5 py-1.5 text-sm text-ink transition-colors hover:border-ai/60 hover:bg-ai-soft"
                            >
                              <span className="text-xs text-ai">{i + 1}</span>
                              {r.title}
                              <span className="text-xs text-muted">· {r.section}</span>
                            </Link>
                          </li>
                        ))}
                      </ol>
                    </>
                  ) : null}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <Link
                      href={next.href}
                      className="inline-flex h-9 items-center rounded-full bg-[linear-gradient(110deg,var(--color-accent-deep),var(--color-ember))] px-4 text-sm font-semibold text-white"
                    >
                      {next.label}
                    </Link>
                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line-strong px-3.5 text-sm text-ink-2 hover:border-ai/50 hover:text-ink"
                    >
                      <RotateCcw className="size-3.5" aria-hidden="true" /> Ask something else
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          {pageCount ? <p className="sr-only">Searched {pageCount} pages.</p> : null}
        </div>
      )}
    </div>
  );
}
