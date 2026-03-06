// /components/HeaderBand.tsx
'use client';

export default function HeaderBand() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 h-[12svh] -z-10">
      {/* Slightly lighter dark wash from the top */}
      <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-black/35 to-transparent" />
      {/* Softer green glow */}
      <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(120%_90%_at_50%_-20%,rgba(167,255,72,0.08),transparent_62%)]" />
    </div>
  );
}
