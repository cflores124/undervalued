// /components/SiteFooter.tsx
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer
      role="contentinfo"
      className="
        fixed inset-x-0 bottom-0 h-[10svh] z-50
        bg-background/80 backdrop-blur-sm border-t border-foreground/10
        pt-2
        [padding-bottom:env(safe-area-inset-bottom)]
      "
    >
      <div className="mx-auto w-full max-w-6xl h-full px-6 sm:px-12 flex items-center justify-between gap-4 text-sm text-foreground/70">
        
        {/* Left */}
        <p>© {new Date().getFullYear()} Undervalued</p>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-4">

          {/* RSS (keep text, no icon needed unless you want one) */}
          <Link href="/rss" className="hover:opacity-80 transition">
            RSS
          </Link>

          {/* X / Twitter */}
          <a
            href="https://x.com/undervaluedsi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
            aria-label="X"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M18.244 2H21l-6.56 7.49L22 22h-6.828l-5.348-6.986L3.6 22H1l7.02-8.02L2 2h6.828l4.87 6.403L18.244 2zm-2.392 18h1.885L7.149 4H5.106l10.746 16z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/undervalued.analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5c3.176 0 5.75-2.574 5.75-5.75v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm8.875 1.125a.875.875 0 100 1.75.875.875 0 000-1.75zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
            </svg>
          </a>

        </div>
      </div>
    </footer>
  );
}
