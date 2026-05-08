"use client";

import { useMemo, useState } from "react";
import swotData from "@/data/world-cup-swot-analysis.json";

type TeamSwot = {
  team: string;
  pathway: string;
  strengths: string;
  weaknesses: string;
  opportunities: string;
  threats: string;
};

const categories = [
  { key: "strengths", label: "Strength" },
  { key: "weaknesses", label: "Weakness" },
  { key: "opportunities", label: "Opportunity" },
  { key: "threats", label: "Threat" },
] as const;

export default function WorldCupSwotInteractive() {
  const teams = swotData.teams as TeamSwot[];

  const [activeTeam, setActiveTeam] = useState(
    teams[0]?.team ?? "Argentina"
  );

  const selectedTeam = useMemo(
    () => teams.find((team) => team.team === activeTeam) ?? teams[0],
    [activeTeam, teams]
  );

  if (!selectedTeam) return null;

  return (
    <section className="card glass w-full px-4 py-6 sm:px-8 sm:py-8">
      <div className="rounded-3xl border border-border bg-[color-mix(in_oklab,var(--surface)_82%,transparent)] p-5 shadow-[var(--shadow)] backdrop-blur-xl sm:p-7">
        {/* Header */}
        <div className="flex justify-center border-b border-border pb-5">
          <div
            className="
              flex min-h-11 w-full max-w-md items-center justify-center
              rounded-full border px-5 py-2 text-center text-sm
              font-semibold sm:text-base
            "
            style={{
              borderColor:
                "color-mix(in oklab, var(--accent) 38%, var(--border))",
              background:
                "color-mix(in oklab, var(--accent) 10%, transparent)",
              color: "var(--accent)",
            }}
          >
            Pathway: {selectedTeam.pathway}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-5 overflow-x-auto pb-2">
          <div className="flex min-w-max gap-2">
            {teams.map((team) => {
              const isActive = team.team === activeTeam;

              return (
                <button
                  key={team.team}
                  type="button"
                  onClick={() => setActiveTeam(team.team)}
                  className="
                    rounded-full border px-4 py-2 text-sm font-semibold
                    transition-all duration-200
                  "
                  style={
                    isActive
                      ? {
                          borderColor:
                            "color-mix(in oklab, var(--accent) 75%, var(--border))",
                          background:
                            "color-mix(in oklab, var(--accent) 14%, transparent)",
                          color: "var(--accent)",
                        }
                      : {
                          borderColor: "var(--border)",
                          background:
                            "color-mix(in oklab, var(--surface) 65%, transparent)",
                          color:
                            "color-mix(in oklab, var(--foreground) 68%, var(--muted))",
                        }
                  }
                >
                  {team.team}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="mt-6">
          <p className="text-sm text-foreground/55">
            Team identity snapshot
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {categories.map((category) => (
              <article
                key={category.key}
                className="
                  rounded-2xl border p-5 transition-all duration-200
                "
                style={{
                borderColor: "var(--border)",
                background:
                    "color-mix(in oklab, var(--surface) 54%, var(--foreground) 6%)",
                boxShadow: "var(--shadow)",
                }}
              >
                <p
                  className="
                    text-xs font-bold uppercase tracking-[0.16em]
                  "
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  {category.label}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-foreground/75 sm:text-[15px]">
                  {selectedTeam[category.key]}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-4 text-center">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-foreground/62">
            This analysis was conducted using the 2024 Copa América and 2024 Euros
            because those environments best approximate the competitive pressure of
            the World Cup.
          </p>
        </div>
      </div>
    </section>
  );
}