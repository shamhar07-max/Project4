import { Plus } from "lucide-react";
import type { Faq } from "@/content/types";

/**
 * FAQ answers use native <details>, so every answer is present in the rendered HTML
 * (readable by search and answer engines) and keyboard accessible without JavaScript.
 */
export function FaqList({ faqs, title = "Questions" }: { faqs: Faq[]; title?: string }) {
  return (
    <section className="border-t border-line py-14 sm:py-16" aria-labelledby="faq-heading">
      <div className="container-site grid gap-10 lg:grid-cols-[18rem_1fr]">
        <h2 id="faq-heading" className="text-h2 font-extrabold text-ink">
          {title}
        </h2>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex items-start justify-between gap-6 py-5 text-left">
                <h3 className="text-[1.0625rem] font-bold text-ink">{f.q}</h3>
                <Plus
                  className="mt-1 size-5 shrink-0 text-accent-strong transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-3xl pb-6 text-[1rem] leading-relaxed text-ink-2">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
