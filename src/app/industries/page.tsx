import { industryPages } from "@/content/solutions-industries";
import { CollectionHub } from "@/components/site/collection-hub";
import { buildMetadata } from "@/lib/seo";

const description = "How DigitalBurj applies Business AI, software and learning in logistics, real estate, financial services, healthcare, education and more.";
export const metadata = buildMetadata({ title: "Industries", description, path: "/industries" });

export default function IndustriesPage() {
  return (
    <CollectionHub
      path="/industries"
      name="Industries"
      eyebrow="Industries"
      title="Industries"
      lead="The day-to-day problems in each sector, and where we can help with them."
      description={description}
      pages={industryPages}
      listTitle="Industries we work with"
      cta={{ heading: "Discuss your operation.", label: "Discuss Your Business", href: "/get-started/business" }}
    />
  );
}
