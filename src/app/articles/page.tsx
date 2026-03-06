import type { Metadata } from "next";
import CinematicReveal from "@/components/CinematicReveal";
import TiltCard from "@/components/TiltCard";

export const metadata: Metadata = {
  title: "Articles — Undervalued",
  description: "Articles from Undervalued",
};

export default function ArticlesPage() {
  return (
    <section className="w-full">
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
        Articles
      </h1>

      <div className="relative mt-4 max-w-3xl">
        <CinematicReveal
          className="relative"
          delay={0.5}
          stagger={0.12}
          y={10}
          duration={0.55}
        >
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            <strong>Welcome to Undervalued.</strong> This is where numbers meet
            narrative. Explore our growing library of stories dissecting legendary
            performances, overlooked greatness, and the details that define champions.
          </p>
        </CinematicReveal>
      </div>

      <div className="mt-8 sm:mt-10">
        <div className="mx-auto h-px w-[90%] bg-[color-mix(in_oklab,var(--foreground)_12%,transparent)]" />
      </div>

      <CinematicReveal
        className="mt-10"
        delay={0.9}
        y={12}
        duration={0.6}
      >
        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Articles list"
        >
          <TiltCard href="/articles/yan-vs-merab" className="p-6">
            <h2 className="text-xl font-semibold tracking-tight group-hover:underline">
              What Actually Decides Yan vs. Merab?
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              A structural breakdown of how control differential compresses or
              restores Petr Yan’s striking offense against Merab Dvalishvili.
            </p>

            <div className="mt-4 text-xs text-foreground/60">UFC Analysis</div>
          </TiltCard>
        </div>
      </CinematicReveal>
    </section>
  );
}