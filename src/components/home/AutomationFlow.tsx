"use client";

import { motion } from "framer-motion";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { FadeUp } from "@/components/motion";
import ExampleReport from "./ExampleReport";

/* ---- layout (natural size, horizontally scrollable for crisp full-size nodes) ---- */
const S = 54;
const X0 = 20;
const Y0 = 28;
const XGAP = 124;
const YGAP = 92;

type Color = { c: string; bg: string; bd: string };
type Node = { id: string; col: number; row: number; label: string; icon: string; color: Color };

const C = {
  yellow: { c: "#b45309", bg: "rgba(245,158,11,0.10)", bd: "rgba(245,158,11,0.40)" },
  green: { c: "#15803d", bg: "rgba(34,197,94,0.10)", bd: "rgba(34,197,94,0.38)" },
  indigo: { c: "#4f46e5", bg: "rgba(99,102,241,0.10)", bd: "rgba(99,102,241,0.38)" },
  gray: { c: "#475569", bg: "rgba(100,116,139,0.10)", bd: "rgba(100,116,139,0.38)" },
  purple: { c: "#7c3aed", bg: "rgba(139,92,246,0.09)", bd: "rgba(139,92,246,0.35)" },
  orange: { c: "#c2410c", bg: "rgba(249,115,22,0.10)", bd: "rgba(249,115,22,0.40)" },
  red: { c: "#dc2626", bg: "rgba(239,68,68,0.10)", bd: "rgba(239,68,68,0.38)" },
} satisfies Record<string, Color>;

const REPORTS = ["Profit & Loss", "Balance Sheet", "Cash Flow", "Trial Balance", "AR Aging", "General Ledger"];
const STEPS: { label: string; icon: string }[] = [
  { label: "Clear Sheet", icon: "grid" },
  { label: "Copy File", icon: "doc" },
  { label: "QuickBooks", icon: "database" },
  { label: "API Call", icon: "globe" },
  { label: "Format", icon: "code" },
  { label: "Report", icon: "grid" },
  { label: "Redacted", icon: "lock" },
];

const leftNodes: Node[] = [
  { id: "webhook", col: 0, row: 2.5, label: "Webhook", icon: "webhook", color: C.yellow },
  { id: "date", col: 1, row: 2.5, label: "Date Range", icon: "calendar", color: C.green },
  { id: "prev", col: 2, row: 2.5, label: "Previous Period", icon: "refresh", color: C.indigo },
  { id: "folder", col: 3, row: 2.5, label: "Month Folder", icon: "briefcase", color: C.gray },
];

const extractionNodes: Node[] = [];
REPORTS.forEach((rep, ri) => {
  STEPS.forEach((st, si) => {
    extractionNodes.push({
      id: `r${ri}_${si}`,
      col: 4 + si,
      row: ri,
      label: si === 5 ? rep : st.label,
      icon: st.icon,
      color: C.purple,
    });
  });
});

const rightNodes: Node[] = [
  { id: "redact", col: 11, row: 2.5, label: "App-Script Redact", icon: "wrench", color: C.orange },
  { id: "ai", col: 12, row: 2.5, label: "AI Analysis", icon: "sparkles", color: C.green },
  { id: "docId", col: 13, row: 2.5, label: "Get Document", icon: "doc", color: C.red },
  { id: "format", col: 14, row: 3.8, label: "Format", icon: "code", color: C.orange },
  { id: "finalReport", col: 15, row: 1.3, label: "Final Report", icon: "check", color: C.yellow },
  { id: "getNotion", col: 16, row: 3.7, label: "Get Notion", icon: "book", color: C.green },
  { id: "notionUpdate", col: 17, row: 1.5, label: "Update Notion", icon: "refresh", color: C.yellow },
  { id: "log", col: 18, row: 2.7, label: "Log Sheet", icon: "grid", color: C.gray },
];

const nodes: Node[] = [...leftNodes, ...extractionNodes, ...rightNodes];
const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

const edges: [string, string][] = [["webhook", "date"], ["date", "prev"], ["prev", "folder"]];
REPORTS.forEach((_, ri) => {
  edges.push(["folder", `r${ri}_0`]);
  for (let si = 0; si < STEPS.length - 1; si++) edges.push([`r${ri}_${si}`, `r${ri}_${si + 1}`]);
  edges.push([`r${ri}_${STEPS.length - 1}`, "redact"]);
});
edges.push(
  ["redact", "ai"], ["ai", "docId"], ["docId", "format"], ["format", "finalReport"],
  ["finalReport", "getNotion"], ["getNotion", "notionUpdate"], ["notionUpdate", "log"],
);

const groups: { title: string; ids: string[]; color: Color }[] = [
  { title: "Webhook Trigger", ids: ["webhook"], color: C.yellow },
  { title: "Date Range", ids: ["date"], color: C.green },
  { title: "Previous Period", ids: ["prev"], color: C.indigo },
  { title: "Create Month Folder", ids: ["folder"], color: C.gray },
  { title: "QuickBooks Data Extraction", ids: extractionNodes.map((n) => n.id), color: C.purple },
  { title: "App-Script Redaction", ids: ["redact"], color: C.orange },
  { title: "Data Analysis & Finance Pack", ids: ["ai"], color: C.green },
  { title: "Document Id", ids: ["docId"], color: C.red },
  { title: "Format", ids: ["format"], color: C.orange },
  { title: "Final Report", ids: ["finalReport"], color: C.yellow },
  { title: "Get Notion ID", ids: ["getNotion"], color: C.green },
  { title: "Notion Update", ids: ["notionUpdate"], color: C.yellow },
  { title: "Documentation", ids: ["log"], color: C.gray },
];

