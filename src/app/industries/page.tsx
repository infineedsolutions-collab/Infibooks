import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import Icon from "@/components/Icon";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Finance, bookkeeping, and CFO support tailored for startups, SMEs, e-commerce, SaaS, agencies, real estate, consultants, hospitality, and professional firms.",
};

const tailor = [
  { icon: "target", title: "Industry-Specific KPIs", body: "We track the metrics that actually matter for your business model." },
  { icon: "pie", title: "Relevant Reporting", body: "Reporting packs designed around how your industry makes money." },
  { icon: "grid", title: "Tailored Dashboards", body: "Dashboards built for your team's real decisions, not generic templates." },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumb="Industries"
        eyebrow="Industries"
        title="Built for Modern Businesses"
        subtitle="From fast-moving startups to established firms, we adapt our bookkeeping, reporting, and CFO support to the realities of your industry."
      >
        <Link href="/contact" className="btn-gold">
          Book a Consultation
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </PageHero>

      <IndustriesGrid withHeading={false} />

      <section className="section bg-slate-50 dark:bg-[#0B0F1A]">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Tailored Support"
            title="Finance Shaped Around Your Business Model"
            subtitle="No two industries run their numbers the same way - so we don't treat them the same way."
          />
          <div className="mt-14">
            <FeatureGrid features={tailor} columns={3} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Don't See Your Industry? Let's Talk."
        text="Whatever your business model, Infibooks can build a finance function that fits. Book a free consultation to find out how."
        secondaryLabel="Explore Services"
      />
    </>
  );
}
