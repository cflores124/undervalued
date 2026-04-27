// /app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import FooterBand from "@/components/layout/FooterBand";
import HeaderBand from "@/components/layout/HeaderBand";
import BFCacheReset from "@/components/layout/BFCacheReset";
import ScrollToTop from "@/components/layout/ScrollToTop";
import OrientationGuard from "@/components/layout/OrientationGuard";
import SocialBrowserGuard from "@/components/layout/SocialBrowserGuard";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.undervaluedanalytics.com"),
  title: {
    default: "Undervalued",
    template: "%s | Undervalued",
  },
  description:
    "Undervalued is a sports intelligence platform that publishes data-driven articles, insights, and visual analysis to explain what truly drives results in sports.",
  alternates: {
    canonical: "https://www.undervaluedanalytics.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Undervalued",
    description:
      "Undervalued is a sports intelligence platform that publishes data-driven articles, insights, and visual analysis to explain what truly drives results in sports.",
    url: "https://www.undervaluedanalytics.com",
    siteName: "Undervalued",
    type: "website",
    images: [
      {
        url: "https://www.undervaluedanalytics.com/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "Undervalued Sports Intelligence",
      },
    ],
  },
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
          "min-h-dvh",
          "pt-[calc(10svh+env(safe-area-inset-top))]",
          "pb-[calc(10svh+env(safe-area-inset-bottom))]",
        ].join(" ")}
      >
        {/* Orientation lock */}
        <OrientationGuard />

        {/* UX helpers */}
        <ScrollToTop />
        <BFCacheReset />

        {/* Fixed layers */}
        <HeaderBand />
        <SiteHeader />

        {/* Hide footer in social in-app browsers */}
        <SocialBrowserGuard>
          <SiteFooter />
          <FooterBand />
        </SocialBrowserGuard>

        {/* Page content */}
        <div className="p-6 font-sans sm:p-12">
          <main className="mx-auto w-full max-w-6xl">{children}</main>
        </div>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}