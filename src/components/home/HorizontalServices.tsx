import Link from "next/link";
import Icon from "@/components/Icon";
import { Stagger, StaggerItem } from "@/components/motion";
import { serviceGroups } from "@/lib/site";

export default function HorizontalServices() {
  return (
    <section className="section bg-white dark:bg-[#0B0F1A]">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mx-auto">What We Do</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-charcoal dark:text-[#F4F6FB] sm:text-4xl">
            From Clean Books to <span className="heading-gradient-light">CFO Intelligence</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-[#A6B0C3]">
            Four connected service lines - everything your finance function needs, under one roof.
          </p>
        </div>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-2">
          {serviceGroups.map((g) => (
            <StaggerItem key={g.title} className="h-full">
              <Link
                href={g.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-soft dark:border-white/10 dark:bg-[#161D30] dark:shadow-none sm:flex-row"
              >
                <div className="relative h-44 shrink-0 overflow-hidden sm:h-auto sm:w-48">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.image}
                    alt={g.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                      <Icon name={g.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-xl font-bold text-charcoal dark:text-[#F4F6FB]">{g.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{g.short}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.subs.map((s) => (
                      <li
                        key={s}
                        className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-[#3D7BFF]/10 dark:text-[#5B91FF]"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-transform group-hover:translate-x-0.5 dark:text-[#5B91FF]">
                    Learn More <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
