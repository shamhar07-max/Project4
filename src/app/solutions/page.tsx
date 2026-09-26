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
      title="Start from the problem, not the technology."
      lead="Each solution describes a common operational problem, the symptoms that reveal it, and which DigitalBurj Business AI and Studio services address it."
      description={description}
      pages={solutionPages}
      listTitle="Solutions by problem"
      cta={{ heading: "Not sure which applies?", body: "Describe the problem and we will point you to the right approach.", label: "Get Started", href: "/get-started" }}
    />
  );
}
