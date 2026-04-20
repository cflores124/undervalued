"use client";

import Link from "next/link";
import CinematicReveal from "@/components/ui/CinematicReveal";

type Props = {
  dataSource?: string;
};

export default function BearsNetAverageWPAPerPossessionInsight({
  dataSource,
}: Props) {
  return (
    <section className="w-full">
      <CinematicReveal
        className="mx-auto max-w-3xl space-y-4 text-center"
        delay={0.2}
        y={10}
        duration={0.55}
        stagger={0.12}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Play Creation Under Pressure
        </h2>

        <p className="text-sm sm:text-base leading-relaxed text-foreground/75">
          The fourth quarter is defined by volatility, with compressed time,
          limited possessions, and outsized consequences on every play. The Bears
          didn’t just operate in this environment: they exploited it. Ranking
          second in execution by average net WPA per possession, they
          consistently turned high-leverage moments into positive outcomes. At
          the center was Caleb Williams, whose ability to create on broken plays
          kept drives alive when structure failed. Without that creation, those
          same possessions often collapse before execution can matter.
        </p>

        {dataSource && (
          <p className="text-xs text-foreground/55">
            Data collected from {dataSource}
          </p>
        )}

        <p className="text-sm sm:text-base text-foreground/65">
          Read the full breakdown{" "}
          <Link
            href="/articles/williams-bears"
            className="underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            here
          </Link>
          .
        </p>
      </CinematicReveal>
    </section>
  );
}