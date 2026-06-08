import Link from "next/link";
import Icon from "./Icon";
import Logo from "./Logo";
import CtaBackground3D from "./CtaBackground3D";
import { FadeUp } from "./motion";
import { site } from "@/lib/site";

export default function CtaBand({
  title = "Build a finance system that gives you clarity, control, and confidence.",
  text = "From clean books to CFO intelligence and AI automation - let's design the finance function your business deserves.",
  primaryLabel = "Book a CFO Strategy Call",
  secondaryLabel = "Explore Services",
  secondaryHref = "/services",
}: {
  title?: string;
  text?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-20 pt-8 sm:pb-24 sm:pt-10">
      <CtaBackground3D className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(46,110,156,0.10),transparent_65%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(61,123,255,0.12),transparent_65%)]" />
      <div className="container-x relative z-10">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Logo markClassName="h-14 w-auto sm:h-16" nameClassName="text-2xl sm:text-3xl" tagClassName="text-[11px] sm:text-xs" />
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-charcoal dark:text-[#F4F6FB] text-balance sm:text-[2.5rem] sm:leading-[1.1]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600 dark:text-[#A6B0C3]">{text}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary glow-border">
              {primaryLabel}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link href={secondaryHref} className="btn-secondary">
              {secondaryLabel}
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-[#6B7589]">
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-brand-700">
              <Icon name="phone" className="h-4 w-4" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-brand-700">
              <Icon name="mail" className="h-4 w-4" /> {site.email}
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
