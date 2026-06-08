import Link from "next/link";
import Icon from "@/components/Icon";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";

const pillars = [
  { icon: "trending", title: "Cash Visibility", body: "See your real cash position and runway in real time." },
  { icon: "gauge", title: "Growth Control", body: "Scalable systems that keep finance in control as you grow." },
  { icon: "cpu", title: "AI-Enabled Operations", body: "Automation and AI agents working across your finance stack." },
  { icon: "shield", title: "Board-Ready Reporting", body: "Credible reporting that builds confidence with boards and investors." },
];

const PILLAR_IMG: Record<string, string> = {
  "Cash Visibility": "/cards/pillar-cash.jpg",
  "Growth Control": "/cards/pillar-growth.jpg",
  "AI-Enabled Operations": "/cards/pillar-ai.jpg",
  "Board-Ready Reporting": "/cards/pillar-board.jpg",
};

export default function DubaiTrust() {
  return (
    <section className="screen-section bg-ivory dark:bg-[#0B0F1A]">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-300/60 to-transparent" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand-200/20 blur-3xl dark:bg-[#3D7BFF]/10" />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <span className="eyebrow mx-auto">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Trusted by Founders Worldwide
            </span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] text-charcoal dark:text-[#F4F6FB] text-balance sm:text-[2.7rem]">
              A Finance Partner for the{" "}
              <span className="heading-gradient-light">World&apos;s Most Ambitious</span> Businesses
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-[#A6B0C3]">
              Across markets and time zones, we give founders finance clarity, growth control, and
              decision confidence - the foundations of a business built to scale.
            </p>
          </FadeUp>
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <StaggerItem key={p.title} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-soft dark:border-white/10 dark:bg-[#161D30] dark:shadow-none">
                <div className="relative h-32 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={PILLAR_IMG[p.title] ?? "/covers/cfo-advisory.jpg"}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-charcoal dark:text-[#F4F6FB]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{p.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp delay={0.2} className="mt-12 text-center">
          <Link href="/contact" className="btn-primary">
            Book a CFO Strategy Call
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
