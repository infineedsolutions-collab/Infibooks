import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import Icon from "@/components/Icon";
import { FadeUp } from "@/components/motion";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Virtual CFO Services",
  description:
    "Virtual CFO services for startups and SMEs - financial strategy, board and investor reporting, cash flow forecasting, and fundraising support without a full-time hire.",
};

const owns = [
  { icon: "trending", title: "Financial Strategy", body: "Goals, targets, and a financial plan tied directly to how your business grows." },
  { icon: "pie", title: "Board & Investor Reporting", body: "Clear, credible reporting packs that keep boards and investors confident." },
  { icon: "coins", title: "Cash Flow & Runway", body: "Rolling forecasts so you always know your runway and funding needs." },
  { icon: "calculator", title: "Unit Economics & Pricing", body: "Margin, pricing, and unit economics analysis that protects profitability." },
  { icon: "briefcase", title: "Fundraising Support", body: "Models, data rooms, and numbers that stand up to investor scrutiny." },
  { icon: "gauge", title: "KPIs & Dashboards", body: "The metrics that matter, tracked live and reviewed every month." },
];

const signs = [
  "You're making big decisions on gut feel, not numbers",
  "You're raising funds and need investor-ready financials",
  "Cash flow is unpredictable and stressful",
  "You've outgrown basic bookkeeping but can't justify a full-time CFO",
  "Your board or investors want sharper reporting",
  "You need someone to own finance - not just record it",
];

export default function VirtualCfoPage() {
  return (
    <>
      <PageHero
        crumb="Virtual CFO"
        eyebrow="Virtual CFO Services"
        title="CFO-Level Leadership, Without the Full-Time Hire"
        subtitle="Senior financial strategy, reporting, and cash flow leadership for founders and SMEs - exactly when you need it, scaled to your stage."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-gold">
            Book a Consultation
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link href="/services" className="btn-outline">
            All Services
          </Link>
        </div>
      </PageHero>

      {/* What a Virtual CFO owns */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="What We Own"
            title="Your Virtual CFO Takes Finance Off Your Plate"
            subtitle="A fractional CFO who owns the numbers, the reporting, and the strategy - so you can focus on building the business."
          />
          <div className="mt-14">
            <FeatureGrid features={owns} />
          </div>
        </div>
      </section>

      {/* When you need one */}
      <section className="relative overflow-hidden bg-ivory dark:bg-[#0B0F1A] py-24">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 animate-aurora rounded-full bg-brand-200/30 blur-3xl" />
        <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The Signs"
              title="When It's Time for a Virtual CFO"
              subtitle="If any of these sound familiar, a fractional CFO will pay for itself quickly."
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/site/virtual-cfo.jpg" alt="CFO presenting a financial dashboard" className="mt-8 hidden h-60 w-full rounded-2xl object-cover shadow-card lg:block" />
          </div>
          <FadeUp delay={0.1}>
            <ul className="space-y-3">
              {signs.map((s) => (
                <li key={s} className="flex items-start gap-3 rounded-xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-4 shadow-card dark:shadow-none">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-slate-700 dark:text-[#A6B0C3]">{s}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      <ProcessTimeline />
      <CtaBand
        title="Ready for CFO-Level Clarity?"
        text="Let's build the reporting, forecasting, and strategy your business needs to scale with confidence."
        secondaryLabel="Explore Services"
      />
    </>
  );
}
