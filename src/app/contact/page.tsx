import Link from "next/link";
import { whatsappHref } from "@/lib/whatsapp";
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
      <div className="relative isolate overflow-hidden">
      <div className="container-site section-pad">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <EnquiryForm intent="contact" />
          <aside className="h-fit rounded-[1.25rem] border border-line bg-paper p-6">
            <p className="eyebrow">Prefer WhatsApp?</p>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex h-10 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-semibold text-night hover:brightness-95"
            >
              Chat on WhatsApp
            </a>
            <p className="eyebrow mt-8">Dedicated forms</p>
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
      </div>
    </>
  );
}
