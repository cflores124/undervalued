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
    <figure
      className="
        group relative overflow-hidden rounded-2xl
        border border-[color-mix(in_oklab,var(--foreground)_12%,transparent)]
        bg-[color-mix(in_oklab,var(--surface)_70%,transparent)]
        shadow-[0_10px_30px_rgba(0,0,0,0.18)]
      "
    >
      {/* Image */}
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={1200}
        className="h-auto w-full object-cover"
        priority
      />

      {/* Accent “sheen” for brand feel (orange in light, green in dark) */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bg-[radial-gradient(900px_500px_at_20%_0%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_60%)]
        "
      />

      {/* Small top-left credit pill */}
      {credit && (
        <figcaption
          className="
            absolute left-2 top-2 rounded-md px-2 py-1 text-[11px] leading-none
            border border-[color-mix(in_oklab,var(--foreground)_14%,transparent)]
            bg-[color-mix(in_oklab,var(--background)_65%,transparent)]
            text-foreground/75 backdrop-blur-sm
          "
          aria-label={`Image credit: ${credit}`}
        >
          {credit}
        </figcaption>
      )}

      {/* Bottom gradient for legibility (dynamic) */}
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0 h-32
          bg-gradient-to-t
          from-[color-mix(in_oklab,var(--background)_78%,#000)]
          to-transparent
        "
      />

      {/* Collapsible footer */}
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="absolute inset-x-0 bottom-0 w-full text-left"
        aria-expanded={open}
      >
        <div
          className={[
            "w-full px-4 py-3 backdrop-blur-sm transition-colors",
            "border-t border-[color-mix(in_oklab,var(--foreground)_12%,transparent)]",
            open
              ? "bg-[color-mix(in_oklab,var(--background)_80%,transparent)]"
              : "bg-[color-mix(in_oklab,var(--background)_65%,transparent)] hover:bg-[color-mix(in_oklab,var(--background)_75%,transparent)]",
          ].join(" ")}
        >
          {!open ? (
            <div className="flex items-center justify-between text-sm text-foreground">
              <span
                className="
                  font-medium
                  group-hover:text-[var(--accent)]
                  transition-colors
                "
              >
                Read more
              </span>
              <span aria-hidden className="text-foreground/70">▾</span>
            </div>
          ) : (
            <div className="text-sm text-foreground/85">
              {paragraph}
              <div className="mt-2 text-xs text-foreground/60">
                Tap to collapse ▴
              </div>
            </div>
          )}
        </div>
      </button>
    </figure>
  );
}