import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import Icon from "@/components/Icon";
import { Counter, FadeUp } from "@/components/motion";
import CtaBand from "@/components/CtaBand";
import { trust } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "InfiBooks is a Beyond Bookkeeping finance partner - bookkeeping, Virtual CFO advisory, financial modeling, and automation that grew from a bookkeeping practice into a global finance team serving 120+ clients.",
};

const beliefs = [
  { icon: "shield", title: "Clarity over complexity", body: "Finance should make decisions easier, not harder. We turn data into a clear story." },
  { icon: "target", title: "Numbers that drive action", body: "Reporting only matters if it changes what you do next. We build for decisions." },
  { icon: "cpu", title: "Modern by default", body: "We use automation and AI to run leaner, faster, more reliable finance operations." },
  { icon: "handshake", title: "A genuine partner", body: "We act like part of your team - proactive, responsive, and invested in your growth." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About InfiBooks"
        title="Beyond Bookkeeping - A Finance Partner Built to Grow With You"
        subtitle="What started as a bookkeeping practice is now a full finance partner - clean books, sharp reporting, and CFO-level clarity, powered by modern automation."
      />

      {/* Story */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/site/about-story.jpg" alt="The InfiBooks finance team collaborating" className="mb-7 h-60 w-full rounded-2xl object-cover shadow-card" />
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-midnight-900 dark:text-[#F4F6FB]">
              From a bookkeeping practice to &ldquo;Beyond Bookkeeping&rdquo;
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-slate-600 dark:text-[#A6B0C3]">
              <p>
                InfiBooks began as a hands-on bookkeeping practice built on one conviction - that
                clean, reliable books are the foundation of every good business decision. We
                started with a handful of clients and a simple promise: go beyond bookkeeping.
              </p>
              <p>
                As founders, business owners, and CPA firms came to us for accurate numbers, they
                kept asking the same next question - &ldquo;what do these numbers actually mean for my
                business?&rdquo; So we grew beyond the ledger: into Virtual CFO advisory, financial
                modeling, cash flow management, and reporting that drives real decisions.
              </p>
              <p>
                Today InfiBooks is a team of 15+ finance professionals serving 120+ clients with
                100% year-on-year growth - pairing 15+ years of accounting expertise with modern
                automation and AI to run finance leaner, faster, and sharper for businesses
                worldwide.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.12}>
            <div className="grid grid-cols-2 gap-5">
              {trust.map((t) => (
                <div
                  key={t.label}
                  className="rounded-2xl border border-slate-100 dark:border-white/10 bg-gradient-to-br from-brand-50/70 to-white p-7 text-center shadow-card dark:shadow-none"
                >
                  <p className="font-display text-3xl font-extrabold text-brand-700 dark:text-[#5B91FF] sm:text-4xl">
                    <Counter value={t.value} suffix={t.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-[#6B7589]">{t.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-brand-200 bg-brand-50/70 p-7">
              <Icon name="quote" className="h-8 w-8 text-brand-500" />
              <p className="mt-3 text-lg font-medium leading-relaxed text-charcoal dark:text-[#F4F6FB]">
                “We don&apos;t just record the past - we help you make better decisions about the
                future.”
              </p>
              <p className="mt-3 text-sm text-slate-500 dark:text-[#6B7589]">- Rishi Arora, InfiBooks</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Beliefs */}
      <section className="section bg-slate-50 dark:bg-[#0B0F1A]">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="What We Believe"
            title="The Principles Behind Every Number"
          />
          <div className="mt-14">
            <FeatureGrid features={beliefs} columns={4} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's Build Your Finance Function Together"
        text="Whether you need clean books, sharper reporting, or a Virtual CFO, Infibooks is ready to help."
        secondaryLabel="Explore Services"
      />
    </>
  );
}
