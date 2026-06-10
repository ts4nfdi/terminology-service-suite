import { contentArgType } from "../../../../stories/storyArgs";

export const MathFormulaWidgetStoryArgTypes = {
  ...contentArgType,
};

export const MathFormulaWidgetStoryArgs = {
  content: "",
} as const;

export const MathFormulaWidgetDefaultArgs = {
  content: "x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}",
} as const;
