"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A soft glow that trails the cursor. Desktop + fine-pointer only,
 * disabled for touch and reduced-motion users.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    let raf = 0;
    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;
    let tx = cx;
    let ty = cy;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const loop = () => {
      cx += (tx - cx) * 0.14;
      cy += (ty - cy) * 0.14;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${cx - 250}px, ${cy - 250}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[460px] w-[460px] rounded-full opacity-70 will-change-transform"
      style={{
        background:
          "radial-gradient(circle, rgba(40,199,217,0.10) 0%, rgba(216,177,95,0.06) 38%, transparent 70%)",
      }}
    />
  );
}
