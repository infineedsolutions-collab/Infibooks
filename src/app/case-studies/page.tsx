import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import BeforeAfter from "@/components/home/BeforeAfter";
import ImpactSection from "@/components/home/ImpactSection";
import Icon from "@/components/Icon";
import { Stagger, StaggerItem } from "@/components/motion";
import { MiniChart } from "@/components/dashboard";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Representative transformations - how founders moved from messy books and manual reporting to clean finance systems, live dashboards, and CFO-level decisions with InfiBooks.",
};

const cases = [
  {
    tag: "SaaS · Startup",
    title: "From spreadsheet chaos to investor-ready finance",
    before: "Disconnected tools, no MRR clarity, late reports.",
    after: "Clean books, live MRR & runway dashboard, board pack in days.",
    points: [35, 48, 44, 60, 72, 88],
  },
  {
    tag: "E-commerce",
    title: "Multi-channel margins, finally visible",
    before: "Blended numbers across channels, unclear true margin.",
    after: "Channel-level P&L, automated reconciliations, real-time cash.",
    points: [30, 42, 55, 50, 68, 80],
  },
  {
    tag: "Agency",
    title: "Project profitability under control",
    before: "Manual time-cost tracking, month-end pressure.",
    after: "Automated reporting, utilisation KPIs, 5-day close.",
    points: [40, 52, 49, 66, 70, 92],
  },
];

const CASE_IMG: Record<string, string> = {
  "SaaS · Startup": "/site/case-saas.jpg",
  "E-commerce": "/site/case-ecom.jpg",
  Agency: "/site/case-agency.jpg",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        crumb="Case Studies"
        eyebrow="Impact"
        title="Real Transformations, Representative Outcomes"
        subtitle="How founders move from messy finance to clean systems, live dashboards, and confident decisions. Figures are representative of typical engagements."
      >
        <Link href="/contact" className="btn-primary glow-border">
          Book a CFO Strategy Call
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="section bg-ivory dark:bg-[#0B0F1A]">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Before → After"
            title="Finance Systems That Move the Business"
          />
          <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
            {cases.map((c) => (
              <StaggerItem key={c.title} className="h-full">
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-7 shadow-card dark:shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={CASE_IMG[c.tag] ?? "/site/case-saas.jpg"} alt={c.tag} className="-mx-7 -mt-7 mb-5 h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="inline-flex w-fit items-center rounded-full bg-brand-50 dark:bg-[#3D7BFF]/10 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-[#5B91FF]">
                    {c.tag}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-charcoal dark:text-[#F4F6FB]">{c.title}</h3>
                  <div className="mt-4 rounded-xl border border-slate-200/70 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-3">
                    <MiniChart id={`cs-${c.tag}`} points={c.points} height={48} />
                  </div>
                  <div className="mt-5 space-y-3 text-sm">
                    <p className="flex items-start gap-2 text-slate-500 dark:text-[#6B7589]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500"><Icon name="x" className="h-3 w-3" /></span>
                      <span><span className="font-semibold text-charcoal dark:text-[#F4F6FB]">Before:</span> {c.before}</span>
                    </p>
                    <p className="flex items-start gap-2 text-slate-700 dark:text-[#A6B0C3]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white"><Icon name="check" className="h-3 w-3" /></span>
                      <span><span className="font-semibold text-charcoal dark:text-[#F4F6FB]">After:</span> {c.after}</span>
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <BeforeAfter />
      <ImpactSection />
      <CtaBand title="Want results like these for your business?" secondaryLabel="Explore Services" />
    </>
  );
}
