"use client";

import { useEffect, useRef, useState } from "react";
import { regions } from "@/lib/site";
import { useRegion } from "./RegionProvider";
import Icon from "./Icon";

export default function CountrySelector({ className = "" }: { className?: string }) {
  const { code, setCode, region } = useRegion();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700 dark:border-white/15 dark:bg-white/5 dark:text-[#F4F6FB] dark:hover:border-accent dark:hover:text-accent-hover"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Icon name="globe" className="h-4 w-4 text-brand-500 dark:text-[#5B91FF]" />
        <span>{region.name}</span>
        <svg viewBox="0 0 24 24" className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden>
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-slate-200/70 bg-white p-1 shadow-soft dark:border-white/10 dark:bg-night-surface"
          role="listbox"
        >
          {regions.map((r) => (
            <li key={r.code}>
              <button
                type="button"
                onClick={() => {
                  setCode(r.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-brand-50 dark:hover:bg-white/5 ${
                  r.code === code ? "text-brand-700 dark:text-accent-hover" : "text-slate-700 dark:text-[#A6B0C3]"
                }`}
                role="option"
                aria-selected={r.code === code}
              >
                <Icon name="globe" className={`h-4 w-4 ${r.code === code ? "text-brand-500 dark:text-[#5B91FF]" : "text-slate-400 dark:text-[#6B7589]"}`} />
                <span className="flex-1">{r.name}</span>
                {r.code === code && (
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden>
                    <path d="m4 12 5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
