"use client";

import { useEffect, useState } from "react";

export default function SocialBrowserGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSocialBrowser, setIsSocialBrowser] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();

    const isSocial =
      ua.includes("twitter") ||
      ua.includes("twitterios") ||
      ua.includes("twitterandroid") ||
      ua.includes("x.com") ||
      ua.includes("instagram");

    setIsSocialBrowser(isSocial);
  }, []);

  if (isSocialBrowser) return null;

  return <>{children}</>;
}