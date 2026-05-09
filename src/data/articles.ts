export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedAt: string;
  featured?: boolean;
};

export const articles: ArticleMeta[] = [
  {
    slug: "world-cup-pathways",
    title: "What actually determines who wins the World Cup?",
    description:
      "An analytical breakdown of World Cup championship pathways, tournament pressure, and the identities shaping the 2026 contenders.",
    category: "International Soccer Analysis",
    readTime: "10 min read",
    publishedAt: "2026-05-06T00:00:00.000Z",
    featured: true,
  },
  {
    slug: "williams-bears",
    title: "How did Caleb Williams and the 2025 Bears break win probability?",
    description:
      "An explanatory analysis of how Caleb Williams and the 2025 Bears thrived in high-volatility fourth-quarter environments.",
    category: "NFL Analysis",
    readTime: "8 min read",
    publishedAt: "2026-04-18T00:00:00.000Z",
    featured: true,
  },
  {
    slug: "yan-vs-merab",
    title: "What actually decides Yan vs. Merab?",
    description:
      "A structural breakdown of how control differential compresses or restores Petr Yan’s offense against Merab Dvalishvili.",
    category: "UFC Analysis",
    readTime: "6 min read",
    publishedAt: "2026-03-01T00:00:00.000Z",
    featured: true,
  },
];