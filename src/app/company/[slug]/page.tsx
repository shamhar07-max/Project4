import { companyPages } from "@/content/company";
import { contentRoute } from "@/components/site/content-page";

const route = contentRoute(companyPages, "/company", { name: "Company", path: "/company" });

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
