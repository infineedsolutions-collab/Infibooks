import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import Icon from "@/components/Icon";
import { FadeUp } from "@/components/motion";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Bookkeeping Services",
  description:
    "Bookkeeping services for SMEs and startups - accurate, reconciled, audit-ready books, monthly management reporting, and clean accounting on QuickBooks, Xero, and Zoho Books.",
};

const includes = [
  { icon: "book", title: "Daily Transaction Recording", body: "Every transaction captured, categorised, and kept current - not left for month-end." },
  { icon: "refresh", title: "Bank & Card Reconciliation", body: "Accounts reconciled regularly so your books always match reality." },
  { icon: "coins", title: "AP & AR Management", body: "Bills and invoices tracked and managed to keep cash flow healthy." },
  { icon: "calendar", title: "Monthly Close", body: "A disciplined month-end close that delivers clean numbers on time." },
  { icon: "doc", title: "Management Reporting", body: "Monthly P&L, balance sheet, and cash flow you can actually read." },
  { icon: "wrench", title: "Software Setup & Cleanup", body: "Get on the right platform with a clean, well-structured chart of accounts." },
];

const benefits = [
  "Always-current books you can trust",
  "Faster, stress-free month-end",
  "Audit-ready records, all year round",
  "Clear monthly reporting for decisions",
  "Less manual work and fewer errors",
  "A scalable foundation as you grow",
];

export default function BookkeepingPage() {
  return (
    <>
      <PageHero
        crumb="Bookkeeping"
        eyebrow="Bookkeeping Services"
        title="Clean, Reliable Books - Every Single Month"
        subtitle="Accurate, reconciled, and audit-ready bookkeeping for growing businesses, with monthly management reporting that turns data into decisions."
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

      <section className="section">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="What's Included"
            title="Bookkeeping Done Properly"
            subtitle="A complete monthly bookkeeping and accounting service, built on disciplined process and modern tools."
          />
          <div className="mt-14">
            <FeatureGrid features={includes} />
          </div>
        </div>
      </section>

      <section className="section bg-slate-50 dark:bg-[#0B0F1A]">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The Difference"
              title="What Clean Books Actually Give You"
              subtitle="Bookkeeping isn't just compliance - done right, it's the foundation for every good business decision."
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/site/bookkeeping.jpg" alt="Clean, reconciled books on a screen" className="mt-8 hidden h-60 w-full rounded-2xl object-cover shadow-card lg:block" />
          </div>
          <FadeUp delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-xl border border-slate-100 dark:border-white/10 bg-white dark:bg-[#161D30] p-4 shadow-card dark:shadow-none">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-slate-700 dark:text-[#A6B0C3]">{b}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      <CtaBand
        title="Want Books You Can Finally Trust?"
        text="Let Infibooks take bookkeeping off your plate with accurate, reconciled, reporting-ready accounts every month."
        secondaryLabel="Explore Services"
      />
    </>
  );
}
