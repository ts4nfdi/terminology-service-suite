import { BreadcrumbWidget } from "./BreadcrumbWidget";
import {
  BreadcrumbWidgetStoryArgs,
  BreadcrumbWidgetStoryArgTypes,
  BreadcrumbWidgetDefaultArgs,
  SelectingDefiningOntologyArgs,
  DefiningOntologyUnavailableArgs,
  ErrorBreadcrumbWidgetArgs,
  CustomColorsArgs,
  CustomStyleArgs, commonBreadcrumbWidgetPlay
} from "./BreadcrumbWidgetStories";
import { manuallyEmbedOnNavigate } from "../../../../app/util";
import { BreadcrumbDescription } from "../../../../app/widgetDescriptions";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Additional Entity Metadata/BreadcrumbWidget",
  component: BreadcrumbWidget,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate,
      },
      description: {
        component: BreadcrumbDescription,
      },
    },
  },
  argTypes: BreadcrumbWidgetStoryArgTypes,
  args: BreadcrumbWidgetStoryArgs,
} satisfies Meta<typeof BreadcrumbWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BreadcrumbWidgetDefault: Story = {
  args: BreadcrumbWidgetDefaultArgs,
  play: commonBreadcrumbWidgetPlay
};

export const SelectingDefiningOntology: Story = {
  args: SelectingDefiningOntologyArgs,
  play: commonBreadcrumbWidgetPlay
};

export const DefiningOntologyUnavailable: Story = {
  args: DefiningOntologyUnavailableArgs,
  play: commonBreadcrumbWidgetPlay
};

export const ErrorBreadcrumbWidget: Story = {
  args: ErrorBreadcrumbWidgetArgs,
  play: commonBreadcrumbWidgetPlay
};

export const CustomColors: Story = {
  args: CustomColorsArgs,
  play: commonBreadcrumbWidgetPlay
};

export const CustomStyle: Story = {
  args: CustomStyleArgs,
  play: commonBreadcrumbWidgetPlay
};
