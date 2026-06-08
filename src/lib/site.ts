export const site = {
  name: "InfiBooks",
  legalName: "InfiBooks",
  tagline: "Beyond Bookkeeping",
  description:
    "InfiBooks is a premium global CFO advisory and AI finance transformation brand - bookkeeping, Virtual CFO, FP&A, MIS dashboards, financial modeling, and AI-powered finance automation for founders and growing businesses worldwide.",
  url: "https://infibooks.ae",
  email: "info@infibooks.com",
  phone: "+971 50 000 0000",
  phoneHref: "tel:+97150000000",
  whatsapp: "971500000000",
  address: "Serving clients worldwide - Remote-first",
  hours: "Mon - Fri: 9:00 AM - 6:00 PM",
  social: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    x: "https://x.com/",
  },
};

export type NavItem = { label: string; href: string; menu?: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", menu: "about" },
  { label: "Services", href: "/services", menu: "services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Why Us", href: "/#problems" },
  { label: "Industries", href: "/industries", menu: "industries" },
  { label: "Resources", href: "/resources", menu: "resources" },
  { label: "Contact", href: "/contact" },
];

/* ---------------------------------------------------------------- Team */
export type Member = {
  initials: string;
  name: string;
  role: string;
  linkedin: string;
  photo?: string; // add a real photo path in /public when ready
  pos?: string; // object-position class for the photo (default object-top)
  email?: string; // optional per-member email (falls back to site.email)
};

export const team: Member[] = [
  { initials: "RA", name: "Rishi Arora", role: "Fractional CFO | AI Generalist | Finance Automation Architect", linkedin: "https://www.linkedin.com/", photo: "/Rishi.jpg" },
  { initials: "AA", name: "Anmol Agarwal", role: "Client Accounting Lead | AR Strategist | CFO Services Specialist", linkedin: "https://www.linkedin.com/", photo: "/Anmol.jpg" },
  { initials: "KA", name: "Komal Agarwal", role: "Consultant", linkedin: "https://www.linkedin.com/" },
  { initials: "SS", name: "Shivam Singh", role: "Automation & Integration Specialist", linkedin: "https://www.linkedin.com/", photo: "/Shivam.png?v=3" },
  { initials: "SK", name: "Simran Jeet Kaur", role: "Accounts Executive", linkedin: "https://www.linkedin.com/" },
  { initials: "AS", name: "Aneesh Shaw", role: "Accounts Executive", linkedin: "https://www.linkedin.com/" },
];

/* Team members / posts reporting into each head, keyed by department.
   Entries with a `name` are people; entries without are open posts/roles. */
export type Report = { name?: string; role: string; count?: number };

export const orgTeams: Record<string, Report[]> = {
  Operations: [
    { role: "Client Success Executive", count: 8 },
    { role: "Onboarding Specialist", count: 6 },
    { role: "Process Analyst", count: 4 },
  ], // 18
  Accounts: [
    { name: "Aneesh Shaw", role: "AR / AP & Bookkeeping", count: 1 },
    { role: "Bookkeeper", count: 8 },
    { role: "Accounts Executive", count: 1 },
  ], // 10
  Automation: [
    { role: "Power BI Dashboard Analyst", count: 2 },
    { role: "n8n Workflow Builder", count: 2 },
    { role: "AI Automation Engineer", count: 2 },
  ], // 6
};

