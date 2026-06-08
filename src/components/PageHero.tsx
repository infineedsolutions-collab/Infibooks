import { FadeUp } from "./motion";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumb?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0B0F1A] pt-20">
      <div className="pointer-events-none absolute left-1/2 top-8 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(46,110,156,0.08),transparent_62%)]" />

      <div className="container-x relative py-20 text-center sm:py-28">
        <FadeUp>
          <span className="eyebrow mx-auto">{eyebrow}</span>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-charcoal dark:text-[#F4F6FB] text-balance sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
        </FadeUp>
        {subtitle && (
          <FadeUp delay={0.16}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{subtitle}</p>
          </FadeUp>
        )}
        {children && (
          <FadeUp delay={0.24}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
