import Link from "next/link";
import { Logo } from "./logo";
import { footerColumns, legalNav, site } from "@/lib/site";
import { whatsappHref, whatsappNumber } from "@/lib/whatsapp";

/** Compact light footer: brand, three short link columns and a legal row. */
export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-paper" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-site py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-2">{site.description}</p>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:underline"
            >
              <span aria-hidden="true" className="size-2 rounded-full bg-whatsapp" />
              WhatsApp +{whatsappNumber}
            </a>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <p className="text-sm font-semibold text-ink">{col.heading}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-ink-2 transition-colors hover:text-ink">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DigitalBurj. {site.tagline}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-ink">
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
