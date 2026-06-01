"use client";

import * as React from "react";

type TireLabel = "Soft" | "Medium" | "Hard";

type TireParams = {
  tire: TireLabel;
  priorTrackTireDegRate: number;
  expectedStintLength: number;
  tireAgeFactor: number;
  baselineTemp: number;
  baselineFuel: number;
  baselineSpeedVariation: number;
};

type DriverPreset = {
  tire: TireLabel;
  tireAge: number;
  trackTemp: number;
  speedVariation: number;
  startingFuelLoad: number;
};

const STATIC = {
  raceLength: 58,
  maxRaceFuel: 110,
  minRaceFuel: 10,
  tempWeight: 0.09,
  stressWeight: 0.12,
  fuelWeight: 0.018,
};

const PARAMS: Record<TireLabel, TireParams> = {
  Hard: {
    tire: "Hard",
    priorTrackTireDegRate: 0.0575,
    expectedStintLength: 29,
    tireAgeFactor: 0.25,
    baselineTemp: 31,
    baselineFuel: 53,
    baselineSpeedVariation: 43,
  },
  Medium: {
    tire: "Medium",
    priorTrackTireDegRate: 0.07,
    expectedStintLength: 18,
    tireAgeFactor: 0.4,
    baselineTemp: 31,
    baselineFuel: 53,
    baselineSpeedVariation: 44,
  },
  Soft: {
    tire: "Soft",
    priorTrackTireDegRate: 0.0825,
    expectedStintLength: 16,
    tireAgeFactor: 0.65,
    baselineTemp: 28,
    baselineFuel: 53,
    baselineSpeedVariation: 43,
  },
};

const BOUNDS = {
  tireAge: { min: 1, max: 58, step: 1, default: 1 },
  trackTemp: { min: 27, max: 33, step: 1 },
  speedVariation: { min: 40, max: 50, step: 1 },
  startingFuelLoad: { min: 10, max: 110, step: 1, default: 110 },
};

const PRESETS: Record<string, DriverPreset> = {
  hamilton: {
    tire: "Hard",
    tireAge: 43,
    trackTemp: 30,
    speedVariation: 45,
    startingFuelLoad: 80,
  },
  verstappen: {
    tire: "Soft",
    tireAge: 3,
    trackTemp: 29,
    speedVariation: 40,
    startingFuelLoad: 20,
  },
};

function clampNonNegative(x: number) {
  return Math.max(0, x);
}

function computeSimulation({
  tire,
  tireAge,
  trackTemp,
  speedVariation,
  startingFuelLoad,
}: DriverPreset) {
  const p = PARAMS[tire];

  const avgFuelBurnPerLap =
    (STATIC.maxRaceFuel - STATIC.minRaceFuel) / STATIC.raceLength;

  const laps = Array.from({ length: tireAge }, (_, i) => i + 1);

  const lapRows = laps.map((lap) => {
    const fuelLoadLap = Math.max(
      STATIC.minRaceFuel,
      startingFuelLoad - avgFuelBurnPerLap * (lap - 1)
    );

    const ageMultiplier =
      1 + p.tireAgeFactor * Math.pow(lap / p.expectedStintLength, 2);

    const temperatureMultiplier =
      1 + STATIC.tempWeight * ((trackTemp - p.baselineTemp) / 10);

    const stressMultiplier =
      1 +
      STATIC.stressWeight *
        ((speedVariation - p.baselineSpeedVariation) / 10);

    const fuelAdjustment = clampNonNegative(
      STATIC.fuelWeight * ((fuelLoadLap - p.baselineFuel) / 10)
    );

    const rawExpectedPaceLoss =
      p.priorTrackTireDegRate *
        ageMultiplier *
        temperatureMultiplier *
        stressMultiplier +
      fuelAdjustment;

    const expectedPaceLoss = clampNonNegative(rawExpectedPaceLoss);

    return {
      tireAge: lap,
      fuelLoadLap,
      expectedPaceLoss,
    };
  });

  const cumulativePaceLoss = lapRows.reduce(
    (sum, row) => sum + row.expectedPaceLoss,
    0
  );

  const current = lapRows[lapRows.length - 1];

  return {
    ...current,
    cumulativePaceLoss: clampNonNegative(cumulativePaceLoss),
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
    <div className="text-center space-y-1.5 sm:space-y-2">
      <div className="text-[12px] sm:text-[15px] font-semibold leading-snug text-foreground/70">
        {label}
      </div>

      <div className="text-[15px] sm:text-[18px] font-semibold leading-none tabular-nums text-foreground">
        {value}
      </div>

      {badge && (
        <div className="flex justify-center pt-1">
          <span className="badge px-2.5 py-1 text-[10px] sm:text-xs">
            {badge}
          </span>
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
  formatValue,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  formatValue?: (v: number) => string;
}) {
  const decimals =
    step < 0.001 ? 4 : step < 0.01 ? 3 : step < 0.1 ? 2 : step < 1 ? 1 : 1;

  return (
    <div className="space-y-2.5 sm:space-y-3">
      <div className="text-[14px] sm:text-[16px] font-medium leading-snug text-foreground/90">
        {label}
      </div>

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
          height: 7,
        }}
      />

      <div className="text-[11px] sm:text-xs text-foreground/60 tabular-nums">
        {formatValue ? formatValue(value) : value.toFixed(decimals)}
      </div>
    </div>
  );
}

