import React from "react";
import { ModelCard, type ModelCardData } from "../model-cards/ModelCard";

const SAMPLE_MODEL: ModelCardData = {
  name: "Federated Neural Network",
  variant: "Global model",
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
    preprocessing: "Standard scaling + consistent feature schema across clients.",
    postprocessing: "Optional fairness postprocessing (demo).",
    regularisation: "Dropout / weight decay (config dependent).",
  },
  validations: [
    {
      label: "Validation",
      performance: {
        accuracy: 0.81,
        precision: 0.62,
        recall: 0.72,
        f1: 0.67,
        auc: 0.86,
      },
      fairness: {
        base: {
          equalizedOdds: 0.10,
          statisticalParity: 0.14,
          predictiveParity: 0.08,
        },
        postprocessed: {
          equalizedOdds: 0.07,
          statisticalParity: 0.10,
          predictiveParity: 0.06,
        },
      },
    },
  ],
  fairness: "Fairness evaluated across protected attributes with monitoring.",
  riskNotes: "Demo content — replace with real risks and mitigations.",
  monitoring: "Track drift + fairness metrics per bank and per subgroup.",
};

export function ModelCardSlide() {
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
            </header>

            <div className="mt-6 flex-1">
              <ModelCard model={SAMPLE_MODEL} layout="horizontal" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
