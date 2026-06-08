import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CtaBand from "@/components/CtaBand";
import { posts, formatDate, coverImage } from "@/lib/blog";
import { resourceCategories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources | Finance, CFO & Automation Insights",
  description:
    "Practical guides on Virtual CFO, bookkeeping, finance automation, dashboards, and FP&A for founders and growing businesses.",
  alternates: { canonical: "/resources" },
};

const categoryColors: Record<string, string> = {
  "Corporate Tax": "bg-fblue-50 text-fblue-700",
  VAT: "bg-gold/10 text-bronze",
  Bookkeeping: "bg-brand-50 text-brand-700",
};

export default function ResourcesPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        crumb="Resources"
        eyebrow="Resources"
        title="Finance Intelligence, Explained"
        subtitle="Guides and insights on Virtual CFO, bookkeeping, automation, dashboards, and FP&A - written for founders."
      />

      <section className="section bg-ivory dark:bg-[#0B0F1A]">
        <div className="container-x">
          {/* category chips */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {resourceCategories.map((c) => (
              <span key={c} className="rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#161D30] px-3.5 py-1.5 text-xs font-medium text-slate-600 dark:text-[#A6B0C3]">
                {c}
              </span>
            ))}
          </div>

          <Reveal>
            <Link
              href={`/resources/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] shadow-card dark:shadow-none transition-all hover:shadow-soft lg:grid-cols-2"
            >
              <div className="relative min-h-[240px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={coverImage(featured.slug)} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-6 top-6 rounded-full bg-black/45 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                  Featured
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-[#6B7589]">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[featured.category] ?? "bg-slate-100 text-slate-600"}`}>
                    {featured.category}
                  </span>
                  <span>{formatDate(featured.date)}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-extrabold text-charcoal dark:text-[#F4F6FB] transition-colors group-hover:text-brand-700 sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-600 dark:text-[#5B91FF]">
                  Read article
                  <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link href={`/resources/${p.slug}`} className="card-hover group flex h-full flex-col overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={coverImage(p.slug)} alt="" className="-mx-7 -mt-7 mb-5 h-40 w-full object-cover" />
                  <div className="flex items-center gap-3 text-sm">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[p.category] ?? "bg-slate-100 text-slate-600"}`}>
                      {p.category}
                    </span>
                    <span className="text-slate-400 dark:text-[#6B7589]">{p.readTime}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-charcoal dark:text-[#F4F6FB] transition-colors group-hover:text-brand-700">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 dark:border-white/10 pt-4 text-sm">
                    <span className="text-slate-500 dark:text-[#6B7589]">{formatDate(p.date)}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-brand-600 dark:text-[#5B91FF]">
                      Read
                      <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
