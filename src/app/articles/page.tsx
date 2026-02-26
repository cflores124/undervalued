// /app/articles/page.tsx
import type { Metadata } from "next";
import CinematicReveal from "@/components/CinematicReveal";

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

      {/* Cinematic excerpt with 0.5s delayed reveal */}
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
            narrative. Explore our growing library of stories dissecting
            legendary performances, overlooked greatness, and the details that
            define champions.
          </p>
        </CinematicReveal>
      </div>

      {/* centered thin divider (90% width) */}
      <div className="mt-8 sm:mt-10">
        <div className="mx-auto h-px w-[90%] bg-white/10" />
      </div>

      {/* Future article list */}
      <div className="mt-8" aria-label="Articles list" />
    </section>
  );
}
