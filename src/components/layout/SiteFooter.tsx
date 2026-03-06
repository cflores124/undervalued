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
        <p>© {new Date().getFullYear()} Undervalued</p>
        <nav aria-label="Footer">
          <ul className="flex items-center gap-4">
            <li><Link href="/rss.xml" className="hover:underline">RSS</Link></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">X/Twitter</a></li>
             <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}


