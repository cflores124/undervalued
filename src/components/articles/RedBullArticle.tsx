import Image from "next/image";
import CinematicReveal from "@/components/ui/CinematicReveal";
import RedBullInteractive from "@/components/features/RedBullInteractive";

const description = (
  <>
    An <strong>analytical exploration</strong> of how Formula 1&apos;s pursuit
    of marginal gains mirrors the strategy behind Red Bull&apos;s global brand.
    Scroll to explore the interactive tire degradation simulator.
  </>
);

export default function RedBullArticle() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl">
        <main>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            How did Red Bull Turn Formula 1 into a Competitive Advantage?
          </h1>

          <div className="relative mt-4 max-w-3xl">
            <CinematicReveal
              className="relative"
              delay={0.5}
              y={10}
              duration={0.55}
              stagger={0.12}
            >
              <p className="text-base sm:text-lg leading-relaxed text-foreground/80">
                {description}
              </p>
            </CinematicReveal>
          </div>

          <div className="mt-8 sm:mt-10">
            <div className="mx-auto h-px w-[90%] bg-[color-mix(in_oklab,var(--foreground)_12%,transparent)]" />
          </div>

          <div className="mt-8 grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_420px]">
            <CinematicReveal
              delay={0.75}
              y={12}
              duration={0.6}
              className="order-1 lg:order-2 lg:sticky lg:top-24"
            >
              <aside>
                <figure className="space-y-3">
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    <Image
                      src="/red-bull-racing-1.jpg"
                      alt="Oracle Red Bull Racing Formula 1 car"
                      width={900}
                      height={1100}
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>

                  <figcaption className="text-xs leading-relaxed text-foreground/60">
                    Image of Max Verstappen via cnn.com
                  </figcaption>
                </figure>
              </aside>
            </CinematicReveal>

            <CinematicReveal
              delay={0.15}
              stagger={0.08}
              duration={0.7}
              y={14}
              className="
                order-2 lg:order-1
                prose prose-lg max-w-3xl
                dark:prose-invert
                space-y-6 md:space-y-7
                prose-p:my-0 prose-p:leading-[1.9]
                prose-p:text-foreground/80
                prose-headings:text-foreground
                prose-strong:font-semibold prose-strong:text-foreground
              "
            >
              <p>
                <span className="float-left mr-2 mt-1 text-6xl sm:text-7xl font-bold leading-[0.82]">
                  R
                </span>
                ed Bull is an energy drink company founded in the mid-1980s and
                officially launched in 1987. The company&apos;s mission is
                simple: <strong>&quot;Giving wiiings to people and ideas&quot;</strong>.
              </p>

              <p>
                In its company history, Red Bull describes founder Dietrich
                Mateschitz as creating not just a product, but a{" "}
                <strong>&quot;unique marketing concept.&quot;</strong> What
                began as an energy drink evolved into a global ecosystem of
                sports, athletes, events, and entertainment.
              </p>

              <p>
                That strategy translated into significant growth. In 2025, Red
                Bull generated <strong>€12.196 billion in revenue</strong>, up
                8.6% from 2024, while selling{" "}
                <strong>13.969 billion cans</strong> globally. More importantly,
                it built a brand identity associated with speed, pressure,
                precision, and competition.
              </p>

              <p>
                Few sports embody those qualities more completely than Formula
                1.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                Why is Formula 1 the perfect investment?
              </h2>

              <p>
                Part of the answer was personal. Founder Dietrich Mateschitz
                was a passionate fan who wanted to build a winning team and car. But
                the investment is also strategic. Formula 1 places Red Bull
                inside one of the world&apos;s most competitive and
                technologically advanced environments, where the pursuit of
                performance unfolds on a <strong>global stage</strong>.
              </p>

              <p>
                That visibility matters. In 2025, Formula 1 reached{" "}
                <strong>827 million fans</strong> globally, generated{" "}
                <strong>114.5 million social media followers</strong>, and
                attracted <strong>6.7 million total season attendees.</strong>{" "}
                Nearly <strong>43%</strong> of the fan base is{" "}
                <strong>under the age of 35</strong>, aligning closely with Red
                Bull&apos;s target demographic.
              </p>

              <p>
                At the same time, Red Bull Racing is a dominant figure in the
                sport itself. Between Sebastian Vettel&apos;s four consecutive
                Drivers&apos; Championships from 2010 to 2013 and Max
                Verstappen&apos;s four from 2021 to 2024, Red Bull captured{" "}
                <strong>six Constructors&apos; Championships</strong> across
                the two eras. The peak came in 2023, when Red Bull won 21 of 22
                races and finished with a <strong>95.5% win rate</strong>.
              </p>

              <p>
                Yet Formula 1 remains a sport of microscopic margins. Just two
                years earlier, Verstappen secured the 2021 Drivers&apos;
                Championship by only <strong>8 points</strong> over Lewis
                Hamilton, while the title-deciding Abu Dhabi Grand Prix was
                separated by just <strong>2.256 seconds</strong> after 58 laps,
                illustrating how championships are often decided in the margins.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                How fine are the margins in Formula 1?
              </h2>

              <p>
                Formula 1 teams operate in a sport where small advantages
                compound over time. A loss of just{" "}
                <strong>0.10 seconds per lap</strong> may seem insignificant,
                but across a 58-lap race it compounds into nearly{" "}
                <strong>six seconds</strong>, enough to change the outcome of a
                race.
              </p>

              <p>
                This is what makes Formula 1 unique. Small performance
                differences <strong>rarely remain small</strong>. Over a
                season, they compound into meaningful strategic separation
                capable of determining podiums, points finishes, and
                championship outcomes.
              </p>

              <p>
                These margins are not simply the result of luck, but the
                accumulation of factors that create separation, including
                qualifying positions, inherent car pace, aerodynamic efficiency,
                pit stop timing, and tire degradation. To succeed in Formula 1,
                teams must execute perfectly across all of these categories
                simultaneously.
              </p>

              <p>
                The 2021 Abu Dhabi Grand Prix provides a clear example. While
                championships are ultimately decided by points and seconds,
                those outcomes are often shaped by underlying factors such as{" "}
                <strong>tire degradation</strong> and{" "}
                <strong>race strategy</strong>.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                From Tire Degradation to Titles
              </h2>

              <p>
                Tire degradation occurs as tires repeatedly interact with the
                track surface, generating heat and gradually losing performance.
                Excessive heat reduces grip through{" "}
                <strong>thermal degradation</strong>, while{" "}
                <strong>wear degradation</strong> removes rubber over time.
                Ultimately, these processes reduce braking performance, cornering
                stability, and traction.
              </p>

              <p>
                The Abu Dhabi Tire Degradation Simulator below estimates how age, speed
                variation, track temperature, and fuel influence tire degradation throughout a
                stint. Together, these four factors serve as simple proxies for thermal
                degradation, wear degradation, and vehicle weight, helping illustrate how tire
                performance evolves over time.
              </p>

              <p>
                The model then outputs{" "}
                <strong>Expected Pace Loss per Lap</strong>, which estimates
                the tire-related performance penalty on a given lap, and{" "}
                <strong>Cumulative Pace Loss</strong>, which approximates
                accumulated degradation exposure across a stint. That
                distinction became critical on Lap 58 of the 2021 Abu Dhabi
                Grand Prix, when a late safety car reduced the championship
                fight between Lewis Hamilton and Max Verstappen to a single lap.
              </p>

              <p>
                Hamilton&apos;s tires remained functional entering Lap 58, but
                after more than 40 laps and an extended battle with Sergio
                Pérez, they carried substantially less grip than
                Verstappen&apos;s fresh softs. The model estimates{" "}
                <strong>3.390 seconds</strong> of cumulative degradation
                exposure for Hamilton compared with just{" "}
                <strong>0.244 seconds</strong> for Verstappen, whose tires had
                only recently been fitted under the safety car.
              </p>

              <p>
                While based on rough estimates of tire condition, the simulator illustrates
                that the final restart was not decided by track position alone. Hamilton
                defended on worn hard tires while Verstappen attacked on fresh softs, turning
                a marginal advantage into a championship-winning edge.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                Tying it all together:
              </h2>

              <p>
                Formula 1 ultimately represents the same philosophy that defines
                Red Bull&apos;s broader marketing strategy:{" "}
                <strong>accumulated advantages create separation.</strong>
              </p>

              <p>
                A Formula 1 car is not built around a single overwhelming
                strength, but the optimization of countless small systems
                working together. Each contributes marginal gains that
                eventually compound into race-winning performance.
              </p>

              <p>
                Red Bull&apos;s marketing ecosystem operates in a remarkably
                similar way.
              </p>

              <p>
                Rather than relying on traditional advertising alone, Red Bull
                built a global ecosystem spanning Formula 1, soccer, esports,
                extreme sports, and more. Individually, these investments may
                generate limited direct profit, but together they create brand
                visibility, cultural identity, and continuous global exposure.
              </p>

              <p className="mt-4 text-xs sm:text-sm text-foreground/50">
                Data collected from Formula1.com and FastF1.
              </p>
            </CinematicReveal>
          </div>

          <CinematicReveal
            className="mt-16 text-center"
            delay={0.2}
            y={10}
            duration={0.55}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              Abu Dhabi Tire Degradation Simulator
            </h2>
          </CinematicReveal>

          <CinematicReveal
            className="mt-12"
            delay={0.3}
            y={12}
            duration={0.6}
          >
            <RedBullInteractive />
          </CinematicReveal>

          <CinematicReveal
            className="mx-auto mt-6 max-w-3xl space-y-6 text-center"
            delay={0.4}
            y={10}
            duration={0.55}
            stagger={0.12}
            >
            <p className="text-sm sm:text-base leading-relaxed text-foreground/75">
                This model estimates how tire age, track temperature, speed variation,
                and fuel load influence lap-level pace loss throughout an Abu Dhabi stint.
                Expected pace loss is calculated from a historical track-tire degradation
                baseline and adjusted through age, temperature, stress, and fuel effects.
                As a tire remains on track longer, cumulative pace loss increases,
                illustrating how small performance differences can compound into the
                championship-deciding margins that define Formula 1.
            </p>

            <div className="flex flex-col items-center gap-4">
                <p className="text-sm text-foreground/70">
                Explore the supporting evidence behind this analysis.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                <a
                    href="/formula-1-tire-degradation-modeling.pdf"
                    download
                    className="
                    inline-flex items-center justify-center
                    rounded-full
                    border border-neutral-300
                    bg-neutral-100
                    px-5 py-2.5
                    text-sm font-medium
                    transition
                    hover:bg-neutral-200
                    dark:border-white/15
                    dark:bg-white/10
                    dark:hover:bg-white/15
                    "
                >
                    Mathematical Modeling
                </a>
                </div>
            </div>
          </CinematicReveal>

          <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.04),transparent_60%)]" />
        </main>
      </div>
    </section>
  );
}
