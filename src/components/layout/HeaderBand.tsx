// /components/HeaderBand.tsx
'use client';

export default function HeaderBand() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 h-[12svh] -z-10 overflow-hidden">
      {/* Base wash */}
      <div
        className="
          absolute inset-x-0 top-0 h-full
          bg-gradient-to-b
          from-white/70 to-transparent
          dark:from-black/35
        "
      />

      {/* Light mode glow */}
      <div
        className="
          absolute inset-x-0 top-0 h-full
          bg-[radial-gradient(120%_90%_at_50%_-20%,rgba(255,120,40,0.10),transparent_62%)]
          dark:hidden
        "
      />

      {/* Dark mode glow */}
      <div
        className="
          absolute inset-x-0 top-0 h-full hidden
          dark:block
          bg-[radial-gradient(120%_90%_at_50%_-20%,rgba(167,255,72,0.08),transparent_62%)]
        "
      />

      {/* Subtle center highlight for extra depth */}
      <div
        className="
          absolute inset-x-0 top-0 h-full
          bg-[radial-gradient(80%_55%_at_50%_0%,rgba(255,255,255,0.18),transparent_70%)]
          dark:bg-[radial-gradient(80%_55%_at_50%_0%,rgba(255,255,255,0.04),transparent_70%)]
        "
      />
    </div>
  );
}
