import type { InsightData } from "@/components/insights/InsightFlipCard";
import type { InsightData2 } from "@/components/insights/InsightFlipCard2";
import type { WorldCupNetEloData } from "@/components/insights/WorldCupNetEloFlipCard";

import merabInsight from "@/data/merab_control_suppression.json";
import calebInsight from "@/data/caleb_williams_high_leverage_execution.json";
import worldCupNetEloInsight from "@/data/world_cup_2026_contender_net_elo.json";

export type InsightMeta = {
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
  cardData: InsightData | InsightData2 | WorldCupNetEloData;
};

export const insights: InsightMeta[] = [
  {
    slug: "world-cup-contender-net-elo",
    title: "Peaking Under Pressure",
    description: "Contender Elo Momentum",
    excerpt:
      "Recent World Cup champions usually arrive with more than talent. They arrive with momentum. Net Elo helps show whether a contender is building toward a tournament peak or entering the cycle below its recent high point. Spain, Colombia, and England are trending upward, while Argentina, France, and Brazil remain dangerous but carry different momentum profiles into 2026. Still, these contenders must convert momentum into a tournament peak under immense pressure.",
    category: "Soccer Insight",
    publishedAt: "2026-05-07",
    relatedArticleSlug: "world-cup-pathways",
    featured: true,
    ctaText: "Open the full breakdown",
    dataSource: "World Football Elo Ratings",
    cardData: worldCupNetEloInsight,
  },

  {
    slug: "caleb-high-leverage-execution",
    title: "Disruption, Creation, Execution",
    description: "High-Leverage Execution",
    excerpt:
      "The fourth quarter is defined by volatility, with compressed time, limited possessions, and outsized consequences on every play. The Bears didn’t just operate in this environment: they exploited it. Ranking second in execution by average net WPA per possession, they consistently turned high-leverage moments into positive outcomes. At the center was Caleb Williams, whose ability to create on broken plays kept drives alive when structure failed.",
    category: "Football Insight",
    publishedAt: "2026-04-20",
    relatedArticleSlug: "williams-bears",
    featured: true,
    ctaText: "Open the full breakdown",
    dataSource: "nflreadr / nflfastR",
    cardData: calebInsight,
  },

  {
    slug: "merab-control-suppression",
    title: "High-Paced Control Pressure",
    description: "Control Differential vs Strike Suppression",
    excerpt:
      "Control in MMA is a broad statistic. It can demonstrate dominance, targeted submission attempts, ground and pound opportunities, and more. For Merab, control is not just about holding position, but about shaping what the opponent is able to do next. As the control gap grows in Merab’s favor, his opponents' striking freedom tends to narrow, turning wrestling pressure into a form of offensive suppression rather than a scoring category.",
    category: "Fight Insight",
    publishedAt: "2026-03-01",
    relatedArticleSlug: "yan-vs-merab",
    featured: true,
    ctaText: "Open the full breakdown",
    dataSource: "UFCStats.com",
    cardData: merabInsight,
  },
];