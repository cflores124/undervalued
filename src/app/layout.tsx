// /app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import FooterBand from "@/components/layout/FooterBand";
import HeaderBand from "@/components/layout/HeaderBand";
import BFCacheReset from "@/components/layout/BFCacheReset";
import ScrollToTop from "@/components/layout/ScrollToTop";
import OrientationGuard from "@/components/layout/OrientationGuard";
import TwitterBrowserGuard from "@/components/layout/TwitterBrowserGuard";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Undervalued",
  description: "Analytics-driven sports stories told with clarity.",
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark" />
      </head>

      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          "antialiased bg-[#0b0b0b] text-neutral-200",
          "selection:bg-lime-300/20 selection:text-neutral-100",
          "min-h-dvh overflow-y-scroll",
          "pt-[calc(10svh+env(safe-area-inset-top))]",
          "pb-[calc(10svh+env(safe-area-inset-bottom))]",
        ].join(" ")}
      >
        <OrientationGuard />

        <ScrollToTop />
        <BFCacheReset />

        <HeaderBand />
        <SiteHeader />

        <TwitterBrowserGuard>
          <SiteFooter />
          <FooterBand />
        </TwitterBrowserGuard>

        <div className="p-6 font-sans sm:p-12">
          <main className="mx-auto w-full max-w-6xl">{children}</main>
        </div>
      </body>
    </html>
  );
}