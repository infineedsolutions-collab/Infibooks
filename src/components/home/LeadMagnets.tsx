import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import { Stagger, StaggerItem } from "@/components/motion";
import { leadMagnets } from "@/lib/site";

const MAGNET_IMG: Record<string, string> = {
  "Finance Systems Readiness Checklist": "/cards/chk-systems.jpg",
  "Monthly Close Checklist": "/cards/chk-close.jpg",
  "CFO Dashboard KPI Checklist": "/cards/chk-kpi.jpg",
  "AI Finance Automation Use-Case List": "/cards/chk-automation.jpg",
  "Cash Flow Visibility Checklist": "/cards/chk-cashflow.jpg",
  "AR & DSO Improvement Checklist": "/cards/chk-ar.jpg",
};

export default function LeadMagnets() {
  return (
    <section className="screen-section bg-white dark:bg-[#0B0F1A]">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Free Resources"
          title="Practical Finance Checklists for Founders"
          subtitle="Quick, actionable tools to assess and improve your finance function. Grab one and see where you stand."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leadMagnets.map((m) => (
            <StaggerItem key={m.title} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-soft dark:border-white/10 dark:bg-[#161D30] dark:shadow-none">
                <div className="relative h-36 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={MAGNET_IMG[m.title] ?? "/covers/cfo-advisory.jpg"}
                    alt={m.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-base font-bold text-charcoal dark:text-[#F4F6FB]">{m.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{m.desc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-[#6B7589]">Free · PDF</span>
                    <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-[#5B91FF]">
                      Get it
                      <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-8 text-center text-xs text-slate-400 dark:text-[#6B7589]">
          Downloadable assets coming soon - request any checklist and we&apos;ll send it over.
        </p>
      </div>
    </section>
  );
}
