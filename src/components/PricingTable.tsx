"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { Stagger, StaggerItem } from "@/components/motion";

type Currency = { code: string; symbol: string; rate: number };
const CURRENCIES: Currency[] = [
  { code: "USD", symbol: "$", rate: 1 },
  { code: "AED", symbol: "AED ", rate: 3.67 },
  { code: "CAD", symbol: "C$", rate: 1.36 },
  { code: "GBP", symbol: "£", rate: 0.79 },
  { code: "EUR", symbol: "€", rate: 0.92 },
];

type Plan = {
  name: string;
  usd: number;
  unit: string;
  tagline: string;
  features: string[];
  highlight?: boolean;
};
const PLANS: Plan[] = [
  {
    name: "Bookkeeping",
    usd: 10,
    unit: "/hr",
    tagline: "Clean, reliable books - done right.",
    features: ["Bookkeeping & reconciliation", "Monthly financial summary", "Email support"],
  },
  {
    name: "Books + CFO",
    usd: 30,
    unit: "/hr",
    tagline: "Books plus a CFO in your corner.",
    features: ["Everything in Bookkeeping", "Virtual CFO advisory", "Reporting & cash flow", "Priority support"],
    highlight: true,
  },
  {
    name: "Complete",
    usd: 60,
    unit: "/hr",
    tagline: "Everything, fully automated.",
    features: ["All finance services", "AI finance automation", "Live KPI dashboards", "Dedicated finance team"],
  },
];

export default function PricingTable() {
  const [ccyCode, setCcyCode] = useState<string>("USD");
  const ccy = CURRENCIES.find((c) => c.code === ccyCode) ?? CURRENCIES[0];

  const price = (usd: number) => {
    const v = Math.round(usd * ccy.rate);
    return `${ccy.symbol}${v.toLocaleString()}`;
  };

  return (
    <section className="section">
      <div className="container-x">
        {/* currency switcher */}
        <div className="mb-10 flex flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-[#6B7589]">
            Show prices in
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {CURRENCIES.map((c) => (
              <button
                key={c.code}
                type="button"
                onClick={() => setCcyCode(c.code)}
                className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                  c.code === ccyCode
                    ? "border-brand-500 bg-brand-50 text-brand-700 dark:border-[#3D7BFF] dark:bg-[#3D7BFF]/10 dark:text-[#5B91FF]"
                    : "border-slate-200 text-slate-600 hover:border-brand-300 dark:border-white/10 dark:text-[#A6B0C3] dark:hover:border-[#3D7BFF]"
                }`}
              >
                {c.code}
              </button>
            ))}
          </div>
        </div>

        {/* plans */}
        <Stagger className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <div
                className={`flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 ${
                  p.highlight
                    ? "border-brand-400 bg-white shadow-soft dark:border-[#3D7BFF] dark:bg-[#161D30]"
                    : "border-slate-200/70 bg-white shadow-card hover:-translate-y-1.5 hover:shadow-soft dark:border-white/10 dark:bg-[#161D30] dark:shadow-none"
                }`}
              >
                {p.highlight && (
                  <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-gradient px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-lg font-bold text-charcoal dark:text-[#F4F6FB]">{p.name}</h3>
                <p className="mt-1 text-sm leading-snug text-slate-500 dark:text-[#6B7589]">{p.tagline}</p>
                <p className="mt-5 flex items-end gap-1">
                  <span className="mb-1.5 mr-0.5 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-[#6B7589]">From</span>
                  <span className="font-display text-4xl font-extrabold text-charcoal dark:text-[#F4F6FB]">{price(p.usd)}</span>
                  <span className="mb-1 text-sm font-medium text-slate-500 dark:text-[#6B7589]">{p.unit}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-[#A6B0C3]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-[#3D7BFF]/10 dark:text-[#5B91FF]">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`mt-7 ${p.highlight ? "btn-primary" : "btn-secondary"} w-full`}>
                  Get Started
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-8 text-center text-xs text-slate-400 dark:text-[#6B7589]">
          Prices shown in {ccy.code}, converted from USD at indicative rates. Final quote confirmed before you start.
        </p>
      </div>
    </section>
  );
}
