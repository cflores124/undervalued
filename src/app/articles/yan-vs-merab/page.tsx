import type { Metadata } from "next";
import Image from "next/image";
import CinematicReveal from "@/components/CinematicReveal";
import YanMerabInteractive from "@/components/YanMerabInteractive";

const description =
  "A structural breakdown of how control differential compresses or restores Petr Yan’s offense against Merab Dvalishvili.";

export const metadata: Metadata = {
  title: "What Actually Decides Yan vs. Merab? — Undervalued",
  description,
};

export default function YanVsMerabArticlePage() {
  return (
    <section className="w-full">
      <div className="w-full max-w-6xl mx-auto">
        <main className="mt-10">
          {/* Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            What Actually Decides Yan vs. Merab?
          </h1>

          {/* Article description */}
          <div className="relative mt-4 max-w-3xl">
            <CinematicReveal
              className="relative"
              delay={0.5}
              y={10}
              duration={0.55}
              stagger={0.12}
            >
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                {description}
              </p>
            </CinematicReveal>
          </div>

          {/* Divider */}
          <div className="mt-8 sm:mt-10">
            <div className="mx-auto h-px w-[90%] bg-[color-mix(in_oklab,var(--foreground)_12%,transparent)]" />
          </div>

          {/* Article + Image layout */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-12 items-start">
            {/* Image (TOP on mobile, RIGHT on desktop) */}
            <aside className="order-1 lg:order-2 lg:sticky lg:top-24">
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

                <figcaption className="text-xs text-foreground/60 leading-relaxed">
                  Image from Petr Yan vs Merab Dvalishvili I | Zuffa LLC via Getty Images
                </figcaption>
              </figure>
            </aside>

            {/* Article body (bold added sparingly) */}
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
                What decides a fight between Petr Yan and Merab Dvalishvili? Is it damage, volume,
                or something more structural like <strong>pace-driven control pressure</strong>?
              </p>

              <p>
                Across their two meetings, viewers saw two variations of the same fight. In the first,
                <strong> Merab’s relentless wrestling pressure</strong> compressed Yan’s offensive freedom and led him
                to a decision victory. In the second, <strong>Yan’s defensive adjustment</strong> disrupted that
                pressure, allowing his striking to return and enabling him to capture the win.
              </p>

              <p>
                The structural hinge of this matchup appears to be <strong>control differential</strong>. As that gap
                expands in Merab’s favor, Yan’s offense contracts. When the gap narrows, Yan’s
                striking returns.
              </p>

              <p>
                In their first meeting, Merab attempted <strong>49 takedowns</strong>, landing <strong>11</strong>. Over five rounds,
                he accumulated <strong>6:53 of control time</strong> compared to Yan’s <strong>1:50</strong>, that is a <strong>5:03 control
                differential</strong> which accounted for roughly <strong>79%</strong> of the fight’s total control time.
              </p>

              <p>
                Yan’s offensive output reflected that level of pressure. He landed <strong>75 significant
                strikes</strong>, just <strong>3.0 per minute</strong>, well below his typical pace. The rounds in which
                Merab controlled the most time also produced some of Yan’s lowest strike totals (rounds 3 & 5).
              </p>

              <p>
                In the second fight, that balance shifted. Merab’s takedown attempts dropped from
                <strong> 49 to 29</strong>, and his success rate fell from <strong>22%</strong> to just <strong>6%</strong>, producing only <strong>two completed
                takedowns</strong>. The control differential shrank to <strong>2:17</strong>, less than half of the first
                fight’s gap.
              </p>

              <p>
                Freed from sustained control pressure, Yan’s offense rebounded. He landed <strong>139
                significant strikes</strong> and increased his output to <strong>5.56 per minute</strong>, nearly doubling
                his rate from the first fight.
              </p>

              <p>
                Across both bouts, the pattern is consistent: as the <strong>control differential expands</strong>,
                Yan’s offense contracts, and as the <strong>control differential contracts</strong>, Yan’s offense
                expands.
              </p>

              <p>
                Control time alone, however, doesn’t fully explain the dynamic. Merab’s system works
                because it creates a <strong>constant energy battle</strong>. His takedown attempts are layered,
                shots from stance, entries off the jab, and chain wrestling along the fence, 
                forcing opponents into repeated defensive cycles even when attempts are defended.
              </p>

              <p>
                Once control is established, Merab prioritizes <strong>exhausting his opponent</strong> rather than
                chasing quick submissions. By placing his chest across the back of an opponent’s
                head and shoulders, he forces them to <strong>carry his weight</strong> while fighting hands and
                attempting to stand.
              </p>

              <p>
                This creates sustained <strong>isometric tension</strong> across the posterior chain (neck, back,
                hips, and legs) while the defender attempts to escape. Over time, the result is
                <strong> cumulative fatigue</strong>.
              </p>

              <p>
                In the second fight, Yan addressed this problem through <strong>defensive efficiency</strong>. Rather
                than defending takedowns purely in open space, he moved toward the fence, where he
                could stay upright and concentrate on <strong>hand fighting, posture, and reversing weight
                distribution</strong>.
              </p>

              <p>
                This reduced the muscular load required to defend while allowing Yan to re-establish
                his jab-to-straight-right combination with full kinetic sequencing. By forcing Merab
                to respect damage upon entry, he slowed the pace of wrestling exchanges and narrowed
                the control differential.
              </p>

              <p>
                Viewed this way, Yan vs. Merab is not simply striker versus wrestler. It is a contest
                over who controls the fight’s <strong>energy economy</strong>.
              </p>

              <p>
                Merab wins when he <strong>expands the control gap</strong> and forces Yan into repeated defensive
                cycles that accumulate fatigue. Yan wins when he <strong>compresses that gap</strong> and preserves
                enough energy for his striking to <strong>dictate the fight</strong>.
              </p>

              <p>
                In this matchup, control time is more than a statistic, it is the <strong>physical
                expression of pressure, fatigue, and positional dominance</strong>, and the fighter who
                controls that differential ultimately controls the fight.
              </p>
            </CinematicReveal>
          </div>

          {/* Interactive Model Header */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Control Differential Simulator: Wrestling Pressure vs. Yan’s Offense
            </h2>
          </div>

          {/* Interactive Model */}
          <div className="mt-16">
            <YanMerabInteractive />
          </div>

          {/* Model Explanation + PDF Download */}
          <div className="mt-6 max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm sm:text-base leading-relaxed text-foreground/75">
              This model estimates how wrestling pressure affects Petr Yan’s offense. Expected
              control time is calculated from takedown attempts, success rate, and average control
              time per successful takedown over a 25-minute fight. As Merab’s control share
              increases, Yan spends more time defending and less time striking. The model therefore
              reduces Yan’s expected strike output as both wrestling threat and control
              differential grow.
            </p>

            <div className="flex flex-col items-center gap-4">
              <p className="text-sm text-foreground/70 text-center">
                Take a look at the full mathematical breakdown here.
              </p>

              <a
                href="/yan-merab-modeling.pdf"
                download
                className="
                  inline-flex items-center justify-center
                  rounded-full
                  px-4 py-2
                  text-sm font-medium
                  border border-white/15
                  bg-white/10
                  hover:bg-white/15
                  transition
                "
              >
                Download Modeling PDF
              </a>
            </div>
          </div>

          {/* Background vignette */}
          <div
            className="pointer-events-none fixed inset-0 -z-10
                       bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.04),transparent_60%)]"
          />
        </main>
      </div>
    </section>
  );
}