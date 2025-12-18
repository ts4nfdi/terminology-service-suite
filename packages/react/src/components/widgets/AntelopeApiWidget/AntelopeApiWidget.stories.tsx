import { AntelopeApiWidget } from "./AntelopeApiWidget";
import {
  commonAntelopeApiWidgetPlay,
  AntelopeApiWidgetDefaultArgs,
  AntelopeApiWidgetStoryArgs,
  AntelopeApiWidgetStoryArgTypes,
} from "./AntelopeApiWidgetStories";
import { JsonApiDescription } from "../../../app/widgetDescriptions";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Terminology Service/AntelopeApiWidget",
  component: AntelopeApiWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: JsonApiDescription,
      },
    },
  },
  argTypes: AntelopeApiWidgetStoryArgTypes,
  args: AntelopeApiWidgetStoryArgs,
} satisfies Meta<typeof AntelopeApiWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AntelopeApiWidgetDefault = {
  args: AntelopeApiWidgetDefaultArgs,
  play: commonAntelopeApiWidgetPlay,
};
