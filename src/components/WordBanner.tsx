'use client';

import { useEffect, useMemo, useRef } from 'react';

type Row = {
  words: string[];
  reverse?: boolean;   // middle row scrolls right
  pxPerSec?: number;   // speed in pixels per second
};

const ALL_WORDS = [
  'Performance','Efficiency','Precision','Momentum','Strategy',
  'Playbook','Metrics','Tempo','Trajectory','Analytics',
  'Optimization','Prediction','Sequence','Probability','Model',
  'Simulation','Tracking','Visualization','Correlation','Playcalling', // ← here
  'Pattern','Evaluation','Execution','Adjustment','Variance',
  'Possession','Projection','Pressure','Benchmark','Dominance',
];


// simple chunk helper
function chunk<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

// A single continuously-scrolling row driven by requestAnimationFrame (no keyframe resets)
function RowMarquee({
  words,
  reverse = false,
  pxPerSec = 60, // pixels per second
}: Row) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const aRef = useRef<HTMLDivElement>(null); // segment A
  const bRef = useRef<HTMLDivElement>(null); // segment B

  // Render chips once and reuse for both segments
  const chips = useMemo(
    () =>
      words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="px-3 py-1 mx-[2px] rounded-full border border-foreground/15
           text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.05em]
           text-foreground/60 bg-background/30
           transition-colors duration-200
           hover:text-[var(--accent)]
           hover:shadow-[0_0_6px_rgba(216,255,62,0.45)]"
        >
          {w}
        </span>
      )),
    [words]
  );

  useEffect(() => {
    const wrap = wrapRef.current!;
    const a = aRef.current!;
    const b = bRef.current!;
    if (!wrap || !a || !b) return;

    let segWidth = 0;   // width of ONE segment (A)
    let x = 0;          // current left position of segment A
    let raf = 0;
    let last = performance.now();

    const measure = () => {
      segWidth = a.scrollWidth;

      // Place B on the correct side so the stream is continuous:
      // - moving LEFT  (reverse=false): B sits to the RIGHT of A
      // - moving RIGHT (reverse=true):  B sits to the LEFT  of A
      a.style.transform = `translate3d(${x}px,0,0)`;
      b.style.transform = reverse
        ? `translate3d(${x - segWidth}px,0,0)`
        : `translate3d(${x + segWidth}px,0,0)`;
    };

    // Wait for fonts to avoid mid-loop reflow jumps
    const fontsReady =
      (document as any).fonts?.ready?.then?.(() => {}) ?? Promise.resolve();

    fontsReady.then(() => {
      measure();

      const ro = new ResizeObserver(() => {
        // keep continuity when widths change
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
          // move RIGHT
          x += pxPerSec * dt;
          if (x >= segWidth) x -= segWidth; // wrap once A fully moved right
          a.style.transform = `translate3d(${x}px,0,0)`;
          b.style.transform = `translate3d(${x - segWidth}px,0,0)`;
        } else {
          // move LEFT
          x -= pxPerSec * dt;
          if (x <= -segWidth) x += segWidth; // wrap once A fully moved left
          a.style.transform = `translate3d(${x}px,0,0)`;
          b.style.transform = `translate3d(${x + segWidth}px,0,0)`;
        }

        raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);

      return () => ro.disconnect();
    });

    return () => cancelAnimationFrame(raf);
  }, [pxPerSec, reverse, words]);

  return (
    <div ref={wrapRef} className="relative overflow-hidden w-full">
      {/* Segment A */}
      <div
        ref={aRef}
        className="absolute inset-y-0 left-0 flex items-center gap-3 sm:gap-4 pr-[4px]
           will-change-transform opacity-80"
      >
        {chips}
      </div>
      {/* Segment B (positioned to the correct side of A) */}
      <div
        ref={bRef}
        className="absolute inset-y-0 left-0 flex items-center gap-3 sm:gap-4 pr-[4px]
           will-change-transform opacity-80"
      >
        {chips}
      </div>

      {/* soft edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" />

      {/* reserve height so absolute children don't collapse */}
      <div className="invisible flex items-center gap-2 sm:gap-3 py-2">{chips}</div>
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
      <div className="absolute inset-y-0 left-0 flex items-center gap-3 sm:gap-4 will-change-transform" />
      <div className="relative py-3 sm:py-4 space-y-2 sm:space-y-3">
        <RowMarquee words={top}    pxPerSec={48} />
        <RowMarquee words={middle} pxPerSec={52} reverse />
        <RowMarquee words={bottom} pxPerSec={50} /> 
      </div>
    </section>
  );
}
