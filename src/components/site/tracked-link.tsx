"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";

type Props = ComponentProps<typeof Link> & { event?: AnalyticsEvent; eventLabel?: string };

/** A Link that records an outcome event (never personal data) before navigating. */
export function TrackedLink({ event = "cta_click", eventLabel, onClick, ...props }: Props) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        track(event, { label: eventLabel, href: String(props.href), page: window.location.pathname });
        onClick?.(e);
      }}
    />
  );
}
