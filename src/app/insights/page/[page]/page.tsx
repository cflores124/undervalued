import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import CinematicReveal from "@/components/ui/CinematicReveal";

import {
  getPaginatedInsights,
  getTotalInsightPages,
} from "@/data/insights";

import { getInsightRegistryEntry } from "@/data/insightRegistry";

type PageProps = {
  params: {
    page: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const pageNumber = Number(params.page);

  return {
    title: `Insights — Page ${pageNumber} — Undervalued`,
    description:
      "Archived analytical insights and visual breakdowns from Undervalued.",
  };
}

export async function generateStaticParams() {
  const totalPages = getTotalInsightPages();

  return Array.from({ length: totalPages - 1 }, (_, index) => ({
    page: String(index + 2),
  }));
}

export default function PaginatedInsightsPage({
  params,
}: PageProps) {
  const currentPage = Number(params.page);

  const totalPages = getTotalInsightPages();

  if (
    Number.isNaN(currentPage) ||
    currentPage < 2 ||
    currentPage > totalPages
  ) {
    notFound();
  }

  const pageInsights = getPaginatedInsights(currentPage);

  return (
    <section className="w-full">
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
        Insights
      </h1>

      <div className="relative mt-4 max-w-3xl">
        <CinematicReveal
          className="relative"
          delay={0.5}
          y={10}
          duration={0.55}
          stagger={0.12}
        >
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            Archived analytical notes, tactical observations, and visual
            breakdowns from Undervalued.
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
        <div className="grid gap-8" aria-label="Insights list">
          {pageInsights.map((insight) => {
            const registryEntry = getInsightRegistryEntry(insight.slug);

            if (!registryEntry) return null;

            const PreviewComponent = registryEntry.PreviewComponent;

            return (
              <div
                key={insight.slug}
                className="mx-auto grid w-full max-w-5xl grid-cols-1 items-start gap-8 lg:grid-cols-[460px_minmax(0,1fr)] lg:gap-12"
              >
                <div className="w-full max-w-[495px]">
                  <PreviewComponent {...registryEntry.previewProps} />
                </div>

                <div className="max-w-2xl self-center">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {insight.title}
                  </h2>

                  <p className="mt-2 text-base sm:text-lg leading-relaxed text-foreground/78">
                    {insight.excerpt}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-foreground/60">
                    {insight.category}
                  </p>

                  {insight.dataSource && (
                    <p className="mt-2 text-xs sm:text-sm text-foreground/60">
                      Data collected from {insight.dataSource}
                    </p>
                  )}

                  {insight.relatedArticleSlug && (
                    <p className="mt-4 text-sm sm:text-base text-foreground/65">
                      {insight.ctaText ?? "Open the full breakdown"}{" "}
                      <Link
                        href={`/articles/${insight.relatedArticleSlug}`}
                        className="underline underline-offset-4 transition-opacity hover:opacity-70"
                      >
                        here
                      </Link>
                      .
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          {currentPage > 1 && (
            <Link
              href={
                currentPage - 1 === 1
                  ? "/insights"
                  : `/insights/page/${currentPage - 1}`
              }
              className="rounded-full border border-foreground/15 px-5 py-2 text-sm text-foreground/70 transition hover:border-foreground/30 hover:text-foreground"
            >
              Newer insights
            </Link>
          )}

          {currentPage < totalPages && (
            <Link
              href={`/insights/page/${currentPage + 1}`}
              className="rounded-full border border-foreground/15 px-5 py-2 text-sm text-foreground/70 transition hover:border-foreground/30 hover:text-foreground"
            >
              Older insights
            </Link>
          )}
        </div>
      </CinematicReveal>
    </section>
  );
}