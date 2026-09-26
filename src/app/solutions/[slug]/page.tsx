import { solutionPages } from "@/content/solutions-industries";
import { contentRoute } from "@/components/site/content-page";

const route = contentRoute(solutionPages, "/solutions", { name: "Solutions", path: "/solutions" });

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
