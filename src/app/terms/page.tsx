import Link from "next/link";
import { LegalPage } from "@/components/site/legal-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Terms of Use", description: "The terms that apply to your use of the DigitalBurj website.", path: "/terms" });

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" path="/terms" updated="26 September 2026">
      <p>These terms apply to your use of digitalburj.com. Separate agreements apply to DigitalBurj services, courses and engagements.</p>
      <h2>Information on this website</h2>
      <p>Content on this website is provided for general information. It is not legal, financial, regulatory or professional advice for your specific situation. Descriptions of services and products in development may change.</p>
      <h2>No guarantees of employment</h2>
      <p>DigitalBurj Academy, Verified Talent and Jobs do not guarantee employment, placements or visas. Employers make their own hiring decisions.</p>
      <h2>Resources</h2>
      <p>You may use and print the checklists and templates on this website for your own or your organisation&apos;s purposes. Please do not republish them as your own.</p>
      <h2>Intellectual property</h2>
      <p>The DigitalBurj name, logos and website content belong to DigitalBurj. Do not use them in a way that suggests endorsement or affiliation without permission.</p>
      <h2>Acceptable use</h2>
      <p>Do not misuse the website, including by submitting false information, attempting to disrupt it or to access systems without authorisation.</p>
      <h2>Links</h2>
      <p>Links to other websites are provided for convenience; DigitalBurj is not responsible for their content.</p>
      <h2>Contact</h2>
      <p>Questions about these terms can be sent through the <Link href="/contact">contact page</Link>.</p>
    </LegalPage>
  );
}
