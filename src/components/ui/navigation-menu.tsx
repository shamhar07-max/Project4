"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// shadcn/ui NavigationMenu (Radix), adapted for full-width mega menus.
export const NavigationMenu = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root ref={ref} className={cn("relative z-50 flex items-center", className)} {...props}>
    {children}
    <div className="absolute inset-x-0 top-full flex justify-center">
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-[min(64rem,calc(100vw-2rem))] origin-top overflow-hidden rounded-lg border border-line bg-paper shadow-[0_18px_50px_-20px_rgba(5,29,24,0.35)]",
          "transition-[height] duration-200",
        )}
      />
    </div>
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = "NavigationMenu";

export const NavigationMenuList = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List ref={ref} className={cn("flex items-center gap-0.5", className)} {...props} />
));
NavigationMenuList.displayName = "NavigationMenuList";

export const NavigationMenuItem = NavigationMenuPrimitive.Item;

export const navigationMenuTriggerStyle =
  "group inline-flex h-10 items-center gap-1 rounded-md px-3 text-body-sm font-semibold text-ink transition-colors hover:bg-surface data-[state=open]:bg-surface";

export const NavigationMenuTrigger = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger ref={ref} className={cn(navigationMenuTriggerStyle, className)} {...props}>
    {children}
    <ChevronDown
      className="size-3.5 text-muted transition-transform duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

export const NavigationMenuContent = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content ref={ref} className={cn("left-0 top-0 w-full", className)} {...props} />
));
NavigationMenuContent.displayName = "NavigationMenuContent";

export const NavigationMenuLink = NavigationMenuPrimitive.Link;
