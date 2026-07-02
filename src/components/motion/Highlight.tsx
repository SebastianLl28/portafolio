"use client";

import { motion, useReducedMotion } from "framer-motion";

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
  /** Retraso del barrido, en segundos. */
  delay?: number;
  /** true: anima al montar (hero). false: anima al entrar en viewport. */
  onMount?: boolean;
}

export default function Highlight({
  children,
  className,
  delay = 0,
  onMount = false,
}: HighlightProps) {
  const reduceMotion = useReducedMotion();

  const sweep = {
    initial: reduceMotion ? { scaleX: 1 } : { scaleX: 0 },
    animate: { scaleX: 1 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
  };

  return (
    <span className={`relative inline-block px-3 text-white ${className ?? ""}`}>
      <motion.span
        className="absolute inset-0 origin-left bg-secondary"
        aria-hidden="true"
        initial={sweep.initial}
        {...(onMount
          ? { animate: sweep.animate }
          : {
              whileInView: sweep.animate,
              viewport: { once: true, margin: "-80px" },
            })}
        transition={sweep.transition}
      />
      <span className="relative">{children}</span>
    </span>
  );
}
