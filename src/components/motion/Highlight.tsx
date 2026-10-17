"use client";

import { useRef } from "react";
import { cn } from "@/utils/cn";
import { useInView } from "./useInView";

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
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, !onMount);

  return (
    <span
      ref={ref}
      className={cn("relative inline-block px-3 text-white", className)}
    >
      <span
        className={cn(
          "absolute inset-0 origin-left bg-secondary",
          onMount || inView ? "animate-sweep" : "scale-x-0",
        )}
        style={{ animationDelay: `${delay}s` }}
        aria-hidden="true"
      />
      <span className="relative">{children}</span>
    </span>
  );
}
