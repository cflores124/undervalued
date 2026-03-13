'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

const ContactModal = dynamic(() => import("@/components/layout/ContactModal"), { ssr: false });

export default function SiteHeader() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  };

  const handleNavClick = () => {
    closeMobileMenu();
    scrollToTop();
  };

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
        <div className="mx-auto flex h-[10svh] w-full max-w-6xl items-center justify-between px-5 sm:px-12">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="Undervalued"
            onClick={handleNavClick}
          >
            <Image
              src="/undervaluedlogo-light.png"
              alt="Undervalued"
              width={170}
              height={170}
              className="logo-light h-auto w-[120px] sm:w-[150px]"
              priority
            />
            <Image
              src="/undervaluedlogo-dark.png"
              alt="Undervalued"
              width={170}
              height={170}
              className="logo-dark h-auto w-[120px] sm:w-[150px]"
              priority
            />
            <span className="sr-only">Undervalued</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-3 text-xs sm:flex sm:gap-6 sm:text-sm">
            <Link
              href="/"
              onClick={scrollToTop}
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

            <Link
              href="/articles"
              onClick={scrollToTop}
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

            <Link
              href="/insights"
              onClick={scrollToTop}
              className="
                nav-link rounded-xl px-2.5 py-1 sm:px-3 sm:py-1.5
                transition-colors
                hover:bg-[color-mix(in_oklab,var(--foreground)_6%,transparent)]
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[var(--ring)]
                focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]
              "
            >
              Insights
            </Link>

            <Link
              href="/about"
              onClick={scrollToTop}
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

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="
              sm:hidden inline-flex items-center justify-center rounded-xl px-3 py-2
              transition-colors
              hover:bg-[color-mix(in_oklab,var(--foreground)_6%,transparent)]
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[var(--ring)]
              focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]
            "
          >
            <span className="sr-only">Menu</span>
            <div className="flex h-5 w-5 flex-col items-center justify-center gap-[3px]">
              <span
                className={`block h-[1.5px] w-5 bg-current transition-transform duration-200 ${
                  mobileMenuOpen ? "translate-y-[4.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-current transition-opacity duration-200 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-current transition-transform duration-200 ${
                  mobileMenuOpen ? "-translate-y-[4.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div
            className="
              sm:hidden border-t
              border-[color-mix(in_oklab,var(--foreground)_10%,transparent)]
              bg-[color-mix(in_oklab,var(--background)_92%,transparent)]
              backdrop-blur-sm
            "
          >
            <nav className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3">
              <Link
                href="/"
                onClick={handleNavClick}
                className="
                  nav-link rounded-xl px-3 py-3 text-sm
                  transition-colors
                  hover:bg-[color-mix(in_oklab,var(--foreground)_6%,transparent)]
                "
              >
                Home
              </Link>

              <Link
                href="/articles"
                onClick={handleNavClick}
                className="
                  nav-link rounded-xl px-3 py-3 text-sm
                  transition-colors
                  hover:bg-[color-mix(in_oklab,var(--foreground)_6%,transparent)]
                "
              >
                Articles
              </Link>

              <Link
                href="/insights"
                onClick={handleNavClick}
                className="
                  nav-link rounded-xl px-3 py-3 text-sm
                  transition-colors
                  hover:bg-[color-mix(in_oklab,var(--foreground)_6%,transparent)]
                "
              >
                Insights
              </Link>

              <Link
                href="/about"
                onClick={handleNavClick}
                className="
                  nav-link rounded-xl px-3 py-3 text-sm
                  transition-colors
                  hover:bg-[color-mix(in_oklab,var(--foreground)_6%,transparent)]
                "
              >
                About
              </Link>

              <button
                onClick={() => {
                  closeMobileMenu();
                  setContactOpen(true);
                }}
                className="
                  nav-link rounded-xl px-3 py-3 text-left text-sm
                  transition-colors
                  hover:bg-[color-mix(in_oklab,var(--foreground)_6%,transparent)]
                "
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      {contactOpen && (
        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      )}
    </>
  );
}