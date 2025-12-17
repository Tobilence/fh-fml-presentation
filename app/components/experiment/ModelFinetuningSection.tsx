import Link from "next/link";

export function ModelFinetuningSection() {
    return (
        <section className="w-full border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80">
            <div className="space-y-4 max-w-none">
                <div className="space-y-3">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                        3 · Model Finetuning
                    </h2>
                    <div className="space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                        <p>
                            After the neural network was selected, we ran a{" "}
                            <span className="font-medium text-zinc-900 dark:text-zinc-50">
                                grid search
                            </span>{" "}
                            to identify a strong set of training and regularization
                            parameters. To separate “globally good” settings from
                            bank-specific ones, the same search space was evaluated both on
                            a{" "}
                            <span className="font-medium text-zinc-900 dark:text-zinc-50">
                                centralized model (all banks)
                            </span>{" "}
                            and on{" "}
                            <span className="font-medium text-zinc-900 dark:text-zinc-50">
                                each bank individually
                            </span>
                            .
                        </p>
                        <p>
                            From each run, the best-performing configurations were
                            shortlisted and then{" "}
                            <span className="font-medium text-zinc-900 dark:text-zinc-50">
                                tested in the federated setup
                            </span>{" "}
                            as well. This final step checks whether a configuration that
                            looks good in isolation remains stable when training is split
                            across clients with different data distributions.
                        </p>
                    </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                        <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            What we tuned
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                            <li>Learning rate and scheduler settings</li>
                            <li>Batch size and number of epochs</li>
                            <li>Hidden layer size / depth</li>
                            <li>Dropout and weight decay (regularization)</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                        <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            How we selected
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                            <li>Consistent train/validation split per bank</li>
                            <li>Same evaluation metric across all runs</li>
                            <li>Pick top configs, not a single “winner” only</li>
                            <li>Prefer stable training over brittle peaks</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                        <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            Federated validation
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                            <li>Verify convergence across communication rounds</li>
                            <li>Check that no single bank dominates updates</li>
                            <li>Compare per-bank performance consistency</li>
                            <li>Confirm the best configs generalize end-to-end</li>
                        </ul>
                    </div>
                </div>

                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700 dark:text-zinc-200">
                    Best Configurations
                </h3>

                <div className="grid gap-3 sm:grid-cols-3">
                    <div className="relative overflow-hidden rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50 via-white to-white p-4 text-xs shadow-sm dark:border-emerald-900/40 dark:from-emerald-950/30 dark:via-zinc-950/40 dark:to-zinc-950/40">
                        <div className="absolute inset-x-4 top-3 h-1 rounded-full bg-gradient-to-r from-emerald-400/80 via-emerald-300/40 to-transparent dark:from-emerald-300/70 dark:via-emerald-400/20" />
                        <div className="flex items-start justify-between gap-3 pt-2">
                            <div className="space-y-1">
                                <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                    Best allrounder (good recall)
                                </div>
                                <div className="flex flex-wrap gap-2 text-[11px]">
                                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-medium text-emerald-700 ring-1 ring-emerald-200/70 dark:bg-emerald-500/15 dark:text-emerald-100 dark:ring-emerald-800/60">
                                        Global / stable
                                    </span>
                                </div>
                            </div>
                            <Link
                                href="/model-cards#best-allrounder"
                                className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-medium text-zinc-700 ring-1 ring-zinc-200/80 transition hover:bg-white hover:text-zinc-900 dark:bg-zinc-950/30 dark:text-zinc-200 dark:ring-zinc-800/80 dark:hover:bg-zinc-950/60 dark:hover:text-zinc-50"
                            >
                                Model card <span className="text-zinc-400">→</span>
                            </Link>
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
                        <div className="flex items-start justify-between gap-3 pt-2">
                            <div className="space-y-1">
                                <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                    Best combined
                                </div>
                                <div className="flex flex-wrap gap-2 text-[11px]">
                                    <span className="rounded-full bg-sky-500/10 px-2 py-0.5 font-medium text-sky-700 ring-1 ring-sky-200/70 dark:bg-sky-500/15 dark:text-sky-100 dark:ring-sky-800/60">
                                        Strong overall
                                    </span>
                                </div>
                            </div>
                            <Link
                                href="/model-cards#best-combined"
                                className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-medium text-zinc-700 ring-1 ring-zinc-200/80 transition hover:bg-white hover:text-zinc-900 dark:bg-zinc-950/30 dark:text-zinc-200 dark:ring-zinc-800/80 dark:hover:bg-zinc-950/60 dark:hover:text-zinc-50"
                            >
                                Model card <span className="text-zinc-400">→</span>
                            </Link>
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
                        <div className="flex items-start justify-between gap-3 pt-2">
                            <div className="space-y-1">
                                <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                    Best federated
                                </div>
                                <div className="flex flex-wrap gap-2 text-[11px]">
                                    <span className="rounded-full bg-violet-500/10 px-2 py-0.5 font-medium text-violet-700 ring-1 ring-violet-200/70 dark:bg-violet-500/15 dark:text-violet-100 dark:ring-violet-800/60">
                                        Federated winner
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
        </section>
    );
}


