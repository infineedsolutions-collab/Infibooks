import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FinanceOSMap from "@/components/home/FinanceOSMap";
import Icon from "@/components/Icon";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "The Finance Operating System | One Version of Truth",
  description:
    "Connect your accounting, payments, payroll, and data tools into one finance operating system - automated flow from source to dashboards to decisions.",
  alternates: { canonical: "/finance-operating-system" },
};

export default function FinanceOSPage() {
  return (
    <>
      <PageHero
        crumb="Finance OS"
        eyebrow="The Finance Operating System"
        title="One Finance Operating System, One Version of Truth"
        subtitle="We connect every tool you use into a single intelligent system - so data flows automatically from source, to clean books, to dashboards, to decisions."
      >
        <Link href="/contact" className="btn-primary glow-border">
          Book a CFO Strategy Call
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </PageHero>

      <FinanceOSMap />

      <CtaBand
        title="Ready to connect your finance stack?"
        text="Let's map your tools and build the operating system that gives you one version of the truth."
        secondaryLabel="See Automation Use Cases"
        secondaryHref="/use-cases"
      />
    </>
  );
}
