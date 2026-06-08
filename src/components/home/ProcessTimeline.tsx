import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion";
import { processSteps } from "@/lib/site";

export default function ProcessTimeline() {
  return (
    <section className="section bg-slate-50 dark:bg-[#0B0F1A]">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="How We Work"
          title="A Clear Path to a Stronger Finance Function"
          subtitle="A proven, transparent process - from first conversation to ongoing CFO-level support."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* vertical line */}
          <span className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-300 via-brand-400 to-transparent sm:left-[31px]" />

          <Stagger className="space-y-5">
            {processSteps.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="relative flex gap-5">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient font-display text-lg font-extrabold text-white shadow-glow sm:h-16 sm:w-16">
                    {i + 1}
                  </span>
                  <div className="flex-1 rounded-2xl border border-slate-100 dark:border-white/10 bg-white dark:bg-[#161D30] p-6 shadow-card dark:shadow-none transition-all hover:-translate-y-1 hover:shadow-soft">
                    <h3 className="font-display text-lg font-bold text-midnight-900 dark:text-[#F4F6FB]">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{step.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
