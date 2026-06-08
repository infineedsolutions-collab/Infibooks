"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Thin top loading bar that gives instant feedback on route changes.
 * Starts when an internal link is clicked, trickles while the next route
 * loads, and completes once the pathname actually changes.
 */
export default function NavProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      const a = target?.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("/") || href.startsWith("/#")) return;
      if (a.target === "_blank") return;
      if (href.split("#")[0] === pathname) return;
      started.current = true;
      setVisible(true);
      setProgress(12);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  // trickle towards 90% while loading
  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => {
      setProgress((p) => (p < 90 ? p + (90 - p) * 0.12 : p));
    }, 180);
    return () => clearInterval(id);
  }, [visible]);

  // complete once the route has actually changed
  useEffect(() => {
    if (!started.current) return;
    started.current = false;
    setProgress(100);
    const t1 = setTimeout(() => setVisible(false), 250);
    const t2 = setTimeout(() => setProgress(0), 520);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]" aria-hidden>
      <div
        className="h-full rounded-r-full bg-gradient-to-r from-brand-500 via-accent-hover to-data shadow-[0_0_12px_rgba(61,123,255,0.6)] transition-[width,opacity] duration-200 ease-out"
        style={{ width: `${progress}%`, opacity: visible ? 1 : 0 }}
      />
    </div>
  );
}
