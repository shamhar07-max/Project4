import { Button } from "@/components/ui/button";
import { TrackedLink } from "./tracked-link";

export function CtaBand({
  heading = "Start with the problem you need to solve.",
  body,
  label,
  href,
  secondary,
}: {
  heading?: string;
  body?: string;
  label: string;
  href: string;
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="section-pad-compact">
      <div className="container-site">
        <div className="beam relative overflow-hidden rounded-xl border border-line bg-night px-6 py-12 sm:px-12 sm:py-14" data-reveal>
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-accent/20 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-1/4 size-80 rounded-full bg-ai/10 blur-3xl" />
          <div aria-hidden="true" className="ai-grid pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative max-w-2xl">
            <h2 className="text-h2 font-extrabold text-white">{heading}</h2>
            {body ? <p className="mt-4 text-lead text-white/75">{body}</p> : null}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <TrackedLink href={href} eventLabel={label}>
                  {label}
                </TrackedLink>
              </Button>
              {secondary ? (
                <Button asChild size="lg" variant="outline-inverse">
                  <TrackedLink href={secondary.href} eventLabel={secondary.label}>
                    {secondary.label}
                  </TrackedLink>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
