import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import Icon from "@/components/Icon";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import CtaBand from "@/components/CtaBand";
import { serviceDetails, industries, site } from "@/lib/site";

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceDetails[slug];
  if (!s) return { title: "Service not found" };
  return {
    title: `${s.title} | InfiBooks`,
    description: `${s.tagline}. ${s.problem}`,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${s.title} | InfiBooks`, description: s.tagline },
  };
}

const relatedIndustries = industries.slice(0, 3);

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = serviceDetails[slug];
  if (!s) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.title,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: "Worldwide",
    description: s.tagline,
    url: `${site.url}/services/${s.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero crumb={s.title} eyebrow="Service" title={s.tagline} subtitle={s.problem}>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary glow-border">
            {s.cta}
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link href="/services" className="btn-outline">All Services</Link>
        </div>
      </PageHero>

      {/* What we do */}
      <section className="section bg-ivory dark:bg-[#0B0F1A]">
        <div className="container-x">
          <SectionHeading center eyebrow="What We Do" title={s.title} />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.whatWeDo.map((w) => (
              <StaggerItem key={w} className="h-full">
                <div className="flex h-full items-start gap-3 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-6 shadow-card dark:shadow-none">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="font-medium text-charcoal dark:text-[#F4F6FB]">{w}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-white dark:bg-[#0B0F1A]">
        <div className="container-x">
          <SectionHeading center eyebrow="How It Works" title="A Clear, Repeatable Approach" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {s.how.map((h, i) => (
              <FadeUp key={h.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-7 shadow-card dark:shadow-none">
                  <span className="font-display text-4xl font-extrabold text-brand-200">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-bold text-charcoal dark:text-[#F4F6FB]">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{h.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Tools + Outcomes */}
      <section className="section bg-white dark:bg-[#0B0F1A]">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <h2 className="font-display text-2xl font-bold text-charcoal dark:text-[#F4F6FB]">Tools we use</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {s.tools.map((t) => (
                <span key={t} className="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] px-4 py-2.5 text-sm font-semibold text-charcoal dark:text-[#F4F6FB] shadow-card dark:shadow-none">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-50 dark:bg-[#3D7BFF]/10 text-brand-600 dark:text-[#5B91FF]"><Icon name="check" className="h-3.5 w-3.5" /></span>
                  {t}
                </span>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-2xl font-bold text-charcoal dark:text-[#F4F6FB]">Outcomes</h2>
            <ul className="mt-5 space-y-3">
              {s.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 rounded-xl border border-brand-200 bg-brand-50/60 p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white"><Icon name="trending" className="h-3.5 w-3.5" /></span>
                  <span className="text-charcoal dark:text-[#F4F6FB]">{o}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* Related industries */}
      <section className="section bg-white dark:bg-[#0B0F1A]">
        <div className="container-x">
          <SectionHeading center eyebrow="Who It's For" title="Related Industries" />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {relatedIndustries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="group rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#161D30] p-6 text-center shadow-card dark:shadow-none transition-all hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-soft">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 dark:bg-[#3D7BFF]/10 text-brand-600 dark:text-[#5B91FF] transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                  <Icon name={ind.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-charcoal dark:text-[#F4F6FB]">{ind.title}</h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-[#6B7589]">{ind.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-ivory dark:bg-[#0B0F1A]">
        <div className="container-x">
          <SectionHeading center eyebrow="FAQ" title="Questions About This Service" />
          <FAQSection items={s.faqs} withSchema />
        </div>
      </section>

      <CtaBand title="Build a finance system that gives you clarity, control, and confidence." primaryLabel={s.cta} secondaryLabel="Explore Services" />
    </>
  );
}
