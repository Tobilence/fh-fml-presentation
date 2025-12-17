import React from "react";
import { ModelCard, type ModelCardData } from "../model-cards/ModelCard";

const FEDERATED_MODEL: ModelCardData = {
  name: "Federated Neural Network",
  variant: "Federated (FedAvg)",
  status: "Active",
  stage: "Production-like",
  owner: "FML Team",
  type: "Binary classification",
  size: "Tabular NN · 2 hidden layers",
  trainingWindow: "Historical dataset (banks A–C)",
  lastTrained: "Recently",
  infra: "Local / demo",
  description:
    "A federated neural network trained across multiple banks without sharing raw data.",
  architecture: [
    "Input: tabular features",
    "Dense(32) + ReLU",
    "Dense(32) + ReLU",
    "Dense(1) + Sigmoid",
  ],
  metrics: [
    { label: "Primary metric", value: "Recall" },
    { label: "Secondary metric", value: "Precision" },
  ],
  technical: {
    framework: "TensorFlow / Keras",
    loss: "binary_crossentropy",
    optimizer: "adam",
    learningRate: "1e-3",
    batchSize: "512",
    epochs: "10",
    finalModelParams: `{
  "aggregation": "FedAvg",
  "epochs": 10,
  "batch_size": 512,
  "layer_units": [32, 32],
  "optimizer": "adam",
  "learning_rate": 1e-3,
  "loss": "binary_crossentropy"
}`,
    preprocessing: "Standard scaling + consistent feature schema across clients.",
    postprocessing: "Optional fairness postprocessing (demo).",
    regularisation: "Dropout / weight decay (config dependent).",
  },
  validations: [
    {
      label: "before",
      performance: {
        accuracy: 0.822851,
        precision: 0.716653,
        recall: 0.472918,
        f1: 0.569815,
        auc: 0.847183,
      },
      fairnessGaps: {
        selection_rate_gap: 0.122095,
        TPR_gap: 0.041578,
        FPR_gap: 0.043034,
      },
    },
    {
      label: "after",
      performance: {
        accuracy: 0.820914,
        precision: 0.692563,
        recall: 0.500151,
        f1: 0.580837,
        auc: 0.847183,
      },
      fairnessGaps: {
        selection_rate_gap: 0.122095,
        TPR_gap: 0.041578,
        FPR_gap: 0.043034,
      },
    },
  ],
  fairness: "Fairness analysed separately (overall metrics shown here).",
  riskNotes: "Demo content — replace with real risks and mitigations.",
  monitoring: "Track drift + fairness metrics per bank and per subgroup.",
};

const EACH_BANK_LOCAL: ModelCardData = {
  ...FEDERATED_MODEL,
  variant: "Federated (weighted)",
  technical: {
    ...FEDERATED_MODEL.technical,
    finalModelParams: `{
  "aggregation": "Weighted FedAvg",
  "aggregation_weights": "by client sample size",
  "epochs": 10,
  "batch_size": 512,
  "layer_units": [32, 32],
  "optimizer": "adam",
  "learning_rate": 1e-3,
  "loss": "binary_crossentropy"
}`,
  },
  validations: [
    {
      label: "before",
      performance: {
        accuracy: 0.81,
        precision: 0.73,
        recall: 0.33,
        f1: 0.44,
        auc: 0.85
      },
      fairnessGaps: {
        selection_rate_gap: 0.10,
        TPR_gap: 0.05,
        FPR_gap: 0.04,
      },
    },
    {
      label: "after",
      performance: {
        accuracy: 0.831895,
        precision: 0.737677,
        recall: 0.500302,
        f1: 0.596232,
        auc: 0.867154,
      },
      fairnessGaps: {
        selection_rate_gap: 0.135351,
        TPR_gap: 0.040622,
        FPR_gap: 0.052252,
      },
    },
  ],
};

function ModelCardSlideFrame({
  subtitle,
  model,
}: {
  subtitle: string;
  model: ModelCardData;
}) {
  return (
    <section className="w-full py-3 sm:py-4">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex h-full flex-col px-8 pb-8 pt-7 sm:px-12 sm:pb-10 sm:pt-9">
            <header className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Documentation · Transparency
              </div>
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Model card
              </h2>
              <div className="text-sm text-zinc-600 dark:text-zinc-300">
                {subtitle}
              </div>
            </header>

            <div className="mt-6 flex-1">
              <ModelCard model={model} layout="horizontal" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ModelCardSlide() {
  return (
    <ModelCardSlideFrame subtitle="Federated model (FedAvg)" model={FEDERATED_MODEL} />
  );
}

export function ModelCardSlideWeighted() {
  return (
    <ModelCardSlideFrame
      subtitle="Local Banks Model (each seperate)" 
      model={EACH_BANK_LOCAL}
    />
  );
}
