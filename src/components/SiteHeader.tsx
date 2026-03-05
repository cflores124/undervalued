// /components/SiteHeader.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

// Lazy-load the modal; no SSR markup
const ContactModal = dynamic(() => import("@/components/ContactModal"), { ssr: false });

export default function SiteHeader() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <header
        role="banner"
        className="
          fixed inset-x-0 top-0 z-50
          bg-[color-mix(in_oklab,var(--background)_78%,transparent)]
          backdrop-blur-sm
          border-b border-[color-mix(in_oklab,var(--foreground)_10%,transparent)]
          [padding-top:env(safe-area-inset-top)]
        "
      >
        <div className="mx-auto w-full max-w-6xl h-[10svh] px-6 sm:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Undervalued">
            <Image
              src="/undervaluedlogo-light.png"
              alt="Undervalued"
              width={130}
              height={130}
              className="w-28 h-auto sm:w-[130px] logo-light"
              priority
            />
            <Image
              src="/undervaluedlogo-dark.png"
              alt="Undervalued"
              width={130}
              height={130}
              className="w-28 h-auto sm:w-[130px] logo-dark"
              priority
            />
            <span className="sr-only">Undervalued</span>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-3 text-xs sm:gap-6 sm:text-sm">
            
            {/* Home */}
            <Link
              href="/"
              className="
                nav-link rounded-xl px-2.5 py-1 sm:px-3 sm:py-1.5
                transition-colors
                hover:bg-[color-mix(in_oklab,var(--foreground)_6%,transparent)]
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[var(--ring)]
                focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]
              "
            >
              Home
            </Link>

            {/* Articles */}
            <Link
              href="/articles"
              className="
                nav-link rounded-xl px-2.5 py-1 sm:px-3 sm:py-1.5
                transition-colors
                hover:bg-[color-mix(in_oklab,var(--foreground)_6%,transparent)]
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[var(--ring)]
                focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]
              "
            >
              Articles
            </Link>

            {/* Gallery */}
            <Link
              href="/gallery"
              className="
                nav-link rounded-xl px-2.5 py-1 sm:px-3 sm:py-1.5
                transition-colors
                hover:bg-[color-mix(in_oklab,var(--foreground)_6%,transparent)]
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[var(--ring)]
                focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]
              "
            >
              Athlete Highlights
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="
                nav-link rounded-xl px-2.5 py-1 sm:px-3 sm:py-1.5
                transition-colors
                hover:bg-[color-mix(in_oklab,var(--foreground)_6%,transparent)]
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[var(--ring)]
                focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]
              "
            >
              About
            </Link>

            {/* Contact */}
            <button
              onClick={() => setContactOpen(true)}
              className="
                nav-link rounded-xl px-2.5 py-1 sm:px-3 sm:py-1.5
                transition-colors
                hover:bg-[color-mix(in_oklab,var(--foreground)_6%,transparent)]
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[var(--ring)]
                focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]
              "
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Mount modal only when opened */}
      {contactOpen && (
        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      )}
    </>
  );
}