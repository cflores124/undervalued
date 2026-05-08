"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type TeamData = {
  team: string;
  start_year: number;
  end_year: number;
  start_elo: number;
  end_elo: number;
  net_elo: number;
};

export type WorldCupNetEloData = {
  athlete: string;
  title: string;
  xLabel: string;
  yLabel: string;
  summary: string;
  metric: string;
  teams: Record<string, TeamData>;
};

type Props = {
  insight: WorldCupNetEloData;
};

export default function WorldCupNetEloFlipCard({ insight }: Props) {
  const [flipped, setFlipped] = useState(false);

  const chart = useMemo(() => {
    const width = 520;
    const height = 420;

    const paddingTop = 20;
    const paddingRight = 18;
    const paddingBottom = 66;
    const paddingLeft = 62;

    const teams = Object.values(insight.teams);

    const values = teams.map((team) => team.net_elo);
    const maxAbs = Math.max(...values.map((value) => Math.abs(value)));
    const yMax = Math.ceil((maxAbs * 1.15) / 50) * 50;
    const yMin = -yMax;

    const innerWidth = width - paddingLeft - paddingRight;
    const innerHeight = height - paddingTop - paddingBottom;

    const gap = innerWidth / teams.length;
    const barWidth = gap * 0.66;

    const scaleY = (value: number) =>
      paddingTop + ((yMax - value) / (yMax - yMin)) * innerHeight;

    const zeroY = scaleY(0);

    const bars = teams.map((team, index) => {
      const x = paddingLeft + index * gap + gap * 0.17;
      const valueY = scaleY(team.net_elo);

      return {
        key: team.team,
        label: team.team,
        value: team.net_elo,
        x,
        y: team.net_elo >= 0 ? valueY : zeroY,
        width: barWidth,
        height: Math.abs(zeroY - valueY),
        isPositive: team.net_elo >= 0,
      };
    });

    const yTickValues = [-yMax, -yMax / 2, 0, yMax / 2, yMax];

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
      aria-label={`Flip insight card for ${insight.athlete}`}
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
              src="/yamal.jpg"
              alt={insight.athlete}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 560px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

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

        {/* BACK */}
        <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-black/10 bg-card text-card-foreground shadow-[0_20px_60px_rgba(0,0,0,0.10)] dark:border-white/10 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="grid h-full grid-rows-[auto,1fr,auto] gap-4 p-5 sm:p-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/45">
                Insight
              </p>

              <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                {insight.athlete}
              </h3>

              <p className="mt-1 text-sm text-foreground/70">
                {insight.title}
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-black/8 bg-black/[0.02] p-2 dark:border-white/10 dark:bg-white/[0.03]">
              <svg
                viewBox={`0 0 ${chart.width} ${chart.height}`}
                className="h-full w-full"
                role="img"
                aria-label={`${insight.title} bar chart`}
                preserveAspectRatio="xMidYMid meet"
              >
                {chart.yTickValues.map((tick) => {
                  const y = chart.scaleY(tick);

                  return (
                    <g key={tick}>
                      <line
                        x1={chart.paddingLeft}
                        x2={chart.width - chart.paddingRight}
                        y1={y}
                        y2={y}
                        stroke="currentColor"
                        strokeOpacity={tick === 0 ? "0.55" : "0.12"}
                        strokeWidth={tick === 0 ? "2" : "1"}
                      />

                      <text
                        x={chart.paddingLeft - 10}
                        y={y + 5}
                        textAnchor="end"
                        fontSize="15"
                        fill="currentColor"
                        fillOpacity="0.6"
                      >
                        {tick}
                      </text>
                    </g>
                  );
                })}

                {chart.bars.map((bar) => (
                  <g key={bar.key}>
                    <rect
                      x={bar.x}
                      y={bar.y}
                      width={bar.width}
                      height={bar.height}
                      fill={bar.isPositive ? "currentColor" : "#dc4b4b"}
                      fillOpacity="0.92"
                    />

                    <text
                      x={bar.x + bar.width / 2}
                      y={chart.height - chart.paddingBottom + 22}
                      textAnchor="middle"
                      fontSize="13"
                      fill="currentColor"
                      fillOpacity="0.7"
                    >
                      {bar.label}
                    </text>
                  </g>
                ))}

                <line
                  x1={chart.paddingLeft}
                  x2={chart.paddingLeft}
                  y1={chart.paddingTop}
                  y2={chart.height - chart.paddingBottom}
                  stroke="currentColor"
                  strokeOpacity="0.4"
                />

                <text
                  x={chart.width / 2}
                  y={chart.height - 8}
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

            <p className="text-xs text-foreground/55 sm:text-sm">
              Spain, Colombia, and England enter 2026 with positive Elo
              momentum.
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}