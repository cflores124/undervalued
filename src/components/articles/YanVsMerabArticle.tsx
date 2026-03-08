import Image from "next/image";
import CinematicReveal from "@/components/ui/CinematicReveal";
import YanMerabInteractive from "@/components/features/YanMerabInteractive";

const description = (
  <>
    A <strong>structural breakdown</strong> of how control differential compresses
    or restores Petr Yan’s offense against Merab Dvalishvili.
  </>
);

export default function YanVsMerabArticle() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl">
        <main className="mt-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            What Actually Decides Yan vs. Merab?
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
                prose prose-invert prose-lg max-w-3xl
                space-y-6 md:space-y-7
                prose-p:my-0 prose-p:leading-[1.9]
                prose-p:text-foreground/80
                prose-strong:font-semibold
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
                Across their two meetings, viewers saw two variations of the same
                fight. In the first fight, Merab’s relentless wrestling compressed
                Yan’s offensive ability, leading Merab to a decision victory. Yan’s
                defensive adjustment in the second fight disrupted that pressure,
                allowing his striking to return and reversing the outcome.
              </p>

              <p>
                The structural hinge of this matchup is{" "}
                <strong>net control differential</strong>.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-white">
                What do the numbers tell us?
              </h2>

              <p>
                In the pair&apos;s first meeting, Merab attempted{" "}
                <strong>49 takedowns</strong>, landing <strong>11</strong>, and over
                five rounds he accumulated <strong>6:53 of control time</strong>{" "}
                compared to Yan’s <strong>1:50</strong>. This resulted in a{" "}
                <strong>net control differential of 5:03</strong>, which accounted
                for roughly <strong>79%</strong> of the fight&apos;s overall control
                time. Yan’s striking output reflected that level of sustained
                pressure. Throughout the fight, Yan landed{" "}
                <strong>75 significant strikes</strong>, just{" "}
                <strong>3.0 per minute</strong>, which is well below his typical
                pace, and the rounds in which Merab controlled the most time also
                produced some of Yan’s lowest strike totals (rounds 3 &amp; 5).
              </p>

              <p>
                Dynamics shifted in the second fight. Merab’s takedown attempts
                dropped to <strong>29</strong>, and his success rate fell from{" "}
                <strong>22%</strong> to just <strong>6%</strong>, producing only{" "}
                <strong>two completed takedowns</strong>. The{" "}
                <strong>net control differential</strong> shrank to just{" "}
                <strong>2:17</strong>, less than half of the first fight’s gap.
                Freed from this sustained control, Yan’s offense rebounded. This
                time around, Yan was able to land{" "}
                <strong>139 significant strikes</strong> and increased his output
                from <strong>3.0 to 5.56 per minute</strong>, nearly doubling his
                rate.
              </p>

              <p>
                Across both bouts, the pattern is consistent: as the{" "}
                <strong>net control differential expands</strong>, Yan’s offense
                contracts, and as the{" "}
                <strong>net control differential contracts</strong>, Yan’s offense
                expands.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-white">
                Why does net control differential matter?
              </h2>

              <p>
                Control time alone doesn’t fully explain the dynamic of the fight.
                The reason it matters is because Merab’s high-paced wrestling
                pressure creates an environment where energy is constantly being
                expended. During fights, Merab layers his takedown attempts with
                shots from stance, entries off the jab, and chain wrestling along
                the fence. This forces his opponents into repeated defensive cycles,
                where offensive rhythm is never allowed to establish because
                fighters are constantly defending an onslaught of takedown attempts.
              </p>

              <p>
                Once control is established, energy depletion is doubled as Merab
                prioritizes exhausting his opponent rather than chasing quick
                submissions. Merab accomplishes this by placing his upper body
                across the back of an opponent&apos;s head and shoulders, forcing
                them to carry his weight while attempting to stand, fighting hands,
                and trying to escape.
              </p>

              <p>
                The result is sustained <strong>isometric tension</strong> across
                the posterior chain (neck, back, hips, and legs) while the defender
                attempts to escape. Over time, the result is cumulative fatigue.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-white">
                How can fighters eliminate this threat?
              </h2>

              <p>
                In the second fight, Yan addressed this problem through{" "}
                <strong>defensive efficiency</strong>. Instead of attempting to
                eliminate control pressure, he turned into it. This is because
                Merab’s system is like quicksand; the more you fight it, the more
                it pulls you in. Rather than defending takedowns purely in open
                space, Yan moved toward the fence, where he could leverage the
                fence to stay upright and concentrate on posture, reversing weight
                distribution, and hand fighting. By doing this, Yan transferred
                energy expenditure to Merab, as it then became the onus of Merab to
                pull Yan down to the ground.
              </p>

              <p>
                This reduced the muscular load required to defend while allowing Yan
                to re-establish his jab-to-overhand-right combination with full
                kinetic sequencing. This forced Merab to respect damage upon entry,
                further slowing down his pace of wrestling exchanges and narrowing
                the net control differential.
              </p>

              <h2 className="mt-12 mb-3 text-2xl font-semibold tracking-tight text-white">
                Tying it all together:
              </h2>

              <p>
                Viewed this way, Yan vs. Merab is not simply striker versus
                wrestler. It is a contest over who controls the fight’s{" "}
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
                physical expression of pressure, fatigue, and positional dominance,
                and the fighter who controls that differential ultimately controls
                the fight.
              </p>
            </CinematicReveal>
          </div>

          <CinematicReveal
            className="mt-16 text-center"
            delay={0.2}
            y={10}
            duration={0.55}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Control Differential Simulator: Wrestling Pressure vs. Yan’s Offense
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
              This model estimates how wrestling pressure affects Petr Yan’s
              offense. Expected control time is calculated from takedown attempts,
              success rate, and average control time per successful takedown over a
              25-minute fight. As Merab’s control share increases, Yan spends more
              time defending and less time striking. The model therefore reduces
              Yan’s expected strike output as both wrestling threat and control
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
                  border border-white/15
                  bg-white/10
                  px-4 py-2
                  text-sm font-medium
                  transition
                  hover:bg-white/15
                "
              >
                Download Modeling PDF
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