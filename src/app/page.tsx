'use client';

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import CinematicReveal from "@/components/ui/CinematicReveal";
import Magnetic from "@/components/ui/Magnetic";
import WordBanner from "@/components/ui/WordBanner";
import TiltCard from "@/components/ui/TiltCard";

/* ---------- Spotlight helper ---------- */
function Spotlight({ children }: { children: React.ReactNode }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });

  const bg = useTransform(
    [sx, sy],
    ([x, y]) =>
      `radial-gradient(300px 300px at ${x}px ${y}px,
        color-mix(in oklab, var(--accent) 12%, transparent),
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
      className="
        relative rounded-2xl p-8 sm:p-12 transition-colors
        border border-black/5 dark:border-white/10
        before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl
        before:bg-[radial-gradient(900px_460px_at_80%_-10%,color-mix(in_oklab,var(--accent)_16%,transparent),transparent_62%)]
        after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl
        after:shadow-[inset_0_1px_0_rgba(0,0,0,.08)]
        dark:after:shadow-[inset_0_1px_0_rgba(255,255,255,.06)]
      "
    >
      {children}
    </motion.div>
  );
}

/* ---------- Page ---------- */
export default function Home() {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <CinematicReveal
          className="mb-2 sm:mb-4"
          delay={0.15}
          y={10}
          duration={0.55}
        >
          <WordBanner />
        </CinematicReveal>

        <Spotlight>
          <CinematicReveal
            delay={0.35}
            y={12}
            duration={0.6}
            stagger={0.12}
          >
            <section>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                Sports stories backed by data.
              </h1>

              <p className="mt-4 max-w-2xl text-base text-foreground/70 sm:text-lg">
                Clean visuals. Sharp analysis. Zero fluff.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Magnetic href="/articles" className="btn-accent-hover">
                  Read articles
                </Magnetic>

                <Magnetic href="/insights" className="btn-accent-hover">
                  View insights
                </Magnetic>

                <Magnetic href="/about" className="btn-accent-hover">
                  What is Undervalued?
                </Magnetic>

                <Magnetic
                  href="/CristianFloresResume.pdf"
                  download="Cristian_Flores_Resume.pdf"
                  className="btn-accent-hover"
                >
                  Download resume
                </Magnetic>
              </div>
            </section>
          </CinematicReveal>
        </Spotlight>

        {/* LATEST */}
        <section className="mt-2">
          <CinematicReveal
            delay={0.45}
            y={10}
            duration={0.55}
          >
            <h2 className="text-lg font-semibold tracking-tight">Latest</h2>
          </CinematicReveal>

          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            <CinematicReveal
              delay={0.55}
              y={12}
              duration={0.55}
            >
              <TiltCard href="/articles/williams-bears">
                <h3 className="font-semibold tracking-tight group-hover:underline">
                  How did Caleb Williams and the 2025 Bears break win probability?
                </h3>
                <p className="mt-2 text-sm text-foreground/70">
                  A structural breakdown of how Caleb Williams and the Bears survived
                  disruption, created outside of structure, and turned broken plays into
                  decisive fourth-quarter win probability swings.
                </p>
                <span className="mt-3 inline-block text-xs text-foreground/60">
                  6 min read · NFL
                </span>
              </TiltCard>
            </CinematicReveal>

            <CinematicReveal
              delay={0.65}
              y={12}
              duration={0.55}
            >
              <TiltCard>
                <h3 className="font-semibold tracking-tight text-foreground/60">
                  Coming Soon
                </h3>
                <p className="mt-2 text-sm text-foreground/55">
                  New piece in progress. Check back shortly.
                </p>
                <span className="mt-3 inline-block text-xs text-foreground/45">
                  — Undervalued
                </span>
              </TiltCard>
            </CinematicReveal>
          </div>
        </section>
      </div>
    </div>
  );
}