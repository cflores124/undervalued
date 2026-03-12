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
    slug: "yan-vs-merab",
    title: "What Actually Decides Yan vs. Merab?",
    description:
      "A structural breakdown of how control differential compresses or restores Petr Yan’s offense against Merab Dvalishvili.",
    category: "UFC Analysis",
    readTime: "6 min read",
    publishedAt: "2026-03-01T00:00:00.000Z",
    featured: true,
  },
];