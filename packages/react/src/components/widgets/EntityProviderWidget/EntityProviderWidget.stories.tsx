import type { Meta, StoryObj } from "@storybook/react-vite";
import { EntityProviderWidgetDescription } from "../../../app/widgetDescriptions";
import {
  entityProviderArgs,
  EntityProviderHookStoryArgs,
  EntityProviderHookStoryArgTypes,
  ontologyProviderArgs,
} from "./EntityProviderHookStories";
import { WrappedEntityProviderWidget } from "./EntityProviderWidget";
import {
  DisabledArgs,
  fullDisabledPlay,
  fullNotFoundPlay,
  fullWithoutRawPlay,
  NotFoundArgs,
  WithoutRawArgs,
} from "./EntityProviderWidgetStories";

const meta = {
  title: "API Gateway/EntityProviderWidget",
  component: WrappedEntityProviderWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: EntityProviderWidgetDescription,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 520, maxWidth: "100%" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: EntityProviderHookStoryArgTypes,
  args: EntityProviderHookStoryArgs,
} satisfies Meta<typeof WrappedEntityProviderWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const entityProvider: Story = {
  args: entityProviderArgs,
};

export const ontologyProvider: Story = {
  args: ontologyProviderArgs,
};

export const withoutRawData: Story = {
  args: WithoutRawArgs,
  play: fullWithoutRawPlay,
};

export const notFound: Story = {
  args: NotFoundArgs,
  play: fullNotFoundPlay,
};

export const disabled: Story = {
  args: DisabledArgs,
  play: fullDisabledPlay,
};
