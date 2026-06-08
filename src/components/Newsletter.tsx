"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    // Wire to your email/CRM provider.
    console.log("Newsletter signup:", data);
    setStatus("ok");
    form.reset();
  }

  if (status === "ok") {
    return (
      <p className="flex items-center gap-2 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-700">
        <Icon name="check" className="h-4 w-4" /> You&apos;re subscribed - thank you.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <label htmlFor="nl-email" className="sr-only">
        Email address
      </label>
      <input
        id="nl-email"
        name="email"
        type="email"
        required
        placeholder="Your work email"
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100"
      />
      <button type="submit" className="btn-primary shrink-0 px-4 py-2.5 text-sm" aria-label="Subscribe">
        <Icon name="arrow" className="h-4 w-4" />
      </button>
    </form>
  );
}
