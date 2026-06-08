"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "@/components/Icon";
import { GlassPanel, MiniChart, Donut, KpiTile } from "@/components/dashboard";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  { n: "01", title: "Finance Chaos", desc: "Invoices, bank feeds, and spreadsheets pile up. Reports lag. Cash is unclear and systems are disconnected." },
  { n: "02", title: "Cleaned & Reconciled", desc: "Transactions are matched, classified, and reconciled into a single, trustworthy source of truth." },
  { n: "03", title: "Monthly Close, Assembled", desc: "Bookkeeping, reconciliations, AR, AP, and payroll close on a disciplined, repeatable schedule." },
  { n: "04", title: "Dashboards Appear", desc: "Revenue, margin, cash flow, DSO, AP aging, and KPI cards become instantly visible." },
  { n: "05", title: "Forecasting Layer", desc: "Future cash flow, budget vs actual, scenarios, and runway visibility come online." },
  { n: "06", title: "AI Automation", desc: "Tools connect and AI agents remove the repetitive, manual finance work." },
  { n: "07", title: "CFO Command Center", desc: "Finance that records the past, controls the present, and guides the future." },
];

function Visual({ i }: { i: number }) {
  switch (i) {
    case 0:
      return (
        <div className="relative h-64 w-full">
          {[
            { l: "invoice.pdf", t: "-rotate-6 left-2 top-2" },
            { l: "bank_feed.csv", t: "rotate-3 right-4 top-6" },
            { l: "sheet_v7.xlsx", t: "-rotate-3 left-10 top-28" },
            { l: "payroll.csv", t: "rotate-6 right-10 top-32" },
            { l: "receipts.zip", t: "rotate-2 left-1/2 top-16" },
          ].map((f) => (
            <div key={f.l} className={`absolute ${f.t} flex items-center gap-2 rounded-lg border border-rose-200 bg-white dark:bg-[#161D30] px-3 py-2 text-xs text-slate-500 dark:text-[#6B7589] shadow-card dark:shadow-none`}>
              <Icon name="doc" className="h-4 w-4 text-rose-400" /> {f.l}
            </div>
          ))}
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-medium text-rose-500">disconnected · delayed · manual</span>
        </div>
      );
    case 1:
      return (
        <GlassPanel title="General Ledger" sub="Reconciled" icon="book" badge="100%">
          <div className="space-y-2 py-1">
            {["Revenue · matched", "Expenses · classified", "Bank · reconciled", "Payroll · posted"].map((r) => (
              <div key={r} className="flex items-center gap-3 rounded-lg bg-slate-50 dark:bg-white/5 px-3 py-2 text-sm text-slate-600 dark:text-[#A6B0C3]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-gradient text-white">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {r}
              </div>
            ))}
          </div>
        </GlassPanel>
      );
    case 2:
      return (
        <GlassPanel title="Monthly Close" sub="Workflow" icon="calendar" badge="Day 5">
          <div className="grid grid-cols-3 gap-2 py-1">
            {["Books", "Recon", "AR", "AP", "Payroll", "Reporting"].map((s, k) => (
              <div key={s} className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-2 text-center text-[11px] font-semibold text-slate-600 dark:text-[#A6B0C3]">
                <span className="mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded-md bg-brand-50 dark:bg-[#3D7BFF]/10 text-brand-600 dark:text-[#5B91FF]">
                  <Icon name={["book", "refresh", "coins", "doc", "users", "pie"][k]} className="h-3.5 w-3.5" />
                </span>
                {s}
              </div>
            ))}
          </div>
        </GlassPanel>
      );
    case 3:
      return (
        <GlassPanel title="MIS Dashboard" sub="Live" icon="grid" badge="Real-time" glow>
          <MiniChart id="film-mis" points={[35, 48, 44, 60, 66, 80]} height={56} />
          <div className="mt-3 grid grid-cols-3 gap-2">
            <KpiTile label="Revenue" value="248K" icon="chart" />
            <KpiTile label="Margin" value="32%" icon="pie" tone="text-brand-600" />
            <KpiTile label="DSO" value="38d" icon="clock" tone="text-bronze" />
          </div>
        </GlassPanel>
      );
    case 4:
      return (
        <GlassPanel title="Forecast & Runway" sub="6-month" icon="trending" badge="Scenario">
          <MiniChart id="film-fc" points={[40, 50, 58, 54, 70, 82, 90]} height={56} />
          <div className="mt-3 flex items-center justify-between">
            <KpiTile label="Runway" value="14 mo" icon="gauge" />
            <Donut value={86} label="Budget hit" />
          </div>
        </GlassPanel>
      );
    case 5:
      return (
        <GlassPanel title="AI Automation" sub="Connected" icon="bolt" badge="Active">
          <div className="relative flex items-center justify-between px-1 py-4">
            <span className="absolute left-3 right-3 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-brand-400 to-brand-300" />
            {["database", "refresh", "cpu", "grid", "lightbulb"].map((n, k) => (
              <span key={k} className="relative z-10 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 dark:bg-[#3D7BFF]/10 text-brand-600 dark:text-[#5B91FF] ring-1 ring-slate-200">
                <Icon name={n} className="h-4 w-4" />
              </span>
            ))}
          </div>
        </GlassPanel>
      );
    default:
      return (
        <GlassPanel title="CFO Command Center" sub="Decision-ready" icon="briefcase" badge="Live" glow>
          <MiniChart id="film-final" points={[42, 55, 60, 72, 78, 92]} height={48} />
          <div className="mt-3 grid grid-cols-2 gap-2">
            <KpiTile label="Cash" value="$312K" icon="coins" />
            <KpiTile label="Margin" value="34%" icon="pie" tone="text-brand-600" />
            <KpiTile label="Runway" value="16 mo" icon="gauge" tone="text-bronze" />
            <KpiTile label="Close" value="5 days" icon="calendar" />
          </div>
        </GlassPanel>
      );
  }
}

export default function PinnedFilm() {
  const pinRef = useRef<HTMLDivElement>(null);
  const sceneRefs = useRef<HTMLDivElement[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const els = sceneRefs.current.filter(Boolean);
      gsap.set(els, { autoAlpha: 0, y: 40 });
      gsap.set(els[0], { autoAlpha: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: `+=${els.length * 60}%`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const idx = Math.min(els.length - 1, Math.floor(self.progress * els.length));
            setActive(idx);
          },
        },
      });

      els.forEach((el, i) => {
        if (i === 0) return;
        tl.to(els[i - 1], { autoAlpha: 0, y: -40, duration: 0.5 });
        tl.fromTo(el, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.5 }, "<");
      });

      return () => tl.scrollTrigger?.kill();
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="relative bg-ivory dark:bg-[#0B0F1A] text-charcoal dark:text-[#F4F6FB]">
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div ref={pinRef} className="relative hidden h-screen items-center overflow-hidden lg:flex">
        <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 animate-aurora rounded-full bg-brand-200/30 blur-3xl" />
        <div className="container-x relative">
          <div className="mb-10 text-center">
            <span className="eyebrow">From Books to Boardroom Intelligence</span>
          </div>
          <div className="relative mx-auto grid h-[420px] max-w-5xl grid-cols-2 items-center gap-16">
            {scenes.map((s, i) => (
              <div
                key={s.n}
                ref={(el) => {
                  if (el) sceneRefs.current[i] = el;
                }}
                className="absolute inset-0 grid grid-cols-2 items-center gap-16"
              >
                <div>
                  <span className="font-display text-7xl font-extrabold text-charcoal/10 dark:text-[#F4F6FB]/10">{s.n}</span>
                  <h3 className="-mt-4 font-display text-3xl font-bold text-charcoal dark:text-[#F4F6FB]">{s.title}</h3>
                  <p className="mt-3 max-w-md text-lg leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{s.desc}</p>
                </div>
                <div className="flex justify-center">
                  <div className="w-full max-w-sm">
                    <Visual i={i} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {scenes.map((_, i) => (
              <span key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-10 bg-brand-500" : "w-3 bg-slate-200"}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="container-x py-20 lg:hidden">
        <div className="text-center">
          <span className="eyebrow">From Books to Boardroom Intelligence</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-charcoal dark:text-[#F4F6FB]">
            Watch Finance Turn Into Intelligence
          </h2>
        </div>
        <div className="mt-10 space-y-8">
          {scenes.map((s, i) => (
            <div key={s.n} className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-5 shadow-card dark:shadow-none">
              <span className="font-display text-2xl font-extrabold text-brand-500">{s.n}</span>
              <h3 className="font-display text-xl font-bold text-charcoal dark:text-[#F4F6FB]">{s.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-[#A6B0C3]">{s.desc}</p>
              <div className="mt-4">
                <Visual i={i} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
