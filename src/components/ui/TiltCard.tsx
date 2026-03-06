// /components/TiltCard.tsx
'use client';

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

type TiltCardProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export default function TiltCard({ children, href, className = "" }: TiltCardProps) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sx = useSpring(rx, { stiffness: 140, damping: 15 });
  const sy = useSpring(ry, { stiffness: 140, damping: 15 });

  const handle = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    rx.set((py - 0.5) * -8);
    ry.set((px - 0.5) * 8);
  };

  const CardBody = (
    <motion.div
      onMouseMove={handle}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      style={{ rotateX: sx, rotateY: sy, transformStyle: "preserve-3d" }}
      className={[
        // base “Latest” behavior
        "card p-5 will-change-transform group",
        // accent glow (auto orange in light, neon-green in dark because --accent changes)
        "transition-all duration-300",
        "hover:border-[color-mix(in_oklab,var(--accent)_55%,transparent)]",
        "hover:shadow-[0_0_0_4px_color-mix(in_oklab,var(--accent)_22%,transparent),var(--shadow)]",
        className,
      ].join(" ")}
    >
      {children}
    </motion.div>
  );

  return href ? (
    <Link href={href} className="block [perspective:1000px]">
      {CardBody}
    </Link>
  ) : (
    <div className="[perspective:1000px]">{CardBody}</div>
  );
}