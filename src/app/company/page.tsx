import { companyPages } from "@/content/company";
import { CollectionHub } from "@/components/site/collection-hub";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Company",
  description: "About DigitalBurj: who we are, leadership, how we work, engineering principles, responsible AI, security and careers.",
  path: "/company",
});

export default function CompanyPage() {
  return (
    <CollectionHub
      path="/company"
      name="Company"
      eyebrow="Company"
      title="About DigitalBurj"
      lead={site.description}
      description={site.description}
      pages={companyPages}
      listTitle="Company"
      cta={{ heading: "Talk to DigitalBurj.", label: "Contact Us", href: "/contact" }}
    />
  );
}
