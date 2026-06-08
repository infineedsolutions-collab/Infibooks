import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import TiltCard from "@/components/TiltCard";
import Hero3DBackground from "@/components/Hero3DBackground";
import { Stagger, StaggerItem } from "@/components/motion";
import { problemSolutions } from "@/lib/site";

export default function ProblemSolutionGrid() {
  return (
    <section id="problems" className="screen-section scroll-mt-24 bg-ivory dark:bg-[#0B0F1A]">
      {/* subtle 3D depth behind the cards */}
      <Hero3DBackground className="pointer-events-none absolute inset-0 h-full w-full opacity-50" />

      <div className="container-x relative z-10">
        <SectionHeading
          center
          eyebrow="Real Problems We Solve"
          title="If This Sounds Like Your Finance Function, You're in the Right Place"
          subtitle="Every problem maps to a concrete solution and a business outcome - no vague promises."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problemSolutions.map((p) => (
            <StaggerItem key={p.problem} className="h-full">
              <TiltCard className="h-full" max={10}>
                <div className="group flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white/90 p-6 shadow-card backdrop-blur-sm transition-colors duration-300 [transform-style:preserve-3d] hover:border-brand-300 hover:shadow-soft dark:border-white/10 dark:bg-[#161D30]/90 dark:shadow-none">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-500 shadow-card [transform:translateZ(38px)] dark:bg-rose-500/10">
                      <Icon name={p.icon} className="h-5 w-5" />
                    </span>
                    <p className="font-display text-base font-bold text-charcoal [transform:translateZ(22px)] dark:text-[#F4F6FB]">{p.problem}</p>
                  </div>

                  <div className="mt-5 space-y-3 border-t border-slate-100 pt-4 [transform:translateZ(14px)] dark:border-white/10">
                    <div className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-[#3D7BFF]/10 dark:text-[#5B91FF]">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      <p className="text-slate-700 dark:text-[#A6B0C3]"><span className="font-semibold text-charcoal dark:text-[#F4F6FB]">Solution: </span>{p.solution}</p>
                    </div>
                    <div className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-bronze">
                        <Icon name="trending" className="h-3 w-3" />
                      </span>
                      <p className="text-slate-700 dark:text-[#A6B0C3]"><span className="font-semibold text-charcoal dark:text-[#F4F6FB]">Outcome: </span>{p.outcome}</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary">
            Get a Finance Systems Review
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