export function initialsOf(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/* ---------------------------------------------------------------- Careers */
export type Role = {
  slug: string;
  title: string;
  dept: string;
  type: string;
  location: string;
  summary: string;
};

export const roles: Role[] = [
  { slug: "bookkeeper", title: "Bookkeeper", dept: "Finance Operations", type: "Full-time", location: "Remote / Global", summary: "Maintain clean, reconciled books and support a disciplined monthly close." },
  { slug: "financial-analyst", title: "Financial Analyst", dept: "FP&A", type: "Full-time", location: "Remote / Global", summary: "Build models, forecasts, and management reporting for growing businesses." },
  { slug: "virtual-cfo-associate", title: "Virtual CFO Associate", dept: "CFO Advisory", type: "Full-time", location: "Remote / Global", summary: "Support CFO engagements across cash flow, reporting, and strategy." },
  { slug: "powerbi-specialist", title: "Power BI Dashboard Specialist", dept: "Reporting", type: "Full-time", location: "Remote", summary: "Design premium MIS dashboards and KPI scorecards for clients." },
  { slug: "automation-specialist", title: "Automation Specialist", dept: "Automation", type: "Full-time", location: "Remote", summary: "Build finance automations with n8n, Make, Apps Script, and AI agents." },
  { slug: "client-success-executive", title: "Client Success Executive", dept: "Client Success", type: "Full-time", location: "Remote / Global", summary: "Own client relationships and keep engagements smooth and proactive." },
  { slug: "finance-automation-intern", title: "Intern - Finance & Automation", dept: "Talent", type: "Internship", location: "Remote / Global", summary: "Learn finance, dashboards, and automation alongside our team." },
];

export const careerValues = [
  { icon: "cpu", title: "Finance + AI exposure", body: "Work where accounting meets automation, dashboards, and AI agents." },
  { icon: "trending", title: "Learning & growth", body: "Real ownership, modern tools, and rapid skill development." },
  { icon: "target", title: "Accuracy & ownership", body: "A culture of precision, accountability, and continuous improvement." },
  { icon: "globe", title: "Global clients", body: "Support founders and businesses across the world." },
];

export const hiringSteps = [
  "Apply with a short note on why InfiBooks",
  "Intro conversation with our team",
  "Practical skills task relevant to the role",
  "Final discussion & offer",
];

/* ---------------------------------------------------------------- Resource categories */
export const resourceCategories = [
  "Virtual CFO",
  "Bookkeeping",
  "Finance Automation",
  "Dashboards & MIS",
  "FP&A & Forecasting",
  "Startup Finance",
  "E-commerce Finance",
  "SaaS Finance",
];

/* ---------------------------------------------------------------- Legal pages index */
export const legalPages = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
];

/* ---------------------------------------------------------------- Trust strip */
export const trust = [
  { value: 15, suffix: "+", label: "Years Finance Experience" },
  { value: 100, suffix: "%", label: "Board-Ready Reporting" },
  { value: 10, suffix: "+", label: "Finance Tools Integrated" },
  { value: 10, suffix: "+", label: "Industries Served" },
];

export const trustPoints = [
  "CFO-Level Strategy",
  "AI Finance Automation",
  "Board-Ready Reporting",
  "Real-Time Cash Visibility",
  "Global Client Experience",
];

