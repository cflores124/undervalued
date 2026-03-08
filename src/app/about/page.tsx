// /app/about/page.tsx
import type { Metadata } from "next";
import CinematicReveal from "@/components/ui/CinematicReveal";

export const metadata: Metadata = {
  title: "About Undervalued — Undervalued",
  description:
    "What Undervalued is and why it exists: a sports intelligence platform built to uncover what is truly driving results.",
};

export default function AboutPage() {
  return (
    <section className="w-full">
      <div className="w-full max-w-6xl mx-auto">
        <main className="mt-10">
          {/* Main title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            About Undervalued
          </h1>

          {/* Description */}
          <div className="relative mt-4 max-w-3xl">
            <CinematicReveal
              className="relative"
              delay={0.5}
              y={10}
              duration={0.55}
              stagger={0.12}
            >
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                <strong>What Undervalued is and why it exists.</strong>{" "}
                A sports intelligence platform built to uncover what is truly
                driving results.
              </p>
            </CinematicReveal>
          </div>

          {/* Divider */}
          <div className="mt-8 sm:mt-10">
            <div className="mx-auto h-px w-[90%] bg-[color-mix(in_oklab,var(--foreground)_12%,transparent)]" />
          </div>

          {/* Body */}
          <CinematicReveal
            delay={0.15}
            stagger={0.12}
            duration={0.7}
            y={18}
            className="
              mt-8 prose prose-invert prose-lg max-w-3xl
              space-y-6 md:space-y-7
              prose-p:my-0 prose-ol:my-0 prose-ul:my-0 prose-h2:my-0
              prose-p:leading-[1.9] prose-li:leading-[1.9]
              prose-p:text-foreground/80 prose-li:text-foreground/80
              prose-strong:font-semibold
            "
          >
            <h2
              className="
                not-prose text-2xl sm:text-3xl
                font-extrabold tracking-tight text-foreground
                mb-4
              "
            >
              What is Undervalued?
            </h2>

            <p>
              <strong>Undervalued</strong> is a sports intelligence platform
              dedicated to extracting insights and telling stories that data
              often whispers but rarely shouts.
            </p>

            <p>
              Through quantitative, strategic, and biomechanical analysis, we
              examine the moments, performances, and systems that shape
              competition. From individual breakthroughs to championship runs
              and the quiet evolution of great organizations, Undervalued seeks
              to uncover what is truly driving results.
            </p>

            <p>
              No sport or story is off limits. The mission is simple: use
              analytics to better understand what is actually happening in
              competition.
            </p>

            <h2
              className="
                not-prose text-2xl sm:text-3xl
                font-extrabold tracking-tight text-foreground
                mt-12 mb-4
              "
            >
              Why Undervalued?
            </h2>

            <p>
              The name pays homage to <em>Moneyball</em>, where the Oakland A’s,
              Billy Beane, and Paul DePodesta revolutionized baseball by using
              analytics to uncover undervalued players and outthink bigger
              budgets.
            </p>

            <p>But the idea goes deeper than baseball.</p>

            <p>
              Determining whether something is truly undervalued requires
              looking beyond surface results and asking harder questions about
              performance, strategy, and the systems that drive success.
            </p>

            <p>
              <strong>Undervalued</strong> exists to ask those questions.
            </p>
          </CinematicReveal>

          {/* Background vignette */}
          <div
            className="pointer-events-none fixed inset-0 -z-10
                       bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.04),transparent_60%)]"
          />
        </main>
      </div>
    </section>
  );
}