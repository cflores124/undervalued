// /components/FooterBand.tsx
'use client';

export default function FooterBand() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 h-[14svh] -z-10 overflow-hidden">

      {/* Base fade */}
      <div
        className="
          absolute inset-x-0 bottom-0 h-full
          bg-gradient-to-t
          from-white/70 to-transparent
          dark:from-black/45
        "
      />

      {/* Light mode glow */}
      <div
        className="
          absolute inset-x-0 bottom-0 h-full
          bg-[radial-gradient(120%_90%_at_50%_120%,rgba(255,120,40,0.10),transparent_60%)]
          dark:hidden
        "
      />

      {/* Dark mode glow */}
      <div
        className="
          absolute inset-x-0 bottom-0 h-full hidden
          dark:block
          bg-[radial-gradient(120%_90%_at_50%_120%,rgba(167,255,72,0.10),transparent_60%)]
        "
      />

      {/* Subtle lift highlight */}
      <div
        className="
          absolute inset-x-0 bottom-0 h-full
          bg-[radial-gradient(80%_60%_at_50%_100%,rgba(255,255,255,0.20),transparent_70%)]
          dark:bg-[radial-gradient(80%_60%_at_50%_100%,rgba(255,255,255,0.05),transparent_70%)]
        "
      />
    </div>
  );
}


