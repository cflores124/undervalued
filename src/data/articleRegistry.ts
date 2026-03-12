import type { ComponentType } from "react";
import type { ArticleMeta } from "@/data/articles";

import YanVsMerabArticle from "@/components/articles/YanVsMerabArticle";
import { articles } from "@/data/articles";

export type ArticleEntry = ArticleMeta & {
  Component: ComponentType;
};

export const articleRegistry: ArticleEntry[] = articles.map((article) => {
  switch (article.slug) {
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