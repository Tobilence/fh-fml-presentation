import Link from "next/link";

export function ModelFinetuningSection() {
    return (
        <section className="w-full border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80">
            <div className="space-y-4 max-w-none">
                <div className="space-y-3">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                        3 · Model Finetuning
                    </h2>
                    <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                        Which Neural Network model configuration works best?
                    </h3>
                    <div className="space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                        <p>
                            To identify the optimal configuration, we ran an extensive{" "}
                            <span className="font-medium text-zinc-900 dark:text-zinc-50">
                                grid search
                            </span>{" "}
                            across various hyperparameters. This process allowed us to separate
                            globally effective settings from bank-specific ones by evaluating
                            the same search space on both centralized and individual bank models.
                        </p>
                    </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                        <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            Grid search (hyperparameters)
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                            <li>
                                <span className="font-medium text-zinc-900 dark:text-zinc-50">Grid search</span> to find the best configuration.
                            </li>
                            <li>
                                Tuned: <span className="font-medium text-zinc-900 dark:text-zinc-50">layers</span>, <span className="font-medium text-zinc-900 dark:text-zinc-50">lr</span>, <span className="font-medium text-zinc-900 dark:text-zinc-50">batch</span>, <span className="font-medium text-zinc-900 dark:text-zinc-50">optimizer</span>.
                            </li>
                            <li>Picked: stable across runs (not a lucky peak).</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                        <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            Centralized baselines
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                            <li>
                                <span className="font-medium text-zinc-900 dark:text-zinc-50">Per-bank:</span> tuned + trained locally.
                            </li>
                            <li>
                                <span className="font-medium text-zinc-900 dark:text-zinc-50">Pooled (all banks):</span> centralized reference.
                            </li>
                            <li>
                                Validated in the federated setup for{" "}
                                <span className="font-medium text-zinc-900 dark:text-zinc-50">non-IID stability</span>.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                    <div className="relative overflow-hidden rounded-2xl border border-violet-200/80 bg-gradient-to-br from-violet-50 via-white to-white p-4 text-xs shadow-sm dark:border-violet-900/40 dark:from-violet-950/25 dark:via-zinc-950/40 dark:to-zinc-950/40">
                        <div className="absolute inset-x-4 top-3 h-1 rounded-full bg-gradient-to-r from-violet-400/80 via-violet-300/40 to-transparent dark:from-violet-300/70 dark:via-violet-400/20" />
                        <div className="flex items-start justify-between gap-3 pt-2">
                            <div className="space-y-1">
                                <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                    Best config
                                </div>
                                <div className="flex flex-wrap gap-2 text-[11px]">
                                    <span className="rounded-full bg-violet-500/10 px-2 py-0.5 font-medium text-violet-700 ring-1 ring-violet-200/70 dark:bg-violet-500/15 dark:text-violet-100 dark:ring-violet-800/60">
                                        Selected from grid search
                                    </span>
                                </div>
                            </div>
                            <Link
                                href="/model-cards#best-federated"
                                className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-medium text-zinc-700 ring-1 ring-zinc-200/80 transition hover:bg-white hover:text-zinc-900 dark:bg-zinc-950/30 dark:text-zinc-200 dark:ring-zinc-800/80 dark:hover:bg-zinc-950/60 dark:hover:text-zinc-50"
                            >
                                Model card <span className="text-zinc-400">→</span>
                            </Link>
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-3 font-mono text-[11px] text-zinc-700 dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:text-zinc-200">
                            <div className="flex justify-between border-b border-zinc-200/50 pb-1 dark:border-zinc-800/50">
                                <span className="text-zinc-500 uppercase text-[10px]">Layers</span>
                                <span>(128, 64, 32)</span>
                            </div>
                            <div className="flex justify-between border-b border-zinc-200/50 pb-1 dark:border-zinc-800/50">
                                <span className="text-zinc-500 uppercase text-[10px]">LR</span>
                                <span>0.0005</span>
                            </div>
                            <div className="flex justify-between pt-1">
                                <span className="text-zinc-500 uppercase text-[10px]">Batch</span>
                                <span>512</span>
                            </div>
                            <div className="flex justify-between pt-1">
                                <span className="text-zinc-500 uppercase text-[10px]">Optimizer</span>
                                <span>adam</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/30 p-4 text-xs dark:border-emerald-900/40 dark:bg-emerald-950/10">
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                            Takeaway
                        </div>
                        <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                            <p>Best config selected — used as the evaluation reference.</p>
                            <p>
                                This configuration performed consistently well across both centralized and federated setups, making it our standard for further model comparisons.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


