
const models = [
  {
    name: "NN · Retail PD v2.0",
    variant: "Champion",
    status: "Approved",
    stage: "In production",
    owner: "Credit Risk Analytics",
    type: "Feed-forward neural network",
    size: "~180 features · 4 hidden layers",
    trainingWindow: "Applications 2021–2023",
    lastTrained: "2024‑03‑15",
    infra: "PyTorch on‑prem · nightly batch scoring",
    description:
      "Main production network used to predict 12‑month probability of default for new‑to‑bank retail customers.",
    architecture: [
      "Input: ~180 engineered features (behavioural, bureau, application)",
      "Dense(256) · ReLU · BatchNorm",
      "Dense(128) · ReLU · Dropout(0.3)",
      "Dense(64) · ReLU",
      "Output: 1 · sigmoid (12‑month PD 0–1)",
    ],
    metrics: [
      { label: "AUC (validation)", value: "0.87" },
      { label: "AUC (out‑of‑time)", value: "0.84" },
      { label: "KS statistic", value: "42" },
    ],
    technical: {
      framework: "PyTorch 2.x",
      loss: "Binary cross‑entropy with logits",
      optimizer: "Adam",
      learningRate: "1e‑3 with cosine decay",
      batchSize: "1024",
      epochs: "30 (early stopping patience 5)",
      preprocessing:
        "Impute missing values, cap outliers at P99, standardise numeric features, target‑encode high‑cardinality categoricals.",
      postprocessing:
        "Isotonic calibration on validation set; map PD into 10 internal risk bands for decision rules.",
      regularisation: "Dropout 0.3 on hidden layers, L2 weight decay 1e‑4, early stopping on validation AUC.",
    },
    fairness:
      "Fairness review completed on key protected segments; no critical issues identified, but higher rejection rates in young renters segment.",
    riskNotes:
      "Classified as material model (MRL 2). Complex interactions make local explanations harder to communicate to front‑line staff.",
    monitoring: "Monthly drift & stability reports via MRM dashboard; alerts if PSI > 0.2 or approval rate moves > 3 p.p.",
  },
  {
    name: "NN · Retail PD v1.5 (compact)",
    variant: "Baseline",
    status: "Approved",
    stage: "Shadow",
    owner: "Credit Risk Analytics",
    type: "Compact neural network",
    size: "~80 features · 3 hidden layers",
    trainingWindow: "Applications 2020–2022",
    lastTrained: "2023‑11‑02",
    infra: "ONNX export · scored in SQL engine",
    description:
      "Smaller benchmark network used for back‑testing and to provide more interpretable odds and feature effects.",
    architecture: [
      "Input: ~80 hand‑picked features (no complex interactions)",
      "Dense(64) · ReLU",
      "Dense(32) · ReLU · Dropout(0.2)",
      "Output: 1 · sigmoid (PD 0–1)",
    ],
    metrics: [
      { label: "AUC (validation)", value: "0.81" },
      { label: "AUC (out‑of‑time)", value: "0.79" },
      { label: "KS statistic", value: "34" },
    ],
    technical: {
      framework: "Keras / TensorFlow 2.x",
      loss: "Binary cross‑entropy",
      optimizer: "Adam",
      learningRate: "3e‑4 fixed",
      batchSize: "512",
      epochs: "40 (early stopping patience 8)",
      preprocessing:
        "Simple scaling of numeric features, one‑hot encoding for low‑cardinality categoricals, no target encoding.",
      postprocessing:
        "Platt scaling; PDs rounded to basis points and fed into legacy decision engine.",
      regularisation: "Dropout 0.2, L2 weight decay 5e‑5.",
    },
    fairness:
      "More stable approval rates across age and tenure segments; used as reference when explaining uplift from non‑linear models.",
    riskNotes:
      "Lower model risk rating (MRL 3) due to simpler structure; remains fallback option if champion model is turned off.",
    monitoring: "Tracked alongside champion to check that uplift remains stable and that gap in performance justifies complexity.",
  },
  {
    name: "NN · Retail PD v2.0‑X (calibrated)",
    variant: "Interpretable challenger",
    status: "Experimental",
    stage: "UAT only",
    owner: "Credit Risk Analytics",
    type: "Shallow neural network for calibration",
    size: "~40 features · 3 hidden layers",
    trainingWindow: "Applications 2021–2023",
    lastTrained: "2024‑05‑28",
    infra: "Python API · real‑time scoring sandbox",
    description:
      "Deliberately constrained network used in workshops with business and risk to discuss cut‑offs, calibration, and treatment strategies.",
    architecture: [
      "Input: ~40 aggregated features (score bands, utilisation, income)",
      "Dense(64) · ReLU",
      "Dense(32) · ReLU",
      "Output: 1 · sigmoid (calibrated PD)",
    ],
    metrics: [
      { label: "AUC (validation)", value: "0.78" },
      { label: "AUC (out‑of‑time)", value: "0.76" },
      { label: "KS statistic", value: "30" },
    ],
    technical: {
      framework: "PyTorch 2.x",
      loss: "Brier score (squared error on PD)",
      optimizer: "AdamW",
      learningRate: "5e‑4 with step decay",
      batchSize: "2048",
      epochs: "20 (no early stopping, fixed schedule)",
      preprocessing:
        "Takes upstream scores and coarse segments as input; minimal additional preprocessing beyond standard scaling.",
      postprocessing:
        "Outputs directly used as calibrated PDs; PD bands aligned with policy‑driven cut‑offs.",
      regularisation: "Weight decay 1e‑4; small network kept intentionally simple.",
    },
    fairness:
      "Segments and splits chosen to align with policy‑relevant groups; easier to show how decisions differ by segment.",
    riskNotes:
      "Not intended for production; used as a communication artefact in model committee and policy design sessions.",
    monitoring:
      "No automated monitoring – used for finite set of scenario analyses to complement main monitoring view.",
  },
];

