import { EntityInfoWidget } from "./EntityInfoWidget";
import {
  commonEntityInfoWidgetPlay,
  EntityInfoWidgetStoryArgs,
  EntityInfoWidgetStoryArgTypes,
  TermInfoWidgetArgs,
  PropertyInfoWidgetArgs,
  IndividualInfoWidgetArgs,
  InfoWidgetBadgesArgs,
  OptionalEntityTypeLegacyAPIArgs,
  InfoWidgetDomainArgs,
  InfoWidgetRangeArgs,
  InfoWidgetPropertyAssertionArgs,
  InfoWidgetPropertyCharacteristicsArgs,
  NavigateToEBIPageArgs, SkosmosImportArgs
} from "./EntityInfoWidgetStories";
import { EntityInfoDescription } from "../../../app/widgetDescriptions";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Additional Entity Metadata/EntityInfoWidget",
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: EntityInfoDescription,
      },
    },
  },
  component: EntityInfoWidget,
  argTypes: EntityInfoWidgetStoryArgTypes,
  args: EntityInfoWidgetStoryArgs,
} satisfies Meta<typeof EntityInfoWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TermInfoWidget: Story = {
  args: TermInfoWidgetArgs,
  play: commonEntityInfoWidgetPlay
};

export const PropertyInfoWidget: Story = {
  args: PropertyInfoWidgetArgs,
  play: commonEntityInfoWidgetPlay
};

export const IndividualInfoWidget: Story = {
  args: IndividualInfoWidgetArgs,
  play: commonEntityInfoWidgetPlay
};

export const InfoWidgetBadges: Story = {
  args: InfoWidgetBadgesArgs,
  play: commonEntityInfoWidgetPlay
};

export const OptionalEntityTypeLegacyAPI: Story = {
  args: OptionalEntityTypeLegacyAPIArgs,
  play: commonEntityInfoWidgetPlay
};

export const InfoWidgetDomain: Story = {
  args: InfoWidgetDomainArgs,
  play: commonEntityInfoWidgetPlay
};

export const InfoWidgetRange: Story = {
  args: InfoWidgetRangeArgs,
  play: commonEntityInfoWidgetPlay
};

export const InfoWidgetPropertyAssertion: Story = {
  args: InfoWidgetPropertyAssertionArgs,
  play: commonEntityInfoWidgetPlay
};

export const InfoWidgetPropertyCharacteristics: Story = {
  args: InfoWidgetPropertyCharacteristicsArgs,
  play: commonEntityInfoWidgetPlay
};

export const NavigateToEBIPage: Story = {
  args: NavigateToEBIPageArgs,
  play: commonEntityInfoWidgetPlay
};

export const SkosmosImport: Story = {
  args: SkosmosImportArgs,
  play: commonEntityInfoWidgetPlay
};