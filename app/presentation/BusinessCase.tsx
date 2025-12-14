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
                Does Federated Learning make sense for you?
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base">
                Potential upsides of federated machine learning: learn from more data without moving raw data—while staying within privacy, residency, and governance constraints.
              </p>
            </header>

            <div className="mt-6 flex-1">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Potential Upsides
              </div>
              <ul className="grid gap-4 md:grid-cols-2">
                <li className="rounded-xl bg-white p-4 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
                  <div className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    Keep data where it is
                  </div>
                </li>

                <li className="rounded-xl bg-white p-4 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
                  <div className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    Better generalization
                  </div>
                </li>

                <li className="rounded-xl bg-white p-4 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
                  <div className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    Collaboration without sharing raw data
                  </div>
                </li>

                <li className="rounded-xl bg-white p-4 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
                  <div className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    Governance-friendly
                  </div>
                </li>

              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Up Next
              </div>

                <li className="rounded-xl bg-white p-4 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800 md:col-span-2">
                  <div className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    Proof of Concept: Federated vs. Local Training
                  </div>
                  <ul className="mt-2 grid gap-1 text-sm text-zinc-600 dark:text-zinc-300 sm:grid-cols-3">
                    <li>Same dataset split across sites</li>
                    <li>Train: local-only vs federated</li>
                    <li>Compare: performance &amp; overhead</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