export default function ModelCardsPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10">
      <header className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
          Experiment detail · Model cards
        </p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          Compare the models behind a single experiment.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          This page zooms in on one experiment and its models: how each model is
          built, how it performs, and what that means for risk, operations, and
          customers. Swap in the details from your own stack so stakeholders can
          compare options side by side.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4 rounded-2xl border border-zinc-200/80 bg-white p-5 text-xs dark:border-zinc-800/80 dark:bg-zinc-950/40">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                Experiment
              </div>
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Retail credit · New‑to‑bank PD
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-100">
                Active pilot
              </span>
              <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                3 models in scope
              </span>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1 rounded-xl bg-zinc-50 p-3 dark:bg-zinc-900/70">
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                Business decision
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300">
                Approve, decline, or refer new‑to‑bank retail credit
                applications with a 12‑month horizon.
              </p>
            </div>
            <div className="space-y-1 rounded-xl bg-zinc-50 p-3 dark:bg-zinc-900/70">
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                Data & horizon
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300">
                Applications 2020–2023, merged with behavioural and bureau
                data; 12‑month default label.
              </p>
            </div>
            <div className="space-y-1 rounded-xl bg-zinc-50 p-3 dark:bg-zinc-900/70">
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                What to look for
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300">
                Trade‑offs between performance, interpretability, and operational
                fit when choosing a champion model.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-dashed border-zinc-300/80 bg-zinc-50/80 p-5 text-xs text-zinc-600 dark:border-zinc-700/80 dark:bg-zinc-900/60 dark:text-zinc-300">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            Governance checklist
          </h2>
          <ul className="space-y-1">
            <li>▢ Data sources &amp; lineage documented for each model</li>
            <li>▢ Fairness &amp; bias assessment completed on key segments</li>
            <li>▢ Model risk classification and use‑case boundaries defined</li>
            <li>▢ Independent validation sign‑off for champion and fallback</li>
            <li>▢ Monitoring thresholds and review cadence agreed</li>
          </ul>
          <p className="pt-1 text-[11px] text-zinc-400">
            Use this block to mirror your internal model risk policies so risk,
            compliance, and business stakeholders can quickly see what has been
            done for this experiment.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Models in this experiment
            </h2>
            <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">
              Each card tells the story of one model: what it does, how it was
              trained, and what makes it more or less suitable for production.
            </p>
          </div>
          <p className="max-w-sm text-[11px] text-zinc-500 dark:text-zinc-400">
            In the real deck, replace these placeholders with links to notebooks,
            dashboards, and monitoring views for each model.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {models.map((model) => (
            <article
              key={model.name}
              className="flex flex-col gap-4 rounded-2xl border border-zinc-200/80 bg-white p-5 text-xs shadow-sm dark:border-zinc-800/80 dark:bg-zinc-950/40"
            >
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

              <div className="grid gap-3 sm:grid-cols-3">
                {model.metrics.map((metric) => (
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

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1 rounded-xl bg-amber-50 p-3 text-[11px] text-amber-900 dark:bg-amber-950/40 dark:text-amber-100">
                  <div className="font-medium uppercase tracking-[0.18em]">
                    Fairness &amp; segments
                  </div>
                  <p className="text-[11px] leading-relaxed">{model.fairness}</p>
                </div>
                <div className="space-y-1 rounded-xl bg-zinc-50 p-3 text-[11px] text-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200">
                  <div className="font-medium uppercase tracking-[0.18em]">
                    Risk &amp; monitoring notes
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    {model.riskNotes}
                  </p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    {model.monitoring}
                  </p>
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
                    <span className="text-zinc-500 dark:text-zinc-400">
                      Framework
                    </span>
                    <span className="text-right">
                      {model.technical?.framework}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-zinc-500 dark:text-zinc-400">
                      Loss
                    </span>
                    <span className="text-right">
                      {model.technical?.loss}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-zinc-500 dark:text-zinc-400">
                      Optimiser / LR
                    </span>
                    <span className="text-right">
                      {model.technical?.optimizer} ·{" "}
                      {model.technical?.learningRate}
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
                  <div className="mt-1">
                    <div className="text-zinc-500 dark:text-zinc-400">
                      Preprocessing
                    </div>
                    <p className="mt-0.5 leading-relaxed">
                      {model.technical?.preprocessing}
                    </p>
                  </div>
                  <div className="mt-1">
                    <div className="text-zinc-500 dark:text-zinc-400">
                      Postprocessing
                    </div>
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
          ))}
        </div>
      </section>
    </div>
  );
}

