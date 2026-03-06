import type { ComponentType } from "react";
import { insights } from "@/data/insights";
import MerabControlSuppressionInsight from "@/components/insights/MerabControlSuppressionInsight";

export type InsightEntry = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  relatedArticleSlug?: string;
  featured?: boolean;
  Component: ComponentType;
};

export const insightRegistry: InsightEntry[] = insights.map((insight) => {
  switch (insight.slug) {
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