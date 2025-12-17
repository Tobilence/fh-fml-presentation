export function ModelEvaluationSection() {
    return (
        <section className="w-full border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80">
            <div className="space-y-4 max-w-none">
                <div className="space-y-3">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                        4 · Evaluation
                    </h2>


                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700 dark:text-zinc-200">
                        Feature Importance
                    </h3>

                    <div className="space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                            Beyond performance metrics, <span className="font-medium text-zinc-900 dark:text-zinc-50">interpretability</span> is also evaluated: an understanding is sought of which signals drive predictions and in which direction. To achieve this, a SHAP (SHapley Additive exPlanations) summary plot is used, providing a transparent view of <span className="font-medium text-zinc-900 dark:text-zinc-50">which features matter most</span> and whether they typically raise or lower the model output. This interpretability is used to support governance discussions—such as monitoring shifts in feature distributions—and to help validate that alignment with domain expectations is achieved.
                        </p>

                        <div className="mt-4 grid gap-4 md:grid-cols-2 md:items-start">
                            <div className="space-y-3">
                                <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
                                    <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                                        <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                            How to read the plot
                                        </div>
                                        <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                                            <li>
                                                Each dot is one observation; its position on the
                                                x-axis is the SHAP value (impact on the
                                                prediction).
                                            </li>
                                            <li>
                                                Values to the right push the model toward
                                                predicting the positive class; values to the left
                                                push it away.
                                            </li>
                                            <li>
                                                Color encodes the feature value (red = higher,
                                                blue = lower; for binary one-hot features, this
                                                often behaves like 1 vs 0).
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                                        <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                            Feature importance (global)
                                        </div>
                                        <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                                            The y-axis order is the global ranking: features at
                                            the top have the largest average absolute impact
                                            across the dataset.
                                        </p>
                                        <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                                            <li>
                                                Strongest drivers here include{" "}
                                                <span className="font-medium">
                                                    marital / relationship indicators
                                                </span>
                                                , <span className="font-medium">age bins</span>,{" "}
                                                <span className="font-medium">
                                                    capital gain/loss
                                                </span>
                                                , and{" "}
                                                <span className="font-medium">education bins</span>
                                                .
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                                        <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                            What we learn from it
                                        </div>
                                        <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                                            <li>
                                                <span className="font-medium">Capital gain</span>{" "}
                                                presence shows large positive impacts (many red
                                                points on the right), pushing the model strongly
                                                toward the positive class.
                                            </li>
                                            <li>
                                                The youngest{" "}
                                                <span className="font-medium">age bin</span>{" "}
                                                concentrates on the negative side, indicating
                                                lower predicted probability for the positive class
                                                in that group.
                                            </li>
                                            <li>
                                                <span className="font-medium">Education</span>{" "}
                                                bins show both negative and positive
                                                contributions, depending on the specific bin
                                                (lower vs higher levels).
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <figure className="w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-2 dark:border-zinc-800/80 dark:bg-zinc-950/40">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/shap_values_combined_banks.png"
                                    alt="SHAP summary (beeswarm) plot showing feature impact on the model output."
                                    className="h-auto w-full rounded-xl"
                                />
                                <figcaption className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                                    SHAP summary (beeswarm) plot for the combined-banks model.
                                    Features are sorted by overall importance (top = most
                                    important).
                                </figcaption>
                            </figure>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}


