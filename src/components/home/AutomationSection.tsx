import SectionHeading from "@/components/SectionHeading";
import FlowDiagram from "@/components/FlowDiagram";
import { FadeUp } from "@/components/motion";
import { automationFlow, automationTools } from "@/lib/site";

export default function AutomationSection() {
  const loop = [...automationTools, ...automationTools];
  return (
    <section className="screen-section bg-white dark:bg-[#0B0F1A]">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-brand-200/20 blur-3xl dark:bg-[#3D7BFF]/10" />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            center
            eyebrow="AI Finance Automation"
            title="Automation That Saves Time and Removes Errors"
            subtitle="We automate repetitive finance tasks, reporting, reconciliations, invoice tracking, AR follow-ups, and dashboards using modern finance and AI tools."
          />
        </div>

        <FadeUp delay={0.1} className="mt-14">
          <FlowDiagram nodes={automationFlow} />
        </FadeUp>

        <div className="mt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-[#6B7589]">
            Powered by modern finance &amp; automation tools
          </p>
          <div className="relative mt-6 overflow-hidden mask-fade-x">
            <div className="flex w-max animate-marquee gap-3">
              {loop.map((tool, i) => (
                <span
                  key={`${tool}-${i}`}
                  className="whitespace-nowrap rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#161D30] px-5 py-2 text-sm font-semibold text-slate-600 dark:text-[#A6B0C3] shadow-card dark:shadow-none"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
