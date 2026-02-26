// /components/GalleryTile.tsx
'use client';

import { useState } from "react";
import Image from "next/image";

export default function GalleryTile({
  src,
  alt,
  paragraph = "Here is where you write your paragraph.",
  credit,
}: {
  src: string;
  alt: string;
  paragraph?: string;
  credit?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20">
      {/* Image */}
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={1200}
        className="h-auto w-full object-cover"
        priority
      />

      {/* Small top-left credit pill */}
      {credit && (
        <figcaption
          className="absolute left-2 top-2 rounded-md bg-black/45 px-2 py-1 text-[11px] leading-none text-white/80 backdrop-blur-sm"
          aria-label={`Image credit: ${credit}`}
        >
          {credit}
        </figcaption>
      )}

      {/* Bottom gradient for legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Collapsible footer */}
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="absolute inset-x-0 bottom-0 w-full text-left"
        aria-expanded={open}
      >
        <div
          className={[
            "w-full px-4 py-3 backdrop-blur-sm",
            "border-t border-white/10",
            open ? "bg-black/60" : "bg-black/40 hover:bg-black/50",
          ].join(" ")}
        >
          {!open ? (
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Read more</span>
              <span aria-hidden>▾</span>
            </div>
          ) : (
            <div className="text-sm text-foreground/85">
              {paragraph}
              <div className="mt-2 text-xs text-foreground/60">Tap to collapse ▴</div>
            </div>
          )}
        </div>
      </button>
    </figure>
  );
}
