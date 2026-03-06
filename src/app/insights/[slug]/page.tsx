import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInsightBySlug, insightRegistry } from "@/data/insightRegistry";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return insightRegistry.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    return {
      title: "Insight Not Found — Undervalued",
    };
  }

  return {
    title: `${insight.title} — Undervalued`,
    description: insight.description,
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) notFound();

  const Component = insight.Component;

  return <Component />;
}