/* ---------------------------------------------------------------- Services (8) */
export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  motif: string;
  href?: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "bookkeeping",
    title: "Bookkeeping Services",
    short: "Accurate, audit-ready, compliant books - so you can focus on growth while we handle the numbers.",
    icon: "book",
    motif: "ledger",
    href: "/bookkeeping",
    features: ["Daily transaction recording", "Bank & card reconciliation", "Audit-ready compliance", "Disciplined monthly close"],
  },
  {
    slug: "virtual-cfo",
    title: "CFO Services",
    short: "Strategic CFO insights to maximize profitability, reduce uncertainty, and navigate financial complexity.",
    icon: "briefcase",
    motif: "insights",
    href: "/virtual-cfo",
    features: ["Strategic financial guidance", "Profitability & growth", "Board & investor support", "Virtual / fractional CFO"],
  },
  {
    slug: "automation",
    title: "AI Finance Automation",
    short: "Connected, automated finance workflows that remove manual work - powered by modern AI.",
    icon: "bolt",
    motif: "nodes",
    href: "/finance-automation",
    features: ["Workflow automation", "Auto reconciliations", "AR follow-up automation", "AI-assisted reporting"],
  },
  {
    slug: "taxation",
    title: "Taxation Services",
    short: "Specialized tax preparation and proactive tax planning that keep you compliant and optimized.",
    icon: "scale",
    motif: "report",
    features: ["Tax preparation", "Proactive tax planning", "Compliance & optimization", "Less paperwork for you"],
  },
  {
    slug: "sop",
    title: "SOP Implementation",
    short: "Expert SOPs that turn potential chaos into smooth, predictable finance workflows.",
    icon: "refresh",
    motif: "flow",
    features: ["Process documentation", "Controls & approvals", "Workflow design", "Team enablement"],
  },
  {
    slug: "receivables",
    title: "Receivables Management",
    short: "Secure your cash inflows and eliminate the risk of unpaid invoices and overdue debts.",
    icon: "coins",
    motif: "report",
    features: ["Invoicing & AR tracking", "Automated follow-ups", "Collections & aging", "Faster cash inflows"],
  },
  {
    slug: "payables",
    title: "Payables Management",
    short: "Stay in control of your cash outflows - prevent costly errors and unexpected financial strain.",
    icon: "doc",
    motif: "report",
    features: ["Vendor & bill management", "Approval workflows", "On-time payments", "Spend control"],
  },
  {
    slug: "budgeting",
    title: "Budgeting & Forecasting",
    short: "Budgets and forecasts that avoid surprises and keep your business ready for the future.",
    icon: "trending",
    motif: "forecast",
    features: ["Annual & rolling budgets", "Driver-based forecasts", "Scenario planning", "Variance analysis"],
  },
  {
    slug: "cash-flow",
    title: "Cash Flow Management",
    short: "Expert cash flow management that keeps your business financially steady and disruption-free.",
    icon: "gauge",
    motif: "charts",
    features: ["Cash flow forecasting", "Runway visibility", "Working capital control", "Liquidity planning"],
  },
  {
    slug: "modeling",
    title: "Financial Modelling",
    short: "Accurate, bespoke financial models so you never second-guess a financial decision again.",
    icon: "calculator",
    motif: "forecast",
    features: ["3-statement models", "Fundraising & M&A models", "Scenario & sensitivity", "Investor-ready outputs"],
  },
  {
    slug: "payroll",
    title: "Payroll Management",
    short: "On-time, accurate payroll that keeps your team paid right and your compliance clean.",
    icon: "users",
    motif: "report",
    features: ["Payroll processing", "Statutory compliance", "Payslips & records", "Reimbursements"],
  },
  {
    slug: "dashboards",
    title: "MIS & KPI Dashboards",
    short: "Live dashboards that turn raw data into decision intelligence.",
    icon: "grid",
    motif: "charts",
    href: "/dashboards",
    features: ["Real-time KPI dashboards", "Management reporting packs", "Variance analysis", "Custom metric tracking"],
  },
  {
    slug: "fundraising",
    title: "Pitch Deck & Fundraising",
    short: "Investor-ready pitch decks, financial models, and fundraising support to help you raise with confidence.",
    icon: "rocket",
    motif: "insights",
    features: ["Investor pitch deck", "Fundraising financial model", "Cap table & scenarios", "Investor Q&A prep"],
  },
  {
    slug: "valuation",
    title: "Valuation & Investor Readiness",
    short: "Pre-investment valuation and due-diligence prep, so you're ready before you meet investors.",
    icon: "target",
    motif: "report",
    features: ["Business valuation analysis", "Data room setup", "Due-diligence readiness", "Financial health review"],
  },
];

/* ---------------------------------------------------------------- Regions */
export type RegionCode = "AE" | "IN" | "US" | "CA";

export type Region = { code: RegionCode; name: string; flag: string; tax: string };

export const regions: Region[] = [
  { code: "AE", name: "UAE", flag: "🇦🇪", tax: "VAT & Corporate Tax" },
  { code: "IN", name: "India", flag: "🇮🇳", tax: "GST & Income Tax" },
  { code: "US", name: "USA", flag: "🇺🇸", tax: "Sales Tax & IRS" },
  { code: "CA", name: "Canada", flag: "🇨🇦", tax: "GST/HST & CRA" },
];

export const defaultRegion: RegionCode = "AE";

/** Services (same global offering across all regions). */
export function getServices(_code: RegionCode): Service[] {
  return services;
}

export function getRegion(code: RegionCode): Region {
  return regions.find((r) => r.code === code) ?? regions[0];
}

/* ---------------------------------------------------------------- Finance OS map */
export const financeOS = {
  sources: [
    { label: "QuickBooks", icon: "book" },
    { label: "Xero", icon: "book" },
    { label: "Zoho", icon: "book" },
    { label: "Shopify", icon: "cart" },
    { label: "Stripe", icon: "coins" },
    { label: "Gusto", icon: "users" },
  ],
  engine: [
    { label: "Google Sheets", icon: "grid" },
    { label: "Power BI", icon: "chart" },
    { label: "n8n", icon: "bolt" },
    { label: "Make", icon: "refresh" },
    { label: "AI Agents", icon: "cpu" },
  ],
  output: [
    { label: "Live Dashboards", icon: "grid" },
    { label: "CFO Insights", icon: "briefcase" },
    { label: "Decisions", icon: "lightbulb" },
  ],
};

