const modelMetrics = [
    {
        "label": "Local Model (each bank seperate)",
        "description": "Three models trained on each bank's data separately.",
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
        }
    },
    {
        "label": "Local Model (combined)",
        "description": "A local model trained on all banks' data combined.",
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
        }
    },
    {
        "label": "Federated Model (FedAvg)",
        "description": "A federated model trained on all banks' data together.",
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
    }
]