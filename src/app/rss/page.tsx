import Link from "next/link";

export default function RSSPage() {
  const feedUrl = "https://undervaluedanalytics.com/rss.xml";

  return (
    <section className="w-full">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl dark:text-neutral-50">
          Subscribe via RSS
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          Undervalued publishes long-form sports analysis exploring the strategy,
          mechanics, and statistical patterns that shape competition.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          If you would like to automatically receive new articles, you can
          subscribe to the Undervalued RSS feed using a feed reader.
        </p>

        <div className="mt-8 rounded-2xl border border-neutral-300 bg-white/80 p-4 font-mono text-sm text-neutral-900 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.06] dark:text-neutral-100">
          {feedUrl}
        </div>

        <p className="mt-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          Copy this URL and paste it into an RSS reader such as{" "}
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
          </a>
          .
        </p>

        <div className="mt-10">
          <Link
            href="/rss.xml"
            className="text-lg text-neutral-900 underline underline-offset-4 transition-opacity hover:opacity-70 dark:text-neutral-100"
          >
            View the raw RSS feed
          </Link>
        </div>
      </div>
    </section>
  );
}