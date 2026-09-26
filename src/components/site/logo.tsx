import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0 items-center", className)} aria-label="DigitalBurj home">
      <Image
        src="/brand/light/wordmark.webp"
        alt="DigitalBurj"
        width={800}
        height={152}
        priority={priority}
        className="h-6 w-auto min-[360px]:h-7 sm:h-8"
        sizes="170px"
      />
    </Link>
  );
}
