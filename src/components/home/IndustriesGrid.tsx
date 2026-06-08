import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import RotatingText from "@/components/RotatingText";
import { Stagger, StaggerItem } from "@/components/motion";
import { industries } from "@/lib/site";

const INDUSTRY_IMG: Record<string, string> = {
  startups: "/sectors/startups.jpg",
  cannabis: "/sectors/cannabis.jpg",
  hospitality: "/sectors/hospitality.jpg",
  manufacturing: "/sectors/manufacturing.jpg",
  "real-estate": "/sectors/real-estate.jpg",
  agriculture: "/sectors/agriculture.jpg",
  b2b: "/sectors/b2b.jpg",
  d2c: "/sectors/d2c.jpg",
};

export default function IndustriesGrid({
  withHeading = true,
}: {
  withHeading?: boolean;
}) {
  return (
    <section className="screen-section bg-white dark:bg-[#0B0F1A]">
      <div className="container-x">
        {withHeading && (
          <SectionHeading
            center
            eyebrow="Industries"
            title={
              <>
                Built for{" "}
                <RotatingText
                  words={["Modern Businesses", "Ambitious Founders", "Scaling Startups"]}
                  className="heading-gradient-light"
                />
              </>
            }
            subtitle="We tailor reporting, dashboards, and CFO support to the way your industry actually makes money."
          />
        )}

        <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind) => (
            <StaggerItem key={ind.title} className="h-full">
              <Link
                href={`/industries/${ind.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-soft dark:border-white/10 dark:bg-[#161D30] dark:shadow-none"
              >
                <div className="relative h-28 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={INDUSTRY_IMG[ind.slug] ?? "/sectors/startups.jpg"}
                    alt={ind.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
                  <h3 className="font-display text-base font-bold text-charcoal dark:text-[#F4F6FB]">{ind.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-[#6B7589]">{ind.body}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
