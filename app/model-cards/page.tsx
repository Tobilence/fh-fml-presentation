
// import { ModelCard, type ModelCardData } from "./ModelCard";
import { ModelCard, type ModelCardData } from "./ModelCardSmall";
import { modelMetrics } from "../presentation/model_metrics";

const models: ModelCardData[] = modelMetrics.map((entry) => ({
  name: entry.label,
  variant: entry.variant,
  status: entry.status,
  stage: entry.variant,
  owner: "Credit Risk Analytics",
  type: "Feed-forward neural network",
  size: "~180 features · 4 hidden layers",
  trainingWindow: "Applications 2021–2023",
  lastTrained: "2024‑03‑15",
  infra: "TensorFlow on‑prem · nightly batch scoring",
  description: entry.description,
  architecture: [
    "Input: ~180 engineered features",
    "Dense(32) · ReLU",
    "Dense(32) · ReLU",
    "Output: 1 · sigmoid",
  ],
  validations: [
    {
      label: "Before Postprocessing",
      performance: {
        accuracy: entry.beforePreprocessing.accuracy,
        precision: entry.beforePreprocessing.precision,
        recall: entry.beforePreprocessing.recall,
        f1: entry.beforePreprocessing.f1,
        auc: entry.beforePreprocessing.auc,
      },
      fairnessGaps: {
        selection_rate_gap: entry.beforePreprocessing.selection_rate_gap,
        TPR_gap: entry.beforePreprocessing.TPR_gap,
        FPR_gap: entry.beforePreprocessing.FPR_gap,
      },
    },
    {
      label: "After Postprocessing",
      performance: {
        accuracy: entry.afterPreprocessing.accuracy,
        precision: entry.afterPreprocessing.precision,
        recall: entry.afterPreprocessing.recall,
        f1: entry.afterPreprocessing.f1,
        auc: entry.afterPreprocessing.auc,
      },
      fairnessGaps: {
        selection_rate_gap: entry.afterPreprocessing.selection_rate_gap,
        TPR_gap: entry.afterPreprocessing.TPR_gap,
        FPR_gap: entry.afterPreprocessing.FPR_gap,
      },
    },
  ],
  metrics: [
    {
      label: "Target shuffling p-value",
      value: entry.afterPreprocessing.target_shuffling_p.toString(),
    },
  ],
  technical: {
    framework: "TensorFlow (Keras)",
    loss: "binary_crossentropy",
    optimizer: "adam",
    learningRate: "1e‑3",
    batchSize: "512",
    epochs: "10",
    preprocessing:
      entry.technical.preprocessing,
    postprocessing:
    entry.technical.postprocessing
  },
  fairness:
    "Fairness review completed; adjustments made for equalized odds and TPR parity.",
  riskNotes: "Classified as material model (MRL 2).",
  monitoring: "Monthly drift & stability reports via MRM dashboard.",
}));

export default function ModelCardsPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10">
      <header className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
          Experiment detail · Model cards
        </p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          Compare the models behind the experiment.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          This page zooms in on one experiment and its models: how each model is
          built, how it performs, and what that means for risk, operations, and
          customers.
        </p>
      </header>

        <div className="flex flex-wrap gap-5 items-start">
          {models.map((model) => (
            <ModelCard key={model.name} model={model} />
          ))}
        </div>
    </div>
  );
}

