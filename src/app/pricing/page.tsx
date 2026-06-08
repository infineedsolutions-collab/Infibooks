import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PricingTable from "@/components/PricingTable";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent finance pricing - bookkeeping from $10/month, with Virtual CFO, taxation, payroll, and more. Prices shown in your currency.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumb="Pricing"
        eyebrow="Pricing"
        title="Simple Pricing That Scales With You"
        subtitle="Start from just $10/hour for bookkeeping - add CFO, automation, and dashboards as you grow. Switch currency to see prices in your region."
      />
      <PricingTable />
      <CtaBand
        title="Not sure which plan fits?"
        text="Tell us about your business and we'll recommend the right setup - and confirm an exact quote before you start."
        primaryLabel="Book a Free Consultation"
        secondaryLabel="Explore Services"
      />
    </>
  );
}
