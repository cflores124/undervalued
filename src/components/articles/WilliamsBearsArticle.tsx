import Image from "next/image";
import CinematicReveal from "@/components/ui/CinematicReveal";
import WilliamsBearsInteractive from "@/components/features/WilliamsBearsInteractive";

const description = (
  <>
    A <strong>structural breakdown</strong> of how Caleb Williams and the 2025
    Bears thrived in <strong>high-volatility fourth-quarter environments</strong> and repeatedly
    turned <strong>broken plays into win probability swings</strong>. Scroll to the bottom for an 
    interactive breakdown of the Bears’ defining fourth-quarter drive.
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
                hat does it actually mean to <strong>“break” win probability</strong>, and how
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
                However, looking at the season in its entirety, a clearer pattern
                emerges. These were not controlled comebacks built on steady
                execution; they were <strong>high-stakes gambles</strong> where their success
                was defined by their ability to survive in volatile,
                high-leverage environments. These outcome rested heavily
                on Caleb Williams&apos; ability to <strong>create under pressure</strong>.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                How does the fourth quarter change game dynamics?
              </h2>

              <p>
                In the NFL, the fourth quarter operates in a <strong>different domain</strong> than 
                the rest of the game. Time is compressed, possessions are
                limited, the cost of failure sharply increases, and every play
                carries an <strong>element of finality</strong>.
              </p>

              <p>
                The Bears didn&apos;t just play in this environment; they found a way to <strong>live in it</strong>. 
                In 2025, their average <em>absolute</em> change in <strong>win probability (WPA, or win probability added)</strong> per 
                possession in the fourth quarter was <strong>13.97%</strong>, well above the league average of <strong>8.57%</strong>, 
                marking the highest level of volatility among all 32 teams. This reflects how large the swings were on each possession, regardless of direction. 
                At the same time, they averaged a <em>net</em> change of <strong>6.42%</strong> per possession, meaning they ranked <strong>2nd in execution</strong>, 
                consistently turning those swings in their favor.
              </p>

              <p>
                On a granular level, the momemtum shifts are equally as dramatic. The
                average change in win probability per play rose from <strong>2.4%</strong> in the
                first three quarters to <strong>3.7%</strong> in the fourth, increasing the <strong>impact of every play</strong>. 
                In close games, that number spiked to <strong>4.66%</strong>, where a single snap carried even more 
                game defining impact. The volatility followed suit: the standard deviation of average absolute chnage in WPA per play jumped 
                from <strong>2.54%</strong> early in the game to a staggering <strong>6.19%</strong> in 
                the fourth quarter, expanding the range of outcomes on each play.
              </p>

              <p>
                For the Bears, this was akin to <strong>high-stakes gambling</strong>, where each
                play in the fourth quarter carried a disproportionate impact and a single possession
                could drastically swing win probability. While the goal was to win early and absorb
                mistakes over time, keeping the game even remotely close allowed them to capitalize 
                on <strong>play creation</strong> that sustained drives and <strong>execution</strong> that converted those moments into
                actual wins.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                What separates a successful comeback from a failed recovery?
              </h2>

              <p>
                The separation between a successful comeback and a failed recovery
                came down to a specific sequence: <strong>pressure disrupted
                the initial play</strong>, forcing the offense into a <strong>“broken state.”</strong> The 
                game then hinged on whether Caleb could create a positive play in that 
                moment of disruption.
              </p>

              <p>
                In successful comebacks, Williams repeatedly used his legs 
                to <strong>rescue drives that should have ended</strong>. Against 
                the Raiders, Caleb escaped pressure for a 12-yard scramble (+6.7% WPA) before
                completing a 17-yard pass to extend the game-winning drive. In
                the final minutes of the game against the Bengals, a third-and-long
                scramble (+6.5% WPA) not only prevented a <strong>drive-ending play</strong> but
                also set up a 58-yard touchdown that swung win probability by
                over <strong>50%</strong>.
              </p>

              <p>
                Conversely, in failed recoveries, the <strong>initial play-creation
                never materialized</strong>. Against the Vikings in Week 1, pressure led
                to a sack (-5.1% WPA), which was then followed by consecutive
                incompletions that ended the drive. Against the Ravens, an
                interception in the fourth immediately flipped the game
                (-11.8% WPA). In each case, the disruption held and the play ended
                at the point of pressure. Specifically, disruption alone does
                not result in a win; it is when that disruption ends the play and the Bears have no opportunity to create.
              </p>

              <p>
                Ultimately, <strong>13 of the Bears&apos; 20 games were decided late</strong>;
                they won seven and lost six.
              </p>

              <p>
                The distinction isn&apos;t about play design; it&apos;s about <strong>surviving that inital point of disruption</strong>.
                If the offense survives the initial breakdown through Caleb&apos;s ability to scramble or extend plays,
                the drive is restored, allowing for execution that produces meaningful offensive outcomes. If not,
                the drive ends at the point of disruption, resulting in a stalled possession.
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
                on the run, and threw across his body to Rome Odunze for the
                first down. While the play added 7.8% to their win probability,
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
                Caleb Williams <strong>saved a 4th-and-8 that should have failed</strong>,
                creating the opportunity for the offense to return to structure and execute.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                Tying it all together:
              </h2>

              <p>
                The Bears didn&apos;t break win probability through a single edge, but through a volatile environment that enabled fourth-quarter comebacks. 
                Within that environment, creation during disruption laid the foundation for execution that mattered most in <strong>high-leverage moments</strong>.
              </p>

              <p>
                This created an environment that was both powerful and fragile.
                It enabled a miraculous comeback in Week 16 and the Wild Card games against the Packers, but it also led to a
                devastating collapse in the Divisional round against the Rams. Fourth-quarter
                football isn&apos;t just about perfect execution, but about <strong>survival through broken plays</strong>
                long enough for execution to matter.
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