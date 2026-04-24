"use client";

export default function OrientationGuard() {
  return (
    <div
      className="
        fixed inset-0 z-[9999] hidden
        items-center justify-center
        bg-background text-foreground
        px-6 text-center

        /* Show ONLY on mobile landscape */
        [@media_(orientation:landscape)_and_(pointer:coarse)_and_(max-height:600px)]:flex
      "
    >
      <div className="max-w-sm space-y-4">
        <p className="text-2xl font-semibold tracking-tight">
          Rotate your phone
        </p>

        <p className="text-sm leading-relaxed text-foreground/70">
          This site is designed for portrait viewing. Please rotate your device
          back to continue.
        </p>
      </div>
    </div>
  );
}