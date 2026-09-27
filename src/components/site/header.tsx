"use client";

/**
 * Header: logo, six plain links, search and one call to action. No mega menus; each link goes
 * to a hub page that lists everything in that section.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { TrackedLink } from "./tracked-link";
import { CommandPalette } from "./command-palette";
import { primaryNav } from "@/lib/site";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/") || (href === "/jobs" && pathname.startsWith("/talent"));
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  useEffect(() => setOpen(false), [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-fill lg:hidden"
        >
          <Menu className="size-6" aria-hidden="true" />
          <span className="sr-only">Open menu</span>
        </button>
      </SheetTrigger>
      <SheetContent aria-describedby="mobile-nav-desc">
        <div className="flex h-16 items-center px-5">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription id="mobile-nav-desc" className="sr-only">
            Site navigation
          </SheetDescription>
          <Logo />
        </div>
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="overflow-hidden rounded-xl border border-line bg-paper">
            {[...primaryNav, { label: "Contact", href: "/contact" }].map((l) => (
              <li key={l.href} className="border-b border-line last:border-0">
                <Link
                  href={l.href}
                  className={cn(
                    "flex min-h-13 items-center justify-between px-4 text-base font-semibold",
                    isActive(pathname, l.href) ? "text-accent-strong" : "text-ink",
                  )}
                >
                  {l.label}
                  <ArrowRight className="size-4 text-muted" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4">
          <Button asChild variant="accent" className="w-full">
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 px-2 pt-2 sm:px-4 sm:pt-3">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-night focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div
        className={cn(
          "glass mx-auto flex max-w-(--container-site) items-center gap-3 rounded-full pl-2 pr-2 transition-[height] duration-500 ease-(--ease-out-quint) sm:pl-5",
          scrolled ? "h-13 lg:h-14" : "h-14 lg:h-16",
        )}
      >
        <MobileNav />
        <Logo priority className="max-lg:mx-auto" />
        <nav aria-label="Main" className="mx-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => track("nav_click", { label: l.label })}
                    className={cn(
                      "relative rounded-full px-3 py-2 text-sm font-medium transition-colors",
                      active ? "text-ink" : "text-ink-2 hover:text-ink",
                    )}
                  >
                    {l.label}
                    {active ? <span aria-hidden="true" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" /> : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <CommandPalette className="shrink-0 max-sm:hidden" />
        <Button asChild size="sm" variant="accent" className="shrink-0 sm:h-10 sm:px-5">
          <TrackedLink href="/get-started" eventLabel="header_get_started">
            Get Started
          </TrackedLink>
        </Button>
      </div>
    </header>
  );
}
