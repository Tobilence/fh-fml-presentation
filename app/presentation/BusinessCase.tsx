import React from "react";

export function BusinessCase() {
  return (
    <section className="w-full py-3 sm:py-4">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex h-full flex-col px-8 pb-8 pt-7 sm:px-12 sm:pb-10 sm:pt-9">
            <header className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Federated Machine Learning · Business case 
              </div>
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Better models across institutions—without sharing raw customer
                data
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base">
                Train collaboratively while keeping data local to meet privacy,
                data residency, and governance constraints.
              </p>
            </header>

            <div className="mt-6 flex-1">
              <ul className="grid gap-4 md:grid-cols-2">
                <li className="rounded-xl bg-white p-4 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
                  <div className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    Privacy &amp; compliance
                  </div>
                  <div className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Raw data stays local; share only model updates (optionally
                    secure aggregation &amp; differential privacy).
                  </div>
                </li>

                <li className="rounded-xl bg-white p-4 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
                  <div className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    Better detection
                  </div>
                  <div className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Learn broader patterns (rare events, new fraud tactics)
                    through “network effects”.
                  </div>
                </li>

                <li className="rounded-xl bg-white p-4 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
                  <div className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    Lower risk &amp; cost
                  </div>
                  <div className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Reduce data movement, duplication, and exposure from large
                    centralized data lakes.
                  </div>
                </li>

                <li className="rounded-xl bg-white p-4 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
                  <div className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    Faster time-to-value
                  </div>
                  <div className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Reuse existing stacks; onboard subsidiaries/partners
                    incrementally.
                  </div>
                </li>

                <li className="rounded-xl bg-white p-4 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
                  <div className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    Governance-friendly
                  </div>
                  <div className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Clear audit trail (what trained where), controllable
                    participation, and policy enforcement.
                  </div>
                </li>

                <li className="rounded-xl bg-white p-4 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
                  <div className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    Pragmatic rollout
                  </div>
                  <div className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Start with 2–3 entities + one high-value model; measure lift
                    and overhead before scaling.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


