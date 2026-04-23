import Image from "next/image";
import CinematicReveal from "@/components/ui/CinematicReveal";
import WilliamsBearsInteractive from "@/components/features/WilliamsBearsInteractive";

const description = (
  <>
    An <strong>explanatory analysis</strong> of how Caleb Williams and the 2025
    Bears thrived in <strong>high-volatility fourth-quarter environments</strong>. 
    Scroll to the bottom for an interactive breakdown of the Bears&apos; defining 
    fourth-quarter drive.
  </>
);

export default function WilliamsBearsArticle() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl">
        <main>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            How did Caleb Williams and the 2025 Bears break win probability?
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
                      src="/williams-bears-1.jpg"
                      alt="Caleb Williams in the pocket against the Packers"
                      width={900}
                      height={1100}
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>

                  <figcaption className="text-xs leading-relaxed text-foreground/60">
                    Caleb Williams during the Bears&apos; Wild Card game | IMAGN IMAGES via Reuters Connect
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
                hat does it mean to <strong>“break” win probability</strong>, and how
                did the Bears consistently create that effect throughout the 2025
                NFL season?
              </p>

              <p>
                In 2025, the Chicago Bears recorded <strong>seven comeback wins within
                the final two minutes</strong> of game time. They became known as the
                “Cardiac Bears,” a team that defied the odds even when their win
                probability dipped as low as 4%.
              </p>

              <p>
                However, looking at the season in its entirety, a clear pattern
                emerges. These were not controlled comebacks built on steady
                execution; they were <strong>high-stakes gambles</strong> where their success
                was defined by their ability to survive in volatile environments. 
              </p>

              <p>
                To understand what shaped these fourth-quarter outcomes, this analysis focuses on{" "}
                <strong>win probability added (WPA)</strong>, a metric that captures how each
                play shifts a team&apos;s chances of winning, both positively and negatively.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                How does the fourth quarter change game dynamics?
              </h2>

              <p>
                In the NFL, the fourth quarter operates in a <strong>different domain</strong> than 
                the rest of the game. Time is compressed, possessions are
                limited, and the cost of failure <strong>sharply increases</strong>.
              </p>

              <p>
                The Bears didn&apos;t just play in this environment; they found a way to{" "}
                <strong>live in it</strong>. In 2025, their average{" "}
                <strong>absolute WPA per possession</strong> in the fourth quarter was{" "}
                <strong>13.97%</strong>, well above the league average of{" "}
                <strong>8.57%</strong>. This captures the magnitude of win probability swings on each possession, 
                regardless of direction, and marked the highest level of volatility among all 32 teams. At the same time, 
                they averaged a <strong>net WPA of 6.42%</strong>{" "}
                per possession, ranking them <strong>2nd</strong> in execution, consistently 
                turning those swings in their favor.
              </p>

              <p>
                On a granular level, the momentum shifts are equally as dramatic. The average{" "}
                <strong>absolute WPA per play</strong> rose from 2.4% in the
                first three quarters to 3.7% in the fourth, increasing the
                impact of every play. In close games, that number spiked to
                4.66%, where a single snap carried even more game-defining impact.
                The volatility followed suit: the standard deviation of absolute WPA per play
                jumped from 2.54% early in the game to a staggering 6.19% in the fourth quarter,
                expanding the range of outcomes on each play.
              </p>

              <p>
                For the Bears, this was akin to <strong>high-stakes gambling</strong>. Each
                play in the fourth quarter carried a disproportionate impact and a single possession
                could drastically swing win probability. 
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                What separates a successful comeback from a failed recovery?
              </h2>

              <p>
                The separation between a successful comeback and a failed recovery came down to a specific 
                sequence: pressure <strong>disrupted</strong> the initial play, forcing the offense 
                into a "broken state,” <strong>creation</strong> determined whether the drive survived, 
                and <strong>execution</strong> converted that survival into meaningful outcomes.
              </p>

              <p>
                In successful comebacks, Williams repeatedly used his legs 
                to <strong>rescue drives that should have ended</strong>. Against 
                the Raiders, Caleb escaped pressure for a 12-yard scramble (+6.7% WPA) before
                completing a 17-yard pass to extend the game-winning drive. In
                the final minute of the game against the Bengals, a third-and-long
                scramble not only prevented a <strong>drive-ending play</strong> but
                also set up a 58-yard touchdown that swung win probability by
                over <strong>50%</strong>.
              </p>

              <p>
                Conversely, in failed recoveries, the initial play-creation never materialized.
                Against the Vikings in Week 1, pressure led to a sack, which was then
                followed by consecutive incompletions that ended the drive. Against the Ravens,
                an interception (-11.8% WPA) in the fourth immediately flipped the game. In each
                case, the disruption held, and the play ended at the point of pressure, as the only 
                way to definitively stop the Bears was to stop the play itself.
              </p>

              <p>
                The distinction isn&apos;t about play design, but about surviving the point of disruption.
                If the offense survives through Caleb&apos;s ability to scramble or extend plays,
                the drive is restored and execution can follow. If not, the possession stalls there and dies.
              </p>

              <p>
                Ultimately, <strong>13 of the Bears&apos; 20 games were decided late</strong>;
                they won seven and lost six.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                Disruption, Creation, and Execution
              </h2>

              <p>
                The NFL&apos;s “ABSOLUTE CINEMA IN CHICAGO” YouTube feature
                captures this dynamic perfectly during the Bears&apos; Wild Card
                matchup against the Packers.
              </p>

              <p>
                With 5:37 remaining and facing 4th-and-8, the play quickly broke
                down. Caleb rolled left to escape a looping pass rusher, reset
                on the run, and threw across his body to Rome Odunze for a 27-yard conversion. 
                While the play added 7.8% to their win probability,
                its true value was in the fact that it <strong>prevented the drive from ending</strong>.
              </p>

              <p>
                Once that <strong>broken rep was recovered</strong>, the offense returned to
                executing within the structure of Ben Johnson&apos;s system. A
                touchdown to Olamide Zaccheaus and a two-point conversion brought
                the Bears within three. After a defensive stop, the offense
                operated in <strong>perfect rhythm</strong> with a 12-yard pass to Loveland
                (+8.2% WPA) followed by a 23-yard gain by D&apos;Andre Swift
                (+15.5% WPA).
              </p>

              <p>
                This sequence set up the dagger: a <strong>perfectly executed
                screen-and-go</strong> to DJ Moore for a 25-yard touchdown to put the
                Bears ahead (+18.5% WPA). The play followed a <strong>“call it, show it,
                break it”</strong> philosophy, using an earlier screen to Luther Burden
                as bait to manipulate the defense. But that design only mattered because
                Caleb Williams <strong>saved a 4th-and-8 that should have failed</strong>.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                Tying it all together:
              </h2>

              <p>
                The Bears didn&apos;t break win probability through a single edge, but through a volatile environment that enabled fourth-quarter comebacks. 
                Within that environment, creation during disruption laid the foundation for execution that mattered most in <strong>high-leverage moments</strong>.
              </p>

              <p>
                This created a system that was both powerful and fragile. It enabled a
                miraculous comeback in Week 16 and the Wild Card games against the Packers,
                but it also led to a devastating collapse in the Divisional round against the
                Rams. Fourth-quarter football isn&apos;t just about perfect execution, but about{" "}
                <strong>survival through broken plays</strong> long enough for execution to matter.
              </p>

              <p>
                In that environment, the <strong>most valuable play</strong> isn&apos;t the one
                that wins the game; it&apos;s the one that <strong>prevents it from ending</strong>.
              </p>

              <p className="mt-4 text-xs sm:text-sm text-foreground/50">
                Data collected from nflreadr / nflfastR
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
              Wild Card vs Packers: Drive Survival {"->"} Execution
            </h2>
          </CinematicReveal>

          <CinematicReveal
            className="mt-16"
            delay={0.3}
            y={12}
            duration={0.6}
          >
            <WilliamsBearsInteractive />
          </CinematicReveal>

          <CinematicReveal
            className="mx-auto mt-6 max-w-3xl space-y-6 text-center"
            delay={0.4}
            y={10}
            duration={0.55}
            stagger={0.12}
          >
            <p className="text-sm sm:text-base leading-relaxed text-foreground/75">
              This section breaks the Bears&apos; Wild Card comeback into five decisive
              fourth-quarter moments. The bar chart shows how a <strong>single survival play</strong> prevented 
              the drive from ending, allowing Chicago to move from
              <strong> disruption → execution</strong> and reshape its win probability one play at a time.
            </p>

            <div className="flex flex-col items-center gap-4">
              <p className="text-sm text-foreground/70">
                Explore the supporting evidence behind this analysis.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">

                <a
                  href="/bears-successful-comebacks.pdf"
                  download
                  className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 px-5 py-2.5 text-sm font-medium transition hover:bg-neutral-200 dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/15"
                >
                  Successful Comebacks
                </a>

                <a
                  href="/bears-failed-recoveries.pdf"
                  download
                  className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 px-5 py-2.5 text-sm font-medium transition hover:bg-neutral-200 dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/15"
                >
                  Failed Recoveries
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