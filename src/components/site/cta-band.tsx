import { Button } from "@/components/ui/button";
import { TrackedLink } from "./tracked-link";

type Action = { label: string; href: string };

/**
 * Closing call to action, used on every page including the homepage: a centred black card
 * with a dotted texture and a soft orange glow. The first action is the white primary button.
 */
export function CtaBand({
  heading = "Start with the problem you need to solve.",
  body,
  label,
  href,
  secondary,
  actions,
}: {
  heading?: string;
  body?: string;
  label?: string;
  href?: string;
  secondary?: Action;
  /** Several routes at once (homepage). Overrides label/href/secondary. */
  actions?: Action[];
}) {
  const list: Action[] = actions ?? [
    ...(label && href ? [{ label, href }] : []),
    ...(secondary ? [secondary] : []),
  ];
  return (
    <section className="pb-4 pt-8">
      <div className="container-site">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center sm:px-12 sm:py-20" data-reveal>
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.12)_1px,transparent_0)] bg-[length:18px_18px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000,transparent)]" />
            <div className="absolute bottom-[-40%] left-1/2 h-[80%] w-[60%] -translate-x-1/2 rounded-full bg-accent/30 blur-3xl" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">Next step</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-h1 font-semibold text-white">{heading}</h2>
          {body ? <p className="mx-auto mt-4 max-w-lg text-body-sm text-white/75">{body}</p> : null}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {list.map((a, i) => (
              <Button key={a.href} asChild variant={i === 0 ? "inverse" : "outline-inverse"}>
                <TrackedLink href={a.href} eventLabel={a.label}>
                  {a.label}
                </TrackedLink>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
