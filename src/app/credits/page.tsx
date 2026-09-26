import { LegalPage } from "@/components/site/legal-page";
import { photoCredits } from "@/content/backgrounds";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Photo Credits",
  description: "The photographers whose Unsplash images appear as backgrounds on digitalburj.com.",
  path: "/credits",
});

export default function CreditsPage() {
  const credits = photoCredits();
  return (
    <LegalPage title="Photo Credits" path="/credits" updated="26 September 2026">
      <p>
        Background photographs on this website come from <a href="https://unsplash.com">Unsplash</a> and are used under
        the <a href="https://unsplash.com/license">Unsplash License</a>. They show the kind of work we do; they are not
        photos of DigitalBurj staff, clients or offices.
      </p>
      <h2>Photographers</h2>
      <ul>
        {credits.map((c) => (
          <li key={c.profile}>
            <a href={c.profile}>{c.photographer}</a>:{" "}
            {c.items.map((p, i) => (
              <span key={p.page}>
                {i > 0 ? "; " : ""}
                <a href={p.page}>{p.subject}</a>
              </span>
            ))}
          </li>
        ))}
      </ul>
    </LegalPage>
  );
}
