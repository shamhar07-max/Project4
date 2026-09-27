import { ChevronDown } from "lucide-react";
import type { Faq } from "@/content/types";

/**
 * FAQ answers use native <details>, so every answer is present in the rendered HTML
 * (readable by search and answer engines) and keyboard accessible without JavaScript.
 * Styled as an iOS inset grouped list.
 */
export function FaqList({ faqs, title = "Questions" }: { faqs: Faq[]; title?: string }) {
  return (
    <section className="relative section-pad" aria-labelledby="faq-heading">
      <div className="container-site grid gap-10 lg:grid-cols-[18rem_1fr]">
        <div data-reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-xs font-semibold text-ink-2">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            FAQ
          </p>
          <h2 id="faq-heading" className="mt-5 text-h2 font-semibold text-ink">
            {title}
          </h2>
        </div>
        <div className="divide-y divide-line self-start overflow-hidden rounded-[1.25rem] border border-line bg-paper px-5 sm:px-6">
          {faqs.map((f, i) => (
            <details key={f.q} className="faq-item group" data-reveal style={{ ["--i" as string]: i % 6 }}>
              <summary className="flex items-start justify-between gap-6 py-5 text-left transition-colors hover:text-accent">
                <h3 className="text-body font-bold text-ink">{f.q}</h3>
                <ChevronDown
                  className="mt-1 size-5 shrink-0 text-muted transition-transform duration-300 ease-(--ease-out-quint) group-open:rotate-180 group-open:text-accent"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-3xl pb-5 text-body leading-relaxed text-ink-2">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
