import Link from "next/link";
import { articles, insightCategories } from "@/content/insights";

export function ArticleList({ items }: { items: typeof articles }) {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((a) => (
        <li key={a.slug}>
          <Link href={`/insights/${a.slug}`} className="group flex h-full flex-col rounded-lg border border-line p-6 hover:border-ink">
            <span className="eyebrow">
              {insightCategories.find((c) => c.slug === a.category)?.title} · {a.kind}
            </span>
            <span className="mt-3 text-h3 font-bold text-ink group-hover:underline">{a.title}</span>
            <span className="mt-2 text-body-sm leading-relaxed text-ink-2">{a.description}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

