import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import HorizontalServices from "@/components/home/HorizontalServices";
import ProblemSolutionGrid from "@/components/home/ProblemSolutionGrid";
import FinanceOSMap from "@/components/home/FinanceOSMap";
import IntelligenceLayers from "@/components/home/IntelligenceLayers";
import AutomationSection from "@/components/home/AutomationSection";
import BeforeAfter from "@/components/home/BeforeAfter";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import ImpactSection from "@/components/home/ImpactSection";
import ProcessPath from "@/components/home/ProcessPath";
import DubaiTrust from "@/components/home/DubaiTrust";
import LeadMagnets from "@/components/home/LeadMagnets";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HorizontalServices />
      <ProblemSolutionGrid />
      <FinanceOSMap />
      <IntelligenceLayers />
      <AutomationSection />
      <BeforeAfter />
      <IndustriesGrid />
      <ImpactSection />
      <ProcessPath />
      <DubaiTrust />
      <LeadMagnets />

      <section className="bg-ivory dark:bg-[#0B0F1A] pt-20 pb-12 sm:pt-24 sm:pb-14">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="FAQ"
            title="Questions Founders Ask Us"
            subtitle="Everything you need to know about working with InfiBooks."
          />
          <FAQSection withSchema />
        </div>
      </section>

      <CtaBand
        title="Build a finance system that gives you clarity, control, and confidence."
        text="Book a CFO strategy call and we'll show you how to see cash, control growth, and make faster decisions - with finance and AI working together."
        primaryLabel="Book a CFO Strategy Call"
        secondaryLabel="Explore Services"
      />
    </>
  );
}
