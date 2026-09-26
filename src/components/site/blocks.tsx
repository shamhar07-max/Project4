import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Block, Card } from "@/content/types";
import { cn } from "@/lib/utils";

export function FlowDiagram({ steps, caption, tone = "paper" }: { steps: string[]; caption?: string; tone?: "paper" | "ink" }) {
  return (
    <figure>
      <ol
        className={cn(
          "flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center",
          tone === "ink" ? "text-white" : "text-ink",
        )}
      >
        {steps.map((s, i) => (
          <li key={s + i} className="flex items-center gap-2 sm:contents">
            <span
              className={cn(
                "inline-flex min-h-11 items-center gap-2.5 rounded-md border px-3.5 py-2 text-[0.9375rem] font-semibold",
                tone === "ink" ? "border-white/20 bg-white/5" : "border-line bg-paper",
              )}
            >
              <span className={cn("text-xs tabular-nums", tone === "ink" ? "text-accent" : "text-accent-strong")}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {s}
            </span>
            {i < steps.length - 1 ? (
              <ArrowRight
                aria-hidden="true"
                className={cn("size-4 shrink-0 max-sm:rotate-90 max-sm:ml-4", tone === "ink" ? "text-white/40" : "text-line-strong")}
              />
            ) : null}
          </li>
        ))}
      </ol>
      {caption ? (
        <figcaption className={cn("mt-4 max-w-2xl text-sm", tone === "ink" ? "text-white/65" : "text-muted")}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function StepList({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.title} className="bg-paper p-6">
          <span className="text-sm font-bold tabular-nums text-accent-strong">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-3 text-h3 font-bold text-ink">{s.title}</h3>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function CardGrid({ items, columns = 3 }: { items: Card[]; columns?: 2 | 3 | 4 }) {
  return (
    <ul
      className={cn(
        "grid gap-4 sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        columns === 4 && "lg:grid-cols-4",
      )}
    >
      {items.map((c) => (
        <li key={c.title} className="flex">
          {c.href ? (
            <Link
              href={c.href}
              className="group flex w-full flex-col rounded-lg border border-line bg-paper p-6 transition-colors hover:border-ink"
            >
              <h3 className="text-h3 font-bold text-ink">{c.title}</h3>
              <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-2">{c.body}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong">
                Learn more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                <span className="sr-only">about {c.title}</span>
              </span>
            </Link>
          ) : (
            <div className="flex w-full flex-col rounded-lg border border-line bg-paper p-6">
              <h3 className="text-h3 font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{c.body}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

function BlockBody({ block }: { block: Block }) {
  switch (block.type) {
    case "text":
      return (
        <div className="prose-db">
          {block.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      );
    case "list":
      return (
        <ul
          className={cn(
            "grid gap-x-8 gap-y-3",
            (block.columns ?? 2) >= 2 && "sm:grid-cols-2",
            block.columns === 3 && "lg:grid-cols-3",
          )}
        >
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 border-b border-line pb-3 text-[0.9875rem] text-ink-2">
              <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "cards":
      return <CardGrid items={block.items} />;
    case "flow":
      return <FlowDiagram steps={block.steps} caption={block.caption} />;
    case "steps":
      return <StepList steps={block.steps} />;
    case "callout":
      return null;
    case "compare":
      return (
        <div className="overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[36rem] border-collapse text-left text-[0.9375rem]">
            <thead className="bg-surface">
              <tr>
                {block.columns.map((c) => (
                  <th key={c} scope="col" className="border-b border-line px-4 py-3 font-semibold text-ink">
                    {c || <span className="sr-only">Aspect</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((r) => (
                <tr key={r[0]} className="border-b border-line last:border-0 align-top">
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">
                    {r[0]}
                  </th>
                  <td className="px-4 py-3 text-ink-2">{r[1]}</td>
                  <td className="px-4 py-3 text-ink-2">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function BlockSection({ block, index }: { block: Block; index: number }) {
  if (block.type === "callout") {
    return (
      <section className="py-10 sm:py-12">
        <div className="container-site">
          <div className="rounded-lg border-l-4 border-accent bg-accent-soft px-6 py-7 sm:px-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl">{block.heading}</h2>
            <p className="mt-3 max-w-3xl text-[1.0625rem] leading-relaxed text-ink-2">{block.body}</p>
          </div>
        </div>
      </section>
    );
  }
  const tinted = block.type === "flow" || block.type === "steps";
  return (
    <section className={cn("py-14 sm:py-16", tinted ? "bg-surface" : index > 0 && "border-t border-line")}>
      <div className="container-site">
        <div className="max-w-3xl">
          <h2 className="text-h2 font-extrabold text-ink">{block.heading}</h2>
          {"intro" in block && block.intro ? (
            <p className="mt-4 text-lead text-ink-2">{block.intro}</p>
          ) : null}
        </div>
        <div className="mt-8 sm:mt-10">
          <BlockBody block={block} />
        </div>
      </div>
    </section>
  );
}
