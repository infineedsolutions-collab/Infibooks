"use client";

import { useState } from "react";
import Icon from "./Icon";
import { services } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const problems = [
  "Messy books",
  "Delayed reporting",
  "Cash flow visibility",
  "AR & collections",
  "CFO advisory",
  "Dashboard reporting",
  "AI automation",
  "Software setup",
  "Process improvement",
  "Not sure - need guidance",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      await new Promise((r) => setTimeout(r, 900));
      console.log("Contact / lead submission:", data);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-brand-100 bg-brand-50/60 p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gradient text-white">
          <Icon name="check" className="h-8 w-8" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-charcoal">Thank you!</h3>
        <p className="mt-2 max-w-sm text-slate-600">
          We&apos;ve received your details and will reply within one business day with the right next step for your finance function.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-secondary mt-6">
          Send another message
        </button>
      </div>
    );
  }

  const input =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-slate-400 transition-colors focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100 dark:border-white/10 dark:bg-[#0B0F1A] dark:text-[#F4F6FB] dark:placeholder:text-[#6B7589]";
  const label = "mb-1.5 block text-sm font-medium text-charcoal dark:text-[#F4F6FB]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name *</label>
          <input id="name" name="name" required placeholder="Your full name" className={input} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Work email *</label>
          <input id="email" name="email" type="email" required placeholder="you@company.com" className={input} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={label}>Company</label>
          <input id="company" name="company" placeholder="Company name" className={input} />
        </div>
        <div>
          <label htmlFor="website" className={label}>Website</label>
          <input id="website" name="website" placeholder="company.com" className={input} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="country" className={label}>Country</label>
          <input id="country" name="country" placeholder="e.g. United States" className={input} />
        </div>
        <div>
          <label htmlFor="businessType" className={label}>Business type</label>
          <select id="businessType" name="businessType" defaultValue="" className={input}>
            <option value="" disabled>Select type</option>
            {["Startup", "SaaS", "E-commerce", "Agency", "Real Estate", "Hospitality", "Manufacturing", "Professional Services", "Other"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="revenue" className={label}>Monthly revenue range</label>
          <select id="revenue" name="revenue" defaultValue="" className={input}>
            <option value="" disabled>Optional</option>
            {["Pre-revenue", "< $100K", "$100K - 500K", "$500K - 2M", "$2M+"].map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="system" className={label}>Current finance system</label>
          <select id="system" name="system" defaultValue="" className={input}>
            <option value="" disabled>Select system</option>
            {["QuickBooks", "Xero", "Zoho", "Excel / Sheets", "Other", "None yet"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="problem" className={label}>Main problem *</label>
          <select id="problem" name="problem" required defaultValue="" className={input}>
            <option value="" disabled>What's your biggest challenge?</option>
            {problems.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="service" className={label}>Service interest</label>
          <select id="service" name="service" defaultValue="" className={input}>
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={label}>Message *</label>
        <textarea id="message" name="message" required rows={4} placeholder="Tell us about your finance challenges and what you'd like help with…" className={input} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-charcoal dark:text-[#F4F6FB]">Preferred contact:</span>
          <div className="flex gap-3 text-sm text-slate-600">
            {["Email", "Phone", "WhatsApp"].map((m, i) => (
              <label key={m} className="flex items-center gap-1.5">
                <input type="radio" name="preferredContact" value={m} defaultChecked={i === 0} className="accent-brand-600" />
                {m}
              </label>
            ))}
          </div>
        </div>
        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input type="checkbox" name="bookCall" value="yes" className="h-4 w-4 rounded accent-brand-600" />
          I&apos;d like to book a strategy call
        </label>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again or email us directly.</p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70">
        {status === "submitting" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Sending…
          </>
        ) : (
          <>
            Send & request a call
            <Icon name="arrow" className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="text-center text-xs text-slate-400">We respect your privacy. Your details are never shared.</p>
    </form>
  );
}
