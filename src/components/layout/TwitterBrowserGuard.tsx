"use client";

import { useEffect, useState } from "react";

export default function TwitterBrowserGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTwitterBrowser, setIsTwitterBrowser] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();

    const isTwitter =
      ua.includes("twitter") ||
      ua.includes("twitterios") ||
      ua.includes("twitterandroid") ||
      ua.includes("x.com");

    setIsTwitterBrowser(isTwitter);
  }, []);

  if (isTwitterBrowser) return null;

  return <>{children}</>;
}