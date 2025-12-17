
// import { ModelCard, type ModelCardData } from "./ModelCard";
import { ModelCard, type ModelCardData } from "./ModelCardSmall";

const models: ModelCardData[] = [
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
    infra: "TensorFlow on‑prem · nightly batch scoring",
    description:
      "Main production network used to predict 12‑month probability of default for new‑to‑bank retail customers.",
    architecture: [
      "Input: ~180 engineered features (behavioural, bureau, application)",
      "Dense(32) · ReLU ",
      "Dense(32) · ReLU",
      "Output: 1 · sigmoid (12‑month PD 0–1)",
    ],
    validations: [
      {
        label: "Validation 1",
        performance: {
          auc: 0.87,
          accuracy: 0.81,
          precision: 0.62,
          recall: 0.58,
          f1: 0.60,
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
      {
        label: "Validation 2",
        performance: {
          auc: 0.86,
          accuracy: 0.80,
          precision: 0.61,
          recall: 0.57,
          f1: 0.59,
        },
        fairness: {
          base: {
            equalizedOdds: 0.11,
            statisticalParity: 0.15,
            predictiveParity: 0.09,
          },
          postprocessed: {
            equalizedOdds: 0.08,
            statisticalParity: 0.11,
            predictiveParity: 0.06,
          },
        },
      },
      {
        label: "Validation 3",
        performance: {
          auc: 0.88,
          accuracy: 0.82,
          precision: 0.63,
          recall: 0.59,
          f1: 0.61,
        },
        fairness: {
          base: {
            equalizedOdds: 0.09,
            statisticalParity: 0.13,
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
    metrics: [
      { label: "AUC (out‑of‑time)", value: "0.84" },
      { label: "KS statistic", value: "42" },
    ],
    technical: {
      framework: "TensorFlow (Keras)",
      loss: "binary_crossentropy",
      optimizer: "adam",
      learningRate: "1e‑3",
      batchSize: "512",
      epochs: "10",
      finalModelParams: `{
  "epochs": 10,
  "batch_size": 512,
  "layer_units": (32, 32),
  "optimizer": "adam",
  "learning_rate": 1e-3,
  "loss": "binary_crossentropy"
}`,
      preprocessing:
        "Impute missing values, cap outliers at P99, standardise numeric features, target‑encode high‑cardinality categoricals.",
      postprocessing:
        "Optional fairness postprocessing (threshold adjustment) can be enabled for evaluation; calibration and banding handled downstream.",
      regularisation: "Early stopping on validation AUC; standard weight decay as needed.",
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
      "Dense(32) · ReLU ",
      "Dense(32) · ReLU",
      "Output: 1 · sigmoid (PD 0–1)",
    ],
    validations: [
      {
        label: "Validation 1",
        performance: {
          auc: 0.81,
          accuracy: 0.76,
          precision: 0.55,
          recall: 0.52,
          f1: 0.54,
        },
        fairness: {
          base: {
            equalizedOdds: 0.08,
            statisticalParity: 0.11,
            predictiveParity: 0.07,
          },
          postprocessed: {
            equalizedOdds: 0.06,
            statisticalParity: 0.09,
            predictiveParity: 0.06,
          },
        },
      },
      {
        label: "Validation 2",
        performance: {
          auc: 0.80,
          accuracy: 0.75,
          precision: 0.54,
          recall: 0.51,
          f1: 0.53,
        },
        fairness: {
          base: {
            equalizedOdds: 0.09,
            statisticalParity: 0.12,
            predictiveParity: 0.08,
          },
          postprocessed: {
            equalizedOdds: 0.07,
            statisticalParity: 0.10,
            predictiveParity: 0.06,
          },
        },
      },
      {
        label: "Validation 3",
        performance: {
          auc: 0.82,
          accuracy: 0.77,
          precision: 0.56,
          recall: 0.53,
          f1: 0.55,
        },
        fairness: {
          base: {
            equalizedOdds: 0.08,
            statisticalParity: 0.11,
            predictiveParity: 0.07,
          },
          postprocessed: {
            equalizedOdds: 0.06,
            statisticalParity: 0.09,
            predictiveParity: 0.06,
          },
        },
      },
    ],
    metrics: [
      { label: "AUC (out‑of‑time)", value: "0.79" },
      { label: "KS statistic", value: "34" },
    ],
    technical: {
      framework: "TensorFlow (Keras)",
      loss: "binary_crossentropy",
      optimizer: "adam",
      learningRate: "1e‑3",
      batchSize: "512",
      epochs: "10",
      finalModelParams: `{
  "epochs": 10,
  "batch_size": 512,
  "layer_units": (32, 32),
  "optimizer": "adam",
  "learning_rate": 1e-3,
  "loss": "binary_crossentropy"
}`,
      preprocessing:
        "Simple scaling of numeric features, one‑hot encoding for low‑cardinality categoricals, no target encoding.",
      postprocessing:
        "Optional fairness postprocessing (threshold adjustment) can be enabled for evaluation; calibration handled downstream.",
      regularisation: "Standard regularisation as needed (e.g., early stopping / weight decay).",
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
      "Dense(32) · ReLU ",
      "Dense(32) · ReLU",
      "Output: 1 · sigmoid (calibrated PD)",
    ],
    validations: [
      {
        label: "Validation 1",
        performance: {
          auc: 0.78,
          accuracy: 0.72,
          precision: 0.50,
          recall: 0.48,
          f1: 0.49,
        },
        fairness: {
          base: {
            equalizedOdds: 0.07,
            statisticalParity: 0.10,
            predictiveParity: 0.06,
          },
          postprocessed: {
            equalizedOdds: 0.06,
            statisticalParity: 0.09,
            predictiveParity: 0.05,
          },
        },
      },
      {
        label: "Validation 2",
        performance: {
          auc: 0.77,
          accuracy: 0.71,
          precision: 0.49,
          recall: 0.47,
          f1: 0.48,
        },
        fairness: {
          base: {
            equalizedOdds: 0.08,
            statisticalParity: 0.11,
            predictiveParity: 0.07,
          },
          postprocessed: {
            equalizedOdds: 0.06,
            statisticalParity: 0.09,
            predictiveParity: 0.05,
          },
        },
      },
      {
        label: "Validation 3",
        performance: {
          auc: 0.79,
          accuracy: 0.73,
          precision: 0.51,
          recall: 0.49,
          f1: 0.50,
        },
        fairness: {
          base: {
            equalizedOdds: 0.07,
            statisticalParity: 0.10,
            predictiveParity: 0.06,
          },
          postprocessed: {
            equalizedOdds: 0.06,
            statisticalParity: 0.09,
            predictiveParity: 0.05,
          },
        },
      },
    ],
    metrics: [
      { label: "AUC (out‑of‑time)", value: "0.76" },
      { label: "KS statistic", value: "30" },
    ],
    technical: {
      framework: "TensorFlow (Keras)",
      loss: "binary_crossentropy",
      optimizer: "adam",
      learningRate: "1e‑3",
      batchSize: "512",
      epochs: "10",
      finalModelParams: `{
  "epochs": 10,
  "batch_size": 512,
  "layer_units": (32, 32),
  "optimizer": "adam",
  "learning_rate": 1e-3,
  "loss": "binary_crossentropy"
}`,
      preprocessing:
        "Takes upstream scores and coarse segments as input; minimal additional preprocessing beyond standard scaling.",
      postprocessing:
        "Optional fairness postprocessing (threshold adjustment) can be enabled for evaluation; outputs used as calibrated PDs downstream.",
      regularisation: "Standard regularisation as needed (e.g., early stopping / weight decay).",
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

        <div className="flex flex-wrap gap-5 items-start">
          {models.map((model) => (
            <ModelCard key={model.name} model={model} />
          ))}
        </div>
      </section>
    </div>
  );
}

