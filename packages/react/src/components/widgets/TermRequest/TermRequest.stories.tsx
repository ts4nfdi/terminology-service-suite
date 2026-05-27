import type { Meta, StoryObj } from "@storybook/react-vite";
import { TermRequestDescription } from "../../../app/widgetDescriptions";
import { TermRequestWidgetStoryArgTypes } from "../../../stories/storyArgs";
import { TermRequest } from "./TermRequest";
import {
  commonTermRequestWidgetPlay,
  TermRequestVibsoExampleArgs,
  TermRequestWidgetStoryArgs,
} from "./TermRequestStories";

const meta = {
  title: "Term Request/TermRequest",
  component: TermRequest,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: TermRequestDescription,
      },
    },
  },
  argTypes: TermRequestWidgetStoryArgTypes,
  args: TermRequestWidgetStoryArgs,
} satisfies Meta<typeof TermRequest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TermRequestExample: Story = {
  args: TermRequestVibsoExampleArgs,
  play: commonTermRequestWidgetPlay,
};
