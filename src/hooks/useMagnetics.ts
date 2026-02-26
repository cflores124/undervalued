// /hooks/useMagnetic.ts
'use client';
import { RefObject, useEffect } from 'react';

export function useMagnetic(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isDesktopHover =
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const reset = () => {
      el.style.transform = '';
    };

    // On touch devices: disable & make sure we reset after interactions
    if (!isDesktopHover) {
      el.addEventListener('touchend', reset, { passive: true });
      el.addEventListener('pointerup', reset);
      el.addEventListener('pointercancel', reset);
      return () => {
        el.removeEventListener('touchend', reset);
        el.removeEventListener('pointerup', reset);
        el.removeEventListener('pointercancel', reset);
      };
    }

    // (Optional) Minimal desktop magnetic behavior. If you already have one,
    // delete this block and keep only the touch guard above.
    const max = 12; // px
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const tx = Math.max(-1, Math.min(1, dx)) * max;
      const ty = Math.max(-1, Math.min(1, dy)) * max;
      el.style.transform = `translate(${tx}px, ${ty}px)`;
    };
    const onLeave = () => reset();

    el.style.willChange = 'transform';
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);

    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      reset();
    };
  }, [ref]);
}
