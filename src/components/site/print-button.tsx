"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";

export function PrintButton({ label }: { label: string }) {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => {
        track("download", { resource: label, format: "print" });
        window.print();
      }}
    >
      <Printer aria-hidden="true" /> Print or save as PDF
    </Button>
  );
}
