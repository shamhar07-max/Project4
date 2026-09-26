import Image from "next/image";
import Link from "next/link";
import { footerNav, legalNav, site } from "@/lib/site";

/* ASCII art of the burj mark (decorative). */
const burj = String.raw`
            ▲
           ▐█▌
           ▐█▌▐▌
         ▐▌▐█▌▐█▌
         ▐█▌▐█▌▐█▌
       ▐▌▐█▌▐█▌▐█▌
       ▐█▌▐█▌▐█▌▐█▌▐▌
     ▐▌▐█▌▐█▌▐█▌▐█▌▐█▌
  ═══╩═══╩═══╩═══╩═══╩═══`;

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-night text-white/80" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-accent),var(--color-ai),transparent)]" />
      <div aria-hidden="true" className="ai-dots pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,#000,transparent_70%)]" />
      <div className="container-site relative py-16">
        <div className="grid gap-12 lg:grid-cols-[18rem_1fr]">
          <div>
            <Link href="/" aria-label="DigitalBurj home" className="inline-block">
              <Image src="/brand/dark/wordmark.webp" alt="DigitalBurj" width={800} height={152} className="h-7 w-auto" sizes="150px" />
            </Link>
            <p className="mt-5 text-sm font-semibold tracking-[0.2em] text-white">LEARN. BUILD. TRANSFORM.</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{site.description}</p>
            <pre
              aria-hidden="true"
              className="mt-6 hidden select-none font-mono [font-size:0.625rem] leading-[1.15] text-accent/70 sm:block"
            >
              {burj}
            </pre>
            <Link
              href="/get-started"
              className="mt-6 inline-flex h-10 items-center rounded-full bg-[linear-gradient(110deg,var(--color-accent-deep),var(--color-ember))] px-4 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgb(252_48_18/0.7)] hover:brightness-110"
            >
              Get Started
            </Link>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 xl:grid-cols-6">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <p className="text-sm font-semibold text-white">{col.heading}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="link-underline text-sm text-white/70 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DigitalBurj. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p
        aria-hidden="true"
        className="pointer-events-none select-none text-center font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.06)] [font-size:clamp(3rem,15vw,13rem)] -mb-[0.18em]"
      >
        DIGITALBURJ
      </p>
    </footer>
  );
}
