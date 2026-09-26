import { jobsPages } from "@/content/talent-jobs";
import { contentRoute } from "@/components/site/content-page";

const route = contentRoute(jobsPages, "/jobs", { name: "Jobs", path: "/jobs" });

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
