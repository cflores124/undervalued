import type { ComponentType } from "react";
import { insights } from "@/data/insights";

import WorldCupContenderNetEloInsight from "@/components/insights/WorldCupContenderNetEloInsight";
import BearsNetAverageWPAPerPossessionInsight from "@/components/insights/BearsNetAverageWPAPerPossessionInsight";
import MerabControlSuppressionInsight from "@/components/insights/MerabControlSuppressionInsight";

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
    case "world-cup-contender-net-elo":
      return {
        ...insight,
        Component: WorldCupContenderNetEloInsight,
      };

    case "caleb-high-leverage-execution":
      return {
        ...insight,
        Component: BearsNetAverageWPAPerPossessionInsight,
      };

    case "merab-control-suppression":
      return {
        ...insight,
        Component: MerabControlSuppressionInsight,
      };

    default:
      throw new Error(`No component registered for slug: ${insight.slug}`);
  }
});

export function getInsightBySlug(slug: string) {
  return insightRegistry.find((insight) => insight.slug === slug);
}