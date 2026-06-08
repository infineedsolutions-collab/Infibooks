"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Cycles through a list of phrases in place (fade + slide). Used to make a
 * headline feel alive without layout-shifting the rest of the line.
 */
export default function RotatingText({
  words,
  className = "",
  interval = 2600,
}: {
  words: string[];
  className?: string;
  interval?: number;
}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce || words.length <= 1) return;
    const id = setInterval(() => setI((p) => (p + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [reduce, words.length, interval]);

  if (reduce) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span className="inline-block align-bottom" aria-label={words[0]}>
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className={`inline-block pb-[0.2em] -mb-[0.2em] ${className}`}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
