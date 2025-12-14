"use client";

import { Switch } from "radix-ui";
import * as React from "react";
import "./ModelCard.style.css";


export type ModelMetric = {
  label: string;
  value: string;
};

export type ModelTechnicalDetails = {
  framework?: string;
  loss?: string;
  optimizer?: string;
  learningRate?: string;
  batchSize?: string;
  epochs?: string;
  preprocessing?: string;
  postprocessing?: string;
  regularisation?: string;
  finalModelParams?: string;
};

export type ModelPerformanceMetrics = {
  accuracy: number;
  precision: number;
  recall: number;
  f1: number;
  auc: number;
};

export type ModelFairnessMetrics = {
  equalizedOdds: number;
  statisticalParity: number;
  predictiveParity: number;
};

export type ModelValidationSnapshot = {
  /** Display label, e.g. "Validation 1" or "Fold 3" */
  label: string;
  performance: ModelPerformanceMetrics;
  fairness: {
    base: ModelFairnessMetrics;
    postprocessed: ModelFairnessMetrics;
  };
};

export type ModelCardData = {
  name: string;
  variant: string;
  status: string;
  stage: string;
  owner: string;
  type: string;
  size: string;
  trainingWindow: string;
  lastTrained: string;
  infra: string;
  description: string;
  architecture?: string[];
  metrics: ModelMetric[];
  technical?: ModelTechnicalDetails;
  validations: ModelValidationSnapshot[];
  fairness: string;
  riskNotes: string;
  monitoring: string;
};

function clampIndex(index: number, max: number) {
  if (Number.isNaN(index) || max <= 0) return 0;
  return Math.min(Math.max(index, 0), max - 1);
}

function formatMetric(value: number) {
  // show as percentage with 1 decimal (e.g. 87.3%) if looks like [0,1]
  if (value >= 0 && value <= 1) return `${(value * 100).toFixed(1)}%`;
  return value.toFixed(3);
}

