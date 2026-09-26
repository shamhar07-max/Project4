"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import {
  Button as AriaButton,
  Checkbox,
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Radio,
  RadioGroup,
  Select,
  SelectValue,
  Text,
  TextArea,
  TextField,
} from "react-aria-components";
import { Check, ChevronDown, CircleCheck, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { forms, type FieldDef } from "@/lib/forms";
import { readAttribution, track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const labelCls = "block text-sm font-semibold text-ink";
const controlCls =
  "mt-1.5 block w-full rounded-md border border-line-strong bg-paper px-3.5 text-[0.9875rem] text-ink placeholder:text-muted outline-none transition-colors data-[hovered]:border-ink-2 data-[focused]:border-ink data-[focus-visible]:ring-2 data-[focus-visible]:ring-accent-strong/30 data-[invalid]:border-danger";
const descCls = "mt-1.5 block text-sm text-muted";
const errorCls = "mt-1.5 block text-sm font-medium text-danger";

function Field({ f }: { f: FieldDef }) {
  const wide = f.wide || f.type === "textarea";
  const wrap = cn(wide && "sm:col-span-2");
  const description = f.description ? <Text slot="description" className={descCls}>{f.description}</Text> : null;

  if (f.type === "select") {
    return (
      <Select name={f.name} isRequired={f.required} placeholder="Select…" className={wrap}>
        <Label className={labelCls}>
          {f.label}
          {f.required ? null : <span className="font-normal text-muted"> (optional)</span>}
        </Label>
        <AriaButton className={cn(controlCls, "flex h-11 items-center justify-between text-left")}>
          <SelectValue className="truncate data-[placeholder]:text-muted" />
          <ChevronDown className="size-4 text-muted" aria-hidden="true" />
        </AriaButton>
        {description}
        <FieldError className={errorCls} />
        <Popover className="w-[var(--trigger-width)] overflow-auto rounded-md border border-line bg-paper p-1 shadow-lg">
          <ListBox className="max-h-72 outline-none">
            {f.options!.map((o) => (
              <ListBoxItem
                key={o}
                id={o}
                textValue={o}
                className="flex cursor-default items-center justify-between rounded px-3 py-2 text-[0.9375rem] text-ink outline-none data-[focused]:bg-surface data-[selected]:font-semibold"
              >
                {({ isSelected }) => (
                  <>
                    {o}
                    {isSelected ? <Check className="size-4 text-accent-strong" aria-hidden="true" /> : null}
                  </>
                )}
              </ListBoxItem>
            ))}
          </ListBox>
        </Popover>
      </Select>
    );
  }

  if (f.type === "radio") {
    return (
      <RadioGroup name={f.name} isRequired={f.required} className={cn(wrap, "sm:col-span-2")}>
        <Label className={labelCls}>{f.label}</Label>
        <div className="mt-2 flex flex-wrap gap-2">
          {f.options!.map((o) => (
            <Radio
              key={o}
              value={o}
              className="flex h-11 cursor-pointer items-center gap-2.5 rounded-md border border-line-strong px-4 text-[0.9375rem] text-ink data-[hovered]:border-ink-2 data-[selected]:border-ink data-[selected]:bg-surface data-[focus-visible]:ring-2 data-[focus-visible]:ring-accent-strong/30 data-[invalid]:border-danger"
            >
              {({ isSelected }) => (
                <>
                  <span
                    aria-hidden="true"
                    className={cn("size-4 rounded-full border-2", isSelected ? "border-[5px] border-accent-strong" : "border-line-strong")}
                  />
                  {o}
                </>
              )}
            </Radio>
          ))}
        </div>
        {description}
        <FieldError className={errorCls} />
      </RadioGroup>
    );
  }

  return (
    <TextField
      name={f.name}
      type={f.type === "textarea" ? undefined : f.type}
      isRequired={f.required}
      maxLength={f.maxLength}
      autoComplete={f.autoComplete}
      className={wrap}
    >
      <Label className={labelCls}>
        {f.label}
        {f.required ? null : <span className="font-normal text-muted"> (optional)</span>}
      </Label>
      {f.type === "textarea" ? (
        <TextArea rows={4} className={cn(controlCls, "py-2.5")} />
      ) : (
        <Input className={cn(controlCls, "h-11")} />
      )}
      {description}
      <FieldError className={errorCls} />
    </TextField>
  );
}

type Status = { state: "idle" | "submitting" | "success" | "error"; message?: string };

export function EnquiryForm({ intent }: { intent: string }) {
  const def = forms[intent];
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [serverErrors, setServerErrors] = useState<Record<string, string>>({});
  const started = useRef(false);
  const successRef = useRef<HTMLDivElement>(null);

  if (!def) return null;

  function onStart() {
    if (started.current) return;
    started.current = true;
    track(def.startEvent, { intent: def.intent });
    if (def.startEvent !== "form_started") track("form_started", { intent: def.intent });
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    setStatus({ state: "submitting" });
    setServerErrors({});
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ intent: def.intent, fields: data, attribution: { ...readAttribution(), submittedFrom: window.location.pathname } }),
      });
      const body = (await res.json().catch(() => ({}))) as { errors?: Record<string, string>; message?: string };
      if (res.ok) {
        track(def.submitEvent, { intent: def.intent });
        if (def.submitEvent !== "form_completed") track("form_completed", { intent: def.intent });
        setStatus({ state: "success" });
        requestAnimationFrame(() => successRef.current?.focus());
        return;
      }
      if (body.errors) setServerErrors(body.errors);
      setStatus({ state: "error", message: body.message ?? "Please check the highlighted fields." });
    } catch {
      setStatus({ state: "error", message: "We could not send your message. Please check your connection and try again." });
    }
  }

  if (status.state === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="rounded-lg border border-line bg-surface p-8 outline-none">
        <CircleCheck className="size-8 text-success" aria-hidden="true" />
        <h2 className="mt-4 text-h3 font-extrabold text-ink">Thank you. We have received your message.</h2>
        <p className="mt-3 max-w-xl text-ink-2">{def.nextSteps}</p>
        <Link href="/" className="link mt-6 inline-block font-semibold">
          Return to the homepage
        </Link>
      </div>
    );
  }

  return (
    <div onFocus={onStart}>
    <Form
      onSubmit={onSubmit}
      validationErrors={serverErrors}
      className="grid gap-x-6 gap-y-6 sm:grid-cols-2"
      aria-describedby={status.state === "error" ? "form-error" : undefined}
    >
      {def.fields.map((f) => (
        <Field key={f.name} f={f} />
      ))}

      {/* Honeypot for automated submissions; hidden from people and assistive technology. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Leave this field empty
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Checkbox name="consent" value="yes" isRequired className="group flex cursor-pointer items-start gap-3 sm:col-span-2">
        {({ isSelected }) => (
          <>
            <span
              aria-hidden="true"
              className={cn(
                "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border-2 group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-accent-strong/30 group-data-[invalid]:border-danger",
                isSelected ? "border-accent-strong bg-accent-strong" : "border-line-strong",
              )}
            >
              {isSelected ? <Check className="size-3.5 text-white" strokeWidth={3} /> : null}
            </span>
            <span className="text-sm leading-relaxed text-ink-2">
              I agree that DigitalBurj may use these details to respond to my enquiry, as described in the{" "}
              <Link href="/privacy" className="link" target="_blank">
                privacy policy
              </Link>
              .
            </span>
          </>
        )}
      </Checkbox>

      {status.state === "error" ? (
        <p id="form-error" role="alert" className="rounded-md border border-danger/30 bg-danger-soft px-4 py-3 text-sm font-medium text-danger sm:col-span-2">
          {status.message}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <Button type="submit" size="lg" disabled={status.state === "submitting"}>
          {status.state === "submitting" ? <LoaderCircle className="animate-spin" aria-hidden="true" /> : null}
          {status.state === "submitting" ? "Sending…" : def.submitLabel}
        </Button>
        <p className="text-sm text-muted">All fields are required unless marked optional.</p>
      </div>
    </Form>
    </div>
  );
}
