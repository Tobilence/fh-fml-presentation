"use client";

import React from "react";
import { Switch } from "radix-ui";
// import { ModelCard, type ModelCardData } from "../model-cards/ModelCard";
import { ModelCard, type ModelCardData } from "../../model-cards/ModelCardSmall";
import { modelMetrics } from "@/app/presentation/model_metrics";

function toModelCardData(entry: (typeof modelMetrics)[number]): ModelCardData {
  return {
    name: "Neural Network",
    variant: entry.label,
    status: "Active",
    stage: "Production-like",
    owner: "FML Team",
    type: "Binary classification",
    size: "Tabular NN",
    trainingWindow: "Historical dataset (banks A–C)",
    lastTrained: "Recently",
    infra: "Local / demo",
    description: entry.description,
    metrics: [
      { label: "Primary metric", value: "Recall" },
      { label: "Secondary metric", value: "Precision" },
    ],
    validations: [
      {
        label: "before",
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
        label: "after",
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
    fairness: "Fairness gaps shown as subgroup deltas (M/F).",
    riskNotes: "Demo content — replace with real risks and mitigations.",
    monitoring: "Track drift + fairness metrics per bank and per subgroup.",
  };
}

function ModelCardSlideFrame({
  subtitle,
}: {
  subtitle: string;
}) {
  const models = modelMetrics.map(toModelCardData);
  const [afterPostprocessingEnabled, setAfterPostprocessingEnabled] =
    React.useState(false);
  const afterSwitchId = React.useId();

  return (
    <section className="w-full py-3 sm:py-4">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col pb-8 pt-7 sm:pb-10 sm:pt-9">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <h2 className="w-full text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            4 · Evaluation
        </h2>
            <div className="text-sm text-zinc-600 dark:text-zinc-300">
              {subtitle}
            </div>
            <div className="flex items-center gap-3">
              <label
                className="Label text-sm text-zinc-600 dark:text-zinc-300"
                htmlFor={afterSwitchId}
              >
                After postprocessing
              </label>
              <Switch.Root
                className="SwitchRoot"
                id={afterSwitchId}
                checked={afterPostprocessingEnabled}
                onCheckedChange={setAfterPostprocessingEnabled}
              >
                <Switch.Thumb className="SwitchThumb" />
              </Switch.Root>
            </div>
          </div>

          <div className="mt-3 grid flex-1 gap-4 md:grid-cols-3">
            {models.map((model) => (
              <div key={model.variant} className="flex flex-col gap-2">
                <div>
                  <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-50">
                    {model.variant}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-300">
                    {model.description}
                  </div>
                </div>
                <ModelCard
                  model={model}
                  layout="horizontal"
                  beforeAfterEnabled={afterPostprocessingEnabled}
                  onBeforeAfterEnabledChange={setAfterPostprocessingEnabled}
                  showBeforeAfterToggle={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ModelCardExperimentSection() {
  return (
    <ModelCardSlideFrame subtitle="Compare all three final models (before and after fairness postprocessing)" />
  );
}
