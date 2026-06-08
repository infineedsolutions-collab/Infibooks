"use client";

import { motion } from "@/components/motion";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { beforeAfter } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function BeforeAfter() {
  return (
    <section className="screen-section bg-ivory dark:bg-[#0B0F1A]">
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            center
            eyebrow="The Transformation"
            title="From Finance Chaos to Decision Confidence"
            subtitle="The same business - before and after a finance system built by InfiBooks."
          />
        </div>

        <div className="relative mt-16 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="overflow-hidden rounded-2xl border border-rose-200 bg-rose-50/60 p-7 dark:border-rose-500/25 dark:bg-rose-500/10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/site/before-messy.jpg" alt="Messy, manual finance before" className="-mx-7 -mt-7 mb-5 h-36 w-full object-cover" />
            <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rose-600">
              Before
            </span>
            <ul className="mt-5 space-y-3">
              {beforeAfter.before.map((b) => (
                <li key={b} className="flex items-center gap-3 text-slate-500 dark:text-[#6B7589]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                    <Icon name="x" className="h-3 w-3" />
                  </span>
                  <span className="line-through decoration-rose-300">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="relative flex items-center justify-center">
            <div className="relative hidden h-full w-28 items-center lg:flex">
              <span className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-rose-300 via-brand-400 to-brand-500" />
              <motion.span
                className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-brand-500 shadow-glow"
                animate={{ left: ["0%", "90%"] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow lg:absolute">
              <Icon name="arrow" className="h-5 w-5 rotate-90 lg:rotate-0" />
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
            className="relative overflow-hidden rounded-2xl border border-brand-200 bg-brand-50/70 p-7 ring-glow dark:border-[#3D7BFF]/25 dark:bg-[#3D7BFF]/10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/site/after-clean.jpg" alt="Clean, automated finance after" className="relative -mx-7 -mt-7 mb-5 h-36 w-full object-cover" />
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              After
            </span>
            <ul className="relative mt-5 space-y-3">
              {beforeAfter.after.map((a) => (
                <li key={a} className="flex items-center gap-3 text-charcoal dark:text-[#F4F6FB]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
