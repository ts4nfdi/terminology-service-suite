import type { Meta, StoryObj } from "@storybook/react-vite";
import { TitleDescription } from "../../../../app/widgetDescriptions";
import { TitleWidget } from "./TitleWidget";
import {
  DefiningOntologyUnavailableArgs,
  IncorrectIriWithoutDefaultValueArgs,
  OntologyTitleArgs,
  OntologyTitleCustomLinkArgs,
  OntologyTitleCustomOnNavigateArgs,
  SelectingDefiningOntologyArgs,
  TitleWidgetDefaultArgs,
  TitleWidgetStoryArgTypes,
  TitleWidgetStoryArgs,
  TitleWidgetWithTitleTextArgs,
  WithStylesArgs,
  WithoutStylesArgs,
  commonTitleWidgetPlay,
} from "./TitleWidgetStories";

const meta = {
  title: "Entity Metadata/TitleWidget",
  component: TitleWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: TitleDescription,
      },
    },
  },
  argTypes: TitleWidgetStoryArgTypes,
  args: TitleWidgetStoryArgs,
} satisfies Meta<typeof TitleWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TitleWidgetDefault: Story = {
  args: TitleWidgetDefaultArgs,
  play: commonTitleWidgetPlay,
};

export const OntologyTitle: Story = {
  args: OntologyTitleArgs,
  play: commonTitleWidgetPlay,
};

export const SelectingDefiningOntology: Story = {
  args: SelectingDefiningOntologyArgs,
  play: commonTitleWidgetPlay,
};

export const TitleWidgetWithTitleText: Story = {
  args: TitleWidgetWithTitleTextArgs,
  play: commonTitleWidgetPlay,
};

export const IncorrectIriWithDefaultValue: Story = {
  args: IncorrectIriWithoutDefaultValueArgs,
  play: commonTitleWidgetPlay,
};

export const IncorrectIriWithoutDefaultValue: Story = {
  args: IncorrectIriWithoutDefaultValueArgs,
  play: commonTitleWidgetPlay,
};

export const DefiningOntologyUnavailable: Story = {
  args: DefiningOntologyUnavailableArgs,
  play: commonTitleWidgetPlay,
};

export const WithStyles: Story = {
  args: WithStylesArgs,
  play: commonTitleWidgetPlay,
};

export const WithoutStyles: Story = {
  args: WithoutStylesArgs,
  play: commonTitleWidgetPlay,
};

export const OntologyTitleCustomOnNavigate: Story = {
  args: OntologyTitleCustomOnNavigateArgs,
  play: commonTitleWidgetPlay,
};

export const OntologyTitleCustomLink: Story = {
  args: OntologyTitleCustomLinkArgs,
  play: commonTitleWidgetPlay,
};
