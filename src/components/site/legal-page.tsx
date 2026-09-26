import type { ReactNode } from "react";
import { PageHero } from "./page-hero";
import { PhotoBg } from "./photo-bg";

export function LegalPage({ title, path, updated, children }: { title: string; path: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero crumbs={[{ name: title, path }]} title={title} lead={`Last updated ${updated}.`} />
      <div className="relative isolate overflow-hidden">
        <PhotoBg seed={`legal-${title}`} />
        <div className="container-site section-pad">
          <div className="prose-db">{children}</div>
        </div>
      </div>
    </>
  );
}
