"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { TrackedLink } from "./tracked-link";
import { CommandPalette } from "./command-palette";
import { companyNav, mainNav, type NavItem } from "@/lib/site";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

function MegaPanel({ item }: { item: NavItem }) {
  return (
    <div className="grid gap-0 md:grid-cols-[1fr_17rem]">
      <div
        className={cn(
          "grid gap-x-8 gap-y-6 p-6",
          item.groups.length >= 3 ? "sm:grid-cols-3" : item.groups.length === 2 ? "sm:grid-cols-2" : "",
        )}
      >
        {item.groups.map((group) => (
          <div key={group.heading}>
            {group.heading ? <p className="eyebrow mb-3">{group.heading}</p> : null}
            <ul
              className={cn(
                "grid gap-0.5",
                item.groups.length === 1 && group.links.length > 6 ? "sm:grid-cols-2 sm:gap-x-6" : "",
              )}
            >
              {group.links.map((link) => (
                <li key={link.href + link.label}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      onClick={() => track("nav_click", { menu: item.label, label: link.label })}
                      className="-mx-2 block rounded-sm px-2 py-1.5 text-body-sm text-ink-2 transition-colors hover:bg-fill hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-between gap-6 border-t border-line/70 bg-fill/50 p-6 md:border-l md:border-t-0">
        <div>
          <p className="eyebrow flex items-center gap-2 text-accent"><span aria-hidden="true" className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />DigitalBurj</p>
          <p className="mt-2 text-xl font-bold tracking-tight text-ink">{item.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{item.summary}</p>
        </div>
        <NavigationMenuLink asChild>
          <Link
            href={item.cta.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-strong hover:underline"
          >
            {item.cta.label} <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </NavigationMenuLink>
      </div>
    </div>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  const items = [...mainNav, companyNav];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-fill xl:hidden"
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
          <ul className="overflow-hidden rounded-lg bg-paper">
            {items.map((item) => (
              <li key={item.label} className="border-b border-line last:border-0 ml-4 [&>details>summary]:-ml-4">
                <details className="group">
                  <summary className="flex min-h-12 items-center justify-between pl-4 pr-3 text-base font-semibold text-ink">
                    {item.label}
                    <ChevronDown
                      className="size-4 text-muted transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="pb-3 pl-3">
                    {item.groups.map((group) => (
                      <div key={group.heading} className="mt-2">
                        {group.heading ? <p className="eyebrow px-3 py-1">{group.heading}</p> : null}
                        <ul>
                          {group.links.map((link) => (
                            <li key={link.href + link.label}>
                              <Link
                                href={link.href}
                                className="flex min-h-11 items-center rounded-sm px-3 text-body-sm text-ink-2 hover:bg-fill"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </details>
              </li>
            ))}
            <li className="ml-4">
              <Link href="/contact" className="-ml-4 flex min-h-12 items-center pl-4 pr-3 text-base font-semibold text-ink">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4">
          <Button asChild className="w-full">
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Header() {
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
          "glass mx-auto flex max-w-(--container-site) items-center gap-3 rounded-full pl-2 pr-2 transition-[height,box-shadow,background-color] duration-500 ease-(--ease-out-quint) sm:pl-5",
          scrolled ? "h-13 lg:h-14" : "h-14 lg:h-16",
        )}
      >
        <MobileNav />
        <Logo priority className="max-xl:mx-auto" />
        <NavigationMenu className="mx-auto hidden xl:flex" aria-label="Main">
          <NavigationMenuList>
            {mainNav.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent className="menu-panel">
                  <MegaPanel item={item} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <li aria-hidden="true" className="mx-1 h-5 w-px bg-line-strong" />
            <NavigationMenuItem>
              <NavigationMenuTrigger>{companyNav.label}</NavigationMenuTrigger>
              <NavigationMenuContent className="menu-panel">
                <MegaPanel item={companyNav} />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <CommandPalette className="shrink-0 max-sm:hidden" />
        <Button asChild size="sm" className="shrink-0 sm:h-10 sm:px-5">
          <TrackedLink href="/get-started" eventLabel="header_get_started">
            Get Started
          </TrackedLink>
        </Button>
      </div>
    </header>
  );
}
