"use client";

import Link from "next/link";
import Icon from "@/components/Icon";
import { FadeUp } from "@/components/motion";
import { useRegion } from "@/components/RegionProvider";

export default function RegionServiceDetails() {
  const { services } = useRegion();
  return (
    <section className="section bg-slate-50 dark:bg-[#0B0F1A]">
      <div className="container-x space-y-16 lg:space-y-24">
        {services.map((s, i) => (
          <div
            key={s.slug}
            id={s.slug}
            className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <FadeUp className={i % 2 === 1 ? "lg:order-2" : ""}>
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                <Icon name={s.icon} className="h-8 w-8" />
              </span>
              <h2 className="mt-6 font-display text-3xl font-extrabold text-midnight-900 dark:text-[#F4F6FB]">{s.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{s.short}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Get Started
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                {s.href && (
                  <Link href={s.href} className="btn-secondary">
                    Learn More
                  </Link>
                )}
              </div>
            </FadeUp>

            <FadeUp delay={0.12} className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card dark:border-white/10 dark:bg-[#161D30] dark:shadow-none">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 dark:text-[#5B91FF]">
                  What&apos;s included
                </p>
                <ul className="mt-5 space-y-4">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-slate-700 dark:text-[#A6B0C3]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        ))}
      </div>
    </section>
  );
}
