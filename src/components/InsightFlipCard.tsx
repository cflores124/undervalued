"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Point = {
  x: number;
  y: number;
};

export type InsightData = {
  athlete: string;
  title: string;
  image: string;
  xLabel: string;
  yLabel: string;
  points: Point[];
  showRegression?: boolean;
};

type InsightFlipCardProps = {
  insight: InsightData;
};

function formatTick(value: number) {
  if (Math.abs(value) >= 10 || Number.isInteger(value)) {
    return String(Math.round(value * 10) / 10);
  }
  return value.toFixed(1);
}

function getRegressionLine(points: Point[]) {
  const n = points.length;
  if (n < 2) return null;

  const sumX = points.reduce((acc, p) => acc + p.x, 0);
  const sumY = points.reduce((acc, p) => acc + p.y, 0);
  const meanX = sumX / n;
  const meanY = sumY / n;

  let numerator = 0;
  let denominator = 0;

  for (const p of points) {
    numerator += (p.x - meanX) * (p.y - meanY);
    denominator += (p.x - meanX) ** 2;
  }

  if (denominator === 0) return null;

  const slope = numerator / denominator;
  const intercept = meanY - slope * meanX;

  return { slope, intercept };
}

export default function InsightFlipCard({ insight }: InsightFlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  const chart = useMemo(() => {
    const width = 520;
    const height = 420;

    const paddingTop = 28;
    const paddingRight = 24;
    const paddingBottom = 78;
    const paddingLeft = 76;

    const xs = insight.points.map((p) => p.x);
    const ys = insight.points.map((p) => p.y);

    const rawXMin = Math.min(...xs);
    const rawXMax = Math.max(...xs);
    const rawYMin = 0;
    const rawYMax = Math.max(...ys);

    const xPad = (rawXMax - rawXMin) * 0.08 || 1;
    const yPad = rawYMax * 0.1 || 5;

    const xMin = rawXMin - xPad;
    const xMax = rawXMax + xPad;
    const yMin = rawYMin;
    const yMax = rawYMax + yPad;

    const innerWidth = width - paddingLeft - paddingRight;
    const innerHeight = height - paddingTop - paddingBottom;

    const scaleX = (x: number) =>
      paddingLeft + ((x - xMin) / (xMax - xMin || 1)) * innerWidth;

    const scaleY = (y: number) =>
      height - paddingBottom - ((y - yMin) / (yMax - yMin || 1)) * innerHeight;

    const plottedPoints = insight.points.map((p, i) => ({
      key: `${p.x}-${p.y}-${i}`,
      cx: scaleX(p.x),
      cy: scaleY(p.y),
    }));

    const xTicks = 5;
    const yTicks = 4;

    const xTickValues = Array.from({ length: xTicks }, (_, i) => {
      const t = i / (xTicks - 1);
      return xMin + t * (xMax - xMin);
    });

    const yTickValues = Array.from({ length: yTicks + 1 }, (_, i) => {
      const t = i / yTicks;
      return yMin + t * (yMax - yMin);
    });

    const regression =
      insight.showRegression === true
        ? getRegressionLine(insight.points)
        : null;

    let regressionLine = null;
    if (regression) {
      const x1 = xMin;
      const y1 = regression.slope * x1 + regression.intercept;
      const x2 = xMax;
      const y2 = regression.slope * x2 + regression.intercept;

      regressionLine = {
        x1: scaleX(x1),
        y1: scaleY(y1),
        x2: scaleX(x2),
        y2: scaleY(y2),
      };
    }

    return {
      width,
      height,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      plottedPoints,
      xTickValues,
      yTickValues,
      scaleX,
      scaleY,
      regressionLine,
    };
  }, [insight]);

  return (
    <button
      type="button"
      onClick={() => setFlipped((prev) => !prev)}
      className="w-full text-left [perspective:1400px]"
      aria-label={`Flip insight card for ${insight.athlete}`}
    >
      <div
        className={`relative aspect-square w-full rounded-[2rem] transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-black/10 bg-card shadow-[0_20px_60px_rgba(0,0,0,0.10)] dark:border-white/10 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)] [backface-visibility:hidden]">
          <div className="relative h-full w-full">
            <Image
              src={insight.image}
              alt={insight.athlete}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 560px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent dark:from-black/85 dark:via-black/25 dark:to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/65">
                Insight
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {insight.athlete}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
                {insight.title}
              </p>
              <p className="mt-4 text-xs text-white/55">Tap to flip</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-black/10 bg-card text-card-foreground shadow-[0_20px_60px_rgba(0,0,0,0.10)] dark:border-white/10 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="grid h-full grid-rows-[auto,1fr,auto] gap-4 p-5 sm:p-6">
            <div className="min-h-0">
              <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/45">
                Insight
              </p>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                {insight.athlete}
              </h3>
              <p className="mt-1 text-sm text-foreground/70">{insight.title}</p>
            </div>

            <div className="min-h-0 overflow-hidden rounded-[1.5rem] border border-black/8 bg-black/[0.02] p-3 dark:border-white/10 dark:bg-white/[0.03]">
              <svg
                viewBox={`0 0 ${chart.width} ${chart.height}`}
                className="h-full w-full"
                role="img"
                aria-label={`${insight.title} scatter plot`}
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Horizontal grid */}
                {chart.yTickValues.map((tick, i) => {
                  const y = chart.scaleY(tick);
                  return (
                    <g key={`y-${i}`}>
                      <line
                        x1={chart.paddingLeft}
                        x2={chart.width - chart.paddingRight}
                        y1={y}
                        y2={y}
                        stroke="currentColor"
                        strokeOpacity="0.10"
                        strokeWidth="1"
                      />
                      <text
                        x={chart.paddingLeft - 12}
                        y={y + 5}
                        textAnchor="end"
                        fontSize="15"
                        fill="currentColor"
                        fillOpacity="0.6"
                      >
                        {formatTick(tick)}
                      </text>
                    </g>
                  );
                })}

                {/* Vertical grid */}
                {chart.xTickValues.map((tick, i) => {
                  const x = chart.scaleX(tick);
                  return (
                    <g key={`x-${i}`}>
                      <line
                        x1={x}
                        x2={x}
                        y1={chart.paddingTop}
                        y2={chart.height - chart.paddingBottom}
                        stroke="currentColor"
                        strokeOpacity="0.10"
                        strokeWidth="1"
                      />
                      <text
                        x={x}
                        y={chart.height - chart.paddingBottom + 24}
                        textAnchor="middle"
                        fontSize="15"
                        fill="currentColor"
                        fillOpacity="0.6"
                      >
                        {formatTick(tick)}
                      </text>
                    </g>
                  );
                })}

                {/* Axes */}
                <line
                  x1={chart.paddingLeft}
                  x2={chart.paddingLeft}
                  y1={chart.paddingTop}
                  y2={chart.height - chart.paddingBottom}
                  stroke="currentColor"
                  strokeOpacity="0.42"
                  strokeWidth="1.25"
                />
                <line
                  x1={chart.paddingLeft}
                  x2={chart.width - chart.paddingRight}
                  y1={chart.height - chart.paddingBottom}
                  y2={chart.height - chart.paddingBottom}
                  stroke="currentColor"
                  strokeOpacity="0.42"
                  strokeWidth="1.25"
                />

                {/* Regression line */}
                {insight.showRegression && chart.regressionLine && (
                  <line
                    x1={chart.regressionLine.x1}
                    y1={chart.regressionLine.y1}
                    x2={chart.regressionLine.x2}
                    y2={chart.regressionLine.y2}
                    stroke="currentColor"
                    strokeOpacity="0.85"
                    strokeWidth="2"
                  />
                )}

                {/* Points */}
                {chart.plottedPoints.map((point) => (
                  <circle
                    key={point.key}
                    cx={point.cx}
                    cy={point.cy}
                    r="6"
                    fill="currentColor"
                    fillOpacity="0.9"
                  />
                ))}

                {/* X label */}
                <text
                  x={chart.width / 2}
                  y={chart.height - 10}
                  textAnchor="middle"
                  fontSize="22"
                  fontWeight="500"
                  fill="currentColor"
                  fillOpacity="0.8"
                >
                  {insight.xLabel}
                </text>

                {/* Y label */}
                <text
                  x={8}
                  y={chart.height / 2}
                  textAnchor="middle"
                  fontSize="22"
                  fontWeight="500"
                  fill="currentColor"
                  fillOpacity="0.8"
                  transform={`rotate(-90 8 ${chart.height / 2})`}
                >
                  {insight.yLabel}
                </text>
              </svg>
            </div>

            <p className="text-xs leading-relaxed text-foreground/55 sm:text-sm">
              Larger control differentials tend to coincide with greater opponent strike suppression.
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}