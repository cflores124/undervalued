import type { ComponentType, ReactElement } from "react";

import {
  insights,
  type InsightMeta,
  type InsightSlug,
} from "@/data/insights";

/* =========================
   FULL INSIGHT PAGES
========================= */

import RedBullChampionshipMarginsInsight from "@/components/insights/RedBullChampionshipMarginsInsight";
import WorldCupContenderNetEloInsight from "@/components/insights/WorldCupContenderNetEloInsight";
import BearsNetAverageWPAPerPossessionInsight from "@/components/insights/BearsNetAverageWPAPerPossessionInsight";
import MerabControlSuppressionInsight from "@/components/insights/MerabControlSuppressionInsight";

/* =========================
   PREVIEW CARD COMPONENTS
========================= */

import RedBullChampionshipMarginsCard from "@/components/insights/RedBullChampionshipMarginsCard";
import WorldCupContenderNetEloCard from "@/components/insights/WorldCupContenderNetEloCard";
import BearsNetAverageWPAPerPossessionCard from "@/components/insights/BearsNetAverageWPAPerPossessionCard";
import MerabControlSuppressionCard from "@/components/insights/MerabControlSuppressionCard";

/* =========================
   CARD DATA
========================= */

import redBullInsight from "@/data/f1_2021_drivers_championship_margins.json";
import worldCupNetEloInsight from "@/data/world_cup_2026_contender_net_elo.json";
import merabInsight from "@/data/merab_control_suppression.json";
import calebInsight from "@/data/caleb_williams_high_leverage_execution.json";

/* =========================
   TYPES
========================= */

export type InsightRegistryEntry = InsightMeta & {
  FullPageComponent: ComponentType<{ dataSource?: string }>;
  renderPreview: () => ReactElement;
};

/* =========================
   REGISTRY
========================= */

export const insightRegistry: Record<InsightSlug, InsightRegistryEntry> = {
  "red-bull-championship-margins": {
    ...insights.find(
      (insight) => insight.slug === "red-bull-championship-margins"
    )!,

    FullPageComponent: RedBullChampionshipMarginsInsight,

    renderPreview: () => (
      <RedBullChampionshipMarginsCard insight={redBullInsight} />
    ),
  },

  "world-cup-contender-net-elo": {
    ...insights.find(
      (insight) => insight.slug === "world-cup-contender-net-elo"
    )!,

    FullPageComponent: WorldCupContenderNetEloInsight,

    renderPreview: () => (
      <WorldCupContenderNetEloCard insight={worldCupNetEloInsight} />
    ),
  },

  "caleb-high-leverage-execution": {
    ...insights.find(
      (insight) => insight.slug === "caleb-high-leverage-execution"
    )!,

    FullPageComponent: BearsNetAverageWPAPerPossessionInsight,

    renderPreview: () => (
      <BearsNetAverageWPAPerPossessionCard insight={calebInsight} />
    ),
  },

  "merab-control-suppression": {
    ...insights.find(
      (insight) => insight.slug === "merab-control-suppression"
    )!,

    FullPageComponent: MerabControlSuppressionInsight,

    renderPreview: () => <MerabControlSuppressionCard insight={merabInsight} />,
  },
};

/* =========================
   HELPERS
========================= */

export function getInsightRegistryEntry(slug: string) {
  return insightRegistry[slug as InsightSlug];
}