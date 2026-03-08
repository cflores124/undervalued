import Link from "next/link";
import CinematicReveal from "@/components/ui/CinematicReveal";
import InsightFlipCard from "@/components/insights/InsightFlipCard";
import merabInsight from "@/data/merab_control_suppression.json";

export default function MerabControlSuppressionInsight() {
  return (
    <section className="w-full">
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
        High-Paced Control Pressure
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
            <strong>Control Differential vs Strike Suppression.</strong> A concise visual
            note isolating how positional control narrows offensive freedom and shapes
            striking output.
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
            <InsightFlipCard insight={merabInsight} />
          </div>

          <div className="max-w-2xl self-center">
            <p className="text-base sm:text-lg leading-relaxed text-foreground/78">
              Control in MMA is a broad statistic. It can demonstrate dominance,
              targeted submission attempts, ground and pound opportunities, and
              more. For Merab, control is not just about holding position, but
              about shaping what the opponent is able to do next. As the control
              gap grows in Merab’s favor, his opponents' striking freedom tends
              to narrow, turning wrestling pressure into a form of offensive
              suppression rather than a scoring category.
            </p>

            <p className="mt-4 text-sm sm:text-base text-foreground/65">
              Read the full breakdown{" "}
              <Link
                href="/articles/yan-vs-merab"
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