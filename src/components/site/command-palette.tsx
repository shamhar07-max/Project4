"use client";

/**
 * Command palette (⌘K / Ctrl+K or "/"): a search dialog over the site index.
 * Arrow keys move through results, Enter opens one. Built on the Radix Dialog primitive
 * already used for the mobile sheet, so focus trapping and Escape are handled.
 */
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState, type KeyboardEvent } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { CornerDownLeft, FileSearch, Search } from "lucide-react";
import { loadIndex, search, type IndexEntry } from "@/lib/site-search";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const quick: { title: string; path: string; section: string }[] = [
  { title: "Business AI", path: "/business-ai", section: "Division" },
  { title: "Academy courses", path: "/academy/courses", section: "Division" },
  { title: "Studio", path: "/studio", section: "Division" },
  { title: "Verified Talent", path: "/talent", section: "Division" },
  { title: "Jobs", path: "/jobs", section: "Division" },
  { title: "Get started", path: "/get-started", section: "Action" },
  { title: "Contact", path: "/contact", section: "Action" },
];

export function CommandPalette({ className }: { className?: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [index, setIndex] = useState<IndexEntry[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing = target.isContentEditable || /INPUT|TEXTAREA|SELECT/.test(target.tagName);
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    track("search_open");
    void loadIndex().then(setIndex);
  }, [open]);

  const results = useMemo(
    () => (q.trim() ? search(q, index, 8).map((r) => ({ title: r.title, path: r.path, section: r.section, summary: r.summary })) : quick.map((x) => ({ ...x, summary: "" }))),
    [q, index],
  );

  useEffect(() => setActive(0), [q]);

  function go(path: string) {
    track("search_select", { path });
    setOpen(false);
    setQ("");
    router.push(path);
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(results.length - 1, a + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      go(results[active].path);
    }
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>
        <button
          type="button"
          className={cn(
            "group flex size-10 items-center justify-center rounded-full border border-line-strong bg-fill text-sm text-muted transition-colors hover:border-accent/50 hover:text-ink",
            className,
          )}
        >
          <Search className="size-4" aria-hidden="true" />
          <span className="sr-only">Search the site (Ctrl or ⌘ + K)</span>
        </button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-[fade-in_0.2s_ease-out]" />
        <DialogPrimitive.Content
          aria-describedby={undefined}
          className="glass fixed left-1/2 top-[12vh] z-50 w-[min(40rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-xl data-[state=open]:animate-[menu-in_0.22s_var(--ease-out-quint)]"
        >
          <DialogPrimitive.Title className="sr-only">Search DigitalBurj</DialogPrimitive.Title>
          <div className="flex items-center gap-3 border-b border-line px-4">
            <Search className="size-5 shrink-0 text-muted" aria-hidden="true" />
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Search pages, services, courses…"
              role="combobox"
              aria-expanded="true"
              aria-controls="palette-results"
              aria-activedescendant={results[active] ? `palette-${active}` : undefined}
              aria-label="Search the site"
              className="h-14 min-w-0 flex-1 bg-transparent text-base text-ink placeholder:text-muted focus:outline-none"
            />
            <kbd className="rounded border border-line-strong px-1.5 py-0.5 text-xs text-muted">esc</kbd>
          </div>
          <p className="px-4 pt-3 text-xs uppercase tracking-[0.14em] text-muted">{q.trim() ? "Results" : "Jump to"}</p>
          {results.length ? (
            <ul id="palette-results" role="listbox" aria-label="Results" className="max-h-[50vh] overflow-y-auto p-2">
              {results.map((r, i) => (
                <li
                  key={r.path}
                  id={`palette-${i}`}
                  role="option"
                  aria-selected={i === active}
                  onMouseMove={() => setActive(i)}
                  onClick={() => go(r.path)}
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-md px-3 py-2.5",
                    i === active ? "bg-accent/15 shadow-[inset_0_0_0_1px_rgb(252_48_18/0.45)]" : "",
                  )}
                >
                  <FileSearch aria-hidden="true" className={cn("mt-0.5 size-4 shrink-0", i === active ? "text-accent" : "text-muted")} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-ink">{r.title}</span>
                    {r.summary ? <span className="mt-0.5 line-clamp-1 block text-xs text-muted">{r.summary}</span> : null}
                  </span>
                  <span className="shrink-0 text-xs text-muted">{r.section}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-6 py-10 text-center">
              <Search aria-hidden="true" className="mx-auto size-8 text-muted" />
              <p className="mt-4 font-semibold text-ink">Nothing matches &ldquo;{q}&rdquo;</p>
              <p className="mt-1 text-sm text-muted">Try fewer words, or ask us directly on the contact page.</p>
            </div>
          )}
          <div className="flex items-center gap-4 border-t border-line px-4 py-2.5 text-xs text-muted">
            <span>↑↓ move</span>
            <span className="flex items-center gap-1">
              <CornerDownLeft className="size-3" aria-hidden="true" /> open
            </span>
            <span className="ml-auto">{index.length ? `${index.length} pages indexed` : "loading…"}</span>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
