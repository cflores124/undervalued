"use client";

import { useState } from "react";
import Link from "next/link";

export default function RSSPage() {
  const feedUrl = "https://undervaluedanalytics.com/rss.xml";
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(feedUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <section className="w-full flex justify-center">
      <div className="mx-auto max-w-3xl text-center">

        {/* Title */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Subscribe via RSS
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          Undervalued publishes long-form sports analysis exploring the strategy,
          mechanics, and statistical patterns that shape competition.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          If you would like to automatically receive new articles, you can
          subscribe to the Undervalued RSS feed using a feed reader.
        </p>

        {/* Feed URL Box */}
        <div className="mt-10 flex items-center justify-between gap-3 rounded-2xl border border-neutral-300 bg-white/80 p-4 font-mono text-sm text-neutral-900 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.06] dark:text-neutral-100">

          <span className="truncate">{feedUrl}</span>

          <button
            onClick={handleCopy}
            className="flex-shrink-0 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium transition hover:bg-white/15"
          >
            {copied ? "Copied!" : "Copy"}
          </button>

        </div>

        {/* Instructions */}
        <p className="mt-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          Paste the link into an RSS reader such as{" "}
          <a
            href="https://feedly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Feedly
          </a>
          ,{" "}
          <a
            href="https://www.inoreader.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Inoreader
          </a>
          , or{" "}
          <a
            href="https://netnewswire.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            NetNewsWire
          </a>.
        </p>

        {/* Raw feed */}
        <div className="mt-10">
          <Link
            href="/rss.xml"
            className="text-lg underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            View the raw RSS feed
          </Link>
        </div>

      </div>
    </section>
  );
}