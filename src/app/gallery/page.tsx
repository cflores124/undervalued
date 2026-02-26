// /app/gallery/page.tsx
import type { Metadata } from "next";
import CinematicReveal from "@/components/CinematicReveal";
import GalleryTile from "@/components/GalleryTile";

export const metadata: Metadata = {
  title: "Gallery — Undervalued",
  description: "Gallery from Undervalued",
};

export default function GalleryPage() {
  // Row 1 reveal timing
  const GRID_REVEAL_DELAY = 1.55;           // existing first-row reveal
  const SECOND_ROW_DELAY = GRID_REVEAL_DELAY + 0.5; // row 2 reveals 0.5s later

  return (
    <section className="w-full">
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
        Gallery
      </h1>

      {/* Cinematic excerpt with 0.5s delayed reveal */}
      <div className="relative mt-4 max-w-3xl">
        <CinematicReveal
          className="relative"
          delay={0.5}
          y={10}
          duration={0.55}
          stagger={0.12}
        >
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            <strong>Welcome to the Gallery.</strong> This is where moments meet
            meaning. Discover snapshots of iconic athletes, trophies, and arenas
            — each capturing the emotion, atmosphere, and legacy that statistics
            can't fully explain.
          </p>
        </CinematicReveal>
      </div>

      {/* centered thin divider (90% width) */}
      <div className="mt-8 sm:mt-10">
        <div className="mx-auto h-px w-[90%] bg-white/10" />
      </div>

      {/* ROW 1 — Brady / Messi / Álvarez */}
      <CinematicReveal
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        delay={GRID_REVEAL_DELAY}
        y={12}
        duration={0.6}
      >
        <>
          <GalleryTile
            src="/brady.jpeg"
            alt="Tom Brady celebrating after a touchdown"
            credit="Photo from Boston.com"
            paragraph={`Tom Brady turned a sixth-round pick into a two-decade lesson in consistency. Seven rings, 89,000 yards, and 649 touchdowns tell part of the story — the rest is discipline. He mastered control: of tempo, emotion, and preparation. Every rep, every read, every offseason adjustment reflected obsession. Brady’s greatness wasn’t speed or flash — it was endurance. In an era of moments, he built a career on mastery. Greatness, he proved, isn’t about burning bright — it’s about never burning out.`}
          />
          <GalleryTile
            src="/messi.jpeg"
            alt="Lionel Messi in an Inter Miami jersey"
            credit="Photo by Megan Briggs / Getty"
            paragraph={`Lionel Messi plays football like it’s instinct. Every glide, pass, and strike feels inevitable — effortless precision born from years of control. He never overpowers; he orchestrates. Over 800 goals and countless trophies later, his brilliance remains quiet but undeniable. Where others chase chaos, Messi finds calm. His legacy isn’t just dominance — it’s balance, proof that greatness can whisper and still echo forever.`}
          />
          <GalleryTile
            src="/alvarez.jpeg"
            alt="Canelo Álvarez training in a boxing gym"
            credit="Photo from The Guardian"
            paragraph={`Canelo Álvarez turned raw aggression into refined control. From teenage prodigy to undisputed champion, his power evolved with patience. Each counter and body shot reflects study, rhythm, and composure. He doesn’t rush — he dissects. Canelo’s greatness lies not in knockout speed but in surgical precision. Years of craft turned power into poetry, proving that dominance is an equation of timing, discipline, and evolution.`}
          />
        </>
      </CinematicReveal>

      {/* ROW 2 — left→right: khabib, wbcbelt, kobe (reveals 0.5s after row 1) */}
      <CinematicReveal
        className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        delay={SECOND_ROW_DELAY}
        y={12}
        duration={0.6}
      >
        <>
          <GalleryTile
            src="/khabib.jpg"
            alt="Khabib Nurmagomedov pointing after a UFC fight"
            credit="Photo by Stephen R. Sylvanie / USA TODAY Sports"
            paragraph={`Khabib Nurmagomedov redefined dominance in mixed martial arts. Undefeated across his career, he combined relentless grappling, control, and discipline to dismantle every opponent. Beyond the octagon, he embodied humility — retiring at his peak to honor his late father. His greatness came from mastery over chaos, both in combat and in life. Khabib left the sport untouched, undefeated in body, mind, and spirit — a symbol of discipline, respect, and absolute control.`}
          />
          <GalleryTile
            src="/wbcbelt.jpg"
            alt="Close-up of the green WBC world championship belt"
            credit="Photo from wbcboxing / Instagram"
            paragraph={`The WBC Championship belt stands as boxing’s ultimate symbol of greatness — a crown worn by legends. Since 1963, it has embodied excellence, discipline, and honor, its green leather and gold design carrying the legacy of champions like Ali, Tyson, Mayweather, and Álvarez. More than a title, it represents mastery earned through resilience and respect. The WBC belt isn’t just a prize — it’s the embodiment of boxing’s most prestigious tradition.`}
          />
          <GalleryTile
            src="/kobe.jpg"
            alt="Kobe Bryant celebrating amid confetti after a Lakers championship"
            credit="Photo from Sports Illustrated"
            paragraph={`Kobe Bryant embodied obsession turned into mastery. His “Mamba Mentality” became a blueprint for greatness — built on discipline, resilience, and an unrelenting will to win. Five championships, an MVP, and countless iconic moments defined his career, but his impact reached far beyond basketball. Kobe inspired generations to chase excellence with purpose and passion, proving that true greatness is earned through sacrifice, focus, and relentless belief in one’s craft.`}
          />
        </>
      </CinematicReveal>
    </section>
  );
}
