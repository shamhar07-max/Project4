"use client";

import Link from "next/link";
import PromptBar from "@/components/ui/prompt-bar";
import { whatsappHref } from "@/lib/whatsapp";

/** Hero prompt bar: a display piece. Visitors can type, but nothing is submitted. */
export function HeroPrompt() {
  return (
    <PromptBar
      demo
      className="mx-auto"
      placeholder="Describe what you need…"
      menus={[
        { label: "Division", options: ["Studio", "Business AI", "Academy"] },
        { label: "Mode", options: ["Balanced", "Fast", "Thorough"] },
      ]}
      demoPrompts={[
        "Build a booking app for our clinic",
        "Send WhatsApp enquiries straight into our CRM",
        "Train our team to run the new system",
      ]}
      demoNote={
        <>
          This is a preview. To get started,{" "}
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="link">
            message us on WhatsApp
          </a>{" "}
          or use the{" "}
          <Link href="/contact" className="link">
            contact form
          </Link>
          .
        </>
      }
    />
  );
}
