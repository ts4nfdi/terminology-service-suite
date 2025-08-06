import { HierarchyWidget } from "./HierarchyWidget";
import {
  HierarchyWidgetStoryArgs,
  HierarchyWidgetStoryArgTypes,
  ClassHierarchyArgs,
  IndividualHierarchyArgs,
  PreferredRootsArgs,
  IncludeObsoleteEntitiesArgs,
  PropertyRootsArgs,
  IndividualRootsArgs,
  LargeHierarchyArgs,
  SkosHierarchyArgs,
  SagePubHierarchyArgs,
  OntoportalHierarchyArgs,
  OLS3HierarchyArgs, commonHierarchyWidgetPlay, OLSGermanArgs, SkosmosAgrovocGermanArgs
} from "./HierarchyWidgetStories";
import { manuallyEmbedOnNavigate } from "../../../../../app/util";
import { HierarchyDescription } from "../../../../../app/widgetDescriptions";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Hierarchy and Graph/HierarchyWidget",
  component: HierarchyWidget,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate,
      },
      description: {
        component: HierarchyDescription,
      },
    },
  },
  argTypes: HierarchyWidgetStoryArgTypes,
  args: HierarchyWidgetStoryArgs,
} satisfies Meta<typeof HierarchyWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ClassHierarchy: Story = {
  args: ClassHierarchyArgs,
  play: commonHierarchyWidgetPlay
};

export const IndividualHierarchy: Story = {
  args: IndividualHierarchyArgs,
  play: commonHierarchyWidgetPlay
};

export const PreferredRoots: Story = {
  args: PreferredRootsArgs,
  play: commonHierarchyWidgetPlay
};

export const IncludeObsoleteEntities: Story = {
  args: IncludeObsoleteEntitiesArgs,
  play: commonHierarchyWidgetPlay
};

export const PropertyRoots: Story = {
  args: PropertyRootsArgs,
  play: commonHierarchyWidgetPlay
};

export const IndividualRoots: Story = {
  args: IndividualRootsArgs,
  play: commonHierarchyWidgetPlay
};

export const LargeHierarchy: Story = {
  args: LargeHierarchyArgs,
  play: commonHierarchyWidgetPlay
};

export const SkosHierarchy: Story = {
  args: SkosHierarchyArgs,
  play: commonHierarchyWidgetPlay
};

export const SagePubHierarchy: Story = {
  args: SagePubHierarchyArgs,
  play: commonHierarchyWidgetPlay
};

export const OntoportalHierarchy: Story = {
  args:OntoportalHierarchyArgs,
  play: commonHierarchyWidgetPlay
};

export const OLS3Hierarchy: Story = {
  args: OLS3HierarchyArgs,
  play: commonHierarchyWidgetPlay
};

export const OLSGerman: Story = {
  args: OLSGermanArgs,
  play: commonHierarchyWidgetPlay
};

export const SkosmosAgrovocGerman: Story = {
  args: SkosmosAgrovocGermanArgs,
  play: commonHierarchyWidgetPlay
};