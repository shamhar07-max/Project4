import Image from "next/image";
import Link from "next/link";
import { footerNav, legalNav, site } from "@/lib/site";
import { whatsappHref, whatsappNumber } from "@/lib/whatsapp";

function formatNumber(n: string) {
  return `+${n}`;
}

export function Footer() {
  return (
    <footer className="relative isolate mt-24 overflow-hidden border-t border-line bg-night text-white/80" aria-labelledby="footer-heading">
      <div aria-hidden="true" className="ember-glow pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-96 w-[60rem] -translate-x-1/2 opacity-60" />
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      
      <div className="container-site relative py-16">
        <div className="grid gap-12 lg:grid-cols-[18rem_1fr]">
          <div>
            <Link href="/" aria-label="DigitalBurj home" className="inline-block">
              <Image src="/brand/dark/wordmark.webp" alt="DigitalBurj" width={800} height={152} className="h-7 w-auto" sizes="150px" />
            </Link>
            <p className="mt-5 text-sm font-semibold tracking-[0.2em] text-white">LEARN. BUILD. TRANSFORM.</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{site.description}</p>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-fit items-center gap-2 text-sm font-semibold text-white hover:underline"
            >
              <span aria-hidden="true" className="size-2 rounded-full bg-whatsapp" />
              WhatsApp {formatNumber(whatsappNumber)}
            </a>
            <Link
              href="/get-started"
              className="mt-6 inline-flex h-10 items-center rounded-full bg-accent-deep px-4 text-sm font-semibold text-white hover:bg-accent-hover"
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
        <div aria-hidden="true" className="fade-bottom pointer-events-none mt-16 select-none opacity-[0.14]">
          <Image src="/brand/dark/wordmark.webp" alt="" width={800} height={152} className="h-auto w-full" sizes="(min-width: 1280px) 72rem, 100vw" />
        </div>
        <div className="-mt-[4%] flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
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
    </footer>
  );
}
