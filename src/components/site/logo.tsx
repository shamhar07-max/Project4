import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0 items-center", className)} aria-label="DigitalBurj home">
      <Image
        src="/brand/digitalburj-wordmark-400.webp"
        alt="DigitalBurj"
        width={400}
        height={76}
        priority={priority}
        className="h-7 w-auto mix-blend-multiply sm:h-8"
        sizes="170px"
      />
    </Link>
  );
}
