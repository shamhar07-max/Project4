import { buildSiteIndex } from "@/lib/site-index";

export const dynamic = "force-static";

export function GET() {
  return Response.json(buildSiteIndex());
}