function TireButton({
  tire,
  selected,
  onClick,
}: {
  tire: TireLabel;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full border px-4 py-2 text-xs sm:text-sm font-medium transition",
        selected
          ? "border-[color-mix(in_oklab,var(--accent)_55%,transparent)] bg-[color-mix(in_oklab,var(--accent)_16%,transparent)] text-foreground"
          : "border-[color-mix(in_oklab,var(--foreground)_12%,transparent)] bg-transparent text-foreground/60 hover:text-foreground",
      ].join(" ")}
    >
      {tire}
    </button>
  );
}

function PresetButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-[color-mix(in_oklab,var(--foreground)_12%,transparent)] bg-transparent px-4 py-2 text-xs font-medium text-foreground/65 transition hover:border-[color-mix(in_oklab,var(--accent)_45%,transparent)] hover:bg-[color-mix(in_oklab,var(--accent)_10%,transparent)] hover:text-foreground sm:text-sm"
    >
      {label}
    </button>
  );
}

export default function RedBullInteractive() {
  const [tire, setTire] = React.useState<TireLabel>("Medium");
  const [tireAge, setTireAge] = React.useState(BOUNDS.tireAge.default);
  const [trackTemp, setTrackTemp] = React.useState(PARAMS.Medium.baselineTemp);
  const [speedVariation, setSpeedVariation] = React.useState(
    PARAMS.Medium.baselineSpeedVariation
  );
  const [startingFuelLoad, setStartingFuelLoad] = React.useState(
    BOUNDS.startingFuelLoad.default
  );

  const applyPreset = (preset: DriverPreset) => {
    setTire(preset.tire);
    setTireAge(preset.tireAge);
    setTrackTemp(preset.trackTemp);
    setSpeedVariation(preset.speedVariation);
    setStartingFuelLoad(preset.startingFuelLoad);
  };

  const out = React.useMemo(
    () =>
      computeSimulation({
        tire,
        tireAge,
        trackTemp,
        speedVariation,
        startingFuelLoad,
      }),
    [tire, tireAge, trackTemp, speedVariation, startingFuelLoad]
  );

  return (
    <section className="card glass w-full px-4 py-5 sm:px-10 sm:py-10">
      <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-6 md:grid-cols-3">
        <StatBlock
          label="Expected Pace Loss / Lap"
          badge="Current lap burden"
          value={`${out.expectedPaceLoss.toFixed(3)}s`}
        />

        <StatBlock
          label="Cumulative Pace Loss"
          badge="Degradation exposure"
          value={`${out.cumulativePaceLoss.toFixed(3)}s`}
        />

        <div className="col-span-2 flex justify-center md:col-span-1">
          <div className="w-full max-w-[210px] md:max-w-none">
            <StatBlock
              label="Estimated Fuel Load"
              badge={`Lap ${tireAge}`}
              value={`${out.fuelLoadLap.toFixed(0)} kg`}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8">
        <div className="h-px w-full bg-[color-mix(in_oklab,var(--foreground)_12%,transparent)]" />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 sm:mt-8">
        <TireButton
          tire="Soft"
          selected={tire === "Soft"}
          onClick={() => setTire("Soft")}
        />
        <TireButton
          tire="Medium"
          selected={tire === "Medium"}
          onClick={() => setTire("Medium")}
        />
        <TireButton
          tire="Hard"
          selected={tire === "Hard"}
          onClick={() => setTire("Hard")}
        />
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <PresetButton
          label="Hamilton&apos;s Lap 58"
          onClick={() => applyPreset(PRESETS.hamilton)}
        />
        <PresetButton
          label="Verstappen&apos;s Lap 58"
          onClick={() => applyPreset(PRESETS.verstappen)}
        />
      </div>

      <div className="mt-6 space-y-7 sm:mt-8 sm:space-y-10">
        <SliderRow
          label="Tire Age"
          min={BOUNDS.tireAge.min}
          max={BOUNDS.tireAge.max}
          step={BOUNDS.tireAge.step}
          value={tireAge}
          onChange={setTireAge}
          formatValue={(v) => `${v.toFixed(0)} laps`}
        />

        <SliderRow
          label="Track Temperature"
          min={BOUNDS.trackTemp.min}
          max={BOUNDS.trackTemp.max}
          step={BOUNDS.trackTemp.step}
          value={trackTemp}
          onChange={setTrackTemp}
          formatValue={(v) => `${v.toFixed(0)}°C`}
        />

        <SliderRow
          label="Speed Variation"
          min={BOUNDS.speedVariation.min}
          max={BOUNDS.speedVariation.max}
          step={BOUNDS.speedVariation.step}
          value={speedVariation}
          onChange={setSpeedVariation}
          formatValue={(v) => `${v.toFixed(0)}`}
        />

        <SliderRow
          label="Starting Fuel Load"
          min={BOUNDS.startingFuelLoad.min}
          max={BOUNDS.startingFuelLoad.max}
          step={BOUNDS.startingFuelLoad.step}
          value={startingFuelLoad}
          onChange={setStartingFuelLoad}
          formatValue={(v) => `${v.toFixed(0)} kg`}
        />
      </div>

      <div className="mt-4 text-center">
        <p className="mx-auto max-w-3xl text-sm leading-relaxed text-foreground/62">
          Model estimates tire-related performance burden through age,
          temperature, stress, and fuel load. Cumulative pace loss represents
          accumulated degradation exposure, not exact physical tire wear.
        </p>
      </div>
    </section>
  );
}