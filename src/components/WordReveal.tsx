"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Word-by-word headline reveal. Each word rises into place.
 * Wrap words you want gradient-highlighted via the `highlight` indices.
 * `rise` controls how far each word travels up (px); `startDelay` and
 * `stagger` time the cascade so it can be synced to other hero motion.
 */
export default function WordReveal({
  text,
  className = "",
  highlight = [],
  as: Tag = "h1",
  rise = 18,
  startDelay = 0.1,
  stagger = 0.08,
}: {
  text: string;
  className?: string;
  highlight?: number[];
  as?: "h1" | "h2" | "p";
  rise?: number;
  startDelay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const MotionTag = motion[Tag] as React.ElementType;

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: startDelay } },
  };

  const word: Variants = {
    hidden: { y: rise, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.85, ease: EASE } },
  };

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block px-[0.06em] align-bottom" aria-hidden>
          <motion.span
            variants={word}
            className={`inline-block pb-[0.25em] -mb-[0.25em] ${highlight.includes(i) ? "heading-gradient-light" : ""}`}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
