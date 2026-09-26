"use client";

/**
 * Minimal toast notifications. Anything can raise one with
 *   toast({ title, body, tone })
 * which dispatches a window event this component listens for. Toasts sit in an
 * aria-live region, stack bottom-left and dismiss themselves after five seconds.
 */
import { useEffect, useState } from "react";
import { CircleAlert, CircleCheck, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Tone = "success" | "error" | "ai";
type Toast = { id: number; title: string; body?: string; tone: Tone };

const EVENT = "db:toast";

export function toast(t: Omit<Toast, "id" | "tone"> & { tone?: Tone }) {
  window.dispatchEvent(new CustomEvent(EVENT, { detail: { tone: "ai", ...t } }));
}

const icons = { success: CircleCheck, error: CircleAlert, ai: Sparkles };

export function Toaster() {
  const [items, setItems] = useState<Toast[]>([]);
  useEffect(() => {
    let n = 0;
    const onToast = (e: Event) => {
      const t = { ...(e as CustomEvent<Omit<Toast, "id">>).detail, id: ++n };
      setItems((xs) => [...xs.slice(-2), t]);
      window.setTimeout(() => setItems((xs) => xs.filter((x) => x.id !== t.id)), 5000);
    };
    window.addEventListener(EVENT, onToast);
    return () => window.removeEventListener(EVENT, onToast);
  }, []);

  return (
    <div aria-live="polite" className="pointer-events-none fixed bottom-5 left-5 z-50 flex w-[min(22rem,calc(100vw-2.5rem))] flex-col gap-2">
      {items.map((t) => {
        const Icon = icons[t.tone];
        return (
          <div key={t.id} role="status" className="glass animate-toast pointer-events-auto flex items-start gap-3 rounded-lg p-4">
            <Icon
              aria-hidden="true"
              className={cn("mt-0.5 size-5 shrink-0", t.tone === "error" ? "text-danger" : t.tone === "success" ? "text-success" : "text-ai")}
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-ink">{t.title}</p>
              {t.body ? <p className="mt-0.5 text-sm text-muted">{t.body}</p> : null}
            </div>
            <button
              type="button"
              onClick={() => setItems((xs) => xs.filter((x) => x.id !== t.id))}
              className="rounded-full p-1 text-muted hover:bg-fill hover:text-ink"
            >
              <X className="size-4" aria-hidden="true" />
              <span className="sr-only">Dismiss</span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
