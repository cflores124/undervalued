import Image from "next/image";
import CinematicReveal from "@/components/ui/CinematicReveal";
import WorldCupSwotInteractive from "@/components/features/WorldCupSwotInteractive";

const description = (
  <>
    An <strong>analytical framework</strong> of World Cup championship pathways, 
    environmental pressures, and the identities shaping the 
    2026 contenders. Scroll to explore the interactive{" "}
    <strong>contender SWOT tool</strong>.
  </>
);

export default function WorldCupArticle() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl">
        <main>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            What actually determines who wins the World Cup?
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
                      src="/worldcup.jpg"
                      alt="Athlete lifting the World Cup"
                      width={900}
                      height={1100}
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>

                  <figcaption className="text-xs leading-relaxed text-foreground/60">
                    Odd Andersen / AFP via Getty Images
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
                  W
                </span>
                hat can past tournaments reveal about how the 2026 FIFA World Cup might unfold?
                Do World Cup winners emerge by chance or by choice?
              </p>

              <p>
                The FIFA World Cup is the most prestigious tournament in soccer and is widely 
                considered the biggest sporting event in the world. Since 1930, roughly{" "}
                <strong>80</strong> national teams have competed for the trophy, yet only{" "}
                <strong>8</strong> have ever won it.
              </p>

              <p>
                Looking back at recent international history through the lens of Elo ratings,
                a clear trend surfaces. World Cup contenders are typically the product of{" "}
                <strong>sustained multi-year growth</strong> that places them among the
                world&apos;s elite.
              </p>

              <p>
                Yet reaching that tier alone is not enough. World Cup champions must{" "}
                <strong>peak</strong> under the tournament&apos;s pressure.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                What have World Cup winners historically looked like?
              </h2>

              <p>
                To understand what World Cup winners have looked like in the past, it is 
                important to understand the World Football Elo Ratings system. Elo{" "}
                <strong>measures team strength</strong> and updates after every match based on
                opponent quality, match importance, and game result, allowing teams to be
                tracked over time.
              </p>

              <p>
                When tracking the Elo ratings of World Cup winners following the 2002 tournament,
                a distinct championship profile begins to take shape. Champions enter the tournament 
                with a strong <strong>upward momentum</strong> and reach their peak 
                performance when it matters most.
              </p>

              <p>
                These momentum periods can be viewed as <strong>build-up phases</strong>:
                extended stretches of sustained growth despite short-term fluctuations in form
                or results. Some develop gradually over nearly a decade, like{" "}
                <strong>Germany from 2003 to 2013</strong>, while others accelerate rapidly
                within a single cycle, like{" "}
                <strong>Argentina from 2018 to 2021</strong>.
              </p>

              <p>
                This pattern is evident in the four most recent World Cup champions: Spain,
                Germany, France, and Argentina. Each built sustained momentum before peaking
                at the tournament, improving roughly{" "}
                <strong>180 to 210 Elo points</strong> and entering the World Cup within a{" "}
                <strong>1975 to 2105 rating range</strong>.
              </p>

              <p>
                Altogether, this reveals a clear pattern of winning through sustained growth and
                momentum over an extendended period of time.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                How do today&apos;s contenders shape up?
              </h2>

              <p>
                At the end of 2025, Spain, Argentina, France, England, Colombia, and Brazil remain 
                the world&apos;s leading contenders for the 2026 World Cup. Each sits within, or
                above, the historical championship Elo range, but enters through a
                different momentum profile.
              </p>

              <p>
                Spain most closely resembles the ideal historical champion. Since 2022, it has
                gained <strong>176 Elo points</strong>, won the 2024 Euros, and entered 2026 as
                the world&apos;s top-ranked team. Its trajectory mirrors the sustained upward
                momentum shown by recent champions entering their tournament peak.
              </p>

              <p>
                England and Colombia represent a different contender profile. Both reached
                their continental finals in 2024 and continue to trend upward, with England
                gaining <strong>76 Elo points</strong> since 2022 and Colombia gaining{" "}
                <strong>102</strong> since 2020. Like Italy in 2006, they appear
                strong enough to win, but need to reach another level during the tournament
                itself.
              </p>

              <p>
                Argentina, France, and Brazil remain <strong>elite contenders</strong>, but
                their profiles differ from recent champions. Rather than entering with rising
                momentum, all three carry declining or flatter Elo trajectories, including{" "}
                <strong>Brazil&apos;s 171-point drop</strong> since the end of 2021.
              </p>

              <p>
                In the end, positioning heading into the tournament sets the stage, but converting
                form into tournament success is what defines a champion.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                How do contenders become champions?
              </h2>

              <p>
                International soccer exists in a uniquely constrained environment. National teams 
                assemble intermittently with limited preparation time, while managers, players, and
                tactical systems constantly change, making consistent winning patterns
                difficult to identify.
              </p>

              <p>
                Recent World Cup champions have reached the same outcome through different
                pathways. Italy combined adaptability, control, and penalty resilience in
                2006, France created separation through short bursts in 2018, and Argentina
                built leads before repeatedly surviving high-leverage moments in 2022.
              </p>

              <p>
                To better understand how teams navigate the World Cup environment, five
                factors were identified: <strong>Control/Suppression</strong>,{" "}
                <strong>Volatility/Bursts</strong>, <strong>Late-Game Execution</strong>,{" "}
                <strong>Extended-Game Survival</strong>, and{" "}
                <strong>Game-State Protection</strong>. Built from situational match metrics,
                they capture how teams create, protect, and sustain winning pathways under
                pressure.
              </p>

              <p>
                For 2026, this framework was applied to each contender&apos;s most recent
                continental tournament to identify its strengths, weaknesses, opportunities,
                and threats within a World Cup-like environment. The interactive SWOT tool
                below highlights each team&apos;s most viable pathway to winning while recognizing
                that tournament conditions can still reshape outcomes.
              </p>

              <p>
                Ultimately, these <strong>five factors</strong> show that there is no single
                pathway to a World Cup title and provide a framework for understanding how
                different contenders can convert their potential into a championship.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                Tying it all together:
              </h2>

              <p>
                The World Cup offers competitors and viewers very few certainties. Teams are placed
                on the biggest stage with a set of problems and no clear solutions.
              </p>

              <p>
                Across the last five tournaments, <strong>64.44%</strong> of matches
                were decided by one goal or less, while{" "}
                <strong>37.33%</strong> of knockout matches extended to extra time or
                penalties. On average, a championship team was forced into{" "}
                <strong>1.4</strong> of these extended knockout matches, meaning the
                margins for success are razor-thin.
              </p>

              <p>
                Ultimately, there is no single formula for winning the World Cup. What matters
                is a team&apos;s ability to build momentum over time and convert it into a
                tournament peak, regardless of how peak performance is executed.
              </p>

              <p className="mt-4 text-xs sm:text-sm text-foreground/50">
                Data collected from World Football Elo Ratings and FBref.com
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
              2026 Contender SWOT Analysis
            </h2>
          </CinematicReveal>

          <CinematicReveal
            className="mt-16"
            delay={0.3}
            y={12}
            duration={0.6}
          >
            <WorldCupSwotInteractive />
          </CinematicReveal>

          <CinematicReveal
            className="mx-auto mt-6 max-w-3xl space-y-6 text-center"
            delay={0.4}
            y={10}
            duration={0.55}
            stagger={0.12}
            >
            <p className="text-sm sm:text-base leading-relaxed text-foreground/75">
                This section evaluates each contender through a SWOT framework built
                around tournament identity. Rather than searching for a universal
                formula, the analysis isolates how each team is most likely to win,
                where it is vulnerable, and which match conditions could ultimately
                decide its pathway through the World Cup.
            </p>

            <div className="flex flex-col items-center gap-4">
                <p className="text-sm text-foreground/70">
                Explore the supporting evidence behind this analysis.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                <a
                    href="/historical-world-cup-winners.pdf"
                    download
                    className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 px-5 py-2.5 text-sm font-medium transition hover:bg-neutral-200 dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/15"
                >
                    Historical Trends
                </a>

                <a
                    href="/five-factors-pathway-modeling.pdf"
                    download
                    className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 px-5 py-2.5 text-sm font-medium transition hover:bg-neutral-200 dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/15"
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