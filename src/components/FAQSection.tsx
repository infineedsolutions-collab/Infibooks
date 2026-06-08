"use client";

import { useState } from "react";
import Icon from "./Icon";
import { faqs as defaultFaqs } from "@/lib/site";

type QA = { q: string; a: string };

export default function FAQSection({
  items = defaultFaqs,
  withSchema = false,
}: {
  items?: QA[];
  withSchema?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="mx-auto mt-12 max-w-3xl">
      {withSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <div className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] shadow-card dark:shadow-none">
        {items.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-charcoal dark:text-[#F4F6FB]">{f.q}</span>
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 text-brand-600 dark:text-[#5B91FF] transition-transform ${isOpen ? "rotate-45 bg-brand-50 dark:bg-[#3D7BFF]/10" : ""}`}>
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
