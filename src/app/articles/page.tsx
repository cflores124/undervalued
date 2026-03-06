import type { Metadata } from "next";
import CinematicReveal from "@/components/ui/CinematicReveal";
import TiltCard from "@/components/ui/TiltCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Articles — Undervalued",
  description:
  "Long-form analytics stories from Undervalued examining performance, tactics, and the structures behind winning.",
};

export default function ArticlesPage() {
  return (
    <section className="w-full">
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
        Articles
      </h1>

      <div className="relative mt-4 max-w-3xl">
        <CinematicReveal
          className="relative"
          delay={0.5}
          stagger={0.12}
          y={10}
          duration={0.55}
        >
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            <strong>Welcome to Undervalued.</strong> This is where numbers meet
            narrative. Explore our growing library of stories dissecting legendary
            performances, overlooked greatness, and the details that define champions.
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
        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Articles list"
        >
          {articles.map((article) => (
            <TiltCard
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="p-6"
            >
              <h2 className="text-xl font-semibold tracking-tight group-hover:underline">
                {article.title}
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {article.description}
              </p>

              <div className="mt-4 text-xs text-foreground/60">
                {article.readTime} • {article.category}
              </div>
            </TiltCard>
          ))}
        </div>
      </CinematicReveal>
    </section>
  );
}