import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import CareerForm from "@/components/CareerForm";
import { roles, careerValues, hiringSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers at InfiBooks | Finance, CFO & AI Automation Roles",
  description:
    "Join InfiBooks and work at the intersection of finance, accounting, dashboards, automation, AI workflows, and Virtual CFO advisory.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumb="Careers"
        eyebrow="Careers"
        title="Build the Future of Finance With Us"
        subtitle="Work where accounting meets AI - clean books, CFO advisory, dashboards, and automation, for founders around the world."
      >
        <a href="#open-roles" className="btn-primary glow-border">
          View open roles
          <Icon name="arrow" className="h-4 w-4" />
        </a>
      </PageHero>

      {/* Why work here */}
      <section className="section bg-ivory dark:bg-[#0B0F1A]">
        <div className="container-x">
          <SectionHeading center eyebrow="Why InfiBooks" title="A Place to Grow Fast" />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {careerValues.map((v) => (
              <StaggerItem key={v.title} className="h-full">
                <div className="h-full rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-7 shadow-card dark:shadow-none transition-all hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 dark:bg-[#3D7BFF]/10 text-brand-600 dark:text-[#5B91FF]">
                    <Icon name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-charcoal dark:text-[#F4F6FB]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Open roles */}
      <section id="open-roles" className="section bg-white dark:bg-[#0B0F1A] scroll-mt-24">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Open Roles"
            title="Roles We Hire For"
            subtitle="Open roles - updated regularly. Don't see your role? Send an open application below."
          />
          <Stagger className="mx-auto mt-14 max-w-3xl space-y-3">
            {roles.map((r) => (
              <StaggerItem key={r.slug}>
                <a
                  href="#apply"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-5 shadow-card dark:shadow-none transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-soft"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-lg font-bold text-charcoal dark:text-[#F4F6FB]">{r.title}</h3>
                      <span className="rounded-full bg-brand-50 dark:bg-[#3D7BFF]/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand-700 dark:text-[#5B91FF]">{r.dept}</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600 dark:text-[#A6B0C3]">{r.summary}</p>
                    <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 dark:text-[#6B7589]">
                      <span className="flex items-center gap-1"><Icon name="briefcase" className="h-3.5 w-3.5" /> {r.type}</span>
                      <span className="flex items-center gap-1"><Icon name="pin" className="h-3.5 w-3.5" /> {r.location}</span>
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 dark:bg-[#3D7BFF]/10 text-brand-600 dark:text-[#5B91FF] transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                    <Icon name="arrow" className="h-5 w-5" />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Hiring process */}
      <section className="section bg-ivory dark:bg-[#0B0F1A]">
        <div className="container-x">
          <SectionHeading center eyebrow="Hiring Process" title="Simple, Respectful, Fast" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hiringSteps.map((s, i) => (
              <FadeUp key={s} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-5 shadow-card dark:shadow-none">
                  <span className="font-display text-3xl font-extrabold text-brand-200">0{i + 1}</span>
                  <p className="mt-2 text-sm font-medium text-charcoal dark:text-[#F4F6FB]">{s}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="section bg-white dark:bg-[#0B0F1A] scroll-mt-24">
        <div className="container-x max-w-3xl">
          <SectionHeading center eyebrow="Apply" title="Apply to InfiBooks" subtitle="Tell us about yourself - we review every application." />
          <div className="mt-10 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-7 shadow-card dark:shadow-none sm:p-8">
            <CareerForm />
          </div>
        </div>
      </section>
    </>
  );
}
