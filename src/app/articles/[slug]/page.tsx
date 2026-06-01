import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articleRegistry, getArticleBySlug } from "@/data/articleRegistry";

type Props = {
  params: Promise<{ slug: string }>;
};

const siteUrl = "https://www.undervaluedanalytics.com";

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

  const articleUrl = `${siteUrl}/articles/${article.slug}`;

  return {
    title: `${article.title} — Undervalued`,
    description: article.description,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: articleUrl,
      siteName: "Undervalued",
      type: "article",
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const Component = article.Component;

  return <Component />;
}