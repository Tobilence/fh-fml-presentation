"use client";

import React from "react";
import { ExploratoryDataAnalysisSection } from "@/app/components/experiment/ExploratoryDataAnalysisSection";

export default function ExperimentPage() {
    return (
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
            <header className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                   Experiment narrative
                </p>
                <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
                    From first prototype to bank-ready AI experiment.
                </h1>
                <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </header>

            <section className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
                <div className="space-y-4 text-xs sm:text-sm">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                        1 · Business Task
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-300">
                        We start from a simple question:{" "}
                        <span className="font-medium text-zinc-900 dark:text-zinc-50">
                            what business decision are we trying to improve
                        </span>{" "}
                        without creating surprises for risk, compliance, or customers.
                    </p>
                    <ul className="mt-2 grid gap-3 sm:grid-cols-3">
                        <li className="rounded-xl border border-zinc-200/80 bg-zinc-50 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/60">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                Business goal
                            </div>
                            <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">
                                E.g. reduce losses, improve approvals, or increase automation
                                in a specific decision process.
                            </p>
                        </li>
                        <li className="rounded-xl border border-zinc-200/80 bg-zinc-50 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/60">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                Constraints
                            </div>
                            <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">
                                Regulation, internal policies, and fairness requirements that
                                shape what &ldquo;good&rdquo; looks like.
                            </p>
                        </li>
                        <li className="rounded-xl border border-zinc-200/80 bg-zinc-50 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/60">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                Success metrics
                            </div>
                            <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">
                                The KPIs you will show to risk, business, and IT stakeholders
                                when judging whether the experiment was worth doing.
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="space-y-3 rounded-2xl border border-dashed border-zinc-300/80 bg-zinc-50/80 p-5 text-xs text-zinc-600 dark:border-zinc-700/80 dark:bg-zinc-900/60 dark:text-zinc-300">
                    <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                        Where this fits in CRISP-DM
                    </div>
                    <p>
                        Use this block to orient the audience: what problem you picked,
                        where it sits in the bank, and why it is a good candidate for a
                        CRISP-DM style approach.
                    </p>
                    <p className="text-[11px] text-zinc-400 dark:text-zinc-500">
                        In the live deck, you can paste in the relevant slide or a short
                        screenshot of your process map here.
                    </p>
                    <div className="mt-2 h-40 rounded-xl border border-dashed border-zinc-300/80 bg-gradient-to-br from-zinc-50 to-zinc-100/80 dark:border-zinc-700/80 dark:from-zinc-900 dark:to-zinc-950/70 sm:h-52 md:h-64" />
                </div>
            </section>

            <ExploratoryDataAnalysisSection />

            <section className="grid gap-8 border-t border-zinc-200/80 pt-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start dark:border-zinc-800/80">
                <div className="space-y-4 text-xs sm:text-sm">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                        3 · Model Development
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-300">
                        Use this section to describe{" "}
                        <span className="font-medium text-zinc-900 dark:text-zinc-50">
                            how you moved from idea to concrete models
                        </span>
                        : which baselines you tried, what advanced approaches you tested,
                        and how this fits into your normal development workflow.
                    </p>
                    <ul className="list-disc space-y-1.5 pl-4 text-xs text-zinc-600 dark:text-zinc-300">
                        <li>Baseline models that set expectations and provide a fallback.</li>
                        <li>More complex candidates you explored and why.</li>
                        <li>Any tooling you used (notebooks, experiment tracker, CI/CD).</li>
                    </ul>
                </div>

                <div className="space-y-3 rounded-2xl border border-zinc-200/80 bg-white p-5 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                    <div className="flex items-center justify-between">
                        <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                            Architecture & training view
                        </div>
                        <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                            Replace with notebooks / architecture
                        </span>
                    </div>
                    <div className="mt-1 h-52 rounded-xl border border-dashed border-zinc-300/90 bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200/70 dark:border-zinc-700/80 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900/80 sm:h-64 md:h-72" />
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                        Drop in a high-level view of model choices here: baseline vs
                        advanced model, architectures, or a screenshot from your notebook
                        or experiment tracking tool.
                    </p>
                </div>
            </section>

            <section className="grid gap-8 border-t border-zinc-200/80 pt-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] dark:border-zinc-800/80">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                            4 · Evaluation
                        </h2>
                        <p className="max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                            Summarise how you evaluated the models: which metrics you chose,
                            how you compared versions, and how to read the SHAP plots, bar
                            charts, or other diagnostics you are about to show.
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                            <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-emerald-600 dark:text-emerald-300">
                                Metrics
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-300">
                                Core KPIs (e.g. AUC, precision/recall, business value) and how
                                they compare to the baseline.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                            <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-amber-600 dark:text-amber-300">
                                Robustness
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-300">
                                How the model behaves across time, segments, or stress
                                scenarios.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                            <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
                                Fairness & policy checks
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-300">
                                Where you explicitly checked for bias, thresholds, or other
                                policy-relevant behaviour.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid gap-8 border-t border-zinc-200/80 pt-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] dark:border-zinc-800/80">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                            5 · Model Finetuning
                        </h2>
                        <p className="max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                            Here you walk through how you tuned the model: which knobs you
                            touched, which trade-offs you explored, and how SHAP plots or
                            other diagnostics informed your final choices.
                        </p>
                    </div>
                </div>

                <div className="space-y-3 rounded-2xl border border-zinc-200/80 bg-white p-5 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                    <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                        Finetuning runs & SHAP insights
                    </div>
                    <div className="mt-2 h-48 rounded-xl border border-dashed border-zinc-300/80 bg-gradient-to-r from-emerald-100 via-sky-100 to-zinc-100/80 dark:border-zinc-700/80 dark:from-emerald-950 dark:via-sky-950 dark:to-zinc-950/80 sm:h-60 md:h-72" />
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                        Use this space to show comparisons between runs, hyperparameter
                        sweeps, or SHAP-based insights that led to the final tuning
                        decisions.
                    </p>
                </div>
            </section>

            <section className="gap-8 border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80">
                <div className="space-y-4">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                        6 · Findings
                    </h2>
                    <p className="max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                        Close by summarising what this experiment actually taught you:
                        where the model helps, where it is fragile, and which questions you
                        would bring to a risk or business committee.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                            <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
                                What works
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-300">
                                Clear strengths of the approach and situations where it clearly
                                outperforms current practice.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                            <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
                                Risks & limitations
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-300">
                                Remaining concerns, edge cases, or governance flags that would
                                need to be addressed before production.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                            <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
                                Open questions
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-300">
                                Topics you would explicitly bring to stakeholders: policy
                                choices, thresholding, or monitoring requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gap-8 border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80">
                <div className="space-y-4">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                        7 · Recommendation
                    </h2>
                    <p className="max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                        Close by summarising what this experiment actually taught you:
                        where the model helps, where it is fragile, and which questions you
                        would bring to a risk or business committee.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                            <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
                                What works
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-300">
                                Clear strengths of the approach and situations where it clearly
                                outperforms current practice.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                            <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
                                Risks & limitations
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-300">
                                Remaining concerns, edge cases, or governance flags that would
                                need to be addressed before production.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                            <div className="mb-1 text-[11px] font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
                                Open questions
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-300">
                                Topics you would explicitly bring to stakeholders: policy
                                choices, thresholding, or monitoring requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