const nx = (n: Node) => X0 + n.col * XGAP;
const ny = (n: Node) => Y0 + n.row * YGAP;
const WIDTH = X0 + 18 * XGAP + S + 20;
const HEIGHT = Y0 + 5 * YGAP + S + 32;

const PAD = 12;
const TITLE = 20;
const LABELSPACE = 18;
function bbox(ids: string[]) {
  const ns = ids.map((i) => byId[i]);
  const minX = Math.min(...ns.map(nx)) - PAD;
  const maxX = Math.max(...ns.map((n) => nx(n) + S)) + PAD;
  const minY = Math.min(...ns.map(ny)) - TITLE;
  const maxY = Math.max(...ns.map((n) => ny(n) + S)) + LABELSPACE + PAD;
  return { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
}

function edgePath(a: Node, b: Node) {
  const sx = nx(a) + S;
  const sy = ny(a) + S / 2;
  const tx = nx(b);
  const ty = ny(b) + S / 2;
  const dx = Math.max(34, (tx - sx) / 2);
  return `M ${sx} ${sy} C ${sx + dx} ${sy}, ${tx - dx} ${ty}, ${tx} ${ty}`;
}

const tools = ["QuickBooks", "Google Sheets", "Google Drive", "Notion", "GPT-5", "Apps Script"];

export default function AutomationFlow() {
  return (
    <section className="screen-section bg-white dark:bg-[#0B0F1A]">
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            center
            eyebrow="Automation In Action"
            title="Inside a Real Workflow: The CFO Board Pack"
            subtitle="One click in Notion and this entire workflow runs end to end - pulling live data, building six reports, redacting, analysing with AI, and delivering a board-ready pack."
          />
        </div>

        {/* n8n editor frame */}
        <FadeUp className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            </span>
            <span className="ml-2 text-xs font-medium text-slate-500">cfo-board-pack · n8n workflow</span>
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Active
            </span>
          </div>

          {/* scrollable canvas (full-size, crisp nodes) */}
          <div
            className="overflow-x-auto"
            style={{
              backgroundColor: "#fbfcfe",
              backgroundImage: "radial-gradient(circle, rgba(100,116,139,0.18) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          >
            <div className="relative" style={{ width: WIDTH, height: HEIGHT }}>
              {/* group sticky-notes */}
              {groups.map((g, i) => {
                const b = bbox(g.ids);
                return (
                  <motion.div
                    key={g.title}
                    className="absolute rounded-xl border"
                    style={{ left: b.x, top: b.y, width: b.w, height: b.h, background: g.color.bg, borderColor: g.color.bd }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                  >
                    <span className="absolute left-3 top-1.5 text-[10px] font-bold uppercase tracking-wide" style={{ color: g.color.c }}>
                      {g.title}
                    </span>
                  </motion.div>
                );
              })}

              {/* connectors */}
              <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} fill="none" aria-hidden>
                {edges.map(([a, b]) => (
                  <motion.path
                    key={`${a}-${b}`}
                    d={edgePath(byId[a], byId[b])}
                    stroke="#94a3b8"
                    strokeOpacity={0.85}
                    strokeWidth={1.8}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, ease: "easeInOut", delay: byId[a].col * 0.07 }}
                  />
                ))}
              </svg>

              {/* nodes */}
              {nodes.map((n) => (
                <motion.div
                  key={n.id}
                  className="group absolute flex flex-col items-center"
                  style={{ left: nx(n), top: ny(n), width: S }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: n.col * 0.07 + n.row * 0.02 }}
                >
                  <div
                    className={`relative flex items-center justify-center rounded-xl border bg-white shadow-card transition-transform duration-200 group-hover:scale-110 ${n.id === "webhook" ? "rounded-l-[27px]" : ""}`}
                    style={{ height: S, width: S, color: n.color.c, borderColor: n.color.bd }}
                  >
                    <Icon name={n.icon} className="h-6 w-6" />
                    {n.id !== "webhook" && (
                      <span className="absolute -left-1.5 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border-2 border-slate-300 bg-white" />
                    )}
                    <span className="absolute -right-1.5 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border-2 border-slate-300 bg-white" />
                  </div>
                  <span className="mt-1.5 w-[84px] text-center text-[10px] font-semibold leading-tight text-charcoal">
                    {n.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          <p className="border-t border-slate-100 bg-slate-50 px-4 py-2 text-center text-[11px] text-slate-400">
            Scroll sideways to explore the full workflow →
          </p>
        </FadeUp>

        {/* what the workflow produces */}
        <div className="mt-12 flex flex-col items-center">
          <FadeUp className="flex flex-col items-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700">
              <Icon name="check" className="h-4 w-4" /> The workflow generates this report
            </span>
            <svg viewBox="0 0 24 24" className="my-4 h-7 w-7 text-slate-300" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </FadeUp>
          <FadeUp delay={0.1} className="w-full">
            <ExampleReport />
          </FadeUp>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Connected tools:</span>
          {tools.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600 shadow-card"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
