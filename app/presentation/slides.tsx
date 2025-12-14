import type React from "react";

import { BusinessCase } from "./BusinessCase";
import { DataExplorationSlide } from "./DataExplorationSlide";
import { ModelDevelopment } from "./ModelDevelopment";
import { ModelFinetuning } from "./ModelFinetuning";
import { ModelCardSlide } from "./ModelCardSlide";

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
  { status: 4, title: "Model card", Component: ModelCardSlide },
];
