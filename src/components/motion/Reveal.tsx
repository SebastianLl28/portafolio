"use client";

import { useRef } from "react";
import { cn } from "@/utils/cn";
import { useInView } from "./useInView";

interface RevealProps {
  children: React.ReactNode;
  as?: "div" | "li";
  className?: string;
  delay?: number;
}

export default function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const Component = as as "div";

  return (
    <Component
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Component>
  );
}
