const modelMetrics = [
    {
        "label": "Local Model (each seperate)",
        "description": "A local model trained on each bank's data separately.",
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
            "target_shuffling_p": 0.01,
            "selection_rate_gap": 0.10,
            "TPR_gap": 0.05,
            "FPR_gap": 0.04
        }
    },
    {
        "label": "Local Model (combined)",
        "description": "A local model trained on all banks' data combined.",
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
            "accuracy": 0.83,
            "precision": 0.74,
            "recall": 0.34,
            "f1": 0.45,
            "auc": 0.86,
            "target_shuffling_p": 0.02,
            "selection_rate_gap": 0.10,
            "TPR_gap": 0.05,
            "FPR_gap": 0.04
        }
    },
    {
        "label": "Federated Model (FedAvg)",
        "description": "A federated model trained on all banks' data together.",
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
            "accuracy": 0.83,
            "precision": 0.74,
            "recall": 0.34,
            "f1": 0.45,
            "auc": 0.86,
            "target_shuffling_p": 0.02,
            "selection_rate_gap": 0.10,
            "TPR_gap": 0.05,
            "FPR_gap": 0.04
        }
    }
]