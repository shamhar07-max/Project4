import { z } from "zod";
import { forms } from "@/lib/forms";

/**
 * Receives enquiry form submissions, validates them against the shared form definitions,
 * and forwards them to ENQUIRY_WEBHOOK_URL (a CRM, automation platform or email relay).
 * Submissions are routed internally by intent/topic. Nothing is stored on this server.
 */

const bodySchema = z.object({
  intent: z.string().max(40),
  fields: z.record(z.string(), z.string().max(5000)),
  attribution: z
    .object({
      landingPage: z.string().max(500).optional(),
      referrer: z.string().max(1000).optional(),
      utmSource: z.string().max(200).optional(),
      utmMedium: z.string().max(200).optional(),
      utmCampaign: z.string().max(200).optional(),
      submittedFrom: z.string().max(500).optional(),
    })
    .partial()
    .optional(),
});

const emailSchema = z.email();
const urlSchema = z.url({ protocol: /^https?$/ });

export async function POST(request: Request) {
  let parsed;
  try {
    parsed = bodySchema.safeParse(await request.json());
  } catch {
    return Response.json({ message: "Invalid request." }, { status: 400 });
  }
  if (!parsed.success) return Response.json({ message: "Invalid request." }, { status: 400 });

  const { intent, fields, attribution } = parsed.data;
  const def = forms[intent];
  if (!def) return Response.json({ message: "Unknown form." }, { status: 400 });

  // Honeypot: pretend success so automated submitters learn nothing.
  if (fields.company_website) return Response.json({ ok: true });

  const errors: Record<string, string> = {};
  const clean: Record<string, string> = {};
  for (const f of def.fields) {
    const value = (fields[f.name] ?? "").trim();
    if (f.required && !value) {
      errors[f.name] = `${f.label} is required.`;
      continue;
    }
    if (!value) continue;
    if (f.maxLength && value.length > f.maxLength) errors[f.name] = `Please keep this under ${f.maxLength} characters.`;
    else if (f.type === "email" && !emailSchema.safeParse(value).success) errors[f.name] = "Enter a valid email address.";
    else if (f.type === "url" && !urlSchema.safeParse(value).success) errors[f.name] = "Enter a full link starting with https://";
    else if ((f.type === "select" || f.type === "radio") && f.options && !f.options.includes(value)) errors[f.name] = "Choose one of the options.";
    else clean[f.name] = value;
  }
  if (fields.consent !== "yes") errors.consent = "Please confirm consent so we can respond.";
  if (Object.keys(errors).length) return Response.json({ message: "Please check the highlighted fields.", errors }, { status: 422 });

  const payload = {
    intent,
    // Contact form submissions are routed by the chosen topic.
    route: intent === "contact" ? clean.topic : def.title,
    fields: clean,
    attribution: attribution ?? {},
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhook) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[enquiry] ENQUIRY_WEBHOOK_URL not set; development submission:", payload.intent, payload.route);
      return Response.json({ ok: true, delivered: false });
    }
    console.error("[enquiry] ENQUIRY_WEBHOOK_URL is not configured; submission not delivered.");
    return Response.json({ message: "Our enquiry service is temporarily unavailable. Please try again later." }, { status: 503 });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.ENQUIRY_WEBHOOK_SECRET ? { Authorization: `Bearer ${process.env.ENQUIRY_WEBHOOK_SECRET}` } : {}),
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    console.error("[enquiry] delivery failed:", err instanceof Error ? err.message : err);
    return Response.json({ message: "We could not send your message right now. Please try again shortly." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
