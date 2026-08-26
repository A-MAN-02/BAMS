import { useEffect } from "react";

/**
 * Adds the "is-visible" class to elements matching `selector`
 * inside `containerRef` as they scroll into view, with a small
 * stagger between each one. Respects prefers-reduced-motion.
 */
export const useScrollReveal = (containerRef, selector) => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!containerRef.current || prefersReducedMotion) return;

    const targets = containerRef.current.querySelectorAll(selector);
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("is-visible");
            }, i * 90);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [containerRef, selector]);
};
