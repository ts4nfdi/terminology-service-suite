import { BreadcrumbPresentation } from "./BreadcrumbPresentation";
import {
  BreadcrumbPresentationStoryArgs,
  BreadcrumbPresentationStoryArgTypes,
  commonBreadcrumbPresentationPlay,
  EntityInputArgs,
  EntityInputMissingValueArgs,
} from "./BreadcrumbPresentationStories";
import { manuallyEmbedOnNavigate } from "../../../../../app/util";
import {BreadcrumbPresentationDescription} from "../../../../../app/widgetDescriptions";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Additional Entity Metadata/BreadcrumbPresentation",
  component: BreadcrumbPresentation,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate,
      },
      description: {
        component: BreadcrumbPresentationDescription,
      },
    },
  },
  argTypes: BreadcrumbPresentationStoryArgTypes,
  args: BreadcrumbPresentationStoryArgs,
} satisfies Meta<typeof BreadcrumbPresentation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EntityInput: Story = {
  args: EntityInputArgs,
  play: commonBreadcrumbPresentationPlay
};

export const EntityInputMissingValue: Story = {
  args: EntityInputMissingValueArgs,
  play: commonBreadcrumbPresentationPlay
};



