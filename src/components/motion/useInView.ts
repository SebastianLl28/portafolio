"use client";

import { RefObject, useEffect, useState } from "react";

export function useInView<T extends Element>(
  ref: RefObject<T | null>,
  enabled = true,
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!enabled || !element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, enabled]);

  return inView;
}
