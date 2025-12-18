export type ModelMetricsSnapshot = {
  accuracy: number;
  precision: number;
  recall: number;
  f1: number;
  auc: number;
  target_shuffling_p: number;
  selection_rate_gap: number;
  TPR_gap: number;
  FPR_gap: number;
};

export type ModelTechnicalDetails = {
  framework: string;
  loss: string;
  optimizer: string;
  learningRate: string;
  batchSize: string;
  epochs: string;
  layers: string;
  preprocessing: string;
  postprocessing: string;
};

export type ModelMetricsEntry = {
  label: string;
  description: string;
  status: string;
  variant: string;
  beforePreprocessing: ModelMetricsSnapshot;
  afterPreprocessing: ModelMetricsSnapshot;
  technical: ModelTechnicalDetails;
};

export const modelMetrics: ModelMetricsEntry[] = [
    {
        "label": "Multiple Centralized Models",
        "description": "Three models trained on each bank's data separately.",
        "status": "Recommended",
        "variant": "Centralized",
        "beforePreprocessing": {
            "accuracy": 0.81,
            "precision": 0.73,
            "recall": 0.33,
            "f1": 0.44,
            "auc": 0.85,
            "target_shuffling_p": 0.01,
            "selection_rate_gap": 0.10,
            "TPR_gap": 0.05,
            "FPR_gap": 0.04
        },
        "afterPreprocessing": {
            "accuracy": 0.81,
            "precision": 0.62,
            "recall": 0.50,
            "f1": 0.55,
            "auc": 0.85,
            "target_shuffling_p": 0.001,
            "selection_rate_gap": 0.14,
            "TPR_gap": 0.00,
            "FPR_gap": 0.07
        },
        technical: {
            "framework": "TensorFlow",
            "loss": "Binary Crossentropy",
            "layers": "(128, 64, 32)",
            "optimizer": "Adam",
            "learningRate": "0.0005",
            "batchSize": "512",
            "epochs": "20",
            "preprocessing": "Binning, One Hot Encoding, Standardization",
            "postprocessing": "Postprocessing to improve gender fairness",
        }
    },
    {
        "label": "Single Centralized Model",
        "description": "A local model trained on all banks' data combined.",
        "status": "needs improvement",
        "variant": "Centralized",
        "beforePreprocessing": {
            "accuracy": 0.76,
            "precision": 0.60,
            "recall": 0.05,
            "f1": 0.09,
            "auc": 0.75,
            "target_shuffling_p": 0.001,
            "selection_rate_gap": 0.10,
            "TPR_gap": 0.05,
            "FPR_gap": 0.04
        },
        "afterPreprocessing": {
            "accuracy": 0.74,
            "precision": 0.48,
            "recall": 0.50,
            "f1": 0.49,
            "auc": 0.75,
            "target_shuffling_p": 0.001,
            "selection_rate_gap": 0.13,
            "TPR_gap": 0.04,
            "FPR_gap": 0.05
        },
        technical: {
            "framework": "TensorFlow",
            "loss": "Binary Crossentropy",
            "layers": "(128, 64, 32)",
            "optimizer": "Adam",
            "learningRate": "0.0005",
            "batchSize": "512",
            "epochs": "20",
            "preprocessing": "Binning, One Hot Encoding, Standardization",
            "postprocessing": "Postprocessing to improve gender fairness",
        }
    },
    {
        "label": "Federated Model",
        "description": "A federated model trained on all banks' data together.",
        "status": "Recommended",
        "variant": "Federated",
        "beforePreprocessing": {
            "accuracy": 0.83,
            "precision": 0.74,
            "recall": 0.49,
            "f1": 0.59,
            "auc": 0.86,
            "target_shuffling_p": 0.01,
            "selection_rate_gap": 0.10,
            "TPR_gap": 0.05,
            "FPR_gap": 0.04
        },
        "afterPreprocessing": {
            "accuracy": 0.83,
            "precision": 0.73,
            "recall": 0.50,
            "f1": 0.59,
            "auc": 0.86,
            "target_shuffling_p": 0.01,
            "selection_rate_gap": 0.12,
            "TPR_gap": 0.001,
            "FPR_gap": 0.043
        },
        technical: {
            "framework": "TensorFlow",
            "loss": "Binary Crossentropy",
            "layers": "(128, 64, 32)",
            "optimizer": "Adam",
            "learningRate": "0.0005",
            "batchSize": "512",
            "epochs": "20",
            "preprocessing": "Binning, One Hot Encoding, Standardization",
            "postprocessing": "Postprocessing to improve gender fairness",
        }
    }
];