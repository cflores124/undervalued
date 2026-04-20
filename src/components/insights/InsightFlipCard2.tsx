"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type TeamData = {
  team: string;
  value: number;
};

export type InsightData2 = {
  athlete: string;
  title: string;
  image: string;
  xLabel: string;
  yLabel: string;
  leagueAverage: number;
  teams: Record<string, TeamData>;
};

type Props = {
  insight: InsightData2;
};

function formatTick(value: number) {
  return value.toFixed(3);
}

export default function InsightFlipCard2({ insight }: Props) {
  const [flipped, setFlipped] = useState(false);

  const chart = useMemo(() => {
    const width = 520;
    const height = 420;

    const paddingTop = 28;
    const paddingRight = 24;
    const paddingBottom = 78;
    const paddingLeft = 76;

    const teams = Object.values(insight.teams);

    const maxY = Math.max(...teams.map((t) => t.value));
    const yMax = maxY * 1.15;

    const innerWidth = width - paddingLeft - paddingRight;
    const innerHeight = height - paddingTop - paddingBottom;

    const barWidth = innerWidth / teams.length * 0.6;
    const gap = innerWidth / teams.length;

    const scaleY = (y: number) =>
      height - paddingBottom - (y / yMax) * innerHeight;

    const bars = teams.map((team, i) => {
      const x = paddingLeft + i * gap + gap * 0.2;
      const y = scaleY(team.value);
      const barHeight = height - paddingBottom - y;

      return {
        key: team.team,
        x,
        y,
        width: barWidth,
        height: barHeight,
        label: team.team,
        value: team.value,
      };
    });

    const yTicks = 4;
    const yTickValues = Array.from({ length: yTicks + 1 }, (_, i) => {
      return (i / yTicks) * yMax;
    });

    return {
      width,
      height,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      bars,
      yTickValues,
      scaleY,
    };
  }, [insight]);

  return (
    <button
      type="button"
      onClick={() => setFlipped((prev) => !prev)}
      className="w-full text-left [perspective:1400px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-[2rem]"
    >
      <div
        className={`relative aspect-square w-full rounded-[2rem] transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-black/10 bg-card shadow-[0_20px_60px_rgba(0,0,0,0.10)] dark:border-white/10 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)] [backface-visibility:hidden]">
          <div className="relative h-full w-full">
            <Image
              src={insight.image}
              alt={insight.athlete}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 560px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/65">
                Insight
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                {insight.athlete}
              </h3>

              <p className="mt-2 text-sm text-white/80 sm:text-base">
                {insight.title}
              </p>

              <p className="mt-4 text-xs text-white/55">Tap to flip</p>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-black/10 bg-card text-card-foreground shadow-[0_20px_60px_rgba(0,0,0,0.10)] dark:border-white/10 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="grid h-full grid-rows-[auto,1fr,auto] gap-4 p-5 sm:p-6">
            {/* HEADER */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/45">
                Insight
              </p>

              <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
                {insight.athlete}
              </h3>

              <p className="mt-1 text-sm text-foreground/70">
                {insight.title}
              </p>
            </div>

            {/* CHART */}
            <div className="overflow-hidden rounded-[1.5rem] border border-black/8 bg-black/[0.02] p-3 dark:border-white/10 dark:bg-white/[0.03]">
              <svg
                viewBox={`0 0 ${chart.width} ${chart.height}`}
                className="h-full w-full"
              >
                {/* GRID + Y AXIS */}
                {chart.yTickValues.map((tick, i) => {
                  const y = chart.scaleY(tick);

                  return (
                    <g key={i}>
                      <line
                        x1={chart.paddingLeft}
                        x2={chart.width - chart.paddingRight}
                        y1={y}
                        y2={y}
                        stroke="currentColor"
                        strokeOpacity="0.1"
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

                {/* LEAGUE AVG LINE */}
                <line
                  x1={chart.paddingLeft}
                  x2={chart.width - chart.paddingRight}
                  y1={chart.scaleY(insight.leagueAverage)}
                  y2={chart.scaleY(insight.leagueAverage)}
                  stroke="currentColor"
                  strokeOpacity="0.5"
                  strokeDasharray="4 6"
                  strokeWidth="2"
                />

                {/* BARS */}
                {chart.bars.map((bar) => (
                  <g key={bar.key}>
                    <rect
                      x={bar.x}
                      y={bar.y}
                      width={bar.width}
                      height={bar.height}
                      fill="currentColor"
                      fillOpacity="0.9"
                    />

                    <text
                      x={bar.x + bar.width / 2}
                      y={chart.height - chart.paddingBottom + 24}
                      textAnchor="middle"
                      fontSize="15"
                      fill="currentColor"
                      fillOpacity="0.7"
                    >
                      {bar.label}
                    </text>
                  </g>
                ))}

                {/* AXES */}
                <line
                  x1={chart.paddingLeft}
                  x2={chart.paddingLeft}
                  y1={chart.paddingTop}
                  y2={chart.height - chart.paddingBottom}
                  stroke="currentColor"
                  strokeOpacity="0.4"
                />

                <line
                  x1={chart.paddingLeft}
                  x2={chart.width - chart.paddingRight}
                  y1={chart.height - chart.paddingBottom}
                  y2={chart.height - chart.paddingBottom}
                  stroke="currentColor"
                  strokeOpacity="0.4"
                />

                {/* LABELS */}
                <text
                  x={chart.width / 2}
                  y={chart.height - 10}
                  textAnchor="middle"
                  fontSize="20"
                  fill="currentColor"
                  fillOpacity="0.8"
                >
                  {insight.xLabel}
                </text>

                <text
                  x={10}
                  y={chart.height / 2}
                  textAnchor="middle"
                  fontSize="20"
                  fill="currentColor"
                  fillOpacity="0.8"
                  transform={`rotate(-90 10 ${chart.height / 2})`}
                >
                  {insight.yLabel}
                </text>
              </svg>
            </div>

            {/* FOOTER */}
            <p className="text-xs text-foreground/55 sm:text-sm">
              Chicago translated late-game creation into efficient execution.
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}