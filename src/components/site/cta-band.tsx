import { Button } from "@/components/ui/button";
import { Photo } from "./photo";
import { TrackedLink } from "./tracked-link";

/** Closing call to action. Same design as the homepage's final CTA ("Dive into the future"). */
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
        <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-line" data-reveal>
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <Photo photo="dubai" sizes="(min-width: 1280px) 76rem, 100vw" className="[filter:grayscale(.6)_brightness(.5)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(5_6_6/0.92),rgb(5_6_6/0.55)_60%,rgb(5_6_6/0.75))]" />
            <div className="ember-glow absolute -bottom-1/3 -right-1/4 h-full w-3/4 opacity-70" />
          </div>
          <div className="grid gap-10 px-6 py-14 sm:px-12 sm:py-16 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow text-accent-strong">Next step</p>
              <h2 className="mt-4 text-h2 font-normal uppercase text-white">{heading}</h2>
            </div>
            <div>
              {body ? <p className="text-body-sm text-white/75">{body}</p> : null}
              <div className="mt-6 flex flex-wrap gap-2">
                <Button asChild>
                  <TrackedLink href={href} eventLabel={label}>
                    {label}
                  </TrackedLink>
                </Button>
                {secondary ? (
                  <Button asChild variant="outline-inverse">
                    <TrackedLink href={secondary.href} eventLabel={secondary.label}>
                      {secondary.label}
                    </TrackedLink>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
