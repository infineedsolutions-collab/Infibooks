/**
 * Small, distinct animation per service card. Pure CSS - animates on
 * parent `.group` hover, so it stays lightweight. Tuned for light cards.
 */
export default function ServiceMotif({ motif }: { motif: string }) {
  const base = "relative h-16 w-full overflow-hidden rounded-xl bg-brand-50/70 p-3";

  switch (motif) {
    case "ledger":
      return (
        <div className={`${base} flex flex-col justify-center gap-1.5`}>
          {[58, 38, 72, 48].map((w, i) => (
            <span
              key={i}
              style={{ width: `${w}%`, transitionDelay: `${i * 60}ms` }}
              className="h-1.5 rounded-full bg-brand-200 transition-all duration-500 group-hover:w-[92%] group-hover:bg-brand-500"
            />
          ))}
        </div>
      );

    case "charts":
      return (
        <div className={`${base} flex items-end justify-center gap-1.5`}>
          {[10, 18, 13, 24, 16, 28].map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}px`, transitionDelay: `${i * 50}ms` }}
              className="w-2.5 origin-bottom rounded-t bg-brand-300 transition-transform duration-500 group-hover:scale-y-[1.6] group-hover:bg-brand-500"
            />
          ))}
        </div>
      );

    case "forecast":
      return (
        <div className={`${base} flex items-center`}>
          <span className="h-0.5 w-1/2 rounded bg-brand-400" />
          <span className="h-0 w-1/2 origin-left scale-x-0 border-t-2 border-dashed border-brand-400 transition-transform duration-700 group-hover:scale-x-100" />
          <span className="absolute right-3 top-3 h-2.5 w-2.5 -translate-x-2 rounded-full bg-brand-500 opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-100" />
        </div>
      );

    case "nodes":
      return (
        <div className={`${base} flex items-center justify-between px-5`}>
          <span className="absolute left-5 right-5 top-1/2 h-px -translate-y-1/2 bg-brand-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="relative z-10 h-3 w-3 rounded-full bg-brand-300 ring-4 ring-brand-50 transition-colors duration-500 group-hover:bg-brand-500"
            />
          ))}
          <span className="absolute left-5 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-brand-500 opacity-0 transition-all duration-700 group-hover:left-[calc(100%-1.5rem)] group-hover:opacity-100" />
        </div>
      );

    case "connect":
      return (
        <div className={`${base} flex items-center justify-between px-4`}>
          <span className="h-7 w-7 rounded-lg bg-brand-300 transition-colors duration-500 group-hover:bg-brand-500" />
          <span className="h-1 flex-1 origin-left scale-x-50 bg-brand-200 transition-transform duration-500 group-hover:scale-x-100 group-hover:bg-brand-400" />
          <span className="h-7 w-7 rounded-lg bg-brand-300 transition-colors duration-500 group-hover:bg-brand-500" />
        </div>
      );

    case "report":
      return (
        <div className={`${base} flex items-center gap-3`}>
          <div className="flex flex-1 flex-col gap-1.5">
            {[80, 60, 70].map((w, i) => (
              <span key={i} style={{ width: `${w}%` }} className="h-1.5 rounded-full bg-brand-200 transition-colors duration-500 group-hover:bg-brand-400" />
            ))}
          </div>
          <span className="h-8 w-8 rounded-full border-4 border-brand-200 border-t-brand-500 transition-transform duration-700 group-hover:rotate-[200deg]" />
        </div>
      );

    case "flow":
      return (
        <div className={`${base} flex items-center justify-center`}>
          <span className="h-8 w-8 rounded-full border-2 border-dashed border-brand-300 transition-transform duration-700 group-hover:rotate-180 group-hover:border-brand-500" />
          <span className="absolute h-2.5 w-2.5 rounded-full bg-brand-500 transition-transform duration-700 group-hover:translate-x-4" />
        </div>
      );

    case "insights":
    default:
      return (
        <div className={`${base} grid grid-cols-2 gap-1.5`}>
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              style={{ transitionDelay: `${i * 60}ms` }}
              className="rounded-md bg-brand-200 transition-colors duration-500 group-hover:bg-brand-400"
            />
          ))}
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-brand-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 17 6-6 4 4 8-8M17 7h4v4" />
            </svg>
          </span>
        </div>
      );
  }
}