export function ModelCard({ model }: { model: ModelCardData }) {
  const [validationIndex, setValidationIndex] = React.useState(0);
  const [fairnessPostprocessingEnabled, setFairnessPostprocessingEnabled] =
    React.useState(false);

  const maxValidations = model.validations.length;
  const safeValidationIndex = clampIndex(validationIndex, maxValidations);
  const selectedValidation = model.validations[safeValidationIndex];
  const selectedFairnessMetrics = fairnessPostprocessingEnabled
    ? selectedValidation.fairness.postprocessed
    : selectedValidation.fairness.base;

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-zinc-200/80 bg-white p-5 text-xs shadow-sm dark:border-zinc-800/80 dark:bg-zinc-950/40">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            {model.name}
          </h3>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
            {model.owner} · {model.type}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-[11px]">
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-100">
            {model.status}
          </span>
          <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
            {model.stage}
          </span>
          <span className="rounded-full bg-sky-500/10 px-2 py-0.5 text-[11px] font-medium text-sky-700 dark:bg-sky-500/15 dark:text-sky-100">
            {model.variant}
          </span>
        </div>
      </div>

      <p className="text-xs text-zinc-600 dark:text-zinc-300">
        {model.description}
      </p>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="space-y-1 rounded-xl bg-zinc-50 p-3 dark:bg-zinc-900/70">
          <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            Size &amp; complexity
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-300">
            {model.size}
          </p>
        </div>
        <div className="space-y-1 rounded-xl bg-zinc-50 p-3 dark:bg-zinc-900/70">
          <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            Training window
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-300">
            {model.trainingWindow}
          </p>
        </div>
        <div className="space-y-1 rounded-xl bg-zinc-50 p-3 dark:bg-zinc-900/70">
          <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            Last trained &amp; infra
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-300">
            {model.lastTrained} · {model.infra}
          </p>
        </div>
        <div className="space-y-1 rounded-xl bg-zinc-50 p-3 text-[11px] dark:bg-zinc-900/70 sm:col-span-3">
          <div className="font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            Architecture (simplified)
          </div>
          <ol className="mt-1 space-y-1 text-[11px] text-zinc-600 dark:text-zinc-300">
            {model.architecture?.map((layer, index) => (
              <li key={layer} className="flex items-start gap-2">
                <span className="mt-[1px] flex h-4 w-4 items-center justify-center rounded-full border border-zinc-300 text-[9px] font-medium text-zinc-500 dark:border-zinc-600 dark:text-zinc-300">
                  {index + 1}
                </span>
                <span>{layer}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="space-y-3">

        <div className="flex flex-wrap items-center justify-between gap-3">

        <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
          Validation metrics
        </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label
              className="Label"
              htmlFor="fairness-postprocessing"
              style={{ paddingRight: 15 }}
            >
              Fairness postprocessing
            </label>
            <Switch.Root className="SwitchRoot" id="fairness-postprocessing">
              <Switch.Thumb className="SwitchThumb" />
            </Switch.Root>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              label: "Accuracy (avg)",
              value: formatMetric(selectedValidation.performance.accuracy),
            },
            {
              label: "Precision (avg)",
              value: formatMetric(selectedValidation.performance.precision),
            },
            {
              label: "Recall (avg)",
              value: formatMetric(selectedValidation.performance.recall),
            },
            { label: "AUC Score (avg)", value: formatMetric(selectedValidation.performance.auc) },
            { label: "F1 (avg)", value: formatMetric(selectedValidation.performance.f1) },
            { label: "Target Shuffling", value: formatMetric(selectedValidation.performance.f1) },
              {
                label: "Equalized Odds",
                value: formatMetric(selectedFairnessMetrics.equalizedOdds),
              },
              {
                label: "Statistical Parity",
                value: formatMetric(selectedFairnessMetrics.statisticalParity),
              },
              {
                label: "Predictive Parity",
                value: formatMetric(selectedFairnessMetrics.predictiveParity),
              },
          ].map((metric) => (
            <div
              key={metric.label}
              className="space-y-1 rounded-xl border border-zinc-200/80 bg-white p-3 dark:border-zinc-800/80 dark:bg-zinc-950/60"
            >
              <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                {metric.label}
              </div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <details className="group rounded-xl border border-zinc-200/80 bg-zinc-50 p-3 text-[11px] text-zinc-700 marker:text-zinc-400 dark:border-zinc-800/80 dark:bg-zinc-900/70 dark:text-zinc-200">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2">
          <span className="font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            Technical details
          </span>
          <span className="text-xs text-zinc-400 transition-transform group-open:rotate-90 dark:text-zinc-500">
            ▶
          </span>
        </summary>
        <div className="mt-3 grid gap-1.5 text-[11px] text-zinc-700 dark:text-zinc-200">
          <div className="flex justify-between gap-4">
            <span className="text-zinc-500 dark:text-zinc-400">Framework</span>
            <span className="text-right">{model.technical?.framework}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-zinc-500 dark:text-zinc-400">Loss</span>
            <span className="text-right">{model.technical?.loss}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-zinc-500 dark:text-zinc-400">
              Optimiser / LR
            </span>
            <span className="text-right">
              {model.technical?.optimizer} · {model.technical?.learningRate}
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-zinc-500 dark:text-zinc-400">
              Batch / epochs
            </span>
            <span className="text-right">
              {model.technical?.batchSize} · {model.technical?.epochs}
            </span>
          </div>
          {model.technical?.finalModelParams ? (
            <div className="mt-2">
              <div className="text-zinc-500 dark:text-zinc-400">
                FINAL_MODEL_PARAMS
              </div>
              <pre className="mt-1 overflow-x-auto rounded-lg bg-white p-2 text-[10px] leading-relaxed text-zinc-700 dark:bg-zinc-950/60 dark:text-zinc-200">
                {model.technical.finalModelParams}
              </pre>
            </div>
          ) : null}
          <div className="mt-1">
            <div className="text-zinc-500 dark:text-zinc-400">Preprocessing</div>
            <p className="mt-0.5 leading-relaxed">
              {model.technical?.preprocessing}
            </p>
          </div>
          <div className="mt-1">
            <div className="text-zinc-500 dark:text-zinc-400">Postprocessing</div>
            <p className="mt-0.5 leading-relaxed">
              {model.technical?.postprocessing}
            </p>
          </div>
          <div className="mt-1">
            <div className="text-zinc-500 dark:text-zinc-400">
              Regularisation
            </div>
            <p className="mt-0.5 leading-relaxed">
              {model.technical?.regularisation}
            </p>
          </div>
        </div>
      </details>
    </article>
  );
}


