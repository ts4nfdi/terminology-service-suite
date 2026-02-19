import type { Meta, StoryObj } from "@storybook/react-vite";
import { manuallyEmbedOnNavigate } from "../../../app/util";
import { MetadataDescription } from "../../../app/widgetDescriptions";
import {
  apiArgType,
  classNameArgType,
  colorFirstArgType,
  colorSecondArgType,
  copyButtonArgType,
  defaultValueArgType,
  descTextArgType,
  edgeLabelArgType,
  entityTypeArgType,
  externalIconArgType,
  graphHierarchyArgType,
  graphTargetIriArgType,
  hierarchyKeepExpansionStatesArgType,
  hierarchyPreferredRootsArgType,
  hierarchyShowSiblingsOnInitArgType,
  hierarchyTargetIriArgType,
  hierarchyWrapArgType,
  iriArgType,
  iriTextArgType,
  onNavigateToDisambiguateArgType,
  onNavigateToEntityArgType,
  onNavigateToOntologyArgType,
  onNodeClickArgType,
  ontologyIdArgType,
  parameterArgType,
  rootWalkArgType,
  termLinkArgType,
  titleTextArgType,
  urlPrefixArgType,
  useLegacyArgType,
} from "../../../stories/storyArgs";
import { MetadataWidget } from "./MetadataWidget";
import {
  commonMetadataWidgetPlay,
  DefinedByAlsoAppearsInWidgetsArgs,
  DefiningOntologyUnavailableArgs,
  HiddenTabsArgs,
  MetadataWidget1Args,
  MetadataWidgetStoryArgs,
  MetadataWidgetStoryArgTypes,
  OLS3Args,
  OLS4V1Args,
  OLS4V2Args,
  SelectingDefiningOntologyArgs,
  TermAsLinkArgs,
} from "./MetadataWidgetStories";

const meta = {
  title: "Entity Metadata/MetadataWidget",
  component: MetadataWidget,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate,
      },
      description: {
        component: MetadataDescription,
      },
    },
  },
  argTypes: {
    ...MetadataWidgetStoryArgTypes,
    // API & Entity group
    api: { ...apiArgType.api, table: { category: "API & Entity" } },
    iri: { ...iriArgType.iri, table: { category: "API & Entity" } },
    entityType: {
      ...entityTypeArgType.entityType,
      table: { category: "API & Entity" },
    },
    ontologyId: {
      ...ontologyIdArgType.ontologyId,
      table: { category: "API & Entity" },
    },
    // Navigation
    onNavigateToEntity: {
      ...onNavigateToEntityArgType.onNavigateToEntity,
      table: { category: "Navigation" },
    },
    onNavigateToOntology: {
      ...onNavigateToOntologyArgType.onNavigateToOntology,
      table: { category: "Navigation" },
    },
    onNavigateToDisambiguate: {
      ...onNavigateToDisambiguateArgType.onNavigateToDisambiguate,
      table: { category: "Navigation" },
    },
    // Hierarchy settings
    hierarchyPreferredRoots: {
      ...hierarchyPreferredRootsArgType.hierarchyPreferredRoots,
      table: { category: "Hierarchy" },
    },
    hierarchyKeepExpansionStates: {
      ...hierarchyKeepExpansionStatesArgType.hierarchyKeepExpansionStates,
      table: { category: "Hierarchy" },
    },
    hierarchyShowSiblingsOnInit: {
      ...hierarchyShowSiblingsOnInitArgType.hierarchyShowSiblingsOnInit,
      table: { category: "Hierarchy" },
    },
    hierarchyTargetIri: {
      ...hierarchyTargetIriArgType.hierarchyTargetIri,
      table: { category: "Hierarchy" },
    },
    hierarchyWrap: {
      ...hierarchyWrapArgType.hierarchyWrap,
      table: { category: "Hierarchy" },
    },
    // Graph settings
    graphTargetIri: {
      ...graphTargetIriArgType.graphTargetIri,
      table: { category: "Graph" },
    },
    graphHierarchy: {
      ...graphHierarchyArgType.graphHierarchy,
      table: { category: "Graph" },
    },
    rootWalk: {
      ...rootWalkArgType.graphTargetIri,
      table: { category: "Graph" },
    },
    edgeLabel: {
      ...edgeLabelArgType.graphTargetIri,
      table: { category: "Graph" },
    },
    onNodeClick: {
      ...onNodeClickArgType.graphTargetIri,
      table: { category: "Graph" },
    },
    // Tabs visibility
    altNamesTab: { table: { category: "Tabs" } },
    hierarchyTab: { table: { category: "Tabs" } },
    crossRefTab: { table: { category: "Tabs" } },
    terminologyInfoTab: { table: { category: "Tabs" } },
    graphViewTab: { table: { category: "Tabs" } },
    termDepictionTab: { table: { category: "Tabs" } },
    // Other
    useLegacy: { ...useLegacyArgType.useLegacy, table: { category: "Other" } },
    parameter: { ...parameterArgType.parameter, table: { category: "Other" } },
    className: { ...classNameArgType.className, table: { category: "Other" } },
    // Breadcrumb
    colorFirst: { ...colorFirstArgType, table: { category: "Breadcrumb" } },
    colorSecond: { ...colorSecondArgType, table: { category: "Breadcrumb" } },
    // Title and Description
    descText: {
      ...descTextArgType,
      table: { category: "Title and Description" },
    },
    titleText: {
      ...titleTextArgType,
      table: { category: "Title and Description" },
    },
    defaultValue: {
      ...defaultValueArgType,
      table: { category: "Title and Description" },
    },
    iriText: {
      ...iriTextArgType.iriText,
      table: { category: "Title and Description" },
    },
    externalIcon: {
      ...externalIconArgType,
      table: { category: "Title and Description" },
    },
    urlPrefix: {
      ...urlPrefixArgType,
      table: { category: "Title and Description" },
    },
    copyButton: {
      ...copyButtonArgType,
      table: { category: "Title and Description" },
    },
    termLink: {
      ...termLinkArgType,
      table: { category: "Title and Description" },
    },
  },
  args: MetadataWidgetStoryArgs,
} satisfies Meta<typeof MetadataWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MetadataWidget1: Story = {
  name: "Metadata Widget",
  args: MetadataWidget1Args,
  play: commonMetadataWidgetPlay,
};

export const OLS3: Story = {
  name: "OLS3",
  args: OLS3Args,
  play: commonMetadataWidgetPlay,
};

export const OLS4V1: Story = {
  name: "OLS4 V1",
  args: OLS4V1Args,
  play: commonMetadataWidgetPlay,
};

export const OLS4V2: Story = {
  name: "OLS4 V2",
  args: OLS4V2Args,
  play: commonMetadataWidgetPlay,
};

export const SelectingDefiningOntology: Story = {
  args: SelectingDefiningOntologyArgs,
  play: commonMetadataWidgetPlay,
};

export const DefiningOntologyUnavailable: Story = {
  args: DefiningOntologyUnavailableArgs,
  play: commonMetadataWidgetPlay,
};

export const DefinedByAlsoAppearsInWidgets: Story = {
  args: DefinedByAlsoAppearsInWidgetsArgs,
  play: commonMetadataWidgetPlay,
};

export const HiddenTabs: Story = {
  args: HiddenTabsArgs,
  play: commonMetadataWidgetPlay,
};

export const TermAsLink: Story = {
  args: TermAsLinkArgs,
  play: commonMetadataWidgetPlay,
};
