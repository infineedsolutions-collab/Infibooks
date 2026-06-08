"use client";

import { motion } from "framer-motion";
import Icon from "./Icon";
import { Counter } from "./motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ----------------------------------------------------------------- GlassPanel */
export function GlassPanel({
  title,
  sub,
  icon,
  badge,
  glow = false,
  className = "",
  children,
}: {
  title?: string;
  sub?: string;
  icon?: string;
  badge?: string;
  glow?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#161D30] p-4 ${
        glow ? "ring-glow" : "shadow-card dark:shadow-none"
      } ${className}`}
    >
      {(title || icon) && (
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {icon && (
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 dark:bg-[#3D7BFF]/10 text-brand-600 dark:text-[#5B91FF]">
                <Icon name={icon} className="h-4 w-4" />
              </span>
            )}
            <div>
              {title && <p className="text-sm font-semibold text-charcoal dark:text-[#F4F6FB]">{title}</p>}
              {sub && <p className="text-[11px] uppercase tracking-wider text-slate-400 dark:text-[#6B7589]">{sub}</p>}
            </div>
          </div>
          {badge && (
            <span className="rounded-full bg-brand-50 dark:bg-[#3D7BFF]/10 px-2 py-0.5 text-[11px] font-semibold text-brand-700 dark:text-[#5B91FF]">
              {badge}
            </span>
          )}
        </div>
      )}
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ MiniChart */
function toPath(points: number[], w = 100, h = 48) {
  const n = points.length;
  const step = w / (n - 1);
  return points
    .map((v, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)} ${(h - (v / 100) * h).toFixed(1)}`)
    .join(" ");
}

export function MiniChart({
  points,
  height = 48,
  id = "mc",
  className = "",
}: {
  points: number[];
  height?: number;
  id?: string;
  className?: string;
}) {
  const line = toPath(points, 100, height);
  const area = `${line} L100 ${height} L0 ${height} Z`;
  return (
    <svg viewBox={`0 0 100 ${height}`} preserveAspectRatio="none" className={`w-full ${className}`} style={{ height }}>
      <defs>
        <linearGradient id={`${id}-f`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2E6E9C" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2E6E9C" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}-l`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2E6E9C" />
          <stop offset="100%" stopColor="#7CC6E0" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill={`url(#${id}-f)`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke={`url(#${id}-l)`}
        strokeWidth={2.6}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: EASE }}
      />
    </svg>
  );
}

/* -------------------------------------------------------------------- BarMini */
export function BarMini({ values, className = "" }: { values: number[]; className?: string }) {
  return (
    <div className={`flex items-end gap-1.5 ${className}`}>
      {values.map((v, i) => (
        <motion.span
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${v}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 + i * 0.06, ease: EASE }}
          className={`flex-1 rounded-t ${
            i === values.length - 1 ? "bg-gradient-to-t from-brand-500 to-brand-300" : "bg-slate-200"
          }`}
        />
      ))}
    </div>
  );
}

/* --------------------------------------------------------------------- Donut */
export function Donut({ value = 72, label = "", className = "" }: { value?: number; label?: string; className?: string }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90">
        <circle cx="32" cy="32" r={r} fill="none" stroke="#E6EAF0" strokeWidth="6" />
        <motion.circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke="#2E6E9C"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c - (value / 100) * c }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-charcoal dark:text-[#F4F6FB]">
        <Counter value={value} suffix="%" duration={1.4} />
      </span>
      {label && <p className="mt-1 text-center text-[10px] uppercase tracking-wide text-slate-400 dark:text-[#6B7589]">{label}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------- KpiTile */
export function KpiTile({
  label,
  value,
  delta,
  icon,
  tone = "text-brand-600",
}: {
  label: string;
  value: React.ReactNode;
  delta?: string;
  icon: string;
  tone?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-3 shadow-card dark:shadow-none">
      <div className="flex items-center justify-between">
        <Icon name={icon} className={`h-4 w-4 ${tone}`} />
        {delta && <span className="text-[10px] font-semibold text-brand-600">{delta}</span>}
      </div>
      <p className="mt-2 text-[10px] uppercase tracking-wide text-slate-400 dark:text-[#6B7589]">{label}</p>
      <p className="text-sm font-bold text-charcoal dark:text-[#F4F6FB]">{value}</p>
    </div>
  );
}
