import { studioPages } from "@/content/studio";
import { contentRoute } from "@/components/site/content-page";

const route = contentRoute(studioPages, "/studio", { name: "Studio", path: "/studio" });

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
