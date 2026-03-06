import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articleRegistry, getArticleBySlug } from "@/data/articleRegistry";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articleRegistry.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found — Undervalued",
    };
  }

  return {
    title: `${article.title} — Undervalued`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const Component = article.Component;

  return <Component />;
}