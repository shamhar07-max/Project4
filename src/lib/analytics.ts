/**
 * Outcome-focused analytics. Events are pushed to window.dataLayer only; no third-party
 * script is loaded by this site. Wire a tag manager / analytics tool to dataLayer when ready.
 * Never pass form contents, personal details or free-text business problems here.
 */
export type AnalyticsEvent =
  | "cta_click"
  | "nav_click"
  | "form_started"
  | "form_completed"
  | "consultation_start"
  | "consultation_submit"
  | "project_enquiry_start"
  | "project_enquiry_submit"
  | "enroll_click"
  | "professional_interest"
  | "employer_interest"
  | "download";

type Props = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: AnalyticsEvent, props: Props = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...props });
}

const ATTR_KEY = "db_attribution";

export type Attribution = {
  landingPage?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

/** Record first-touch attribution for this browser session (sessionStorage only). */
export function captureAttribution() {
  try {
    if (sessionStorage.getItem(ATTR_KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const data: Attribution = {
      landingPage: window.location.pathname,
      referrer: document.referrer || undefined,
      utmSource: params.get("utm_source") ?? undefined,
      utmMedium: params.get("utm_medium") ?? undefined,
      utmCampaign: params.get("utm_campaign") ?? undefined,
    };
    sessionStorage.setItem(ATTR_KEY, JSON.stringify(data));
  } catch {
    /* storage unavailable: attribution is optional */
  }
}

export function readAttribution(): Attribution {
  try {
    return JSON.parse(sessionStorage.getItem(ATTR_KEY) ?? "{}") as Attribution;
  } catch {
    return {};
  }
}
