// /components/BFCacheReset.tsx
'use client';
import { useEffect } from 'react';

export default function BFCacheReset() {
  useEffect(() => {
    const resetAll = () => {
      document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
        el.style.transform = '';
      });
    };

    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) resetAll(); // page restored from bfcache
    };

    const onVisible = () => {
      if (document.visibilityState === 'visible') {
        const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
        if (nav?.type === 'back_forward') resetAll();
      }
    };

    window.addEventListener('pageshow', onPageShow);
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      window.removeEventListener('pageshow', onPageShow);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, []);

  return null;
}
