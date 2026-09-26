"use client";

/** Thin announcement strip above the header. Rotates through offers; can be closed for the session. */
import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { announcements } from "@/content/promotions";
import { track } from "@/lib/analytics";

const KEY = "db_announce_closed";

export function AnnouncementBar() {
  const [i, setI] = useState(0);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(KEY)) setClosed(true);
    } catch {}
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setI((x) => (x + 1) % announcements.length), 7000);
    return () => window.clearInterval(t);
  }, []);

  if (closed || !announcements.length) return null;
  const a = announcements[i];
  return (
    <aside aria-label="Announcement" className="relative z-50 bg-night text-white print:hidden max-sm:[@media(max-height:740px)]:hidden">
      <div className="container-site flex h-9 items-center justify-center gap-3 pr-10 text-center text-xs sm:text-sm">
        <p key={a.id} className="animate-toast truncate">
          <span className="text-white/85">{a.text}</span>{" "}
          <Link
            href={a.href}
            onClick={() => track("announcement_click", { id: a.id })}
            className="font-semibold text-white underline underline-offset-2 hover:no-underline"
          >
            {a.cta}
          </Link>
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          setClosed(true);
          try {
            window.sessionStorage.setItem(KEY, "1");
          } catch {}
        }}
        className="absolute right-2 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full text-white/70 hover:bg-white/10 hover:text-white"
      >
        <X className="size-4" aria-hidden="true" />
        <span className="sr-only">Close announcement</span>
      </button>
    </aside>
  );
}
