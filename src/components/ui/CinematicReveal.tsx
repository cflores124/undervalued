// components/CinematicReveal.tsx
'use client';

import * as React from 'react';
import { motion, type Variants } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;     // before first child
  stagger?: number;   // gap between children
  y?: number;         // start offset
  duration?: number;  // per-child duration
};

export default function CinematicReveal({
  children,
  className,
  delay = 0.1,
  stagger,           
  y = 16,
  duration = 0.6,
}: Props) {
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: delay,
        ...(stagger !== undefined ? { staggerChildren: stagger } : {}), // ✅ only apply when defined
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className={className}>
      {React.Children.toArray(children).map((child, idx) => (
        <motion.div key={idx} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
