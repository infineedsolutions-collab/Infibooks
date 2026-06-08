"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { useRegion } from "@/components/RegionProvider";

const layers = [
  "Data collection",
  "Data cleaning",
  "Reconciliation",
  "Reporting",
  "Forecasting",
  "Automation",
  "CFO insights",
];

export default function FinanceOSMap() {
  const { services } = useRegion();
  const [active, setActive] = useState<number | null>(null);

  const positions = useMemo(
    () =>
      services.map((_, i) => {
        const angle = (-90 + i * (360 / services.length)) * (Math.PI / 180);
        return { x: 50 + 42 * Math.cos(angle), y: 50 + 42 * Math.sin(angle) };
      }),
    [services]
  );

  return (
    <section className="screen-section bg-white dark:bg-[#0B0F1A]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/20 blur-3xl dark:bg-[#3D7BFF]/10" />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            center
            eyebrow="The Finance Operating System"
            title="Every Tool, Connected Into One Finance Brain"
            subtitle="We integrate your accounting, payments, payroll, and data tools into a single intelligent system - so information flows automatically from source to decision."
          />
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeUp>
            <TiltCard className="mx-auto aspect-square w-full max-w-[440px]" max={14}>
            <div className="relative h-full w-full [transform-style:preserve-3d]">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                <defs>
                  <linearGradient id="os-l" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2E6E9C" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#28C7D9" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                {positions.map((p, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={p.x}
                    y2={p.y}
                    stroke="url(#os-l)"
                    strokeWidth={active === i ? 0.7 : 0.35}
                    strokeDasharray="2 3"
                    className="animate-dash-flow"
                  />
                ))}
              </svg>

              {/* hub - strongest logo usage, popped forward in 3D */}
              <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] shadow-soft dark:shadow-none ring-glow [transform:translate(-50%,-50%)_translateZ(55px)]">
                <Image src="/logo-animation.gif" alt="InfiBooks" width={120} height={120} unoptimized className="h-16 w-auto" />
              </div>
              <span className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-brand-300/50" />

              {positions.map((p, i) => (
                <button
                  key={services[i].slug}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  className="group absolute z-20 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  aria-label={services[i].title}
                >
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl border bg-white dark:bg-[#161D30] shadow-card dark:shadow-none transition-all duration-300 ${active === i ? "scale-110 border-brand-400 text-brand-600 dark:text-[#5B91FF] shadow-glow" : "border-slate-200 dark:border-white/10 text-slate-500 dark:text-[#6B7589]"}`}>
                    <Icon name={services[i].icon} className="h-5 w-5" />
                  </span>
                  <span className={`pointer-events-none absolute left-1/2 top-full z-30 mt-2 w-44 -translate-x-1/2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#161D30] p-2.5 text-center shadow-soft dark:shadow-none transition-all duration-200 ${active === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}>
                    <span className="block text-xs font-bold text-charcoal dark:text-[#F4F6FB]">{services[i].title}</span>
                    <span className="block text-[11px] leading-snug text-slate-500 dark:text-[#6B7589]">{services[i].short}</span>
                  </span>
                </button>
              ))}
            </div>
            </TiltCard>
          </FadeUp>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-[#6B7589]">Activated layer by layer</p>
            <Stagger className="mt-5 space-y-2">
              {layers.map((l, i) => (
                <StaggerItem key={l}>
                  <div className="group flex items-center gap-4 rounded-xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-3 shadow-card dark:shadow-none transition-colors hover:border-brand-300">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 dark:bg-[#3D7BFF]/10 font-display text-sm font-bold text-brand-600 dark:text-[#5B91FF]">
                      {i + 1}
                    </span>
                    <span className="font-semibold text-charcoal dark:text-[#F4F6FB]">{l}</span>
                    <Icon name="check" className="ml-auto h-4 w-4 text-brand-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
