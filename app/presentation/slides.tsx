import type React from "react";

import { BusinessCase } from "./BusinessCase";
import { DataExplorationSlide } from "./DataExplorationSlide";
import { FederatedLearningSlide } from "./FederatedLearningSlide";
import { ModelDevelopment } from "./ModelDevelopment";
import { ModelFinetuning } from "./ModelFinetuning";
import { ModelCardSlide, ModelCardSlideWeighted } from "./ModelCardSlide";
import { ShapSlide } from "./ShapSlide";
import { TakeawaysRecommendationSlide } from "./TakeawaysRecommendationSlide";
import { NextStepsSlide } from "./NextStepsSlide";
import { NextStepsApproachSlide } from "./NextStepsApproachSlide";

export type PresentationSlideDefinition = Readonly<{
  status: number;
  title: string;
  Component: React.ComponentType;
}>;

export const PRESENTATION_SLIDES: ReadonlyArray<PresentationSlideDefinition> = [
  { status: 0, title: "Business case", Component: BusinessCase },
  { status: 1, title: "Data exploration", Component: DataExplorationSlide },
  { status: 2, title: "Experiment setup", Component: ModelDevelopment },
  { status: 3, title: "Model finetuning", Component: ModelFinetuning },
  { status: 4, title: "Model comparison", Component: ModelCardSlide },
  { status: 5, title: "SHAP (explainability)", Component: ShapSlide },
  { status: 6, title: "Federated learning (pros/cons)", Component: FederatedLearningSlide },
  { status: 7, title: "Takeaways / recommendation", Component: TakeawaysRecommendationSlide },
  { status: 8, title: "Next steps", Component: NextStepsSlide },
];
