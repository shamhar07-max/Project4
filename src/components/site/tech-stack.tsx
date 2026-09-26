"use client";

/**
 * Tech stack dock (from the 21st.dev "techstack" usage example by @carolinaraulino).
 * Logos are from svgl.app, stored locally in /public/brand/stack so the page doesn't
 * depend on a third-party image host. Tile colours are each product's own brand colour.
 */
import { useId } from "react";
import { ToolDock, ToolDockTile, type ToolDockItem } from "@/components/ui/techstack";
import { cn } from "@/lib/utils";

/**
 * The Codex app icon: the mark (from svgl.app) in its blue-violet gradient.
 * The prompt is cut out of the cloud, so a white square behind it, smaller
 * than the cloud, shows through only there.
 */
function CodexIcon() {
  const gradient = useId();
  return (
    <ToolDockTile className="bg-[#222]">
      <svg viewBox="0 0 24 24" aria-hidden className="size-[62%]">
        <defs>
          <linearGradient id={gradient} x1="0.35" y1="0" x2="0.6" y2="1">
            <stop offset="0" stopColor="#bdacf9" />
            <stop offset="0.5" stopColor="#7590f7" />
            <stop offset="1" stopColor="#352df5" />
          </linearGradient>
        </defs>
        <rect x="6" y="7" width="12" height="10" fill="#fff" />
        <path
          fill={`url(#${gradient})`}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.086.457a6.105 6.105 0 013.046-.415c1.333.153 2.521.72 3.564 1.7a.117.117 0 00.107.029c1.408-.346 2.762-.224 4.061.366l.063.03.154.076c1.357.703 2.33 1.77 2.918 3.198.278.679.418 1.388.421 2.126a5.655 5.655 0 01-.18 1.631.167.167 0 00.04.155 5.982 5.982 0 011.578 2.891c.385 1.901-.01 3.615-1.183 5.14l-.182.22a6.063 6.063 0 01-2.934 1.851.162.162 0 00-.108.102c-.255.736-.511 1.364-.987 1.992-1.199 1.582-2.962 2.462-4.948 2.451-1.583-.008-2.986-.587-4.21-1.736a.145.145 0 00-.14-.032c-.518.167-1.04.191-1.604.185a5.924 5.924 0 01-2.595-.622 6.058 6.058 0 01-2.146-1.781c-.203-.269-.404-.522-.551-.821a7.74 7.74 0 01-.495-1.283 6.11 6.11 0 01-.017-3.064.166.166 0 00.008-.074.115.115 0 00-.037-.064 5.958 5.958 0 01-1.38-2.202 5.196 5.196 0 01-.333-1.589 6.915 6.915 0 01.188-2.132c.45-1.484 1.309-2.648 2.577-3.493.282-.188.55-.334.802-.438.286-.12.573-.22.861-.304a.129.129 0 00.087-.087A6.016 6.016 0 015.635 2.31C6.315 1.464 7.132.846 8.086.457zm-.804 7.85a.848.848 0 00-1.473.842l1.694 2.965-1.688 2.848a.849.849 0 001.46.864l1.94-3.272a.849.849 0 00.007-.854l-1.94-3.393zm5.446 6.24a.849.849 0 000 1.695h4.848a.849.849 0 000-1.696h-4.848z"
        />
      </svg>
    </ToolDockTile>
  );
}

/** A brand logo from svgl.app on its app-icon tile. */
function logo(label: string, file: string, tile: string, { fit = "size-[54%]", tone = "" } = {}): ToolDockItem {
  return {
    label,
    icon: (
      <ToolDockTile className={tile}>
        {/* eslint-disable-next-line @next/next/no-img-element -- tiny local SVGs, no optimisation needed */}
        <img src={`/brand/stack/${file}.svg`} alt="" draggable={false} className={`${fit} object-contain ${tone}`} />
      </ToolDockTile>
    ),
  };
}

/** Light and dark tiles alternate down the row. */
const items: ToolDockItem[] = [
  logo("Claude Code", "claude-ai-icon", "bg-[#d76f4d]", { fit: "size-[58%]", tone: "brightness-0 invert" }),
  { label: "Codex", icon: <CodexIcon /> },
  logo("VS Code", "vscode", "bg-white"),
  logo("GitHub", "github_dark", "bg-[#0d1117]"),
  logo("Figma", "figma", "bg-white", { fit: "size-[46%]" }),
  logo("Supabase", "supabase", "bg-[#171717]"),
  logo("Slack", "slack", "bg-white"),
  logo("Vercel", "vercel_dark", "bg-black", { fit: "size-[46%]" }),
  logo("PostHog", "posthog", "bg-[#eeefe9]", { fit: "size-[58%]" }),
  logo("Cursor", "cursor_dark", "bg-[#14120b]", { fit: "size-[50%]" }),
  logo("Cloudflare", "cloudflare", "bg-white", { fit: "size-[64%]" }),
  logo("Sentry", "sentry", "bg-[#362d59]", { tone: "brightness-0 invert" }),
];

export function TechStack({ className }: { className?: string }) {
  return (
    <section aria-labelledby="tech-stack-heading" className={cn("flex w-full flex-col items-center text-center", className)}>
      <h2 id="tech-stack-heading" className="text-sm font-semibold text-muted sm:text-body-sm max-sm:[@media(max-height:680px)]:sr-only">
        Tech stack
      </h2>
      {/* The dock reserves its own room above for the tooltip, which is the gap under the heading. */}
      <ToolDock items={items} label="Tech stack" />
    </section>
  );
}
