import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import { Stagger, StaggerItem } from "@/components/motion";
import { GlassPanel, MiniChart } from "@/components/dashboard";
import CtaBand from "@/components/CtaBand";
import { dashboardExamples } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dashboard Examples | CFO & MIS Dashboards",
  description:
    "Sample CFO and MIS dashboards - cash flow, AR aging, DSO, profitability, budget vs actual, and founder KPI views. Anonymised sample data.",
  alternates: { canonical: "/dashboard-examples" },
};

export default function DashboardExamplesPage() {
  return (
    <>
      <PageHero
        crumb="Dashboard Examples"
        eyebrow="Dashboard Examples"
        title="See the Dashboards Founders Run On"
        subtitle="Representative MIS and CFO dashboards we build. Visuals use anonymised sample data to illustrate layout and insight."
      >
        <Link href="/contact" className="btn-primary glow-border">
          Get a Finance Systems Review
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="section bg-ivory dark:bg-[#0B0F1A]">
        <div className="container-x">
          <SectionHeading center eyebrow="Samples" title="Decision-Ready Views" subtitle="Sample data shown for illustration - your dashboards are built around your real metrics." />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/site/dashboard-examples.jpg" alt="Founder reviewing a live finance dashboard" className="mx-auto mt-12 h-72 w-full max-w-4xl rounded-2xl object-cover shadow-card dark:shadow-none" />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dashboardExamples.map((d) => (
              <StaggerItem key={d.title} className="h-full">
                <GlassPanel title={d.title} icon={d.icon} badge="Sample" className="h-full">
                  <MiniChart id={`dx-${d.title}`} points={d.points} height={72} />
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{d.body}</p>
                </GlassPanel>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-8 text-center text-xs text-slate-400 dark:text-[#6B7589]">
            Illustrative only - no real client data is shown.
          </p>
        </div>
      </section>

      <CtaBand title="Want dashboards like these for your business?" secondaryLabel="Explore Dashboards" secondaryHref="/dashboards" />
    </>
  );
}
