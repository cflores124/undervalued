export type InsightMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  relatedArticleSlug?: string;
  featured?: boolean;
};

export const insights: InsightMeta[] = [
  {
    slug: "merab-control-suppression",
    title: "Merab Dvalishvili",
    description:
      "Control Differential vs Strike Suppression",
    category: "Fight Insight",
    publishedAt: "2026-03-01",
    relatedArticleSlug: "yan-vs-merab",
    featured: true,
  },
];