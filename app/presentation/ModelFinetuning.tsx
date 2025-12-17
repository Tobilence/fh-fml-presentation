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
                        We ran a <span className="font-medium text-zinc-900 dark:text-zinc-50">grid search</span> to find
                        strong training + regularization settings.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>Tuned: learning rate, epochs, batch size, network depth/width, dropout, weight decay.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>Selection: consistent split, same metric, prefer stable configs (not just a single lucky peak).</span>
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
                        <span className="font-medium text-zinc-900 dark:text-zinc-50">Per-bank models:</span> each bank tuned
                        and trained on its own dataset.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>
                        <span className="font-medium text-zinc-900 dark:text-zinc-50">Combined model (all banks):</span> we also
                        trained a model on the full pooled dataset as a centralized reference.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>
                        We shortlisted top configurations and{" "}
                        <span className="font-medium text-zinc-900 dark:text-zinc-50">
                          validated them in the federated setup
                        </span>{" "}
                        to confirm stability across non-identical client data.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="md:col-span-2">
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    <div className="relative overflow-hidden rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50 via-white to-white p-4 text-xs shadow-sm dark:border-emerald-900/40 dark:from-emerald-950/30 dark:via-zinc-950/40 dark:to-zinc-950/40">
                      <div className="absolute inset-x-4 top-3 h-1 rounded-full bg-gradient-to-r from-emerald-400/80 via-emerald-300/40 to-transparent dark:from-emerald-300/70 dark:via-emerald-400/20" />
                      <div className="space-y-1 pt-2">
                        <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                          Best allrounder (good recall)
                        </div>
                        <div className="flex flex-wrap gap-2 text-[11px]">
                          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-medium text-emerald-700 ring-1 ring-emerald-200/70 dark:bg-emerald-500/15 dark:text-emerald-100 dark:ring-emerald-800/60">
                            Global / stable
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 rounded-xl border border-zinc-200/80 bg-zinc-50 p-3 font-mono text-[11px] leading-relaxed text-zinc-700 dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:text-zinc-200">
                        <div>epochs: 10</div>
                        <div>batch_size: 512</div>
                        <div>layer_units: (32, 32)</div>
                        <div>optimizer: adam</div>
                        <div>learning_rate: 1e-3</div>
                        <div>loss: binary_crossentropy</div>
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border border-sky-200/80 bg-gradient-to-br from-sky-50 via-white to-white p-4 text-xs shadow-sm dark:border-sky-900/40 dark:from-sky-950/25 dark:via-zinc-950/40 dark:to-zinc-950/40">
                      <div className="absolute inset-x-4 top-3 h-1 rounded-full bg-gradient-to-r from-sky-400/80 via-sky-300/40 to-transparent dark:from-sky-300/70 dark:via-sky-400/20" />
                      <div className="space-y-1 pt-2">
                        <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                          Best combined
                        </div>
                        <div className="flex flex-wrap gap-2 text-[11px]">
                          <span className="rounded-full bg-sky-500/10 px-2 py-0.5 font-medium text-sky-700 ring-1 ring-sky-200/70 dark:bg-sky-500/15 dark:text-sky-100 dark:ring-sky-800/60">
                            Strong overall
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 rounded-xl border border-zinc-200/80 bg-zinc-50 p-3 font-mono text-[11px] leading-relaxed text-zinc-700 dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:text-zinc-200">
                        <div>epochs: 25</div>
                        <div>batch_size: 512</div>
                        <div>layer_units: (128, 64, 32)</div>
                        <div>optimizer: adam</div>
                        <div>learning_rate: 0.0005</div>
                        <div>loss: binary_crossentropy</div>
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border border-violet-200/80 bg-gradient-to-br from-violet-50 via-white to-white p-4 text-xs shadow-sm dark:border-violet-900/40 dark:from-violet-950/25 dark:via-zinc-950/40 dark:to-zinc-950/40">
                      <div className="absolute inset-x-4 top-3 h-1 rounded-full bg-gradient-to-r from-violet-400/80 via-violet-300/40 to-transparent dark:from-violet-300/70 dark:via-violet-400/20" />
                      <div className="space-y-1 pt-2">
                        <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                          Best federated
                        </div>
                        <div className="flex flex-wrap gap-2 text-[11px]">
                          <span className="rounded-full bg-violet-500/10 px-2 py-0.5 font-medium text-violet-700 ring-1 ring-violet-200/70 dark:bg-violet-500/15 dark:text-violet-100 dark:ring-violet-800/60">
                            Federated winner
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 rounded-xl border border-zinc-200/80 bg-zinc-50 p-3 font-mono text-[11px] leading-relaxed text-zinc-700 dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:text-zinc-200">
                        <div>epochs: 25</div>
                        <div>batch_size: 512</div>
                        <div>layer_units: (128, 64, 32)</div>
                        <div>optimizer: adam</div>
                        <div>learning_rate: 0.0005</div>
                        <div>loss: binary_crossentropy</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-emerald-200/80 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-100 md:col-span-2">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-200">
                    Takeaway
                  </div>
                  <div className="mt-2 leading-relaxed">
                    Three models have been trained using the optimal hyperparameters found earlier, and are ready for further evaluation and comparison.
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
