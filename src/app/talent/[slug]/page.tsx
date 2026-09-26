import { talentPages } from "@/content/talent-jobs";
import { contentRoute } from "@/components/site/content-page";

const route = contentRoute(talentPages, "/talent", { name: "Verified Talent", path: "/talent" });

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
