import {
  ClassHierarchyArgs,
  commonHierarchyWidgetPlay,
  HierarchyWidgetStoryArgs,
  HierarchyWidgetStoryArgTypes,
  IncludeObsoleteEntitiesArgs,
  IndividualHierarchyArgs, IndividualRootsArgs, LargeHierarchyArgs, OLS3HierarchyArgs, OntoportalHierarchyArgs,
  PreferredRootsArgs,
  PropertyRootsArgs, SagePubHierarchyArgs, SkosHierarchyArgs
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/TabWidget/HierarchyWidget/HierarchyWidgetStories";
import './index'
import { HierarchyDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { HierarchyWidget, HierarchyWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import type { Meta, StoryObj } from "@storybook/react-vite";


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
        onNavigateToOntology:${args.onNavigateToOntology}
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