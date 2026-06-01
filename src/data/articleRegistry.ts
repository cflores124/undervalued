import type { ComponentType } from "react";
import type { ArticleMeta } from "@/data/articles";

import RedBullArticle from "@/components/articles/RedBullArticle";
import WorldCupArticle from "@/components/articles/WorldCupArticle";
import WilliamsBearsArticle from "@/components/articles/WilliamsBearsArticle";
import YanVsMerabArticle from "@/components/articles/YanVsMerabArticle";

import { articles } from "@/data/articles";

export type ArticleEntry = ArticleMeta & {
  Component: ComponentType;
};

export const articleRegistry: ArticleEntry[] = articles.map((article) => {
  switch (article.slug) {
    case "red-bull-f1":
      return {
        ...article,
        Component: RedBullArticle,
      };

    case "world-cup-pathways":
      return {
        ...article,
        Component: WorldCupArticle,
      };

    case "williams-bears":
      return {
        ...article,
        Component: WilliamsBearsArticle,
      };

    case "yan-vs-merab":
      return {
        ...article,
        Component: YanVsMerabArticle,
      };

    default:
      throw new Error(`No component registered for slug: ${article.slug}`);
  }
});

export function getArticleBySlug(slug: string) {
  return articleRegistry.find((article) => article.slug === slug);
}