/* ---------------------------------------------------------------- Intelligence layers */
export const intelligenceLayers = [
  { icon: "database", title: "Data Foundation", body: "Clean, reconciled, structured financial data - the single source of truth.", tone: "from-slate-500/30 to-slate-700/10" },
  { icon: "doc", title: "Reporting Layer", body: "MIS, management accounts, and KPI dashboards that make performance visible.", tone: "from-teal-500/30 to-teal-700/10" },
  { icon: "trending", title: "Forecasting Layer", body: "Driver-based models, rolling forecasts, and cash flow scenarios.", tone: "from-brand-500/30 to-brand-700/10" },
  { icon: "bolt", title: "Automation Layer", body: "Connected workflows and AI agents that remove manual finance work.", tone: "from-cyan-400/30 to-cyan-600/10" },
  { icon: "lightbulb", title: "Decision Layer", body: "Real-time visibility and CFO-level insight for faster, sharper decisions.", tone: "from-gold/30 to-gold/5" },
];

/* ---------------------------------------------------------------- Scroll story */
export const scrollStory = [
  { step: "01", icon: "database", title: "Raw data enters", body: "Transactions, invoices, payroll, and payments flow in from every tool you use." },
  { step: "02", icon: "refresh", title: "Cleaned & reconciled", body: "Data is structured, reconciled, and standardised into a single source of truth." },
  { step: "03", icon: "grid", title: "Dashboards & MIS", body: "Live dashboards and management reports make performance instantly visible." },
  { step: "04", icon: "trending", title: "CFO insights & forecasts", body: "Cash flow forecasts and CFO-level insight turn numbers into foresight." },
  { step: "05", icon: "bolt", title: "AI automation", body: "Automated workflows and AI agents remove the manual, repetitive finance work." },
  { step: "06", icon: "lightbulb", title: "Real-time decisions", body: "You get real-time visibility to see cash, control growth, and decide faster." },
];

/* ---------------------------------------------------------------- Before / After */
export const beforeAfter = {
  before: [
    "Messy, delayed books",
    "Manual spreadsheets",
    "Unclear cash flow",
    "Reports that arrive too late",
    "Decisions made on gut feel",
  ],
  after: [
    "Clean, current books",
    "Automated reporting",
    "Real-time cash visibility",
    "Live dashboards & MIS",
    "CFO-level decision confidence",
  ],
};

/* ---------------------------------------------------------------- Industries */
export type Industry = {
  slug: string;
  icon: string;
  title: string;
  body: string;
  challenges: string[];
  help: string[];
};

export const industries: Industry[] = [
  {
    slug: "startups", icon: "rocket", title: "Startups", body: "Investor-ready from day one.",
    challenges: ["Burn & runway uncertainty", "Investor-ready numbers", "No finance function yet"],
    help: ["Clean books from day one", "Runway & cash forecasting", "Investor & board reporting"],
  },
  {
    slug: "cannabis", icon: "sparkles", title: "Cannabis", body: "Compliance-heavy, cash-intensive operations.",
    challenges: ["Strict regulatory compliance", "Cash-heavy operations", "Seed-to-sale tracking"],
    help: ["Compliant, audit-ready books", "Cash flow & cost control", "Inventory & margin reporting"],
  },
  {
    slug: "hospitality", icon: "coffee", title: "Hospitality", body: "Cost control & daily reporting.",
    challenges: ["Food & labour cost control", "Daily revenue tracking", "Thin margins"],
    help: ["Daily MIS reporting", "Cost-of-sales control", "Outlet-level dashboards"],
  },
  {
    slug: "manufacturing", icon: "wrench", title: "Manufacturing", body: "Costing, inventory & margins.",
    challenges: ["Product costing", "Inventory & WIP", "Margin visibility"],
    help: ["Costing & margin analysis", "Inventory accounting", "Production dashboards"],
  },
  {
    slug: "real-estate", icon: "building", title: "Real Estate", body: "Portfolio & project finance.",
    challenges: ["Project & portfolio finance", "Multi-entity reporting", "Cash across projects"],
    help: ["Project-level P&L", "Portfolio dashboards", "Multi-entity consolidation"],
  },
  {
    slug: "agriculture", icon: "scatter", title: "Agriculture", body: "Seasonal cash flow & input costs.",
    challenges: ["Seasonal cash flow", "Input & crop costing", "Yield-based margins"],
    help: ["Seasonal cash forecasting", "Cost & yield analysis", "Grant & subsidy tracking"],
  },
  {
    slug: "b2b", icon: "handshake", title: "B2B", body: "Long cycles, receivables & contracts.",
    challenges: ["Long sales cycles", "Receivables & collections", "Contract & deferred revenue"],
    help: ["AR & collections automation", "Revenue recognition", "Pipeline-to-cash reporting"],
  },
  {
    slug: "d2c", icon: "cart", title: "D2C", body: "Margins, CAC & multi-channel cash.",
    challenges: ["Blended margins & CAC", "Inventory & COGS", "Cash flow timing"],
    help: ["Channel-level P&L", "CAC, LTV & cohort reporting", "Inventory & cash forecasting"],
  },
];

