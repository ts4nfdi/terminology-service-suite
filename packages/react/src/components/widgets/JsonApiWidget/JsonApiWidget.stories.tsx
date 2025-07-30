import { JsonApiWidget } from "./JsonApiWidget";
import {
  commonJsonApiWidgetPlay,
  JsonApiWidgetDefaultArgs,
  JsonApiWidgetStoryArgs,
  JsonApiWidgetStoryArgTypes
} from "./JsonApiWidgetStories";
import { JsonApiDescription } from "../../../app/widgetDescriptions";
import * as globals from "../../../app/globals";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataContentWidget } from "../DataContentWidget";

const meta = {
  title: "API/JsonApiWidget",
  component: JsonApiWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: JsonApiDescription,
      },
    },
  },
  argTypes: JsonApiWidgetStoryArgTypes,
  args: JsonApiWidgetStoryArgs,
} satisfies Meta<typeof JsonApiWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const JsonApiWidgetDefault = {
  args: JsonApiWidgetDefaultArgs,
  play: commonJsonApiWidgetPlay
};