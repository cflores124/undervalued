// /components/ContactModal.tsx
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

type Props = { open: boolean; onClose: () => void };

const LINKEDIN_URL = 'https://www.linkedin.com/in/cristian-flores-7830392b2/';
const EMAIL = 'cflo0124@gmail.com';

export default function ContactModal({ open, onClose }: Props) {
  if (!open) return null;

  // lock scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <AnimatePresence mode="wait">
      {/* Overlay */}
      <motion.div
        key="overlay"
        className="fixed inset-0 z-[60]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/50" />

        {/* Bottom on mobile, centered on ≥sm */}
        <div className="absolute inset-0 grid place-items-end sm:place-items-center p-4">
          {/* Sheet / Card */}
          <motion.div
            key="sheet"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            className="w-full max-w-lg rounded-t-2xl sm:rounded-2xl border border-white/10 bg-neutral-900/90 backdrop-blur-md shadow-xl"
            onClick={(e) => e.stopPropagation()} // don't close when clicking inside
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
          >
            <div className="p-6 sm:p-8 flex flex-col items-center text-center gap-5">
              {/* Photo */}
              <div className="h-24 w-24 rounded-full overflow-hidden ring-2 ring-white/10">
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
                <h2 id="contact-title" className="text-xl font-semibold">About & Contact</h2>
                <p className="mt-2 text-sm text-white/75 leading-relaxed max-w-md">
                  I’m Cristian — an analyst and software developer who builds clean visuals
                  and data-driven narratives that make sports easier to understand and more
                  fun to argue about. I also create analytical tools that help teams and fans
                  use information more effectively. If you appreciate sharp analysis without
                  the fluff — or you’re curious about the intersection of sports and tech —
                  you’re in the right place.
                </p>
              </div>

              {/* Quick actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/about"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                  onClick={onClose}
                >
                  Read full About page
                </Link>
                <a
                  href="/Cristian_Flores_Analytics_Resume.pdf"
                  download="Cristian_Flores_Resume.pdf"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                >
                  Download resume
                </a>
              </div>

              <div className="w-full h-px bg-white/10 my-1" />

              {/* Contact block */}
              <div className="flex flex-col items-stretch w-full max-w-xs self-center gap-2">
                <div className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-2">
                  <a href={`mailto:${EMAIL}`} className="text-sm font-medium hover:underline truncate">
                    {EMAIL}
                  </a>
                  <button
                    onClick={async () => { try { await navigator.clipboard.writeText(EMAIL); } catch {} }}
                    className="text-xs rounded-lg border border-white/10 px-2 py-1 hover:bg-white/5 whitespace-nowrap"
                  >
                    Copy
                  </button>
                </div>

                {/* Open LinkedIn in a new tab to avoid iOS app handoff */}
                <button
                  type="button"
                  aria-label="Open LinkedIn profile"
                  onClick={() => window.open(LINKEDIN_URL, '_blank', 'noopener,noreferrer')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm hover:bg-white/5"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.84v2.05h.05c.53-.95 1.84-2.05 3.8-2.05C20.62 8 23 10.24 23 14.26V23h-4v-7.6c0-1.81-.03-4.13-2.52-4.13-2.52 0-2.91 1.97-2.91 4v7.73h-4V8z"/>
                  </svg>
                  <span className="font-medium">LinkedIn</span>
                </button>
              </div>

              <button
                onClick={onClose}
                className="mt-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
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
