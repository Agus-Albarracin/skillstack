"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement>(contentKey: string) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll<HTMLElement>("[data-reveal-item]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    container.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;
          const rootTop = entry.rootBounds?.top ?? 0;
          const entersFromTop = entry.boundingClientRect.top < rootTop;

          element.classList.toggle("reveal-from-top", entersFromTop);
          element.classList.toggle("reveal-from-bottom", !entersFromTop);
          element.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { root: container, rootMargin: "-2px 0px", threshold: 0.14 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [contentKey]);

  return containerRef;
}
