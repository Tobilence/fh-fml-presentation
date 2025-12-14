"use client";

import { ExploratoryDataAnalysisSection } from "@/app/components/experiment/ExploratoryDataAnalysisSection";
import { FederatedLearningContent } from "@/app/components/experiment/FederatedLearningContent";
import { ModelDevelopmentSection } from "@/app/components/experiment/ModelDevelopmentSection";
import { ModelFinetuningSection } from "@/app/components/experiment/ModelFinetuningSection";
import { ModelEvaluationSection } from "@/app/components/experiment/ModelEvaluationSection";

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

            <ModelDevelopmentSection />

            <ModelFinetuningSection />

            <ModelEvaluationSection />

            <FederatedLearningContent />

            <section className="gap-8 border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80">
                <div className="space-y-4">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                        7 · Findings
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
                        8 · Recommendation
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

