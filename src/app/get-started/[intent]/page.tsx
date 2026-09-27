import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { forms } from "@/lib/forms";
import { getStartedIntents, intentTitle } from "@/content/registry";
import { PageHero } from "@/components/site/page-hero";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return getStartedIntents.map((intent) => ({ intent }));
}

export async function generateMetadata({ params }: { params: Promise<{ intent: string }> }): Promise<Metadata> {
  const { intent } = await params;
  const def = forms[intent];
  if (!def) return {};
  return buildMetadata({ title: intentTitle(intent) ?? def.title, description: def.intro, path: `/get-started/${intent}`, noindex: true });
}

export default async function IntentPage({ params }: { params: Promise<{ intent: string }> }) {
  const { intent } = await params;
  const def = forms[intent];
  if (!def) notFound();
  return (
    <>
      <PageHero crumbs={[{ name: "Get Started", path: "/get-started" }, { name: intentTitle(intent) ?? def.title, path: `/get-started/${intent}` }]} eyebrow="Get started" title={def.title} lead={def.intro} />
      <div className="relative isolate overflow-hidden">
      <div className="container-site section-pad">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <EnquiryForm intent={intent} />
          <aside className="h-fit rounded-lg border border-line bg-surface p-6 text-sm text-ink-2">
            <p className="eyebrow">What happens next</p>
            <p className="mt-3 leading-relaxed">{def.nextSteps}</p>
          </aside>
        </div>
      </div>
      </div>
    </>
  );
}
