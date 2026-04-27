// /components/BFCacheReset.tsx
"use client";

import { useEffect } from "react";

function forceScrollTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });

  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export default function BFCacheReset() {
  useEffect(() => {
    const resetAll = () => {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        el.style.transform = "";
      });

      forceScrollTop();

      requestAnimationFrame(forceScrollTop);
      window.setTimeout(forceScrollTop, 100);
      window.setTimeout(forceScrollTop, 300);
    };

    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) resetAll();
    };

    const onVisible = () => {
      if (document.visibilityState === "visible") {
        const nav = performance.getEntriesByType("navigation")[0] as
          | PerformanceNavigationTiming
          | undefined;

        if (nav?.type === "back_forward") resetAll();
      }
    };

    window.addEventListener("pageshow", onPageShow);
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return null;
}