/* ---------------------------------------------------------------- Automation */
export const automationTools = [
  "QuickBooks", "Xero", "Zoho", "Shopify", "Stripe", "Gusto", "Power BI", "Google Sheets", "n8n", "Make", "AI Agents",
];

/** Brand logo files (in /public/tools) keyed by display name. */
export const toolLogo: Record<string, string> = {
  QuickBooks: "/tools/quickbooks.svg",
  Xero: "/tools/xero.svg",
  Zoho: "/tools/zoho.svg",
  "Zoho Books": "/tools/zoho.svg",
  Shopify: "/tools/shopify.svg",
  Stripe: "/tools/stripe.svg",
  Gusto: "/tools/gusto.svg",
  "Power BI": "/tools/powerbi.svg",
  "Google Sheets": "/tools/googlesheets.svg",
  "Google Drive": "/tools/googledrive.svg",
  Excel: "/tools/excel.svg",
  n8n: "/tools/n8n.svg",
  Make: "/tools/make.svg",
  Notion: "/tools/notion.svg",
  Slack: "/tools/slack.svg",
  Tableau: "/tools/tableau.svg",
  Tally: "/tools/tally.svg",
  "Apps Script": "/tools/appsscript.svg",
  ClickUp: "/tools/clickup.svg",
  "Monday.com": "/tools/monday.svg",
  Smartsheet: "/tools/smartsheet.svg",
  Claude: "/tools/claude.svg",
  ChatGPT: "/tools/chatgpt.svg",
  Lovable: "/tools/lovable.svg",
  Replit: "/tools/replit.svg",
  A2X: "/a2x.png",
  TillerHQ: "/tiller.png",
};

export const automationFlow = [
  { label: "Accounting Data", icon: "database" },
  { label: "Clean Reports", icon: "doc" },
  { label: "Dashboard", icon: "grid" },
  { label: "CFO Insights", icon: "briefcase" },
  { label: "Better Decisions", icon: "lightbulb" },
];

/* ---------------------------------------------------------------- Process */
export const processSteps = [
  { title: "Diagnose", body: "We assess your books, tools, reporting, and finance workflows to find the gaps." },
  { title: "Design", body: "We design your finance system - chart of accounts, reporting, dashboards, and controls." },
  { title: "Implement", body: "We clean, structure, and stand up the system on the right finance stack." },
  { title: "Automate", body: "We connect tools and AI agents to remove manual, repetitive finance work." },
  { title: "Advise", body: "We run ongoing CFO advisory - cash flow, forecasting, and decision support." },
];

/* ---------------------------------------------------------------- Why us */
export const whyUs = [
  { icon: "target", title: "Finance expertise, business sense", body: "Real commercial understanding - not just compliance and data entry." },
  { icon: "shield", title: "Clean process & reporting discipline", body: "Structured workflows and reporting standards you can rely on every month." },
  { icon: "cpu", title: "AI-enabled automation mindset", body: "We build leaner finance operations with modern tools and AI agents." },
  { icon: "grid", title: "Dashboards that drive decisions", body: "Live visibility into the metrics that actually move your business." },
  { icon: "layers", title: "Experience across industries", body: "Startups, SaaS, e-commerce, real estate, agencies, and service businesses." },
  { icon: "gauge", title: "Scales with you", body: "From first clean book to full CFO advisory as your business grows." },
];

/* ---------------------------------------------------------------- Impact */
export const impact = [
  { metric: "5-day", label: "Monthly close", note: "Down from 20+ days of manual catch-up." },
  { metric: "Real-time", label: "Cash visibility", note: "Live cash position instead of month-old numbers." },
  { metric: "~70%", label: "Less manual work", note: "Reconciliations and reporting largely automated." },
  { metric: "Days", label: "Board-ready packs", note: "Investor and board reporting in days, not weeks." },
  { metric: "1", label: "Source of truth", note: "Every tool connected into one finance system." },
  { metric: "24/7", label: "Decision visibility", note: "Founders see the numbers whenever they need them." },
];

