import type { InsightData } from "@/components/insights/InsightFlipCard";
import merabInsight from "@/data/merab_control_suppression.json";

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
  cardData: InsightData;
};

export const insights: InsightMeta[] = [
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