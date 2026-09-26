import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** The one "text link with arrow" pattern used for in-section calls to action. */
export function ArrowLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn("group inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong hover:underline", className)}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}
