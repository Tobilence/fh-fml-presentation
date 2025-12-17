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

            <ExploratoryDataAnalysisSection />

            <ModelDevelopmentSection />

            <ModelFinetuningSection />

            <ModelEvaluationSection />

            <FederatedLearningContent />

            <section className="gap-8 border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80">
                <div className="space-y-4">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                        6 · Findings
                    </h2>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    In this experiment, the local model emerged as the best "bang-for-your-buck": it is highly performant, straightforward to deploy, and easy to govern within a single institution. However, the federated model showed the strongest overall results, demonstrating that collaboration can boost both performance and robustness—especially when data is fragmented or when privacy requirements prevent data sharing. This suggests a practical tradeoff: local models offer efficiency and simplicity, while federated approaches unlock additional value when collaborative learning is feasible and well-governed.
                    </p>
                </div>
            </section>
        </div>
    );
}

