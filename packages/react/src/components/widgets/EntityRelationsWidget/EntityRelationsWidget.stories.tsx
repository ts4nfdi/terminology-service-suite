import { EntityRelationsWidget } from "./EntityRelationsWidget";
import {
  EntityRelationsWidgetStoryArgs,
  EntityRelationsWidgetStoryArgTypes,
  SubEntityOfArgs,
  AllValuesFromArgs,
  DifferentFromArgs,
  EquivalentToArgs,
  SingleValueArgs,
  InverseOfArgs,
  PropertyChainArgs,
  InstancesArgs,
  AxiomsArgs,
  QualifiedCardinalityArgs,
  NavigateToEBIPageArgs, commonEntityRelationsWidgetPlay
} from "./EntityRelationsWidgetStories";
import { manuallyEmbedOnNavigate } from "../../../app/util";
import { EntityRelationsDescription } from "../../../app/widgetDescriptions";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Additional Entity Metadata/EntityRelationsWidget",
  component: EntityRelationsWidget,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate,
      },
      description: {
        component: EntityRelationsDescription,
      },
    },
  },
  argTypes: EntityRelationsWidgetStoryArgTypes,
  args: EntityRelationsWidgetStoryArgs,
} satisfies Meta<typeof EntityRelationsWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SubEntityOf: Story = {
  args: SubEntityOfArgs,
  play: commonEntityRelationsWidgetPlay
};

export const AllValuesFrom: Story = {
  args: AllValuesFromArgs,
  play: commonEntityRelationsWidgetPlay
};

export const DifferentFrom: Story = {
  args: DifferentFromArgs,
  play: commonEntityRelationsWidgetPlay
};

export const EquivalentTo: Story = {
  args: EquivalentToArgs,
  play: commonEntityRelationsWidgetPlay
};

export const SingleValue: Story = {
  args: SingleValueArgs,
  play: commonEntityRelationsWidgetPlay
};

export const InverseOf: Story = {
  args: InverseOfArgs,
  play: commonEntityRelationsWidgetPlay
};

export const PropertyChain: Story = {
  args: PropertyChainArgs,
  play: commonEntityRelationsWidgetPlay
};

export const Instances: Story = {
  args: InstancesArgs,
  play: commonEntityRelationsWidgetPlay
};

export const Axioms: Story = {
  args: AxiomsArgs,
  play: commonEntityRelationsWidgetPlay
};

export const QualifiedCardinality: Story = {
  args: QualifiedCardinalityArgs,
  play: commonEntityRelationsWidgetPlay
};

export const NavigateToEBIPage: Story = {
  args: NavigateToEBIPageArgs,
  play: commonEntityRelationsWidgetPlay
};
