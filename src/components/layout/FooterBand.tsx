// /components/FooterBand.tsx
'use client';

export default function FooterBand() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 h-[12svh] -z-10">
      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-full bg-[radial-gradient(120%_90%_at_50%_120%,rgba(167,255,72,0.10),transparent_60%)]" />
    </div>
  );
}