/* ---------------------------------------------------------------- FAQ */
export const faqs = [
  { q: "What's the difference between bookkeeping and a Virtual CFO?", a: "Bookkeeping keeps your records clean and accurate - the foundation. A Virtual CFO uses those numbers to drive strategy: cash flow, forecasting, KPIs, profitability, and board-ready decisions. InfiBooks does both, as one connected system." },
  { q: "When does a business need a Virtual CFO?", a: "Usually when decisions are being made on gut feel, cash flow is unpredictable, you're raising funds, or you've outgrown basic bookkeeping but can't justify a full-time CFO. A fractional CFO gives you that leadership flexibly." },
  { q: "Can InfiBooks work with QuickBooks, Xero, and Zoho?", a: "Yes - we're hands-on across QuickBooks, Xero, and Zoho Books, and we build reporting and automation on top using Power BI, Google Sheets, n8n, Make, and AI agents." },
  { q: "Can InfiBooks automate finance reporting?", a: "Yes. We automate reconciliations, AR follow-ups, report generation, and dashboard refreshes so your team spends time on judgment and analysis, not manual work." },
  { q: "Can InfiBooks build CFO dashboards?", a: "Absolutely. We design live MIS and KPI dashboards - cash flow, margin, DSO, AR aging, budget vs actual, and founder decision views - tailored to your business model." },
  { q: "Do you support international clients?", a: "Yes. We work with founders and businesses globally, including multi-entity and multi-currency setups." },
  { q: "How does onboarding work?", a: "We start with a diagnosis of your books, tools, and reporting, then design and implement your finance system, layer in automation, and move into ongoing advisory. Clear steps, clear deliverables." },
  { q: "What information is needed to start?", a: "Typically access to your accounting software, recent financials, and a short conversation about your goals and pain points. We guide you through exactly what's needed." },
];

/* ---------------------------------------------------------------- Real problems → solution → outcome */
export const problemSolutions = [
  { icon: "clock", problem: "Reports arrive too late", solution: "Monthly close workflow + live dashboards", outcome: "Faster founder decisions" },
  { icon: "trending", problem: "Cash flow is unclear", solution: "Cash flow forecast & visibility dashboard", outcome: "Better planning and control" },
  { icon: "coins", problem: "AR follow-up is manual", solution: "AR aging, DSO tracking & automated follow-ups", outcome: "Stronger collection discipline" },
  { icon: "scatter", problem: "Tools are disconnected", solution: "Finance operating system with integrations", outcome: "One version of the truth" },
  { icon: "refresh", problem: "Manual reports eat hours", solution: "AI & workflow automation", outcome: "More time for real analysis" },
  { icon: "pie", problem: "Margins are a mystery", solution: "Profitability & KPI reporting", outcome: "Better pricing & growth calls" },
];

/* ---------------------------------------------------------------- Lead magnets (placeholder assets) */
export const leadMagnets = [
  { icon: "shield", title: "Finance Systems Readiness Checklist", desc: "Score how ready your finance function is to scale." },
  { icon: "calendar", title: "Monthly Close Checklist", desc: "The exact steps to a clean, on-time close." },
  { icon: "grid", title: "CFO Dashboard KPI Checklist", desc: "The metrics every founder dashboard should track." },
  { icon: "bolt", title: "AI Finance Automation Use-Case List", desc: "Where automation saves the most time first." },
  { icon: "coins", title: "Cash Flow Visibility Checklist", desc: "Get a real-time view of cash and runway." },
  { icon: "doc", title: "AR & DSO Improvement Checklist", desc: "Collect faster and tighten receivables." },
];

/* ---------------------------------------------------------------- Tools */
export const toolGroups = [
  { group: "Accounting", items: ["QuickBooks", "Xero", "Zoho Books", "Tally"] },
  { group: "Commerce & Payments", items: ["Shopify", "Stripe", "A2X"] },
  { group: "Payroll", items: ["Gusto"] },
  { group: "BI & Dashboards", items: ["Power BI", "Google Sheets", "Excel", "Tableau", "TillerHQ"] },
  { group: "Automation & AI", items: ["n8n", "Make", "AI Agents", "Apps Script"] },
  { group: "AI & Build", items: ["Claude", "ChatGPT", "Lovable", "Replit"] },
  { group: "Ops & Collaboration", items: ["ClickUp", "Monday.com", "Smartsheet", "Notion", "Slack"] },
];

/** Near-black logos that need inverting to stay visible on dark backgrounds. */
export const invertLogos = ["Notion", "ChatGPT"];

