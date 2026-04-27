"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function forceScrollTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });

  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function isMobileSafari() {
  const ua = window.navigator.userAgent;

  return (
    /iP(ad|hone|od)/.test(ua) &&
    /Safari/.test(ua) &&
    !/CriOS|FxiOS|EdgiOS/.test(ua)
  );
}

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const safariMobile = isMobileSafari();

    forceScrollTop();

    const frame = requestAnimationFrame(() => {
      forceScrollTop();

      requestAnimationFrame(() => {
        forceScrollTop();
      });
    });

    const timers = [
      window.setTimeout(forceScrollTop, 50),
      window.setTimeout(forceScrollTop, 150),
      window.setTimeout(forceScrollTop, 300),
    ];

    let safariInterval: number | undefined;

    if (safariMobile) {
      safariInterval = window.setInterval(forceScrollTop, 80);

      window.setTimeout(() => {
        if (safariInterval) {
          window.clearInterval(safariInterval);
        }
      }, 700);
    }

    return () => {
      cancelAnimationFrame(frame);
      timers.forEach(window.clearTimeout);

      if (safariInterval) {
        window.clearInterval(safariInterval);
      }
    };
  }, [pathname]);

  useEffect(() => {
    const handlePageShow = () => {
      forceScrollTop();

      requestAnimationFrame(forceScrollTop);
      window.setTimeout(forceScrollTop, 100);
      window.setTimeout(forceScrollTop, 300);
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return null;
}