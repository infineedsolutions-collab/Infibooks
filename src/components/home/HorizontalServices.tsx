"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion, useMotionValueEvent, type MotionValue } from "framer-motion";
import Icon from "@/components/Icon";
import { type Service } from "@/lib/site";
import { useRegion } from "@/components/RegionProvider";

const SERVICE_IMG: Record<string, string> = {
  bookkeeping: "/covers/bookkeeping.jpg",
  "virtual-cfo": "/covers/virtual-cfo.jpg",
  automation: "/covers/automation.jpg",
  taxation: "/covers/finance-basics.jpg",
  sop: "/covers/systems.jpg",
  receivables: "/covers/receivables.jpg",
  payables: "/covers/payables.jpg",
  budgeting: "/covers/budgeting.jpg",
  "cash-flow": "/covers/cash-flow.jpg",
  modeling: "/covers/cfo-advisory.jpg",
  payroll: "/covers/payroll.jpg",
  dashboards: "/covers/dashboards.jpg",
  fundraising: "/covers/fundraising.jpg",
  valuation: "/covers/finance-basics.jpg",
};

function CardInner({ s }: { s: Service }) {
  return (
    <div className="grid w-full items-center gap-6 rounded-2xl border border-slate-200/70 bg-white p-7 shadow-soft dark:border-white/10 dark:bg-[#161D30] dark:shadow-none sm:grid-cols-[1fr_1.1fr] sm:p-9">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SERVICE_IMG[s.slug] ?? "/covers/cfo-advisory.jpg"}
        alt={s.title}
        className="h-44 w-full rounded-xl object-cover sm:h-60"
      />
      <div>
        <h3 className="font-display text-2xl font-bold text-charcoal dark:text-[#F4F6FB]">{s.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{s.short}</p>
        <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
          {s.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-slate-500 dark:text-[#6B7589]">
              <Icon name="check" className="h-3.5 w-3.5 text-brand-500" /> {f}
            </li>
          ))}
        </ul>
        <Link href={s.href ?? `/services#${s.slug}`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-[#5B91FF]">
          Learn More <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function DeckCard({ s, i, n, progress }: { s: Service; i: number; n: number; progress: MotionValue<number> }) {
  const seg = 1 / n;
  const start = i * seg;
  const end = (i + 1) * seg;
  const inEnd = start + seg * 0.25;
  const outStart = end - seg * 0.25;
  // first card already present at pin start; others rise from below
  const yIn = i === 0 ? 0 : 120;
  const opIn = i === 0 ? 1 : 0;
  const y = useTransform(progress, [start, inEnd, outStart, end], [yIn, 0, 0, -120]);
  const opacity = useTransform(progress, [start, inEnd, outStart, end], [opIn, 1, 1, 0]);
  const scale = useTransform(progress, [start, inEnd, outStart, end], [i === 0 ? 1 : 0.9, 1, 1, 0.92]);

  return (
    <motion.div style={{ y, opacity, scale }} className="absolute inset-0 flex items-center justify-center">
      <CardInner s={s} />
    </motion.div>
  );
}

export default function HorizontalServices() {
  const { services } = useRegion();
  const reduce = useReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const n = services.length;
  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(n - 1, Math.floor(v * n + 0.0001)));
  });

  const Heading = (
    <div className="mx-auto max-w-2xl text-center">
      <span className="eyebrow mx-auto">What We Do</span>
      <h2 className="mt-4 font-display text-3xl font-extrabold text-charcoal dark:text-[#F4F6FB] sm:text-4xl">
        From Clean Books to <span className="heading-gradient-light">CFO Intelligence</span>
      </h2>
    </div>
  );

  // Reduced-motion / fallback: simple vertical list
  if (reduce) {
    return (
      <section className="section bg-white dark:bg-[#0B0F1A]">
        <div className="container-x">
          {Heading}
          <div className="mx-auto mt-10 max-w-3xl space-y-6">
            {services.map((s) => (
              <CardInner key={s.slug} s={s} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={wrap} className="relative bg-white dark:bg-[#0B0F1A]" style={{ height: `${n * 65 + 30}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-16">
        <div className="container-x w-full">
          {Heading}
          {/* fixed card stage - cards swap in the same spot */}
          <div className="relative mx-auto mt-10 h-[460px] max-w-3xl sm:h-[380px]">
            {services.map((s, i) => (
              <DeckCard key={s.slug} s={s} i={i} n={n} progress={scrollYProgress} />
            ))}
          </div>
          {/* progress dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {services.map((s, i) => (
              <span
                key={s.slug}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-7 bg-brand-500 dark:bg-[#3D7BFF]" : "w-1.5 bg-slate-300 dark:bg-white/15"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
