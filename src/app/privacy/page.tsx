import Link from "next/link";
import { LegalPage } from "@/components/site/legal-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Privacy Policy", description: "How DigitalBurj collects, uses and protects personal information submitted through digitalburj.com.", path: "/privacy" });

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy" updated="26 September 2026">
      <p>This policy explains what personal information DigitalBurj collects through digitalburj.com, why, and how it is handled.</p>
      <h2>Information you give us</h2>
      <p>When you submit a form on this website, such as a contact, project or interest form, we receive the details you enter. Depending on the form, this may include your name, email address, organisation, phone number and the information you provide about your needs. Required and optional fields are marked on each form.</p>
      <h2>How we use it</h2>
      <ul>
        <li>To respond to your enquiry and route it to the right DigitalBurj team.</li>
        <li>To contact you about the topic you registered interest in.</li>
        <li>To understand which pages lead to enquiries, using the page you arrived on, the referring website and campaign parameters where present.</li>
      </ul>
      <p>We do not sell your personal information. We do not use form contents for advertising.</p>
      <h2>Information collected automatically</h2>
      <p>This website does not set advertising or tracking cookies. To understand which pages lead to enquiries, it stores the page you first landed on, the referring website and any campaign parameters in your browser&apos;s session storage for the duration of your visit, and includes them with a form submission. See the <Link href="/cookies">cookie policy</Link>.</p>
      <p>Our hosting provider may keep standard server logs, such as IP address and request time, for security and reliability.</p>
      <h2>Sharing</h2>
      <p>Form submissions are delivered to the systems DigitalBurj uses to manage enquiries. Service providers that process data on our behalf are bound to use it only for that purpose. If you apply for an opportunity, the relevant employer receives the information you choose to share.</p>
      <h2>Retention</h2>
      <p>We keep enquiry information only as long as needed to respond and to maintain a record of our communication, unless a longer period is required by law.</p>
      <h2>Your rights</h2>
      <p>You can ask to access, correct or delete your personal information, or ask us to stop contacting you, by using the <Link href="/contact">contact page</Link>. Depending on where you live, you may have additional rights under applicable data-protection law.</p>
      <h2>Security</h2>
      <p>We protect information using access controls and encryption in transit. See <Link href="/company/security">Security</Link>.</p>
      <h2>Changes</h2>
      <p>We will update this page if our practices change, and revise the date above.</p>
    </LegalPage>
  );
}
