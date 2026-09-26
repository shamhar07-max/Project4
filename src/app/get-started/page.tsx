import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Get Started",
  description: "Tell DigitalBurj what you want to do: improve your business, build software, learn, show your capability, find talent, find a job or partner with us.",
  path: "/get-started",
});

const choices = [
  { label: "Improve my business", to: "Business AI", href: "/get-started/business" },
  { label: "Build software", to: "Studio", href: "/get-started/studio" },
  { label: "Learn", to: "Academy", href: "/get-started/academy" },
  { label: "Show my professional capability", to: "Verified Talent", href: "/get-started/talent" },
  { label: "Find talent", to: "Verified Talent", href: "/get-started/hire" },
  { label: "Find a job", to: "Jobs", href: "/get-started/jobs" },
  { label: "Hire", to: "Jobs & Talent", href: "/get-started/hire" },
  { label: "Partnership", to: "Corporate", href: "/get-started/partnership" },
  { label: "Something else", to: "General contact", href: "/contact" },
];

export default function GetStartedPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Get Started", path: "/get-started" }]} eyebrow="Get started" title="What would you like to do?" lead="Choose the option closest to your goal and we will take you to the right team." />
      <div className="container-site py-14">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {choices.map((c) => (
            <li key={c.label}>
              <Link href={c.href} className="group flex h-full items-center justify-between gap-4 rounded-lg border border-line p-6 hover:border-ink">
                <span>
                  <span className="block text-lg font-extrabold text-ink">{c.label}</span>
                  <span className="mt-1 block text-sm text-muted">{c.to}</span>
                </span>
                <ArrowRight className="size-5 text-accent-strong transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
