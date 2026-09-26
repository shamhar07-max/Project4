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
      title="Technology in operational context."
      lead="Technology only helps when it fits how an industry actually works. These pages describe the operational challenges we see in each sector and where DigitalBurj can help."
      description={description}
      pages={industryPages}
      listTitle="Industries we work with"
      cta={{ heading: "Discuss your operation.", label: "Discuss Your Business", href: "/get-started/business" }}
    />
  );
}
