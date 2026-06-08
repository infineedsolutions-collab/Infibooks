"use client";

import { motion } from "@/components/motion";
import Icon from "@/components/Icon";

type Node = { label: string; icon: string };

const EASE = [0.16, 1, 0.3, 1] as const;

export default function FlowDiagram({ nodes }: { nodes: Node[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
      className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:justify-center"
    >
      {nodes.map((n, i) => (
        <div key={n.label} className="flex flex-col items-center gap-3 lg:flex-row">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16, scale: 0.92 },
              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } },
            }}
            className="group flex w-full items-center gap-3 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 shadow-card transition-colors hover:border-brand-300 lg:w-auto lg:flex-col lg:px-5 lg:py-4"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-transform group-hover:scale-110 group-hover:bg-brand-gradient group-hover:text-white">
              <Icon name={n.icon} className="h-6 w-6" />
            </span>
            <span className="text-sm font-semibold text-charcoal lg:whitespace-nowrap">{n.label}</span>
          </motion.div>

          {i < nodes.length - 1 && (
            <motion.span
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }}
              className="text-brand-500"
            >
              <Icon name="arrow" className="h-5 w-5 rotate-90 lg:rotate-0" />
            </motion.span>
          )}
        </div>
      ))}
    </motion.div>
  );
}
