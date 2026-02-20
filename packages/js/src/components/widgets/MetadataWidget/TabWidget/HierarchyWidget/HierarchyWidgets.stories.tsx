import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  HierarchyWidget,
  HierarchyWidgetProps,
} from "@ts4nfdi/terminology-service-suite/src";
import { HierarchyDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import {
  ClassHierarchyArgs,
  commonHierarchyWidgetPlay,
  CompareHierarchiesArgs,
  CompareHierarchiesSubEntityArgs,
  HierarchyWidgetStoryArgs,
  HierarchyWidgetStoryArgTypes,
  IncludeObsoleteEntitiesArgs,
  IndividualHierarchyArgs,
  IndividualRootsArgs,
  LargeHierarchyArgs,
  OLS3HierarchyArgs,
  OLSGermanArgs,
  OntoportalHierarchyArgs,
  PreferredRootsArgs,
  PropertyRootsArgs,
  SagePubHierarchyArgs,
  SkosHierarchyArgs,
  SkosmosAgrovocGermanArgs,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/TabWidget/HierarchyWidget/HierarchyWidgetStories";
import "../../../../../../../react/src/style/ts4nfdiStyles/ts4nfdiHierarchyStyle.css";
import "./index";

let counter = 0;

function getIncNum() {
  return counter++;
}

// @ts-ignore
const meta: Meta<HierarchyWidgetProps> = {
  title: "Hierarchy and Graph/HierarchyWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: HierarchyDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: HierarchyWidgetProps) => {
    const num = getIncNum();

    return `        
<div id="hierarchy_semlookp_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createHierarchy(
    {
        apiUrl:"${args.apiUrl}",
        apiKey:"${args.apiKey}",
        backendType:"${args.backendType}",
        iri:"${args.iri}",
        entityType:"${args.entityType}",
        ontologyId:"${args.ontologyId}",
        includeObsoleteEntities:${args.includeObsoleteEntities},
        useLegacy:${args.useLegacy},
        preferredRoots:${args.preferredRoots},
        keepExpansionStates:${args.keepExpansionStates},
        showSiblingsOnInit:${args.showSiblingsOnInit},
        onNavigateToEntity:${args.onNavigateToEntity},
        onNavigateToOntology:${args.onNavigateToOntology},
        hierarchyWrap:${args.hierarchyWrap},
        showHeader:${args.showHeader},
        showComparisonTitleInHeader:${args.showComparisonTitleInHeader},
        targetIri:"${args.targetIri}",
        className:"${args.className}",
        parameter:"${args.parameter}"
    },
    document.querySelector('#hierarchy_semlookp_container_${num}')
)
</script>
        `;
  },
  argTypes: HierarchyWidgetStoryArgTypes,
  args: HierarchyWidgetStoryArgs,
} satisfies Meta<typeof HierarchyWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ClassHierarchy: Story = {
  args: { ...ClassHierarchyArgs, className: "ts4nfdi-hierarchy-style" },
  play: commonHierarchyWidgetPlay,
};

export const IndividualHierarchy: Story = {
  args: { ...IndividualHierarchyArgs, className: "ts4nfdi-hierarchy-style" },
  play: commonHierarchyWidgetPlay,
};

export const PreferredRoots: Story = {
  args: { ...PreferredRootsArgs, className: "ts4nfdi-hierarchy-style" },
  play: commonHierarchyWidgetPlay,
};

export const IncludeObsoleteEntities: Story = {
  args: {
    ...IncludeObsoleteEntitiesArgs,
    className: "ts4nfdi-hierarchy-style",
  },
  play: commonHierarchyWidgetPlay,
};

export const PropertyRoots: Story = {
  args: { ...PropertyRootsArgs, className: "ts4nfdi-hierarchy-style" },
  play: commonHierarchyWidgetPlay,
};

export const IndividualRoots: Story = {
  args: { ...IndividualRootsArgs, className: "ts4nfdi-hierarchy-style" },
  play: commonHierarchyWidgetPlay,
};

export const LargeHierarchy: Story = {
  args: { ...LargeHierarchyArgs, className: "ts4nfdi-hierarchy-style" },
  play: commonHierarchyWidgetPlay,
};

export const SkosHierarchy: Story = {
  args: { ...SkosHierarchyArgs, className: "ts4nfdi-hierarchy-style" },
  play: commonHierarchyWidgetPlay,
};

export const SagePubHierarchy: Story = {
  args: { ...SagePubHierarchyArgs, className: "ts4nfdi-hierarchy-style" },
  play: commonHierarchyWidgetPlay,
};

export const OntoportalHierarchy: Story = {
  args: { ...OntoportalHierarchyArgs, className: "ts4nfdi-hierarchy-style" },
  play: commonHierarchyWidgetPlay,
};

export const OLS3Hierarchy: Story = {
  args: { ...OLS3HierarchyArgs, className: "ts4nfdi-hierarchy-style" },
  play: commonHierarchyWidgetPlay,
};

export const OLSGerman: Story = {
  args: { ...OLSGermanArgs, className: "ts4nfdi-hierarchy-style" },
  play: commonHierarchyWidgetPlay,
};

export const SkosmosAgrovocGerman: Story = {
  args: { ...SkosmosAgrovocGermanArgs, className: "ts4nfdi-hierarchy-style" },
  play: commonHierarchyWidgetPlay,
};

export const CompareHierarchies: Story = {
  args: { ...CompareHierarchiesArgs, className: "ts4nfdi-hierarchy-style" },
  play: commonHierarchyWidgetPlay,
};

export const CompareHierarchiesSubEntity: Story = {
  args: {
    ...CompareHierarchiesSubEntityArgs,
    className: "ts4nfdi-hierarchy-style",
  },
  play: commonHierarchyWidgetPlay,
};
