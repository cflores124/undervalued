// /app/page.tsx
'use client';

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import WordBanner from "@/components/WordBanner";

/* ---------- Spotlight helper ---------- */
function Spotlight({ children }: { children: React.ReactNode }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });

  const bg = useTransform([sx, sy], ([x, y]) =>
    `radial-gradient(300px 300px at ${x}px ${y}px,
      color-mix(in oklab, var(--accent) 10%, transparent),
      transparent 60%)`
  );

  return (
    <motion.div
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      style={{ backgroundImage: bg }}
      className="relative rounded-2xl p-8 sm:p-12 transition-colors
                 before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl
                 before:bg-[radial-gradient(800px_400px_at_80%_-10%,rgba(216,255,62,.06),transparent_60%)]
                 after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:shadow-[inset_0_1px_0_rgba(255,255,255,.06)]"
    >
      {children}
    </motion.div>
  );
}

/* ---------- TiltCard helper ---------- */
function TiltCard({ children, href }: { children: React.ReactNode; href?: string }) {
  const rx = useMotionValue(0), ry = useMotionValue(0);
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
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
      style={{ rotateX: sx, rotateY: sy, transformStyle: 'preserve-3d' }}
      className="card p-5 will-change-transform group"
    >
      {children}
    </motion.div>
  );

  return href ? <Link href={href} className="block [perspective:1000px]">{CardBody}</Link>
              : <div className="[perspective:1000px]">{CardBody}</div>;
}

/* ---------- Page ---------- */
export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full max-w-6xl mx-auto space-y-10">
        <WordBanner className="mb-2 sm:mb-4" />

        <Spotlight>
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Sports stories backed by data.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-foreground/70 max-w-2xl">
              Clean visuals. Sharp analysis. Zero fluff.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Magnetic href="/articles" className="btn-accent-hover">Read articles</Magnetic>
              <Magnetic href="/gallery" className="btn-accent-hover">View athlete highlights</Magnetic>
              <Magnetic href="/about" className="btn-accent-hover">What is Undervalued?</Magnetic>
              <Magnetic
                href="/CristianFloresResume.pdf"
                download="Cristian_Flores_Resume.pdf"
                className="btn-accent-hover"
              >
                Download resume
              </Magnetic>
            </div>
          </motion.section>
        </Spotlight>

        {/* LATEST */}
        <section className="mt-2">
          <h2 className="text-lg font-semibold tracking-tight">Latest</h2>

          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: .5, ease: "easeOut" }}
            >
              <TiltCard href="/articles/lakers-3peat">
                <h3 className="font-semibold tracking-tight group-hover:underline">
                  The 2000–02 Lakers: the other three-peat
                </h3>
                <p className="mt-2 text-sm text-foreground/70">
                  A quick dive into dynasty math—pace, margins, and playoff shot quality.
                </p>
                <span className="mt-3 inline-block text-xs text-foreground/60">
                  5 min read · NBA
                </span>
              </TiltCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: .6, ease: "easeOut", delay: .05 }}
            >
              <TiltCard>
                <h3 className="font-semibold tracking-tight text-foreground/60">Coming Soon</h3>
                <p className="mt-2 text-sm text-foreground/55">
                  New piece in progress. Check back shortly.
                </p>
                <span className="mt-3 inline-block text-xs text-foreground/45">
                  — Undervalued
                </span>
              </TiltCard>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
