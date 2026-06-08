import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import { FadeUp } from "@/components/motion";
import CtaBand from "@/components/CtaBand";
import { industries, services } from "@/lib/site";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return { title: "Industry not found" };
  return {
    title: `Finance & CFO Services for ${ind.title}`,
    description: `Bookkeeping, Virtual CFO, dashboards, and AI automation tailored for ${ind.title.toLowerCase()} - ${ind.body}`,
    alternates: { canonical: `/industries/${ind.slug}` },
  };
}

const relevant = services.slice(0, 5);

const INDUSTRY_HERO: Record<string, string> = {
  startups: "/site/ind-startups.jpg",
  cannabis: "/site/ind-cannabis.jpg",
  hospitality: "/site/ind-hospitality.jpg",
  manufacturing: "/site/ind-manufacturing.jpg",
  "real-estate": "/site/ind-real-estate.jpg",
  agriculture: "/site/ind-agriculture.jpg",
  b2b: "/site/ind-b2b.jpg",
  d2c: "/site/ind-d2c.jpg",
};

export default async function IndustryDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();

  return (
    <>
      <PageHero
        crumb={ind.title}
        eyebrow="Industries"
        title={`Finance Built for ${ind.title}`}
        subtitle={ind.body}
      >
        <Link href="/contact" className="btn-primary glow-border">
          Book a CFO Strategy Call
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="section bg-ivory dark:bg-[#0B0F1A]">
        <div className="container-x">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={INDUSTRY_HERO[ind.slug] ?? "/site/ind-startups.jpg"} alt={`Finance for ${ind.title}`} className="mb-10 h-72 w-full rounded-2xl object-cover shadow-card dark:shadow-none sm:h-80" />
          <div className="grid gap-8 lg:grid-cols-2">
          <FadeUp>
            <div className="h-full rounded-2xl border border-rose-200 bg-rose-50/50 p-7 dark:border-rose-500/25 dark:bg-rose-500/10">
              <h2 className="font-display text-xl font-bold text-charcoal dark:text-[#F4F6FB]">Common challenges</h2>
              <ul className="mt-5 space-y-3">
                {ind.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-slate-600 dark:text-[#A6B0C3]">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                      <Icon name="alert" className="h-3.5 w-3.5" />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="h-full rounded-2xl border border-brand-200 bg-brand-50/60 p-7 ring-glow">
              <h2 className="font-display text-xl font-bold text-charcoal dark:text-[#F4F6FB]">How InfiBooks helps</h2>
              <ul className="mt-5 space-y-3">
                {ind.help.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-charcoal dark:text-[#F4F6FB]">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-[#0B0F1A]">
        <div className="container-x">
          <SectionHeading center eyebrow="Relevant Services" title={`What We Deliver for ${ind.title}`} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relevant.map((s) => (
              <Link
                key={s.slug}
                href={s.href ?? `/services#${s.slug}`}
                className="group rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-6 shadow-card dark:shadow-none transition-all hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-soft"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 dark:bg-[#3D7BFF]/10 text-brand-600 dark:text-[#5B91FF] transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-charcoal dark:text-[#F4F6FB]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{s.short}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/industries" className="btn-secondary">
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
              All industries
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title={`Ready to upgrade finance for your ${ind.title.toLowerCase()} business?`} secondaryLabel="Explore Services" />
    </>
  );
}
