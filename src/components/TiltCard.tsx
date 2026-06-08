"use client";

import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Premium 3D tilt on hover - follows the pointer with perspective rotate.
 * Reduced-motion users get no tilt. Wrap any card.
 */
export default function TiltCard({
  children,
  className = "",
  max = 9,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(720px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateZ(0)`;
  }
  function reset() {
    if (ref.current) ref.current.style.transform = "perspective(720px) rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ transition: "transform 0.3s ease-out", transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </div>
  );
}
