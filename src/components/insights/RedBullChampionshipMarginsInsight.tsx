import Link from "next/link";
import CinematicReveal from "@/components/ui/CinematicReveal";
import RedBullChampionshipMarginsCard from "@/components/insights/RedBullChampionshipMarginsCard";
import redBullInsight from "@/data/f1_2021_drivers_championship_margins.json";

type Props = {
  dataSource?: string;
};

export default function RedBullChampionshipMarginsInsight({ dataSource }: Props) {
  return (
    <section className="w-full">
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
        Margins Become Championships
      </h1>

      <div className="relative mt-4 max-w-3xl">
        <CinematicReveal
          className="relative"
          delay={0.5}
          y={10}
          duration={0.55}
          stagger={0.12}
        >
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            <strong>Drivers Championship Margins.</strong> A concise visual note
            showing how the 2021 Formula 1 title race turned a narrow points gap
            into a championship-defining edge.
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
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-start gap-8 lg:grid-cols-[460px_minmax(0,1fr)] lg:gap-12">
          <div className="w-full max-w-[495px]">
            <RedBullChampionshipMarginsCard insight={redBullInsight} />
          </div>

          <div className="max-w-2xl self-center">
            <p className="text-base sm:text-lg leading-relaxed text-foreground/78">
              Formula 1 championships are rarely decided by dominance alone.
              They are shaped by the accumulation of small advantages across
              strategy, tire life, pit execution, race pace, and pressure
              management. In 2021, Max Verstappen defeated Lewis Hamilton by
              only 8 points, turning one of the smallest gaps in modern Formula
              1 into a championship-winning margin.
            </p>

            {dataSource && (
              <p className="mt-4 text-xs sm:text-sm text-foreground/50">
                Data collected from {dataSource}
              </p>
            )}

            <p className="mt-2 text-sm sm:text-base text-foreground/65">
              Read the full breakdown{" "}
              <Link
                href="/articles/red-bull-f1"
                className="underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                here
              </Link>
              .
            </p>
          </div>
        </div>
      </CinematicReveal>
    </section>
  );
}