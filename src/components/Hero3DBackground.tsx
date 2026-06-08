"use client";

import { useEffect, useRef } from "react";
import { useRegion } from "@/components/RegionProvider";

/**
 * Meaningful 3D background for a global CFO brand: a slowly rotating dotted
 * world-map globe (land rendered as dots) with glowing finance-hub nodes.
 * Pure canvas, no WebGL. Cursor parallax, offscreen pause, DPR cap,
 * reduced-motion renders a single static frame.
 */
type V3 = [number, number, number];
const sph = (latDeg: number, lonDeg: number): V3 => {
  const lat = (latDeg * Math.PI) / 180;
  const lon = (lonDeg * Math.PI) / 180;
  const cl = Math.cos(lat);
  return [cl * Math.cos(lon), Math.sin(lat), cl * Math.sin(lon)];
};

// rough land bands: [lat, [lonStart,lonEnd, lonStart,lonEnd, ...]]
const LAND: [number, number[]][] = [
  [80, [-55, -15, 55, 110]],
  [75, [-130, -15, 10, 180]],
  [70, [-165, -10, 8, 180]],
  [65, [-162, -8, 6, 180]],
  [60, [-140, -55, -10, 180]],
  [55, [-130, -55, -8, 180]],
  [50, [-128, -58, -8, 150]],
  [45, [-125, -65, 0, 150]],
  [40, [-123, -70, -9, 140]],
  [35, [-120, -75, -10, 60, 70, 140]],
  [30, [-115, -80, -10, 55, 65, 122]],
  [25, [-110, -83, -15, 50, 50, 120]],
  [20, [-105, -83, -17, 50, 72, 110]],
  [15, [-95, -83, -18, 52, 73, 105]],
  [10, [-86, -78, -15, 48, 95, 127]],
  [5, [-80, -77, -10, 45, 95, 120]],
  [0, [-80, -50, 8, 42, 100, 120]],
  [-5, [-80, -35, 10, 40, 102, 122]],
  [-10, [-78, -35, 12, 40, 105, 140]],
  [-15, [-75, -38, 13, 38, 125, 145]],
  [-20, [-70, -40, 14, 36, 114, 148]],
  [-25, [-70, -44, 15, 33, 113, 152]],
  [-30, [-72, -52, 17, 30, 115, 150]],
  [-35, [-73, -58, 18, 26, 135, 150]],
  [-40, [-74, -62, 143, 148]],
  [-45, [-75, -67]],
  [-50, [-75, -68]],
  [-62, [-180, 180]],
  [-72, [-180, 180]],
  [-80, [-180, 180]],
];

// active region marker coordinates
const REGION: Record<string, V3> = {
  AE: sph(24, 54),
  IN: sph(22, 78),
  US: sph(39, -98),
  CA: sph(56, -100),
};

const DOTS: V3[] = [];
for (const [lat, ranges] of LAND) {
  for (let k = 0; k < ranges.length; k += 2) {
    for (let lon = ranges[k]; lon <= ranges[k + 1]; lon += 4) DOTS.push(sph(lat, lon));
  }
}

export default function Hero3DBackground({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const { code } = useRegion();
  const hiRef = useRef<V3>(REGION[code] ?? REGION.AE);
  useEffect(() => {
    hiRef.current = REGION[code] ?? REGION.AE;
  }, [code]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let ay = 0;
    let mx = 0;
    let my = 0;
    let tmx = 0;
    let tmy = 0;
    let raf = 0;
    let running = true;
    const axisTilt = -0.42;

    const onMove = (e: MouseEvent) => {
      tmx = e.clientX / window.innerWidth - 0.5;
      tmy = e.clientY / window.innerHeight - 0.5;
    };
    if (!reduce) window.addEventListener("mousemove", onMove, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const dark = document.documentElement.classList.contains("dark");
      const c = dark ? [123, 160, 255] : [46, 110, 156];
      const cx = w * 0.5;
      const cy = h * 0.5;
      const R = Math.min(w, h) * 0.44;
      const f = R * 3;

      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;
      const rotY = ay + mx * 0.5;
      const rotX = axisTilt - my * 0.4;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const project = (p: V3) => {
        const x = p[0] * cosY - p[2] * sinY;
        const z1 = p[0] * sinY + p[2] * cosY;
        const y = p[1] * cosX - z1 * sinX;
        const z = p[1] * sinX + z1 * cosX;
        const scale = f / (f + z * R);
        return { sx: cx + x * R * scale, sy: cy + y * R * scale, z };
      };

      // faint globe silhouette
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${c[0]},${c[1]},${c[2]},0.12)`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // land dots (continents)
      for (const p of DOTS) {
        const pr = project(p);
        const front = (pr.z + 1) / 2; // 0 back .. 1 front
        const a = 0.12 + front * 0.5;
        const r = 0.8 + front * 1.5;
        ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${a})`;
        ctx.beginPath();
        ctx.arc(pr.sx, pr.sy, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // active region - GREEN marker
      const hp = project(hiRef.current);
      if (hp.z > -0.25) {
        const front = (hp.z + 1) / 2;
        const g = dark ? [34, 197, 94] : [22, 163, 74];
        const base = 2.6 + front * 3;
        ctx.fillStyle = `rgba(${g[0]},${g[1]},${g[2]},${0.13 * front})`;
        ctx.beginPath();
        ctx.arc(hp.sx, hp.sy, base * 3.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = `rgba(${g[0]},${g[1]},${g[2]},${0.45 * front})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(hp.sx, hp.sy, base * 1.9, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = `rgba(${g[0]},${g[1]},${g[2]},${0.55 + front * 0.45})`;
        ctx.beginPath();
        ctx.arc(hp.sx, hp.sy, base, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      if (!running) return;
      ay += 0.0016;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(
      (entries) => {
        running = entries[0].isIntersecting;
        if (running && !reduce) {
          cancelAnimationFrame(raf);
          loop();
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    if (reduce) {
      ay = 0.6;
      draw();
    } else {
      loop();
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} />;
}