/* ---------------------------------------------------------------- Automation use cases */
export const useCases = [
  { icon: "doc", title: "Invoice matching", body: "Match invoices to POs and payments automatically." },
  { icon: "alert", title: "Duplicate bill detection", body: "Flag duplicate vendor bills before they're paid." },
  { icon: "refresh", title: "Payment status updates", body: "Keep payment & reconciliation status in sync." },
  { icon: "coins", title: "AR follow-up workflow", body: "Automated, polite reminders that get you paid." },
  { icon: "pie", title: "Monthly report automation", body: "Reports generated and delivered on schedule." },
  { icon: "grid", title: "Dashboard refresh", body: "Live dashboards that always reflect latest data." },
  { icon: "trending", title: "Cash flow forecast update", body: "Forecasts that refresh as actuals come in." },
  { icon: "database", title: "Bank feed cleanup support", body: "Cleaner feeds feeding cleaner books." },
  { icon: "bolt", title: "Sheets → dashboard flow", body: "Google Sheets data piped into live dashboards." },
  { icon: "chart", title: "QuickBooks → Power BI", body: "Accounting data flowing into BI reporting." },
  { icon: "cpu", title: "n8n workflow examples", body: "Custom finance automations across your stack." },
];

/* ---------------------------------------------------------------- Dashboard examples */
export const dashboardExamples = [
  { icon: "coins", title: "Cash Flow Dashboard", body: "Inflows, outflows, net position, and runway.", points: [40, 52, 48, 64, 60, 78] },
  { icon: "doc", title: "AR Aging Dashboard", body: "Receivables by bucket and customer.", points: [70, 55, 40, 30, 22, 18] },
  { icon: "clock", title: "DSO Dashboard", body: "Days sales outstanding trend over time.", points: [60, 55, 50, 46, 42, 38] },
  { icon: "pie", title: "Profitability Dashboard", body: "Margin by product, channel, or service.", points: [30, 40, 44, 52, 58, 66] },
  { icon: "scale", title: "Budget vs Actual", body: "Plan against performance, every month.", points: [50, 70, 60, 85, 75, 92] },
  { icon: "grid", title: "Founder KPI Dashboard", body: "One screen for the metrics that matter.", points: [35, 48, 55, 60, 72, 88] },
];

