import { industryPages } from "@/content/solutions-industries";
import { contentRoute } from "@/components/site/content-page";

const route = contentRoute(industryPages, "/industries", { name: "Industries", path: "/industries" });

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
