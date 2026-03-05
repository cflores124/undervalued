// /app/about/page.tsx
import type { Metadata } from "next";
import CinematicReveal from "@/components/CinematicReveal";

export const metadata: Metadata = {
  title: "About Undervalued — Undervalued",
  description:
    "What Undervalued is and why it exists: analytics-driven sports stories told with clarity.",
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

          {/* Description (mirrors Athlete Highlights style) */}
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
                Analytics-driven sports stories told with clarity.
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
              What’s Undervalued?
            </h2>

            <p>
              <strong>Undervalued</strong> is a sports media platform dedicated to telling the
              stories that data often whispers but rarely shouts.
            </p>

            <p>
              Through an analytical lens, we explore the moments, performances, and legacies that
              define competition — whether it’s an individual’s breakthrough, a team’s championship
              run, or an organization’s quiet evolution into greatness.
            </p>

            <p>
              No sport or story is off limits. Our mission is simple: use analytics to tell
              powerful stories that change the way we see sports — and the people within them.
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

            <ol className="pl-5 list-decimal space-y-2">
              <li>
                The name pays homage to Moneyball — where the Oakland A’s, Billy Beane, and Paul
                DePodesta revolutionized baseball by using analytics to uncover undervalued players
                and outthink bigger budgets.
              </li>
              <li>
                Because, truthfully, we’ve all felt undervalued at some point — underestimated,
                overlooked, or doubted — until effort, vision, and belief proved otherwise.
              </li>
            </ol>

            <p>
              <em>Competition unites us.</em>
            </p>

            <p>
              Across every field, court, pitch, and ring, it reminds us that numbers don’t just
              measure performance — they tell stories of resilience, innovation, and triumph.
            </p>

            <p>
              At its best, <strong>Undervalued</strong> is a celebration of those stories — where
              analytics meets inspiration, and where the overlooked become unforgettable.
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