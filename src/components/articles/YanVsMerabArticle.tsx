import Image from "next/image";
import CinematicReveal from "@/components/ui/CinematicReveal";
import YanMerabInteractive from "@/components/features/YanMerabInteractive";

const description = (
  <>
    A <strong>structural breakdown</strong> of how control differential compresses
    or restores Petr Yan&apos;s offense against Merab Dvalishvili. 
    Scroll to the bottom for an <strong>interactive simulator</strong>.
  </>
);

export default function YanVsMerabArticle() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl">
        <main>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            What actually decides Yan vs. Merab?
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
                      src="/yan-merab-1.jpg"
                      alt="Petr Yan vs Merab Dvalishvili grappling exchange"
                      width={900}
                      height={1100}
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>

                  <figcaption className="text-xs leading-relaxed text-foreground/60">
                    Image from Petr Yan vs Merab Dvalishvili I | Zuffa LLC via Getty Images
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
                hat decides a fight between Petr Yan and Merab Dvalishvili? Is it
                damage, volume, or something more structural like{" "}
                <strong>high-pace control pressure</strong>?
              </p>

              <p>
                Across their two meetings, fans saw two variations of the same fight. 
                The first fight was defined by Merab&apos;s sustained wrestling pressure, compressing Yan&apos;s 
                offensive output and leading to a decision victory. In the second fight, Yan&apos;s defensive 
                adjustment broke that pressure, restoring his striking and flipping the outcome.
              </p>

              <p>
                Through this lens, the structural hinge of this matchup is <strong>wrestling&apos;s control of the fight</strong>, 
                shaping when offense is created, sustained, or taken away entirely.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                How did wrestling impact each fight?
              </h2>

              <p>
                In the pair&apos;s first meeting, Merab attempted{" "}
                <strong>49 takedowns</strong>, landing <strong>11</strong>, and over
                five rounds he accumulated <strong>6:53 of control time</strong>. 
                Comparing this to Yan&apos;s 1:50 of control time the result was a{" "}
                <strong>net control differential of 5:03</strong>. This accounted
                for roughly <strong>79%</strong> of the fight&apos;s time under control, and 
                Yan&apos;s striking output reflected that level of sustained
                pressure. Throughout the fight, Yan only landed{" "}
                <strong>75 significant strikes</strong>, just{" "}
                <strong>3.0 per minute</strong>, which is well below his typical
                pace. Additionally, the rounds in which Merab controlled the most time also
                produced some of Yan&apos;s lowest strike totals (rounds 3 &amp; 5).
              </p>

              <p>
                However, dynamics shifted in the second fight. Merab&apos;s number of takedown attempts
                dropped to <strong>29</strong>, and his success rate fell from{" "}
                <strong>22%</strong> to just <strong>6%</strong>, producing only{" "}
                <strong>two completed takedowns</strong>. The{" "}
                <strong>net control differential</strong> shrank to just{" "}
                <strong>2:17</strong>, less than half of the first fight&apos;s gap.
                Freed from this sustained control, Yan&apos;s offense rebounded. This
                time around, Yan was able to land{" "}
                <strong>139 significant strikes</strong> and increased his output
                from <strong>3.0 to 5.56 per minute</strong>, nearly doubling his
                rate.
              </p>

              <p>
                Across both bouts, the pattern is consistent: as the{" "}
                <strong>net control differential expands</strong>, Yan&apos;s offense
                contracts, and as the{" "}
                <strong>net control differential contracts</strong>, Yan&apos;s offense
                expands.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                Why does net control differential matter?
              </h2>

              <p>
                Control time alone doesn&apos;t fully explain the dynamic of the fight.
                The reason it matters is because Merab&apos;s high-paced wrestling
                pressure creates an environment where energy is constantly being
                expended. During fights, Merab layers his takedown attempts with
                shots from stance, entries off the jab, and chain wrestling along
                the fence. This forces his opponents into repeated defensive cycles,
                where offensive rhythm is never allowed to be established because
                fighters are constantly defending an onslaught of takedown attempts.
              </p>

              <p>
                Once control is gained, energy depletion is doubled as Merab
                prioritizes exhausting his opponent rather than chasing quick
                submissions. Merab accomplishes this by placing his upper body
                across the back of an opponent&apos;s head and shoulders, forcing
                them to carry his weight while attempting to stand, fighting hands,
                and trying to escape.
              </p>

              <p>
                The result is sustained <strong>isometric tension</strong> across
                the posterior chain (neck, back, hips, and legs) while his opponent
                attempts to escape. Over time, the result is cumulative fatigue.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                How can fighters eliminate this threat?
              </h2>

              <p>
                In the second fight, Yan addressed this problem through{" "}
                <strong>defensive efficiency</strong>. Instead of attempting to
                eliminate control pressure, he turned into it. This is because
                Merab&apos;s system works like quicksand; the more you fight it, the more
                it pulls you in. Rather than defending takedowns purely in open
                space, Yan moved toward the fence, where he could utilize it as 
                leverage to stay upright and concentrate on posture, reversing weight
                distribution, and hand fighting. By doing this, Yan transferred
                energy expenditure back to Merab, as it then became Merab&apos;s responsibility to
                pull Yan down to the ground.
              </p>

              <p>
                This adjustment reduced the muscular load required to defend while allowing Yan
                to re-establish his jab-to-overhand-right combination with full
                kinetic sequencing. This forced Merab to respect damage upon entry,
                further slowing down his pace of wrestling exchanges and narrowing
                the net control differential.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-foreground">
                Tying it all together:
              </h2>

              <p>
                Viewed this way, Yan vs. Merab is not simply striker versus
                wrestler. It is a contest over who controls the fight&apos;s{" "}
                <strong>energy economy</strong>.
              </p>

              <p>
                Merab wins when he expands the control gap and forces Yan into
                repeated defensive cycles that accumulate fatigue. Yan wins when he
                compresses that gap, reverses energy expenditure, and preserves
                enough energy for his striking to dictate the fight.
              </p>

              <p>
                In this matchup, control time is more than a statistic; it is the
                physical expression of <strong>pressure, fatigue, and positional dominance,</strong>{" "}
                and the fighter who controls that differential ultimately controls
                the fight.
              </p>

              <p className="mt-4 text-xs sm:text-sm text-foreground/50">
                Data collected from UFCStats.com
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
              Control Differential Simulator: Merab&apos;s Wrestling Pressure vs. Yan&apos;s Offense
            </h2>
          </CinematicReveal>

          <CinematicReveal
            className="mt-16"
            delay={0.3}
            y={12}
            duration={0.6}
          >
            <YanMerabInteractive />
          </CinematicReveal>

          <CinematicReveal
            className="mx-auto mt-6 max-w-3xl space-y-4 text-center"
            delay={0.4}
            y={10}
            duration={0.55}
            stagger={0.12}
          >
            <p className="text-sm sm:text-base leading-relaxed text-foreground/75">
              This model estimates how wrestling pressure affects Petr Yan&apos;s
              offense. Expected control time is calculated from takedown attempts,
              success rate, and average control time per successful takedown over a
              25-minute fight. As Merab&apos;s control share increases, Yan spends more
              time defending and less time striking. The model therefore reduces
              Yan&apos;s expected strike output as both wrestling threat and control
              differential grow.
            </p>

            <div className="flex flex-col items-center gap-4">
              <p className="text-center text-sm text-foreground/70">
                Take a look at the full mathematical breakdown here.
              </p>

              <a
                href="/yan-merab-modeling.pdf"
                download
                className="
                  inline-flex items-center justify-center
                  rounded-full
                  border border-neutral-300
                  bg-neutral-100
                  px-4 py-2
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
          </CinematicReveal>

          <div
            className="pointer-events-none fixed inset-0 -z-10
                       bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.04),transparent_60%)]"
          />
        </main>
      </div>
    </section>
  );
}