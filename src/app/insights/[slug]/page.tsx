import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getInsightRegistryEntry,
  insightRegistry,
} from "@/data/insightRegistry";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.values(insightRegistry).map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightRegistryEntry(slug);

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
  const insight = getInsightRegistryEntry(slug);

  if (!insight) notFound();

  const FullPageComponent = insight.FullPageComponent;

  return <FullPageComponent dataSource={insight.dataSource} />;
}