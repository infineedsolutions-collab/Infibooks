"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Counter } from "@/components/motion";
import { trust, toolGroups, toolLogo, invertLogos } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

// Same set of tools as the "Tools & Software We Use" page (only those with a logo).
const streamTools = toolGroups.flatMap((g) => g.items).filter((t) => toolLogo[t]);

export default function TrustStrip() {
  const reduce = useReducedMotion();
  const stream = [...streamTools, ...streamTools];
  return (
    <section className="relative z-10 bg-white py-12 dark:bg-[#0B0F1A] lg:py-16">
      <div className="container-x">
        {/* bare stats - no card, numbers roll then settle */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
          {trust.map((t, i) => (
            <motion.div
              key={t.label}
              className="text-center"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.09 }}
            >
              <p className="font-display text-4xl font-extrabold text-[#1E9E8F] dark:text-[#2FD3A5] sm:text-5xl">
                <Counter value={t.value} suffix={t.suffix} duration={1.4} />
              </p>
              <p className="mt-1.5 text-sm text-slate-500 dark:text-[#6B7589]">{t.label}</p>
            </motion.div>
          ))}
        </div>

        {/* streaming marquee - now below the stats */}
        <div className="mt-12 flex items-center gap-4 border-t border-slate-200/70 pt-8 dark:border-white/10">
          <span className="hidden shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-[#6B7589] sm:block">
            Tools &amp; Software We Use
          </span>
          <div className="group relative flex-1 overflow-hidden mask-fade-x">
            <div
              className="flex w-max items-center gap-12 animate-marquee group-hover:[animation-play-state:paused]"
              style={{ animationDuration: "40s" }}
            >
              {stream.map((t, i) => (
                <span key={`${t}-${i}`} className="flex shrink-0 items-center" title={t}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={toolLogo[t]} alt={t} className={`h-9 w-auto object-contain transition-transform hover:scale-110 ${invertLogos.includes(t) ? "dark:invert" : ""}`} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
