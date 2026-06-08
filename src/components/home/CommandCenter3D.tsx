"use client";

import { useEffect, useRef } from "react";
import Icon from "@/components/Icon";
import { GlassPanel, MiniChart, BarMini, Donut, KpiTile } from "@/components/dashboard";
import { Counter } from "@/components/motion";

const LivePulse = () => (
  <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#1E9E8F] dark:text-data">
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2FD3A5] opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1E9E8F] dark:bg-data" />
    </span>
    Live
  </div>
);

const NetCash = <Counter value={312} prefix="$" suffix="K" className="text-[#1E9E8F] dark:text-data" />;
const Runway = <Counter value={14} suffix=" mo" className="text-[#1E9E8F] dark:text-data" />;

function PanelFloat({
  depth,
  className = "",
  delay = 0,
  children,
}: {
  depth: number;
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div className="animate-float" style={{ animationDelay: `${delay}s` }}>
        <div
          style={{
            transform: `translate3d(calc(var(--mx,0) * ${depth}px), calc(var(--my,0) * ${depth}px), 0)`,
            transition: "transform 0.35s ease-out",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function CommandCenter3D() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      tx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      ty = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    };
    const loop = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el.style.setProperty("--mx", cx.toFixed(3));
      el.style.setProperty("--my", cy.toFixed(3));
      el.style.setProperty("--rx", (cy * -5).toFixed(2));
      el.style.setProperty("--ry", (cx * 6).toFixed(2));
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={stageRef} className="relative hidden h-[560px] w-full [perspective:1500px] lg:block">
        <div
          className="absolute inset-0 [transform-style:preserve-3d]"
          style={{
            transform: "rotateX(calc(var(--rx,0) * 1deg)) rotateY(calc(var(--ry,0) * 1deg))",
            transition: "transform 0.4s ease-out",
          }}
        >
          <PanelFloat depth={12} delay={0} className="left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2">
            <GlassPanel title="Cash Flow Forecast" sub="Next 6 months" icon="trending" badge="+18%" glow>
              <LivePulse />
              <MiniChart id="cc-cf" points={[30, 42, 38, 55, 60, 74, 70, 88]} height={64} />
              <div className="mt-3 grid grid-cols-2 gap-2">
                <KpiTile label="Net Cash" value={NetCash} icon="coins" />
                <KpiTile label="Runway" value={Runway} icon="gauge" tone="text-brand-600" />
              </div>
              <p className="mt-2 text-center text-[10px] uppercase tracking-wider text-slate-400 dark:text-[#6B7589]">
                Powered by InfiBooks
              </p>
            </GlassPanel>
          </PanelFloat>

          <PanelFloat depth={28} delay={1.1} className="left-0 top-4 w-48">
            <GlassPanel title="Revenue Trend" icon="chart" badge="YTD">
              <BarMini values={[40, 60, 50, 72, 64, 90]} className="h-16" />
            </GlassPanel>
          </PanelFloat>

          <PanelFloat depth={24} delay={0.6} className="right-0 top-0 w-40">
            <GlassPanel title="Gross Margin" icon="pie">
              <div className="flex justify-center py-1">
                <Donut value={64} />
              </div>
            </GlassPanel>
          </PanelFloat>

          <PanelFloat depth={32} delay={1.6} className="bottom-2 left-2 w-52">
            <GlassPanel title="AI Workflow" sub="Automation" icon="bolt">
              <div className="relative flex items-center justify-between px-1 py-2">
                <span className="absolute left-3 right-3 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-brand-400 to-brand-300" />
                {["database", "refresh", "cpu", "lightbulb"].map((n, i) => (
                  <span key={i} className="relative z-10 flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50 dark:bg-[#3D7BFF]/10 text-brand-600 dark:text-[#5B91FF] ring-1 ring-slate-200">
                    <Icon name={n} className="h-3.5 w-3.5" />
                  </span>
                ))}
              </div>
            </GlassPanel>
          </PanelFloat>

          <PanelFloat depth={18} delay={2} className="bottom-10 right-0 w-44">
            <GlassPanel title="Monthly Close" icon="calendar" badge="Day 4">
              <div className="space-y-2 py-1">
                {["Reconciled", "AR / AP", "Reporting"].map((s, i) => (
                  <div key={s} className="flex items-center gap-2 text-xs text-slate-600 dark:text-[#A6B0C3]">
                    <span className={`flex h-4 w-4 items-center justify-center rounded-full ${i < 2 ? "bg-brand-gradient text-white" : "bg-slate-100 text-slate-400"}`}>
                      <Icon name="check" className="h-2.5 w-2.5" />
                    </span>
                    {s}
                  </div>
                ))}
              </div>
            </GlassPanel>
          </PanelFloat>

          <PanelFloat depth={36} delay={0.3} className="right-10 top-1/2 w-36 -translate-y-1/2">
            <div className="rounded-xl border border-gold/40 bg-gold/10 px-3 py-2 shadow-card backdrop-blur-xl">
              <p className="text-[10px] uppercase tracking-wide text-bronze">Board Ready</p>
              <p className="text-sm font-bold text-charcoal dark:text-[#F4F6FB]">KPI Scorecard</p>
            </div>
          </PanelFloat>
        </div>
      </div>

      <div className="lg:hidden">
        <GlassPanel title="Cash Flow Forecast" sub="Next 6 months" icon="trending" badge="+18%" glow>
          <LivePulse />
          <MiniChart id="cc-m" points={[30, 42, 38, 55, 60, 74, 70, 88]} height={70} />
          <div className="mt-3 grid grid-cols-2 gap-2">
            <KpiTile label="Net Cash" value={<Counter value={312} prefix="$" suffix="K" className="text-[#1E9E8F] dark:text-data" />} icon="coins" />
            <KpiTile label="Gross Margin" value={<Counter value={64} suffix="%" className="text-[#1E9E8F] dark:text-data" />} icon="pie" tone="text-brand-600" />
          </div>
        </GlassPanel>
      </div>
    </>
  );
}
