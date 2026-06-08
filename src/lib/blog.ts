export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image?: string; // cover image path in /public
  /** Array of paragraphs and headings. Lines starting with "## " render as headings. */
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "financial-services-every-growing-business-needs",
    title: "5 Financial Services Every Growing Business Needs",
    excerpt:
      "As you scale, ad-hoc bookkeeping stops being enough. Here are the five finance functions that separate businesses that grow with control from those that grow into chaos.",
    category: "CFO Advisory",
    date: "2026-05-30",
    readTime: "6 min read",
    author: "Rishi Arora",
    body: [
      "Most founders start with a single question: who will keep my books? But as revenue grows, headcount climbs, and investors enter the picture, finance becomes less about recording the past and more about steering the future. The businesses that scale with confidence treat finance as a system, not a task.",
      "Here are the five services that, together, form a complete finance function for a growing business.",
      "## 1. Disciplined bookkeeping",
      "Everything downstream depends on clean, reconciled books. If your transactions are categorised inconsistently or your bank feeds are weeks behind, every report built on top of them is unreliable. A disciplined monthly close - reconciled, reviewed, and delivered on a fixed date - is the foundation everything else stands on.",
      "## 2. Management reporting and dashboards",
      "Numbers only matter if they change a decision. Management reporting turns your ledger into a story: what is revenue doing, where is margin leaking, how is cash trending. Live dashboards put those answers in front of you whenever you need them, instead of weeks after the month ends.",
      "## 3. Cash flow and forecasting",
      "Profit is an opinion; cash is a fact. A forward-looking cash flow forecast tells you how long your runway is, when a crunch is coming, and whether you can afford that next hire. It is the single most important report a growing business can have.",
      "## 4. Virtual CFO advisory",
      "At some point you need someone in the room who can interpret the numbers and shape strategy - pricing, unit economics, fundraising, board conversations. A virtual or fractional CFO gives you that senior judgement without the cost of a full-time hire.",
      "## 5. Finance automation",
      "Manual data entry, chasing invoices, and copy-pasting between tools quietly drains hours every week and introduces errors. Connecting your stack and automating the repetitive work means your team spends time on decisions, not data entry.",
      "You do not need all five on day one. The point is to add them deliberately as you grow, so your finance function scales with the business instead of breaking under it. That is exactly how we structure engagements at InfiBooks - start with clean books, and layer on advisory and automation as you need them.",
    ],
  },
  {
    slug: "profitable-but-broke-cash-flow-mistakes",
    title: "Profitable but Broke: Why Cash Flow Catches Founders Off Guard",
    excerpt:
      "Plenty of profitable businesses run out of money. Here's why profit and cash are not the same thing - and how to make sure you never get surprised.",
    category: "Cash Flow",
    date: "2026-05-18",
    readTime: "5 min read",
    author: "Anmol Agarwal",
    body: [
      "It is one of the most counter-intuitive truths in business: you can be profitable on paper and still unable to make payroll. Profit is calculated when you earn revenue and incur costs. Cash is about when money actually moves. The gap between those two timings is where founders get caught.",
      "## Where the gap comes from",
      "You invoice a client in March, but they pay in May. You buy inventory now and sell it over the next quarter. You pay salaries every month regardless of when customers settle. Each of these creates a timing mismatch - the business is healthy, but the bank balance tells a scarier story.",
      "## The warning signs",
      "Watch for growing receivables, rising inventory, and lumpy revenue. Fast growth can actually make cash flow worse, because you are funding more work upfront before the cash comes back. Many businesses hit their tightest cash position right after their best sales month.",
      "## How to stay ahead of it",
      "Build a rolling 13-week cash flow forecast. It is short enough to be accurate and long enough to see trouble coming. Update it weekly, track expected inflows and outflows, and you will know about a crunch with weeks to plan, not days.",
      "## Tighten the cycle",
      "Invoice the moment work is done, automate payment reminders, and make it easy for clients to pay. On the other side, negotiate sensible terms with suppliers. Shortening the gap between paying out and getting paid is the cheapest source of cash you have.",
      "Cash discipline is not glamorous, but it is what keeps good businesses alive long enough to become great ones. If your numbers are clean and your forecast is current, cash stops being a surprise and becomes something you control.",
    ],
  },
  {
    slug: "when-to-hire-a-virtual-cfo",
    title: "When to Hire a Virtual CFO (and What They Actually Do)",
    excerpt:
      "A full-time CFO is expensive and often premature. A virtual CFO gives you senior financial leadership exactly when you need it - here's how to know it's time.",
    category: "CFO Advisory",
    date: "2026-05-06",
    readTime: "6 min read",
    author: "Rishi Arora",
    body: [
      "There is a stage every growing business reaches where the founder is making big financial decisions on instinct, the bookkeeper can only tell them what already happened, and a full-time CFO feels far too expensive. That gap is exactly what a virtual, or fractional, CFO is built to fill.",
      "## What a virtual CFO actually does",
      "A virtual CFO is not a bookkeeper with a fancier title. They own the forward-looking, strategic side of finance: cash flow and runway planning, pricing and unit economics, scenario modelling, fundraising support, and board or investor reporting. They turn your numbers into decisions.",
      "## Signs it is time",
      "Consider a virtual CFO when any of these are true: you are raising capital and need investor-ready numbers; you cannot confidently answer how long your runway is; your margins are moving and you do not know why; you are making six- or seven-figure decisions without a model behind them; or you simply want a senior financial partner in the room.",
      "## Why fractional works",
      "Most growing businesses do not need a CFO forty hours a week - they need the judgement of one a few days a month. The fractional model gives you that senior experience at a fraction of the cost, and it scales up naturally as the business gets more complex.",
      "## What good looks like",
      "A strong virtual CFO engagement delivers a reliable forecast, a clear view of the metrics that matter, and a steady hand in the decisions that move the business. You should feel like you finally have a co-pilot for the numbers, not just a rear-view mirror.",
      "At InfiBooks, our CFO services sit on top of clean books and live reporting - so the advice is always grounded in numbers you can trust. If you are starting to feel the gap, that is usually the signal it is time.",
    ],
  },
  {
    slug: "finance-automation-hours-saved",
    title: "How Finance Automation Gives Founders Their Time Back",
    excerpt:
      "Reconciliations, invoice chasing, report building - the repetitive work quietly eats hours every week. Here's what modern finance automation can take off your plate.",
    category: "Automation",
    date: "2026-04-24",
    readTime: "5 min read",
    author: "Shivam Singh",
    body: [
      "Ask any finance team where their week goes and you will hear the same answers: matching transactions, chasing unpaid invoices, copying numbers between spreadsheets, and rebuilding the same report every month. None of it is strategic. All of it is automatable.",
      "## The hidden cost of manual finance",
      "Manual work is not just slow - it is risky. Every copy-paste is a chance for an error, and every late reconciliation means decisions get made on stale numbers. The real cost is not the hours; it is the decisions delayed and the mistakes that slip through.",
      "## What can be automated today",
      "Modern tools and AI can handle a surprising amount: bank and card reconciliations, transaction categorisation, automated invoice reminders and collections, recurring reports and board packs, and data flowing automatically between your accounting, payments, and payroll systems.",
      "## A real example",
      "We build automated workflows that turn a month-end scramble into a single click - pulling live data, generating each report, and delivering a board-ready pack with no manual assembly. Work that used to take days happens in minutes, and it happens the same way every time.",
      "## Automation does not replace judgement",
      "The goal is not to remove people from finance - it is to remove the busywork so they can focus on what humans are actually good at: interpreting the numbers and making decisions. Automation handles the repetitive; your team handles the important.",
      "If your finance team is spending more time gathering numbers than understanding them, automation is the highest-leverage upgrade you can make. It pays for itself in reclaimed hours and better, faster decisions.",
    ],
  },
  {
    slug: "investor-ready-numbers-founders",
    title: "Investor-Ready: The Numbers Investors Actually Check",
    excerpt:
      "Before you pitch, your numbers need to hold up. Here's what investors look for - and how to get your finances investor-ready before the first meeting.",
    category: "Fundraising",
    date: "2026-04-10",
    readTime: "6 min read",
    author: "Anmol Agarwal",
    body: [
      "A great pitch can open the door, but it is your numbers that close the round. The moment an investor gets interested, they move from your story to your spreadsheets - and messy, inconsistent, or unsupported figures can stall even the most exciting business.",
      "## Clean, consistent historicals",
      "Investors first want to trust the past. That means books that are reconciled, consistent month to month, and produced on accrual accounting where it matters. If your historical numbers do not tie out, nothing built on top of them will be believed.",
      "## A defensible model",
      "Your forecast should be driver-based, not a hockey stick pulled from thin air. Investors will pull on the assumptions - growth rate, churn, margins, CAC and payback - so each one needs to be reasonable and explainable. The model is less about the exact numbers and more about how you think.",
      "## The metrics that matter",
      "Know your unit economics cold: gross margin, contribution margin, customer acquisition cost, lifetime value, burn rate, and runway. These are the numbers that come up in every diligence call, and being fluent in them signals you are in control of the business.",
      "## A tidy data room",
      "When interest turns serious, you will be asked for a data room - financial statements, cap table, key contracts, and a clean model. Having it ready signals professionalism and keeps momentum on your side instead of letting weeks slip away gathering documents.",
      "## Get ready before you need to",
      "The best time to get investor-ready is before you start raising, not during. Clean books, a credible model, and a prepared data room let you walk into the room focused on the conversation, not scrambling behind the scenes. That preparation is exactly what our fundraising and valuation support is built to deliver.",
    ],
  },
  {
    slug: "bookkeeping-mistakes-that-cost-businesses",
    title: "7 Bookkeeping Mistakes That Quietly Cost Businesses",
    excerpt:
      "Most bookkeeping problems aren't dramatic - they're small habits that compound into messy books, missed deductions, and bad decisions. Here are seven to avoid.",
    category: "Bookkeeping",
    date: "2026-03-28",
    readTime: "6 min read",
    author: "Komal Agarwal",
    body: [
      "Bad bookkeeping rarely announces itself. It shows up later - as a tax bill bigger than expected, a report that does not make sense, or a decision made on numbers that were quietly wrong for months. Avoid these seven common mistakes and most of those problems disappear.",
      "## 1. Mixing personal and business money",
      "Running personal expenses through the business account muddies your books and your tax position. Open a dedicated business account and keep a hard line between the two from day one.",
      "## 2. Falling behind on reconciliations",
      "If your books are not reconciled to the bank regularly, errors and duplicates pile up unnoticed. A monthly reconciliation discipline keeps the numbers trustworthy.",
      "## 3. Miscategorising transactions",
      "Inconsistent categories make your reports meaningless and can cost you deductions. A clear, consistent chart of accounts is the fix.",
      "## 4. Ignoring receipts and documentation",
      "Without supporting documents, deductions are at risk and audits become stressful. Keep digital copies of every receipt and invoice.",
      "## 5. Forgetting accruals",
      "Cash-only bookkeeping hides the real picture for growing businesses. Recording revenue and costs when they are earned and incurred gives you accurate margins.",
      "## 6. DIY past the point of sense",
      "Doing it yourself works early on, but every hour on bookkeeping is an hour not spent growing. There is a point where handing it to a professional pays for itself.",
      "## 7. Treating books as a tax chore",
      "Books are not just for the tax return - they are a decision-making tool. Treated that way, they become one of the most valuable assets in the business.",
    ],
  },
  {
    slug: "kpi-dashboards-numbers-founders-watch",
    title: "KPI Dashboards: The Numbers Every Founder Should Watch",
    excerpt:
      "You can't improve what you don't measure. Here are the core metrics a founder should see on a dashboard - and why they matter more than vanity numbers.",
    category: "Dashboards",
    date: "2026-03-14",
    readTime: "5 min read",
    author: "Shivam Singh",
    body: [
      "Most founders drown in data but starve for insight. A good dashboard cuts through the noise and shows the handful of numbers that actually predict the health of the business. Here are the ones worth watching.",
      "## Revenue and growth rate",
      "Not just how much you made, but how fast it is changing. Month-on-month and year-on-year growth tell you whether momentum is building or fading.",
      "## Gross margin",
      "Revenue is vanity; margin is sanity. Gross margin shows how much of each sale you actually keep to fund the business - and whether pricing or costs are drifting.",
      "## Cash and runway",
      "How much cash you have and how many months it lasts at current burn. This is the number that determines how much time you have to execute.",
      "## Receivables and collections",
      "Money you have earned but not yet collected. A rising receivables balance is cash trapped outside the business.",
      "## Customer economics",
      "Acquisition cost, lifetime value, and payback period tell you whether growth is profitable or just expensive.",
      "## Make it live",
      "A dashboard is only useful if it is current. Live, automated dashboards mean you are always looking at today's reality, not last month's - so you can act while it still matters.",
    ],
  },
  {
    slug: "budgeting-and-forecasting-turning-guesswork-into-a-plan",
    title: "Budgeting & Forecasting: Turning Guesswork Into a Plan",
    excerpt:
      "A budget isn't about restricting spending - it's about deciding, in advance, how you'll win. Here's how to build one that actually guides the business.",
    category: "FP&A",
    date: "2026-02-27",
    readTime: "6 min read",
    author: "Anmol Agarwal",
    body: [
      "Too many businesses treat budgeting as a once-a-year ritual that gets filed and forgotten. Done well, a budget and forecast are a living plan - a way to make deliberate choices about where money goes and to see problems before they arrive.",
      "## Budget vs forecast",
      "A budget is the plan you set at the start of the year. A forecast is your best current estimate of how the year will actually play out. You need both: the budget to hold yourself accountable, the forecast to stay realistic.",
      "## Build it on drivers",
      "Strong forecasts are built on drivers - units sold, price, headcount, conversion - not just last year plus ten percent. When you model the drivers, you can answer 'what if' questions instantly.",
      "## Plan for more than one future",
      "Build a base case, an upside, and a downside. Scenario planning means a surprise does not become a crisis, because you have already thought through your response.",
      "## Review it monthly",
      "Compare actuals to plan every month and ask why the variances happened. That feedback loop is where budgeting turns from paperwork into real management.",
      "## The payoff",
      "A business that forecasts well makes calmer, faster decisions - because the founder already knows the numbers behind the choice. That is the difference between reacting and leading.",
    ],
  },
  {
    slug: "accounts-receivable-get-paid-faster",
    title: "Accounts Receivable: How to Get Paid Faster",
    excerpt:
      "Slow-paying customers are an interest-free loan you never agreed to give. Here's how to tighten your receivables and pull cash back into the business.",
    category: "Cash Flow",
    date: "2026-02-13",
    readTime: "5 min read",
    author: "Aneesh Shaw",
    body: [
      "Every unpaid invoice is cash sitting in someone else's account instead of yours. For a growing business, the gap between doing the work and getting paid is one of the biggest - and most fixable - drains on cash.",
      "## Invoice immediately and clearly",
      "Send invoices the moment work is delivered, with clear terms, line items, and payment instructions. Delays and confusion at this stage directly delay your cash.",
      "## Make paying easy",
      "Offer simple payment options and links. The lower the friction, the faster you get paid. Every extra step is an excuse to pay later.",
      "## Automate the follow-up",
      "Polite, automated reminders before and after the due date recover a surprising amount of cash without anyone having to chase manually. Consistency matters more than tone.",
      "## Watch your aging report",
      "An accounts receivable aging report shows exactly who owes what and for how long. Reviewing it weekly means overdue accounts get attention before they become bad debts.",
      "## Set terms that protect you",
      "Deposits, milestone billing, and sensible credit limits keep you from financing your customers' businesses. Good terms prevent problems before they start.",
      "Tighten these habits and you free up cash that already belongs to you - often more than enough to fund the next stage of growth.",
    ],
  },
  {
    slug: "accounts-payable-pay-smart",
    title: "Accounts Payable: Paying Smart Without Straining Cash",
    excerpt:
      "Paying bills sounds simple, but how and when you pay has a real impact on cash, relationships, and control. Here's how to do it well.",
    category: "Cash Flow",
    date: "2026-01-30",
    readTime: "5 min read",
    author: "Simran Jeet Kaur",
    body: [
      "Accounts payable is where money leaves the business, so it deserves as much discipline as the money coming in. Done poorly, it leads to late fees, strained suppliers, and nasty cash surprises. Done well, it protects both your relationships and your bank balance.",
      "## Know what you owe and when",
      "A clear view of upcoming bills and their due dates is the foundation. Surprises in payables almost always come from poor visibility, not poor finances.",
      "## Use terms, don't abuse them",
      "If a supplier offers 30 days, use the time - it is free working capital. But paying late and damaging the relationship costs far more than it saves.",
      "## Build approval controls",
      "Clear approval workflows prevent duplicate payments, fraud, and spending that no one signed off on. Controls are not bureaucracy; they are protection.",
      "## Time payments with cash",
      "Line up your payment schedule with your cash inflows so you are never forced to pay out before the money is there. This is where payables and cash flow planning meet.",
      "## Automate the routine",
      "Automating bill capture, approvals, and scheduled payments removes errors and frees your team from manual data entry - while keeping a clean record of everything.",
      "Smart payables management is quiet but powerful: it keeps suppliers happy, cash steady, and control firmly in your hands.",
    ],
  },
  {
    slug: "payroll-done-right",
    title: "Payroll Done Right: Avoiding the Hidden Costs",
    excerpt:
      "Payroll feels routine until it goes wrong. Late or incorrect pay damages trust and compliance fast - here's how to keep it clean.",
    category: "Operations",
    date: "2026-01-16",
    readTime: "5 min read",
    author: "Komal Agarwal",
    body: [
      "Payroll is one of the few finance functions where a mistake is personal - it affects your team's lives directly. Get it right and no one notices; get it wrong and you lose trust quickly, on top of any compliance penalties.",
      "## Accuracy is non-negotiable",
      "Correct pay, correct deductions, on the correct date, every time. Errors here are remembered far longer than they take to fix.",
      "## Stay compliant",
      "Payroll carries statutory obligations - deductions, filings, and records that must be right and on time. Falling behind here is one of the easier ways to attract penalties.",
      "## Keep clean records",
      "Payslips, registers, and supporting records should be organised and retrievable. Good records make audits painless and disputes simple to resolve.",
      "## Integrate with your books",
      "Payroll that flows cleanly into your accounting keeps your reports accurate and removes a whole category of manual reconciliation.",
      "## Make it predictable",
      "Reliable, repeatable payroll - ideally automated - means your team is paid right without it consuming finance's time each cycle. Predictability is the goal.",
      "Payroll is not glamorous, but it is foundational. When it runs quietly and correctly, it is a sign your whole finance operation is in good shape.",
    ],
  },
  {
    slug: "spreadsheets-vs-finance-systems",
    title: "Spreadsheets vs Real Finance Systems: When to Switch",
    excerpt:
      "Spreadsheets get every business started, but there's a point where they hold you back. Here's how to know you've outgrown them.",
    category: "Systems",
    date: "2026-01-08",
    readTime: "5 min read",
    author: "Shivam Singh",
    body: [
      "Almost every business runs its early finances on spreadsheets, and that is fine - they are flexible, familiar, and free. But as you grow, the same flexibility becomes a liability. Knowing when to switch saves you from errors that are expensive to unwind.",
      "## The warning signs",
      "Broken formulas, multiple 'final' versions, numbers that do not match between files, and hours lost rebuilding the same report. When you stop trusting your own spreadsheet, you have outgrown it.",
      "## What a real system gives you",
      "A connected finance stack provides one source of truth, automatic reconciliations, an audit trail, and reporting that updates itself. The data flows instead of being copied.",
      "## It is not all or nothing",
      "Spreadsheets still have a place for modelling and one-off analysis. The shift is about moving your core records and reporting onto reliable, connected tools - and using spreadsheets on top, not as the foundation.",
      "## The real cost of waiting",
      "Every month on the wrong setup adds errors to unwind and decisions made on shaky data. The switch is rarely as painful as founders fear, and the payoff in time and trust is immediate.",
      "If your spreadsheets are causing more anxiety than clarity, that is the signal. A proper system turns finance from a source of doubt into a source of confidence.",
    ],
  },
  {
    slug: "understanding-your-financial-statements",
    title: "P&L, Balance Sheet, Cash Flow: A Founder's Plain-English Guide",
    excerpt:
      "Three statements tell the whole story of your business. Here's what each one really says - without the accounting jargon.",
    category: "Finance Basics",
    date: "2025-12-19",
    readTime: "6 min read",
    author: "Anmol Agarwal",
    body: [
      "If you only learn to read three reports as a founder, make them the profit and loss, the balance sheet, and the cash flow statement. Together they answer almost every important financial question about your business - once you know what each is really telling you.",
      "## The Profit & Loss: are you making money?",
      "The P&L shows revenue, costs, and what is left over - your profit - over a period of time. It tells you whether the business model works: are you selling for more than it costs to deliver, after all expenses?",
      "## The Balance Sheet: what do you own and owe?",
      "The balance sheet is a snapshot at a moment in time. It lists your assets (what you own), liabilities (what you owe), and equity (what is left for owners). It tells you how financially strong and stable the business is.",
      "## The Cash Flow Statement: where did the money go?",
      "Cash flow explains the difference between profit and the actual money in your account. It shows cash moving through operations, investing, and financing - and why a profitable business can still be short on cash.",
      "## How they fit together",
      "The three are linked: profit from the P&L flows into equity on the balance sheet, and changes on the balance sheet explain the movement in cash. Read together, they give a complete, honest picture.",
      "## You don't have to be an accountant",
      "You do not need to prepare these statements yourself - that is what we are for. But understanding what they say turns finance from a black box into a steering wheel. That is when the numbers start working for you.",
    ],
  },
];

