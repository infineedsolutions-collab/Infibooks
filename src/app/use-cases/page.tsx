import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FlowDiagram from "@/components/FlowDiagram";
import Icon from "@/components/Icon";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import CtaBand from "@/components/CtaBand";
import { useCases, automationFlow } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Finance Automation Use Cases",
  description:
    "Real finance automation use cases - invoice matching, duplicate bill detection, AR follow-ups, report automation, dashboard refresh, and QuickBooks-to-Power BI flows.",
  alternates: { canonical: "/use-cases" },
};

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        crumb="Use Cases"
        eyebrow="Automation Use Cases"
        title="Where Automation Pays Off First"
        subtitle="InfiBooks is not only bookkeeping. These are the finance workflows we automate to save time, cut errors, and keep data flowing."
      >
        <Link href="/contact" className="btn-primary glow-border">
          Explore Finance Automation
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="section bg-white dark:bg-[#0B0F1A]">
        <div className="container-x">
          <SectionHeading center eyebrow="The Flow" title="From Trigger to CFO Insight" />
          <FadeUp delay={0.1} className="mt-12">
            <FlowDiagram nodes={automationFlow} />
          </FadeUp>
        </div>
      </section>

      <section className="section bg-ivory dark:bg-[#0B0F1A]">
        <div className="container-x">
          <SectionHeading center eyebrow="Use Cases" title="Automations We Build" />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u) => (
              <StaggerItem key={u.title} className="h-full">
                <div className="group h-full rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-6 shadow-card dark:shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 dark:bg-[#3D7BFF]/10 text-brand-600 dark:text-[#5B91FF] transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                    <Icon name={u.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-charcoal dark:text-[#F4F6FB]">{u.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{u.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand title="Have a manual finance process to automate?" secondaryLabel="See Tools" secondaryHref="/tools" />
    </>
  );
}
