import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Imprint (Demo) · Federis AI",
  description: "Demo imprint page for a presentation. Content is not real.",
};

export default function ImprintPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12">
      <header className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
          Legal (demo)
        </p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          Imprint
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
          This is a demo page intended for a presentation only. The content below
          is placeholder text and does not represent a real company or legal
          information.
        </p>
      </header>

      <section className="space-y-6">
        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 text-sm dark:border-zinc-800/80 dark:bg-zinc-950/40">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Provider
            </h2>
            <div className="mt-4 space-y-2 text-zinc-600 dark:text-zinc-300">
              <p className="font-medium text-zinc-900 dark:text-zinc-50">
                Federis AI (Demo Entity)
              </p>
              <p>Demo Street 12</p>
              <p>1010 Demo City</p>
              <p>Demo Country</p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 text-sm dark:border-zinc-800/80 dark:bg-zinc-950/40">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Contact
            </h2>
            <div className="mt-4 space-y-2 text-zinc-600 dark:text-zinc-300">
              <p>Email: demo@example.invalid</p>
              <p>Phone: +00 000 000000</p>
              <p>Website: this demo app</p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 text-sm dark:border-zinc-800/80 dark:bg-zinc-950/40">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Responsible for content
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              Demo Responsible Person, Demo Street 12, 1010 Demo City.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 text-sm dark:border-zinc-800/80 dark:bg-zinc-950/40">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Disclaimers (demo)
            </h2>
            <div className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-300">
              <p>
                - This application is a presentation demo. It is not an offer,
                product, or regulated financial service.
              </p>
              <p>
                - No guarantee is given for accuracy, completeness, or
                timeliness of the demo content.
              </p>
              <p>
                - External links (if any) are included for demonstration
                purposes only.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


