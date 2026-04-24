// /components/SiteFooter.tsx
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer
      role="contentinfo"
      className="
        fixed inset-x-0 z-50
        bottom-[max(env(safe-area-inset-bottom),12px)]
        h-[72px]
        bg-background/80 backdrop-blur-sm border-t border-foreground/10
      "
    >
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between gap-4 px-6 text-sm text-foreground/70 sm:px-12">
        <p>© {new Date().getFullYear()} Undervalued</p>

        <nav aria-label="Footer">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/rss" className="hover:underline">
                RSS
              </Link>
            </li>

            <li>
              <a
                href="https://www.instagram.com/undervalued.analytics?igsh=MWhsczJkZnhiYjdnag%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}


