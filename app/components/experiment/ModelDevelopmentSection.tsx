export function ModelDevelopmentSection() {
    return (
        <section className="border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80">
            <div className="space-y-4">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    3 · Model Development
                </h2>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    A consistent feature pipeline and evaluation protocol were used to
                    compare centralised and federated models under the same conditions.
                </p>

                <div className="grid gap-5">
                    <div className="space-y-2">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700 dark:text-zinc-200">
                            Feature engineering
                        </h3>
                        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                            Before training, the raw Adult/Census dataset is transformed
                            into a stable, model-ready feature set: fewer rare categories,
                            consistent representations, and a clean numeric matrix for
                            downstream models. This work is done to reduce sparsity and
                            noise in categorical tails, to make numeric scales comparable,
                            and to ensure that the same signals are presented to every model
                            run. In a federated context, this consistency becomes even more
                            important because performance differences should be driven by
                            learning setup—not by mismatched preprocessing.
                        </p>
                    </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                        <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            Discretize continuous fields
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                            <li>Age → 5 bins (16–25 … 56+)</li>
                            <li>Hours/week → 5 bins (0–20 … &gt;50)</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                        <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            Consolidate rare categories
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                            <li>Government-related workclasses → &ldquo;government&rdquo;</li>
                            <li>
                                &ldquo;Never-worked&rdquo; / &ldquo;Without-pay&rdquo; →
                                &ldquo;no-income&rdquo;
                            </li>
                            <li>Spouse + relationship simplifications</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                        <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            Encode & scale
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                            <li>
                                One-hot: workclass, marital-status, occupation, relationship,
                                gender
                            </li>
                            <li>Min–max: capital-gain, capital-loss</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
                        <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            Target & cleanup
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-600 dark:text-zinc-300">
                            <li>
                                Label: <span className="font-medium">income_gr_50k</span> (1
                                if income &gt; 50K)
                            </li>
                            <li>Drop source columns used to derive bins / merges</li>
                            <li>Optional: one-hot the binned fields</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700 dark:text-zinc-200">
                            Data split strategy
                        </h3>
                        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                            After preprocessing, separate train/test splits were created
                            for each bank dataset. Evaluation was kept consistent within
                            each institution and information leakage across banks was
                            prevented.
                        </p>
                        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                            With the same splitting strategy, models could be compared both
                            locally (centralised, per bank) and collaboratively (federated
                            across banks) under equivalent conditions.
                        </p>
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2">
                        <div className="rounded-xl border border-zinc-200/80 bg-zinc-50 p-3 text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:text-zinc-300">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                No leakage
                            </div>
                            <p className="mt-1">
                                Banks are evaluated independently—no cross-bank “peeking”
                                through shared splits.
                            </p>
                        </div>
                        <div className="rounded-xl border border-zinc-200/80 bg-zinc-50 p-3 text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:text-zinc-300">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                Apples-to-apples
                            </div>
                            <p className="mt-1">
                                Centralised vs federated comparisons use the same evaluation
                                protocol.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700 dark:text-zinc-200">
                            Models
                        </h3>
                        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                            Five model families were trained and evaluated in both settings:
                            XGBoost, SVM, Logistic Regression, a Neural Network, and Naive
                            Bayes. Similar accuracy (~84%) was reached by many predictors,
                            so accuracy alone wasn&rsquo;t sufficient to judge model quality.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {[
                            "XGBoost",
                            "SVM",
                            "Logistic Regression",
                            "Neural Network",
                            "Naive Bayes",
                        ].map((label) => (
                            <span
                                key={label}
                                className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                            >
                                {label}
                            </span>
                        ))}
                    </div>

                    <div className="grid gap-2 sm:grid-cols-3">
                        <div className="rounded-xl border border-zinc-200/80 bg-zinc-50 p-3 text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:text-zinc-300">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                Discarded
                            </div>
                            <p className="mt-1">
                                Naive Bayes was discarded because a very weak F1 score was
                                observed, indicating an unfavourable precision–recall
                                balance despite acceptable accuracy.
                            </p>
                        </div>
                        <div className="rounded-xl border border-zinc-200/80 bg-zinc-50 p-3 text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:text-zinc-300">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                Best (centralised)
                            </div>
                            <p className="mt-1">
                                The strongest performance in the per-bank setting was
                                consistently obtained by XGBoost and Neural Networks.
                            </p>
                        </div>
                        <div className="rounded-xl border border-zinc-200/80 bg-zinc-50 p-3 text-xs text-zinc-600 dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:text-zinc-300">
                            <div className="text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                Best (federated)
                            </div>
                            <p className="mt-1">
                                The best overall performance in the federated setting was
                                achieved by Neural Networks and Logistic Regression.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-xl border border-emerald-200/80 bg-emerald-50 p-4 text-xs text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-100">
                        <div className="text-[11px] font-medium uppercase tracking-wide text-emerald-700 dark:text-emerald-200">
                            Key observation
                        </div>
                        <p className="mt-1 text-sm leading-relaxed">
                            Neural Networks were the only model type for which an
                            improvement was observed under federated learning. Compared to
                            centralised neural nets, stronger recall was achieved by the
                            federated neural net, indicating better sensitivity to the
                            positive class.
                        </p>
                        <p className="mt-2 text-sm leading-relaxed">
                            Based on this unique advantage and strong overall metrics,
                            neural networks were selected for further analysis and
                            optimisation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}


