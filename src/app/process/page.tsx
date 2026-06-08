import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProcessPath from "@/components/home/ProcessPath";
import Icon from "@/components/Icon";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How InfiBooks works - Diagnose, Design, Implement, Automate, Advise. A clear, transparent path from messy finance to CFO-level decision-making.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        crumb="Process"
        eyebrow="How We Work"
        title="From Diagnosis to Decision Intelligence"
        subtitle="A proven five-step path that turns messy finance into clean books, live dashboards, automation, and CFO-level clarity."
      >
        <Link href="/contact" className="btn-primary glow-border">
          Book a CFO Strategy Call
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </PageHero>

      <ProcessPath />
      <CtaBand secondaryLabel="Explore Services" />
    </>
  );
}
