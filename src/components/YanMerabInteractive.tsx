"use client";

import * as React from "react";

type ModelParams = {
  // Independent variables (sliders)
  r: number; // takedown attempts per minute
  p: number; // takedown success rate
  c: number; // avg control seconds per successful takedown
};

type Constants = {
  T: number; // fight minutes
  alpha: number; // Yan share of total control time vs Merab
  k_threat: number;
  k_control: number;
  s0: number; // Yan baseline strikes per minute
};

const DEFAULTS: Constants = {
  T: 25,
  alpha: 0.2822,
  k_threat: 0.95,
  k_control: 1,
  s0: 5.96,
};

// Slider bounds + defaults (from your Shiny script)
const BOUNDS = {
  r: { min: 0.986, max: 2.254, step: 0.01, default: 1.56 },
  p: { min: 0.0586, max: 0.2582, step: 0.001, default: 0.176 },
  c: { min: 31.914, max: 179.4, step: 0.5, default: 55.769 },
};

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

function formatMMSSFromMinutes(minutes: number) {
  const totalSeconds = Math.round(minutes * 60);
  const mm = Math.floor(totalSeconds / 60);
  const ss = totalSeconds % 60;
  return `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
}

/**
 * Implements the PDF math:
 * E[Control_Merab] = min(T, r*T*p*(c/60))
 * E[Control_Yan]   = alpha * E[Control_Merab]
 * E[Δ Control]     = E[Control_Merab] - E[Control_Yan]
 * E[Yan_Strikes]   = s0*T*(1 - k_threat*(r*p))*(1 - k_control*(E[Control_Merab]/T))
 * StrikeSupp       = 1 - (E[Yan_Strikes]/(s0*T))
 */
function computeOutputs(inputs: ModelParams, K: Constants) {
  const { r, p, c } = inputs;

  const rp = r * p;

  // Expected Merab control time (minutes)
  const controlMerabRaw = r * K.T * p * (c / 60);
  const controlMerab = Math.min(K.T, controlMerabRaw);

  // Expected Yan control time (minutes)
  const controlYan = K.alpha * controlMerab;

  // Net control differential (minutes)
  const deltaControl = controlMerab - controlYan;

  // Threat & control adjustments (clamped)
  const threatAdj = clamp01(1 - K.k_threat * rp);
  const controlAdj = clamp01(1 - K.k_control * (controlMerab / K.T));

  // Expected Yan strikes
  const yanExpectedStrikes = K.s0 * K.T * threatAdj * controlAdj;

  // Strike suppression (share)
  const strikeSuppression = clamp01(1 - yanExpectedStrikes / (K.s0 * K.T));

  return {
    controlMerab,
    controlYan,
    deltaControl,
    yanExpectedStrikes,
    strikeSuppression,
    rp,
    threatAdj,
    controlAdj,
  };
}

function StatBlock({
  label,
  value,
  badge,
}: {
  label: string;
  value: React.ReactNode;
  badge?: string;
}) {
  return (
    <div className="text-center space-y-2">
      <div className="text-[13px] sm:text-[15px] font-semibold text-foreground/70">
        {label}
      </div>

      <div className="text-[16px] sm:text-[18px] font-semibold tabular-nums text-foreground">
        {value}
      </div>

      {badge && (
        <div className="flex justify-center">
          <span className="badge text-xs">{badge}</span>
        </div>
      )}
    </div>
  );
}

function SliderRow({
  label,
  min,
  max,
  step,
  value,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
}) {
  const decimals =
    step < 0.001 ? 4 : step < 0.01 ? 3 : step < 0.1 ? 2 : step < 1 ? 2 : 1;

  return (
    <div className="space-y-3">
      <div className="text-[15px] sm:text-[16px] font-medium text-foreground/90">
        {label}
      </div>

      {/* Theme-aware range input (accent via global tokens) */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
        style={{
          accentColor: "var(--accent)",
          height: 10,
        }}
      />

      <div className="text-xs text-foreground/60 tabular-nums">
        {value.toFixed(decimals)}
      </div>
    </div>
  );
}

export default function YanMerabInteractive() {
  const [r, setR] = React.useState(BOUNDS.r.default);
  const [p, setP] = React.useState(BOUNDS.p.default);
  const [c, setC] = React.useState(BOUNDS.c.default);

  const out = React.useMemo(
    () => computeOutputs({ r, p, c }, DEFAULTS),
    [r, p, c]
  );

  return (
    <section className="card glass w-full px-6 py-7 sm:px-10 sm:py-10">
      {/* Top stat row */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatBlock
          label="Net Control Differential"
          badge="Control leverage"
          value={
            <>
              {out.deltaControl.toFixed(2)} min{" "}
              <span className="text-foreground/55">
                ({formatMMSSFromMinutes(out.deltaControl)})
              </span>
            </>
          }
        />

        <StatBlock
          label="Strike Suppression"
          badge="Threat compression"
          value={`${(out.strikeSuppression * 100).toFixed(1)}%`}
        />

        <StatBlock
          label="Yan Expected Strikes"
          badge="Projected output"
          value={`${out.yanExpectedStrikes.toFixed(1)}`}
        />
      </div>

      {/* Divider */}
      <div className="mt-8">
        <div className="h-px w-full bg-[color-mix(in_oklab,var(--foreground)_12%,transparent)]" />
      </div>

      {/* Sliders */}
      <div className="mt-8 space-y-10">
        <SliderRow
          label="Takedown Attempts Per Minute"
          min={BOUNDS.r.min}
          max={BOUNDS.r.max}
          step={BOUNDS.r.step}
          value={r}
          onChange={setR}
        />

        <SliderRow
          label="Takedown Success Rate"
          min={BOUNDS.p.min}
          max={BOUNDS.p.max}
          step={BOUNDS.p.step}
          value={p}
          onChange={setP}
        />

        <SliderRow
          label="Avg Control Seconds per Successful Takedown"
          min={BOUNDS.c.min}
          max={BOUNDS.c.max}
          step={BOUNDS.c.step}
          value={c}
          onChange={setC}
        />
      </div>

      {/* Footer note */}
      <div className="mt-8 text-xs text-foreground/55 leading-relaxed">
        Model implements the published structure: expected control (capped at T),
        Yan share α, and strike output suppressed by threat (r·p) and control share.
      </div>
    </section>
  );
}