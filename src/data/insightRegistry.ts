import type { ComponentType } from "react";
import { insights } from "@/data/insights";

import MerabControlSuppressionInsight from "@/components/insights/MerabControlSuppressionInsight";
import BearsNetAverageWPAPerPossessionInsight from "@/components/insights/BearsNetAverageWPAPerPossessionInsight";

export type InsightEntry = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  relatedArticleSlug?: string;
  featured?: boolean;
  ctaText?: string;
  dataSource?: string;
  Component: ComponentType<{ dataSource?: string }>;
};

export const insightRegistry: InsightEntry[] = insights.map((insight) => {
  switch (insight.slug) {
    case "merab-control-suppression":
      return {
        ...insight,
        Component: MerabControlSuppressionInsight,
      };

    case "caleb-high-leverage-execution":
      return {
        ...insight,
        Component: BearsNetAverageWPAPerPossessionInsight,
      };

    default:
      throw new Error(`No component registered for slug: ${insight.slug}`);
  }
});

export function getInsightBySlug(slug: string) {
  return insightRegistry.find((insight) => insight.slug === slug);
}