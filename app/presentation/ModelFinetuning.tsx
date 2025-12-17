import React from "react";

export function ModelFinetuning() {
  return (
    <section className="w-full py-3 sm:py-4">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex h-full flex-col px-8 pb-8 pt-7 sm:px-12 sm:pb-10 sm:pt-9">
            <header className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Model Finetuning
              </div>
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Which Neural Network model configuration works best?
              </h2>
            </header>

            <div className="mt-6 flex-1">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-white p-4 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Grid search (hyperparameters)
                  </div>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>
                        <span className="font-medium text-zinc-900 dark:text-zinc-50">Grid search</span> to find the best
                        configuration.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>
                        Tuned:{" "}
                        <span className="font-medium text-zinc-900 dark:text-zinc-50">layers</span>,{" "}
                        <span className="font-medium text-zinc-900 dark:text-zinc-50">lr</span>,{" "}
                        <span className="font-medium text-zinc-900 dark:text-zinc-50">batch</span>,{" "}
                        <span className="font-medium text-zinc-900 dark:text-zinc-50">optimizer</span>.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>Picked: stable across runs (not a lucky peak).</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white p-4 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Centralized baselines (for comparison)
                  </div>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>
                        <span className="font-medium text-zinc-900 dark:text-zinc-50">Per-bank:</span> tuned + trained locally.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>
                        <span className="font-medium text-zinc-900 dark:text-zinc-50">Pooled (all banks):</span> centralized
                        reference.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>
                        We took the best configuration and{" "}
                        <span className="font-medium text-zinc-900 dark:text-zinc-50">
                          validated it in the federated setup
                        </span>{" "}
                        for non-IID stability.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="mt-3 h-full">
                    <div className="relative overflow-hidden rounded-2xl border border-violet-200/80 bg-gradient-to-br from-violet-50 via-white to-white p-5 shadow-sm dark:border-violet-900/40 dark:from-violet-950/25 dark:via-zinc-950/40 dark:to-zinc-950/40">
                      <div className="absolute inset-x-5 top-3 h-1 rounded-full bg-gradient-to-r from-violet-400/80 via-violet-300/40 to-transparent dark:from-violet-300/70 dark:via-violet-400/20" />
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                          Best config
                        </div>
                        <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-[11px] font-medium text-violet-700 ring-1 ring-violet-200/70 dark:bg-violet-500/15 dark:text-violet-100 dark:ring-violet-800/60">
                          Selected from grid search
                        </span>
                      </div>
                      <div className="mt-3 grid gap-2 rounded-xl border border-zinc-200/80 bg-white/70 p-4 text-sm text-zinc-800 backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:text-zinc-100 sm:grid-cols-2">
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            Layers
                          </span>
                          <span className="font-mono text-[12px]">(128, 64, 32)</span>
                        </div>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">LR</span>
                          <span className="font-mono text-[12px]">0.0005</span>
                        </div>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            Batch
                          </span>
                          <span className="font-mono text-[12px]">512</span>
                        </div>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            Optimizer
                          </span>
                          <span className="font-mono text-[12px]">adam</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-emerald-200/80 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-100">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-200">
                    Takeaway
                  </div>
                  <div className="mt-2 space-y-1.5 leading-relaxed">
                    <p>Best config selected — used as the evaluation reference.</p>
                    <p>
                      This configuration performed consistently well across both centralized and federated setups, making it our
                      standard for further model comparisons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
