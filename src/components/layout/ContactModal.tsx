// /components/ContactModal.tsx
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

type Props = { open: boolean; onClose: () => void };

const LINKEDIN_URL = 'https://www.linkedin.com/in/cristian-flores-7830392b2/';
const GITHUB_URL = 'https://github.com/cflores124';

export default function ContactModal({ open, onClose }: Props) {
  if (!open) return null;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="overlay"
        className="fixed inset-0 z-[60]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 grid place-items-end sm:place-items-center p-4">
          <motion.div
            key="sheet"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            className="
              relative w-full max-w-lg
              rounded-t-2xl sm:rounded-2xl
              border border-[color-mix(in_oklab,var(--foreground)_12%,transparent)]
              bg-[color-mix(in_oklab,var(--surface)_82%,transparent)]
              backdrop-blur-md shadow-xl overflow-hidden
            "
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
          >

            {/* Reduced accent glow (~5%) */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute -inset-24 opacity-75
                bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_20%,transparent),transparent_65%)]
              "
            />

            <div className="relative p-6 sm:p-8 flex flex-col items-center text-center gap-5">

              {/* Photo */}
              <div
                className="
                  h-24 w-24 rounded-full overflow-hidden
                  ring-2 ring-[color-mix(in_oklab,var(--accent)_30%,transparent)]
                  shadow-[0_0_16px_color-mix(in_oklab,var(--accent)_15%,transparent)]
                "
              >
                <Image
                  src="/profile.jpg"
                  alt="Cristian Flores"
                  width={256}
                  height={256}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Title + bio */}
              <div>
                <h2 id="contact-title" className="text-xl font-semibold text-foreground">
                  About &amp; Contact
                </h2>

                <p className="mt-2 text-sm text-foreground/75 leading-relaxed max-w-md">
                  I’m Cristian, an Applied Sports Data Scientist who builds clean visuals
                  and data-driven narratives that make sports easier to understand and
                  more fun to argue about. I also create tools that help teams and fans
                  use information more effectively. If you appreciate sharp analysis and
                  are curious about the intersection of sports and tech, you’re in the
                  right place.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/about"
                  className="
                    rounded-xl px-4 py-2 text-sm
                    border border-[color-mix(in_oklab,var(--foreground)_12%,transparent)]
                    bg-[color-mix(in_oklab,var(--surface)_70%,transparent)]
                    hover:bg-[color-mix(in_oklab,var(--accent)_12%,transparent)]
                    hover:border-[color-mix(in_oklab,var(--accent)_40%,transparent)]
                    transition-colors
                  "
                  onClick={onClose}
                >
                  Read full About page
                </Link>
              </div>

              <div className="w-full h-px bg-[color-mix(in_oklab,var(--foreground)_12%,transparent)] my-1" />

              {/* Contact block */}
              <div className="flex flex-col items-stretch w-full max-w-xs self-center gap-2">

                <button
                  type="button"
                  aria-label="Open LinkedIn profile"
                  onClick={() => window.open(LINKEDIN_URL, '_blank', 'noopener,noreferrer')}
                  className="
                    inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm
                    border border-[color-mix(in_oklab,var(--foreground)_12%,transparent)]
                    bg-[color-mix(in_oklab,var(--background)_70%,transparent)]
                    hover:bg-[color-mix(in_oklab,var(--accent)_12%,transparent)]
                    hover:border-[color-mix(in_oklab,var(--accent)_40%,transparent)]
                    transition-colors
                    text-foreground
                  "
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.84v2.05h.05c.53-.95 1.84-2.05 3.8-2.05C20.62 8 23 10.24 23 14.26V23h-4v-7.6c0-1.81-.03-4.13-2.52-4.13-2.52 0-2.91 1.97-2.91 4v7.73h-4V8z"/>
                  </svg>
                  <span className="font-medium">LinkedIn</span>
                </button>

                <button
                  type="button"
                  aria-label="Open GitHub profile"
                  onClick={() => window.open(GITHUB_URL, '_blank', 'noopener,noreferrer')}
                  className="
                    inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm
                    border border-[color-mix(in_oklab,var(--foreground)_12%,transparent)]
                    bg-[color-mix(in_oklab,var(--background)_70%,transparent)]
                    hover:bg-[color-mix(in_oklab,var(--accent)_12%,transparent)]
                    hover:border-[color-mix(in_oklab,var(--accent)_40%,transparent)]
                    transition-colors
                    text-foreground
                  "
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.87 3.16 9 7.55 10.46.55.1.75-.24.75-.53v-1.87c-3.07.67-3.72-1.48-3.72-1.48-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.67 2.55 1.19 3.17.91.1-.7.38-1.19.69-1.46-2.45-.28-5.02-1.23-5.02-5.47 0-1.21.43-2.2 1.13-2.97-.11-.28-.49-1.41.11-2.94 0 0 .92-.3 3.01 1.13a10.4 10.4 0 0 1 5.48 0c2.09-1.43 3.01-1.13 3.01-1.13.6 1.53.22 2.66.11 2.94.7.77 1.12 1.76 1.12 2.97 0 4.25-2.58 5.18-5.04 5.45.39.34.74 1.01.74 2.03v3.01c0 .29.2.64.76.53A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5z"/>
                  </svg>
                  <span className="font-medium">GitHub</span>
                </button>

              </div>

              <button
                onClick={onClose}
                className="
                  mt-1 rounded-xl px-4 py-2 text-sm
                  border border-[color-mix(in_oklab,var(--foreground)_12%,transparent)]
                  bg-[color-mix(in_oklab,var(--surface)_70%,transparent)]
                  hover:bg-[color-mix(in_oklab,var(--accent)_12%,transparent)]
                  hover:border-[color-mix(in_oklab,var(--accent)_40%,transparent)]
                  transition-colors
                "
              >
                Close
              </button>

            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}