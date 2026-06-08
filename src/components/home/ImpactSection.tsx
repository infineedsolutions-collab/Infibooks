import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion";
import { impact } from "@/lib/site";

export default function ImpactSection() {
  return (
    <section className="screen-section bg-ivory dark:bg-[#0B0F1A]">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            center
            eyebrow="The Impact"
            title="What a Real Finance System Delivers"
            subtitle="Representative outcomes from the finance systems we design, implement, and run for founders and growing businesses."
          />
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {impact.map((item) => (
            <StaggerItem key={item.label} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-7 shadow-card dark:shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-soft">
                <p className="font-display text-4xl font-extrabold text-[#1E9E8F] dark:text-[#2FD3A5]">{item.metric}</p>
                <p className="mt-2 font-display text-lg font-bold text-charcoal dark:text-[#F4F6FB]">{item.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{item.note}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/site/impact.jpg" alt="A team celebrating business growth" className="mx-auto mt-10 h-72 w-full max-w-4xl rounded-2xl object-cover shadow-card dark:shadow-none" />

        <p className="mt-8 text-center text-xs text-slate-400 dark:text-[#6B7589]">
          Outcomes vary by business. Figures are representative of typical engagements, not guarantees.
        </p>
      </div>
    </section>
  );
}