/* ---------------------------------------------------------------- Service detail pages (/services/[slug]) */
export type ServiceDetail = {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  cta: string;
  problem: string;
  whatWeDo: string[];
  how: { title: string; body: string }[];
  tools: string[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "fpa-forecasting": {
    slug: "fpa-forecasting",
    icon: "trending",
    title: "FP&A & Forecasting",
    tagline: "Forecasting and FP&A built for real decisions",
    cta: "Start with a Finance Diagnostic",
    problem: "Plans live in static spreadsheets, forecasts go stale within weeks, and no one can confidently answer what the runway really is.",
    whatWeDo: ["Driver-based 3-statement models", "Rolling cash flow forecasts", "Budget vs actual tracking", "Scenario & sensitivity planning"],
    how: [
      { title: "Diagnose", body: "We map your drivers, data sources, and decision needs." },
      { title: "Build", body: "We build a driver-based model tied to your accounting." },
      { title: "Connect", body: "Actuals flow in so the forecast stays current." },
      { title: "Review", body: "Monthly reviews turn the model into decisions." },
    ],
    tools: ["Excel", "Google Sheets", "Power BI", "QuickBooks", "Xero"],
    outcomes: ["An always-current forecast", "Clear runway visibility", "Faster, calmer planning cycles"],
    faqs: [
      { q: "What is FP&A for a startup or growing business?", a: "FP&A - financial planning & analysis - turns your numbers into forward-looking plans: forecasts, budgets, scenarios, and the analysis behind decisions like hiring, pricing, and spend." },
      { q: "How often are forecasts updated?", a: "We run rolling forecasts that refresh as actuals come in - typically monthly, with cash flow watched more frequently when runway is tight." },
      { q: "Driver-based vs traditional budgeting - what's the difference?", a: "Driver-based models tie outputs to real business drivers (e.g. leads, conversion, headcount), so updating an assumption updates the whole model - far more useful than a static annual budget." },
      { q: "Do you integrate forecasting with our accounting?", a: "Yes - we connect the model to QuickBooks, Xero, or Zoho so actuals feed the forecast automatically." },
    ],
  },
  "software-implementation": {
    slug: "software-implementation",
    icon: "plug",
    title: "Software Implementation",
    tagline: "Set up your finance software the right way",
    cta: "Get a Finance Systems Review",
    problem: "Disconnected tools, a messy chart of accounts, and data that never quite reconciles - the foundation is shaky before reporting even starts.",
    whatWeDo: ["Software selection & setup", "Migration & historical cleanup", "Chart of accounts design", "App-stack integration"],
    how: [
      { title: "Assess", body: "We review your tools, data, and requirements." },
      { title: "Design", body: "We design a clean chart of accounts and structure." },
      { title: "Migrate", body: "We migrate and clean historical data." },
      { title: "Connect", body: "We integrate and validate the full stack." },
    ],
    tools: ["QuickBooks", "Xero", "Zoho Books", "Shopify", "Stripe", "A2X"],
    outcomes: ["A clean finance foundation", "A connected, reconciled stack", "Reliable data you can trust"],
    faqs: [
      { q: "Which accounting platform should we use?", a: "It depends on your model and scale - we'll recommend QuickBooks, Xero, or Zoho based on your needs and set it up properly." },
      { q: "Can you migrate from our old system?", a: "Yes - migration and historical cleanup are core to implementation. We reconcile prior periods so you start clean." },
      { q: "Do you connect other tools?", a: "We integrate commerce, payments, and payroll (Shopify, Stripe, A2X, Gusto and more) into one connected system." },
      { q: "How long does implementation take?", a: "Typically a few weeks depending on complexity and data volume - we scope it clearly up front." },
    ],
  },
  "process-optimization": {
    slug: "process-optimization",
    icon: "refresh",
    title: "Process Optimization & SOPs",
    tagline: "Finance processes that scale with you",
    cta: "Start with a Finance Diagnostic",
    problem: "Finance runs on tribal knowledge and manual steps that break the moment the business grows or a key person is away.",
    whatWeDo: ["Finance SOPs & documentation", "Controls & approval workflows", "Workflow redesign", "Team enablement"],
    how: [
      { title: "Map", body: "We document how finance actually runs today." },
      { title: "Redesign", body: "We remove bottlenecks and add controls." },
      { title: "Document", body: "We write clear, usable SOPs." },
      { title: "Automate", body: "We automate the repetitive steps." },
    ],
    tools: ["ClickUp", "Monday.com", "Smartsheet", "n8n", "Make"],
    outcomes: ["Scalable finance operations", "Fewer errors and bottlenecks", "A faster, calmer month-end"],
    faqs: [
      { q: "Why do finance processes matter?", a: "Good process is what keeps books clean and reporting on time as you scale - without it, growth multiplies the chaos." },
      { q: "Do you document SOPs?", a: "Yes - we produce clear, usable SOPs so your finance function doesn't depend on any single person." },
      { q: "Can you add controls and approvals?", a: "Absolutely - we design approval workflows and controls appropriate to your size and risk." },
      { q: "How does this connect to automation?", a: "We optimise the process first, then automate the repetitive steps so you're not automating a broken workflow." },
    ],
  },
  "board-investor-reporting": {
    slug: "board-investor-reporting",
    icon: "pie",
    title: "Board & Investor Reporting",
    tagline: "Board-ready reporting, every cycle",
    cta: "Book a CFO Strategy Call",
    problem: "Board packs are late, inconsistent, and don't tell a credible story - eroding confidence with the people who back your business.",
    whatWeDo: ["Board reporting packs", "Investor updates", "Data rooms", "KPI narratives & commentary"],
    how: [
      { title: "Define", body: "We agree the metrics and narrative that matter." },
      { title: "Build", body: "We build a clean, repeatable reporting template." },
      { title: "Automate", body: "We wire data in so packs assemble themselves." },
      { title: "Review", body: "We review and refine the story each cycle." },
    ],
    tools: ["Power BI", "Google Sheets", "Excel", "QuickBooks"],
    outcomes: ["On-time board packs", "Stronger investor confidence", "A clear, credible financial narrative"],
    faqs: [
      { q: "What goes into a board pack?", a: "Typically financials, KPIs, cash & runway, variance to plan, and a concise narrative - tailored to what your board cares about." },
      { q: "Can you support fundraising?", a: "Yes - investor updates, data rooms, and models that stand up to diligence are part of what we do." },
      { q: "How do you keep reporting consistent?", a: "We build a repeatable template with automated data feeds, so every cycle looks consistent and arrives on time." },
      { q: "Do you write the commentary too?", a: "We prepare KPI narratives and commentary so the numbers come with a clear story." },
    ],
  },
};
