import React from "react";

export function ModelDevelopment() {
  return (
    <section className="w-full py-3 sm:py-4">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex h-full flex-col px-8 pb-8 pt-7 sm:px-12 sm:pb-10 sm:pt-9">
            <header className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Federated Machine Learning · Experiment setup
              </div>
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Experiment setup
              </h2>
            </header>

            <div className="mt-6 flex-1">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-white p-4 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Training setup
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
                    <li>
                      <span className="font-medium text-zinc-900 dark:text-zinc-50">
                        Centralized (per bank):
                      </span>{" "}
                      each bank trains on its own data only.
                    </li>
                    <li>
                      <span className="font-medium text-zinc-900 dark:text-zinc-50">
                        Federated:
                      </span>{" "}
                      banks train locally and share model updates (not raw data) to learn a global model.
                    </li>
                    <li>
                      Identical preprocessing and evaluation protocol to ensure an apples-to-apples comparison.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-4 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Models tested
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "SVM",
                      "Naive Bayes",
                      "XGBoost",
                      "Neural Network",
                      "Logistic Regression",
                    ].map((label) => (
                      <span
                        key={label}
                        className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
                    Similar performance was observed for most models across both settings, motivating evaluation beyond accuracy. Particular emphasis was placed on <span className="font-medium">precision</span> and <span className="font-medium">recall</span>.
                  </div>
                </div>

                  <div className="md:col-span-2 rounded-xl border border-emerald-200/80 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-100">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-200">
                      Key insight
                    </div>
                    <p className="mt-2 leading-relaxed">
                      <span className="font-semibold">Federated neural networks achieved higher recall</span> than per-bank centralized models. This is why neural networks were chosen for further investigation.
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
