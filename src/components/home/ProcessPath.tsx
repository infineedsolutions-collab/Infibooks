"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/SectionHeading";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { processSteps } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessPath() {
  const wrap = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const path = pathRef.current!;
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      gsap.set(dotsRef.current, { scale: 0.2, autoAlpha: 0.3 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: wrap.current, start: "top 75%", end: "bottom 80%", scrub: 1 },
      });
      tl.to(path, { strokeDashoffset: 0, ease: "none" }, 0);
      dotsRef.current.forEach((d, i) => {
        tl.to(d, { scale: 1, autoAlpha: 1, duration: 0.15 }, i / processSteps.length);
      });
      return () => tl.scrollTrigger?.kill();
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="screen-section bg-white dark:bg-[#0B0F1A]">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            center
            eyebrow="How We Work"
            title="A Proven Path to a Stronger Finance Function"
            subtitle="From first conversation to ongoing CFO advisory - a clear, transparent process."
          />
        </div>

        <div ref={wrap} className="relative mt-16 hidden lg:block">
          <svg viewBox="0 0 1000 60" preserveAspectRatio="none" className="absolute inset-x-0 top-3 h-8 w-full">
            <defs>
              <linearGradient id="pp" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#2E6E9C" />
                <stop offset="100%" stopColor="#28C7D9" />
              </linearGradient>
            </defs>
            <path d="M0 30 C 200 6, 300 54, 500 30 S 800 6, 1000 30" fill="none" stroke="rgba(27,36,48,0.08)" strokeWidth="2" />
            <path ref={pathRef} d="M0 30 C 200 6, 300 54, 500 30 S 800 6, 1000 30" fill="none" stroke="url(#pp)" strokeWidth="2.5" strokeLinecap="round" />
          </svg>

          <div className="relative grid grid-cols-5 gap-6 pt-1">
            {processSteps.map((step, i) => (
              <div key={step.title} className="text-center">
                <span
                  ref={(el) => {
                    if (el) dotsRef.current[i] = el;
                  }}
                  className="mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient font-display text-lg font-extrabold text-white shadow-glow"
                >
                  {i + 1}
                </span>
                <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-5 shadow-card dark:shadow-none">
                  <h3 className="font-display text-lg font-bold text-charcoal dark:text-[#F4F6FB]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-12 lg:hidden">
          <span className="absolute left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-400 to-transparent" />
          <Stagger className="space-y-4">
            {processSteps.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="flex gap-4">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gradient font-display text-lg font-extrabold text-white">
                    {i + 1}
                  </span>
                  <div className="flex-1 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-5 shadow-card dark:shadow-none">
                    <h3 className="font-display text-lg font-bold text-charcoal dark:text-[#F4F6FB]">{step.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600 dark:text-[#A6B0C3]">{step.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <FadeUp className="mt-14 text-center">
          <a href="/contact" className="btn-primary">Start With a Diagnosis</a>
        </FadeUp>
      </div>
    </section>
  );
}
