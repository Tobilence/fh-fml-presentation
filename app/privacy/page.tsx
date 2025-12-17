import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy (Demo) · Federis AI",
  description: "Demo privacy notice for a presentation. Content is not real.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12">
      <header className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
          Legal (demo)
        </p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          Privacy
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
          This is a demo page intended for a presentation only. The content below
          is placeholder text and does not represent a real privacy notice.
        </p>
      </header>

      <section className="space-y-6">
        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 text-sm dark:border-zinc-800/80 dark:bg-zinc-950/40">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Summary (demo)
            </h2>
            <div className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-300">
              <p>
                - This demo website is not designed to collect personal data for
                marketing or profiling.
              </p>
              <p>
                - If you enter information into demo controls (e.g. the admin
                view), it may be stored in a demo database for the duration of
                the presentation.
              </p>
              <p>
                - There is no guarantee that the demo environment is operated
                under production-grade security controls.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 text-sm dark:border-zinc-800/80 dark:bg-zinc-950/40">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              What data may be processed (demo)
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-600 dark:text-zinc-300">
              <li>Basic technical logs (e.g. server logs) for operation.</li>
              <li>Demo inputs you submit inside the app (if any).</li>
              <li>
                Presentation control state (e.g. which slide/page is active),
                potentially stored via a demo backend.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 text-sm dark:border-zinc-800/80 dark:bg-zinc-950/40">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Cookies & analytics (demo)
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              This demo does not intentionally use advertising cookies. If any
              analytics are enabled during a presentation, they are for demo
              purposes only and should be removed for a real deployment.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 text-sm dark:border-zinc-800/80 dark:bg-zinc-950/40">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Contact (demo)
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              Questions about this demo? Use: demo@example.invalid
            </p>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              Legal details (demo):{" "}
              <Link
                href="/imprint"
                className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
              >
                Imprint
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


