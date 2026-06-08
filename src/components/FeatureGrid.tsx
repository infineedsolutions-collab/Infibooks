import Icon from "./Icon";
import { Stagger, StaggerItem } from "./motion";

export type Feature = { icon: string; title: string; body: string };

export default function FeatureGrid({
  features,
  columns = 3,
}: {
  features: Feature[];
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <Stagger className={`grid gap-5 ${cols}`}>
      {features.map((f) => (
        <StaggerItem key={f.title} className="h-full">
          <div className="group h-full rounded-2xl border border-slate-100 dark:border-white/10 bg-white dark:bg-[#161D30] p-7 shadow-card dark:shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-soft">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 dark:bg-[#3D7BFF]/10 text-brand-600 dark:text-[#5B91FF] transition-colors group-hover:bg-brand-gradient group-hover:text-white">
              <Icon name={f.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-lg font-bold text-midnight-900 dark:text-[#F4F6FB]">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{f.body}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
