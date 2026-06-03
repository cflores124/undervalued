export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedAt: string;
  image: string;
  featured?: boolean;
};

export const articles: ArticleMeta[] = [
  {
    slug: "red-bull-f1",
    title: "How did Red Bull Turn Formula 1 into a Competitive Advantage?",
    description:
      "An analytical exploration of how Formula 1's pursuit of marginal gains mirrors the strategy behind Red Bull's global brand.",
    category: "Formula 1 Analysis",
    readTime: "8 min read",
    publishedAt: "2026-05-31T00:00:00.000Z",
    image: "/red-bull-racing-1.jpg",
    featured: true,
  },
  {
    slug: "world-cup-pathways",
    title: "What actually determines who wins the World Cup?",
    description:
      "An analytical framework of World Cup championship pathways, tournament pressure, and the identities shaping the 2026 contenders.",
    category: "International Soccer Analysis",
    readTime: "10 min read",
    publishedAt: "2026-05-06T00:00:00.000Z",
    image: "/worldcup.jpg",
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
    image: "/williams-bears-1.jpg",
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
    image: "/yan-merab-1.jpg",
    featured: true,
  },
];