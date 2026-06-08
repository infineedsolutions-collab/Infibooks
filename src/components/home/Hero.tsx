"use client";

import { motion } from "framer-motion";
import Icon from "@/components/Icon";
import MagneticButton from "@/components/MagneticButton";
import Hero3DBackground from "@/components/Hero3DBackground";
import WordReveal from "@/components/WordReveal";
import RotatingText from "@/components/RotatingText";
import { Counter } from "@/components/motion";
import CommandCenter3D from "./CommandCenter3D";
import { trustPoints } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

const stats = [
  { n: 120, suffix: "+", label: "Businesses Served" },
  { n: 100, suffix: "%", label: "YoY Growth" },
  { n: 15, suffix: "+", label: "Finance Experts" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-80px)] flex-col overflow-hidden bg-hero-gradient pt-20">
      <Hero3DBackground className="pointer-events-none absolute inset-0 h-full w-full" />
      {/* single brand-blue ambient glow (the one permitted slow drift) */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[34rem] w-[34rem] animate-aurora rounded-full bg-[radial-gradient(circle,rgba(46,110,156,0.12),transparent_64%)] blur-2xl" />

      <div className="container-x relative grid flex-1 items-center gap-12 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-10">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            Global CFO Advisory · AI Finance Operating System
          </motion.span>

          <div className="mt-6">
            <WordReveal
              text="AI-Powered CFO Intelligence for"
              highlight={[1, 2]}
              className="font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-charcoal dark:text-[#F4F6FB] sm:text-5xl lg:text-[3.7rem]"
            />
            <div className="font-display text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.7rem]">
              <RotatingText
                words={["Modern Businesses", "Ambitious Founders", "Scaling Startups"]}
                className="heading-gradient-light"
              />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-[#A6B0C3]"
          >
            From clean books to boardroom decisions, InfiBooks builds finance systems that help
            founders see cash clearly, control growth, automate reporting, and make faster
            decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="/contact#book" className="btn-primary glow-border">
              Book a CFO Strategy Call
              <Icon name="arrow" className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="/finance-automation" className="btn-outline">
              Explore Finance Automation
            </MagneticButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-[#6B7589]"
          >
            <Icon name="check" className="h-4 w-4 text-brand-500" />
            Free 30-min CFO strategy call · no commitment
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.1 }}
            className="mt-8"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-data/10 px-3 py-1 text-xs font-semibold text-[#1E9E8F] dark:text-data">
              <Icon name="bolt" className="h-3.5 w-3.5" />
              Clients save 20+ hours/month on finance ops
            </span>
            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-extrabold text-[#1E9E8F] dark:text-data">
                    <Counter value={s.n} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-slate-500 dark:text-[#6B7589]">{s.label}</div>
                </div>
              ))}
              <div className="hidden h-9 w-px bg-slate-200 dark:bg-white/10 sm:block" />
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-[#6B7589]">
                {trustPoints.slice(0, 2).map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <Icon name="check" className="h-3.5 w-3.5 text-brand-500" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <CommandCenter3D />
      </div>
    </section>
  );
}
