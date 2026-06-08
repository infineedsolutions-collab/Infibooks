"use client";

import { useEffect, useRef } from "react";

/**
 * Premium ambient background for the final CTA: a slowly rotating 3D sphere of
 * connected nodes (an abstract "finance network"), with depth fog, cursor
 * parallax, offscreen pause, DPR cap and reduced-motion fallback.
 */
export default function CtaBackground3D({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const N = 88;
    const pts: { x: number; y: number; z: number; green: boolean }[] = [];
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = i * Math.PI * (3 - Math.sqrt(5));
      pts.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r, green: i % 6 === 0 });
    }

    let w = 0;
    let h = 0;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let mx = 0;
    let my = 0;
    let tmx = 0;
    let tmy = 0;
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      tmx = (e.clientX - rect.left) / rect.width - 0.5;
      tmy = (e.clientY - rect.top) / rect.height - 0.5;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let visible = true;
    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    let angle = 0;
    let raf = 0;

    const draw = () => {
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.46;
      const ay = angle + mx * 0.6;
      const ax = my * 0.4;
      const cosY = Math.cos(ay);
      const sinY = Math.sin(ay);
      const cosX = Math.cos(ax);
      const sinX = Math.sin(ax);

      const proj = pts.map((p) => {
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;
        const persp = 1.3 / (2 - z2);
        return {
          sx: cx + x1 * radius * persp,
          sy: cy + y2 * radius * persp,
          depth: (z2 + 1) / 2,
          green: p.green,
        };
      });

      ctx.clearRect(0, 0, w, h);
      const maxD = radius * 0.52;
      for (let i = 0; i < proj.length; i++) {
        for (let j = i + 1; j < proj.length; j++) {
          const dx = proj[i].sx - proj[j].sx;
          const dy = proj[i].sy - proj[j].sy;
          const d = Math.hypot(dx, dy);
          if (d < maxD) {
            const a = (1 - d / maxD) * 0.13 * ((proj[i].depth + proj[j].depth) / 2);
            ctx.strokeStyle = `rgba(61,123,255,${a.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(proj[i].sx, proj[i].sy);
            ctx.lineTo(proj[j].sx, proj[j].sy);
            ctx.stroke();
          }
        }
      }
      for (const p of proj) {
        const size = 1 + p.depth * 2.4;
        const a = 0.22 + p.depth * 0.6;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, size, 0, Math.PI * 2);
        ctx.fillStyle = p.green
          ? `rgba(47,211,165,${a.toFixed(3)})`
          : `rgba(46,110,156,${a.toFixed(3)})`;
        ctx.fill();
      }
    };

    const frame = () => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;
      angle += 0.0016;
      draw();
    };

    if (reduce) {
      draw();
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden />;
}
