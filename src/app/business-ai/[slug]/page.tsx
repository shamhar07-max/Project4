import { businessAiPages } from "@/content/business-ai";
import { contentRoute } from "@/components/site/content-page";

const route = contentRoute(businessAiPages, "/business-ai", { name: "Business AI", path: "/business-ai" });

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
