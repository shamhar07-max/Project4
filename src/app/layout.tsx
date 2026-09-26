import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { JsonLd } from "@/components/site/json-ld";
import { AttributionCapture } from "@/components/site/attribution";
import { RevealObserver } from "@/components/site/reveal-observer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { AiAtmosphere } from "@/components/site/ai-atmosphere";
import { Toaster } from "@/components/site/toaster";
import { AnnouncementBar } from "@/components/site/announcement-bar";
import { Engagement } from "@/components/site/engagement";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const icons = "/brand/05_WEB_SOCIAL";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  icons: {
    icon: [
      { url: `${icons}/favicon.ico`, sizes: "48x48" },
      { url: `${icons}/favicon-app-32.png`, sizes: "32x32", type: "image/png" },
      { url: `${icons}/favicon-app-16.png`, sizes: "16x16", type: "image/png" },
      { url: `${icons}/favicon-app-192.png`, sizes: "192x192", type: "image/png" },
    ],
    apple: `${icons}/apple-touch-icon.png`,
  },
  manifest: `${icons}/site.webmanifest`,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Marks JS as available so scroll-reveal styles apply only when they can be undone. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="relative isolate flex min-h-dvh flex-col">
        <AiAtmosphere />
        <AnnouncementBar />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <AttributionCapture />
        <RevealObserver />
        <WhatsAppButton />
        <Toaster />
        <Engagement />
      </body>
    </html>
  );
}
