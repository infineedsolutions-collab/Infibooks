import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/home/ServicesGrid";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import Icon from "@/components/Icon";
import CtaBand from "@/components/CtaBand";
import RegionServiceDetails from "@/components/RegionServiceDetails";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bookkeeping, Virtual CFO, MIS & management reporting, cash flow forecasting, financial modeling, and finance automation for growing businesses worldwide.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Our Services"
        title="A Complete Finance Function, Delivered as a Service"
        subtitle="Accounting support for growing businesses - from clean monthly bookkeeping to CFO-level strategy, dashboards, and automation."
      >
        <Link href="/contact" className="btn-gold">
          Book a Consultation
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </PageHero>

      <ServicesGrid withHeading={false} />

      <RegionServiceDetails />

      <ProcessTimeline />
      <CtaBand />
    </>
  );
}