const COVERS: Record<string, string> = {
  "financial-services-every-growing-business-needs": "/covers/cfo-advisory.jpg",
  "profitable-but-broke-cash-flow-mistakes": "/covers/cash-flow.jpg",
  "when-to-hire-a-virtual-cfo": "/covers/virtual-cfo.jpg",
  "finance-automation-hours-saved": "/covers/automation.jpg",
  "investor-ready-numbers-founders": "/covers/fundraising.jpg",
  "bookkeeping-mistakes-that-cost-businesses": "/covers/bookkeeping.jpg",
  "kpi-dashboards-numbers-founders-watch": "/covers/dashboards.jpg",
  "budgeting-and-forecasting-turning-guesswork-into-a-plan": "/covers/budgeting.jpg",
  "accounts-receivable-get-paid-faster": "/covers/receivables.jpg",
  "accounts-payable-pay-smart": "/covers/payables.jpg",
  "payroll-done-right": "/covers/payroll.jpg",
  "spreadsheets-vs-finance-systems": "/covers/systems.jpg",
  "understanding-your-financial-statements": "/covers/finance-basics.jpg",
};

export function coverImage(slug: string) {
  return COVERS[slug] ?? "/covers/cfo-advisory.jpg";
}

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(date: string) {
  const d = new Date(date + "T00:00:00");
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
