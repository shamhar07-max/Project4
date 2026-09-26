import { LegalPage } from "@/components/site/legal-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Cookie Policy", description: "What cookies and browser storage digitalburj.com uses, why, and how session storage records how visitors arrived at the site.", path: "/cookies" });

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy" path="/cookies" updated="26 September 2026">
      <p>This website does not set advertising or third-party tracking cookies.</p>
      <h2>Session storage</h2>
      <p>To understand which pages lead to enquiries, the website stores the following in your browser&apos;s session storage, which is cleared when you close the tab:</p>
      <ul>
        <li>The first page you visited</li>
        <li>The referring website, if your browser provides it</li>
        <li>Campaign parameters in the link you followed (utm_source, utm_medium, utm_campaign)</li>
      </ul>
      <p>This information is only sent to DigitalBurj if you submit a form.</p>
      <h2>Changes</h2>
      <p>If we introduce analytics or other tools that use cookies, we will update this page and ask for consent where required.</p>
    </LegalPage>
  );
}
