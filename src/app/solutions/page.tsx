import { solutionPages } from "@/content/solutions-industries";
import { CollectionHub } from "@/components/site/collection-hub";
import { buildMetadata } from "@/lib/seo";

const description = "DigitalBurj solutions by business problem: manual work, disconnected systems, lost leads, unreliable reports, paperwork and software that does not fit.";
export const metadata = buildMetadata({ title: "Solutions by Business Problem", description, path: "/solutions" });

export default function SolutionsPage() {
  return (
    <CollectionHub
      path="/solutions"
      name="Solutions"
      eyebrow="Solutions"
      title="What's going wrong?"
      lead="Start from the problem you've got. Each page says how to spot it and what we'd do about it."
      description={description}
      pages={solutionPages}
      listTitle="Solutions by problem"
      cta={{ heading: "Not sure which applies?", body: "Describe the problem and we will point you to the right approach.", label: "Get Started", href: "/get-started" }}
    />
  );
}
