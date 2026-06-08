"use client";

import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import ServiceMotif from "@/components/ServiceMotif";
import { Stagger, StaggerItem } from "@/components/motion";
import { useRegion } from "@/components/RegionProvider";

export default function ServicesGrid({
  withHeading = true,
}: {
  withHeading?: boolean;
}) {
  const { services } = useRegion();
  return (
    <section className="section" id="services">
      <div className="container-x">
        {withHeading && (
          <SectionHeading
            center
            eyebrow="What We Do"
            title="From Clean Books to CFO Intelligence"
            subtitle="A complete, modern finance function - bookkeeping, CFO advisory, FP&A, dashboards, and AI automation, delivered as one system."
          />
        )}

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const href = s.href ?? `/services#${s.slug}`;
            return (
              <StaggerItem key={s.slug} className="h-full">
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-2xl border border-slate-100 dark:border-white/10 bg-white dark:bg-[#161D30] p-6 shadow-card dark:shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-soft"
                >
                  <ServiceMotif motif={s.motif} />
                  <span className="mt-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-midnight-900 dark:text-[#F4F6FB]">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-[#5B91FF]">
                    Learn More
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
