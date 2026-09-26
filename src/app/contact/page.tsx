import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact DigitalBurj about Business AI, Studio, Academy, Verified Talent, Jobs, partnerships, media or support. Messages are routed to the right team.",
  path: "/contact",
});

const routes = [
  ["Business AI", "/get-started/business"],
  ["Studio", "/get-started/studio"],
  ["Academy", "/get-started/academy"],
  ["Verified Talent", "/get-started/talent"],
  ["Jobs", "/get-started/jobs"],
  ["Partnership", "/get-started/partnership"],
];

export default function ContactPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Contact", path: "/contact" }]} eyebrow="Contact" title="Contact DigitalBurj" lead="Send a general message below, or use a dedicated form so we can respond with the right people." />
      <div className="container-site py-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <EnquiryForm intent="contact" />
          <aside className="h-fit rounded-lg border border-line bg-surface p-6">
            <p className="eyebrow">Dedicated forms</p>
            <ul className="mt-4 space-y-2">
              {routes.map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="link font-semibold">{l}</Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">For media and support, choose the topic in the general form.</p>
          </aside>
        </div>
      </div>
    </>
  );
}
