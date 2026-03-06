// /components/Magnetic.tsx
'use client';

import React, { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type MagneticProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
} & HTMLMotionProps<"a">;

const MotionLink = motion(Link);
const MotionA = motion.a;

export default function Magnetic({
  href,
  className = "",
  children,
  ...rest
}: MagneticProps) {
  // Detect real hover/fine pointer (desktop/laptop)
  const isDesktopHover = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, []);

  const ref = useRef<HTMLElement | null>(null);

  // Motion values (used only on desktop hover)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(x, { stiffness: 300, damping: 20 });
  const ry = useSpring(y, { stiffness: 300, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isDesktopHover) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.2);
    y.set(dy * 0.2);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  // On touch devices, clear any inline transforms after interaction
  useEffect(() => {
    const el = ref.current as HTMLElement | null;
    if (!el) return;

    if (!isDesktopHover) {
      const reset = () => {
        el.style.transform = "";
      };
      el.addEventListener("touchend", reset, { passive: true });
      el.addEventListener("pointerup", reset);
      el.addEventListener("pointercancel", reset);
      return () => {
        el.removeEventListener("touchend", reset);
        el.removeEventListener("pointerup", reset);
        el.removeEventListener("pointercancel", reset);
      };
    }

    return () => onLeave();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktopHover]);

  const isInternal =
    href.startsWith("/") && !href.startsWith("//") && !("download" in rest);

  const baseClass = `btn ${className}`;

  // --- HYDRATION-SAFE STYLE ---
  // Always include a baseline transform so server & client HTML match.
  // Framer will override this on the client when motion values are present.
  const baseStyle: React.CSSProperties = { transform: "none" };
  const motionStyle = isDesktopHover
    ? ({ ...baseStyle, x: rx as any, y: ry as any } as any)
    : (baseStyle as any);

  const mouseHandlers = isDesktopHover
    ? { onMouseMove: onMove, onMouseLeave: onLeave }
    : {};

  const whileTap = { scale: 0.98 };

  if (isInternal) {
    return (
      <MotionLink
        href={href}
        prefetch
        className={baseClass}
        data-magnetic
        ref={ref as any}
        style={motionStyle}
        whileTap={whileTap}
        {...mouseHandlers}
        {...(rest as any)}
        suppressHydrationWarning
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
      ref={ref as any}
      style={motionStyle}
      whileTap={whileTap}
      {...mouseHandlers}
      {...rest}
      suppressHydrationWarning
    >
      {children}
    </MotionA>
  );
}
