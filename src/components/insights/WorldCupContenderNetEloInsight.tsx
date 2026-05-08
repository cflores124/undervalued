import Link from "next/link";
import CinematicReveal from "@/components/ui/CinematicReveal";
import WorldCupNetEloFlipCard from "@/components/insights/WorldCupNetEloFlipCard";
import worldCupInsight from "@/data/world_cup_2026_contender_net_elo.json";

type Props = {
  dataSource?: string;
};

export default function WorldCupContenderNetEloInsight({ dataSource }: Props) {
  return (
    <section className="w-full">
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
        Peaking Under Pressure
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
            <strong>Contender Elo Momentum.</strong> A concise visual note
            showing which contenders are trending upward before the 2026 World
            Cup and which elite teams have declined from recent rating peaks.
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
            <WorldCupNetEloFlipCard insight={worldCupInsight} />
          </div>

          <div className="max-w-2xl self-center">
            <p className="text-base sm:text-lg leading-relaxed text-foreground/78">
              Recent World Cup champions usually arrive with more than talent.
              They arrive with momentum. Net Elo helps show whether a contender
              is building toward a tournament peak or entering the cycle below
              its recent high point. Spain, Colombia, and England are trending
              upward, while Argentina, France, and Brazil remain dangerous but
              carry different momentum profiles into 2026. Still, these contenders 
              must convert momentum into a tournament peak under immense pressure.
            </p>

            {dataSource && (
              <p className="mt-4 text-xs sm:text-sm text-foreground/50">
                Data collected from {dataSource}
              </p>
            )}

            <p className="mt-2 text-sm sm:text-base text-foreground/65">
              Read the full breakdown{" "}
              <Link
                href="/articles/world-cup-pathways"
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