import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Client Onboarding | How Working With InfiBooks Begins",
  description:
    "What happens after you reach out - our clear onboarding process from diagnosis to a live finance system, and exactly what you'll need to start.",
  alternates: { canonical: "/onboarding" },
};

const steps = [
  { n: "01", title: "Diagnose", happens: "We review your books, tools, reports, and workflows.", get: "A clear picture of gaps, risks, and quick wins." },
  { n: "02", title: "Design", happens: "We design your finance system and reporting.", get: "A chart of accounts, reporting, and dashboard plan." },
  { n: "03", title: "Implement", happens: "We clean, structure, and stand up the system.", get: "Clean, current books on the right stack." },
  { n: "04", title: "Automate", happens: "We connect tools and add AI workflows.", get: "Less manual work, fewer errors, live data." },
  { n: "05", title: "Advise", happens: "We run ongoing CFO advisory and reporting.", get: "Monthly insight, forecasts, and decision support." },
];

const needs = [
  "Access to your accounting software (QuickBooks, Xero, or Zoho)",
  "Recent financial statements & bank statements",
  "List of current tools (payments, payroll, commerce)",
  "A short conversation about goals and pain points",
];

export default function OnboardingPage() {
  return (
    <>
      <PageHero
        crumb="Onboarding"
        eyebrow="Client Onboarding"
        title="What Happens After You Reach Out"
        subtitle="No black box. Here's exactly how an engagement begins - clear steps, clear deliverables, no surprises."
      >
        <Link href="/contact" className="btn-primary glow-border">
          Start With a Diagnostic
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="section bg-ivory dark:bg-[#0B0F1A]">
        <div className="container-x">
          <SectionHeading center eyebrow="The Steps" title="A Calm, Structured Start" />
          <Stagger className="mx-auto mt-14 max-w-3xl space-y-4">
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="flex gap-5 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-6 shadow-card dark:shadow-none">
                  <span className="font-display text-3xl font-extrabold text-brand-200">{s.n}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-charcoal dark:text-[#F4F6FB]">{s.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-[#A6B0C3]"><span className="font-semibold text-charcoal dark:text-[#F4F6FB]">What happens: </span>{s.happens}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-[#A6B0C3]"><span className="font-semibold text-charcoal dark:text-[#F4F6FB]">What you get: </span>{s.get}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section bg-white dark:bg-[#0B0F1A]">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="To Get Started"
              title="What We'll Need From You"
              subtitle="Light lift on your side - we guide you through every step of access and setup."
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/site/onboarding.jpg" alt="InfiBooks onboarding consultation" className="mt-8 hidden h-60 w-full rounded-2xl object-cover shadow-card lg:block" />
          </div>
          <FadeUp delay={0.1}>
            <ul className="space-y-3">
              {needs.map((n) => (
                <li key={n} className="flex items-start gap-3 rounded-xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-4 shadow-card dark:shadow-none">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-slate-700 dark:text-[#A6B0C3]">{n}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      <CtaBand secondaryLabel="See Our Process" secondaryHref="/process" />
    </>
  );
}
