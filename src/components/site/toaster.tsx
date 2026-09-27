"use client";

/**
 * Toast notifications. Anything can raise one with
 *   toast({ title, body, tone, action, duration })
 * which dispatches a window event this component listens for. Toasts sit in an
 * aria-live region, stack bottom-left and dismiss themselves.
 */
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bell, CircleAlert, CircleCheck, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Tone = "success" | "error" | "info";
type Toast = { id: number; title: string; body?: string; tone: Tone; action?: { label: string; href: string }; duration?: number };

const EVENT = "db:toast";

export function toast(t: Omit<Toast, "id" | "tone"> & { tone?: Tone }) {
  window.dispatchEvent(new CustomEvent(EVENT, { detail: { tone: "info", ...t } }));
}

const icons = { success: CircleCheck, error: CircleAlert, info: Bell };

export function Toaster() {
  const [items, setItems] = useState<Toast[]>([]);
  useEffect(() => {
    let n = 0;
    const onToast = (e: Event) => {
      const t = { ...(e as CustomEvent<Omit<Toast, "id">>).detail, id: ++n };
      setItems((xs) => [...xs.slice(-2), t]);
      window.setTimeout(() => setItems((xs) => xs.filter((x) => x.id !== t.id)), t.duration ?? 6000);
    };
    window.addEventListener(EVENT, onToast);
    return () => window.removeEventListener(EVENT, onToast);
  }, []);

  const dismiss = (id: number) => setItems((xs) => xs.filter((x) => x.id !== id));

  return (
    <div aria-live="polite" className="pointer-events-none fixed bottom-5 left-5 z-50 flex w-[min(22rem,calc(100vw-2.5rem))] flex-col gap-2 print:hidden">
      {items.map((t) => {
        const Icon = icons[t.tone];
        return (
          <div key={t.id} role="status" className="animate-toast pointer-events-auto flex items-start gap-3 rounded-[1.25rem] border border-line bg-paper p-4 shadow-xl">
            <Icon
              aria-hidden="true"
              className={cn("mt-0.5 size-5 shrink-0", t.tone === "error" ? "text-danger" : t.tone === "success" ? "text-success" : "text-accent-strong")}
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-ink">{t.title}</p>
              {t.body ? <p className="mt-0.5 text-sm text-ink-2">{t.body}</p> : null}
              {t.action ? (
                <Link href={t.action.href} onClick={() => dismiss(t.id)} className="link mt-2 inline-block text-sm font-semibold">
                  {t.action.label}
                </Link>
              ) : null}
            </div>
            <button type="button" onClick={() => dismiss(t.id)} className="rounded-full p-1 text-muted hover:bg-fill hover:text-ink">
              <X className="size-4" aria-hidden="true" />
              <span className="sr-only">Dismiss</span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
