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
          bg-background/80 backdrop-blur-sm border-b border-foreground/10
          [padding-top:env(safe-area-inset-top)]
        "
      >
        <div className="mx-auto w-full max-w-6xl h-[10svh] px-6 sm:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Undervalued">
            <Image
              src="/undervaluedlogo.png"
              alt="Undervalued"
              width={130}
              height={130}
              className="w-28 h-auto sm:w-[130px]"
              priority
            />
            <span className="sr-only">Undervalued</span>
          </Link>

          {/* Nav — visible on mobile with tighter spacing/sizing */}
          <nav className="flex items-center gap-3 text-xs sm:gap-6 sm:text-sm">
            <Link
              href="/articles"
              className="nav-link rounded-xl px-2.5 py-1 hover:bg-white/5 sm:px-3 sm:py-1.5"
            >
              Articles
            </Link>
            <Link
              href="/gallery"
              className="nav-link rounded-xl px-2.5 py-1 hover:bg-white/5 sm:px-3 sm:py-1.5"
            >
              Gallery
            </Link>
            <button
              onClick={() => setContactOpen(true)}
              className="nav-link rounded-xl px-2.5 py-1 hover:bg-white/5 sm:px-3 sm:py-1.5"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Mount modal only when opened (hydration-safe with ssr:false) */}
      {contactOpen && (
        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      )}
    </>
  );
}
