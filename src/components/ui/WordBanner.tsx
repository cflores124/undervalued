'use client';

import { useEffect, useMemo, useRef } from 'react';

type Row = {
  words: string[];
  reverse?: boolean;
  pxPerSec?: number;
};

const ALL_WORDS = [
  'Performance',
  'Efficiency',
  'Precision',
  'Momentum',
  'Strategy',
  'Playbook',
  'Metrics',
  'Tempo',
  'Trajectory',
  'Analytics',
  'Optimization',
  'Prediction',
  'Sequence',
  'Probability',
  'Model',
  'Simulation',
  'Tracking',
  'Visualization',
  'Correlation',
  'Playcalling',
  'Pattern',
  'Evaluation',
  'Execution',
  'Adjustment',
  'Variance',
  'Possession',
  'Projection',
  'Pressure',
  'Benchmark',
  'Dominance',
];

function chunk<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

function RowMarquee({
  words,
  reverse = false,
  pxPerSec = 60,
}: Row) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const aRef = useRef<HTMLDivElement>(null);
  const bRef = useRef<HTMLDivElement>(null);

  const chips = useMemo(
    () =>
      words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="
            mx-[2px] rounded-full px-3 py-1
            border border-foreground/15
            bg-background/30
            text-[11px] uppercase tracking-[0.05em] text-foreground/60
            transition-colors duration-200
            hover:text-[var(--accent)]
            hover:border-[color-mix(in_oklab,var(--accent)_55%,transparent)]
            hover:bg-[color-mix(in_oklab,var(--accent)_12%,transparent)]
            hover:shadow-[0_0_10px_color-mix(in_oklab,var(--accent)_55%,transparent)]
            sm:text-xs md:text-sm
          "
        >
          {w}
        </span>
      )),
    [words]
  );

  useEffect(() => {
    const wrap = wrapRef.current;
    const a = aRef.current;
    const b = bRef.current;

    if (!wrap || !a || !b) return;

    let segWidth = 0;
    let x = 0;
    let raf = 0;
    let last = performance.now();

    const measure = () => {
      segWidth = a.scrollWidth;

      a.style.transform = `translate3d(${x}px,0,0)`;
      b.style.transform = reverse
        ? `translate3d(${x - segWidth}px,0,0)`
        : `translate3d(${x + segWidth}px,0,0)`;
    };

    const fontSet = document.fonts;
    const fontsReady: Promise<void> = fontSet
      ? fontSet.ready.then(() => undefined)
      : Promise.resolve();

    let ro: ResizeObserver | null = null;

    fontsReady.then(() => {
      measure();

      ro = new ResizeObserver(() => {
        const frac = segWidth ? x / segWidth : 0;
        measure();
        x = frac * segWidth;
      });

      ro.observe(a);
      ro.observe(wrap);

      const tick = (now: number) => {
        const dt = (now - last) / 1000;
        last = now;

        if (reverse) {
          x += pxPerSec * dt;
          if (x >= segWidth) x -= segWidth;
          a.style.transform = `translate3d(${x}px,0,0)`;
          b.style.transform = `translate3d(${x - segWidth}px,0,0)`;
        } else {
          x -= pxPerSec * dt;
          if (x <= -segWidth) x += segWidth;
          a.style.transform = `translate3d(${x}px,0,0)`;
          b.style.transform = `translate3d(${x + segWidth}px,0,0)`;
        }

        raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);
    });

    return () => {
      if (ro) ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [pxPerSec, reverse, words]);

  return (
    <div ref={wrapRef} className="relative w-full overflow-hidden">
      <div
        ref={aRef}
        className="absolute inset-y-0 left-0 flex items-center gap-3 pr-[4px] opacity-80 will-change-transform sm:gap-4"
      >
        {chips}
      </div>

      <div
        ref={bRef}
        className="absolute inset-y-0 left-0 flex items-center gap-3 pr-[4px] opacity-80 will-change-transform sm:gap-4"
      >
        {chips}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" />

      <div className="invisible flex items-center gap-2 py-2 sm:gap-3">
        {chips}
      </div>
    </div>
  );
}

export default function WordBanner({ className = '' }: { className?: string }) {
  const [top, middle, bottom] = chunk(ALL_WORDS, 10);

  return (
    <section
      aria-label="Undervalued word banner"
      className={`relative overflow-hidden rounded-2xl border border-foreground/10 ${className}`}
    >
      <div className="relative space-y-2 py-3 sm:space-y-3 sm:py-4">
        <RowMarquee words={top} pxPerSec={48} />
        <RowMarquee words={middle} pxPerSec={52} reverse />
        <RowMarquee words={bottom} pxPerSec={50} />
      </div>
    </section>
  );
}