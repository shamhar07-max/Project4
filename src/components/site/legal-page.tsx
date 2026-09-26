import type { ReactNode } from "react";
import { PageHero } from "./page-hero";

export function LegalPage({ title, path, updated, children }: { title: string; path: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero crumbs={[{ name: title, path }]} title={title} lead={`Last updated ${updated}.`} />
      <div className="container-site py-14">
        <div className="prose-db">{children}</div>
      </div>
    </>
  );
}
