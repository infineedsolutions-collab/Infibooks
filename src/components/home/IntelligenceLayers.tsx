"use client";

import Image from "next/image";
import { motion } from "@/components/motion";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { intelligenceLayers } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function IntelligenceLayers() {
  return (
    <section className="screen-section bg-ivory dark:bg-[#0B0F1A]">
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            center
            eyebrow="CFO Intelligence Layer"
            title="We Don't Just Do Books. We Build Your Finance Brain."
            subtitle="Layers stack into a complete finance intelligence system - from a clean data foundation all the way to real-time decisions."
          />
        </div>

        <div className="mx-auto mt-16 max-w-3xl [perspective:1400px]">
          <div className="space-y-4 [transform-style:preserve-3d]">
            {intelligenceLayers.map((layer, i) => {
              const isLast = i === intelligenceLayers.length - 1;
              return (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, y: 40, rotateX: 14 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 6 }}
                  whileHover={{ rotateX: 0, y: -6 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-5 shadow-card dark:shadow-none sm:p-6"
                >
                  <span className="font-display text-3xl font-extrabold text-charcoal/10 dark:text-[#F4F6FB]/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 dark:bg-[#3D7BFF]/10 text-brand-600 dark:text-[#5B91FF]">
                    <Icon name={layer.icon} className="h-7 w-7" />
                  </span>
                  <div className="relative flex-1">
                    <h3 className="font-display text-xl font-bold text-charcoal dark:text-[#F4F6FB]">{layer.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{layer.body}</p>
                  </div>
                  {isLast && (
                    <Image src="/logo-animation.gif" alt="InfiBooks" width={60} height={60} unoptimized className="hidden h-9 w-auto opacity-80 sm:block" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
