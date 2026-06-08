"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

/**
 * How long the intro overlay stays before revealing the page.
 * The full GIF is 9.16s, but that feels far too long on every visit -
 * so we show just a short, snappy flash of it.
 */
const DURATION = 1400;

export default function IntroLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  // Bumped on every navigation so the <img> remounts and the GIF
  // restarts from its first frame instead of resuming mid-loop.
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setVisible(true);
    setCycle((c) => c + 1);
    const t = setTimeout(() => setVisible(false), DURATION);
    return () => clearTimeout(t);
  }, [pathname]);

  // Prevent the page behind the overlay from scrolling while it plays.
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-700 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="absolute inset-0 grid-pattern opacity-[0.25]" />

      <Image
        key={cycle}
        src="/logo-animation.gif"
        alt="Infi Books - Beyond Bookkeeping"
        width={400}
        height={400}
        unoptimized
        priority
        className="relative h-auto w-64 max-w-[72vw] sm:w-80"
      />

      <button
        type="button"
        onClick={() => setVisible(false)}
        className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-brand-600"
      >
        Skip intro
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-slate-100">
        <div
          key={cycle}
          className="h-full bg-gradient-to-r from-brand-500 to-brand-700"
          style={{
            animation: visible ? `introbar ${DURATION}ms linear forwards` : "none",
          }}
        />
      </div>
    </div>
  );
}
