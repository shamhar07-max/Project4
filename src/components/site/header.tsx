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
                      className="block rounded-md px-2 py-1.5 -mx-2 text-[0.9375rem] text-ink-2 hover:bg-surface hover:text-ink"
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
      <div className="flex flex-col justify-between gap-6 border-t border-line bg-surface p-6 md:border-l md:border-t-0">
        <div>
          <p className="eyebrow text-accent-strong">DigitalBurj</p>
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
          className="inline-flex size-10 items-center justify-center rounded-md text-ink hover:bg-surface lg:hidden"
        >
          <Menu className="size-6" aria-hidden="true" />
          <span className="sr-only">Open menu</span>
        </button>
      </SheetTrigger>
      <SheetContent aria-describedby="mobile-nav-desc">
        <div className="flex h-16 items-center border-b border-line px-4">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription id="mobile-nav-desc" className="sr-only">
            Site navigation
          </SheetDescription>
          <Logo />
        </div>
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-2 py-3">
          <ul>
            {items.map((item) => (
              <li key={item.label} className="border-b border-line last:border-0">
                <details className="group">
                  <summary className="flex min-h-12 items-center justify-between rounded-md px-3 text-base font-semibold text-ink">
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
                                className="flex min-h-11 items-center rounded-md px-3 text-[0.9375rem] text-ink-2 hover:bg-surface"
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
            <li>
              <Link href="/contact" className="flex min-h-12 items-center px-3 text-base font-semibold text-ink">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="border-t border-line p-4">
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
    <header
      className={cn(
        "sticky top-0 z-40 bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85 transition-shadow",
        scrolled ? "border-b border-line shadow-[0_1px_0_rgba(5,29,24,0.02)]" : "border-b border-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="container-site flex h-16 items-center gap-3 lg:h-[4.5rem]">
        <MobileNav />
        <Logo priority className="max-lg:mx-auto" />
        <NavigationMenu className="mx-auto hidden lg:flex" aria-label="Main">
          <NavigationMenuList>
            {mainNav.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaPanel item={item} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <li aria-hidden="true" className="mx-2 h-5 w-px bg-line" />
            <NavigationMenuItem>
              <NavigationMenuTrigger>{companyNav.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <MegaPanel item={companyNav} />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button asChild size="sm" className="shrink-0 sm:h-10 sm:px-4">
          <TrackedLink href="/get-started" eventLabel="header_get_started">
            Get Started
          </TrackedLink>
        </Button>
      </div>
    </header>
  );
}
