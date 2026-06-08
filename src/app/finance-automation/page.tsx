import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import Icon from "@/components/Icon";
import AutomationSection from "@/components/home/AutomationSection";
import AutomationFlow from "@/components/home/AutomationFlow";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Finance Automation for SMEs",
  description:
    "Finance automation for SMEs - automate reconciliations, reporting, AR follow-ups, invoice tracking, and dashboards using QuickBooks, Xero, Zoho, Power BI, n8n, Make, and AI tools.",
};

const automate = [
  { icon: "refresh", title: "Reconciliations", body: "Automated bank and ledger reconciliations that cut hours of manual matching." },
  { icon: "doc", title: "Reporting", body: "Management reports and packs generated automatically, on schedule." },
  { icon: "coins", title: "AR Follow-ups", body: "Automated invoice reminders so you get paid faster, with less chasing." },
  { icon: "grid", title: "Live Dashboards", body: "Real-time finance dashboards that always reflect your latest numbers." },
  { icon: "bolt", title: "Workflow Automation", body: "Connect your tools and remove repetitive copy-paste finance tasks." },
  { icon: "cpu", title: "AI-Assisted Finance", body: "Modern AI tools applied carefully to speed up analysis and reporting." },
];

export default function FinanceAutomationPage() {
  return (
    <>
      <PageHero
        crumb="Automation"
        eyebrow="Finance Automation for SMEs"
        title="Automate the Busywork. Keep the Insight."
        subtitle="We help growing businesses replace repetitive, error-prone finance tasks with reliable automated workflows, live dashboards, and AI-assisted reporting."
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
            eyebrow="What We Automate"
            title="Less Manual Work, Fewer Errors, More Clarity"
            subtitle="We identify the repetitive work draining your finance function and replace it with dependable automation."
          />
          <div className="mt-14">
            <FeatureGrid features={automate} />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/site/finance-automation.jpg" alt="Finance automation technology in action" className="mt-14 h-72 w-full rounded-2xl object-cover shadow-card dark:shadow-none" />
        </div>
      </section>

      <AutomationSection />

      <AutomationFlow />

      <CtaBand
        title="Ready to Automate Your Finance Function?"
        text="Let's map your finance workflows and build automation that saves time and removes errors - starting with the highest-impact wins."
        secondaryLabel="Explore Services"
      />
    </>
  );
}
