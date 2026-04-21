"use client";

import { useMemo, useState } from "react";
import data from "@/data/williams_bears_wildcard.json";

type Play = {
  id: string;
  time: string;
  time_remaining_sec: number;
  short_title: string;
  role: "Creation / Survival" | "Execution" | string;
  role_color: string;
  score_state: string;
  wp_post: number;
  wp_post_display: string;
  wpa: number;
  wpa_display: string;
  down: number | null;
  ydstogo: number | null;
  yardline_100: number | null;
  score_differential: number | null;
  play_type: string | null;
  detail_text: string;
  significance_note: string;
};

type InteractiveData = {
  meta: {
    id: string;
    title: string;
    subtitle: string;
    game: string;
    season: number;
    season_type: string;
    week: number;
    quarter: number;
    team: string;
    chart_type: string;
    y_axis_label: string;
    x_axis_label: string;
    accent_survival: string;
    accent_execution: string;
    default_panel_text: string;
  };
  plays: Play[];
};

const chartData = data as InteractiveData;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function WilliamsBearsInteractive() {
  const plays = chartData.plays ?? [];
  const [activeId, setActiveId] = useState<string | null>(plays[0]?.id ?? null);

  const activePlay =
    plays.find((play) => play.id === activeId) ?? plays[0] ?? null;

  const maxWp = useMemo(() => {
    const rawMax = Math.max(...plays.map((play) => play.wp_post), 0.8);
    return clamp(rawMax, 0.8, 1);
  }, [plays]);

  return (
    <section className="card glass w-full px-4 py-6 sm:px-8 sm:py-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[1.5rem] border border-[color-mix(in_oklab,var(--foreground)_10%,transparent)] bg-[color-mix(in_oklab,var(--background)_94%,transparent)] px-3 py-4 sm:px-6 sm:py-5">
          <div className="flex items-end justify-between gap-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/45">
              Post-Play Win Probability
            </div>
            <div className="text-xs text-foreground/45">Q4 sequence</div>
          </div>

          <div className="mx-auto mt-4 flex h-[200px] max-w-[90%] items-end justify-between gap-2 sm:h-[240px] sm:gap-4">
            {plays.map((play) => {
              const isActive = play.id === activePlay?.id;
              const isSurvival = play.role === "Creation / Survival";
              const heightPct = `${Math.max((play.wp_post / maxWp) * 100, 8)}%`;

              return (
                <button
                  key={play.id}
                  type="button"
                  onClick={() => setActiveId(play.id)}
                  className="group flex h-full flex-1 flex-col items-center justify-end gap-2"
                  aria-label={`${play.time}, ${play.wp_post_display} post-play win probability`}
                >
                  <div className="text-[11px] font-semibold text-foreground/58 sm:text-sm">
                    {play.wp_post_display}
                  </div>

                  <div className="relative flex h-full w-full items-end justify-center">
                    <div
                      className={[
                        "w-full rounded-t-2xl border transition-all duration-200",
                        isActive ? "opacity-100" : "opacity-70 group-hover:opacity-90",
                        isSurvival
                          ? "border-transparent bg-[var(--accent)] shadow-[0_12px_28px_rgba(255,122,0,0.20)]"
                          : "border-foreground/10 bg-foreground/85 dark:bg-foreground/90",
                      ].join(" ")}
                      style={{
                        height: heightPct,
                        minHeight: "18px",
                      }}
                    />
                  </div>

                  <div className="space-y-1 text-center">
                    <div className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
                      {play.time}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-foreground/45">
                      {play.wpa_display} WPA
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-center gap-5 border-t border-[color-mix(in_oklab,var(--foreground)_8%,transparent)] pt-3 text-xs text-foreground/55 sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-[var(--accent)]" />
              Creation / Survival
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-foreground/85" />
              Execution
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {plays.map((play) => {
            const isActive = play.id === activePlay?.id;
            const isSurvival = play.role === "Creation / Survival";

            return (
              <button
                key={play.id}
                type="button"
                onClick={() => setActiveId(play.id)}
                className={[
                  "rounded-full border px-4 py-2 text-sm font-semibold tracking-tight transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-[color-mix(in_oklab,var(--foreground)_18%,transparent)]",
                  isActive
                    ? isSurvival
                      ? "border-transparent bg-[var(--accent)] text-black shadow-[0_10px_28px_rgba(255,122,0,0.22)] dark:text-black"
                      : "border-foreground/15 bg-foreground text-background shadow-[0_10px_28px_rgba(0,0,0,0.14)] dark:bg-foreground dark:text-background"
                    : "border-foreground/12 bg-background/60 text-foreground/78 hover:border-foreground/22 hover:bg-background/85",
                ].join(" ")}
                aria-pressed={isActive}
                aria-label={`Show play details for ${play.time}`}
              >
                {play.time}
              </button>
            );
          })}
        </div>

        <div className="mt-6 min-h-[200px] rounded-[1.5rem] border border-[color-mix(in_oklab,var(--foreground)_10%,transparent)] bg-[color-mix(in_oklab,var(--background)_96%,transparent)] p-5 sm:min-h-[240px] sm:p-6">
          {activePlay ? (
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={[
                      "rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]",
                      activePlay.role === "Creation / Survival"
                        ? "bg-[color-mix(in_oklab,var(--accent)_18%,transparent)] text-[color-mix(in_oklab,var(--accent)_72%,black)] dark:text-[var(--accent)]"
                        : "bg-foreground/8 text-foreground/72",
                    ].join(" ")}
                  >
                    {activePlay.role}
                  </span>
                  <span className="text-sm text-foreground/55">
                    {activePlay.score_state} • {activePlay.time}
                  </span>
                </div>

                <div className="text-sm font-semibold text-foreground/70">
                  {activePlay.short_title}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="rounded-xl border border-[color-mix(in_oklab,var(--foreground)_8%,transparent)] bg-background/70 p-3 sm:p-4">
                  <div className="text-[9px] uppercase tracking-[0.12em] text-foreground/45 sm:text-[11px]">
                    Post-Play WP
                  </div>
                  <div className="mt-1 text-lg font-semibold tracking-tight tabular-nums text-foreground sm:text-xl">
                    {activePlay.wp_post_display}
                  </div>
                </div>

                <div className="rounded-xl border border-[color-mix(in_oklab,var(--foreground)_8%,transparent)] bg-background/70 p-3 sm:p-4">
                  <div className="text-[9px] uppercase tracking-[0.12em] text-foreground/45 sm:text-[11px]">
                    WPA
                  </div>
                  <div className="mt-1 text-lg font-semibold tracking-tight tabular-nums text-foreground sm:text-xl">
                    {activePlay.wpa_display}
                  </div>
                </div>

                <div className="rounded-xl border border-[color-mix(in_oklab,var(--foreground)_8%,transparent)] bg-background/70 p-3 sm:p-4">
                  <div className="text-[9px] uppercase tracking-[0.12em] text-foreground/45 sm:text-[11px]">
                    Down & Distance
                  </div>
                  <div className="mt-1 text-lg font-semibold tracking-tight tabular-nums text-foreground sm:text-xl">
                    {activePlay.down ?? "-"} & {activePlay.ydstogo ?? "-"}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/48">
                  Detail
                </h4>
                <p className="text-sm leading-7 text-foreground/78 sm:text-[15px]">
                  {activePlay.detail_text}
                </p>
              </div>

              <div className="rounded-2xl border-l-2 border-[var(--accent)] bg-[color-mix(in_oklab,var(--accent)_9%,transparent)] px-4 py-4">
                <p className="text-sm leading-7 text-foreground/78 sm:text-[15px]">
                  {activePlay.significance_note}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex min-h-[180px] items-center justify-center text-center">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.22em] text-foreground/45">
                  Select a moment
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
                  {chartData.meta.default_panel_text}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 text-center">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-foreground/62">
            This sequence is the argument in miniature: one survival rep prevents
            the drive from ending, and everything that follows becomes possible
            because the Bears are allowed to return to structure.
          </p>
        </div>
      </div>
    </section>
  );
}