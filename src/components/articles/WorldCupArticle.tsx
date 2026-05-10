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
                <strong>peak under pressure</strong>.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                What have World Cup winners historically looked like?
              </h2>

              <p>
                To understand what World Cup winners have historically looked like, it is
                essential to understand the World Football Elo Ratings system. Originally
                developed by Arpad Elo for chess and later adapted for soccer, the model
                updates after every match based on opponent strength, match importance,
                home-field advantage, and goal differential to track changes in team
                strength over time.
              </p>

              <p>
                When tracking the Elo ratings of World Cup winners following the 2002 tournament,
                a pattern emerges. Champions enter the tournament with a strong{" "}
                <strong>upward momentum</strong> and reach their peak when it matters most.
              </p>

              <p>
                These momentum periods can be understood as build-up phases: extended
                stretches in which a national team experiences sustained long-term growth
                despite short-term fluctuations in form, environment, or results. Some develop
                gradually over nearly a decade, like Germany from{" "}
                <strong>2003 to 2013</strong>, while others accelerate rapidly within a
                single cycle, like Argentina from <strong>2018 to 2021</strong>.
              </p>

              <p>
                This pattern is best illustrated by the four most recent World Cup champions:
                Spain, Germany, France, and Argentina. Each built sustained momentum before
                converting it into a tournament peak. Notably, all improved by roughly{" "}
                <strong>180 to 210 Elo points</strong> during their build-up phase and entered
                the tournament with Elo ratings between <strong>1975 and 2105</strong> at the
                end of the preceding year, establishing a consistent range associated with
                recent champions.
              </p>

              <p>
                Altogether, this reveals a clear pattern of winning through sustained growth,
                momentum, and peaking at the right time. The focus now shifts to which 2026
                contenders best match that profile.
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
                England and Colombia occupy a different tier of contender. Both reached the
                final of their continental championship in 2024 and have continued to rise
                steadily, with England gaining <strong>76 Elo points</strong> since 2022 and
                Colombia gaining <strong>102</strong> since 2020. Rather than explosive
                momentum, their profiles more closely resemble 2006 Italy: strong enough to
                win, but dependent on reaching the next level during the tournament itself.
              </p>

              <p>
                Argentina, France, and Brazil represent a different type of threat. Argentina
                remains the reigning World Cup champion and a back-to-back Copa América winner,
                France continues to consistently reach the final stages of major tournaments,
                and Brazil still possesses one of the sport&apos;s highest talent ceilings. Yet
                all three enter 2026 with declining momentum profiles, including Brazil&apos;s{" "}
                <strong>171-point Elo drop</strong> since the end of 2021, suggesting sustained
                elite status rather than the rising trajectory typically associated with recent
                champions.
              </p>

              <p>
                In the end, positioning heading into the tournament sets the stage, but converting
                form into tournament success is what defines a champion. The question is how that
                conversion actually happens.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                How do contenders become champions?
              </h2>

              <p>
                International soccer operates in a uniquely constrained environment that shapes
                the FIFA World Cup. Unlike club teams, national teams assemble intermittently
                with limited preparation time, yet are expected to perform in high-stakes
                tournaments held only every <strong>two to four years</strong>. Within a single cycle, 
                managers change, players age, rosters evolve, and tactical approaches shift, creating
                a volatile environment where consistent winning patterns are difficult to identify.
              </p>

              <p>
                Looking back, recent World Cup champions have reached the same outcome through
                fundamentally different competitive pathways. Italy won in 2006 through
                adaptability, combining control, late-game execution, extra-time separation,
                and penalty resilience. France in 2018 created separation through short,
                decisive bursts, while Argentina in 2022 built early leads before repeatedly
                surviving high-leverage breakdowns through extra time and penalties.
              </p>

              <p>
                To better understand how teams navigate this environment, five core factors
                were identified: <strong>Control/Suppression</strong>,{" "}
                <strong>Volatility/Bursts</strong>,{" "}
                <strong>Late-Game Execution</strong>,{" "}
                <strong>Extended-Game Survival</strong>, and{" "}
                <strong>Game-State Protection</strong>. Together, these factors use metrics
                such as shots on target per game, goals conceded per game, scoring first,
                extra-time and penalty exposure, and match outcomes to profile a team&apos;s
                competitive identity and pathway to winning.
              </p>

              <p>
                For 2026, this five-factor framework was used to identify each
                contender&apos;s strengths, weaknesses, opportunities, and threats within the
                pressure environment of its most recent continental tournament. The interactive
                SWOT tool below highlights each contender&apos;s most viable pathway to winning
                based on historical performance, while recognizing that tournament
                conditions can still reshape outcomes.
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
                Ultimately, the team that wins the World Cup is not determined by a
                universal formula, but by its ability to turn its unique pathway 
                into <strong>peak form under pressure</strong>.
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