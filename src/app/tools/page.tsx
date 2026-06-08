import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import CtaBand from "@/components/CtaBand";
import { toolGroups, toolLogo, invertLogos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Finance Tools & Platforms We Work With",
  description:
    "InfiBooks works hands-on across QuickBooks, Xero, Zoho, Power BI, Google Sheets, n8n, Make, Shopify, Stripe, Gusto and more - connected into one finance system.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  return (
    <>
      <PageHero
        crumb="Tools"
        eyebrow="Tools & Platforms"
        title="The Finance Stack We Master"
        subtitle="We don't just use tools - we connect them into one intelligent finance system, from accounting and payments to BI dashboards and AI automation."
      >
        <Link href="/contact" className="btn-primary glow-border">
          Talk to a CFO Advisor
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="section bg-ivory dark:bg-[#0B0F1A]">
        <div className="container-x space-y-12">
          {toolGroups.map((g, gi) => (
            <FadeUp key={g.group} delay={gi * 0.05}>
              <div>
                <h2 className="font-display text-lg font-bold text-charcoal dark:text-[#F4F6FB]">{g.group}</h2>
                <Stagger className="mt-6 flex flex-wrap gap-x-10 gap-y-7">
                  {g.items.map((t) => (
                    <StaggerItem key={t}>
                      <div className="flex w-24 flex-col items-center gap-2.5 text-center transition-transform hover:-translate-y-1">
                        <div className="flex h-11 items-center justify-center">
                          {toolLogo[t] ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={toolLogo[t]} alt={t} className={`h-10 w-auto max-w-[6.5rem] object-contain ${invertLogos.includes(t) ? "dark:invert" : ""}`} />
                          ) : (
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-[#3D7BFF]/10 dark:text-[#5B91FF]">
                              <Icon name="check" className="h-5 w-5" />
                            </span>
                          )}
                        </div>
                        <span className="text-sm font-medium text-charcoal dark:text-[#F4F6FB]">{t}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="section bg-white dark:bg-[#0B0F1A]">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Why It Matters"
            title="Tool Expertise Means One Connected System"
            subtitle="The value isn't any single tool - it's how we wire them together so data flows automatically from source to decision."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              { icon: "plug", title: "Implementation", body: "Right-fit setup, migration, and a clean chart of accounts." },
              { icon: "bolt", title: "Automation", body: "Workflows across tools that remove manual finance work." },
              { icon: "grid", title: "Dashboards", body: "BI on top of your stack for real-time decisions." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-7 shadow-card dark:shadow-none">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 dark:bg-[#3D7BFF]/10 text-brand-600 dark:text-[#5B91FF]">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-charcoal dark:text-[#F4F6FB]">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let's connect your finance stack." secondaryLabel="See Use Cases" secondaryHref="/use-cases" />
    </>
  );
}
