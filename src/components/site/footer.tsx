import Image from "next/image";
import Link from "next/link";
import { footerNav, legalNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white/80" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-site py-16">
        <div className="grid gap-12 lg:grid-cols-[18rem_1fr]">
          <div>
            <Link href="/" aria-label="DigitalBurj home" className="inline-block rounded-md bg-white px-3 py-2">
              <Image
                src="/brand/digitalburj-wordmark-400.webp"
                alt="DigitalBurj"
                width={400}
                height={76}
                className="h-7 w-auto"
                sizes="150px"
              />
            </Link>
            <p className="mt-5 text-sm font-semibold tracking-[0.2em] text-white">LEARN. BUILD. TRANSFORM.</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{site.description}</p>
            <Link
              href="/get-started"
              className="mt-6 inline-flex h-10 items-center rounded-md bg-accent-strong px-4 text-sm font-semibold text-white hover:bg-accent-hover"
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
                      <Link href={l.href} className="text-sm text-white/70 hover:text-white hover:underline">
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
    </footer>
  );
}
