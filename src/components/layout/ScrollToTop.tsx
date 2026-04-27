"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    };

    scrollTop();

    requestAnimationFrame(() => {
      scrollTop();
    });

    const timeout = window.setTimeout(() => {
      scrollTop();
    }, 100);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return null;
}