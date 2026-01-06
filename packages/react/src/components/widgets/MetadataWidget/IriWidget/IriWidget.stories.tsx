import type { Meta, StoryObj } from "@storybook/react-vite";
import { IriDescription } from "../../../../app/widgetDescriptions";
import { IriWidget } from "./IriWidget";
import {
  commonIriWidgetPlay,
  IriWidget1Args,
  IriWidgetStoryArgs,
  IriWidgetStoryArgTypes,
  withCopyButtonArgs,
  withoutExternalIconArgs,
  withUrlPrefixArgs,
} from "./IriWidgetStories";

const meta = {
  title: "Entity Metadata/IriWidget",
  component: IriWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: IriDescription,
      },
    },
  },
  argTypes: IriWidgetStoryArgTypes,
  args: IriWidgetStoryArgs,
} satisfies Meta<typeof IriWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IriWidget1: Story = {
  args: IriWidget1Args,
  play: commonIriWidgetPlay,
};

export const withoutExternalIcon: Story = {
  args: withoutExternalIconArgs,
  play: commonIriWidgetPlay,
};

export const withCopyButton: Story = {
  args: withCopyButtonArgs,
  play: commonIriWidgetPlay,
};

export const withUrlPrefix: Story = {
  args: withUrlPrefixArgs,
  play: commonIriWidgetPlay,
};
