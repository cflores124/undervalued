// /components/Magnetic.tsx
'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import type { HTMLMotionProps, MotionStyle } from 'framer-motion';

type MagneticProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
} & HTMLMotionProps<'a'>;

const MotionLink = motion.create(Link);
const MotionA = motion.a;

export default function Magnetic({
  href,
  className = '',
  children,
  ...rest
}: MagneticProps) {
  const [isDesktopHover, setIsDesktopHover] = useState(false);
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(x, { stiffness: 300, damping: 20 });
  const ry = useSpring(y, { stiffness: 300, damping: 20 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const update = () => {
      setIsDesktopHover(mediaQuery.matches);
    };

    update();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', update);
      return () => mediaQuery.removeEventListener('change', update);
    }

    mediaQuery.addListener(update);
    return () => mediaQuery.removeListener(update);
  }, []);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!isDesktopHover) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);

      x.set(dx * 0.2);
      y.set(dy * 0.2);
    },
    [isDesktopHover, x, y]
  );

  const onLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!isDesktopHover) {
      const reset = () => {
        el.style.transform = '';
      };

      el.addEventListener('touchend', reset, { passive: true });
      el.addEventListener('pointerup', reset);
      el.addEventListener('pointercancel', reset);

      return () => {
        el.removeEventListener('touchend', reset);
        el.removeEventListener('pointerup', reset);
        el.removeEventListener('pointercancel', reset);
      };
    }

    return () => {
      onLeave();
    };
  }, [isDesktopHover, onLeave]);

  const isInternal =
    href.startsWith('/') && !href.startsWith('//') && !('download' in rest);

  const baseClass = `btn ${className}`;

  const motionStyle: MotionStyle = isDesktopHover
    ? { transform: 'none', x: rx, y: ry }
    : { transform: 'none' };

  const whileTap = { scale: 0.98 };

  if (isInternal) {
    return (
      <MotionLink
        href={href}
        prefetch
        className={baseClass}
        data-magnetic
        ref={ref}
        style={motionStyle}
        whileTap={whileTap}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        {...rest}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionA
      href={href}
      className={baseClass}
      data-magnetic
      ref={ref}
      style={motionStyle}
      whileTap={whileTap}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...rest}
    >
      {children}
    </MotionA>
  );
}