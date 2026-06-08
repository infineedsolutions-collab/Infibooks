import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about InfiBooks - bookkeeping vs Virtual CFO, tools we use, automation, dashboards, international clients, and onboarding.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        crumb="FAQ"
        eyebrow="FAQ"
        title="Questions, Answered"
        subtitle="The things founders most often ask before working with InfiBooks."
      />
      <section className="section bg-ivory dark:bg-[#0B0F1A]">
        <div className="container-x">
          <FAQSection withSchema />
        </div>
      </section>
      <CtaBand secondaryLabel="Explore Services" />
    </>
  );
}
