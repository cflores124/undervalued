// /app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import FooterBand from "@/components/layout/FooterBand";
import HeaderBand from "@/components/layout/HeaderBand";
import BFCacheReset from "@/components/layout/BFCacheReset";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Undervalued",
  description: "Analytics-driven sports stories told with clarity.",
  // Makes browser UI (address bar, etc.) use a dark color
  themeColor: "#0b0b0b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Forces dark color-scheme for built-in form controls & scrollbars */}
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#0b0b0b" />
      </head>

      {/* body is the scroll container; reserve space for fixed header & footer */}
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          // Dark base colors
          "antialiased bg-[#0b0b0b] text-neutral-200",
          // Smooth selection color (optional)
          "selection:bg-lime-300/20 selection:text-neutral-100",
          // Layout paddings for fixed header/footer
          "min-h-dvh overflow-y-scroll",
          "pt-[calc(10svh+env(safe-area-inset-top))]",
          "pb-[calc(10svh+env(safe-area-inset-bottom))]",
        ].join(" ")}
      >
        {/* Reset transforms when returning from iOS/Safari back-forward cache */}
        <BFCacheReset />

        {/* Fixed layers */}
        <HeaderBand />
        <SiteHeader />
        <SiteFooter />
        <FooterBand />

        {/* Page content */}
        <div className="font-sans p-6 sm:p-12">
          <main className="w-full max-w-6xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
