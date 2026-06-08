import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import Icon from "@/components/Icon";
import { FadeUp } from "@/components/motion";
import { GlassPanel, MiniChart, BarMini, Donut, KpiTile } from "@/components/dashboard";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Dashboards & Reporting",
  description:
    "MIS dashboards, KPI scorecards, variance analysis, trend charts, and cash flow dashboards - decision-ready reporting for founders and leadership teams.",
};

const features = [
  { icon: "grid", title: "Live KPI Dashboards", body: "The metrics that matter, updated in real time across the business." },
  { icon: "doc", title: "MIS Reporting Packs", body: "Monthly management reporting that's clear, consistent, and board-ready." },
  { icon: "scale", title: "Variance Analysis", body: "Budget vs actual with the story behind every movement." },
  { icon: "trending", title: "Trend & Cohort Charts", body: "Revenue, margin, and cash trends that reveal where you're heading." },
  { icon: "coins", title: "Cash Flow Dashboard", body: "Live cash position, inflows, outflows, and runway at a glance." },
  { icon: "lightbulb", title: "Founder Decision View", body: "One screen that answers: how is the business really doing?" },
];

export default function DashboardsPage() {
  return (
    <>
      <PageHero
        crumb="Dashboards"
        eyebrow="Dashboards & Reporting"
        title="Turn Raw Numbers Into Decision Intelligence"
        subtitle="Premium MIS dashboards and reporting that give founders and leadership a real-time, decision-ready view of the business."
      >
        <Link href="/contact" className="btn-primary glow-border">
          Book a CFO Strategy Call
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Dashboard showcase */}
      <section className="relative overflow-hidden bg-ivory dark:bg-[#0B0F1A] py-20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 animate-aurora rounded-full bg-brand-200/30 blur-3xl" />
        <div className="container-x relative">
          <FadeUp>
            <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-5 shadow-soft dark:shadow-none sm:p-7">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white"><Icon name="grid" className="h-5 w-5" /></span>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 dark:text-[#6B7589]">InfiBooks · MIS Dashboard</p>
                    <p className="text-sm font-semibold text-charcoal dark:text-[#F4F6FB]">Company Performance</p>
                  </div>
                </div>
                <span className="rounded-full bg-brand-50 dark:bg-[#3D7BFF]/10 px-2.5 py-1 text-[11px] font-semibold text-brand-700 dark:text-[#5B91FF]">Live</span>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
                <GlassPanel title="Revenue & Cash Flow" sub="Last 8 months" icon="trending" badge="+18%">
                  <MiniChart id="db-main" points={[30, 44, 40, 58, 62, 75, 72, 90]} height={120} />
                </GlassPanel>
                <div className="grid grid-cols-2 gap-3">
                  <KpiTile label="Revenue" value="$248K" icon="chart" delta="+12%" />
                  <KpiTile label="Net Margin" value="32.4%" icon="pie" tone="text-fblue-600" />
                  <KpiTile label="Cash" value="$312K" icon="coins" />
                  <KpiTile label="DSO" value="38 days" icon="clock" tone="text-bronze" />
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <GlassPanel title="Budget vs Actual" icon="scale">
                  <BarMini values={[60, 80, 55, 90, 70, 95]} className="h-20" />
                </GlassPanel>
                <GlassPanel title="Gross Margin" icon="pie">
                  <div className="flex justify-center py-1"><Donut value={64} /></div>
                </GlassPanel>
                <GlassPanel title="Collections" icon="coins">
                  <div className="flex justify-center py-1"><Donut value={82} label="On time" /></div>
                </GlassPanel>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section bg-white dark:bg-[#0B0F1A]">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="What You Get"
            title="Reporting Built for Decisions, Not Just Compliance"
          />
          <div className="mt-14">
            <FeatureGrid features={features} />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/site/dashboards.jpg" alt="Analyst reviewing live finance dashboards" className="mt-14 h-72 w-full rounded-2xl object-cover shadow-card dark:shadow-none" />
        </div>
      </section>

      <CtaBand title="See your business clearly, in real time." secondaryLabel="Explore Services" />
    </>
  );
}
