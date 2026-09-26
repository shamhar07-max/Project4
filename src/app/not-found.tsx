import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

const links = [
  ["Business AI", "/business-ai"],
  ["Academy", "/academy"],
  ["Studio", "/studio"],
  ["Verified Talent", "/talent"],
  ["Jobs", "/jobs"],
  ["Sitemap", "/sitemap"],
];

export default function NotFound() {
  return (
    <section className="container-site py-24">
      <p className="eyebrow text-accent-strong">404</p>
      <h1 className="mt-4 text-h1 font-extrabold text-ink">This page isn&apos;t here.</h1>
      <p className="mt-5 max-w-xl text-lead text-ink-2">The link may be out of date, or the page may have moved. These are good places to continue:</p>
      <ul className="mt-8 flex flex-wrap gap-3">
        {links.map(([l, h]) => (
          <li key={h}>
            <Button asChild variant="outline">
              <Link href={h}>{l}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
