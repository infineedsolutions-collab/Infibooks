"use client";

import { useState } from "react";
import Icon from "./Icon";
import { roles } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export default function CareerForm({ defaultRole = "" }: { defaultRole?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      await new Promise((r) => setTimeout(r, 900));
      console.log("Career application:", data);
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
        <h3 className="mt-5 font-display text-2xl font-bold text-charcoal">Application received</h3>
        <p className="mt-2 max-w-sm text-slate-600">
          Thank you for your interest in InfiBooks. If there&apos;s a fit, our team will be in touch.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-secondary mt-6">
          Submit another application
        </button>
      </div>
    );
  }

  const input =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-slate-400 transition-colors focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100 dark:border-white/10 dark:bg-[#0B0F1A] dark:text-[#F4F6FB] dark:placeholder:text-[#6B7589]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-charcoal dark:text-[#F4F6FB]">Name *</label>
          <input id="c-name" name="name" required placeholder="Your full name" className={input} />
        </div>
        <div>
          <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-charcoal dark:text-[#F4F6FB]">Email *</label>
          <input id="c-email" name="email" type="email" required placeholder="you@email.com" className={input} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-phone" className="mb-1.5 block text-sm font-medium text-charcoal dark:text-[#F4F6FB]">Phone</label>
          <input id="c-phone" name="phone" placeholder="+971 50 000 0000" className={input} />
        </div>
        <div>
          <label htmlFor="c-role" className="mb-1.5 block text-sm font-medium text-charcoal dark:text-[#F4F6FB]">Role *</label>
          <select id="c-role" name="role" required defaultValue={defaultRole} className={input}>
            <option value="" disabled>Select a role</option>
            {roles.map((r) => (
              <option key={r.slug} value={r.title}>{r.title}</option>
            ))}
            <option value="Future opening">Future opening / Open application</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-exp" className="mb-1.5 block text-sm font-medium text-charcoal dark:text-[#F4F6FB]">Experience level</label>
          <select id="c-exp" name="experience" defaultValue="" className={input}>
            <option value="" disabled>Select level</option>
            <option>Intern / Entry</option>
            <option>1-3 years</option>
            <option>3-5 years</option>
            <option>5+ years</option>
          </select>
        </div>
        <div>
          <label htmlFor="c-linkedin" className="mb-1.5 block text-sm font-medium text-charcoal dark:text-[#F4F6FB]">LinkedIn</label>
          <input id="c-linkedin" name="linkedin" placeholder="linkedin.com/in/…" className={input} />
        </div>
      </div>

      <div>
        <label htmlFor="c-portfolio" className="mb-1.5 block text-sm font-medium text-charcoal dark:text-[#F4F6FB]">Portfolio / work samples</label>
        <input id="c-portfolio" name="portfolio" placeholder="Link to portfolio or work (optional)" className={input} />
      </div>

      <div>
        <label htmlFor="c-resume" className="mb-1.5 block text-sm font-medium text-charcoal dark:text-[#F4F6FB]">Resume</label>
        <input id="c-resume" name="resume" type="file" accept=".pdf,.doc,.docx" className={`${input} file:mr-3 file:rounded-lg file:border-0 file:bg-brand-50 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-brand-700`} />
        <p className="mt-1 text-xs text-slate-400">PDF or Word. Upload is a placeholder - connect to storage before launch.</p>
      </div>

      <div>
        <label htmlFor="c-why" className="mb-1.5 block text-sm font-medium text-charcoal dark:text-[#F4F6FB]">Why InfiBooks? *</label>
        <textarea id="c-why" name="why" required rows={4} placeholder="Tell us why you'd like to work with us…" className={input} />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again or email us directly.</p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70">
        {status === "submitting" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Submitting…
          </>
        ) : (
          <>
            Submit application
            <Icon name="arrow" className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
